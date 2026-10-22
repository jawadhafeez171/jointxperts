import type { Metadata } from "next";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";

export const metadata: Metadata = {
  title: "About Dr. Syed Parveez Ahmed | Orthopedic Surgeon in Bangalore & Bengaluru | JointXperts",
  description:
    "Meet Dr. Syed Parveez Ahmed — MBBS, MS(Ortho), FRGUHS(Arthroplasty). Trusted orthopedic & joint replacement surgeon practicing in Bangalore North (Hebbal, Nagavara, New BEL Road) and Central Bengaluru (Seshadripuram).",
  alternates: {
    canonical: "https://www.jointxperts.in/about",
  },
  openGraph: {
    title: "About Dr. Syed Parveez Ahmed | Orthopedic Surgeon in Bangalore & Bengaluru | JointXperts",
    description:
      "Meet Dr. Syed Parveez Ahmed — MBBS, MS(Ortho), FRGUHS(Arthroplasty). Trusted orthopedic & joint replacement surgeon practicing in Bangalore North and Central Bengaluru.",
    url: "https://www.jointxperts.in/about",
    siteName: "JointXperts",
    images: [
      {
        url: "/photo1.webp",
        width: 1200,
        height: 630,
        alt: "Dr. Syed Parveez Ahmed — Orthopedic Surgeon Bangalore & Bengaluru",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dr. Syed Parveez Ahmed | Orthopedic Surgeon in Bangalore & Bengaluru",
    description:
      "Meet Dr. Syed Parveez Ahmed — MBBS, MS(Ortho), FRGUHS(Arthroplasty). Trusted orthopedic surgeon in Bangalore & Bengaluru.",
    images: ["/photo1.webp"],
  },
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
      <WhyUs />
    </div>
  );
}
