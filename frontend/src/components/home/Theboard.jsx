import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  DollarSign,
  Zap,
  Eye,
  FlaskConical,
  ShieldCheck,
  Megaphone,
  Terminal,
  Quote,
  X, // Added Close Icon
  Fingerprint, // Added Detail Icon
} from "lucide-react";

// --- DATA CONFIGURATION (Expanded with Modal Details) ---
const PERSONAS_DATA = [
  {
    id: "shark",
    name: "The Shark",
    role: "The Investor",
    icon: DollarSign,
    hoverColor: "group-hover:text-emerald-500",
    hoverBg: "group-hover:bg-emerald-500/10",
    hoverBorder: "group-hover:border-emerald-500/50",
    // New Data for Modal
    modalGradient: "from-emerald-500/20 to-teal-500/5",
    fullBio:
      "Kevin O'Leary style investor. Ruthless about unit economics. If you don't know your CAC, LTV, or Churn Rate, the meeting is over. Values cash flow over dreams.",
    description:
      "Cares ONLY about margins and sales. If the numbers don't work, they crush you.",
    question: "Stop the fluff. What is your CAC and LTV right now?",
  },
  {
    id: "visionary",
    name: "The Visionary",
    role: "The Founder",
    icon: Eye,
    hoverColor: "group-hover:text-purple-500",
    hoverBg: "group-hover:bg-purple-500/10",
    hoverBorder: "group-hover:border-purple-500/50",
    modalGradient: "from-purple-500/20 to-indigo-500/5",
    fullBio:
      "Steve Jobs archetype. Doesn't care about spreadsheets. Cares about the 'Soul' of the product. If it's ugly, it's dead. If it's boring, it's dead.",
    description:
      "Obsessed with perfection and design. Hates derivative ideas. Demands a 'dent in the universe'.",
    question: "Why does the world need another one of these?",
  },
  {
    id: "techbro",
    name: "The YC Partner",
    role: "The Strategist",
    icon: Zap,
    hoverColor: "group-hover:text-orange-500",
    hoverBg: "group-hover:bg-orange-500/10",
    hoverBorder: "group-hover:border-orange-500/50",
    modalGradient: "from-orange-500/20 to-amber-500/5",
    fullBio:
      "The quintessential Silicon Valley optimizer. Obsessed with 'Unfair Advantages', 'Network Effects', and 'Blitzscaling'. Wants to know how you become a unicorn.",
    description:
      "Speaks in Valley jargon (PMF, Moats). Obsessed with leverage, growth loops, and scalability.",
    question: "How do you get to $100M ARR without hiring 5,000 people?",
  },
  {
    id: "scientist",
    name: "The Professor",
    role: "The Scientist",
    icon: FlaskConical,
    hoverColor: "group-hover:text-blue-500",
    hoverBg: "group-hover:bg-blue-500/10",
    hoverBorder: "group-hover:border-blue-500/50",
    modalGradient: "from-blue-500/20 to-cyan-500/5",
    fullBio:
      "Richard Feynman style skeptic. Hates marketing fluff. Wants to see the math, the physics, and the peer-reviewed data. Assumes you are wrong until proven right.",
    description:
      "Despises buzzwords. Demands first-principles thinking and technical feasibility.",
    question: "Show me the evidence. Is this physics or science fiction?",
  },
  {
    id: "oracle",
    name: "The Oracle",
    role: "The Long-Termist",
    icon: ShieldCheck,
    hoverColor: "group-hover:text-amber-500",
    hoverBg: "group-hover:bg-amber-500/10",
    hoverBorder: "group-hover:border-amber-500/50",
    modalGradient: "from-amber-500/20 to-yellow-500/5",
    fullBio:
      "Warren Buffett style value investor. Patient, boring, and rich. Hates 'Growth at all costs'. Loves 'Moats' and 'Durability'.",
    description:
      "Risk-averse. Hates hype. Wants a business that survives 50 years, not 50 days.",
    question:
      "Why wouldn't a competitor just copy you and crush you in a week?",
  },
  {
    id: "hype",
    name: "The Mogul",
    role: "The Marketer",
    icon: Megaphone,
    hoverColor: "group-hover:text-rose-500",
    hoverBg: "group-hover:bg-rose-500/10",
    hoverBorder: "group-hover:border-rose-500/50",
    modalGradient: "from-rose-500/20 to-pink-500/5",
    fullBio:
      "Gary Vaynerchuk style hype man. Product is secondary; Story is everything. If you can't get attention, you don't exist.",
    description:
      "Doesn't care about code, only ATTENTION. Obsessed with brand storytelling and hype.",
    question:
      "Great product, boring story. How do you get 10M eyeballs for $0?",
  },
  {
    id: "skeptic",
    name: "The Cynic",
    role: "The Engineer",
    icon: Terminal,
    hoverColor: "group-hover:text-zinc-500",
    hoverBg: "group-hover:bg-zinc-500/10",
    hoverBorder: "group-hover:border-zinc-500/50",
    modalGradient: "from-gray-500/20 to-zinc-500/5",
    fullBio:
      "Burnt out Senior Engineer. Hates low-code, hates AI hype, hates sloppy code. Will find the edge case that breaks your entire business.",
    description:
      "Hates 'AI wrappers' and technical debt. Assumes your system will crash immediately.",
    question:
      "Let's be honest, this is just a wrapper around ChatGPT, isn't it?",
  },
];

