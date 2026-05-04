import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Patient Stories | JointXperts",
  description:
    "Read real stories from patients who regained their mobility and quality of life under the care of Dr. Syed Parveez Ahmed at JointXperts.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      <Testimonials />
    </div>
  );
}
