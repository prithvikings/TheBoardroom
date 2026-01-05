import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Loader2, Search, Skull } from "lucide-react";

const LOADING_STEPS = [
  { text: "Analyzing your terrible life choices...", icon: Search },
  { text: "Consulting the Sharks...", icon: BrainCircuit },
  { text: "Calculating probability of failure...", icon: Loader2 },
  { text: "Generating emotional damage...", icon: Skull },
];

const RoastLoading = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Cycle through messages every 1.2 seconds
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % LOADING_STEPS.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const StepIcon = LOADING_STEPS[currentStep].icon;

  return (
    <div className="bg-card border border-border rounded-xl shadow-2xl p-12 min-h-[400px] flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Background Pulse */}
      <div className="absolute inset-0 bg-primary/5 animate-pulse" />

      <div className="relative z-10 space-y-8">
        {/* Animated Icon */}
        <motion.div
          key={`icon-${currentStep}`}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20"
        >
          <StepIcon className="w-10 h-10 text-primary" />
        </motion.div>

        {/* Animated Text */}
        <div className="h-16">
          {" "}
          {/* Fixed height to prevent layout shift */}
          <AnimatePresence mode="wait">
            <motion.h3
              key={`text-${currentStep}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-serif font-bold text-foreground"
            >
              {LOADING_STEPS[currentStep].text}
            </motion.h3>
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-secondary rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }} // Matches the 4000ms timeout in Context
          />
        </div>
      </div>
    </div>
  );
};

export default RoastLoading;
