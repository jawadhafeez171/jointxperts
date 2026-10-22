import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Patient Stories & Orthopedic Recovery Testimonials | Bangalore & Bengaluru | JointXperts",
  description:
    "Read real recovery stories and testimonials from patients treated for knee replacement, hip surgery, and sports injuries by Dr. Syed Parveez Ahmed in Bangalore & Bengaluru.",
  alternates: {
    canonical: "https://www.jointxperts.in/testimonials",
  },
  openGraph: {
    title: "Patient Stories & Orthopedic Recovery Testimonials | Bangalore & Bengaluru | JointXperts",
    description:
      "Read real recovery stories and testimonials from patients treated by Dr. Syed Parveez Ahmed in Bangalore & Bengaluru.",
    url: "https://www.jointxperts.in/testimonials",
    siteName: "JointXperts",
    images: [
      {
        url: "/photo1.webp",
        width: 1200,
        height: 630,
        alt: "Patient Stories at JointXperts Bangalore & Bengaluru",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patient Stories & Testimonials | Bangalore & Bengaluru | JointXperts",
    description: "Read real stories from patients treated by Dr. Syed Parveez Ahmed in Bangalore & Bengaluru.",
    images: ["/photo1.webp"],
  },
};

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      <Testimonials />
    </div>
  );
}
