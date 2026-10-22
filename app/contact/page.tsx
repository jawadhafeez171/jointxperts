import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Book Orthopedic Consultation | Bangalore & Bengaluru | JointXperts",
  description:
    "Book an appointment with Dr. Syed Parveez Ahmed at clinics in Bangalore North (Hebbal, Nagavara, New BEL Road) and Central Bengaluru (Seshadripuram, Malleshwaram). Expert orthopedic & joint replacement consultations.",
  alternates: {
    canonical: "https://www.jointxperts.in/contact",
  },
  openGraph: {
    title: "Book Orthopedic Consultation | Bangalore & Bengaluru | JointXperts",
    description:
      "Book an appointment with Dr. Syed Parveez Ahmed at clinics in Bangalore North and Central Bengaluru. Expert orthopedic & joint consultations.",
    url: "https://www.jointxperts.in/contact",
    siteName: "JointXperts",
    images: [
      {
        url: "/photo1.webp",
        width: 1200,
        height: 630,
        alt: "Contact JointXperts Bangalore & Bengaluru",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Orthopedic Consultation | Bangalore & Bengaluru | JointXperts",
    description:
      "Book an appointment with Dr. Syed Parveez Ahmed at clinics across Bangalore & Bengaluru.",
    images: ["/photo1.webp"],
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
