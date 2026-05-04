"use client";

import { Bone, Activity, RotateCcw, Zap, Brain, Heart } from "lucide-react";

const services = [
  {
    icon: Bone,
    title: "Joint Care",
    description:
      "Comprehensive diagnosis and treatment of joint conditions including arthritis, joint inflammation, and degenerative joint disease with personalised care plans.",
    color: "from-[#0f2d5e] to-[#1a4a8a]",
    lightColor: "bg-[#eef2ff]",
    iconColor: "text-[#0f2d5e]",
    tag: "Speciality",
  },
  {
    icon: Activity,
    title: "Spine Care",
    description:
      "Expert management of spinal disorders including disc herniation, spinal stenosis, scoliosis, and chronic back pain using advanced non-surgical and surgical approaches.",
    color: "from-[#2e8b57] to-[#1f6b3d]",
    lightColor: "bg-[#e8f5ee]",
    iconColor: "text-[#2e8b57]",
    tag: "Advanced",
  },
  {
    icon: RotateCcw,
    title: "Hip Replacement",
    description:
      "State-of-the-art total and partial hip replacement surgery using the latest implants and minimally invasive techniques for faster recovery and lasting relief.",
    color: "from-[#0f2d5e] to-[#2e8b57]",
    lightColor: "bg-[#f0f7ff]",
    iconColor: "text-[#0f2d5e]",
    tag: "Surgical",
  },
  {
    icon: Brain,
    title: "Knee Replacement",
    description:
      "Total and partial knee arthroplasty with precision alignment technology. Restore full knee function and eliminate chronic pain with proven long-term outcomes.",
    color: "from-[#1a4a8a] to-[#0f2d5e]",
    lightColor: "bg-[#eef2ff]",
    iconColor: "text-[#1a4a8a]",
    tag: "Surgical",
  },
  {
    icon: Zap,
    title: "Pain Relief",
    description:
      "Multimodal pain management strategies combining injections, physiotherapy, and targeted medication to provide effective and lasting relief from musculoskeletal pain.",
    color: "from-[#2e8b57] to-[#3aad6e]",
    lightColor: "bg-[#e8f5ee]",
    iconColor: "text-[#2e8b57]",
    tag: "Non-Surgical",
  },
  {
    icon: Heart,
    title: "Mobility Restoration",
    description:
      "Tailored rehabilitation programs and post-operative care designed to restore movement, strength, and quality of life following orthopedic procedures.",
    color: "from-[#0f3d2e] to-[#0f2d5e]",
    lightColor: "bg-[#e8f5ee]",
    iconColor: "text-[#2e8b57]",
    tag: "Rehab",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#f8fafc] relative">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-px">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L1440 0L1440 20C1200 60 960 0 720 30C480 60 240 20 0 60L0 0Z" fill="#f8fafc" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#2e8b57]" />
            <span className="text-[#2e8b57] font-semibold text-sm uppercase tracking-widest">What We Treat</span>
            <div className="h-px w-12 bg-[#2e8b57]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2d5e] mb-4">
            Our <span className="text-[#2e8b57]">Specialised</span> Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From conservative management to advanced surgical interventions, we offer
            the full spectrum of orthopedic care under one roof.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="service-card group relative bg-white rounded-3xl p-7 border border-gray-100 hover:shadow-2xl hover:shadow-navy/10 cursor-default"
            >
              {/* Tag */}
              <span className="absolute top-5 right-5 text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-500 group-hover:bg-[#e8f5ee] group-hover:text-[#2e8b57] transition-colors duration-300">
                {s.tag}
              </span>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${s.lightColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <s.icon className={`w-7 h-7 ${s.iconColor}`} />
              </div>

              <h3 className="text-xl font-bold text-[#0f2d5e] mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-7 right-7 h-0.5 rounded-full bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#0f2d5e] via-[#1a3d6b] to-[#0f3d2e] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-1">Not sure which treatment is right for you?</h3>
            <p className="text-white/60">Book a consultation and let Dr. Ahmed guide you with expert advice.</p>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 px-7 py-3.5 rounded-full bg-[#2e8b57] text-white font-semibold hover:bg-[#1f6b3d] transition-all duration-300 hover:shadow-xl hover:shadow-green-900/40 whitespace-nowrap"
          >
            Get Expert Opinion
          </a>
        </div>
      </div>
    </section>
  );
}
