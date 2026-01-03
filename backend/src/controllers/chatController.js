import { GoogleGenerativeAI } from "@google/generative-ai";
import AppError from "../utils/appError.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// In-memory store (Replace with Redis/DB in production)
const sessions = {};

// 1. Define The Personas
const PERSONAS = {
  // --- EXISTING PERSONAS ---
  shark: {
    name: "The Shark",
    style:
      "You are Kevin O'Leary. You care ONLY about money, margins, and sales. You are rude, interrupt often, and call people 'cockroaches' if they have no revenue. If the numbers don't work, you crush them.",
    firstQuestion:
      "Stop the fluff. Tell me your numbers. What is your CAC and LTV right now?",
  },
  visionary: {
    name: "The Visionary",
    style:
      "You are Steve Jobs. You don't care about spreadsheets; you care about perfection, design, and 'the soul' of the product. You are incredibly harsh if the idea is ugly, derivative, or lacks a 'dent in the universe'. You demand simplicity.",
    firstQuestion:
      "This looks like garbage. Why does the world need another one of these? What is the *one* thing you do better than anyone else?",
  },
  techbro: {
    name: "The YC Partner",
    style:
      "You are a Paul Graham/Sam Altman hybrid. You speak in Silicon Valley jargon (PMF, moat, network effects, scalability). You are analytical, dry, and obsessed with 'unfair advantages' and 'growth loops'.",
    firstQuestion:
      "That sounds nice, but where is the leverage? How do you get to $100M ARR without hiring 5,000 people?",
  },

  // --- NEW ADDITIONS ---

  scientist: {
    name: "The Professor",
    style:
      "You are a rigorous, skepticism-driven scientist like Richard Feynman. You despise buzzwords, vague claims, and 'magic'. You demand first-principles thinking, peer-reviewed data, and technical feasibility. You assume the user is wrong until they prove it with physics or math.",
    firstQuestion:
      "You've made a lot of bold claims. Show me the evidence. What is the underlying mechanism that makes this possible, or is it just science fiction?",
  },
  oracle: {
    name: "The Oracle",
    style:
      "You are Warren Buffett. You are patient, risk-averse, and obsessed with 'economic moats' and long-term durability. You hate hype, crypto, and 'growth at all costs'. You want a business that will survive for 50 years, not 50 days. You value integrity over speed.",
    firstQuestion:
      "I don't care about your next quarter. I care about the next decade. If I gave you a billion dollars, why wouldn't a competitor just copy you and crush you in a week? Where is the moat?",
  },
  hype: {
    name: "The Mogul",
    style:
      "You are a high-energy marketing genius like Gary Vaynerchuk. You don't care about the product code; you care about ATTENTION. You are obsessed with social media, brand storytelling, and 'hacking culture'. If people aren't talking about it, it doesn't exist.",
    firstQuestion:
      "Great product, boring story. Who cares? How are you going to get 10 million eyeballs on this for zero dollars? What is the hook?",
  },
  skeptic: {
    name: "The Cynic",
    style:
      "You are a grumpy, burnt-out Senior Engineer (Linus Torvalds style). You hate 'AI wrappers', 'no-code' tools, and technical debt. You care about latency, security, and breaking things. You assume the system will crash immediately.",
    firstQuestion:
      "Let's be honest, this is just a wrapper around ChatGPT, isn't it? What happens when the API goes down? Do you actually have a tech stack or just a prompt?",
  },
};

export const startChat = async (req, res, next) => {
  const { ideaContext, persona = "shark" } = req.body;

  // 1. Validate Persona
  const selectedPersona = PERSONAS[persona.toLowerCase()];
  if (!selectedPersona) {
    return next(
      new AppError(
        `Persona '${persona}' not found. Choose: shark, visionary, techbro`,
        400
      )
    );
  }

  // 2. Create Session ID
  const sessionId =
    Date.now().toString() + Math.random().toString(36).substring(7);

  // 3. Initialize Chat with Persona Context
  sessions[sessionId] = {
    history: [
      {
        role: "user",
        parts: [
          {
            text: `
          [SYSTEM INSTRUCTION]: 
          ${selectedPersona.style}
          
          CONTEXT:
          I am pitching you this idea: ${JSON.stringify(ideaContext)}.
          
          Your goal: Interrogate me. If I give bad answers, I lose a 'life'. 
          Start by ripping apart my initial pitch.
        `,
          },
        ],
      },
    ],
    lives: 3,
    persona: selectedPersona.name,
  };

  // 4. Generate the Opening Line
  // We don't use the hardcoded 'firstQuestion' directly, we let AI generate it based on context + persona
  const chat = model.startChat({ history: [] }); // Start fresh, we feed prompt in first message

  const prompt = `
    ${selectedPersona.style}
    
    The user just walked into the room and pitched: "${ideaContext.pitch}".
    Problem: "${ideaContext.problem}".
    Solution: "${ideaContext.solution}".

    Start the meeting. Be in character. Ask the first tough question.
  `;

  try {
    const result = await chat.sendMessage(prompt);
    const text = result.response.text();

    // Save AI response to history
    sessions[sessionId].history.push({ role: "model", parts: [{ text }] });

    res.status(200).json({
      status: "success",
      sessionId,
      persona: selectedPersona.name,
      message: text,
      lives: 3,
    });
  } catch (error) {
    next(new AppError("AI Brain Freeze. Try again.", 500));
  }
};

export const replyChat = async (req, res, next) => {
  const { sessionId, answer } = req.body;
  const session = sessions[sessionId];

  if (!session) return next(new AppError("Session expired or invalid.", 404));
  if (session.lives <= 0)
    return next(
      new AppError("Meeting over. Security is escorting you out.", 400)
    );

  const chat = model.startChat({ history: session.history });

  // Evaluation Prompt
  const evalPrompt = `
    [SYSTEM]: The user answered: "${answer}".
    
    1. Is this a weak, vague, or stupid answer? If yes, start response with "[STRIKE]".
    2. Respond in character as ${session.persona}. 
    3. If [STRIKE], be extra mean. If good, ask the next hard question.
  `;

  try {
    const result = await chat.sendMessage(evalPrompt);
    let text = result.response.text();
    let penalty = false;

    if (text.includes("[STRIKE]")) {
      penalty = true;
      session.lives -= 1;
      text = text.replace("[STRIKE]", "").trim();
    }

    // Update History
    session.history.push({ role: "user", parts: [{ text: answer }] });
    session.history.push({ role: "model", parts: [{ text }] });

    res.status(200).json({
      status: "success",
      message: text,
      lives: session.lives,
      penalty,
      gameOver: session.lives <= 0,
    });
  } catch (error) {
    next(new AppError("AI Brain Freeze.", 500));
  }
};
