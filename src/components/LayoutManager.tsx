"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutManager = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const noLayoutPages = [
    "/accounts/sign-up",
    "/accounts/sign-in",
    "/dashboard",
    "/dashboard/chat",
    "/dashboard/chat/new",
    "/dashboard/chat/[id]",
    "/dashboard/chat/history",
    "/dashboard/profile",
    "/dashboard/records",
    "/dashboard/settings",
  ];
  const isNoLayout = noLayoutPages.includes(pathname);
  if (isNoLayout) {
    return <>{children}</>;
  }
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutManager;
