import type { Metadata } from "next";
import Sidebar from "./components/Sidebar";

export const metadata: Metadata = {
  title: "medicopro - AI assistant for symptom understanding.",
  description:
    "Your Doctor, Zero Distance Healthcare for Everyone, Everywhere Zero Wait. Zero Cost. Zero Worry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex">
    <div className="w-64 bg-orange-500 p-5">
      <Sidebar/>
    </div>
    <div className="w-64 bg-white p-5" >
    {children}
    </div>
    </div>;
}
