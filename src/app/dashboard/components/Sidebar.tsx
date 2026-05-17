"use client";

import {
  PanelLeftClose,
  MessageCircle,
  FolderHeart,
  CalendarDays,
  ClipboardList,
  Bell,
  Plus,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Sidebarbottom from "./Sidebarbottom";

const navLinks = [
  { label: "Chat", href: "/", icon: MessageCircle },
  { label: "Records", href: "/dashboard/records", icon: FolderHeart },
  { label: "Appointment", href: "/dashboard/appointment", icon: CalendarDays },
  {
    label: "Prescription",
    href: "/dashboard/prescription",
    icon: ClipboardList,
  },
  { label: "Reminder", href: "/dashboard/reminder", icon: Bell },
];

const histories = [
  { name: "I have a fever", time: "2m ago" },
  { name: "Healthcare for everyone", time: "1h ago" },
  { name: "Symptom understanding", time: "5h ago" },
  { name: "eyes problem", time: "Yesterday" },
];

const Sidebar = () => {
  const [active, setActive] = useState("");

  return (
    <aside className="bg-surface h-screen w-[280px] flex flex-col border-r border-color dark:border-[#ffffff1a] font-poppins ">
      <div className="px-4 pt-4 pb-3  dark:border-[#ffffff1a]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Image
              src="/medicopro.png"
              alt="medicopro"
              width={28}
              height={28}
              priority
              className="rounded-md"
            />
            <h3 className="text-xl text-[#cf4f22] font-bold tracking-tight">
              medicopro
            </h3>
          </div>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-all">
            <PanelLeftClose size={16} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-5">
        <div>
          <li>
            <Link
              href="/"
              className="group flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 text-app
                    "
            >
              <span
                className="w-7 h-7 bg-card rounded-full flex items-center justify-center transition-all 
                    "
              >
                <Plus size={15} />
              </span>
              New Consultation
            </Link>
          </li>
          <ul className="flex flex-col gap-0.5">
            {navLinks.map(({ label, href, icon: Icon }) => {
              const isActive = active === label;
              return (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={() => setActive(label)}
                    className={`text-muted group flex items-center gap-2.5 px-2 py-1 rounded-lg text-sm font-medium transition-all duration-150 hover:bg-card-hover 
                      ${
                        isActive
                          ? "bg-gray-100 bg-[#f0f0ec] dark:bg-[#323230]"
                          : "hover:bg-card-hover"
                      }`}
                  >
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center transition-all
                     "
                    >
                      <Icon size={15} />
                    </span>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p className="text-[10px] font-semibold text-app uppercase tracking-widest px-2 mb-1.5">
            Recent
          </p>
          <ul className="flex flex-col gap-0.5">
            {histories.map(({ name, time }) => (
              <li key={name}>
                <Link
                  href="/"
                  className="group flex items-start gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-all duration-150 hover:bg-card-hover"
                >
                  <span className="w-7 h-7 rounded-full bg-app flex items-center justify-center shrink-0 transition-all">
                    <Clock size={13} className="text-gray-400" />
                  </span>
                  <span className="flex flex-col min-w-0">
                    <span className="text-muted  text-xs font-medium truncate leading-tight transition-colors">
                      {name}
                    </span>
                    <span className="text-[10px] text-muted mt-0.5">
                      {time}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-3 pb-3 pt-2 border-t border-color">
        <Sidebarbottom />
      </div>
    </aside>
  );
};

export default Sidebar;
