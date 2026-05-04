import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services | JointXperts — Orthopedic & Joint Replacement",
  description:
    "Explore the full range of orthopedic services at JointXperts — joint care, spine care, hip & knee replacement, pain relief, and mobility restoration.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Services />
    </div>
  );
}
