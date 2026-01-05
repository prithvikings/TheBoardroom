import React from "react";
import { Link } from "react-router-dom";
import { Github, ArrowRight, CheckCircle2, Flame, Quote } from "lucide-react";

const Signup = () => {
  return (
    <div className="flex min-h-screen w-full bg-white dark:bg-boardroom-black transition-colors duration-300">
      {/* LEFT SIDE: Branding & Social Proof (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 bg-zinc-50 dark:bg-[#151516] border-r border-zinc-200 dark:border-white/5 flex-col justify-between p-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Logo */}
        <div className="flex items-center gap-2 z-10">
          <div className="h-8 w-8 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black flex items-center justify-center">
            <Flame size={16} fill="currentColor" />
          </div>
          <span className="font-poppins font-bold text-xl text-zinc-900 dark:text-white tracking-tight">
            Boardroom.ai
          </span>
        </div>

        {/* Testimonial / Quote */}
        <div className="max-w-md z-10">
          <Quote size={48} className="text-zinc-200 dark:text-white/5 mb-6" />
          <h2 className="text-3xl font-serif font-bold text-zinc-900 dark:text-white leading-tight mb-6">
            "The feedback was brutal. My ego was crushed. But my pitch deck is
            now bulletproof."
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600" />
            <div>
              <p className="font-inter font-semibold text-zinc-900 dark:text-white">
                Alex Chen
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                Founder, Series A
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex gap-6 text-sm text-zinc-500 font-inter z-10">
          <a
            href="#"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            © Boardroom Inc.
          </a>
          <a
            href="#"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Terms
          </a>
        </div>
      </div>

      {/* RIGHT SIDE: The Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-sm space-y-8">
          {/* Mobile Logo (Visible only on small screens) */}
          <div className="lg:hidden flex justify-center mb-8">
            <div className="h-10 w-10 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black flex items-center justify-center">
              <Flame size={20} fill="currentColor" />
            </div>
          </div>

          {/* Header */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl font-poppins font-semibold text-zinc-900 dark:text-white mb-2">
              Create your account
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-inter">
              Join 10,000+ founders validating ideas faster.
            </p>
          </div>

          {/* Social Auth */}
          <div className="space-y-3">
            <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 transition-all hover:bg-zinc-50 dark:hover:bg-white/10 hover:border-zinc-300 dark:hover:border-white/20">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.2 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign up with Google
            </button>
            <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 transition-all hover:bg-zinc-50 dark:hover:bg-white/10 hover:border-zinc-300 dark:hover:border-white/20">
              <Github size={18} />
              Sign up with GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-zinc-200 dark:border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-boardroom-black px-2 text-zinc-400 dark:text-zinc-500 font-mono tracking-widest">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Email Form */}
          <form className="space-y-4">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2.5 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:border-zinc-500 dark:focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none transition-all"
                  placeholder="founder@startup.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 uppercase tracking-wide">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2.5 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:border-zinc-500 dark:focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button className="group w-full flex items-center justify-center gap-2 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-black px-4 py-3 text-sm font-bold uppercase tracking-wide hover:opacity-90 transition-all mt-6 shadow-sm">
              Create Account{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <p className="text-center text-xs text-zinc-500 dark:text-zinc-400 mt-4 font-inter">
              By clicking continue, you agree to our{" "}
              <a
                href="#"
                className="underline hover:text-zinc-900 dark:hover:text-white"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="underline hover:text-zinc-900 dark:hover:text-white"
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>

          {/* Footer Login Link */}
          <div className="text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-zinc-900 dark:text-white hover:underline decoration-zinc-900 dark:decoration-white underline-offset-4"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
