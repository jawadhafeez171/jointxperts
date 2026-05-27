"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { X, Send, CheckCircle2, Phone, Clock, MapPin } from "lucide-react";
import Image from "next/image";

export default function BookingModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isOpen = searchParams.get("booking") === "true";

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", concern: "" });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!isOpen) return null;

  function handleClose() {
    router.push(pathname, { scroll: false });
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", concern: "" });
    }, 300);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-6">
      {/* backdrop */}
      <div className="absolute inset-0 bg-[#0a1e3f]/70 backdrop-blur-sm" onClick={handleClose} />

      {/* modal card */}
      <div className="relative w-full sm:max-w-3xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col sm:flex-row max-h-[92vh] animate-in fade-in slide-in-from-bottom sm:zoom-in-95 duration-200">

        {/* ── Image panel ──────────────────────────────────────────
            Mobile: fixed-height banner at the top (h-44)
            Desktop: side column (sm:w-[42%] full height)          */}
        <div className="relative h-36 sm:h-auto sm:w-[42%] shrink-0">
          <Image
            src="/consult.webp"
            alt="Book a consultation with JointXperts"
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, 42vw"
            priority
          />
          {/* gradient — bottom-heavy on mobile, left-heavy on desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3f]/80 via-transparent to-transparent" />

          {/* mobile: title overlay on image */}
          <div className="absolute bottom-4 left-4 right-4 sm:hidden">
            <p className="text-white font-bold text-lg leading-tight">Book a Consultation</p>
            <p className="text-white/70 text-xs mt-0.5">We'll confirm your slot within 2 hours</p>
          </div>

          {/* desktop: info pills pinned at the bottom */}
          <div className="hidden sm:flex absolute bottom-6 left-4 right-4 flex-col gap-2">
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-xl px-3 py-2 text-white text-xs font-medium">
              <Clock className="w-3.5 h-3.5 text-[#3aad6e] shrink-0" />
              Mon – Sat · 9 AM – 7 PM
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-xl px-3 py-2 text-white text-xs font-medium">
              <Phone className="w-3.5 h-3.5 text-[#3aad6e] shrink-0" />
              +91 88672 70633
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-xl px-3 py-2 text-white text-xs font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#3aad6e] shrink-0" />
              Bangalore, Karnataka
            </div>
          </div>

          {/* close button — overlaid on image, always visible */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ── Form panel ───────────────────────────────────────── */}
        <div className="flex flex-col flex-1 min-h-0 overflow-y-auto">

          {/* Header (desktop only — mobile uses image overlay) */}
          <div className="hidden sm:flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
            <div>
              <h2 className="text-xl font-bold text-[#0f2d5e]">Book Consultation</h2>
              <p className="text-xs text-gray-400 mt-0.5">We'll confirm your slot within 2 hours</p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 -mr-2 text-gray-400 hover:text-[#0f2d5e] hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* form / success body */}
          <div className="p-4 sm:p-6 flex-1">
            {submitted ? (
              <div className="py-10 flex flex-col items-center justify-center text-center">
                <CheckCircle2 className="w-16 h-16 text-[#2e8b57] mb-4" />
                <h3 className="text-2xl font-bold text-[#0f2d5e] mb-2">Request Sent!</h3>
                <p className="text-gray-500 mb-6">
                  Thank you, {form.name}. Our team will contact you shortly to confirm your appointment.
                </p>
                <button
                  onClick={handleClose}
                  className="px-8 py-3 rounded-full bg-[#2e8b57] text-white font-semibold hover:bg-[#1f6b3d] transition-colors shadow-lg shadow-green-900/20"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2e8b57] focus:ring-2 focus:ring-[#2e8b57]/10 transition-all text-gray-800 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    required
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2e8b57] focus:ring-2 focus:ring-[#2e8b57]/10 transition-all text-gray-800 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Area of Concern *</label>
                  <select
                    required
                    name="concern"
                    value={form.concern}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2e8b57] focus:ring-2 focus:ring-[#2e8b57]/10 transition-all text-gray-800 bg-white text-sm"
                  >
                    <option value="">Select a condition</option>
                    <option>Joint Pain / Arthritis</option>
                    <option>Knee Replacement</option>
                    <option>Hip Replacement</option>
                    <option>Spine Care / Back Pain</option>
                    <option>Sports Injury</option>
                    <option>General Consultation</option>
                  </select>
                </div>



                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0f2d5e] text-white font-semibold hover:bg-[#1a4a8a] transition-all hover:shadow-xl group text-sm"
                >
                  Request Appointment
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
