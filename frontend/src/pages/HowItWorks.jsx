import React from "react";
import { motion } from "motion/react";
import { ArrowRight, PenLine, Cpu, FileCheck } from "lucide-react";

// Reusable Step Card Component
const StepCard = ({ number, title, description, icon: Icon, children }) => {
  return (
    <motion.div
      className="group relative flex flex-col h-full overflow-hidden rounded-xl border transition-all duration-300
      /* Light Mode */
      bg-white border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-300
      /* Dark Mode */
      dark:bg-white/5 dark:border-white/10 dark:hover:border-white/20"
    >
      {/* Schematic Background Grid (Decoration) */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Header: Number & Icon */}
      <div className="flex items-center justify-between p-6 border-b border-zinc-100 dark:border-white/5">
        <span className="font-poppins text-3xl font-bold text-zinc-200 dark:text-white/10 group-hover:text-zinc-900 dark:group-hover:text-executive-gold transition-colors">
          {number}
        </span>
        <div className="h-8 w-8 rounded-md bg-zinc-50 dark:bg-white/10 flex items-center justify-center text-zinc-500 dark:text-gray-400">
          <Icon size={16} />
        </div>
      </div>

      {/* Body: The Visual Representation (Children) */}
      <div className="flex-1 p-6 flex items-center justify-center bg-zinc-50/50 dark:bg-white/[0.02]">
        {children}
      </div>

      {/* Footer: Text Content */}
      <div className="p-6 border-t border-zinc-100 dark:border-white/5 bg-white dark:bg-transparent relative z-10">
        <h3 className="font-poppins text-lg font-medium text-zinc-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-xs text-zinc-500 dark:text-gray-400 leading-normal font-inter">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-24 pt-12 bg-zinc-50 dark:bg-boardroom-black transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-3xl">
              <h2 className="text-yellow-600 dark:text-executive-gold mb-3 font-inter font-bold uppercase tracking-widest text-xs">
                The Process
              </h2>
              <h3 className="text-3xl md:text-5xl font-poppins font-semibold text-zinc-900 dark:text-white leading-tight mb-6">
                From Napkin to Boardroom <br className="hidden md:block" /> in
                30 Seconds.
              </h3>

              {/* Added Description */}
              <p className="text-sm font-poppins text-zinc-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                We don't use magic. We use a multi-agent AI architecture to
                simulate a high-stakes investor meeting. Your idea is
                dismantled, analyzed against market data, and reconstructed with
                actionable pivots—all before you finish your coffee.
              </p>
            </div>

            {/* Optional: A subtle visual indicator or decorative element on the right */}
            <div className="hidden md:block mb-2">
              <ArrowRight className="text-zinc-300 dark:text-white/20 h-12 w-12 -rotate-45" />
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* STEP 1: INPUT */}
          <StepCard
            number="01"
            icon={PenLine}
            title="The Pitch"
            description="Submit your elevator pitch, problem, and solution. No login required to start."
          >
            {/* Visual: Abstract Form Input with Typing Animation */}
            <div className="w-full max-w-[180px] space-y-2">
              <div className="h-2 w-12 rounded-full bg-zinc-200 dark:bg-white/20 mb-3" />

              {/* Input Field */}
              <div className="h-8 w-full rounded border border-zinc-300 dark:border-white/20 bg-white dark:bg-black/40 flex items-center px-2">
                {/* Typing Line Animation */}
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                  className="h-1 bg-zinc-300 dark:bg-white/40 rounded-full block"
                />
                <span className="h-3 w-0.5 ml-1 bg-executive-gold animate-pulse" />{" "}
              </div>

              {/* Ghost Lines */}
              <div className="h-8 w-full rounded border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-black/20 overflow-hidden flex flex-col justify-center gap-1.5 px-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{
                    duration: 1.5,
                    delay: 0.2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="h-1 bg-zinc-100 dark:bg-white/10 rounded-full"
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "40%" }}
                  transition={{
                    duration: 1.5,
                    delay: 0.4,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="h-1 bg-zinc-100 dark:bg-white/10 rounded-full"
                />
              </div>
            </div>
          </StepCard>

          {/* STEP 2: ANALYSIS */}
          <StepCard
            number="02"
            icon={Cpu}
            title="The Interrogation"
            description="Three AI Personas (The VC, The Customer, The Skeptic) debate your idea's viability."
          >
            {/* Visual: Central Node connecting to Orbiting dots */}
            <div className="relative flex items-center justify-center w-32 h-32">
              {/* Orbit Rings (Outer) - Counter Clockwise */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-zinc-200 dark:border-white/10 scale-75"
              >
                {/* Satellite Node 1 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-zinc-300 dark:bg-white/30" />
              </motion.div>

              {/* Orbit Rings (Inner) - Clockwise */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-zinc-300 dark:border-white/20"
              >
                {/* Satellite Node 2 & 3 */}
                <div className="absolute bottom-4 right-4 h-3 w-3 rounded-full bg-zinc-400 dark:bg-white/40" />
                <div className="absolute bottom-4 left-4 h-3 w-3 rounded-full bg-zinc-400 dark:bg-white/40" />
              </motion.div>

              {/* Center Core Pulse */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-10 w-10 rounded-lg bg-zinc-900 dark:bg-white flex items-center justify-center shadow-lg z-10"
              >
                <div className="h-4 w-4 bg-executive-gold rounded-full animate-pulse" />
              </motion.div>
            </div>
          </StepCard>

          {/* STEP 3: RESULT */}
          <StepCard
            number="03"
            icon={FileCheck}
            title="The Verdict"
            description="Receive a Brutal Score (0-100) and specific, actionable feedback on how to pivot."
          >
            {/* Visual: A Document with a Stamp Animation */}
            <div className="relative h-24 w-20 bg-white dark:bg-white/10 border border-zinc-200 dark:border-white/10 rounded-md shadow-sm flex flex-col items-center justify-center p-2 group-hover:scale-105 transition-transform">
              {/* Lines of text */}
              <div className="w-full space-y-1.5 mb-2">
                <div className="h-1 w-full bg-zinc-100 dark:bg-white/10 rounded" />
                <div className="h-1 w-3/4 bg-zinc-100 dark:bg-white/10 rounded" />
                <div className="h-1 w-5/6 bg-zinc-100 dark:bg-white/10 rounded" />
              </div>

              {/* The Stamp Slam Animation 
                  - REPEAT LOGIC: Slam down (0.4s), Wait (3s), Repeat.
                  - ANIMATION: Scale from 2.5 to 1 (Huge to Normal). Opacity 0 to 1.
              */}
              <motion.div
                animate={{
                  scale: [2.5, 1],
                  opacity: [0, 1],
                }}
                transition={{
                  duration: 0.4,
                  // Custom Bezier for a heavy "Slam" feeling (Linear-style precision)
                  ease: [0.34, 1.56, 0.64, 1],
                  repeat: Infinity,
                  repeatDelay: 3, // Pauses for 3s before slamming again
                }}
                className="absolute rotate-[-12deg] border-2 border-executive-gold px-2 py-0.5 rounded backdrop-blur-sm"
              >
                <span className="text-[8px] font-black uppercase text-executive-gold tracking-wider">
                  ROASTED
                </span>
              </motion.div>
            </div>
          </StepCard>
        </div>

        {/* Bottom CTA (Optional connector) */}
        <div className="mt-12 text-center">
          <p className="text-zinc-500 dark:text-gray-500 text-sm font-inter">
            Ready to face the music?{" "}
            <button
              onClick={() =>
                document
                  .getElementById("input-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="text-zinc-900 dark:text-white underline underline-offset-4 hover:text-executive-gold dark:hover:text-executive-gold font-medium cursor-pointer transition-all duration-300"
            >
              Start Analysis &rarr;
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
