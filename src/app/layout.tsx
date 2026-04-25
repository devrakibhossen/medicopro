import type { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";
import LayoutManager from "@/components/LayoutManager";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
});
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
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${nunito.variable} ${poppins.variable} h-full antialiased font-nunito `}
    >
      <body className="min-h-full flex flex-col ">
        <LayoutManager>{children}</LayoutManager>
      </body>
    </html>
  );
}
