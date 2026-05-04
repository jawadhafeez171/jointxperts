import type { Metadata } from "next";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";

export const metadata: Metadata = {
  title: "About Dr. Syed Parveez Ahmed | JointXperts",
  description:
    "Meet Dr. Syed Parveez Ahmed — MBBS, MS(Ortho), FRGUHS(Arthroplasty). Learn about his qualifications, experience, and commitment to orthopedic excellence.",
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
