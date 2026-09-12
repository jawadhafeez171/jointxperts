import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Book Orthopedic Consultation | Bangalore North & Central | JointXperts",
  description:
    "Book an appointment with Dr. Syed Parveez Ahmed at clinics in Bangalore North (Hebbal, Nagavara, New BEL Road) and Bangalore Central (Seshadripuram, Malleshwaram). Expert orthopedic & joint replacement consultations.",
  keywords: [
    "Book Orthopedic Appointment Bangalore",
    "Orthopedic Doctor Hebbal Appointment",
    "Orthopedic Clinic Seshadripuram Booking",
    "Knee Replacement Consultation Bangalore North",
    "Orthopedic Doctor New BEL Road Contact",
    "Ortho Clinic Nagavara Contact",
    "Orthopedic Doctor Malleshwaram Booking"
  ],
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
