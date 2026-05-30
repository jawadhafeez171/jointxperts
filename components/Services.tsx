"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
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
  Shield
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
    accent: "#0f2d5e",
    image: "/services/service_joint_care.png",
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
    accent: "#2e8b57",
    image: "/services/service_spine_general.png",
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
    accent: "#0f2d5e",
    image: "/services/service_hip_replacement.png",
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
    icon: RotateCcw,
    title: "Knee Replacement",
    description:
      "Total and partial knee arthroplasty with precision alignment technology. Restore full knee function and eliminate chronic pain with proven long-term outcomes.",
    color: "from-[#1a4a8a] to-[#0f2d5e]",
    lightColor: "bg-[#eef2ff]",
    iconColor: "text-[#1a4a8a]",
    accent: "#1a4a8a",
    image: "/services/service_knee_replacement.png",
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
    id: "arthroscopy",
    icon: Bone,
    title: "Arthroscopy",
    description:
      "Minimally invasive keyhole surgery for diagnosing and treating sports injuries, ligament tears (ACL/PCL), meniscus tears, and chronic joint mechanical pain.",
    color: "from-[#1a4a8a] to-[#0f2d5e]",
    lightColor: "bg-[#eef2ff]",
    iconColor: "text-[#1a4a8a]",
    accent: "#1a4a8a",
    image: "/services/service_arthroscopy.png",
    tag: "Surgical",
    recoveryTime: "2 - 6 Weeks (Highly active recovery path)",
    symptoms: [
      "Acute joint pain from sudden sports twist or impact",
      "Joint instability or feeling of giving way (ACL)",
      "Locking or catching sensation during bending (Meniscus)",
      "Persistent swelling unresponsive to rest and ice"
    ],
    procedures: [
      "Minimally invasive arthroscopic ACL reconstruction",
      "Arthroscopic meniscus repair & debridement",
      "Diagnostic keyhole joint visualization & cartilage cleanout",
      "Arthroscopic removal of loose bone or tissue bodies"
    ],
    nonSurgical: "Targeted pre-operative physical therapy, custom functional bracing, and post-injury active rehab."
  },
  {
    id: "fracture-management",
    icon: Shield,
    title: "Fracture Management",
    description:
      "Immediate and long-term care for broken bones using modern casting, splinting, and advanced internal fixation surgery for proper healing and skeletal alignment.",
    color: "from-[#0f2d5e] to-[#2e8b57]",
    lightColor: "bg-[#f0f7ff]",
    iconColor: "text-[#0f2d5e]",
    accent: "#0f2d5e",
    image: "/services/service_fracture.png",
    tag: "Speciality",
    recoveryTime: "6 - 12 Weeks (Bone consolidation timeline)",
    symptoms: [
      "Immediate severe pain following a fall, impact, or trauma",
      "Visible bone deformity or abnormal limb positioning",
      "Severe localized swelling, tenderness, and bruising",
      "Inability to bear weight or move the injured limb"
    ],
    procedures: [
      "High-fidelity digital bone alignment mapping",
      "Precision lightweight casting & custom functional splinting",
      "Open Reduction Internal Fixation (ORIF) surgery with plates & screws",
      "Targeted post-consolidation stiffness physical therapy"
    ],
    nonSurgical: "Immobilization via custom fiberglass casts, pain management, and progressive bone-loading rehab."
  },
  {
    id: "spine-injury-care",
    icon: Brain,
    title: "Spine Injury Care",
    description:
      "Expert evaluation and urgent management of spine-related trauma, herniation compression issues, and acute vertebral injuries to protect spinal cord function.",
    color: "from-[#2e8b57] to-[#1f6b3d]",
    lightColor: "bg-[#e8f5ee]",
    iconColor: "text-[#2e8b57]",
    accent: "#2e8b57",
    image: "/services/service_spine_care.png",
    tag: "Trauma",
    recoveryTime: "4 - 12 Weeks (Varies by trauma severity)",
    symptoms: [
      "Acute neck or back pain following trauma or lifting strain",
      "Numbness, tingling, or loss of sensation in limbs",
      "Shooting nerve-pathway pain radiating down one or both legs",
      "Loss of balance, coordination, or gait stability"
    ],
    procedures: [
      "Emergency spinal decompression evaluation",
      "Minimally invasive spinal stabilization surgery",
      "Targeted epidural blocks & selective diagnostic nerve injections",
      "Advanced customized spine-stabilization physical therapy"
    ],
    nonSurgical: "Custom medical bracing, nerve block injections, absolute recovery rest, and targeted core posture training."
  },
  {
    id: "pain-relief",
    icon: Zap,
    title: "Pain Relief",
    description:
      "Musculoskeletal pain management combining injections, physical therapies, and targeted medication to provide effective and lasting relief from chronic localized pain.",
    color: "from-[#2e8b57] to-[#3aad6e]",
    lightColor: "bg-[#e8f5ee]",
    iconColor: "text-[#2e8b57]",
    accent: "#2e8b57",
    image: "/blogs/blog_plantar_fasciitis.png",
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
    accent: "#0f3d2e",
    image: "/conditions/physio_postop_rehab.png",
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
  },
  {
    id: "knee-pain-arthritis",
    icon: Bone,
    title: "Knee Pain & Arthritis",
    description:
      "Comprehensive non-surgical and preventive treatment for degenerative knee wear, chronic joint stiffness, and osteoarthritis to restore active living.",
    color: "from-[#2e8b57] to-[#1f6b3d]",
    lightColor: "bg-[#e8f5ee]",
    iconColor: "text-[#2e8b57]",
    accent: "#2e8b57",
    image: "/services/service_joint_care.png",
    tag: "Speciality",
    recoveryTime: "Ongoing / 2 - 4 Weeks (For acute flare-ups)",
    symptoms: [
      "Chronic joint pain & localized warm swelling",
      "Stiffness, particularly after long periods of rest",
      "Difficulty climbing stairs, walking, or bending joint",
      "Grinding, cracking, or popping sounds (crepitus)"
    ],
    procedures: [
      "Digital radiological joint degradation analysis",
      "Hyaluronic acid viscosupplementation injections",
      "Custom unloader knee bracing alignment analysis",
      "Targeted local anti-inflammatory physical therapies"
    ],
    nonSurgical: "Quadriceps & hamstring targeting physical therapy, custom offloader bracing, weight optimization counseling, and intra-articular lubricating supplements."
  },
  {
    id: "ligament-injuries",
    icon: RotateCcw,
    title: "Ligament Injuries (ACL/PCL)",
    description:
      "State-of-the-art keyhole ligament reconstruction and customized athletic rehabilitation for sports joint injuries.",
    color: "from-[#1a4a8a] to-[#0f2d5e]",
    lightColor: "bg-[#eef2ff]",
    iconColor: "text-[#1a4a8a]",
    accent: "#1a4a8a",
    image: "/blogs/blog_acl_recovery.png",
    tag: "Surgical",
    recoveryTime: "6 - 9 Months (Full athletic return-to-play)",
    symptoms: [
      "A loud popping sound or sensation at injury onset",
      "Immediate severe joint pain & walking instability",
      "Rapid, tense knee joint swelling within a few hours",
      "A feeling that the knee joint is giving way during weight bearing"
    ],
    procedures: [
      "Arthroscopic keyhole ACL/PCL ligament reconstruction",
      "Precision autograft/allograft tissue selection & placement",
      "Pre-operative 3D functional biomechanics mapping",
      "Early range-of-motion mobilization therapy"
    ],
    nonSurgical: "Pre-rehabilitation muscle strengthening, custom functional active bracing, and progressive multi-plane joint stabilization rehab."
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
            className="group relative h-96 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#0f2d5e]/12 transition-all duration-500 cursor-pointer border border-gray-100 flex flex-col justify-end"
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
            
            {/* Multi-layered visual gradient overlay for text legibility and rich aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2d5e] via-[#0f2d5e]/40 to-transparent z-10 transition-all duration-500 group-hover:from-[#0f2d5e]/95 group-hover:via-[#0f2d5e]/50" />

            {/* Left active colored accent indicator line */}
            <div
              className="absolute left-0 bottom-0 top-0 w-1.5 transition-all duration-500 scale-y-0 group-hover:scale-y-100 z-30 origin-bottom"
              style={{ backgroundColor: s.accent }}
            />
            
            {/* Floating glassmorphic circular icon badge */}
            <div 
              className="absolute top-5 right-5 z-20 w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-lg border border-white/20 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
              style={{ backgroundColor: `${s.accent}d0` }}
            >
              <s.icon className="w-5 h-5 text-white" />
            </div>

            {/* Card Content Area (at bottom on top of gradient) */}
            <div className="relative z-20 p-6 md:p-8 flex flex-col justify-end text-white transition-all duration-500 translate-y-6 group-hover:translate-y-0">
              {/* Category Tag */}
              <span className="self-start text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm uppercase tracking-wider mb-2">
                {s.tag}
              </span>

              <motion.h3
                layoutId={`card-title-${s.id}`}
                className="text-xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors drop-shadow-sm"
              >
                {s.title}
              </motion.h3>
              
              {/* Description with reveal effect */}
              <p className="text-white/85 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-24 overflow-hidden">
                {s.description}
              </p>
              
              {/* Arrow link indicator */}
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More & Details
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.div>
        ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#0f2d5e] via-[#1a3d6b] to-[#0f3d2e] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-1">Not sure which treatment is right for you?</h3>
            <p className="text-white/60">Book a consultation and let Dr. Ahmed guide you with expert advice.</p>
          </div>
          <Link
            href="?booking=true"
            scroll={false}
            className="flex-shrink-0 px-7 py-3.5 rounded-full bg-[#2e8b57] text-white font-semibold hover:bg-[#1f6b3d] transition-all duration-300 hover:shadow-xl hover:shadow-green-900/40 whitespace-nowrap"
          >
            Get Expert Opinion
          </Link>
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
              transition={{ type: "spring", damping: 26, stiffness: 190 }}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-black/20 hover:bg-black/35 text-white md:bg-slate-100 md:hover:bg-slate-200 md:text-slate-500 md:hover:text-slate-800 transition-colors z-30"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Visual overview with branded gradient */}
              <div className={`w-full md:w-5/12 bg-gradient-to-br ${activeService.color} p-6 md:p-8 text-white flex flex-col justify-between relative flex-shrink-0 min-h-[160px] md:min-h-0`}>
                {/* Decorative radial lighting */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_60%)] pointer-events-none" />

                <div>
                  <div className="flex items-center gap-2 mb-4 md:mb-6">
                    {/* Category Tag */}
                    <span className="inline-block text-[10px] md:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm uppercase tracking-wider">
                      {activeService.tag}
                    </span>
                    {/* Compact recovery text for mobile */}
                    <span className="inline-block md:hidden text-[10px] font-semibold text-emerald-300">
                      • {activeService.recoveryTime.split(" (")[0]}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 md:block">
                    {/* Icon */}
                    <motion.div
                      layoutId={`card-icon-${activeService.id}`}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white flex items-center justify-center shadow-lg mb-0 md:mb-6 flex-shrink-0"
                    >
                      <activeService.icon className={`w-6 h-6 md:w-8 md:h-8 ${activeService.iconColor}`} />
                    </motion.div>

                    <div>
                      {/* Title */}
                      <motion.h3
                        layoutId={`card-title-${activeService.id}`}
                        className="text-xl md:text-3xl font-extrabold leading-tight"
                      >
                        {activeService.title}
                      </motion.h3>
                    </div>
                  </div>
                </div>

                {/* Recovery expectations pill - desktop only */}
                <div className="hidden md:flex mt-8 bg-white/10 border border-white/15 rounded-2xl p-4 items-start gap-3 backdrop-blur-sm">
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
              <div className="w-full md:w-7/12 p-5 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[calc(92vh-160px)] md:max-h-none flex-grow">
                <div className="space-y-5">
                  {/* Symptoms list */}
                  <div>
                    <h4 className="text-[10px] md:text-xs uppercase tracking-widest text-[#2e8b57] font-bold mb-2 md:mb-3 font-mono">
                      Symptoms Addressed
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeService.symptoms.map((symptom, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                          <span>{symptom}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Procedures list */}
                  <div>
                    <h4 className="text-[10px] md:text-xs uppercase tracking-widest text-[#0f2d5e] font-bold mb-2 md:mb-3 font-mono">
                      Advanced Procedures
                    </h4>
                    <div className="space-y-1.5">
                      {activeService.procedures.map((proc, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#2e8b57] mt-1.5 flex-shrink-0" />
                          <span className="font-semibold leading-relaxed">{proc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Non-surgical alternatives */}
                  <div className="p-3.5 bg-[#f8fafc] rounded-xl border border-slate-100">
                    <h4 className="text-[9px] md:text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1 font-mono">
                      Non-Surgical Approach
                    </h4>
                    <p className="text-slate-600 text-[11px] md:text-xs leading-relaxed">
                      {activeService.nonSurgical}
                    </p>
                  </div>
                </div>

                {/* Appointment booking CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    href={`?booking=true&concern=${encodeURIComponent(activeService.title)}`}
                    scroll={false}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#0f2d5e] text-white font-bold text-xs md:text-sm hover:bg-[#1a4a8a] transition-all duration-300 hover:shadow-lg shadow-navy/10 text-center"
                  >
                    Request Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={handleClose}
                    className="w-full sm:w-auto px-5 py-3 rounded-full border border-slate-200 text-slate-500 font-semibold text-xs md:text-sm hover:bg-slate-50 transition-colors"
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
