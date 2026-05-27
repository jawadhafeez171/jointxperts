"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const info = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 88672 70633",
    sub: "Mon–Sat, 9 AM – 6 PM",
    href: "tel:+918867270633",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@jointxperts.in",
    sub: "We reply within 24 hours",
    href: "mailto:info@jointxperts.in",
  },
  {
    icon: MapPin,
    title: "Clinic",
    value: "JointXperts Clinic",
    sub: "City, State — India",
    href: "#",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon – Sat",
    sub: "9:00 AM – 6:00 PM",
    href: "#",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", concern: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#e8f5ee]/40 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#2e8b57]" />
            <span className="text-[#2e8b57] font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
            <div className="h-px w-12 bg-[#2e8b57]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2d5e] mb-4">
            Book Your <span className="text-[#2e8b57]">Appointment</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Take the first step toward pain-free living. Reach out to schedule a consultation with Dr. Ahmed.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — info */}
          <div className="lg:col-span-2 space-y-5">
            {info.map(({ icon: Icon, title, value, sub, href }) => (
              <a
                key={title}
                href={href}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-[#2e8b57]/30 hover:bg-[#f9fffe] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#e8f5ee] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2e8b57] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#2e8b57] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{title}</div>
                  <div className="font-semibold text-[#0f2d5e] mt-0.5">{value}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{sub}</div>
                </div>
              </a>
            ))}

            {/* Consultation Image */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 h-64 relative">
              <Image 
                src="/consult.webp" 
                alt="Orthopedic Consultation" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2d5e]/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-lg leading-tight">Your Journey to Pain-Free Living Starts Here</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 rounded-3xl border border-[#2e8b57]/20 bg-[#f0faf5]">
                <CheckCircle2 className="w-16 h-16 text-[#2e8b57] mb-4" />
                <h3 className="text-2xl font-bold text-[#0f2d5e] mb-2">Appointment Request Sent!</h3>
                <p className="text-gray-500 max-w-sm">
                  Thank you, {form.name}. Our team will reach out to confirm your appointment within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", concern: "", message: "" }); }}
                  className="mt-6 px-6 py-2.5 rounded-full border border-[#2e8b57] text-[#2e8b57] font-semibold hover:bg-[#2e8b57] hover:text-white transition-colors"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2e8b57] focus:ring-2 focus:ring-[#2e8b57]/10 transition-all text-gray-800 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                    <input
                      required
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2e8b57] focus:ring-2 focus:ring-[#2e8b57]/10 transition-all text-gray-800 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Area of Concern *</label>
                  <select
                    required
                    name="concern"
                    value={form.concern}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2e8b57] focus:ring-2 focus:ring-[#2e8b57]/10 transition-all text-gray-800 bg-white"
                  >
                    <option value="">Select a condition or service</option>
                    <option>Joint Pain / Arthritis</option>
                    <option>Knee Replacement</option>
                    <option>Hip Replacement</option>
                    <option>Spine Care / Back Pain</option>
                    <option>Sports Injury</option>
                    <option>Pain Relief & Mobility</option>
                    <option>General Orthopedic Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Tell us more (optional)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Briefly describe your symptoms or what you'd like to discuss..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2e8b57] focus:ring-2 focus:ring-[#2e8b57]/10 transition-all text-gray-800 placeholder:text-gray-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#0f2d5e] text-white font-semibold text-base hover:bg-[#1a4a8a] transition-all duration-300 hover:shadow-xl hover:shadow-navy/20 group"
                >
                  Send Appointment Request
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-xs text-gray-400">
                  Your information is kept strictly confidential. We will never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
