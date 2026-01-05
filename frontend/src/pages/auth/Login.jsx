import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Lock,
  ArrowRight,
  Github,
  Flame,
  Quote,
  Mail,
  Eye,
  EyeOff,
} from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate auth logic
    navigate("/dashboard");
  };

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
          <div className="mb-6 h-12 w-12 flex items-center justify-center rounded-full bg-zinc-200 dark:bg-white/10 text-zinc-900 dark:text-white">
            <Quote size={20} fill="currentColor" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-zinc-900 dark:text-white leading-tight mb-4">
            "Decisions made with precision & power."
          </h2>
          <p className="text-lg font-inter text-zinc-600 dark:text-zinc-400 leading-relaxed">
            The AI Boardroom doesn't just analyze data; it challenges your
            assumptions. Step inside and validate your vision against the
            harshest critics.
          </p>
        </div>

        {/* Footer Links */}
        <div className="z-10 text-xs font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">
          © 2024 Boardroom AI Inc.
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
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <Lock size={14} className="text-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Private Access
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-poppins font-semibold text-zinc-900 dark:text-white mb-2">
              Welcome back
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-inter">
              Enter your credentials to convene the session.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 uppercase tracking-wide">
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
                  size={16}
                />
                <input
                  type="email"
                  className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 pl-10 pr-3 py-2.5 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:border-zinc-500 dark:focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none transition-all"
                  placeholder="executive@company.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 uppercase tracking-wide">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
                  size={16}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 pl-10 pr-10 py-2.5 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:border-zinc-500 dark:focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <input
                  type="checkbox"
                  className="rounded border-zinc-300 dark:border-zinc-700 text-zinc-900 focus:ring-zinc-500"
                />
                Remember for 30 days
              </label>
              <a
                href="#"
                className="font-medium text-zinc-900 dark:text-white hover:underline decoration-zinc-900 dark:decoration-white underline-offset-4"
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-2 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-black px-4 py-3 text-sm font-bold uppercase tracking-wide hover:opacity-90 transition-all mt-6 shadow-sm"
            >
              Enter Boardroom{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-zinc-200 dark:border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-boardroom-black px-2 text-zinc-400 dark:text-zinc-500 font-mono tracking-widest">
                Or access via
              </span>
            </div>
          </div>

          {/* Social Auth Grid */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 rounded-lg border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 transition-all hover:bg-zinc-50 dark:hover:bg-white/10 hover:border-zinc-300 dark:hover:border-white/20">
              <svg className="h-4 w-4" viewBox="0 0 24 24">
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
              Google
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 transition-all hover:bg-zinc-50 dark:hover:bg-white/10 hover:border-zinc-300 dark:hover:border-white/20">
              <Github size={16} />
              GitHub
            </button>
          </div>

          {/* Footer Sign Up Link */}
          <div className="text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Not a member?{" "}
              <Link
                to="/signup"
                className="font-semibold text-zinc-900 dark:text-white hover:underline decoration-zinc-900 dark:decoration-white underline-offset-4"
              >
                Apply for access
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
