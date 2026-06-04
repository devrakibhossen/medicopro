"use client";
import { useTheme } from "next-themes";
import { Search, Settings, Menu, Sun,Moon} from "lucide-react";

const AdminNav = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <header className="h-14 w-full bg-surface border-b border-color flex items-center justify-between px-4 gap-4 absolute ">
      {/* Left — mobile menu + page title */}
      <div className="flex items-center gap-3">
        <button className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg hover:bg-card-hover text-muted hover:text-app transition-colors">
          <Menu size={18} />
        </button>
        <h1 className="text-sm font-semibold text-app hidden sm:block">
          Admin Dashboard
        </h1>
      </div>

      {/* Center — search */}
      <div className="flex-1 max-w-sm">
        <div className="relative">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search users, reports..."
            className="w-full h-9 pl-8 pr-3 rounded-md bg-app border border-color text-sm text-app placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-[#cf4f22] transition"
          />
        </div>
      </div>

      {/* Right — actions + admin */}
      <div className="flex items-center gap-1.5">
         <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="relative w-8 h-8 flex items-center justify-center rounded-lg hover:bg-card-hover text-muted hover:text-app transition-colors"
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <Sun
            size={16}
            className={`absolute transition-all duration-300 ${
              isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
            }`}
          />
          <Moon
            size={16}
            className={`absolute transition-all duration-300 ${
              isDark ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
            }`}
          />
        </button>

        {/* Settings */}
        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-card-hover text-muted hover:text-app transition-colors">
          <Settings size={16} />
        </button>

        {/* Divider */}
        <div className="w-px h-5 bg-color mx-1" />

        {/* Admin avatar */}
        <button className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-lg hover:bg-card-hover transition-colors">
          <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
            A
          </div>
          <span className="text-sm font-medium text-app hidden sm:block">
            Admin
          </span>
        </button>
      </div>
    </header>
  );
};

export default AdminNav;
