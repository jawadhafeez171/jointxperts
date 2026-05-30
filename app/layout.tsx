import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import SplashScreen from "@/components/SplashScreen";
import FloatingBookButton from "@/components/FloatingBookButton";
import { Suspense } from "react";
import BookingModal from "@/components/BookingModal";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JointXperts | Dr. Syed Parveez Ahmed — Orthopedic & Joint Replacement Surgeon",
  description:
    "Expert orthopedic care by Dr. Syed Parveez Ahmed, MBBS MS(Ortho) FRGUHS(Arthroplasty). Specialising in joint care, spine care, hip & knee replacement, and pain relief.",
  icons: { icon: "/favicon.ico" },
  verification: {
    google: "eM33ov6Ql0Bx2EUNtCWJIgU1bZIwJdzNElJtm0Yj4JM",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full scroll-smooth antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <SplashScreen />
        <Navbar />
        <main className="flex-1 pb-20 lg:pb-0" style={{ paddingBottom: 'calc(5rem + env(safe-area-inset-bottom))' }}>{children}</main>
        <FloatingBookButton />
        <Footer />
        <BottomNav />
        <Suspense fallback={null}>
          <BookingModal />
        </Suspense>
      </body>
    </html>
  );
}
