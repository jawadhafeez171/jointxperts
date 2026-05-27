"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Bone, Activity, RotateCcw, Brain, ArrowRight, Users, Award, Shield, Star, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "5000+", label: "Patients Treated" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Shield, value: "98%", label: "Success Rate" },
  { icon: Star, value: "4.9★", label: "Patient Rating" },
];

// Single unified services list with rich image coverage
const services = [
  {
    title: "Total Knee Replacement",
    desc: "Advanced knee replacement surgery for severe arthritis and chronic knee pain.",
    icon: RotateCcw,
    accent: "#0f2d5e",
    image: "/services/service_knee_replacement.png",
  },
  {
    title: "Total Hip Replacement",
    desc: "Effective treatment for hip arthritis, avascular necrosis, and hip joint damage.",
    icon: Activity,
    accent: "#2e8b57",
    image: "/services/service_hip_replacement.png",
  },
  {
    title: "Arthroscopy",
    desc: "Minimally invasive keyhole surgery for sports injuries and ligament tears.",
    icon: Bone,
    accent: "#1a4a8a",
    image: "/services/service_arthroscopy.png",
  },
  {
    title: "Fracture Management",
    desc: "Comprehensive care for simple and complex fractures with modern fixation techniques.",
    icon: Shield,
    accent: "#0f2d5e",
    image: "/services/service_fracture.png",
  },
  {
    title: "Spine Injury Care",
    desc: "Evaluation and management of spine-related pain and injuries.",
    icon: Brain,
    accent: "#2e8b57",
    image: "/services/service_spine_care.png",
  },
  {
    title: "Joint Care",
    desc: "Comprehensive diagnosis and personalised treatment for arthritis, joint inflammation, and degenerative joint disease.",
    icon: Zap,
    accent: "#1a4a8a",
    image: "/services/service_joint_care.png",
  },
  {
    title: "Spine Care",
    desc: "Advanced management of disc herniation, spinal stenosis, scoliosis, and chronic back pain.",
    icon: Activity,
    accent: "#0f2d5e",
    image: "/services/service_spine_general.png",
  },
  {
    title: "Knee Pain & Arthritis",
    desc: "Comprehensive non-surgical and preventive treatment for degenerative knee wear, chronic joint stiffness, and osteoarthritis.",
    icon: Bone,
    accent: "#2e8b57",
    image: "/services/service_joint_care.png",
  },
  {
    title: "Ligament Injuries (ACL/PCL)",
    desc: "State-of-the-art keyhole ligament reconstruction and customized athletic rehabilitation for sports joint injuries.",
    icon: RotateCcw,
    accent: "#1a4a8a",
    image: "/blogs/blog_acl_recovery.png",
  },
];

const serviceIdMap: Record<string, string> = {
  "Total Knee Replacement": "knee-replacement",
  "Total Hip Replacement": "hip-replacement",
  "Arthroscopy": "arthroscopy",
  "Fracture Management": "fracture-management",
  "Spine Injury Care": "spine-injury-care",
  "Joint Care": "joint-care",
  "Spine Care": "spine-care",
  "Knee Pain & Arthritis": "knee-pain-arthritis",
  "Ligament Injuries (ACL/PCL)": "ligament-injuries",
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
                    className="group relative h-96 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#0f2d5e]/12 transition-all duration-500 cursor-pointer border border-gray-100 flex flex-col justify-end"
                  >
                    {/* Background Cover Image */}
                    {s.image && (
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700 z-0"
                      />
                    )}
                    
                    {/* Multi-layered visual gradient overlay for text legibility and rich aesthetic */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2d5e] via-[#0f2d5e]/40 to-transparent z-10 transition-all duration-500 group-hover:from-[#0f2d5e]/95 group-hover:via-[#0f2d5e]/50" />

                    {/* Left active colored accent indicator line */}
                    <div
                      className="absolute left-0 bottom-0 top-0 w-1.5 transition-all duration-500 scale-y-0 group-hover:scale-y-100 z-30 origin-bottom"
                      style={{ backgroundColor: s.accent }}
                    />
                    
                    {/* Floating glassmorphic circular icon badge */}
                    <div 
                      className="absolute top-5 right-5 z-20 w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-lg border border-white/20 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                      style={{ backgroundColor: `${s.accent}d0` }}
                    >
                      <s.icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Card Content Area (at bottom on top of gradient) */}
                    <div className="relative z-20 p-6 md:p-8 flex flex-col justify-end text-white transition-all duration-500 translate-y-6 group-hover:translate-y-0">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors drop-shadow-sm">
                        {s.title}
                      </h3>
                      
                      {/* Description with reveal effect */}
                      <p className="text-white/85 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-24 overflow-hidden">
                        {s.desc}
                      </p>
                      
                      {/* Arrow link indicator */}
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn More
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
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
