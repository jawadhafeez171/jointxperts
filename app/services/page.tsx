import type { Metadata } from "next";
import { Suspense } from "react";
import Services from "@/components/Services";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Services | JointXperts — Orthopedic & Joint Replacement",
  description:
    "Explore the full range of orthopedic services at JointXperts — joint care, spine care, hip & knee replacement, pain relief, and mobility restoration.",
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
