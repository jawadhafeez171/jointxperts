"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, GraduationCap, Trophy, Stethoscope, ArrowRight } from "lucide-react";

const credentials = [
  { icon: GraduationCap, label: "MBBS" },
  { icon: GraduationCap, label: "MS (Ortho)" },
  { icon: Trophy,        label: "FRGUHS" },
  { icon: Stethoscope,  label: "Arthroplasty" },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Success Rate" },
  { value: "4.9★", label: "Patient Rating" },
];

const highlights = [
  "Advanced Hip & Knee Replacement",
  "Minimally Invasive Techniques",
  "Arthroscopic & Sports Surgery",
  "Comprehensive Spine Care",
  "Fracture & Trauma Management",
  "Post-operative Rehabilitation",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section ref={ref} id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e8f5ee] rounded-full -translate-y-1/2 translate-x-1/3 opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#eef2ff] rounded-full translate-y-1/2 -translate-x-1/3 opacity-25 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* ── LEFT: Photo column ─────────────────────────────────── */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          >
            {/* Decorative navy block behind image */}
            <div className="absolute -bottom-5 -left-5 w-2/3 h-2/3 rounded-3xl bg-[#0f2d5e]/8 -z-10" />
            <div className="absolute -top-5 -right-5 w-1/2 h-1/2 rounded-3xl bg-[#2e8b57]/8 -z-10" />

            {/* Photo */}
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-[#0f2d5e]/20">
              <Image
                src="/photo2.webp"
                alt="Dr. Syed Parveez Ahmed performing joint surgery"
                fill
                className="object-cover object-top"
                priority
              />

              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#091d3d]/80 to-transparent" />

              {/* Name badge inside photo */}
              <div className="absolute bottom-0 inset-x-0 px-6 pb-5">
                <div className="text-white font-bold text-lg leading-tight">Dr. Syed Parveez Ahmed</div>
                <div className="text-white/70 text-xs mt-1 tracking-wide">Consultant Orthopedic & Joint Replacement Surgeon</div>
              </div>
            </div>

            {/* Stat pills floating below the photo */}
            <motion.div
              className="grid grid-cols-3 gap-2 mt-4"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.35 } } }}
            >
              {stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } }}
                  className="flex flex-col items-center justify-center py-3 px-2 rounded-2xl bg-[#f8fafc] border border-gray-100 text-center"
                >
                  <span className="text-[#0f2d5e] font-bold text-sm leading-none">{value}</span>
                  <span className="text-gray-400 text-[10px] mt-1 leading-tight">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Text column ─────────────────────────────────── */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-[#2e8b57]" />
              <span className="text-[#2e8b57] font-semibold text-sm uppercase tracking-widest">Meet the Doctor</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2d5e] leading-tight mb-5">
              Your Expert in <span className="text-[#2e8b57]">Joint & Orthopedic Care</span>
            </h2>

            {/* Credential badges row */}
            <div className="flex flex-wrap gap-2 mb-6">
              {credentials.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#eef2ff] border border-[#0f2d5e]/10 text-[#0f2d5e] text-xs font-semibold"
                >
                  <Icon className="w-3 h-3 text-[#2e8b57]" />
                  {label}
                </div>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
              Dr. Syed Parveez Ahmed is a Fellowship-trained Consultant Orthopedic and Joint Replacement Surgeon with 
              about <strong className="text-[#0f2d5e]">10 years</strong> of experience. His FRGUHS Fellowship in Arthroplasty — 
              one of the most prestigious in the field — combined with his MS in Orthopedics places him among the region&apos;s 
              leading surgical specialists.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
              At <span className="font-semibold text-[#0f2d5e]">JointXperts</span>, every patient receives a 
              personalised, evidence-based treatment plan — from first consultation through to complete recovery.
            </p>

            {/* Highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 mb-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                  className="flex items-center gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2e8b57] flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="?booking=true"
                scroll={false}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0f2d5e] text-white font-semibold hover:bg-[#1a4a8a] transition-all duration-300 hover:shadow-xl hover:shadow-[#0f2d5e]/20 hover:-translate-y-0.5"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="/about"
                className="text-[#0f2d5e] font-semibold text-sm hover:text-[#2e8b57] transition-colors duration-200 underline-offset-4 hover:underline"
              >
                Full Profile →
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
