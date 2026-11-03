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
  title: "Orthopedic Doctor in Hebbal, Bangalore North | Dr. Syed Parveez Ahmed",
  description:
    "Consult orthopedic surgeon Dr. Syed Parveez Ahmed at Atharva Hospital Hebbal. Call +91 88672 70633 for appointments. Knee & hip replacement, fracture care & arthroscopy.",
  alternates: {
    canonical: "https://www.jointxperts.in/hebbal",
  },
  openGraph: {
    title: "Orthopedic Doctor in Hebbal, Bangalore North | Dr. Syed Parveez Ahmed",
    description:
      "Consult orthopedic surgeon Dr. Syed Parveez Ahmed at Atharva Hospital Hebbal. Call +91 88672 70633. Knee & hip replacement, fracture care & sports medicine.",
    url: "https://www.jointxperts.in/hebbal",
    siteName: "JointXperts",
    images: [
      {
        url: "/photo1.webp",
        width: 1200,
        height: 630,
        alt: "Orthopedic Doctor in Hebbal Bangalore - Dr. Syed Parveez Ahmed",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orthopedic Doctor in Hebbal, Bangalore North | Dr. Syed Parveez Ahmed",
    description:
      "Consult orthopedic specialist Dr. Syed Parveez Ahmed in Hebbal. Direct booking: +91 88672 70633. Knee, hip, trauma & joint replacement.",
    images: ["/photo1.webp"],
  },
};

const clinicDetails = {
  doctorName: "Dr. Syed Parveez Ahmed",
  qualifications: "MBBS, MS (Orthopaedics), Fellow in Joint Replacement (FRGUHS)",
  speciality: "Consultant Orthopedic & Joint Replacement Surgeon",
  clinicName: "Atharva Multispeciality Hospital",
  area: "Hebbal",
  zone: "Bangalore North",
  phone: "+91 88672 70633",
  cleanPhone: "918867270633",
  address: {
    line1: "#12, 1st Main Road, Vinayakanagar",
    line2: "Hebbal",
    city: "Bangalore",
    state: "Karnataka",
    postalCode: "560024",
    landmark: "Near Vinayakanagar Bus Stop & 400m from Hebbal Flyover junction",
  },
  timings: [
    "Monday to Saturday: 10:00 AM – 1:00 PM (Morning OPD)",
    "Monday to Saturday: 6:00 PM – 8:00 PM (Evening OPD)",
    "Sunday: By Emergency Appointment Only",
    "24/7 Accident & Emergency Trauma Care",
  ],
  googleMapsUrl: "https://maps.app.goo.gl/yYqi7YNaccBzvqLJ8",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.974864293931!2d77.5944!3d13.0360!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17937740ffb5%3A0x6b490d16568dbfc4!2sHebbal%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

const treatments = [
  {
    title: "Subvastus Total Knee Replacement (TKA)",
    desc: "Muscle-sparing knee arthroplasty that leaves the quadriceps tendon intact. Delivers faster mobilization, minimal post-op pain, and rapid return to walking within hours.",
  },
  {
    title: "Minimally Invasive Total Hip Replacement (THR)",
    desc: "Advanced hip reconstruction for avascular necrosis (AVN), osteoarthritis, and hip dysplasia utilizing durable ceramic-on-polyethylene bearings.",
  },
  {
    title: "Keyhole Arthroscopic Knee & Shoulder Surgery",
    desc: "Minimally invasive keyhole procedures for ACL/PCL ligament tears, meniscus resections, shoulder rotator cuff repair, and labral stabilization.",
  },
  {
    title: "24/7 Fracture Fixation & Complex Trauma Surgery",
    desc: "Emergency surgical stabilization of complex bone fractures, polytrauma, fragility hip fractures in seniors, and non-union bone corrections.",
  },
  {
    title: "Biological PRP & Hyaluronic Acid Knee Injections",
    desc: "Targeted joint preservation therapies including Platelet-Rich Plasma (PRP) and viscosupplementation injections to alleviate cartilage degeneration.",
  },
  {
    title: "Spine Care, Sciatica & Lumbar Disc Management",
    desc: "Evidence-based conservative and surgical management for lumbar spondylosis, herniated discs, sciatica nerve pain, and postural spinal strain.",
  },
  {
    title: "Inpatient Post-Operative Physiotherapy",
    desc: "Dedicated hospital rehabilitation team guiding patients through step-by-step joint mobilization, gait training, and muscle-strengthening exercises.",
  },
  {
    title: "Cashless Health Insurance & TPA Coordination",
    desc: "Full cashless hospitalization desk supporting all major private and corporate health insurance providers with transparent cost guidance.",
  },
];

const reviews = [
  {
    author: "Naveen Kumar R.",
    locality: "Hebbal Kempapura",
    rating: 5,
    text: "Dr. Syed Parveez Ahmed performed knee replacement surgery on my mother at Atharva Hospital Hebbal. His muscle-sparing technique is unbelievable — she was walking with a walker the next morning! The hospital staff and doctor's personal follow-up were outstanding.",
    date: "September 2026",
  },
  {
    author: "Meenakshi Sundaram",
    locality: "Sahakarnagar",
    rating: 5,
    text: "I consulted Dr. Ahmed for severe shoulder pain that other clinics recommended surgery for. He thoroughly evaluated my MRI and treated it with hydrodilatation and targeted exercises. Pain was gone in 3 weeks without surgery. Highly recommended orthopedic doctor in Hebbal!",
    date: "August 2026",
  },
  {
    author: "Farhan Qureshi",
    locality: "Vinayakanagar, Hebbal",
    rating: 5,
    text: "Had a fracture in my wrist after a bike skid. Dr. Ahmed set it perfectly with a lightweight fiberglass cast. Zero complications and recovery was faster than expected. Highly recommended in North Bangalore.",
    date: "July 2026",
  },
  {
    author: "Kavitha Suresh",
    locality: "Kodigehalli, Hebbal",
    rating: 5,
    text: "My father had severe hip osteoarthritis and could barely walk. Dr. Ahmed explained the total hip replacement procedure in Kannada very patiently. Surgery went smoothly and he is back to taking daily walks.",
    date: "October 2026",
  },
];

const faqs = [
  {
    q: "What is the doctor's phone number for booking an appointment in Hebbal?",
    a: "You can book an appointment with Dr. Syed Parveez Ahmed at Atharva Multispeciality Hospital by calling +91 88672 70633 or via WhatsApp at +91 88672 70633. You can also use the online appointment booking button on this page.",
  },
  {
    q: "What are Dr. Syed Parveez Ahmed's consultation timings in Hebbal?",
    a: "Dr. Syed Parveez Ahmed conducts morning OPD from 10:00 AM to 1:00 PM and evening OPD from 6:00 PM to 8:00 PM, Monday through Saturday. Sunday visits are by emergency appointment.",
  },
  {
    q: "Where is Atharva Multispeciality Hospital located?",
    a: "The hospital is located at #12, 1st Main Road, Vinayakanagar, Hebbal, Bangalore — 560024. It is just 400 meters from the Hebbal Flyover junction on Bellary Road.",
  },
  {
    q: "Does Atharva Hospital provide cashless health insurance?",
    a: "Yes. Atharva Multispeciality Hospital has an in-house Cashless TPA Helpdesk covering all major public, private, and corporate health insurance networks for joint replacements and trauma surgeries.",
  },
  {
    q: "Is emergency trauma and fracture care available round the clock?",
    a: "Yes. The hospital maintains a 24/7 Trauma and Emergency Department with digital X-ray, ICU support, and emergency orthopedic surgical capability.",
  },
  {
    q: "Is parking available at the hospital?",
    a: "Yes. Atharva Hospital provides multi-level basement parking with elevator and wheelchair ramp access directly to the OPD consultation rooms.",
  },
];

export default function HebbalPage() {
  const canonicalUrl = "https://www.jointxperts.in/hebbal";

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
            "name": "Hebbal Orthopedic Hospital",
            "item": canonicalUrl,
          },
        ],
      },
      {
        "@type": "MedicalClinic",
        "@id": `${canonicalUrl}#clinic`,
        "name": "Atharva Multispeciality Hospital - JointXperts Hebbal",
        "description":
          "Orthopedic & Joint Replacement Surgeon Dr. Syed Parveez Ahmed's primary surgical and consultation base in Hebbal, Bangalore North. Total knee and hip replacement, arthroscopy, fracture care & trauma.",
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
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "10:00",
            "closes": "20:00",
          },
        ],
        "areaServed": [
          { "@type": "Place", "name": "Hebbal" },
          { "@type": "Place", "name": "Kempapura" },
          { "@type": "Place", "name": "Sahakarnagar" },
          { "@type": "Place", "name": "Nagavara" },
          { "@type": "Place", "name": "Kodigehalli" },
          { "@type": "Place", "name": "Ganga Nagar" },
          { "@type": "Place", "name": "Judicial Layout" },
          { "@type": "Place", "name": "Yelahanka" },
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
              Bangalore North • Hebbal
            </span>
          </div>

          {/* Hero Section */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#f0faf5] via-[#f8fafc] to-transparent rounded-full -mr-20 -mt-20 pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0faf5] text-[#2e8b57] text-xs font-bold uppercase tracking-widest mb-4">
                  <Hospital className="w-4 h-4" />
                  Primary Surgical Hub — Atharva Multispeciality Hospital
                </div>

                <h1 className="text-3xl lg:text-5xl font-extrabold text-[#0f2d5e] leading-tight mb-4">
                  Orthopedic Doctor in Hebbal, Bangalore North | Dr. Syed Parveez Ahmed
                </h1>

                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                  Consult orthopedic and joint replacement surgeon <strong>Dr. Syed Parveez Ahmed</strong> [MBBS, MS (Ortho), FRGUHS] at Atharva Multispeciality Hospital, Hebbal. Featuring modular laminar airflow operation theatres, digital X-rays, 24/7 trauma emergency care, and cashless insurance support for Hebbal, Sahakarnagar, Kempapura, and surrounding North Bangalore neighborhoods.
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
                        href={`https://wa.me/${clinicDetails.cleanPhone}?text=${encodeURIComponent("Hello Dr. Syed Parveez Ahmed, I would like to book an orthopedic appointment at Atharva Hospital Hebbal.")}`}
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
                    locationName="Atharva Hospital (Hebbal)" 
                    label="Book Appointment at Hebbal"
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
                      alt="Dr. Syed Parveez Ahmed Orthopedic Surgeon Hebbal"
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
                  Call or WhatsApp to schedule consultations at Atharva Hospital Hebbal. Morning & evening slots available.
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
                href={`https://wa.me/${clinicDetails.cleanPhone}?text=${encodeURIComponent("Hi Dr. Syed Parveez Ahmed, I want to book an orthopedic appointment at Hebbal clinic.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Details Grid: Left Content (Treatments, Facilities) & Right Logistics (Timings, Address, Map) */}
          <div id="location-details" className="grid lg:grid-cols-12 gap-8 mb-14">
            {/* Left 7 Columns */}
            <div className="lg:col-span-7 space-y-8">
              {/* Treatments at Hebbal */}
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
                      Orthopedic Treatments at Atharva Hospital Hebbal
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  As Dr. Syed Parveez Ahmed's primary orthopedic surgical anchor in Bangalore North, Atharva Multispeciality Hospital provides comprehensive surgical and non-surgical procedures with dedicated in-house joint rehabilitation.
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

              {/* Facility Amenities */}
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
                      Atharva Hospital Surgical Infrastructure
                    </h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f0faf5] border border-[#2e8b57]/20">
                    <Check className="w-5 h-5 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0f2d5e]">
                        Modular Laminar Airflow Operating Theatres
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        HEPA-filtered ultra-clean positive pressure surgical suites minimizing surgical site infection risk during total joint replacements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f8fafc] border border-gray-100">
                    <Check className="w-5 h-5 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0f2d5e]">
                        24/7 Trauma, Accident & Fracture Emergency
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        Round-the-clock emergency medical team, on-call orthopedic trauma surgeons, digital radiography, and high-dependency ICU.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f8fafc] border border-gray-100">
                    <Check className="w-5 h-5 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0f2d5e]">
                        Full Cashless Insurance & TPA Support
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        Dedicated insurance coordinator desk handling pre-authorizations and hassle-free claim settlements with major insurers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f8fafc] border border-gray-100">
                    <Check className="w-5 h-5 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0f2d5e]">
                        Inpatient Physiotherapy & Rehabilitation Center
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        Immediate bedside rehabilitation following knee and hip surgeries ensuring safe mobilization prior to hospital discharge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Timings, Address, Map, QR Code */}
            <div className="lg:col-span-5 space-y-8">
              {/* Timings & Address Card */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-[#0f2d5e] mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#2e8b57]" />
                  Hebbal OPD Timings
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
                    title={`Map of ${clinicDetails.clinicName} Hebbal`}
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
                      src="/qrcode/atharva.jpeg?v=2"
                      alt="Scan Map QR Code Hebbal Clinic"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#2e8b57]">
                      Scan QR Code for GPS Directions
                    </div>
                    <div className="text-gray-500 text-[11px] mt-0.5 leading-snug">
                      Point your phone camera to open instant Google Maps navigation to Atharva Hospital Hebbal.
                    </div>
                  </div>
                </div>
              </div>

              {/* Transit & Parking Details */}
              <div className="bg-[#f0faf5] rounded-3xl p-6 border border-[#2e8b57]/20 space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-[#0f2d5e] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#2e8b57]" />
                    Basement Parking & Ramps
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Dedicated multi-level hospital basement parking with security valet assistance, smooth wheelchair ramps, and stretcher elevator access to OPD floors.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#0f2d5e] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#2e8b57]" />
                    BMTC & Road Transit
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Situated 400m from Hebbal Flyover on Bellary Road. Airport feeder buses (KIA-9, KIA-14) and Hebbal Railway Station (800m) are within quick reach.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#0f2d5e] uppercase tracking-wider mb-2">
                    Nearby Localities Served
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Hebbal",
                      "Kempapura",
                      "Sahakarnagar",
                      "Nagavara",
                      "Ganga Nagar",
                      "Kodigehalli",
                      "Judicial Layout",
                      "Yelahanka",
                      "Byatarayanapura",
                      "Bellary Road",
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
                  What Patients in Hebbal Say
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
                Frequently Asked Questions — Hebbal Clinic
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Key information on scheduling appointments, consultations, and surgical procedures at Atharva Hospital Hebbal.
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
                Orthopedic Surgeon in Hebbal
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Book Your Consultation with Dr. Syed Parveez Ahmed
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Consult for knee arthritis, hip pain, sports injuries, fracture management, and spine discomfort at Atharva Hospital, Vinayakanagar, Hebbal.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-emerald-200">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                  <Clock className="w-3.5 h-3.5" />
                  Mon–Sat: 10 AM–1 PM & 6 PM–8 PM
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                  <Phone className="w-3.5 h-3.5" />
                  Doctor's Booking Number: {clinicDetails.phone}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <LocationBookingCTA 
                locationName="Atharva Hospital (Hebbal)" 
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
                href={`https://wa.me/${clinicDetails.cleanPhone}?text=${encodeURIComponent("Hello Dr. Syed Parveez Ahmed, I want to book an orthopedic appointment at Atharva Hospital Hebbal.")}`}
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

