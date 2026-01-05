import { ArrowRight, AlertTriangle } from "lucide-react";
import { motion } from "motion/react"; // Using 'motion' as per your package.json
import IdeaInputSection from "../components/home/IdeaInputSection";
import HallOfFlame from "./HallOfFlame";
import HowItWorks from "./HowItWorks";
import TheBoard from "../components/home/Theboard";
import DueDiligence from "../components/home/DueDiligence";

const Home = () => {
  return (
    <div className="relative overflow-hidden dark:bg-boardroom-black dark:text-gray-100 bg-zinc-50 text-gray-100 max-w-6xl mx-auto">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 pt-24 pb-32 text-center">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm
          /* Light Mode Colors */
          border-zinc-200 bg-white/50 text-zinc-600
          /* Dark Mode Colors */
          dark:border-white/10 dark:bg-white/5 dark:text-zinc-400"
        >
          {/* THE BLIP ANIMATION */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="font-inter">10,000+ ideas roasted</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-5xl font-poppins leading-tighter tracking-tight text-zinc-900 dark:text-white md:text-6xl"
        >
          Get <span className="text-gold-gradient">Roasted</span> to <br />
          Get Rich.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-lg text-md font-poppins text-gray-600 dark:text-gray-400"
        >
          Your business idea is probably flawed. Our AI Board of Directors will
          tell you exactly why before the market does.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <button
            onClick={() =>
              document
                .getElementById("input-section")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="
    /* Layout & Text */
    group relative flex items-center justify-center gap-2 rounded-lg px-6 py-2.5 text-xs font-semibold text-[#1a1a1a] font-inter cursor-pointer
    
    /* BASE: Solid High-End Gold (No cheap gradient) */
    bg-executive-gold
    
    /* BORDER: Subtle outline for definition */
    border border-[#bfa34b]
    
    /* THE TACTILE MAGIC: 
       1. Top White Highlight (inset 0 1px 0 rgba(255,255,255,0.4)) -> Catches 'light' from top
       2. Bottom Dark Bevel (inset 0 -2px 0 rgba(0,0,0,0.1)) -> Adds physical 'weight' at bottom
    */
    shadow-[inset_0px_1px_0px_rgba(255,255,255,0.4),inset_0px_-2px_0px_rgba(0,0,0,0.1)]
    
    /* HOVER: Lift up slightly + Add colored glow */
    transition-all duration-200 ease-[cubic-bezier(0.25,1,0.5,1)]
    
    /* ACTIVE: Press down + Inner shadow creates 'sunken' feel */
    active:translate-y-0.5
    active:shadow-[inset_0px_2px_4px_rgba(0,0,0,0.1)]
  "
          >
            Enter the Boardroom
            {/* Optional: Subtle Arrow that moves on hover */}
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight className="size-3" />
            </span>
          </button>

          <button
            className="
    /* Layout & Base */
    flex items-center justify-center rounded-lg px-5 py-2.5 text-xs font-medium font-inter transition-all duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer
    
    /* LIGHT MODE: Clean 'Porcelain' Look */
    bg-white text-zinc-600 border border-zinc-200
    /* The Magic: A tiny drop shadow + a top white highlight */
    shadow-[0px_1px_2px_rgba(0,0,0,0.08),inset_0px_1px_0px_rgba(255,255,255,1)]
    
    /* DARK MODE: 'Frosted Glass' Look */
    dark:bg-white/5 dark:text-zinc-400 dark:border-white/10
    /* The Magic: Deep shadow + faint top rim light */
    dark:shadow-[0px_1px_2px_rgba(0,0,0,0.5),inset_0px_1px_0px_rgba(255,255,255,0.05)]

    /* HOVER STATES: Crisp up the text and border */
    hover:text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50 
    dark:hover:text-white dark:hover:bg-white/10 dark:hover:border-white/20
    
    /* ACTIVE STATE: Press down */
    active:translate-y-0.5 active:opacity-90
"
          >
            View Sample Report
          </button>
        </motion.div>
      </div>
      <IdeaInputSection />
      <HallOfFlame />
      <HowItWorks />
      <TheBoard />
      <DueDiligence />
    </div>
  );
};

export default Home;
