"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Bone,
  Activity,
  RotateCcw,
  Zap,
  Brain,
  Heart,
  X,
  Clock,
  CheckCircle2,
  ArrowRight,
  Shield,
  ExternalLink
} from "lucide-react";
import { treatments, Treatment, getTreatmentBySlugOrId } from "@/data/treatments";
import { useBooking } from "@/context/BookingContext";

// Icon mapping helper
function getIconForTreatment(id: string) {
  switch (id) {
    case "joint-care":
    case "knee-pain-arthritis":
      return Bone;
    case "spine-care":
      return Activity;
    case "hip-replacement":
    case "knee-replacement":
    case "ligament-injuries":
      return RotateCcw;
    case "arthroscopy":
      return Bone;
    case "fracture-management":
      return Shield;
    case "spine-injury-care":
      return Brain;
    case "pain-relief":
      return Zap;
    case "mobility-restoration":
      return Heart;
    default:
      return Bone;
  }
}

export default function Services() {
  const searchParams = useSearchParams();
  const { openBooking } = useBooking();
  const [activeService, setActiveService] = useState<Treatment | null>(null);

  // If a legacy link with ?service=id lands, open preview without forcing a rewrite
  useEffect(() => {
    const serviceParam = searchParams?.get("service");
    if (serviceParam) {
      const match = getTreatmentBySlugOrId(serviceParam);
      if (match) {
        setActiveService(match);
      }
    }
  }, [searchParams]);

  const handleOpen = (service: Treatment) => {
    setActiveService(service);
  };

  const handleClose = () => {
    setActiveService(null);
  };

  return (
    <section id="services" className="py-24 bg-[#f8fafc] relative">
      {/* Top wave layout border */}
      <div className="absolute top-0 left-0 right-0 -translate-y-px">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L1440 0L1440 20C1200 60 960 0 720 30C480 60 240 20 0 60L0 0Z" fill="#f8fafc" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#2e8b57]" />
            <span className="text-[#2e8b57] font-semibold text-sm uppercase tracking-widest">What We Treat</span>
            <div className="h-px w-12 bg-[#2e8b57]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2d5e] mb-4">
            Our <span className="text-[#2e8b57]">Specialised</span> Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From conservative joint preservation to robotic-assisted replacements, explore our dedicated treatment pathways.
          </p>
        </div>

        {/* Grid layout of Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((s) => {
            const Icon = getIconForTreatment(s.id);
            return (
              <motion.div
                layoutId={`card-container-${s.id}`}
                key={s.id}
                className="group relative h-96 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#0f2d5e]/12 transition-all duration-500 border border-gray-100 flex flex-col justify-end"
                whileHover={{ y: -6 }}
              >
                {/* Background Cover Image */}
                {s.image && (
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 z-0"
                  />
                )}
                
                {/* Visual gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2d5e] via-[#0f2d5e]/40 to-transparent z-10 transition-all duration-500 group-hover:from-[#0f2d5e]/95 group-hover:via-[#0f2d5e]/50" />

                {/* Left active colored accent indicator */}
                <div
                  className="absolute left-0 bottom-0 top-0 w-1.5 transition-all duration-500 scale-y-0 group-hover:scale-y-100 z-30 origin-bottom"
                  style={{ backgroundColor: s.accent }}
                />
                
                {/* Glassmorphic icon badge */}
                <div 
                  className="absolute top-5 right-5 z-20 w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-lg border border-white/20 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                  style={{ backgroundColor: `${s.accent}d0` }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Card Content Area */}
                <div className="relative z-20 p-6 md:p-8 flex flex-col justify-end text-white transition-all duration-500 translate-y-6 group-hover:translate-y-0">
                  <span className="self-start text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm uppercase tracking-wider mb-2">
                    {s.tag}
                  </span>

                  <motion.h3
                    layoutId={`card-title-${s.id}`}
                    className="text-xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors drop-shadow-sm"
                  >
                    {s.title}
                  </motion.h3>
                  
                  <p className="text-white/85 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-24 overflow-hidden">
                    {s.shortDescription}
                  </p>
                  
                  {/* Direct links to dedicated treatment page */}
                  <div className="flex items-center justify-between gap-2 mt-4 pt-2 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={`/treatments/${s.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 hover:text-white transition-colors"
                    >
                      Full Treatment Guide
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleOpen(s)}
                      className="text-[11px] font-medium text-white/70 hover:text-white underline cursor-pointer"
                    >
                      Quick Overview
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#0f2d5e] via-[#1a3d6b] to-[#0f3d2e] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-1">Not sure which treatment is right for you?</h3>
            <p className="text-white/60">Schedule an evaluation and let Dr. Syed Parveez Ahmed guide your recovery plan.</p>
          </div>
          <button
            type="button"
            onClick={() => openBooking("General Consultation")}
            className="flex-shrink-0 px-7 py-3.5 rounded-full bg-[#2e8b57] text-white font-semibold hover:bg-[#1f6b3d] transition-all duration-300 hover:shadow-xl hover:shadow-green-900/40 whitespace-nowrap cursor-pointer"
          >
            Get Expert Opinion
          </button>
        </div>
      </div>

      {/* Expandable Dialog Sheet with layoutId morphing */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />

            {/* Modal Sheet Container */}
            <motion.div
              layoutId={`card-container-${activeService.id}`}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] sm:max-h-[90vh] flex flex-col md:flex-row"
            >
              {/* Close Button Top Right */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Visual & Header Info */}
              <div className="relative w-full md:w-5/12 bg-slate-900 flex flex-col justify-between p-6 sm:p-8 text-white min-h-[220px] md:min-h-full">
                {activeService.image && (
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover opacity-35"
                  />
                )}
                
                <div className="relative z-10">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-md mb-3">
                    {activeService.tag} Overview
                  </span>
                  <motion.h3
                    layoutId={`card-title-${activeService.id}`}
                    className="text-2xl sm:text-3xl font-bold leading-tight"
                  >
                    {activeService.title}
                  </motion.h3>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-white/20">
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>Est. Recovery: {activeService.recoveryTime}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Clinical Content */}
              <div className="w-full md:w-7/12 p-6 sm:p-8 overflow-y-auto max-h-[60vh] md:max-h-[85vh] flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                      Clinical Overview
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {activeService.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                      Key Procedures
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {activeService.procedures.slice(0, 4).map((proc, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <CheckCircle2 className="w-4 h-4 text-[#2e8b57] shrink-0" />
                          <span>{proc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#f0faf5] rounded-xl border border-emerald-100">
                    <h4 className="text-[10px] uppercase tracking-widest text-[#2e8b57] font-bold mb-1">
                      Conservative / Non-Surgical Options
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {activeService.nonSurgical}
                    </p>
                  </div>
                </div>

                {/* Modal Action Buttons */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      handleClose();
                      openBooking(activeService.title);
                    }}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#0f2d5e] text-white font-bold text-xs md:text-sm hover:bg-[#1a4a8a] transition-all hover:shadow-lg cursor-pointer"
                  >
                    Request Consultation
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <Link
                    href={`/treatments/${activeService.slug}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full border border-emerald-600 text-[#2e8b57] font-bold text-xs md:text-sm hover:bg-emerald-50 transition-colors"
                  >
                    Dedicated Page
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
