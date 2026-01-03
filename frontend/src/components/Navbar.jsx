import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Flame, LayoutDashboard, LogOut, User } from "lucide-react";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="border-b border-boardroom-gray bg-boardroom-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-boardroom-gold p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Flame className="text-black w-5 h-5" />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-white">
              The<span className="text-boardroom-gold">Boardroom</span>
            </span>
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="hidden md:flex items-center gap-2 text-sm font-medium text-boardroom-muted hover:text-boardroom-gold transition-colors"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-sm font-medium text-red-400 hover:text-red-300 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-boardroom-dark border border-boardroom-gray hover:border-boardroom-gold transition-all text-sm font-medium"
              >
                <User className="w-4 h-4" />
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
