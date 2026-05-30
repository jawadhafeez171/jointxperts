"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What conditions does Dr. Syed Parveez Ahmed treat?",
    a: "Dr. Ahmed specialises in knee and hip arthritis, ligament injuries (ACL/PCL), sports injuries, spine disorders, fractures, frozen shoulder, and meniscus tears — covering both surgical and non-surgical treatments.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call us at +91 88672 70633, fill out the contact form on our website, or visit our clinic directly. We offer same-week appointments with minimal wait times.",
  },
  {
    q: "What should I bring to my first consultation?",
    a: "Bring any previous X-rays, MRI scans, blood test results, and a list of your current medications. Notes on your symptoms — when they started and what makes them better or worse — are also very helpful.",
  },
  {
    q: "How long does recovery take after joint replacement?",
    a: "Most patients walk the day after surgery and are discharged within 2–4 days. Light activity resumes in 6–12 weeks and full recovery typically takes 3–6 months, with a personalised plan provided by Dr. Ahmed.",
  },
  {
    q: "Is joint replacement surgery permanent?",
    a: "Modern implants are designed to last 20–25 years or more. Longevity depends on the patient's age, activity level, weight, and adherence to rehabilitation guidelines.",
  },
  {
    q: "Are arthroscopic procedures painful?",
    a: "Arthroscopy is minimally invasive with tiny incisions, causing far less pain than open surgery. Most patients go home the same day with a quicker recovery and minimal scarring.",
  },
  {
    q: "Do you offer second opinion consultations?",
    a: "Yes. If you've been told you need surgery or are uncertain about a diagnosis, Dr. Ahmed welcomes second opinion consultations to give you clarity and confidence in your treatment.",
  },
  {
    q: "What makes JointXperts different from other clinics?",
    a: "Dr. Ahmed holds an FRGUHS fellowship in arthroplasty — a rare specialisation — combined with 10+ years of experience, state-of-the-art equipment, and a genuine patient-first philosophy.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f8fafc] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left — heading + decorative */}
          <motion.div
            className="lg:col-span-5 lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#2e8b57]" />
              <span className="text-[#2e8b57] font-bold text-xs uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0f2d5e] leading-[1.15] mb-6">
              Frequently<br /> Asked <span className="text-[#2e8b57] relative">
                Questions
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="#2e8b57" strokeWidth="2" fill="none" strokeDasharray="5,5" opacity="0.3"/>
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 pr-4">
              Find answers to common questions about our orthopedic treatments, recovery processes, and clinic services. Need more details? Our team is always here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0f2d5e] text-white font-semibold text-sm hover:bg-[#1a4a8a] transition-all duration-300 hover:shadow-xl hover:shadow-navy/10 hover:-translate-y-0.5"
            >
              Ask a Question
            </a>

            {/* Google Rating visual */}
            <a href="https://maps.app.goo.gl/dzvjfqa8Y3TXfJEK9" target="_blank" rel="noopener noreferrer" className="mt-14 hidden lg:flex items-center gap-5 p-6 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-gray-200 transition-all duration-300 group max-w-sm">
              <div className="w-16 h-16 rounded-full bg-[#f8fafc] flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:shadow-sm transition-all border border-gray-100">
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-bold text-[#0f2d5e] leading-none">5.0</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#fbbc04]">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="text-sm font-bold text-[#0f2d5e] group-hover:text-[#2e8b57] transition-colors">Rating on Google</div>
                <div className="text-xs text-gray-500 mt-1">Based on 120+ verified reviews</div>
              </div>
            </a>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            className="lg:col-span-7 space-y-2.5"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`group rounded-3xl transition-all duration-300 overflow-hidden border ${
                  open === i
                    ? "bg-white border-[#2e8b57]/20 shadow-[0_8px_30px_rgb(46,139,87,0.06)]"
                    : "bg-[#f8fafc] border-transparent hover:bg-white hover:border-gray-200 hover:shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className={`font-semibold text-[15px] transition-colors leading-snug ${open === i ? "text-[#2e8b57]" : "text-[#0f2d5e] group-hover:text-[#2e8b57]"}`}>
                    {faq.q}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      open === i ? "bg-[#2e8b57] text-white rotate-180 shadow-md shadow-[#2e8b57]/20" : "bg-white text-gray-400 border border-gray-200 group-hover:border-[#2e8b57]/30 group-hover:text-[#2e8b57]"
                    }`}
                  >
                    {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 pb-5 pt-0 text-gray-600 text-sm leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
