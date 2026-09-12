import type { Metadata } from "next";
import { Suspense } from "react";
import Services from "@/components/Services";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Orthopedic Services & Joint Replacement | Bangalore North & Central",
  description:
    "Explore advanced orthopedic care by Dr. Syed Parveez Ahmed — Knee & Hip Replacement, Arthroscopy, Spine Care, and Trauma treatments across Bangalore North and Bangalore Central clinics.",
  keywords: [
    "Knee Replacement Surgery Bangalore North",
    "Hip Replacement Surgeon Bangalore Central",
    "Arthroscopy Surgeon Hebbal",
    "Spine Treatment Nagavara",
    "Sports Medicine Doctor New BEL Road",
    "Joint Replacement Malleshwaram",
    "Orthopedic Trauma Surgery Seshadripuram"
  ],
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
