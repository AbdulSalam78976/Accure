import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import VantaBackground from "@/components/VantaBackground";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "accure III — Enterprise System Integration Platform",
  description: "Unify Infrastructure, Governance & Utilities with real-time AI orchestration and API-first integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F6EFDD] text-[#141c0d]">
        <VantaBackground />
        {children}
      </body>
    </html>
  );
}
