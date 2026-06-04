import {
  ChevronRight,
  Trash2,
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  CreditCard,
  HelpCircle,
  LogOut,
  Stethoscope,
  FileText,
  Lock,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Medicopro | Settings",
  description:
    "Your Doctor, Zero Distance Healthcare for Everyone, Everywhere Zero Wait. Zero Cost. Zero Worry.",
};


type SettingItem = {
  icon: React.ElementType;
  label: string;
  description: string;
  href?: string;
  badge?: string;
};

type SettingGroup = {
  title: string;
  items: SettingItem[];
};


const settingGroups: SettingGroup[] = [
  {
    title: "Account",
    items: [
      {
        icon: User,
        label: "Profile",
        description: "Name, photo, date of birth",
        href: "/dashboard/settings/profile",
      },
      {
        icon: Lock,
        label: "Password & Security",
        description: "Change password, two-factor auth",
        href: "/dashboard/settings/security",
      },
      {
        icon: CreditCard,
        label: "Billing & Subscription",
        description: "Plan, payment method, invoices",
        href: "/dashboard/settings/billing",
        badge: "Pro",
      },
    ],
  },
  {
    title: "Medical",
    items: [
      {
        icon: Stethoscope,
        label: "Medical Profile",
        description: "Blood type, allergies, conditions",
        href: "/dashboard/settings/medical",
      },
      {
        icon: FileText,
        label: "Medical Records",
        description: "View and manage your health documents",
        href: "/dashboard/settings/records",
      },
    ],
  },
  {
    title: "Preferences",
    items: [
      {
        icon: Bell,
        label: "Notifications",
        description: "Appointment reminders, health tips",
        href: "/dashboard/settings/notifications",
      },
      {
        icon: Palette,
        label: "Appearance",
        description: "Theme, font size, language",
        href: "/dashboard/settings/appearance",
      },
      {
        icon: Globe,
        label: "Language & Region",
        description: "Language, timezone, date format",
        href: "/dashboard/settings/region",
      },
    ],
  },
  {
    title: "Privacy",
    items: [
      {
        icon: Shield,
        label: "Privacy",
        description: "Data sharing, visibility, permissions",
        href: "/dashboard/settings/privacy",
      },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function SectionTitle({ title }: { title: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-muted px-1 mb-2 mt-6 ">
      {title}
    </p>
  );
}

function SettingRow({ item }: { item: SettingItem }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href ?? "#"}
      className="group flex items-center gap-3 px-4 py-3.5 bg-surface hover:bg-card-hover rounded-md transition-colors duration-150 cursor-pointer"
    >
      {/* Icon box */}
      <span className="w-9 h-9 flex-shrink-0 rounded-lg bg-app flex items-center justify-center">
        <Icon className="w-4 h-4 text-muted group-hover:text-app-foreground transition-colors" />
      </span>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-app leading-none">
            {item.label}
          </span>
          {item.badge && (
            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 leading-none">
              {item.badge}
            </span>
          )}
        </div>
        <p className="text-xs text-muted mt-0.5 truncate">{item.description}</p>
      </div>

      <ChevronRight className="w-4 h-4 text-muted/50 group-hover:text-muted transition-colors flex-shrink-0" />
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
const SettingsPage = () => {
  return (
    <div className="lg:max-w-2xl mx-auto px-4 py-8 lg:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-app">Settings</h1>
        <p className="text-sm text-muted mt-1">
          Manage your account, preferences and privacy.
        </p>
      </div>

      {/* Setting groups */}
      {settingGroups.map((group) => (
        <div key={group.title}>
          <SectionTitle title={group.title} />
          <div className="space-y-2.5">
            {group.items.map((item) => (
              <SettingRow key={item.label} item={item} />
            ))}
          </div>
        </div>
      ))}

      {/* Support row */}
      <SectionTitle title="Support" />
      <div className="space-y-2.5">
        <a
          href="/help"
          className="group flex items-center gap-3 px-4 py-3.5 bg-surface hover:bg-card-hover rounded-md transition-colors duration-150 cursor-pointer"
        >
          <span className="w-9 h-9 flex-shrink-0 rounded-lg bg-app flex items-center justify-center">
            <HelpCircle className="w-4 h-4 text-muted" />
          </span>
          <div className="flex-1">
            <span className="text-sm font-medium text-app leading-none">
              Help & Support
            </span>
            <p className="text-xs text-muted mt-0.5">
              FAQs, contact us, report a bug
            </p>
          </div>
          <ChevronRight className="w-4 h-4 text-muted/50 flex-shrink-0" />
        </a>

        <button className="w-full group flex items-center gap-3 px-4 py-3.5 bg-surface hover:bg-card-hover rounded-md transition-colors duration-150 text-left cursor-pointer">
          <span className="w-9 h-9 flex-shrink-0 rounded-md bg-app flex items-center justify-center">
            <LogOut className="w-4 h-4 text-muted" />
          </span>
          <div className="flex-1">
            <span className="text-sm font-medium text-app leading-none">
              Sign out
            </span>
            <p className="text-xs text-muted mt-0.5">
              Sign out of your account
            </p>
          </div>
        </button>
      </div>

      {/* Danger Zone */}
      <SectionTitle title="Danger Zone" />
      <div className="border border-red-200 dark:border-red-900/50 rounded-md overflow-hidden">
        <button className="w-full group flex items-center gap-3 px-4 py-3.5 bg-red-50/60 dark:bg-red-950/20 hover:bg-red-100/80 dark:hover:bg-red-950/40 transition-colors duration-150 text-left cursor-pointer">
          <span className="w-9 h-9 flex-shrink-0 rounded-lg bg-red-100 dark:bg-red-900/40 flex items-center justify-center">
            <Trash2 className="w-4 h-4 text-red-500" />
          </span>
          <div className="flex-1">
            <span className="text-sm font-medium text-red-600 dark:text-red-400 leading-none">
              Delete account
            </span>
            <p className="text-xs text-red-400/80 dark:text-red-500/70 mt-0.5">
              Permanently delete your account and all data
            </p>
          </div>
          <ChevronRight className="w-4 h-4 text-red-400/50 flex-shrink-0" />
        </button>
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-muted/50 mt-10">
        Medicopro · v1.1.0 · Privacy Policy · Terms of Service
      </p>
    </div>
  );
};

export default SettingsPage;
