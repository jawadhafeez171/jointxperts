import type { Metadata } from "next";
import { Suspense } from "react";
import Services from "@/components/Services";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Orthopedic Services & Joint Replacement | Bangalore & Bengaluru | JointXperts",
  description:
    "Explore advanced orthopedic care by Dr. Syed Parveez Ahmed — Knee & Hip Replacement, Arthroscopy, Spine Care, and Trauma treatments across Bangalore North and Central Bengaluru clinics.",
  alternates: {
    canonical: "https://www.jointxperts.in/services",
  },
  openGraph: {
    title: "Orthopedic Services & Joint Replacement | Bangalore & Bengaluru | JointXperts",
    description:
      "Explore advanced orthopedic care by Dr. Syed Parveez Ahmed — Knee & Hip Replacement, Arthroscopy, Spine Care, and Trauma treatments across Bangalore North and Central Bengaluru clinics.",
    url: "https://www.jointxperts.in/services",
    siteName: "JointXperts",
    images: [
      {
        url: "/photo1.webp",
        width: 1200,
        height: 630,
        alt: "JointXperts Orthopedic Services Bangalore & Bengaluru",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orthopedic Services & Joint Replacement | Bangalore & Bengaluru | JointXperts",
    description:
      "Explore advanced orthopedic care by Dr. Syed Parveez Ahmed across Bangalore North and Central Bengaluru.",
    images: ["/photo1.webp"],
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Suspense fallback={<LoadingScreen />}>
        <Services />
      </Suspense>
    </div>
  );
}
