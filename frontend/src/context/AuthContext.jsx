import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  // On app start, check if a token exists in storage
  useEffect(() => {
    if (token) {
      // In a real app, you might fetch user details here (e.g., /auth/me)
      // For this MVP, if the token exists, we assume they are logged in.
      setUser({ token });
    }
  }, [token]);

  // Login Action
  const login = (newToken, userData) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    setUser(userData);
  };

  // Logout Action
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the context easily
export const useAuth = () => useContext(AuthContext);
