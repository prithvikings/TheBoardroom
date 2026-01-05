import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button"; // Assuming you have Shadcn button

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo - Serif font for authority */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-primary-foreground font-poppins font-bold text-xl">
              B
            </span>
          </div>
          <span className="text-xl font-poppins font-bold tracking-tight text-foreground">
            The Boardroom
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link
            to="/hall-of-flame"
            className="hover:text-primary transition-colors"
          >
            Hall of Flame
          </Link>
          <Link to="/about" className="hover:text-primary transition-colors">
            Manifesto
          </Link>
        </div>

        {/* CTA - The "Hook" */}
        <div className="flex items-center gap-4">
          <Link
            to="/auth"
            className="text-sm font-medium hover:text-foreground text-muted-foreground hidden sm:block"
          >
            Log In
          </Link>
          <Button className="font-inter font-bold tracking-wide">
            Get Roasted
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
