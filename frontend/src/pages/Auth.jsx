import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginUser, signupUser } from "../services/api";
import { Flame, Mail, Lock, ArrowRight, Loader2 } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login/Signup
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Form State
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let response;
      if (isLogin) {
        response = await loginUser(formData);
      } else {
        response = await signupUser(formData);
      }

      // Success: Get token and user data from backend response
      const { token, data } = response.data;

      // Update Context & LocalStorage
      login(token, data.user);

      // Redirect to Dashboard (We will build this next)
      navigate("/dashboard");
    } catch (err) {
      // Handle Backend Errors (e.g., "Incorrect password")
      const msg = err.response?.data?.message || "Authentication failed";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-boardroom-dark border border-boardroom-gray rounded-2xl shadow-2xl p-8 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-boardroom-gold to-transparent opacity-50"></div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-boardroom-black rounded-xl mb-4 border border-boardroom-gray">
            <Flame className="w-8 h-8 text-boardroom-gold" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-white">
            {isLogin ? "Welcome Back" : "Join The Boardroom"}
          </h2>
          <p className="text-boardroom-muted text-sm mt-2">
            {isLogin
              ? "Ready to get roasted again?"
              : "Validate your idea before you lose money."}
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-boardroom-muted uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-boardroom-muted" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-boardroom-black border border-boardroom-gray rounded-lg py-3 pl-10 pr-4 text-white focus:border-boardroom-gold focus:outline-none transition-colors"
                placeholder="founder@startup.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-boardroom-muted uppercase tracking-wider">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-boardroom-muted" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full bg-boardroom-black border border-boardroom-gray rounded-lg py-3 pl-10 pr-4 text-white focus:border-boardroom-gold focus:outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-boardroom-gold hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 mt-6"
          >
            {loading ? (
              <Loader2 className="animate-spin w-5 h-5" />
            ) : (
              <>
                {isLogin ? "Sign In" : "Create Account"}
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        {/* Toggle Mode */}
        <div className="mt-8 text-center pt-6 border-t border-boardroom-gray">
          <p className="text-boardroom-muted text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
              className="ml-2 text-boardroom-gold hover:underline font-medium"
            >
              {isLogin ? "Sign up" : "Log in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
