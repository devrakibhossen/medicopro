"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Users, BarChart3,
  Bot, HeartPulse, MessageSquareText,
  FlaskConical, FileText, Droplets, Bell,
  ShieldCheck, Settings,
} from "lucide-react";

const navGroups = [
  {
    title: "Main",
    links: [
      { label: "Dashboard",        href: "/admin/dashboard",      icon: LayoutDashboard   },
      { label: "Users",            href: "/admin/users",          icon: Users             },
      { label: "Analytics",        href: "/admin/analytics",      icon: BarChart3         },
    ],
  },
  {
    title: "AI & Consultation",
    links: [
      { label: "AI Consultations", href: "/admin/consultations",  icon: Bot               },
      { label: "Symptom Reports",  href: "/admin/symptoms",       icon: HeartPulse        },
      { label: "Chat Logs",        href: "/admin/chats",          icon: MessageSquareText },
    ],
  },
  {
    title: "Medical",
    links: [
      { label: "Lab Reports",      href: "/admin/lab-reports",    icon: FlaskConical      },
      { label: "Prescriptions",    href: "/admin/prescriptions",  icon: FileText          },
      { label: "Blood Donors",     href: "/admin/blood-donors",   icon: Droplets          },
      { label: "Reminders",        href: "/admin/reminders",      icon: Bell              },
    ],
  },
  {
    title: "System",
    links: [
      { label: "Moderation",       href: "/admin/moderation",     icon: ShieldCheck       },
      { label: "Settings",         href: "/admin/settings",       icon: Settings          },
    ],
  },
];

const AdminSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[260px] h-screen  bg-surface border-r border-color flex flex-col px-3 py-5 z-50">
      
      {/* Logo */}
      <div className="flex items-center gap-1 mb-6">
              <Image
                src="/medicopro.png"
                alt="medicopro"
                width={28}
                height={28}
                priority
                className="rounded-md"
              />
              <h3 className="text-xl text-[#cf4f22]  font-bold tracking-tight">
                medicopro
              </h3>
        </div>

      {/* Nav groups */}
      <nav className="flex-1 overflow-y-auto space-y-5 hide-scrollbar">
        {navGroups.map((group) => (
          <div key={group.title}>

            {/* Group title */}
            <p className="text-[10px] font-semibold  tracking-widest text-muted px-2 mb-1.5">
              {group.title}
            </p>

            {/* Links */}
            <ul className="space-y-1.5">
              {group.links.map(({ label, href, icon: Icon }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`text-app group flex items-center gap-2.5 px-2 py-1.5 rounded-md text-sm font-medium transition-all duration-150 ${
                        isActive
                          ? "bg-[#cf4f22] "
                          : " hover:bg-card-hover hover:text-app"
                      }`}
                    >
                      <Icon size={16} />
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-color pt-4 mt-4">
        <div className="flex items-center gap-2.5 px-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-sm font-bold text-blue-600">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-app truncate">Admin</p>
            <p className="text-xs text-muted truncate">admin@medicopro.com</p>
          </div>
        </div>
      </div>

    </aside>
  );
};

export default AdminSidebar;