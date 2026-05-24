"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Bone, Activity, RotateCcw, Brain, ArrowRight, Users, Award, Shield, Star, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "5000+", label: "Patients Treated" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Shield, value: "98%", label: "Success Rate" },
  { icon: Star, value: "4.9★", label: "Patient Rating" },
];

// Single unified services list — no duplicates
const services = [
  {
    title: "Total Knee Replacement",
    desc: "Advanced knee replacement surgery for severe arthritis and chronic knee pain.",
    icon: RotateCcw,
    accent: "#0f2d5e",
  },
  {
    title: "Total Hip Replacement",
    desc: "Effective treatment for hip arthritis, avascular necrosis, and hip joint damage.",
    icon: Activity,
    accent: "#2e8b57",
  },
  {
    title: "Arthroscopy",
    desc: "Minimally invasive keyhole surgery for sports injuries and ligament tears.",
    icon: Bone,
    accent: "#1a4a8a",
  },
  {
    title: "Fracture Management",
    desc: "Comprehensive care for simple and complex fractures with modern fixation techniques.",
    icon: Shield,
    accent: "#0f2d5e",
  },
  {
    title: "Spine Injury Care",
    desc: "Evaluation and management of spine-related pain and injuries.",
    icon: Brain,
    accent: "#2e8b57",
  },
  {
    title: "Joint Care",
    desc: "Comprehensive diagnosis and personalised treatment for arthritis, joint inflammation, and degenerative joint disease.",
    icon: Zap,
    accent: "#1a4a8a",
  },
  {
    title: "Spine Care",
    desc: "Advanced management of disc herniation, spinal stenosis, scoliosis, and chronic back pain.",
    icon: Activity,
    accent: "#0f2d5e",
  },
];

const serviceIdMap: Record<string, string> = {
  "Total Knee Replacement": "knee-replacement",
  "Total Hip Replacement": "hip-replacement",
  "Arthroscopy": "joint-care",
  "Fracture Management": "joint-care",
  "Spine Injury Care": "spine-care",
  "Joint Care": "joint-care",
  "Spine Care": "spine-care",
};

const conditions = [
  "Knee Pain & Arthritis",
  "Hip Joint Arthritis",
  "Shoulder Pain & Frozen Shoulder",
  "Sports Injuries",
  "Ligament Injuries (ACL/PCL)",
  "Meniscus Injuries",
  "Back & Spine Pain",
  "Fractures & Trauma",
  "Joint Stiffness & Swelling",
];

// ─── Shared variants ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

// ─── Scroll-triggered wrapper ────────────────────────────────────────────────
function ScrollReveal({
  children,
  className,
  delay = 0,
  variants = fadeUp,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: typeof fadeUp;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomeFeatures() {
  const servicesRef   = useRef(null);
  const conditionsRef = useRef(null);
  const statsRef      = useRef(null);

  const servicesInView   = useInView(servicesRef,   { once: false, margin: "-80px" });
  const conditionsInView = useInView(conditionsRef, { once: false, margin: "-80px" });
  const statsInView      = useInView(statsRef,      { once: false, margin: "-80px" });

  return (
    <>
      {/* ── Services ──────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8fafc]" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-14">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-[#2e8b57]" />
                <span className="text-[#2e8b57] font-semibold text-sm uppercase tracking-widest">What We Treat</span>
                <div className="h-px w-12 bg-[#2e8b57]" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2d5e] mb-4">
                Our <span className="text-[#2e8b57]">Specialised</span> Services
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                From conservative management to advanced surgical interventions — the full spectrum of orthopedic care under one roof.
              </p>
            </ScrollReveal>
          </div>

          {/* Service cards — staggered */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {services.map((s) => {
              const serviceId = serviceIdMap[s.title] || "";
              const href = serviceId ? `/services?service=${serviceId}` : "/services";
              return (
                <Link key={s.title} href={href} className="block h-full">
                  <motion.div
                    variants={fadeUp}
                    custom={0}
                    className="group flex gap-5 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:shadow-[#0f2d5e]/8 transition-all duration-300 h-full cursor-pointer"
                  >
                    <div
                      className="w-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: s.accent }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${s.accent}18` }}
                        >
                          <s.icon className="w-4 h-4" style={{ color: s.accent }} />
                        </div>
                        <h3 className="text-base font-bold text-[#0f2d5e]">{s.title}</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>

          <ScrollReveal delay={0.1} className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#0f2d5e] text-[#0f2d5e] font-semibold hover:bg-[#0f2d5e] hover:text-white transition-all duration-300"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Conditions ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white" ref={conditionsRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-[#2e8b57]" />
                <span className="text-[#2e8b57] font-semibold text-sm uppercase tracking-widest">Conditions</span>
                <div className="h-px w-12 bg-[#2e8b57]" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2d5e] mb-4">
                Common Joint <span className="text-[#2e8b57]">Problems</span> We Treat
              </h2>
            </ScrollReveal>
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial="hidden"
            animate={conditionsInView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {conditions.map((c) => (
              <motion.span
                key={c}
                variants={scaleIn}
                custom={0}
                className="px-5 py-2.5 rounded-full border border-[#0f2d5e]/15 bg-[#f8fafc] text-[#0f2d5e] font-medium text-sm hover:bg-[#0f2d5e] hover:text-white hover:border-[#0f2d5e] transition-all duration-200 cursor-default shadow-sm"
              >
                {c}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f8fafc]" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.13 } } }}
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <motion.div
                key={label}
                variants={scaleIn}
                custom={0}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#0f2d5e] to-[#1a4a8a] text-white"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-[#3aad6e]" />
                </div>
                <div className="text-4xl font-bold mb-1">{value}</div>
                <div className="text-white/60 text-sm">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </>
  );
}
