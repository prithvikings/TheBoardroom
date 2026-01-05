import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import RoastForm from "../components/RoastForm";
import RoastLoading from "../components/RoastLoading"; // Import this
import { useIdea } from "../context/IdeaContext"; // Import this
import Scorecard from "../components/Scorecard";

const Home = () => {
  const { stage } = useIdea(); // Get current stage

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* HERO TEXT - Only show during input stage to reduce clutter during loading? 
            Or keep it? Let's keep it but maybe dim it. */}
        <div
          className={`text-center mb-16 space-y-6 transition-opacity duration-500 ${
            stage !== "input" ? "opacity-50" : "opacity-100"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
            Your Business Idea <br />
            <span className="text-primary italic">Is Probably Trash.</span>
          </h1>
        </div>

        {/* THE INTERACTION LAYER - SWAP COMPONENTS HERE */}
        <AnimatePresence mode="wait">
          {stage === "input" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <RoastForm />
            </motion.div>
          )}

          {stage === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Scorecard />
            </motion.div>
          )}

          {stage === "roasting" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <RoastLoading />
            </motion.div>
          )}

          {/* We will add the Result component in the next step */}
          {stage === "result" && (
            <div className="text-white text-center text-2xl font-serif">
              RESULT COMPONENT GOES HERE
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;
