"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarCheck, Stethoscope, HeartPulse } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Book Appointment",
    desc: "Schedule your visit online or by phone. We offer same-week appointments with minimal waiting times.",
    color: "#0f2d5e",
  },
  {
    number: "02",
    icon: Stethoscope,
    title: "Consult Dr. Ahmed",
    desc: "Receive a thorough evaluation, accurate diagnosis, and a personalised treatment plan tailored to your condition.",
    color: "#2e8b57",
  },
  {
    number: "03",
    icon: HeartPulse,
    title: "Treat & Recover",
    desc: "Undergo your procedure with full aftercare support until you regain complete mobility and quality of life.",
    color: "#1a4a8a",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#0f2d5e 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#2e8b57]" />
            <span className="text-[#2e8b57] font-semibold text-sm uppercase tracking-widest">Patient Journey</span>
            <div className="h-px w-12 bg-[#2e8b57]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2d5e] mb-4">
            How It <span className="text-[#2e8b57]">Works</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Getting the care you need is simple. Here&apos;s what your journey with JointXperts looks like.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 relative">
          {/* Connecting line (desktop only) */}
          <div className="absolute top-12 left-[22%] right-[22%] h-px bg-gradient-to-r from-[#0f2d5e]/30 via-[#2e8b57]/50 to-[#1a4a8a]/30 hidden md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon circle */}
              <div className="relative mb-6 z-10">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center shadow-xl"
                  style={{ backgroundColor: step.color }}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 flex items-center justify-center text-xs font-bold shadow"
                  style={{ color: step.color, borderColor: step.color }}
                >
                  {step.number}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#0f2d5e] mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.58 }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2e8b57] text-white font-semibold hover:bg-[#1f6b3d] transition-all duration-300 hover:shadow-xl hover:shadow-green-900/30 hover:-translate-y-0.5"
          >
            Book Your First Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
