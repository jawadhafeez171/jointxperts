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
  title: "Orthopedic Doctor in Seshadripuram, Central Bengaluru | Dr. Syed Parveez Ahmed",
  description:
    "Consult joint replacement surgeon Dr. Syed Parveez Ahmed at Trinity Hospital Seshadripuram. Call +91 88672 70633 for appointments. Knee & hip replacement, spine care & trauma.",
  alternates: {
    canonical: "https://www.jointxperts.in/seshadripuram",
  },
  openGraph: {
    title: "Orthopedic Doctor in Seshadripuram, Central Bengaluru | Dr. Syed Parveez Ahmed",
    description:
      "Consult joint replacement surgeon Dr. Syed Parveez Ahmed at Trinity Hospital Seshadripuram. Call +91 88672 70633. Knee & hip replacement, trauma & arthroscopy.",
    url: "https://www.jointxperts.in/seshadripuram",
    siteName: "JointXperts",
    images: [
      {
        url: "/photo1.webp",
        width: 1200,
        height: 630,
        alt: "Orthopedic Doctor in Seshadripuram Bangalore - Dr. Syed Parveez Ahmed",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orthopedic Doctor in Seshadripuram, Central Bengaluru | Dr. Syed Parveez Ahmed",
    description:
      "Consult joint replacement surgeon Dr. Syed Parveez Ahmed at Trinity Hospital Seshadripuram. Direct booking: +91 88672 70633.",
    images: ["/photo1.webp"],
  },
};

const clinicDetails = {
  doctorName: "Dr. Syed Parveez Ahmed",
  qualifications: "MBBS, MS (Orthopaedics), Fellow in Joint Replacement (FRGUHS)",
  speciality: "Consultant Orthopedic & Joint Replacement Surgeon",
  clinicName: "Trinity Central Hospital",
  area: "Seshadripuram / Malleshwaram",
  zone: "Central Bengaluru",
  phone: "+91 88672 70633",
  cleanPhone: "918867270633",
  address: {
    line1: "#45, 2nd Main Road",
    line2: "Seshadripuram",
    city: "Bangalore",
    state: "Karnataka",
    postalCode: "560020",
    landmark: "Near Seshadripuram College & 650m from Mantri Square Sampige Road Metro",
  },
  timings: [
    "Monday, Wednesday, Friday: 2:00 PM – 4:00 PM (Afternoon OPD & Surgeries)",
    "Trauma & Emergency Admissions: 24/7 on call support",
    "Appointment Helpline: +91 88672 70633",
  ],
  googleMapsUrl: "https://maps.google.com/?q=Trinity+Central+Hospital+Seshadripuram+Bengaluru",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.674912839213!2d77.5750!3d12.9930!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1641b6b6b6b7%3A0x6b490d16568dbfc4!2sSeshadripuram%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

const treatments = [
  {
    title: "Total & Partial Knee Replacement (Subvastus)",
    desc: "Muscle-sparing technique preserving the quadriceps tendon for faster functional recovery, lower postoperative pain, and rapid stair climbing.",
  },
  {
    title: "Total Hip Arthroplasty (Ceramic & Muscle-Sparing)",
    desc: "Durable ceramic-on-polyethylene bearing implants restoring pain-free walking and full hip mobility for patients with avascular necrosis (AVN) or severe arthritis.",
  },
  {
    title: "Complex Trauma Surgery & Non-Union Reconstruction",
    desc: "Expert surgical fixation for severe fractures, osteoporotic fragility fractures in the elderly, and revision surgery for previously unhealed bone breaks.",
  },
  {
    title: "Minimally Invasive Spine Microdiscectomy",
    desc: "Targeted decompression for lumbar disc herniation, sciatica nerve compression, and severe spinal canal stenosis.",
  },
  {
    title: "Keyhole Arthroscopic Joint Reconstructions",
    desc: "Advanced minimally invasive sports surgery for ACL ligament tears, meniscus preservation, and shoulder rotator cuff repairs.",
  },
  {
    title: "Geriatric Orthopedic Care & Hip Fracture Fixation",
    desc: "Rapid surgical stabilization of hip fractures in elderly patients to ensure early mobilization and prevent bedridden complications.",
  },
  {
    title: "Biological PRP & Hyaluronic Acid Injections",
    desc: "Targeted joint preservation injections to manage knee joint friction, relieve pain, and delay or prevent the need for joint replacement.",
  },
  {
    title: "Cashless Health Insurance & Mediclaim Desk",
    desc: "Full in-house cashless hospitalization support for all major health insurance networks and TPAs.",
  },
];

const reviews = [
  {
    author: "Ranganathan G.",
    locality: "Malleshwaram",
    rating: 5,
    text: "My hip replacement was done by Dr. Syed Parveez Ahmed at Trinity Central Hospital Seshadripuram. Before surgery I could barely walk due to AVN. Today, 3 months post-op, I walk 4 km daily without any limp or pain. Excellent hospital and truly gifted surgeon.",
    date: "September 2026",
  },
  {
    author: "Geetha K.",
    locality: "Kumara Park West",
    rating: 5,
    text: "Dr. Ahmed treated my elderly father's femur fracture at Trinity Hospital. His calm demeanor and surgical precision gave our family tremendous confidence. Recovery was seamless. Very grateful.",
    date: "August 2026",
  },
  {
    author: "Sanjay Bhandari",
    locality: "Rajajinagar",
    rating: 5,
    text: "Orthopedic specialist in Central Bangalore. Very transparent about surgery costs and insurance approvals. Hospital staff was courteous and care was excellent.",
    date: "July 2026",
  },
  {
    author: "Ananth Murthy",
    locality: "Vasanth Nagar",
    rating: 5,
    text: "Consulted Dr. Ahmed for chronic knee arthritis. His thorough evaluation and conservative approach before discussing surgery gave us complete confidence.",
    date: "October 2026",
  },
];

const faqs = [
  {
    q: "What is the doctor's phone number for booking an appointment in Seshadripuram?",
    a: "You can book an appointment with Dr. Syed Parveez Ahmed at Trinity Central Hospital Seshadripuram by calling +91 88672 70633 or via WhatsApp at +91 88672 70633. Online appointment booking is also available on this page.",
  },
  {
    q: "What are Dr. Syed Parveez Ahmed's consultation timings in Seshadripuram?",
    a: "Dr. Syed Parveez Ahmed consults at Trinity Central Hospital on Monday, Wednesday, and Friday from 2:00 PM to 4:00 PM. Elective joint replacement surgeries and emergency trauma care are also performed at this center.",
  },
  {
    q: "Where is Trinity Central Hospital located?",
    a: "The hospital is located at #45, 2nd Main Road, Seshadripuram, Bangalore — 560020. It is located 650 meters from Mantri Square Sampige Road Metro Station (Green Line) and 1.8 km from Majestic Bus Station.",
  },
  {
    q: "Is cashless health insurance available for joint replacement surgeries?",
    a: "Yes. Trinity Central Hospital features an in-house Cashless TPA Helpdesk providing full cashless hospitalization for all major private and public health insurance policies.",
  },
  {
    q: "Is parking available at Trinity Central Hospital?",
    a: "Yes. Dedicated hospital parking is available with security staff, patient drop-off bays, wheelchair ramps, and stretcher-friendly elevators.",
  },
  {
    q: "How close is the hospital to Malleshwaram and Rajajinagar?",
    a: "The hospital is adjacent to Malleshwaram (Swastik Circle) and easily reachable within 5 to 10 minutes from Rajajinagar, Kumara Park, and Vasanth Nagar.",
  },
];

export default function SeshadripuramPage() {
  const canonicalUrl = "https://www.jointxperts.in/seshadripuram";

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
            "name": "Seshadripuram Orthopedic Hospital",
            "item": canonicalUrl,
          },
        ],
      },
      {
        "@type": "MedicalClinic",
        "@id": `${canonicalUrl}#clinic`,
        "name": "Trinity Central Hospital - JointXperts Seshadripuram",
        "description":
          "Orthopedic & Joint Replacement Surgeon Dr. Syed Parveez Ahmed's surgical base in Seshadripuram / Malleshwaram, Central Bengaluru. Total knee and hip replacement, arthroscopy, spine care & trauma surgery.",
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
            "dayOfWeek": ["Monday", "Wednesday", "Friday"],
            "opens": "14:00",
            "closes": "16:00",
          },
        ],
        "areaServed": [
          { "@type": "Place", "name": "Seshadripuram" },
          { "@type": "Place", "name": "Malleshwaram" },
          { "@type": "Place", "name": "Kumara Park" },
          { "@type": "Place", "name": "Rajajinagar" },
          { "@type": "Place", "name": "Vasanth Nagar" },
          { "@type": "Place", "name": "Majestic" },
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
              Central Bengaluru • Seshadripuram & Malleshwaram
            </span>
          </div>

          {/* Hero Section */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#f0faf5] via-[#f8fafc] to-transparent rounded-full -mr-20 -mt-20 pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0faf5] text-[#2e8b57] text-xs font-bold uppercase tracking-widest mb-4">
                  <Hospital className="w-4 h-4" />
                  Trinity Central Hospital — Seshadripuram & Malleshwaram
                </div>

                <h1 className="text-3xl lg:text-5xl font-extrabold text-[#0f2d5e] leading-tight mb-4">
                  Orthopedic Doctor in Seshadripuram, Central Bengaluru | Dr. Syed Parveez Ahmed
                </h1>

                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                  Consult joint replacement surgeon <strong>Dr. Syed Parveez Ahmed</strong> [MBBS, MS (Ortho), FRGUHS] at Trinity Central Hospital, Seshadripuram. A central surgical anchor serving patients across Seshadripuram, Malleshwaram, Kumara Park, and Rajajinagar, offering modern arthroplasty, trauma surgery, and cashless health insurance hospitalization.
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
                        Direct helpline for consultation bookings & surgical admissions
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
                        href={`https://wa.me/${clinicDetails.cleanPhone}?text=${encodeURIComponent("Hello Dr. Syed Parveez Ahmed, I would like to book an orthopedic appointment at Trinity Central Hospital Seshadripuram.")}`}
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
                    locationName="Trinity Central Hospital (Seshadripuram)" 
                    label="Book Appointment at Seshadripuram"
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
                      alt="Dr. Syed Parveez Ahmed Orthopedic Surgeon Seshadripuram"
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
                    Consultant Orthopedic & Joint Replacement Surgeon with 12+ years of surgical experience across Bangalore North & Central Bengaluru.
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
                  Call or WhatsApp to schedule consultations at Trinity Central Hospital, Seshadripuram.
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
                href={`https://wa.me/${clinicDetails.cleanPhone}?text=${encodeURIComponent("Hi Dr. Syed Parveez Ahmed, I want to book an orthopedic appointment at Seshadripuram clinic.")}`}
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
              {/* Treatments at Seshadripuram */}
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
                      Orthopedic Treatments at Trinity Central Hospital
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Specialized joint replacement surgery, complex trauma reconstruction, and outpatient joint consultations for patients in Central Bengaluru, Malleshwaram, Kumara Park, and Rajajinagar.
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
                      Hospital Infrastructure
                    </span>
                    <h2 className="text-2xl font-bold text-[#0f2d5e]">
                      Trinity Central Hospital Facilities
                    </h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f0faf5] border border-[#2e8b57]/20">
                    <Check className="w-5 h-5 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0f2d5e]">
                        Modular Operating Suites & Surgical ICU
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        Equipped with high-precision arthroplasty instruments, laminar air systems, and intensive post-operative monitoring.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f8fafc] border border-gray-100">
                    <Check className="w-5 h-5 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0f2d5e]">
                        Walking Distance from Mantri Square Metro (650m)
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        Unmatched transit accessibility via the Green Line Metro and rapid connectivity from Majestic bus stand.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f8fafc] border border-gray-100">
                    <Check className="w-5 h-5 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0f2d5e]">
                        Cashless Hospitalization with All Major TPAs
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        Dedicated insurance assistance desk coordinating pre-approvals and hassle-free mediclaim claims for joint surgeries.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f8fafc] border border-gray-100">
                    <Check className="w-5 h-5 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0f2d5e]">
                        Flexible Inpatient Accommodation Options
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        Patient rooms ranging from comfortable semi-private wards to fully appointed private deluxe recovery suites.
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
                  Seshadripuram OPD Timings
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
                    title={`Map of ${clinicDetails.clinicName} Seshadripuram`}
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

                {/* QR Code Helper */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-16 h-16 shrink-0 bg-white p-1 rounded-lg border border-gray-200/60 shadow-xs flex items-center justify-center">
                    <img
                      src="/qrcode/trinity central hospital.jpeg?v=2"
                      alt="Scan Map QR Code Seshadripuram Clinic"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#2e8b57]">
                      Scan QR Code for GPS Directions
                    </div>
                    <div className="text-gray-500 text-[11px] mt-0.5 leading-snug">
                      Point your phone camera to open instant Google Maps navigation to Trinity Central Hospital.
                    </div>
                  </div>
                </div>
              </div>

              {/* Transit & Parking Details */}
              <div className="bg-[#f0faf5] rounded-3xl p-6 border border-[#2e8b57]/20 space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-[#0f2d5e] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#2e8b57]" />
                    Hospital Parking & Stretcher Lifts
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Dedicated hospital parking lot with full-time security guards, patient drop-off bay, wheelchair ramps, and stretcher-friendly elevators.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#0f2d5e] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#2e8b57]" />
                    Metro (Green Line) & Transit
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    650m from Mantri Square Sampige Road Metro Station. Bangalore City Railway Station / Majestic Bus Stand is only 1.8 km away.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#0f2d5e] uppercase tracking-wider mb-2">
                    Nearby Localities Served
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Seshadripuram",
                      "Malleshwaram",
                      "Kumara Park",
                      "Rajajinagar",
                      "Vasanth Nagar",
                      "Majestic",
                      "Shivajinagar",
                      "Gandhinagar",
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
                  What Patients in Seshadripuram & Malleshwaram Say
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
                Frequently Asked Questions — Seshadripuram Clinic
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Helpful details about appointments and joint surgeries at Trinity Central Hospital Seshadripuram.
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
                Orthopedic Surgeon in Central Bengaluru
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Book Your Consultation with Dr. Syed Parveez Ahmed
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Consult for knee & hip joint replacement, fracture care, spine pain, and arthroscopy at Trinity Central Hospital, Seshadripuram.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-emerald-200">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                  <Clock className="w-3.5 h-3.5" />
                  Mon, Wed, Fri: 2:00 PM – 4:00 PM
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                  <Phone className="w-3.5 h-3.5" />
                  Doctor's Booking Number: {clinicDetails.phone}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <LocationBookingCTA 
                locationName="Trinity Central Hospital (Seshadripuram)" 
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
                href={`https://wa.me/${clinicDetails.cleanPhone}?text=${encodeURIComponent("Hello Dr. Syed Parveez Ahmed, I want to book an orthopedic appointment at Trinity Central Hospital Seshadripuram.")}`}
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

