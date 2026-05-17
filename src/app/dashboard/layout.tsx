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
  return <div className="flex h-screen">
    {/* <div className=""> */}
      <Sidebar/>
    {/* </div> */}
    <div className="flex-1 min-w-0 overflow-y-auto p-5" >
    {children}
    </div>
    </div>;
}
