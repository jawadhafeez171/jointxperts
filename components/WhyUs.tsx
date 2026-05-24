"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Star, Microscope, HeartHandshake, BadgeCheck, Layers } from "lucide-react";

const reasons = [
  { icon: Microscope, title: "Advanced Technology", desc: "State-of-the-art surgical equipment and imaging for precise diagnosis and treatment." },
  { icon: HeartHandshake, title: "Patient-Centred Care", desc: "Every treatment plan is personalised. We take the time to understand your condition and goals." },
  { icon: BadgeCheck, title: "Fellowship Trained", desc: "Dr. Ahmed's FRGUHS fellowship in arthroplasty ensures the highest standard of joint replacement care." },
  { icon: Clock, title: "Timely Appointments", desc: "Prompt appointments, minimal waiting, and efficient follow-up care throughout your treatment." },
  { icon: Star, title: "Proven Outcomes", desc: "With a 98% success rate and thousands of satisfied patients, our results speak for themselves." },
  { icon: Layers, title: "Comprehensive Care", desc: "From diagnosis through rehabilitation — your entire orthopedic journey managed under one roof." },
];

const numbers = [
  { value: "10+", label: "Years of Experience" },
  { value: "98%", label: "Patient Satisfaction" },
  { value: "4.9★", label: "Average Rating" },
];

export default function WhyUs() {
  const ref = useRef(null);
  const numbersRef = useRef(null);
  const reasonsRef = useRef(null);

  const inView = useInView(ref, { once: false, margin: "-80px" });
  const numbersInView = useInView(numbersRef, { once: false, margin: "-80px" });
  const reasonsInView = useInView(reasonsRef, { once: false, margin: "-80px" });

  return (
    <section ref={ref} id="why-us" className="py-24 bg-[#f8fafc] relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-[#2e8b57] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#2e8b57]" />
            <span className="text-[#2e8b57] font-semibold text-sm uppercase tracking-widest">Why JointXperts</span>
            <div className="h-px w-12 bg-[#2e8b57]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2d5e] mb-4">
            The <span className="text-[#2e8b57]">JointXperts</span> Difference
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We combine medical expertise with genuine compassion to deliver outcomes that transform lives.
          </p>
        </motion.div>

        {/* Numbers row */}
        <motion.div
          ref={numbersRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          animate={numbersInView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {numbers.map(({ value, label }) => (
            <motion.div
              key={label}
              variants={{ hidden: { opacity: 0, scale: 0.88 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#0f2d5e] to-[#1a4a8a] text-white"
            >
              <div className="text-4xl font-bold mb-1">{value}</div>
              <div className="text-white/60 text-sm">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reasons grid */}
        <motion.div
          ref={reasonsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={reasonsInView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {reasons.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
              className="group flex gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:border-[#2e8b57]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#e8f5ee] flex items-center justify-center group-hover:bg-[#2e8b57] transition-colors duration-300">
                <Icon className="w-6 h-6 text-[#2e8b57] group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-bold text-[#0f2d5e] mb-1.5">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
