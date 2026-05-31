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
  {
    name: "Aman Deep",
    age: 39,
    procedure: "Knee Care & Consultation",
    quote:
      "Dr. Syed Parveez Ahmed is an outstanding orthopedic surgeon. I visited JointXperts at Atharva Multispeciality Hospital for my knee pain. He explained the condition in detail and recommended physiotherapy instead of jumping to surgery. Extremely honest and caring doctor!",
    rating: 5,
    initials: "AD",
    color: "bg-[#2e8b57]",
  },
  {
    name: "Vijayalakshmi N.",
    age: 64,
    procedure: "Knee Replacement",
    quote:
      "Highly recommend JointXperts. My mother underwent a knee replacement under Dr. Parveez Ahmed at Atharva Multispeciality Hospital. The entire procedure was handled with absolute professionalism, and the post-op care was exceptional. She is now walking pain-free!",
    rating: 5,
    initials: "VN",
    color: "bg-[#0f2d5e]",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#fbbc04]">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
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
          <div className="flex justify-center mb-6">
            <a
              href="https://maps.app.goo.gl/dzvjfqa8Y3TXfJEK9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all group"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex items-center gap-1.5">
                <span className="text-[#0f2d5e] font-bold text-sm">5.0</span>
                <Stars count={5} />
              </div>
              <span className="text-gray-500 text-sm font-medium border-l border-gray-200 pl-3">
                Rating on Google Maps
              </span>
            </a>
          </div>
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

        {/* Read More on Google Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a
            href="https://maps.app.goo.gl/dzvjfqa8Y3TXfJEK9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-[#0f2d5e] text-[#0f2d5e] font-semibold text-sm hover:bg-[#0f2d5e] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-navy/10 hover:-translate-y-0.5 group"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current transition-colors" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.555 0-6.445-2.89-6.445-6.445s2.89-6.445 6.445-6.445c1.7 0 3.255.66 4.417 1.737l3.207-3.208C19.7 2.302 16.2 1 12.24 1 5.98 1 1 5.98 1 12.24s4.98 11.24 11.24 11.24c6.38 0 11.08-4.48 11.08-11.24 0-.76-.07-1.495-.2-2.2H12.24z"/>
            </svg>
            Read All Patient Reviews on Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}
