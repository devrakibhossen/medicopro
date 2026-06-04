"use client";

import { useState } from "react";
import {
  Clock,
  Trash2,
  Pencil,
  MoreHorizontal,
  Check,
  Pill,
  Calendar,
  TestTube,
  HeartPulse,
} from "lucide-react";

type ReminderStatus = "upcoming" | "done" | "missed";

type ReminderType =
  | "Medicine"
  | "Appointment"
  | "Lab Test"
  | "Vitals";

type Reminder = {
  id: string;
  type: ReminderType;
  title: string;
  subtitle: string;
  time: string;
  days: string[];
  status: ReminderStatus;
  active: boolean;
  color: string;
};

const filterTabs: { label: string; value: "all" | ReminderStatus }[] = [
  { label: "All", value: "all" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Done", value: "done" },
  { label: "Missed", value: "missed" },
];

const typeConfig = {
  Medicine: {
    icon: Pill,
    bg: "bg-app",
    text: "text-muted",
  },
  Appointment: {
    icon: Calendar,
    bg: "bg-app",
    text: "text-muted",
  },
  "Lab Test": {
    icon: TestTube,
    bg: "bg-app",
    text: "text-muted",
  },
  Vitals: {
    icon: HeartPulse,
    bg: "bg-app",
    text: "text-muted",
  },
};

const statusConfig = {
  upcoming: {
    dot: "bg-blue-500",
  },
  done: {
    dot: "bg-emerald-500",
  },
  missed: {
    dot: "bg-red-500",
  },
};

// ─── Mock Data ─────────────────────────────────────────────────────

const initialReminders: Reminder[] = [
  {
    id: "r1",
    type: "Medicine",
    title: "Azithromycin 500mg",
    subtitle: "1 tablet · After breakfast",
    time: "08:00 AM",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    status: "upcoming",
    active: true,
    color: "blue",
  },
  {
    id: "r2",
    type: "Medicine",
    title: "Montelukast 10mg",
    subtitle: "1 tablet · Before bed",
    time: "10:00 PM",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    status: "upcoming",
    active: true,
    color: "purple",
  },
  {
    id: "r3",
    type: "Appointment",
    title: "Dr. Arafat Hossain",
    subtitle: "Internal Medicine · Dhaka Medical",
    time: "11:00 AM",
    days: ["Sat"],
    status: "upcoming",
    active: true,
    color: "emerald",
  },
  {
    id: "r4",
    type: "Lab Test",
    title: "CBC + Blood Sugar",
    subtitle: "Fasting required · Popular Lab",
    time: "07:30 AM",
    days: ["Sun"],
    status: "upcoming",
    active: true,
    color: "amber",
  },
  {
    id: "r5",
    type: "Vitals",
    title: "Blood Pressure Check",
    subtitle: "Sit quietly for 5 min before",
    time: "09:00 AM",
    days: ["Mon", "Wed", "Fri"],
    status: "done",
    active: true,
    color: "rose",
  },
  {
    id: "r6",
    type: "Medicine",
    title: "Paracetamol 500mg",
    subtitle: "1–2 tablets · If fever",
    time: "02:00 PM",
    days: ["Mon", "Tue", "Wed"],
    status: "missed",
    active: false,
    color: "blue",
  },
];

// ─── Toggle Component ─────────────────────────────────────────────

function Toggle({
  active,
  onChange,
}: {
  active: boolean;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      className={`w-10 h-5 rounded-full transition relative ${
        active ? "bg-[#cf4f22]" : "bg-gray-300"
      }`}
    >
      <div
        className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
          active ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

// ─── Reminder Card ────────────────────────────────────────────────

function ReminderCard({
  reminder,
  onToggle,
  onMarkDone,
  onDelete,
}: {
  reminder: Reminder;
  onToggle: (id: string) => void;
  onMarkDone: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { icon: Icon, bg, text } = typeConfig[reminder.type];
  const { dot } = statusConfig[reminder.status];

  return (
    <div
      className={`group relative bg-surface border border-color rounded-md p-4 transition-opacity duration-200 ${
        !reminder.active ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div
          className={`w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0 ${bg}`}
        >
          <Icon className={`w-4 h-4 ${text}`} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm font-semibold text-app truncate">
                  {reminder.title}
                </h3>

                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dot}`}
                />
              </div>

              <p className="text-xs text-muted mt-0.5 truncate">
                {reminder.subtitle}
              </p>
            </div>

            {/* Toggle + Menu */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Toggle
                active={reminder.active}
                onChange={() => onToggle(reminder.id)}
              />

              <div className="relative">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-card-hover text-muted hover:text-app transition-colors"
                >
                  <MoreHorizontal size={15} />
                </button>

                {menuOpen && (
                  <div
                    className="absolute right-0 top-8 w-36 bg-card border border-color rounded-md p-1 z-20 shadow-lg"
                    onMouseLeave={() => setMenuOpen(false)}
                  >
                    <button
                      onClick={() => {
                        onMarkDone(reminder.id);
                        setMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-app hover:bg-card-hover transition-colors"
                    >
                      <Check
                        size={14}
                        className="text-emerald-500"
                      />
                      Mark done
                    </button>

                    <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-app hover:bg-card-hover transition-colors">
                      <Pencil
                        size={14}
                        className="text-blue-500"
                      />
                      Edit
                    </button>

                    <div className=" h-px bg-color" />

                    <button
                      onClick={() => {
                        onDelete(reminder.id);
                        setMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                    >
                      <Trash2 size={14} />
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Time + Days */}
          <div className="flex items-center gap-3 mt-3 flex-wrap">
            <span className="flex items-center gap-1 text-xs font-medium text-app bg-app px-2.5 py-1 rounded-full border border-color">
              <Clock size={11} />
              {reminder.time}
            </span>

            <div className="flex gap-1 flex-wrap">
              {[
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
              ].map((d) => (
                <span
                  key={d}
                  className={`text-[10px] font-semibold w-7 h-6 flex items-center justify-center rounded-md transition-colors ${
                    reminder.days.includes(d)
                      ? "bg-[#cf4f22] text-white"
                      : "bg-app text-muted border border-color"
                  }`}
                >
                  {d[0]}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────

const ReminderTab = () => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | ReminderStatus
  >("all");

  const [reminders, setReminders] =
    useState<Reminder[]>(initialReminders);

  const filtered =
    activeFilter === "all"
      ? reminders
      : reminders.filter(
          (r) => r.status === activeFilter
        );

  const toggle = (id: string) => {
    setReminders((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, active: !r.active }
          : r
      )
    );
  };

  const markDone = (id: string) => {
    setReminders((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, status: "done" }
          : r
      )
    );
  };

  const remove = (id: string) => {
    setReminders((prev) =>
      prev.filter((r) => r.id !== id)
    );
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-1.5 mb-5 bg-surface border border-color p-1 rounded-md">
        {filterTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveFilter(tab.value)}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeFilter === tab.value
                ? "bg-[#cf4f22] text-white shadow-sm"
                : "text-muted hover:text-app"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {filtered.map((reminder) => (
          <ReminderCard
            key={reminder.id}
            reminder={reminder}
            onToggle={toggle}
            onMarkDone={markDone}
            onDelete={remove}
          />
        ))}
      </div>
    </div>
  );
};

export default ReminderTab;