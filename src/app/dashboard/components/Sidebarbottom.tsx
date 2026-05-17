"use client";
import { ChevronsDownUp, Crown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  Settings,
  Languages,
  HelpCircle,
  LogOut,
  Sun,
  Moon,
  ChevronRight,
} from "lucide-react";
import { useTheme } from "next-themes";

const Sidebarbottom = () => {
  const { theme, setTheme } = useTheme();
//   const [isDark, setIsDark] = useState("light");
  const isDark = theme === "dark";
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="group w-full flex items-center justify-between gap-3  bg-card  border-app  p-1.5 pr-3 rounded-full transition-all duration-200"
      >
        <span className="flex items-center gap-2.5">
          <span className="relative shrink-0">
            <Image
              src="/medicopro.png"
              alt="Rakib Hossen"
              width={30}
              height={30}
              priority
              className="rounded-lg"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full" />
          </span>
          <span className="leading-tight text-left">
            <h6 className="font-semibold text-app text-xs">
              Rakib Hossen
            </h6>
            <span className="flex items-center gap-1 mt-0.5">
              <Crown size={9} className="text-amber-400 fill-amber-400" />
              <p className="text-[10px] text-muted font-medium">Free Plan</p>
            </span>
          </span>
        </span>
        <ChevronsDownUp
          size={14}
          className="text-gray-400 group-hover:text-gray-600 transition-colors shrink-0"
        />
      </button>

      {open && (
        <div className="absolute bottom-16 left-4 w-64 rounded-md bg-card border border-gray-200 dark:border-[#ffffff1a] p-2 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <ul className="flex flex-col gap-0.5">
            {/* Settings */}
            <li>
              <Link
                href="/settings"
                className="group flex items-center gap-3 p-2 rounded-xl hover:bg-card-hover  transition-all"
              >
                <span className="w-7 h-7 rounded-lg bg-app flex items-center justify-center transition-colors">
                  <Settings
                    size={14}
                    className="text-gray-500  transition-colors"
                  />
                </span>
                <span className="text-sm text-muted font-medium  flex-1">
                  Settings
                </span>
                <ChevronRight
                  size={13}
                  className="text-gray-300 group-hover:text-gray-400 transition-colors"
                />
              </Link>
            </li>

            {/* Language */}
            <li>
              <Link
                href="/language"
                className="group flex items-center gap-3 p-2 rounded-xl hover:bg-card-hover  transition-all"
              >
                <span className="w-7 h-7 rounded-lg bg-app flex items-center justify-center transition-colors">
                  <Languages
                    size={14}
                    className="text-gray-500 group-hover:text-[#cf4f22] transition-colors"
                  />
                </span>
                <span className="text-sm text-muted font-medium  flex-1">
                  Language
                </span>
                <ChevronRight
                  size={13}
                  className="text-gray-300 group-hover:text-gray-400 transition-colors"
                />
              </Link>
            </li>

            {/* Get Help */}
            <li>
              <Link
                href="/help"
                className="group flex items-center gap-3 p-2 rounded-xl hover:bg-card-hover transition-all "
              >
                <span className="w-7 h-7 rounded-lg bg-app flex items-center justify-center transition-colors">
                  <HelpCircle
                    size={14}
                    className="text-gray-500 group-hover:text-[#cf4f22] transition-colors"
                  />
                </span>
                <span className="text-sm text-muted font-medium  flex-1">
                  Get Help
                </span>
                <ChevronRight
                  size={13}
                  className="text-gray-300 group-hover:text-gray-400 transition-colors"
                />
              </Link>
            </li>

            {/* Divider */}
            <li className="my-1 ">
              <div className="h-px bg-[#e5e4df] dark:bg-[#2e2e2c]" />
            </li>

            {/* Dark Mode Toggle */}
            <li>
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="group w-full flex items-center gap-3 p-2 rounded-xl hover:bg-card-hover transition-all"
              >
                <span className="w-7 h-7 rounded-lg bg-app flex items-center justify-center transition-colors">
                  {isDark ? (
                    <Moon size={14}  />
                  ) : (
                    <Sun size={14}/>
                  )}
                </span>
                <span className="text-sm text-muted font-medium  flex-1 text-left">
                  {isDark ? "Dark mode" : "Light mode"}
                </span>

                {/* CSS-only toggle pill */}
                <div
                  className={`relative w-9 h-5 rounded-full transition-colors duration-300 ${isDark ? "bg-[#cf4f22]" : "bg-gray-200"}`}
                >
                  <div
                    className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-300 ${isDark ? "left-[18px]" : "left-0.5"}`}
                  />
                </div>
              </button>
            </li>

            {/* Divider */}
            <li className="my-1 ">
              <div className="h-px bg-[#e5e4df] dark:bg-[#2e2e2c]" />
            </li>

            {/* Logout */}
            <li>
              <button className="group w-full flex items-center gap-3 p-2 rounded-xl hover:bg-card-hover transition-all">
                <span className="w-7 h-7 rounded-lg bg-app flex items-center justify-center transition-colors">
                  <LogOut
                    size={14}
                    className="text-gray-500 group-hover:text-red-500 transition-colors"
                  />
                </span>
                <span className="text-sm text-gray-600 font-medium group-hover:text-red-600 transition-colors">
                  Log out
                </span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebarbottom;
