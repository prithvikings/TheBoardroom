import { useState, useRef, useEffect } from "react";
import {
  Send,
  Briefcase,
  AlertCircle,
  ArrowLeft,
  ShieldAlert,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const VCInterrogation = () => {
  // Mock Chat History
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      persona: "The Shark",
      text: "Let's cut the pleasantries. What makes you think you can enter a saturated market like AI wrappers without getting crushed by the incumbents?",
      timestamp: "2 mins ago",
    },
    {
      id: 2,
      sender: "user",
      text: "We aren't just another wrapper. Our proprietary context-awareness layer reduces hallucination rates by 40% compared to raw models. That's our moat.",
      timestamp: "1 min ago",
    },
    {
      id: 3,
      sender: "ai",
      persona: "The Shark",
      text: "That's a nice technical claim, but users don't buy 'context layers', they buy solutions. Your CAC is $50, but your LTV is barely $60. Why should I believe you won't bleed cash until you die?",
      timestamp: "Just now",
      isHighlight: true, // Gold border effect
    },
  ]);

  const [lives, setLives] = useState(3);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add User Message
    const newMessage = {
      id: messages.length + 1,
      sender: "user",
      text: inputText,
      timestamp: "Just now",
    };

    setMessages([...messages, newMessage]);
    setInputText("");

    // Simulate AI Response (In Phase 2, this is real API)
    setTimeout(() => {
      // Logic to deduct life if answer is bad (Mocked for now)
    }, 1000);
  };

  return (
    <div className="flex h-[calc(100vh-100px)] flex-col gap-6">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-executive-gold mb-1 uppercase tracking-widest">
            <AlertCircle size={12} /> Session #402: Pre-Seed Validation
          </div>
          <h2 className="text-2xl font-serif font-bold text-white">
            The Boardroom: Interrogation
          </h2>
        </div>

        {/* Lives Counter */}
        <div className="flex items-center gap-4 bg-boardroom-card border border-white/10 px-4 py-2 rounded-lg">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            Lives Remaining
          </span>
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <Briefcase
                key={i}
                size={20}
                className={
                  i < lives
                    ? "text-executive-gold fill-executive-gold"
                    : "text-gray-700"
                }
              />
            ))}
          </div>
        </div>

        <Link
          to="/dashboard"
          className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/5 transition-colors"
        >
          <ArrowLeft size={16} className="inline mr-2" /> Walk Away
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full overflow-hidden">
        {/* LEFT PANEL: The Adversary Profile */}
        <div className="hidden lg:block lg:col-span-1 space-y-6">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-boardroom-card">
            <img
              src="https://ui-avatars.com/api/?name=The+Shark&background=0D0D0D&color=fff&size=400"
              alt="Persona"
              className="w-full h-48 object-cover opacity-50"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-boardroom-black to-transparent p-4">
              <span className="bg-executive-gold text-boardroom-black text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                THE ADVERSARY
              </span>
              <h3 className="text-xl font-bold text-white">The Shark</h3>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-l-2 border-executive-gold pl-4">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                Investment Thesis
              </p>
              <p className="text-sm italic text-gray-400">
                "High risk, immediate returns. I don't fund dreams, I fund
                revenue. If you can't prove your numbers in 30 seconds, get
                out."
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                Strategy
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded bg-white/5 text-xs text-gray-300 border border-white/10">
                  Aggressive
                </span>
                <span className="px-2 py-1 rounded bg-white/5 text-xs text-gray-300 border border-white/10">
                  Metrics-First
                </span>
                <span className="px-2 py-1 rounded bg-white/5 text-xs text-gray-300 border border-white/10">
                  Impatient
                </span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Board Confidence</span>
                <span className="text-executive-gold">62%</span>
              </div>
              <div className="h-1 w-full bg-white/10 rounded-full">
                <div className="h-full bg-executive-gold w-[62%] rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Patience</span>
                <span className="text-alert-red">Low</span>
              </div>
              <div className="h-1 w-full bg-white/10 rounded-full">
                <div className="h-full bg-alert-red w-[25%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER: The Chat Area */}
        <div className="lg:col-span-3 flex flex-col h-full bg-boardroom-dark rounded-xl border border-white/10 relative">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                {msg.sender === "ai" && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                      <Briefcase size={12} />
                    </div>
                    <span className="text-xs font-bold text-gray-400">
                      {msg.persona}
                    </span>
                    <span className="text-xs text-gray-600">
                      {msg.timestamp}
                    </span>
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-xl p-4 text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-white/5 border border-white/10 text-gray-200"
                      : msg.isHighlight
                      ? "bg-boardroom-card border border-executive-gold text-white shadow-[0_0_15px_rgba(255,215,0,0.1)]"
                      : "bg-boardroom-card border border-white/10 text-gray-300"
                  }`}
                >
                  {msg.isHighlight && (
                    <span className="text-[10px] bg-executive-gold text-boardroom-black font-bold px-1 rounded mr-2 uppercase">
                      Interrogating
                    </span>
                  )}
                  {msg.text.split("Your CAC is $50").map((part, i) =>
                    i === 0 ? (
                      part
                    ) : (
                      <span key={i} className="text-executive-gold font-bold">
                        Your CAC is $50{part}
                      </span>
                    )
                  )}
                  {/* Hardcoded highlight for demo match */}
                </div>

                {msg.sender === "user" && (
                  <span className="text-xs text-gray-600 mt-2 flex items-center gap-1">
                    YOU <div className="h-4 w-4 rounded-full bg-white/10"></div>
                  </span>
                )}
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/10 bg-boardroom-black/50 rounded-b-xl">
            <div className="relative">
              <div className="absolute top-0 right-0 -mt-10 mr-4 flex items-center gap-2 text-xs text-gray-500">
                <ShieldAlert size={12} />
                Get Hint (-$5k equity)
              </div>
              <form onSubmit={handleSendMessage}>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage(e);
                    }
                  }}
                  placeholder="Defend your metrics here..."
                  className="w-full bg-boardroom-dark border border-white/10 rounded-lg p-4 text-white placeholder-gray-600 focus:outline-none focus:border-executive-gold focus:ring-1 focus:ring-executive-gold resize-none h-24 scrollbar-hide"
                />
                <div className="absolute bottom-4 right-4 flex items-center gap-4">
                  <span className="text-xs text-gray-600 font-mono">
                    {280 - inputText.length} chars remaining
                  </span>
                  <button
                    type="submit"
                    disabled={!inputText.trim()}
                    className="bg-executive-gold text-boardroom-black px-4 py-2 rounded font-bold text-sm flex items-center gap-2 hover:bg-executive-gold-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Submit Defense <Send size={14} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VCInterrogation;
