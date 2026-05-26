"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
  ArrowRight
} from "lucide-react";

const services = [
  {
    id: "joint-care",
    icon: Bone,
    title: "Joint Care",
    description:
      "Comprehensive diagnosis and treatment of joint conditions including arthritis, joint inflammation, and degenerative joint disease with personalised care plans.",
    color: "from-[#0f2d5e] to-[#1a4a8a]",
    lightColor: "bg-[#eef2ff]",
    iconColor: "text-[#0f2d5e]",
    tag: "Speciality",
    recoveryTime: "1 - 2 Weeks (Flare-ups) / Ongoing management",
    symptoms: [
      "Chronic joint pain & localized swelling",
      "Stiffness, particularly in the morning",
      "Difficulty climbing stairs or bending joints",
      "Grinding or popping sensation (crepitus)"
    ],
    procedures: [
      "Digital X-Ray & MRI diagnostics",
      "Intra-articular PRP & Viscosupplementation injections",
      "Custom orthotic joint-alignment analysis",
      "Advanced anti-inflammatory medical management"
    ],
    nonSurgical: "PRP therapies, specialized physical rehabilitation, and weight management programs to minimize joint stress."
  },
  {
    id: "spine-care",
    icon: Activity,
    title: "Spine Care",
    description:
      "Expert management of spinal disorders including disc herniation, spinal stenosis, scoliosis, and chronic back pain using advanced non-surgical and surgical approaches.",
    color: "from-[#2e8b57] to-[#1f6b3d]",
    lightColor: "bg-[#e8f5ee]",
    iconColor: "text-[#2e8b57]",
    tag: "Advanced",
    recoveryTime: "2 - 6 Weeks (Conservative) / 6 - 12 Weeks (Surgical)",
    symptoms: [
      "Sharp radiating back or neck pain (Sciatica)",
      "Numbness, tingling, or weakness in legs or arms",
      "Limited spinal rotation & lower back stiffness",
      "Muscle spasms along the spinal column"
    ],
    procedures: [
      "Targeted epidural injections & selective nerve blocks",
      "Advanced posture correction & spinal decompression",
      "Minimally invasive microdiscectomy & decompression",
      "Core stabilization physiotherapy protocols"
    ],
    nonSurgical: "Spinal decompression, selective injections, postural retraining, and specialized core strengthening therapy."
  },
  {
    id: "hip-replacement",
    icon: RotateCcw,
    title: "Hip Replacement",
    description:
      "State-of-the-art total and partial hip replacement surgery using the latest implants and minimally invasive techniques for faster recovery and lasting relief.",
    color: "from-[#0f2d5e] to-[#2e8b57]",
    lightColor: "bg-[#f0f7ff]",
    iconColor: "text-[#0f2d5e]",
    tag: "Surgical",
    recoveryTime: "6 - 12 Weeks (Full restoration of normal activities)",
    symptoms: [
      "Severe groin or hip pain when walking or bending",
      "Stiffness that limits normal hip rotation & movement",
      "Persistent pain during resting or sleeping",
      "Difficulty wearing shoes or socks due to flexibility loss"
    ],
    procedures: [
      "Minimally invasive muscle-sparing hip arthroplasty",
      "Premium ceramic-on-crosslinked-polyethylene bearings",
      "Pre-operative 3D template alignment mapping",
      "Early mobilization protocols starting day 1"
    ],
    nonSurgical: "Physical therapy and aids for early stages; total replacement recommended for severe joint wear."
  },
  {
    id: "knee-replacement",
    icon: Brain,
    title: "Knee Replacement",
    description:
      "Total and partial knee arthroplasty with precision alignment technology. Restore full knee function and eliminate chronic pain with proven long-term outcomes.",
    color: "from-[#1a4a8a] to-[#0f2d5e]",
    lightColor: "bg-[#eef2ff]",
    iconColor: "text-[#1a4a8a]",
    tag: "Surgical",
    recoveryTime: "6 - 10 Weeks (Rapid recovery path)",
    symptoms: [
      "Severe knee pain during weight-bearing activities",
      "Visible joint deformity (bow-legged or knock-kneed)",
      "Inability to fully extend or bend the knee joint",
      "Persistent swelling unresponsive to medication"
    ],
    procedures: [
      "Subvastus (quadriceps-sparing) surgical approach",
      "Total & Unicompartmental (partial) knee arthroplasty",
      "Computer-assisted alignment guides for durability",
      "Dedicated gait retraining & home exercise protocols"
    ],
    nonSurgical: "Viscosupplementation, unloader bracing, weight management, and target-muscle strengthening."
  },
  {
    id: "pain-relief",
    icon: Zap,
    title: "Pain Relief",
    description:
      "Multimodal pain management strategies combining injections, physiotherapy, and targeted medication to provide effective and lasting relief from musculoskeletal pain.",
    color: "from-[#2e8b57] to-[#3aad6e]",
    lightColor: "bg-[#e8f5ee]",
    iconColor: "text-[#2e8b57]",
    tag: "Non-Surgical",
    recoveryTime: "Immediate to 1 Week (For local procedures)",
    symptoms: [
      "Chronic localized muscle pain & inflammation",
      "Tendinitis (shoulder, elbow, Achilles) & bursitis",
      "Myofascial trigger point pain & muscle tightness",
      "Nerve pain or neuropathic discomfort"
    ],
    procedures: [
      "Ultrasound-guided joint & soft-tissue injections",
      "Trigger point dry needling & myofascial release",
      "High-intensity laser & shockwave therapies",
      "Custom medical and pharmaceutical pain management"
    ],
    nonSurgical: "100% non-surgical. Combines interventional injections, rehabilitation, and lifestyle optimization."
  },
  {
    id: "mobility-restoration",
    icon: Heart,
    title: "Mobility Restoration",
    description:
      "Tailored rehabilitation programs and post-operative care designed to restore movement, strength, and quality of life following orthopedic procedures.",
    color: "from-[#0f3d2e] to-[#0f2d5e]",
    lightColor: "bg-[#e8f5ee]",
    iconColor: "text-[#2e8b57]",
    tag: "Rehab",
    recoveryTime: "1 - 3 Months (Varies by baseline state)",
    symptoms: [
      "Post-operative stiffness & limited range of motion",
      "Muscle atrophy & general weakness after injury",
      "Impaired balance, coordination, or gait stability",
      "Inability to return to sports or active hobbies"
    ],
    procedures: [
      "Proprioceptive Neuromuscular Facilitation (PNF)",
      "Gait analysis & specialized treadmill retraining",
      "Progressive resistance and flexibility loading",
      "Return-to-sport testing and conditioning plans"
    ],
    nonSurgical: "Fully conservative rehabilitation, combining direct exercise therapy with visual biofeedback."
  }
];

