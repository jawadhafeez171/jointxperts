"use client";

import Link from "next/link";
import { Bone, Activity, RotateCcw, Brain, ArrowRight, Users, Award, Shield, Star } from "lucide-react";

const featured = [
  {
    icon: Bone,
    title: "Joint Care",
    desc: "Comprehensive diagnosis and personalised treatment for arthritis, joint inflammation, and degenerative joint disease.",
    lightColor: "bg-[#eef2ff]",
    iconColor: "text-[#0f2d5e]",
  },
  {
    icon: Activity,
    title: "Spine Care",
    desc: "Advanced management of disc herniation, spinal stenosis, scoliosis, and chronic back pain.",
    lightColor: "bg-[#e8f5ee]",
    iconColor: "text-[#2e8b57]",
  },
  {
    icon: RotateCcw,
    title: "Hip Replacement",
    desc: "Minimally invasive total and partial hip replacement using the latest implants for faster recovery.",
    lightColor: "bg-[#f0f7ff]",
    iconColor: "text-[#0f2d5e]",
  },
  {
    icon: Brain,
    title: "Knee Replacement",
    desc: "Precision knee arthroplasty with alignment technology for lasting pain relief and full function.",
    lightColor: "bg-[#eef2ff]",
    iconColor: "text-[#1a4a8a]",
  },
];

const stats = [
  { icon: Users, value: "5000+", label: "Patients Treated" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Shield, value: "98%", label: "Success Rate" },
  { icon: Star, value: "4.9★", label: "Patient Rating" },
];

export default function HomeFeatures() {
  return (
    <>
      {/* Featured services */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#2e8b57]" />
              <span className="text-[#2e8b57] font-semibold text-sm uppercase tracking-widest">What We Treat</span>
              <div className="h-px w-12 bg-[#2e8b57]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2d5e] mb-4">
              Our <span className="text-[#2e8b57]">Specialised</span> Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              From conservative management to advanced surgical interventions — the full spectrum of orthopedic care under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((s) => (
              <div
                key={s.title}
                className="service-card group bg-white rounded-3xl p-7 border border-gray-100 hover:shadow-2xl hover:shadow-navy/10"
              >
                <div className={`w-14 h-14 rounded-2xl ${s.lightColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <s.icon className={`w-7 h-7 ${s.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-[#0f2d5e] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#0f2d5e] text-[#0f2d5e] font-semibold hover:bg-[#0f2d5e] hover:text-white transition-all duration-300"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#0f2d5e] to-[#1a4a8a] text-white"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-[#3aad6e]" />
                </div>
                <div className="text-4xl font-bold mb-1">{value}</div>
                <div className="text-white/60 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#0f2d5e] via-[#1a3d6b] to-[#0f3d2e] p-12 text-white text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Take the First Step?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8 text-lg">
              Schedule a consultation with Dr. Syed Parveez Ahmed and start your journey to pain-free living.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2e8b57] text-white font-semibold text-base hover:bg-[#1f6b3d] transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/40"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all duration-300"
              >
                Meet Dr. Ahmed
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
