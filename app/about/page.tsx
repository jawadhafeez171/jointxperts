import type { Metadata } from "next";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";

export const metadata: Metadata = {
  title: "About Dr. Syed Parveez Ahmed | Orthopedic Surgeon Bangalore North & Central",
  description:
    "Meet Dr. Syed Parveez Ahmed — MBBS, MS(Ortho), FRGUHS(Arthroplasty). Trusted orthopedic & joint replacement surgeon practicing in Bangalore North (Hebbal, Nagavara, New BEL Road) and Bangalore Central (Seshadripuram).",
  keywords: [
    "Dr Syed Parveez Ahmed Orthopedic Surgeon",
    "Orthopedic Doctor in Bangalore North",
    "Best Joint Replacement Doctor Bangalore Central",
    "Orthopedic Surgeon Hebbal",
    "Orthopedic Specialist Malleshwaram",
    "Orthopedic Surgeon Seshadripuram",
    "FRGUHS Arthroplasty Surgeon Bengaluru"
  ],
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-20">
        <About />
        <WhyUs />
      </div>
    </>
  );
}
