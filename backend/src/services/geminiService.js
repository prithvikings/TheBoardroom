import { GoogleGenerativeAI } from "@google/generative-ai";
import AppError from "../utils/appError.js";

// Initialize Gemini
// 1. FIXED: Hardcoded "2.5" to "1.5-flash" (The real model)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  // 2. SAFETY SETTINGS: We lower the block threshold so it can be "ruthless"
  // without triggering false safety positives.
  safetySettings: [
    {
      category: "HARM_CATEGORY_HARASSMENT",
      threshold: "BLOCK_ONLY_HIGH",
    },
  ],
});

export const generateRoast = async (ideaData) => {
  if (!process.env.GEMINI_API_KEY) {
    throw new AppError("Gemini API Key is missing on server.", 500);
  }

  const { pitch, problem, solution, audience } = ideaData;

  // 3. UPDATED PROMPT: Added Competitors and Pivots
  const prompt = `
    You are a ruthless, cynical, high-net-worth Venture Capitalist. 
    Analyze this startup pitch. 
    
    INPUT DATA:
    - Pitch: "${pitch}"
    - Problem: "${problem}"
    - Solution: "${solution}"
    - Target Audience: "${audience}"
    
    TASK:
    1. Roast: Destroy the founder's confidence. Be funny but accurate.
    2. Score: Rate 0-100 (Be harsh. 100 is impossible).
    3. Competitors: Identify 3 REAL companies doing this better. Include their Website URL if possible.
    4. Pivots: Suggest 3 concrete ways to change the business model to actually make money.
    
    OUTPUT FORMAT:
    Return PURE JSON only. No markdown formatting. No backticks.
    {
      "roast": "String",
      "score": Number,
      "verdict": "String (3 words max)",
      "competitors": [
        { "name": "String", "url": "String", "reason": "Why they win" }
      ],
      "pivots": [
        { "type": "String (e.g. B2C to B2B)", "idea": "String" }
      ]
    }
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    // Clean up markdown formatting
    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new AppError(
      "Failed to generate roast. The AI is judging you silently.",
      500
    );
  }
};
