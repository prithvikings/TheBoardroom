import { useState, useEffect } from "react";
import {
  Megaphone,
  AlertTriangle,
  Lightbulb,
  Users,
  Castle,
  Flame,
  Info,
  X,
  AlertCircle, // Added for the toast icon
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react"; // Added AnimatePresence
import { useNavigate } from "react-router-dom";

const IdeaInputSection = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    pitch: "",
    problem: "",
    solution: "",
    audience: "",
    moat: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- TOAST STATE ---
  const [toast, setToast] = useState({ show: false, message: "" });

  // Character limit for the pitch
  const PITCH_LIMIT = 280;

  // --- FUNNY VALIDATION MESSAGES ---
  const errorRoasts = [
    "Silence is golden, but it won't get you funded. Type something.",
    "The Board refuses to roast a blank page. Give us data.",
    "You pitch like a mime. Use your words.",
    "Error 404: Business Idea not found.",
    "Did you forget the idea? It happens.",
    "We need at least a Pitch and a Problem. We aren't psychics.",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "pitch" && value.length > PITCH_LIMIT) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // VALIDATION CHECK
    if (!formData.pitch || !formData.problem) {
      // Pick a random insult
      const randomRoast =
        errorRoasts[Math.floor(Math.random() * errorRoasts.length)];

      // Trigger Toast
      setToast({ show: true, message: randomRoast });

      // Auto-hide after 3 seconds
      setTimeout(() => setToast({ show: false, message: "" }), 15000);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      navigate("/analyzing");
    }, 1000);
  };

  return (
    <section
      id="input-section"
      className="relative py-24 bg-zinc-50 dark:bg-boardroom-black"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-roboto font-bold mb-4 text-zinc-900 dark:text-white">
            The Floor is Yours.
          </h2>
          <p className="text-lg max-w-xl leading-wide text-zinc-600 dark:text-gray-400">
            Input your business parameters below. Our AI personas will dissect
            them mercilessly to find the flaws before the market does.
          </p>
        </div>

        {/* The Pitch Deck Form */}
        <div className="flex flex-col gap-6">
          {/* 1. The Elevator Pitch (Full Width) */}
          <div
            className="group relative rounded-xl p-6 focus-within:border-executive-gold/50 
            /* Light Mode */
            bg-white border border-zinc-200 hover:border-zinc-300
            /* Dark Mode */
            dark:bg-white/5 dark:border-white/10 dark:hover:border-white/20 "
          >
            <div className="flex items-center gap-2 mb-4 text-executive-gold font-bold text-xs tracking-widest uppercase font-inter">
              <Megaphone size={16} />
              The Elevator Pitch
            </div>
            <textarea
              name="pitch"
              value={formData.pitch}
              onChange={handleChange}
              placeholder="Convince us in 280 characters..."
              className="w-full bg-transparent text-sm outline-none resize-none h-24 font-poppins
              /* Light Mode Text */
              text-zinc-900 placeholder:text-zinc-400
              /* Dark Mode Text */
              dark:text-gray-200 dark:placeholder:text-gray-600"
            />
            <div className="absolute bottom-4 right-6 text-xs font-mono font-medium text-gray-400 dark:text-gray-500">
              <span
                className={
                  formData.pitch.length > 250
                    ? "text-red-500 dark:text-red-400"
                    : "text-zinc-400 dark:text-gray-500"
                }
              >
                {formData.pitch.length}
              </span>
              / {PITCH_LIMIT}
            </div>
          </div>

          {/* Grid Layout for Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 2. The Problem */}
            <div
              className="rounded-xl p-5  focus-within:border-executive-gold/50
              bg-white border border-zinc-200 hover:border-zinc-300
              dark:bg-white/5 dark:border-white/10 dark:hover:border-white/20 "
            >
              <div className="flex items-center gap-2 mb-2 text-sm font-inter text-zinc-500 dark:text-gray-400">
                <span className="text-executive-gold">
                  <AlertTriangle size={16} />
                </span>
                The Problem
              </div>
              <input
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                type="text"
                placeholder="What pain are you solving?"
                className="w-full bg-transparent text-sm outline-none
                text-zinc-900 placeholder:text-zinc-400
                dark:text-gray-200 dark:placeholder:text-gray-600"
              />
            </div>

            {/* 3. The Solution */}
            <div
              className="rounded-xl p-5  focus-within:border-executive-gold/50
              bg-white border border-zinc-200 hover:border-zinc-300
              dark:bg-white/5 dark:border-white/10 dark:hover:border-white/20 "
            >
              <div className="flex items-center gap-2 mb-2 text-sm font-inter text-zinc-500 dark:text-gray-400">
                <span className="text-executive-gold">
                  <Lightbulb size={16} />
                </span>
                The Solution
              </div>
              <input
                name="solution"
                value={formData.solution}
                onChange={handleChange}
                type="text"
                placeholder="How do you solve it?"
                className="w-full bg-transparent text-sm outline-none
                text-zinc-900 placeholder:text-zinc-400
                dark:text-gray-200 dark:placeholder:text-gray-600"
              />
            </div>

            {/* 4. Target Audience */}
            <div
              className="rounded-xl p-5  focus-within:border-executive-gold/50
              bg-white border border-zinc-200 hover:border-zinc-300
              dark:bg-white/5 dark:border-white/10 dark:hover:border-white/20 "
            >
              <div className="flex items-center gap-2 mb-2 text-sm font-inter text-zinc-500 dark:text-gray-400">
                <span className="text-zinc-400 dark:text-gray-500">
                  <Users size={16} />
                </span>
                Target Audience
              </div>
              <input
                name="audience"
                value={formData.audience}
                onChange={handleChange}
                type="text"
                placeholder="Who is desperate for this?"
                className="w-full bg-transparent text-sm outline-none
                text-zinc-900 placeholder:text-zinc-400
                dark:text-gray-200 dark:placeholder:text-gray-600"
              />
            </div>

            {/* 5. The Moat */}
            <div
              className="rounded-xl p-5  focus-within:border-executive-gold/50
              bg-white border border-zinc-200 hover:border-zinc-300
              dark:bg-white/5 dark:border-white/10 dark:hover:border-white/20 "
            >
              <div className="flex items-center gap-2 mb-2 text-sm font-inter text-zinc-500 dark:text-gray-400">
                <span className="text-zinc-400 dark:text-gray-500">
                  <Castle size={16} />
                </span>
                The Moat
              </div>
              <input
                name="moat"
                value={formData.moat}
                onChange={handleChange}
                type="text"
                placeholder="Why can't Amazon just copy you?"
                className="w-full bg-transparent text-sm outline-none
                text-zinc-900 placeholder:text-zinc-400
                dark:text-gray-200 dark:placeholder:text-gray-600"
              />
            </div>
          </div>

          {/* Footer / Action */}
          <div
            className="flex flex-col md:flex-row items-center justify-between mt-8 pt-8 gap-6 border-t
            border-zinc-200 dark:border-white/10"
          >
            <div className="flex items-center gap-2 text-sm italic text-zinc-500 dark:text-gray-500">
              <Info size={16} />
              Your data is confidential, but the feedback will be brutal.
            </div>

            <motion.button
              onClick={handleSubmit}
              disabled={isSubmitting}
              whileTap={!isSubmitting ? { scale: 0.97 } : {}}
              className="
                group flex h-9 items-center justify-center gap-2 rounded-md px-4 
                text-xs font-bold uppercase tracking-wide font-inter text-[#1a1a1a]
                transition-all duration-200 ease-in-out cursor-pointer
                
                bg-executive-gold 
                border border-[#C6A32F]
                shadow-[inset_0px_1px_0px_rgba(255,255,255,0.35),0px_1px_2px_rgba(0,0,0,0.05)]
                
                hover:bg-[#F2C94C]
                disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed
              "
            >
              <span className="relative z-10">
                {isSubmitting ? "Summoning..." : "Get Roasted"}
              </span>
              {!isSubmitting && (
                <Flame
                  size={14}
                  className="fill-current text-[#1a1a1a] transition-transform duration-200 group-hover:scale-110"
                />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* --- FLOATING TOAST COMPONENT --- */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-4 py-3 rounded-lg shadow-2xl
              /* Light Mode Style: White, High Contrast */
              bg-white border border-zinc-200 text-zinc-800
              /* Dark Mode Style: Dark Glass */
              dark:bg-[#1a1a1a] dark:border-white/10 dark:text-white"
          >
            <AlertCircle size={18} className="text-red-500" />
            <span className="text-sm font-medium font-inter">
              {toast.message}
            </span>
            <button
              onClick={() => setToast({ show: false, message: "" })}
              className="ml-2 opacity-50 hover:opacity-100 cursor-pointer rounded-full bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-white p-1 transition-all duration-300"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default IdeaInputSection;
