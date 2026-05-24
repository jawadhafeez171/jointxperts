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
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-14 items-start">

          {/* Left — heading + decorative */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#2e8b57]" />
              <span className="text-[#2e8b57] font-semibold text-sm uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2d5e] leading-tight mb-6">
              Frequently Asked <span className="text-[#2e8b57]">Questions</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Have a question not listed here? Our team is happy to help — reach out directly.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0f2d5e] text-white font-semibold text-sm hover:bg-[#1a4a8a] transition-all duration-300"
            >
              Ask a Question
            </a>

            {/* Rating visual */}
            <div className="mt-12 hidden lg:flex items-center gap-5 p-6 rounded-2xl bg-[#f8fafc] border border-gray-100">
              <div className="relative w-20 h-20 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#e8f5ee]" />
                <div className="absolute inset-2 rounded-full bg-[#2e8b57]/15" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#0f2d5e]">4.9</span>
                </div>
              </div>
              <div>
                <div className="text-yellow-400 text-lg tracking-wider">★★★★★</div>
                <div className="text-sm font-semibold text-[#0f2d5e] mt-0.5">Average Patient Rating</div>
                <div className="text-xs text-gray-400 mt-0.5">Based on 5000+ consultations</div>
              </div>
            </div>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            className="lg:col-span-3 space-y-3"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  open === i
                    ? "border-[#2e8b57]/40 shadow-lg shadow-green-50"
                    : "border-gray-100 hover:border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className={`font-semibold text-sm leading-snug ${open === i ? "text-[#0f2d5e]" : "text-gray-700"}`}>
                    {faq.q}
                  </span>
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      open === i ? "bg-[#2e8b57] text-white" : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {open === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 pb-5 pt-4 text-gray-500 text-sm leading-relaxed border-t border-gray-100">
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
