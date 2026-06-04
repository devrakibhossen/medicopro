import type { Metadata } from "next";
import AdminNav from "./components/AdminNav";
import AdminSidebar from "./components/AdminSidebar";

export const metadata: Metadata = {
  title: "medicopro | dashboard",
  description:
    "Your Doctor, Zero Distance Healthcare for Everyone, Everywhere Zero Wait. Zero Cost. Zero Worry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen">
      <AdminNav/>
      <div className="flex">
      <AdminSidebar/>
      <div className="flex-1 min-w-0 overflow-y-auto p-5">{children}</div>
      </div>
    </div>
  );
}
