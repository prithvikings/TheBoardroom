import { Outlet, Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Archive,
  Wrench,
  CreditCard,
  LogOut,
  User,
} from "lucide-react";

const SidebarItem = ({ icon: Icon, label, path, isActive }) => (
  <Link
    to={path}
    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
      isActive
        ? "bg-executive-gold text-boardroom-black"
        : "text-gray-400 hover:bg-white/5 hover:text-white"
    }`}
  >
    <Icon size={18} />
    {label}
  </Link>
);

const DashboardLayout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-boardroom-black text-gray-100">
      {/* SIDEBAR (Desktop) */}
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col border-r border-white/10 bg-boardroom-dark md:flex">
        {/* Brand */}
        <div className="flex h-16 items-center px-6 border-b border-white/10">
          <div className="flex items-center gap-2 font-serif text-lg font-bold tracking-tight text-white">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-executive-gold text-boardroom-black">
              <LayoutDashboard size={14} />
            </div>
            THE AI BOARDROOM
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 space-y-1 px-3 py-6">
          <SidebarItem
            icon={LayoutDashboard}
            label="Dashboard"
            path="/dashboard"
            isActive={location.pathname === "/dashboard"}
          />
          <SidebarItem
            icon={Archive}
            label="Archives"
            path="/dashboard/archives"
            isActive={location.pathname.includes("archives")}
          />
          <SidebarItem
            icon={Wrench}
            label="Tools"
            path="/dashboard/tools"
            isActive={location.pathname.includes("tools")}
          />
          <SidebarItem
            icon={CreditCard}
            label="Billing"
            path="/dashboard/billing"
            isActive={location.pathname.includes("billing")}
          />
        </div>

        {/* User Profile Snippet */}
        <div className="border-t border-white/10 p-4">
          <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3 hover:bg-white/10 transition-colors cursor-pointer">
            <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center border border-white/20">
              <img
                src="https://ui-avatars.com/api/?name=Director+Smith&background=random"
                alt="User"
                className="rounded-full"
              />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-sm font-medium text-white">
                Director Smith
              </p>
              <p className="truncate text-xs text-gray-500">Executive Member</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 md:pl-64">
        {/* Top Header (Mobile Toggle + Page Title) */}
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-white/10 bg-boardroom-black/80 px-6 backdrop-blur-md">
          <h1 className="text-xl font-serif font-bold text-white">
            {/* Dynamic Title based on route could go here */}
            Overview
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-executive-gold bg-executive-gold/10 px-2 py-1 rounded border border-executive-gold/20">
              Session active: 04:12
            </span>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
