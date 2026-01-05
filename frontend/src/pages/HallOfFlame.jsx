import { useState } from "react";
import {
  Flame,
  Share2,
  Filter,
  Trophy,
  Clock,
  DollarSign,
  HelpCircle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const RoastCard = ({ idea, verdict, score, quote, type }) => {
  // Helper: Linear-style Status Colors (Dot + Text)
  const getStyles = () => {
    switch (type) {
      case "brutal":
        return {
          dot: "bg-red-500",
          text: "text-red-600 dark:text-red-400",
          border: "border-red-200 dark:border-red-900/30",
          scoreColor: "text-red-600 dark:text-red-400",
        };
      case "fundable":
        return {
          dot: "bg-yellow-500",
          text: "text-yellow-700 dark:text-yellow-400",
          border: "border-yellow-200 dark:border-yellow-900/30",
          scoreColor: "text-yellow-600 dark:text-yellow-400",
        };
      default:
        return {
          dot: "bg-zinc-400",
          text: "text-zinc-500 dark:text-zinc-400",
          border: "border-zinc-200 dark:border-zinc-800",
          scoreColor: "text-zinc-500 dark:text-zinc-400",
        };
    }
  };
  const style = getStyles();

  return (
    <div
      className="group relative flex flex-col justify-between rounded-lg p-5 transition-all duration-200 ease-in-out
      /* Light Mode: Card Surface */
      bg-white border border-zinc-200 shadow-[0px_2px_4px_rgba(0,0,0,0.02)]
      /* Dark Mode: Card Surface */
      dark:bg-[#121212] dark:border-white/10 dark:shadow-none
      
      /* Hover Effects: Slight Lift & Border sharpen */
      hover:-translate-y-0.5 hover:shadow-[0px_4px_12px_rgba(0,0,0,0.05)] hover:border-zinc-300 dark:hover:border-white/20"
    >
      {/* --- HEADER: Verdict & Score --- */}
      <div className="flex items-start justify-between mb-6">
        {/* Verdict: Linear Style (Status Dot + Label) */}
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${style.dot} animate-pulse`} />
          <span
            className={`text-xs font-semibold uppercase tracking-wide font-inter ${style.text}`}
          >
            {verdict}
          </span>
        </div>

        {/* Score: Minimalist Stamp */}
        <div
          className={`flex items-center justify-center h-8 min-w-[32px] rounded border ${style.border} ${style.scoreColor} font-roboto text-sm bg-white dark:bg-white/5`}
        >
          {score}
        </div>
      </div>

      {/* --- BODY: The Quote --- */}
      <div className="mb-8">
        <h3 className="font-serif text-lg leading-relaxed italic text-zinc-900 dark:text-gray-100">
          "{quote}"
        </h3>
      </div>

      {/* --- CONTENT: The Idea & Footer --- */}
      <div className="mt-auto">
        {/* Divider */}
        <div className="h-px w-full bg-zinc-100 dark:bg-white/5 mb-4" />

        <div className="flex flex-col gap-4">
          {/* Idea Description */}
          <div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-500 mb-1">
              The Idea
            </p>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 font-inter leading-relaxed">
              {idea}
            </p>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-2">
            <button
              className="flex items-center gap-1.5 text-xs font-normal 
              text-zinc-900 hover:text-zinc-600
              dark:text-white dark:hover:text-zinc-300 transition-all duration-300 ease-in-out cursor-pointer"
            >
              Read Analysis <ArrowRight size={12} />
            </button>

            <button className="cursor-pointer text-zinc-400 hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-white transition-all duration-300 ease-in-out">
              <Share2 size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const HallOfFlame = () => {
  const [filter, setFilter] = useState("brutal");

  const roasts = [
    {
      id: 1,
      verdict: "Bankrupt by Q3",
      score: 12,
      type: "brutal",
      quote: "This isn't a business model; it's a charity for server costs.",
      idea: "Uber for walking dogs but the owners walk them to meet other owners. Basically Tinder for dog walkers but nobody gets paid.",
    },
    {
      id: 2,
      verdict: "Pivot Immediately",
      score: 24,
      type: "brutal",
      quote: "You have invented a slower, more expensive version of Excel.",
      idea: "Blockchain-based grocery lists for decentralized family coordination using governance tokens for deciding dinner.",
    },
    {
      id: 3,
      verdict: "Fundable",
      score: 78,
      type: "fundable",
      quote: "Actually... this might work. Assuming you fire yourself as CEO.",
      idea: "AI-driven supply chain optimization for perishable goods in emerging markets using WhatsApp as the interface.",
    },
  ];

  return (
    <div
      className="min-h-screen py-20 px-4  duration-300
      bg-zinc-50 dark:bg-boardroom-black"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row justify-between items-end mb-12 border-b pb-8
          border-zinc-200 dark:border-white/10"
        >
          <div>
            <div
              className="flex items-center gap-2 font-poppins font-medium uppercase tracking-wide text-sm mb-2
              text-yellow-600 dark:text-executive-gold"
            >
              <Flame size={16} /> Public Executions
            </div>
            <h1
              className="md:text-5xl font-poppins font-semibold mb-4
              text-zinc-900 dark:text-white"
            >
              Hall of Flame
            </h1>
            <p
              className="max-w-md text-sm font-poppins
              text-zinc-600 dark:text-gray-400"
            >
              Witness the survivability of ideas tested against the Boardroom.
              Brutal honesty, zero piety, public validation.
            </p>
          </div>
          <button
            className="
    /* Layout & Base */
    group mt-6 md:mt-0 flex h-8 items-center gap-2 rounded-md px-3 text-xs font-inter  duration-200 ease-in-out cursor-pointer font-medium
    
    /* LIGHT MODE (Linear Style)
       - Background: Pure White
       - Border: Subtle grey (zinc-200) that darkens on hover
       - Text: Dark Grey (zinc-600) -> Black (zinc-900)
       - Shadow: Tiny 'sm' shadow for separation, no deep glow
    */
    bg-white text-zinc-600 border border-zinc-200 shadow-sm
    hover:bg-zinc-50 hover:text-zinc-900 hover:border-zinc-300
    
    /* DARK MODE (Linear Style)
       - Background: Transparent or very subtle wash
       - Border: White with 10% opacity (extremely crisp)
       - Text: Grey (zinc-400) -> White
    */
    dark:bg-transparent dark:text-zinc-400 dark:border-white/10
    dark:hover:bg-white/5 dark:hover:text-white dark:hover:border-white/20
  "
          >
            {/* Icon: Subtle grey, turns sharp on hover */}
            <span className="text-zinc-400 dark:text-zinc-600 transition-transform duration-200 group-hover:rotate-90 group-hover:text-zinc-900 dark:group-hover:text-white">
              +
            </span>
            Join the Roast
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          <span
            className="text-sm font-inter py-2 mr-2
            text-zinc-400 dark:text-gray-500"
          >
            Sort by:
          </span>

          <button
            className="
    /* Layout: Compact & Technical */
    flex items-center gap-1.5 px-3 py-1.5 rounded-full 
    text-xs font-medium font-inter cursor-pointer  duration-200
    
    /* Structure: Add a border so it matches the size of inactive buttons (preventing layout shift) */
    border
    
    /* LIGHT MODE: Solid Black (Notion Style) */
    bg-zinc-900 text-white border-zinc-900
    hover:bg-zinc-800
    
    /* DARK MODE: Solid Gold (Boardroom Style) */
    dark:bg-executive-gold dark:text-boardroom-black dark:border-executive-gold
    dark:hover:bg-[#F2C94C]
  "
          >
            {/* Added 'fill-current' so the flame looks lit/active */}
            <Flame size={12} className="fill-current" />
            Most Brutal
          </button>
          {/* Inactive Filter Buttons */}
          {[
            { label: "Highest Score", icon: Trophy },
            { label: "Newest Roasts", icon: Clock },
            { label: "Fundable", icon: DollarSign },
          ].map((btn) => (
            <button
              key={btn.label}
              className="
      /* Layout: Compact & Technical */
      flex items-center gap-1.5 px-3 py-1.5 rounded-full border 
      text-xs font-medium font-inter transition-all duration-200 cursor-pointer
      
      /* Light Mode: Subtle Gray text that turns Black on hover */
      bg-white border-zinc-200 text-zinc-500 
      hover:border-zinc-300 hover:text-zinc-900 hover:bg-zinc-50
      
      /* Dark Mode: Faint border, text brightens on hover */
      dark:bg-transparent dark:border-white/10 dark:text-zinc-400 
      dark:hover:text-white dark:hover:border-white/20 dark:hover:bg-white/5
    "
            >
              {/* Reduced Icon Size to 12px to match text */}
              <btn.icon size={12} /> {btn.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roasts.map((roast) => (
            <RoastCard key={roast.id} {...roast} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 flex justify-center">
          <button
            className="flex items-center gap-2 text-xs tracking-widest  font-poppins font-medium cursor-pointer
            text-zinc-500 hover:text-zinc-900
            dark:text-gray-500 dark:hover:text-executive-gold transition-all duration-300"
          >
            Load More Failures <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HallOfFlame;
