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
    title: "Primary Clinic",
    value: "JOINTXPERTS (Atharva Clinic)",
    sub: "No. 29, Tirumala Complex, Bhoopasandra Bus Stop, Bengaluru — 560094",
    href: "https://maps.app.goo.gl/dzvjfqa8Y3TXfJEK9",
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

            {/* Live Interactive Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 h-64 shadow-sm relative">
              <iframe
                title="JointXperts Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0005706497554!2d77.581451!3d13.035773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17ba98ed4d7b%3A0x34feb90fe32af438%2sJOINTXPERTS%20(ATHARVA%20MULTISPECIALITY%20CLINIC)!5e0!3m2!1sen!2sin!4v1717056000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Other Locations */}
            <div className="pt-2">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-1">Also Visiting At</h3>
              <div className="grid grid-cols-2 gap-3">
                <a href="https://maps.app.goo.gl/yYqi7YNaccBzvqLJ8" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl bg-[#f8fafc] hover:bg-[#e8f5ee] border border-gray-100 hover:border-[#2e8b57]/30 transition-all group">
                  <div className="font-semibold text-[#0f2d5e] text-sm group-hover:text-[#2e8b57] transition-colors line-clamp-1">Atharva Multispecialty</div>
                  <div className="text-gray-500 text-xs mt-0.5 line-clamp-1">Guddadahalli, Hebbal</div>
                </a>
                <a href="https://maps.app.goo.gl/5TfJEiDDZayVwHze9" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl bg-[#f8fafc] hover:bg-[#e8f5ee] border border-gray-100 hover:border-[#2e8b57]/30 transition-all group">
                  <div className="font-semibold text-[#0f2d5e] text-sm group-hover:text-[#2e8b57] transition-colors line-clamp-1">Ayesha Polyclinic</div>
                  <div className="text-gray-500 text-xs mt-0.5 line-clamp-1">Sultanpalya, Hebbal</div>
                </a>
                <a href="https://maps.app.goo.gl/NJTQtWkiQAmuGmPj6" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl bg-[#f8fafc] hover:bg-[#e8f5ee] border border-gray-100 hover:border-[#2e8b57]/30 transition-all group">
                  <div className="font-semibold text-[#0f2d5e] text-sm group-hover:text-[#2e8b57] transition-colors line-clamp-1">Darr-Ul-Shifa Clinic</div>
                  <div className="text-gray-500 text-xs mt-0.5 line-clamp-1">Nagavara</div>
                </a>
                <a href="https://maps.app.goo.gl/zyJwywMvVKEE8E6e7" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl bg-[#f8fafc] hover:bg-[#e8f5ee] border border-gray-100 hover:border-[#2e8b57]/30 transition-all group">
                  <div className="font-semibold text-[#0f2d5e] text-sm group-hover:text-[#2e8b57] transition-colors line-clamp-1">Apollo Clinic</div>
                  <div className="text-gray-500 text-xs mt-0.5 line-clamp-1">New BEL Road</div>
                </a>
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
