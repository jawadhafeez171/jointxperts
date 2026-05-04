import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Book Appointment | JointXperts",
  description:
    "Contact JointXperts to book a consultation with Dr. Syed Parveez Ahmed. Get expert orthopedic advice and begin your journey to pain-free living.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