// --- MODAL COMPONENT (NEW) ---
const PersonaModal = ({ persona, onClose }) => {
  const Icon = persona.icon;

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white dark:bg-[#121212] shadow-2xl border border-zinc-200 dark:border-white/10"
      >
        {/* Decorative Top Gradient */}
        <div
          className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${persona.modalGradient}`}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/50 dark:bg-black/20 hover:bg-white dark:hover:bg-white/10 transition-colors z-10 cursor-pointer"
        >
          <X size={20} className="text-zinc-600 dark:text-zinc-300" />
        </button>

        <div className="relative pt-12 px-8 pb-8">
          {/* Header Section */}
          <div className="mb-6">
            <div
              className={`inline-flex items-center justify-center h-16 w-16 rounded-xl mb-4 bg-white dark:bg-[#1A1A1B] shadow-sm border border-zinc-100 dark:border-white/5`}
            >
              <Icon
                size={32}
                className={persona.hoverColor.replace("group-hover:", "")}
              />
            </div>
            <h2 className="text-2xl font-bold font-poppins text-zinc-900 dark:text-white">
              {persona.name}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <Fingerprint size={12} className="text-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                {persona.role}
              </span>
            </div>
          </div>

          {/* Bio Section */}
          <div className="mb-8">
            <h4 className="text-xs font-bold font-poppins uppercase tracking-wide text-zinc-400 mb-2">
              Dossier
            </h4>
            <p className="text-sm font-inter text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {persona.fullBio}
            </p>
          </div>

          {/* Quote Section */}
          <div className="rounded-xl bg-zinc-50 dark:bg-white/5 p-5 border border-dashed border-zinc-200 dark:border-white/10">
            <div className="flex gap-3">
              <Quote size={16} className="shrink-0 mt-1 text-zinc-400" />
              <div>
                <p className="font-medium font-inter italic text-zinc-800 dark:text-zinc-200 text-sm leading-relaxed">
                  "{persona.question}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- BOARD CARD COMPONENT (Updated with onClick) ---
const BoardCard = ({ persona, onClick }) => {
  const Icon = persona.icon;

  return (
    <motion.div
      onClick={() => onClick(persona)} // Added Click Handler
      whileHover={{ y: -2 }}
      className={`group relative flex flex-col justify-between rounded-xl border p-6 transition-all duration-300 cursor-pointer
      /* LIGHT MODE: Clean White Card */
      bg-white border-zinc-200 shadow-sm hover:shadow-md
      /* DARK MODE: Subtle Dark Card */
      dark:bg-[#151516] dark:border-white/5 dark:hover:border-white/10 dark:hover:bg-[#1A1A1B]
      /* Color Hover Effect (Border only shows on hover) */
      ${persona.hoverBorder}`}
    >
      {/* HEADER: Icon & Role */}
      <div className="flex items-start justify-between mb-6">
        {/* ICON: Starts Grey, turns Colored on Hover */}
        <div
          className={`h-10 w-10 rounded-lg flex items-center justify-center transition-colors duration-300 
          bg-zinc-100 text-zinc-400 dark:bg-white/5 dark:text-zinc-500
          ${persona.hoverBg} ${persona.hoverColor}`}
        >
          <Icon size={20} />
        </div>

        {/* ROLE: Technical Monospace Font */}
        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
          {persona.role}
        </span>
      </div>

      {/* BODY: Name & Description */}
      <div className="mb-6 flex-1">
        {/* NAME: Switched to Inter (Cleaner) */}
        <h3 className="font-inter text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
          {persona.name}
        </h3>
        {/* DESC: Lighter grey for better hierarchy */}
        <p className="text-sm font-inter text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {persona.description}
        </p>
      </div>

      {/* FOOTER: Signature Question */}
      {/* Added dashed border for technical feel */}
      <div className="mt-auto pt-4 border-t border-dashed border-zinc-200 dark:border-white/10">
        <div className="flex gap-2">
          <Quote
            size={12}
            className="shrink-0 mt-1 text-zinc-300 dark:text-zinc-600"
          />
          {/* QUESTION: Serif Italic for 'Voice' */}
          <p className="text-xs font-medium font-inter leading-snug text-zinc-600 dark:text-zinc-300">
            "{persona.question}"
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN SECTION ---
const TheBoard = () => {
  const [selectedPersona, setSelectedPersona] = useState(null);

  return (
    <section className="py-24 pb-12 bg-zinc-50 dark:bg-boardroom-black transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header - Clean & Minimal */}
        <div className="mb-16 text-center md:text-left">
          <h2
            className="flex items-center gap-2 font-poppins font-medium uppercase tracking-wide text-sm mb-2
              text-yellow-600 dark:text-executive-gold
            "
          >
            Meet the Directors
          </h2>
          <h3 className="text-3xl md:text-5xl font-poppins font-semibold text-zinc-900 dark:text-white leading-tight mb-4">
            The Board of{" "}
            <span className="font-poppins text-zinc-400 dark:text-zinc-600">
              Nightmares.
            </span>
          </h3>
          <p className="text-sm font-poppins text-zinc-600 dark:text-gray-400 max-w-xl">
            We've digitized the most difficult personalities in business. They
            don't sleep, they don't pity, and they definitely don't sign NDAs.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {PERSONAS_DATA.map((persona) => (
            <BoardCard
              key={persona.id}
              persona={persona}
              onClick={setSelectedPersona} // Pass handler
            />
          ))}

          {/* "Coming Soon" Card */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-300 dark:border-white/10 bg-transparent p-6 text-center min-h-[240px] opacity-60 hover:opacity-100 transition-opacity cursor-not-allowed">
            <span className="text-xs font-poppins uppercase tracking-widest text-zinc-400 mb-2">
              Coming Soon
            </span>
            <p className="font-inter text-lg text-zinc-500 dark:text-gray-400">
              The Regulatory
              <br />
              Bureaucrat
            </p>
          </div>
        </div>
      </div>

      {/* Modal Render Logic */}
      <AnimatePresence>
        {selectedPersona && (
          <PersonaModal
            persona={selectedPersona}
            onClose={() => setSelectedPersona(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default TheBoard;