export default function Services() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeService, setActiveService] = useState<typeof services[number] | null>(null);

  // Sync activeService state with the URL "?service=id" query param
  useEffect(() => {
    const serviceParam = searchParams?.get("service");
    if (serviceParam) {
      const match = services.find((s) => s.id === serviceParam);
      if (match) {
        setActiveService(match);
      } else {
        setActiveService(null);
      }
    } else {
      setActiveService(null);
    }
  }, [searchParams]);

  const handleOpen = (service: typeof services[number]) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("service", service.id);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleClose = () => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.delete("service");
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
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
            From conservative management to advanced surgical interventions, we offer
            the full spectrum of orthopedic care under one roof.
          </p>
        </div>

        {/* Grid layout with Morphing layoutId Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
{services.map((s) => (
            <motion.div
              layoutId={`card-container-${s.id}`}
              onClick={() => handleOpen(s)}
              key={s.id}
              className="group relative bg-white rounded-3xl p-7 border border-gray-100 hover:shadow-2xl hover:shadow-navy/10 cursor-pointer transition-all duration-300 flex flex-col justify-between"
              whileHover={{ y: -6 }}
            >
              <div>
                {/* Tag */}
                <span className="absolute top-5 right-5 text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-500 group-hover:bg-[#e8f5ee] group-hover:text-[#2e8b57] transition-colors duration-300">
                  {s.tag}
                </span>

                {/* Icon */}
                <motion.div
                  layoutId={`card-icon-${s.id}`}
                  className={`w-14 h-14 rounded-2xl ${s.lightColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <s.icon className={`w-7 h-7 ${s.iconColor}`} />
                </motion.div>

                <motion.h3
                  layoutId={`card-title-${s.id}`}
                  className="text-xl font-bold text-[#0f2d5e] mb-3"
                >
                  {s.title}
                </motion.h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.description}</p>
              </div>

              {/* Action hint */}
              <div className="text-xs font-bold text-[#2e8b57] group-hover:text-[#1f6b3d] flex items-center gap-1 mt-auto">
                Learn More & Recovery Info
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-7 right-7 h-0.5 rounded-full bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#0f2d5e] via-[#1a3d6b] to-[#0f3d2e] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-1">Not sure which treatment is right for you?</h3>
            <p className="text-white/60">Book a consultation and let Dr. Ahmed guide you with expert advice.</p>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 px-7 py-3.5 rounded-full bg-[#2e8b57] text-white font-semibold hover:bg-[#1f6b3d] transition-all duration-300 hover:shadow-xl hover:shadow-green-900/40 whitespace-nowrap"
          >
            Get Expert Opinion
          </a>
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
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row"
              transition={{ type: "spring", damping: 26, stiffness: 190 }}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors z-20 md:bg-white md:hover:bg-slate-100"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Visual overview with branded gradient */}
              <div className={`md:w-5/12 bg-gradient-to-br ${activeService.color} p-8 text-white flex flex-col justify-between relative flex-shrink-0 min-h-[220px] md:min-h-0`}>
                {/* Decorative radial lighting */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_60%)] pointer-events-none" />

                <div>
                  {/* Category Tag */}
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm mb-6 uppercase tracking-wider">
                    {activeService.tag}
                  </span>

                  {/* Icon */}
                  <motion.div
                    layoutId={`card-icon-${activeService.id}`}
                    className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg mb-6"
                  >
                    <activeService.icon className={`w-8 h-8 ${activeService.iconColor}`} />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    layoutId={`card-title-${activeService.id}`}
                    className="text-3xl font-extrabold mb-3 leading-tight"
                  >
                    {activeService.title}
                  </motion.h3>
                  
                  <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                    {activeService.description}
                  </p>
                </div>

                {/* Recovery expectations pill */}
                <div className="mt-8 bg-white/10 border border-white/15 rounded-2xl p-4 flex items-start gap-3 backdrop-blur-sm">
                  <Clock className="w-5 h-5 text-[#3aad6e] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold font-mono">
                      Estimated Recovery
                    </div>
                    <div className="text-sm font-bold mt-0.5">{activeService.recoveryTime}</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed clinical content */}
              <div className="md:w-7/12 p-8 overflow-y-auto flex flex-col justify-between max-h-[55vh] md:max-h-none">
                <div className="space-y-6">
                  {/* Symptoms list */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#2e8b57] font-bold mb-3 font-mono">
                      Symptoms Addressed
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {activeService.symptoms.map((symptom, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                          <span>{symptom}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Procedures list */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#0f2d5e] font-bold mb-3 font-mono">
                      Advanced Procedures
                    </h4>
                    <div className="space-y-2">
                      {activeService.procedures.map((proc, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#2e8b57] mt-2 flex-shrink-0" />
                          <span className="font-semibold leading-relaxed">{proc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Non-surgical alternatives */}
                  <div className="p-4 bg-[#f8fafc] rounded-2xl border border-slate-100">
                    <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1.5 font-mono">
                      Non-Surgical Approach
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {activeService.nonSurgical}
                    </p>
                  </div>
                </div>

                {/* Appointment booking CTA */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href={`/contact?concern=${encodeURIComponent(activeService.title)}`}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0f2d5e] text-white font-bold text-sm hover:bg-[#1a4a8a] transition-all duration-300 hover:shadow-lg shadow-navy/10 text-center"
                  >
                    Request Consultation
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleClose}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-slate-200 text-slate-500 font-semibold text-sm hover:bg-slate-50 transition-colors"
                  >
                    Back to Services
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
