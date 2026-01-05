import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer"; // We will assume you have this or create a placeholder

const PublicLayout = () => {
  return (
    <div className="min-h-screen dark:bg-boardroom-black dark:text-gray-100 bg-zinc-50 text-gray-100 selection:bg-executive-gold selection:text-boardroom-black">
      <Navbar />
      <main className="relative flex-1">
        {/* Outlet renders the child route (e.g., Home.jsx) */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
