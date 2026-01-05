import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { BrainCircuit, Search, Gavel, Briefcase } from "lucide-react";

const LOADING_STEPS = [
  {
    text: "Initializing Boardroom Protocol...",
    icon: BrainCircuit,
    color: "text-gray-400",
  },
  { text: "Summoning The Shark...", icon: Briefcase, color: "text-blue-400" },
  {
    text: "Analyzing Market Saturation...",
    icon: Search,
    color: "text-executive-gold",
  },
  {
    text: "Calculating Burn Rate vs. Reality...",
    icon: BrainCircuit,
    color: "text-alert-red",
  },
  { text: "Finalizing Verdict...", icon: Gavel, color: "text-white" },
];

const Analyzing = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Cycle through the loading steps
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < LOADING_STEPS.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, 1200); // 1.2 seconds per step

    // Redirect to Report after all steps are done + buffer
    const redirectTimeout = setTimeout(() => {
      navigate("/report");
    }, LOADING_STEPS.length * 1200 + 500);

    return () => {
      clearInterval(stepInterval);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  const CurrentIcon = LOADING_STEPS[currentStep].icon;

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-boardroom-black text-center relative overflow-hidden">
      {/* Ambient Background Pulse */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-executive-gold/5 rounded-full blur-[100px] -z-10"
      />

      <div className="max-w-md px-6">
        {/* Animated Icon Container */}
        <div className="mb-12 flex justify-center h-24 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
              transition={{ duration: 0.4 }}
            >
              <CurrentIcon
                size={64}
                className={`${LOADING_STEPS[currentStep].color} drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text Scramble / typewriter effect */}
        <div className="h-16 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl font-serif font-bold text-gray-100 tracking-wide"
            >
              {LOADING_STEPS[currentStep].text}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full bg-executive-gold shadow-[0_0_10px_#FFD700]"
            initial={{ width: "0%" }}
            animate={{
              width: `${((currentStep + 1) / LOADING_STEPS.length) * 100}%`,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>

        <p className="mt-4 text-xs font-mono text-gray-600 uppercase tracking-widest">
          Processing Data Packet {currentStep + 1} / {LOADING_STEPS.length}
        </p>
      </div>
    </div>
  );
};

export default Analyzing;
