import { Link } from "react-router-dom";
import { Flame } from "lucide-react";
import { Togglebtn } from "./Themetoggle";

const Navbar = () => {
  return (
    <nav className="max-w-6xl mx-auto sticky top-0 z-50 w-full bg-zinc-50/80 dark:bg-boardroom-black/80 backdrop-blur-xs">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-2 font-inter text-lg font-medium tracking-tight text-gray-900 dark:text-white transition-colors"
        >
          <div className="size-6 rounded bg-zinc-900 dark:bg-white text-white dark:text-black flex items-center justify-center">
            <Flame size={16} fill="currentColor" />
          </div>
          The AI Boardroom
        </Link>

        {/* Navigation Links - Hidden on mobile, visible on desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/how-it-works"
            // CHANGE 3: Links are 'text-gray-600' in light mode, 'dark:text-gray-400' in dark mode.
            className="text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-executive-gold transition-colors"
          >
            How it Works
          </Link>
          <Link
            to="/the-board"
            className="text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-executive-gold transition-colors"
          >
            The Board
          </Link>
          <Link
            to="/hall-of-flame"
            className="text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-executive-gold transition-colors"
          >
            Hall of Flame
          </Link>
        </div>

        {/* Auth Actions */}
        <div className="flex items-center gap-4">
          <Togglebtn />
          <Link
            to="/auth"
            // BUTTON LOGIC:
            // Base: Rounded, Borders, Transitions
            className="rounded-md border border-executive-gold/50 px-4 py-1.5 text-xs font-semibold transition-all duration-300 ease-in-out
            
            /* LIGHT MODE (Your Request): Default is Solid Gold, Hover becomes Transparent */
            bg-executive-gold text-boardroom-black 
            hover:bg-transparent hover:text-executive-gold
            
            /* DARK MODE: Default is Transparent, Hover becomes Solid Gold */
            dark:bg-transparent dark:text-executive-gold 
            dark:hover:bg-executive-gold dark:hover:text-boardroom-black"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
