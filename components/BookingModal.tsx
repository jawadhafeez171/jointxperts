"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { X, Send, CheckCircle2 } from "lucide-react";

export default function BookingModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isOpen = searchParams.get("booking") === "true";

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", concern: "", message: "" });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  function handleClose() {
    // Remove query param
    router.push(pathname, { scroll: false });
    // reset form
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", concern: "", message: "" });
    }, 300);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" onClick={handleClose} />
      
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-full animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#f9fffe]">
          <h2 className="text-xl font-bold text-[#0f2d5e]">Book Consultation</h2>
          <button
            onClick={handleClose}
            className="p-2 -mr-2 text-gray-400 hover:text-[#0f2d5e] hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 custom-scrollbar">
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2e8b57] focus:ring-2 focus:ring-[#2e8b57]/10 transition-all text-gray-800"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2e8b57] focus:ring-2 focus:ring-[#2e8b57]/10 transition-all text-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Area of Concern *</label>
                <select
                  required
                  name="concern"
                  value={form.concern}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2e8b57] focus:ring-2 focus:ring-[#2e8b57]/10 transition-all text-gray-800 bg-white"
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
                className="w-full flex items-center justify-center gap-2 py-3.5 mt-2 rounded-xl bg-[#0f2d5e] text-white font-semibold hover:bg-[#1a4a8a] transition-all hover:shadow-xl hover:shadow-navy/20 group"
              >
                Request Appointment
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
