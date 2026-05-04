"use client";

import { Clock, Star, Microscope, HeartHandshake, BadgeCheck, Layers } from "lucide-react";

const reasons = [
  {
    icon: Microscope,
    title: "Advanced Technology",
    desc: "We use state-of-the-art surgical equipment and imaging technology for precise diagnosis and treatment.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centred Care",
    desc: "Every treatment plan is personalised. We take the time to understand your condition and your goals.",
  },
  {
    icon: BadgeCheck,
    title: "Fellowship Trained",
    desc: "Dr. Ahmed holds a prestigious fellowship in arthroplasty, ensuring the highest standard of joint replacement care.",
  },
  {
    icon: Clock,
    title: "Timely Appointments",
    desc: "We respect your time. Prompt appointments, minimal waiting, and efficient follow-up care throughout.",
  },
  {
    icon: Star,
    title: "Proven Outcomes",
    desc: "With a 98% success rate and thousands of satisfied patients, our results speak for themselves.",
  },
  {
    icon: Layers,
    title: "Comprehensive Care",
    desc: "From initial diagnosis through rehabilitation, we manage your entire orthopedic journey under one roof.",
  },
];

const numbers = [
  { value: "5000+", label: "Surgeries Performed" },
  { value: "15+", label: "Years of Experience" },
  { value: "98%", label: "Patient Satisfaction" },
  { value: "4.9★", label: "Average Rating" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-[#2e8b57] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
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
        </div>

        {/* Numbers row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {numbers.map(({ value, label }) => (
            <div
              key={label}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#0f2d5e] to-[#1a4a8a] text-white"
            >
              <div className="text-4xl font-bold mb-1">{value}</div>
              <div className="text-white/60 text-sm">{label}</div>
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex gap-4 p-6 rounded-2xl border border-gray-100 hover:border-[#2e8b57]/30 hover:bg-[#f9fffe] transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#e8f5ee] flex items-center justify-center group-hover:bg-[#2e8b57] transition-colors duration-300">
                <Icon className="w-6 h-6 text-[#2e8b57] group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-bold text-[#0f2d5e] mb-1.5">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
