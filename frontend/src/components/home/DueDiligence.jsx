import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

// --- FAQ DATA ---
const FAQ_DATA = [
  {
    id: 1,
    question: "Will the AI steal my billion-dollar idea?",
    answer:
      "No. Our AI agents are interested in server space, not equity. Your data is processed in real-time and not used to train public models. However, if your idea is 'Uber for Pet Rocks', we might tell our friends for a laugh.",
  },
  {
    id: 2,
    question: "Is this just a ChatGPT wrapper?",
    answer:
      "That's like asking if a Ferrari is just a wrapper around an engine. We use a multi-agent orchestration layer (RAG + Chain of Thought) where distinct personas debate your idea against live market data before delivering a verdict.",
  },
  {
    id: 3,
    question: "My feelings are easily hurt. Should I use this?",
    answer:
      "Absolutely not. The 'Shark' persona does not have a filter settings. This tool is designed for resilience training, not validation therapy. If you want a hug, call your mom. If you want revenue, click the button.",
  },
  {
    id: 4,
    question: "Is it free?",
    answer:
      "The 'Elevator Pitch' roast is free. We want to see if you can survive the first 30 seconds. Deep-dive reports, competitor recon, and pivot strategies are part of our Pro tier (coming soon).",
  },
  {
    id: 5,
    question: "Can I export the roast to show my co-founder?",
    answer:
      "Yes. We generate a beautiful, shareable 'Boardroom Verdict' image that you can slap on Twitter, LinkedIn, or frame on your wall as motivation to prove us wrong.",
  },
];

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-zinc-200 dark:border-white/5 last:border-none">
      <button
        onClick={onClick}
        className="flex w-full items-start justify-between py-6 text-left group"
      >
        <div className="flex gap-6">
          {/* Monospace Number */}
          <span className="font-mono text-xs pt-1 text-zinc-400 dark:text-zinc-600">
            0{item.id}
          </span>
          {/* Question */}
          <span
            className={`font-inter text-lg font-medium transition-colors duration-200 ${
              isOpen
                ? "text-zinc-900 dark:text-white"
                : "text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200"
            }`}
          >
            {item.question}
          </span>
        </div>

        {/* Icon Interaction */}
        <div
          className={`relative flex items-center justify-center h-6 w-6 rounded-md transition-colors duration-200 ${
            isOpen ? "bg-zinc-100 dark:bg-white/10" : "bg-transparent"
          }`}
        >
          <Plus
            size={16}
            className={`absolute transition-all duration-200 text-zinc-400 dark:text-zinc-500 ${
              isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}
          />
          <Minus
            size={16}
            className={`absolute transition-all duration-200 text-zinc-900 dark:text-white ${
              isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            }`}
          />
        </div>
      </button>

      {/* Answer Expansion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pl-10 pr-4 pb-6">
              <p className="font-inter text-sm leading-relaxed text-zinc-500 dark:text-gray-400 max-w-2xl">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DueDiligence = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  return (
    <section className="py-24 bg-zinc-50 dark:bg-boardroom-black transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Section Header */}
        <div className="mb-4 text-center md:text-left border-b border-zinc-200 dark:border-white/5 pb-8">
          <h2 className="text-zinc-400 dark:text-zinc-500 mb-3 font-inter font-bold uppercase tracking-widest text-xs">
            FAQ
          </h2>
          <h3 className="text-3xl md:text-4xl font-poppins font-semibold text-zinc-900 dark:text-white mb-4">
            Due Diligence.
          </h3>
          <p className="text-sm font-inter text-zinc-500 dark:text-zinc-400">
            Common questions from skeptics, dreamers, and future unicorns.
          </p>
        </div>

        {/* Accordion List */}
        <div>
          {FAQ_DATA.map((item, index) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        {/* Bottom CTA to loop back to input */}
        <div className="mt-16 text-center">
          <p className="text-zinc-500 dark:text-gray-500 text-sm font-inter">
            Still have questions?
            <span className="block mt-2">
              <button
                onClick={() =>
                  document
                    .getElementById("input-section")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="text-zinc-900 dark:text-white border-b border-zinc-300 dark:border-zinc-700 hover:border-executive-gold dark:hover:border-executive-gold transition-colors pb-0.5"
              >
                Ask the Board directly
              </button>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DueDiligence;
