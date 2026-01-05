import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Pages
import Home from "./pages/Home";
import Analyzing from "./pages/Analyzing";
import Report from "./pages/Report";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import DashboardHome from "./pages/dashboard/DashboardHome";
import HallOfFlame from "./pages/HallOfFlame";
import VCInterrogation from "./pages/dashboard/VCInterrogation";
import Settings from "./pages/dashboard/Settings";
import CompetitorRecon from "./pages/dashboard/CompetitorRecon";
import BattleMode from "./pages/dashboard/BattleMode";
import HowItWorks from "./pages/HowItWorks";

function App() {
  return (
    <Router>
      <Routes>
        {/* PUBLIC ROUTES (With Navbar/Footer) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/analyzing" element={<Analyzing />} />
          <Route path="/report" element={<Report />} />
          <Route path="/hall-of-flame" element={<HallOfFlame />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Route>

        {/* AUTH ROUTES (Standalone) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* DASHBOARD ROUTES (Protected) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="interrogation" element={<VCInterrogation />} />
          <Route path="settings" element={<Settings />} />
          <Route path="tools/competitor-recon" element={<CompetitorRecon />} />
          <Route path="tools/battle-mode" element={<BattleMode />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
