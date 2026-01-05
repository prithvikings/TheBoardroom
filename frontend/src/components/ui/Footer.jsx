import React from "react";
import { Twitter, Github, Linkedin, Flame } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-boardroom-black pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 rounded bg-zinc-900 dark:bg-white text-white dark:text-black flex items-center justify-center">
                <Flame size={12} fill="currentColor" />
              </div>
              <span className="font-poppins font-bold text-zinc-900 dark:text-white">
                Boardroom.ai
              </span>
            </div>
            <p className="text-sm font-inter text-zinc-500 dark:text-zinc-400 max-w-xs leading-relaxed">
              Replacing expensive consultants with meaner, faster, and smarter
              AI agents. Your ego will recover. Your business might actually
              grow.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">
              Product
            </h4>
            <ul className="space-y-4">
              {[
                "Roast My Deck",
                "Hall of Flame",
                "Pricing (Soon)",
                "API Access",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-inter text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              {["Terms of Service", "Privacy Policy", "Cookie Policy"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm font-inter text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-inter text-zinc-400 dark:text-zinc-600">
            © {new Date().getFullYear()} Boardroom AI Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
