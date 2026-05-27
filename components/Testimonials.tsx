"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    age: 62,
    procedure: "Total Knee Replacement",
    quote:
      "I had been suffering from severe knee pain for years and was barely able to walk. Dr. Parveez gave me my life back. Six months after the surgery, I am walking, climbing stairs, and even doing light gardening. I cannot thank him enough.",
    rating: 5,
    initials: "RK",
    color: "bg-[#0f2d5e]",
    videoUrl: "/testimonials/patient_testimonial.webm",
  },
  {
    name: "Fatima Begum",
    age: 58,
    procedure: "Hip Replacement",
    quote:
      "From the very first consultation, Dr. Ahmed was thorough, patient, and reassuring. The surgery was seamless and the recovery was faster than I expected. The team at JointXperts truly cares about your well-being.",
    rating: 5,
    initials: "FB",
    color: "bg-[#2e8b57]",
  },
  {
    name: "Mohammad Ali",
    age: 45,
    procedure: "Spine Care",
    quote:
      "I was told by multiple doctors that I might need major spinal surgery. Dr. Parveez took a conservative approach first, and within three months my chronic back pain had reduced by 80%. He's a brilliant doctor with exceptional skill.",
    rating: 5,
    initials: "MA",
    color: "bg-[#1a4a8a]",
  },
  {
    name: "Sunita Sharma",
    age: 67,
    procedure: "Joint Care & Arthritis",
    quote:
      "I have been Dr. Ahmed's patient for two years. His approach to managing my rheumatoid arthritis has been transformative. His knowledge, empathy, and follow-up care are second to none in the region.",
    rating: 5,
    initials: "SS",
    color: "bg-[#0f3d2e]",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));
  const t = testimonials[active];

  return (
    <section id="testimonials" className="py-24 bg-[#f8fafc]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#2e8b57]" />
            <span className="text-[#2e8b57] font-semibold text-sm uppercase tracking-widest">Patient Stories</span>
            <div className="h-px w-12 bg-[#2e8b57]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2d5e] mb-4">
            Lives <span className="text-[#2e8b57]">Transformed</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Real stories from patients who regained their mobility and quality of life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left — patient list */}
          <motion.div
            className="lg:col-span-1 hidden lg:flex flex-col gap-3"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left p-4 rounded-2xl transition-all duration-200 ${
                  active === i
                    ? "bg-[#0f2d5e] text-white shadow-lg"
                    : "bg-white text-gray-500 hover:bg-gray-50"
                }`}
              >
                <div className={`font-semibold text-sm ${active === i ? "text-white" : "text-[#0f2d5e]"}`}>
                  {t.name}
                </div>
                <div className={`text-xs mt-0.5 ${active === i ? "text-white/60" : "text-gray-400"}`}>
                  {t.procedure}
                </div>
              </button>
            ))}

            {/* Consultation Banner */}
            <a href="/contact" className="mt-4 relative rounded-2xl overflow-hidden block group shadow-sm hover:shadow-md transition-all">
              <div className="h-32 w-full relative">
                <Image 
                  src="/consult.webp" 
                  alt="Book Consultation" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2d5e]/80 to-[#0f2d5e]/20" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <span className="text-white font-bold text-sm">Need a Consultation?</span>
                  <span className="text-white/80 text-xs mt-1">Book your appointment today</span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Right — featured testimonial */}
          <motion.div
            className="lg:col-span-4 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-gray-100 border border-gray-100">
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-[#2e8b57]/20 mb-6" />

              {t.videoUrl && (
                <div className="relative w-full rounded-2xl overflow-hidden mb-6 bg-black shadow-lg flex justify-center">
                  <video 
                    src={t.videoUrl} 
                    controls 
                    className="w-full h-auto max-h-[400px] object-contain bg-black"
                    poster="/testimonials/patient_testimonial_poster.webp"
                  />
                </div>
              )}

              <p className="text-gray-700 text-lg leading-relaxed mb-8 min-h-[120px]">
                "{t.quote}"
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-[#0f2d5e]">{t.name}</div>
                    <div className="text-gray-400 text-sm">{t.procedure} · Age {t.age}</div>
                  </div>
                </div>
                <Stars count={t.rating} />
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-gray-100">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0f2d5e] hover:border-[#0f2d5e] hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0f2d5e] hover:border-[#0f2d5e] hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="flex gap-2 ml-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        active === i ? "w-6 bg-[#2e8b57]" : "w-2 bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
