import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, Clock, Phone, Navigation, Car, ShieldCheck, CheckCircle2, 
  Star, ArrowLeft, Hospital, Sparkles, Building2, Compass, MessageCircle,
  Check, HelpCircle, Award
} from "lucide-react";
import type { Metadata } from "next";
import LocationBookingCTA from "@/app/locations/[slug]/LocationBookingCTA";

export const metadata: Metadata = {
  title: "Orthopedic Doctor in New BEL Road & RMV 2nd Stage | Dr. Syed Parveez Ahmed",
  description:
    "Consult orthopedic surgeon Dr. Syed Parveez Ahmed at Apollo Clinic New BEL Road. Call +91 88672 70633 for appointments. Joint pain, arthritis & spine consultation in RMV 2nd Stage.",
  alternates: {
    canonical: "https://www.jointxperts.in/new-bel-road",
  },
  openGraph: {
    title: "Orthopedic Doctor in New BEL Road & RMV 2nd Stage | Dr. Syed Parveez Ahmed",
    description:
      "Consult orthopedic surgeon Dr. Syed Parveez Ahmed at Apollo Clinic New BEL Road. Call +91 88672 70633. Knee & hip replacement, arthritis & sports injuries.",
    url: "https://www.jointxperts.in/new-bel-road",
    siteName: "JointXperts",
    images: [
      {
        url: "/photo1.webp",
        width: 1200,
        height: 630,
        alt: "Orthopedic Doctor in New BEL Road Bangalore - Dr. Syed Parveez Ahmed",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orthopedic Doctor in New BEL Road & RMV 2nd Stage | Dr. Syed Parveez Ahmed",
    description:
      "Consult orthopedic specialist Dr. Syed Parveez Ahmed at Apollo Clinic New BEL Road. Direct booking: +91 88672 70633.",
    images: ["/photo1.webp"],
  },
};

const clinicDetails = {
  doctorName: "Dr. Syed Parveez Ahmed",
  qualifications: "MBBS, MS (Orthopaedics), Fellow in Joint Replacement (FRGUHS)",
  speciality: "Consultant Orthopedic & Joint Replacement Surgeon",
  clinicName: "Apollo Clinic",
  area: "New BEL Road / RMV 2nd Stage",
  zone: "Bangalore North",
  phone: "+91 88672 70633",
  cleanPhone: "918867270633",
  address: {
    line1: "#82, New BEL Road, RMV 2nd Stage",
    line2: "Opp. Ramaiah Memorial Hospital junction",
    city: "Bangalore",
    state: "Karnataka",
    postalCode: "560054",
    landmark: "Near CPRI Gate & Ramaiah Hospital intersection on New BEL Road",
  },
  timings: [
    "Tuesday, Thursday, Saturday: 4:30 PM – 6:00 PM",
    "Morning OPD & Emergency Admissions: Available at Atharva Hospital Hebbal (10 mins away)",
    "Appointment Helpline: +91 88672 70633",
  ],
  googleMapsUrl: "https://maps.app.goo.gl/zyJwywMvVKEE8E6e7",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.218552109503!2d77.5665!3d13.0315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17c5b6b6b6b7%3A0x6b490d16568dbfc4!2sNew%20BEL%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

const treatments = [
  {
    title: "Osteoarthritis Staging & Joint Preservation",
    desc: "Comprehensive radiographic staging, hyaluronic acid gel injections, biological PRP therapy, and personalized exercise protocols to preserve native knee cartilage.",
  },
  {
    title: "Subvastus Total Knee Replacement Consultations",
    desc: "Muscle-sparing surgical consultation for advanced arthritis. The quadriceps tendon is preserved, allowing rapid recovery and minimal postoperative discomfort.",
  },
  {
    title: "Shoulder Rotator Cuff & Frozen Shoulder Care",
    desc: "Non-surgical pain relief, hydrodilatation procedures, and range-of-motion therapy to restore pain-free shoulder elevation and strength.",
  },
  {
    title: "Osteoporosis & Bone Mineral Density Screening",
    desc: "Evaluation of bone fragility in seniors and post-menopausal women with DEXA scan interpretation, medical management, and fracture prevention.",
  },
  {
    title: "Sports Injury Physical Assessments",
    desc: "Detailed clinical exams for ligament sprains, meniscus tears, runner's knee, and tennis elbow with conservative rehabilitation roadmaps.",
  },
  {
    title: "Custom Unloader Knee Brace Prescriptions",
    desc: "Non-surgical offloading brace fittings for medial compartment arthritis, providing immediate walking stability and pain reduction.",
  },
  {
    title: "Spine Care, Sciatica & Ergonomic Guidance",
    desc: "Evidence-based non-surgical care for lumbar spondylosis, neck stiffness, herniated discs, and posture correction.",
  },
  {
    title: "Second Opinions for Joint Replacement",
    desc: "Honest clinical reviews of prior MRI scans and X-rays to ensure surgery is recommended only when strictly necessary.",
  },
];

const reviews = [
  {
    author: "Dr. Anirudh Rao",
    locality: "Sadashivanagar",
    rating: 5,
    text: "As a physician myself, I am very discerning about who I consult for joint issues. Dr. Syed Parveez Ahmed at Apollo Clinic New BEL Road demonstrated exceptional diagnostic acumen and patient empathy for my severe knee stiffness. Truly exceptional orthopedic care.",
    date: "October 2026",
  },
  {
    author: "Shanti Narayanan",
    locality: "RMV 2nd Stage",
    rating: 5,
    text: "Visited for persistent shoulder pain. Dr. Ahmed took time to review previous scans and explained every option clearly. Did not rush into surgery. The Apollo clinic setup on New BEL road is very comfortable and efficient.",
    date: "August 2026",
  },
  {
    author: "Vikram Shenoy",
    locality: "Sanjaynagar",
    rating: 5,
    text: "Consulted Dr. Ahmed for my mother's bilateral knee arthritis. His advice was crisp and reassuring. Highly recommend him for anyone seeking trusted orthopedic opinions in North Bangalore.",
    date: "July 2026",
  },
  {
    author: "Preeti Mohan",
    locality: "Mathikere",
    rating: 5,
    text: "Took my teenager for an ankle ligament sprain from basketball. Dr. Ahmed handled it with a functional brace and targeted exercises. Healing was fast and thorough.",
    date: "September 2026",
  },
];

const faqs = [
  {
    q: "What is the doctor's phone number for booking an appointment on New BEL Road?",
    a: "You can book an appointment with Dr. Syed Parveez Ahmed at Apollo Clinic New BEL Road by calling +91 88672 70633 or via WhatsApp at +91 88672 70633. Online appointment booking is also available on this page.",
  },
  {
    q: "What are Dr. Syed Parveez Ahmed's consultation timings on New BEL Road?",
    a: "Dr. Syed Parveez Ahmed consults at Apollo Clinic on Tuesday, Thursday, and Saturday from 4:30 PM to 6:00 PM. For morning appointments or daytime emergencies, consultations are available at Atharva Hospital Hebbal (10 minutes away).",
  },
  {
    q: "Where is Apollo Clinic located on New BEL Road?",
    a: "The clinic is located at #82, New BEL Road, RMV 2nd Stage, opposite the Ramaiah Memorial Hospital junction and near the CPRI Gate, Bangalore — 560054.",
  },
  {
    q: "Are diagnostic facilities like X-ray and DEXA scans available on premises?",
    a: "Yes. Apollo Clinic is equipped with digital X-ray, DEXA Bone Mineral Density scan, and comprehensive clinical laboratory diagnostics on site.",
  },
  {
    q: "Is parking available at Apollo Clinic New BEL Road?",
    a: "Yes. Reserved customer basement parking is available with elevator access directly to the 1st floor clinic reception, with dedicated security valet support.",
  },
  {
    q: "Where are surgical operations performed if needed?",
    a: "Surgeries such as total knee and hip replacements are performed at premier tertiary centers including Atharva Multispeciality Hospital (Hebbal) and Trinity Central Hospital (Seshadripuram) with full cashless insurance support.",
  },
];

export default function NewBELRoadPage() {
  const canonicalUrl = "https://www.jointxperts.in/new-bel-road";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.jointxperts.in",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": "https://www.jointxperts.in/locations",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "New BEL Road Orthopedic Clinic",
            "item": canonicalUrl,
          },
        ],
      },
      {
        "@type": "MedicalClinic",
        "@id": `${canonicalUrl}#clinic`,
        "name": "Apollo Clinic - JointXperts New BEL Road",
        "description":
          "Orthopedic & Joint Replacement Surgeon Dr. Syed Parveez Ahmed's consultation clinic at Apollo Clinic New BEL Road. Knee arthritis, hip pain, osteoporosis & sports injury care in RMV 2nd Stage.",
        "url": canonicalUrl,
        "telephone": clinicDetails.phone,
        "medicalSpecialty": "Orthopedic Surgery",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": `${clinicDetails.address.line1}, ${clinicDetails.address.line2}`,
          "addressLocality": clinicDetails.address.city,
          "addressRegion": clinicDetails.address.state,
          "postalCode": clinicDetails.address.postalCode,
          "addressCountry": "IN",
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Tuesday", "Thursday", "Saturday"],
            "opens": "16:30",
            "closes": "18:00",
          },
        ],
        "areaServed": [
          { "@type": "Place", "name": "New BEL Road" },
          { "@type": "Place", "name": "RMV 2nd Stage" },
          { "@type": "Place", "name": "Sadashivanagar" },
          { "@type": "Place", "name": "Sanjaynagar" },
          { "@type": "Place", "name": "Mathikere" },
          { "@type": "Place", "name": "Yeshwanthpur" },
          { "@type": "Place", "name": "Dollars Colony" },
        ],
        "physician": {
          "@type": "Physician",
          "name": clinicDetails.doctorName,
          "jobTitle": clinicDetails.speciality,
          "url": "https://www.jointxperts.in/about",
          "telephone": clinicDetails.phone,
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#f8fafc] pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-[#2e8b57] hover:text-[#1f6b3d] text-sm font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Clinic Locations
            </Link>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0f2d5e] border border-blue-100">
              <Compass className="w-3.5 h-3.5 text-[#2e8b57]" />
              Bangalore North • New BEL Road & RMV
            </span>
          </div>

          {/* Hero Section */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#f0faf5] via-[#f8fafc] to-transparent rounded-full -mr-20 -mt-20 pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0faf5] text-[#2e8b57] text-xs font-bold uppercase tracking-widest mb-4">
                  <Hospital className="w-4 h-4" />
                  Apollo Clinic — New BEL Road & RMV 2nd Stage
                </div>

                <h1 className="text-3xl lg:text-5xl font-extrabold text-[#0f2d5e] leading-tight mb-4">
                  Orthopedic Doctor in New BEL Road & RMV 2nd Stage | Dr. Syed Parveez Ahmed
                </h1>

                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                  Consult orthopedic specialist <strong>Dr. Syed Parveez Ahmed</strong> [MBBS, MS (Ortho), FRGUHS] at Apollo Clinic, New BEL Road. Providing comprehensive musculoskeletal evaluations, bone density screenings, non-surgical joint preservation, and joint replacement guidance for patients across RMV Stage 2, Sadashivanagar, Mathikere, and Sanjaynagar.
                </p>

                {/* Prominent Doctor's Booking Callout Bar */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-[#f0faf5] to-[#f8fafc] border border-[#2e8b57]/20 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#2e8b57] mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    Doctor's Number for Booking & Appointments
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <a
                        href={`tel:${clinicDetails.cleanPhone}`}
                        className="text-2xl sm:text-3xl font-extrabold text-[#0f2d5e] hover:text-[#2e8b57] transition-colors flex items-center gap-2"
                      >
                        {clinicDetails.phone}
                      </a>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Direct helpline for consultation bookings & patient enquiries
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5">
                      <a
                        href={`tel:${clinicDetails.cleanPhone}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0f2d5e] text-white font-semibold text-xs hover:bg-[#1a4a8a] transition-all shadow-sm"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-400" />
                        Call Doctor Now
                      </a>
                      <a
                        href={`https://wa.me/${clinicDetails.cleanPhone}?text=${encodeURIComponent("Hello Dr. Syed Parveez Ahmed, I would like to book an orthopedic appointment at Apollo Clinic New BEL Road.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        WhatsApp Booking
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <LocationBookingCTA 
                    locationName="Apollo Clinic (New BEL Road)" 
                    label="Book Appointment on New BEL Road"
                  />
                  <a
                    href="#location-details"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-gray-200 bg-white text-[#0f2d5e] font-semibold text-sm hover:border-[#2e8b57] hover:text-[#2e8b57] transition-all shadow-sm"
                  >
                    <Clock className="w-4 h-4 text-[#2e8b57]" />
                    View Clinic Timings & Directions
                  </a>
                </div>
              </div>

              {/* Doctor Spotlight Card in Hero */}
              <div className="lg:col-span-4">
                <div className="bg-[#f8fafc] rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col items-center text-center">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 bg-gray-200">
                    <Image
                      src="/photo1.webp"
                      alt="Dr. Syed Parveez Ahmed Orthopedic Surgeon New BEL Road"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <h2 className="text-xl font-bold text-[#0f2d5e]">Dr. Syed Parveez Ahmed</h2>
                  <p className="text-xs font-semibold text-[#2e8b57] uppercase tracking-wider mt-1 mb-2">
                    MBBS, MS (Ortho), FRGUHS
                  </p>
                  <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                    Consultant Orthopedic & Joint Replacement Surgeon with 12+ years of clinical expertise across Bangalore North & Central Bengaluru.
                  </p>
                  <div className="w-full grid grid-cols-2 gap-2 text-[11px] font-semibold text-gray-700 pt-3 border-t border-gray-200/60">
                    <div className="bg-white p-2 rounded-xl border border-gray-100">
                      <span className="text-[#2e8b57] block font-bold text-sm">2000+</span>
                      Joint Surgeries
                    </div>
                    <div className="bg-white p-2 rounded-xl border border-gray-100">
                      <span className="text-[#2e8b57] block font-bold text-sm">5.0 ★</span>
                      Google Reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Doctor's Booking Helpline Box */}
          <div className="bg-gradient-to-r from-[#0f2d5e] via-[#153e7a] to-[#0f2d5e] rounded-3xl p-6 lg:p-8 text-white shadow-md mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#2e8b57] flex items-center justify-center flex-shrink-0 shadow-inner">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-emerald-300 text-xs font-bold uppercase tracking-wider block">
                  Quick Appointment Helpline
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Doctor's Number for Booking:{" "}
                  <a href={`tel:${clinicDetails.cleanPhone}`} className="hover:text-emerald-300 underline underline-offset-4 transition-colors">
                    +91 88672 70633
                  </a>
                </h3>
                <p className="text-white/70 text-xs sm:text-sm mt-0.5">
                  Call or WhatsApp to schedule consultations at Apollo Clinic, New BEL Road. Tue, Thu, Sat OPD.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href={`tel:${clinicDetails.cleanPhone}`}
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#0f2d5e] font-bold text-sm hover:bg-gray-100 transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#2e8b57]" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${clinicDetails.cleanPhone}?text=${encodeURIComponent("Hi Dr. Syed Parveez Ahmed, I want to book an orthopedic appointment at Apollo Clinic New BEL Road.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Details Grid: Left Content & Right Logistics */}
          <div id="location-details" className="grid lg:grid-cols-12 gap-8 mb-14">
            {/* Left 7 Columns */}
            <div className="lg:col-span-7 space-y-8">
              {/* Treatments on New BEL Road */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#f0faf5] flex items-center justify-center text-[#2e8b57]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#2e8b57] uppercase tracking-wider">
                      Procedures & Specialities
                    </span>
                    <h2 className="text-2xl font-bold text-[#0f2d5e]">
                      Orthopedic Treatments at Apollo Clinic New BEL Road
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Tailored non-surgical joint care, bone health management, and surgical consultations backed by Apollo's clinical standards for residents across RMV 2nd Stage, Sadashivanagar, and Sanjaynagar.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {treatments.map((t, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#f8fafc] border border-gray-100 hover:border-[#2e8b57]/40 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start gap-2 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                          <h3 className="text-sm font-bold text-[#0f2d5e] leading-snug">
                            {t.title}
                          </h3>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed pl-6">
                          {t.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Facility Highlights */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0f2d5e]">
                    <Building2 className="w-5 h-5 text-[#2e8b57]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#2e8b57] uppercase tracking-wider">
                      Clinical Highlights
                    </span>
                    <h2 className="text-2xl font-bold text-[#0f2d5e]">
                      Why Consult at Apollo Clinic New BEL Road?
                    </h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f0faf5] border border-[#2e8b57]/20">
                    <Check className="w-5 h-5 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0f2d5e]">
                        Apollo Clinical Standards & Protocol
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        High standards of hygiene, comfortable air-conditioned waiting lounges, and organized appointment management.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f8fafc] border border-gray-100">
                    <Check className="w-5 h-5 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0f2d5e]">
                        DEXA Bone Density Scan & Digital Radiography On-Site
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        Complete diagnostic imaging and blood testing facilities available within the clinic premises for same-day evaluation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f8fafc] border border-gray-100">
                    <Check className="w-5 h-5 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0f2d5e]">
                        Central North Bangalore Accessibility
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        Conveniently accessible for residents of Sadashivanagar, RMV 2nd Stage, Mathikere, and Sanjaynagar without traveling to Ring Road.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f8fafc] border border-gray-100">
                    <Check className="w-5 h-5 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0f2d5e]">
                        Honest Surgical Counseling & Hospital Transfer
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        When joint replacement is needed, smooth admission is arranged at Atharva Hospital Hebbal or Trinity Central Hospital.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 Columns */}
            <div className="lg:col-span-5 space-y-8">
              {/* Timings & Address Card */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-[#0f2d5e] mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#2e8b57]" />
                  New BEL Road OPD Timings
                </h3>

                <div className="space-y-3 mb-6">
                  {clinicDetails.timings.map((time, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#f8fafc] border border-gray-100 text-xs sm:text-sm font-medium text-gray-700 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                      <span>{time}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-[#0f2d5e] uppercase tracking-wider mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#2e8b57]" />
                    Exact Address & Landmark
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>{clinicDetails.clinicName}</strong>
                    <br />
                    {clinicDetails.address.line1}
                    <br />
                    {clinicDetails.address.line2}
                    <br />
                    {clinicDetails.address.city}, {clinicDetails.address.state} — {clinicDetails.address.postalCode}
                  </p>
                  <p className="text-xs text-gray-500 mt-2 bg-blue-50/70 p-3 rounded-xl border border-blue-100/60">
                    <strong>Landmark:</strong> {clinicDetails.address.landmark}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Direct Contact for Appointments:
                  </div>
                  <a
                    href={`tel:${clinicDetails.cleanPhone}`}
                    className="text-lg font-extrabold text-[#2e8b57] hover:underline flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    {clinicDetails.phone}
                  </a>
                </div>
              </div>

              {/* Map & Directions Card */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm overflow-hidden">
                <h3 className="text-base font-bold text-[#0f2d5e] mb-3 flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-[#2e8b57]" />
                  Location Map & Live Directions
                </h3>

                <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-4 border border-gray-100 bg-gray-100">
                  <iframe
                    src={clinicDetails.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${clinicDetails.clinicName} New BEL Road`}
                  />
                </div>

                <a
                  href={clinicDetails.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#0f2d5e] text-white text-sm font-semibold hover:bg-[#1a4a8a] transition-all shadow-sm mb-4"
                >
                  <Navigation className="w-4 h-4 text-emerald-400" />
                  Open in Google Maps for Navigation
                </a>
              </div>

              {/* Transit & Parking Details */}
              <div className="bg-[#f0faf5] rounded-3xl p-6 border border-[#2e8b57]/20 space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-[#0f2d5e] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#2e8b57]" />
                    Reserved Basement Parking
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Customer basement parking with security valet support and direct elevator access to the 1st floor clinic reception.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#0f2d5e] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#2e8b57]" />
                    Metro & Road Connectivity
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Sandal Soap Factory and Yeshwanthpur Metro stations are just 10 minutes away. Direct road connectivity from Sadashivanagar and Mathikere.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#0f2d5e] uppercase tracking-wider mb-2">
                    Nearby Localities Served
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "New BEL Road",
                      "RMV 2nd Stage",
                      "Sadashivanagar",
                      "Sanjaynagar",
                      "Mathikere",
                      "Yeshwanthpur",
                      "Gokula",
                      "Dollars Colony",
                      "Chikkamaranahalli",
                    ].map((area, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white text-gray-700 border border-gray-200 shadow-2xs"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Local Reviews Section */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm mb-14">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold text-[#2e8b57] uppercase tracking-widest">
                  Verified Local Feedback
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f2d5e] mt-1">
                  What Patients on New BEL Road & RMV Say
                </h2>
              </div>
              <div className="flex items-center gap-2 bg-[#f0faf5] px-4 py-2 rounded-2xl border border-[#2e8b57]/30">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#0f2d5e]">5.0 Local Rating</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#fbbc04] text-[#fbbc04]" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed italic mb-4">
                      "{rev.text}"
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-[#0f2d5e] block">{rev.author}</span>
                      <span className="text-gray-400 text-[11px]">{rev.locality}</span>
                    </div>
                    <span className="text-gray-400 font-mono text-[10px]">{rev.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm mb-14">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold text-[#2e8b57] uppercase tracking-widest">
                Patient Questions & Answers
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f2d5e] mt-1">
                Frequently Asked Questions — New BEL Road Clinic
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Helpful details about appointments and orthopedic consultations at Apollo Clinic New BEL Road.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#f8fafc] border border-gray-100 hover:border-[#2e8b57]/20 transition-all"
                >
                  <h3 className="text-base font-bold text-[#0f2d5e] mb-2 flex items-start gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#2e8b57] flex-shrink-0 mt-1" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed pl-6.5">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom High-Converting Booking Banner */}
          <div className="bg-gradient-to-r from-[#0f2d5e] via-[#153e7a] to-[#0f2d5e] rounded-3xl p-8 lg:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-4 h-4" />
                Orthopedic Surgeon in RMV & New BEL Road
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Book Your Consultation with Dr. Syed Parveez Ahmed
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Consult for joint pain, knee arthritis, shoulder stiffness, osteoporosis, and spine discomfort at Apollo Clinic, New BEL Road.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-emerald-200">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                  <Clock className="w-3.5 h-3.5" />
                  Tue, Thu, Sat: 4:30 PM – 6:00 PM
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                  <Phone className="w-3.5 h-3.5" />
                  Doctor's Booking Number: {clinicDetails.phone}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <LocationBookingCTA 
                locationName="Apollo Clinic (New BEL Road)" 
                label="Book Appointment"
              />
              <a
                href={`tel:${clinicDetails.cleanPhone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                Call Doctor
              </a>
              <a
                href={`https://wa.me/${clinicDetails.cleanPhone}?text=${encodeURIComponent("Hello Dr. Syed Parveez Ahmed, I want to book an orthopedic appointment at Apollo Clinic New BEL Road.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

