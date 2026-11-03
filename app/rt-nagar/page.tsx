import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, Clock, Phone, Navigation, Car, ShieldCheck, CheckCircle2, 
  Star, ArrowLeft, Hospital, Sparkles, Building2, Compass, MessageCircle,
  Calendar, Check, HelpCircle, UserCheck, Stethoscope, Award
} from "lucide-react";
import type { Metadata } from "next";
import LocationBookingCTA from "@/app/locations/[slug]/LocationBookingCTA";

export const metadata: Metadata = {
  title: "Best Orthopedic Doctor in RT Nagar & Sultanpalya | Dr. Syed Parveez Ahmed",
  description:
    "Consult senior orthopedic surgeon Dr. Syed Parveez Ahmed in RT Nagar / Sultanpalya. Call +91 88672 70633 for appointments. Knee & hip replacement, joint pain, fracture care.",
  alternates: {
    canonical: "https://www.jointxperts.in/rt-nagar",
  },
  openGraph: {
    title: "Best Orthopedic Doctor in RT Nagar & Sultanpalya | Dr. Syed Parveez Ahmed",
    description:
      "Consult top orthopedic surgeon Dr. Syed Parveez Ahmed at Shifa Hospital Sultanpalya, RT Nagar. Call +91 88672 70633 for booking. Mon, Wed, Fri 7:30 PM - 9:00 PM.",
    url: "https://www.jointxperts.in/rt-nagar",
    siteName: "JointXperts",
    images: [
      {
        url: "/photo1.webp",
        width: 1200,
        height: 630,
        alt: "Best Orthopedic Doctor in RT Nagar Bangalore - Dr. Syed Parveez Ahmed",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Orthopedic Doctor in RT Nagar & Sultanpalya | Dr. Syed Parveez Ahmed",
    description:
      "Consult senior orthopedic specialist Dr. Syed Parveez Ahmed in RT Nagar / Sultanpalya. Direct booking: +91 88672 70633. Knee, hip, fractures & arthritis.",
    images: ["/photo1.webp"],
  },
};

const clinicDetails = {
  doctorName: "Dr. Syed Parveez Ahmed",
  qualifications: "MBBS, MS (Orthopaedics), Fellow in Joint Replacement (FRGUHS)",
  speciality: "Senior Consultant Orthopedic & Joint Replacement Surgeon",
  clinicName: "Shifa Hospital & Poly Clinic",
  area: "RT Nagar / Sultanpalya",
  zone: "Bangalore North",
  phone: "+91 88672 70633",
  cleanPhone: "918867270633",
  address: {
    line1: "Sultanpalya Main Road, RT Nagar Post",
    line2: "Opposite Darga Bus Stop",
    city: "Bangalore",
    state: "Karnataka",
    postalCode: "560032",
    landmark: "Near RT Nagar BDA Complex & Sultanpalya Main Market",
  },
  timings: [
    "Monday, Wednesday, Friday: 7:30 PM – 9:00 PM (Evening Clinic)",
    "Tuesday, Thursday, Saturday & Morning OPD: Available at Atharva Hospital, Hebbal (10 mins away)",
    "Emergency Trauma / Fractures: 24/7 on call support",
  ],
  googleMapsUrl: "https://maps.app.goo.gl/5TfJEiDDZayVwHze9",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.351234567890!2d77.6000!3d13.0185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16e5b6b6b6b7%3A0x6b490d16568dbfc4!2sR.T.%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

const treatments = [
  {
    title: "Knee Osteoarthritis & Lubrication Injections",
    desc: "Conservative staging for knee arthritis, targeted corticosteroid injections, biological PRP, and viscosupplementation (hyaluronic acid) to reduce pain and preserve the joint.",
  },
  {
    title: "Subvastus Total Knee Replacement (TKA)",
    desc: "Muscle-sparing surgical consultation for advanced arthritis. The quadriceps tendon is preserved, allowing patients to walk within hours after surgery with minimal postoperative pain.",
  },
  {
    title: "Minimally Invasive Total Hip Replacement (THR)",
    desc: "Advanced arthroplasty for avascular necrosis (AVN) and severe hip degeneration, restoring painless joint movement and natural leg length.",
  },
  {
    title: "Acute Fracture Care, Plaster & Splinting",
    desc: "Rapid clinical fracture management for wrist, collarbone, ankle, foot, and hand fractures. Modern lightweight fiberglass casts and splint applications.",
  },
  {
    title: "Shoulder Pain, Rotator Cuff & Frozen Shoulder",
    desc: "Non-surgical pain relief, hydrodilatation procedures, and arthroscopic shoulder reconstructions for rotator cuff tears and impingement syndrome.",
  },
  {
    title: "Spine Care, Sciatica & Lumbar Spondylosis",
    desc: "Comprehensive evaluation of lower back pain, disc prolapse, neck stiffness, and nerve compression with tailored ergonomic and physiotherapy programs.",
  },
  {
    title: "Sports Injury & Ligament Rehabilitation",
    desc: "Specialized assessment for youth and adult athletes suffering ACL/PCL tears, meniscus injuries, twisted ankles, and recurrent sports sprains.",
  },
  {
    title: "Second Opinions & Pre-Surgery Counseling",
    desc: "Honest, evidence-based orthopedic second opinions before considering major joint surgeries or spine operations.",
  },
];

const reviews = [
  {
    author: "Mohammad Irfan",
    locality: "Sultanpalya, RT Nagar",
    rating: 5,
    text: "Dr. Syed Parveez Ahmed is a blessing for RT Nagar residents. Being able to consult such a senior joint replacement specialist in the evening right on Sultanpalya Main Road saved us so much travel time. He treated my father's knee swelling with great care.",
    date: "September 2026",
  },
  {
    author: "Ayesha Siddiqua",
    locality: "RT Nagar Post",
    rating: 5,
    text: "Very gentle and patient doctor. He explained my frozen shoulder condition clearly and gave an injection that immediately relieved the severe pain. Highly recommended in RT Nagar.",
    date: "August 2026",
  },
  {
    author: "Basavaraj Patil",
    locality: "Ganganagar / RT Nagar",
    rating: 5,
    text: "Consulted for wrist fracture after a household fall. Cast was applied neatly and healing was monitored carefully. Very honest doctor with reasonable consultation fees.",
    date: "June 2026",
  },
  {
    author: "Farzana Khan",
    locality: "Dinnur Main Road, RT Nagar",
    rating: 5,
    text: "My mother suffered from severe knee arthritis and couldn't walk up stairs. Dr. Ahmed evaluated her X-rays and recommended knee gel injections. She is walking without pain now. Thank you doctor!",
    date: "October 2026",
  },
];

const faqs = [
  {
    q: "What is the doctor's phone number for booking an appointment in RT Nagar?",
    a: "You can book an appointment with Dr. Syed Parveez Ahmed directly by calling +91 88672 70633, or via WhatsApp at +91 88672 70633. You can also use our instant online booking button on this page.",
  },
  {
    q: "What are the clinic timings of Dr. Syed Parveez Ahmed at RT Nagar?",
    a: "Dr. Syed Parveez Ahmed consults at Shifa Hospital & Poly Clinic on Sultanpalya Main Road in RT Nagar on Monday, Wednesday, and Friday evenings from 7:30 PM to 9:00 PM. For morning appointments or daytime emergency trauma care, consultations are available at his primary hospital, Atharva Multispeciality Hospital in Hebbal (10 minutes away).",
  },
  {
    q: "Where is the clinic located in RT Nagar?",
    a: "The clinic is situated at Shifa Hospital & Poly Clinic, Sultanpalya Main Road, RT Nagar Post, opposite the Darga Bus Stop, close to the RT Nagar BDA Complex and Sultanpalya Market.",
  },
  {
    q: "Is the RT Nagar clinic wheelchair accessible for elderly joint pain patients?",
    a: "Yes. Shifa Hospital & Poly Clinic features convenient street-level entrance access with no difficult stairs, making it easy for elderly patients with severe knee arthritis, walking sticks, or wheelchairs to enter.",
  },
  {
    q: "If I require joint replacement surgery, where is it performed?",
    a: "Dr. Syed Parveez Ahmed performs his surgical operations—including Subvastus Total Knee Replacement and Minimally Invasive Total Hip Replacement—at premier multi-speciality tertiary hospitals including Atharva Multispeciality Hospital (Hebbal) and Trinity Central Hospital (Seshadripuram), which feature ultra-clean laminar airflow modular operation theatres, 24/7 ICU support, and cashless health insurance desks.",
  },
  {
    q: "Can I get X-rays and plaster cast removal done at this clinic?",
    a: "Yes. Basic fracture casting, fiberglass cast application, splinting, suture removals, and joint injections are routinely performed during the evening clinic hours.",
  },
];

export default function RTNagarPage() {
  const canonicalUrl = "https://www.jointxperts.in/rt-nagar";

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
            "name": "RT Nagar Orthopedic Clinic",
            "item": canonicalUrl,
          },
        ],
      },
      {
        "@type": "MedicalClinic",
        "@id": `${canonicalUrl}#clinic`,
        "name": "Shifa Hospital & Poly Clinic - JointXperts RT Nagar",
        "description":
          "Senior Orthopedic & Joint Replacement Surgeon Dr. Syed Parveez Ahmed's consultation clinic in RT Nagar / Sultanpalya, Bangalore. Knee replacement, arthritis care, fracture casting & spine management.",
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
            "opens": "19:30",
            "closes": "21:00",
          },
        ],
        "areaServed": [
          { "@type": "Place", "name": "RT Nagar" },
          { "@type": "Place", "name": "Sultanpalya" },
          { "@type": "Place", "name": "Ganganagar" },
          { "@type": "Place", "name": "Dinnur" },
          { "@type": "Place", "name": "Matadahalli" },
          { "@type": "Place", "name": "Kaval Byrasandra" },
          { "@type": "Place", "name": "Manorayanapalya" },
          { "@type": "Place", "name": "Hebbal" },
          { "@type": "Place", "name": "Sanjaynagar" },
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
              Bangalore North • RT Nagar / Sultanpalya
            </span>
          </div>

          {/* Hero Section */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#f0faf5] via-[#f8fafc] to-transparent rounded-full -mr-20 -mt-20 pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0faf5] text-[#2e8b57] text-xs font-bold uppercase tracking-widest mb-4">
                  <Hospital className="w-4 h-4" />
                  Shifa Hospital & Poly Clinic — RT Nagar
                </div>

                <h1 className="text-3xl lg:text-5xl font-extrabold text-[#0f2d5e] leading-tight mb-4">
                  Best Orthopedic Doctor in RT Nagar & Sultanpalya | Dr. Syed Parveez Ahmed
                </h1>

                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                  Consult senior orthopedic and joint replacement surgeon <strong>Dr. Syed Parveez Ahmed</strong> [MBBS, MS (Ortho), FRGUHS] right here in RT Nagar. Evening consultations for knee osteoarthritis, hip pain, sports injuries, acute fractures, and spine care without traveling through heavy Bellary Road traffic.
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
                        href={`https://wa.me/${clinicDetails.cleanPhone}?text=${encodeURIComponent("Hello Dr. Syed Parveez Ahmed, I would like to book an orthopedic appointment at your RT Nagar / Sultanpalya clinic.")}`}
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
                    locationName="Shifa Hospital (RT Nagar / Sultanpalya)" 
                    label="Book Online Appointment at RT Nagar"
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
                      alt="Dr. Syed Parveez Ahmed Orthopedic Surgeon RT Nagar"
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
                  Call or WhatsApp to book your consultation at Shifa Hospital, Sultanpalya Main Road, RT Nagar.
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
                href={`https://wa.me/${clinicDetails.cleanPhone}?text=${encodeURIComponent("Hi Dr. Syed Parveez Ahmed, I want to book an orthopedic appointment at RT Nagar clinic.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Details Grid: Left Content (Treatments, Doctor Info) & Right Logistics (Timings, Address, Map) */}
          <div id="location-details" className="grid lg:grid-cols-12 gap-8 mb-14">
            {/* Left 7 Columns: Treatments, Doctor Highlights */}
            <div className="lg:col-span-7 space-y-8">
              {/* Treatments at RT Nagar */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#f0faf5] flex items-center justify-center text-[#2e8b57]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#2e8b57] uppercase tracking-wider">
                      Specialized Care
                    </span>
                    <h2 className="text-2xl font-bold text-[#0f2d5e]">
                      Orthopedic Treatments at RT Nagar Clinic
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Dr. Syed Parveez Ahmed provides comprehensive non-surgical and surgical orthopedic management. Patients in RT Nagar, Sultanpalya, Ganganagar, and surrounding North Bangalore localities receive tailored care for joint pain, acute fractures, and degenerative disorders.
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

              {/* Why Patients in RT Nagar Choose Dr. Ahmed */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0f2d5e]">
                    <Award className="w-5 h-5 text-[#2e8b57]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#2e8b57] uppercase tracking-wider">
                      Why Choose Us
                    </span>
                    <h2 className="text-2xl font-bold text-[#0f2d5e]">
                      Why Consult Dr. Syed Parveez Ahmed in RT Nagar?
                    </h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f0faf5] border border-[#2e8b57]/20">
                    <Check className="w-5 h-5 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0f2d5e]">
                        Convenient Evening Hours (7:30 PM – 9:00 PM)
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        No need to miss work, college, or school. Consult comfortably during evening hours right on Sultanpalya Main Road.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f8fafc] border border-gray-100">
                    <Check className="w-5 h-5 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0f2d5e]">
                        Avoid Heavy Bellary Road & Central City Traffic
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        Local RT Nagar, Sultanpalya, Dinnur, and Ganganagar residents avoid long commutes to faraway hospitals for regular checkups, cast care, and injection therapy.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f8fafc] border border-gray-100">
                    <Check className="w-5 h-5 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0f2d5e]">
                        Elderly-Friendly Ground-Floor Clinic Access
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        Direct street-level entrance with no stair climbing required, ensuring seniors with severe osteoarthritis or patients on crutches enter comfortably.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f8fafc] border border-gray-100">
                    <Check className="w-5 h-5 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0f2d5e]">
                        Conservative First Philosophy & Surgery Only When Needed
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        Honest clinical guidance prioritizing non-surgical joint preservation, physiotherapy, and medical management before recommending any surgery.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f8fafc] border border-gray-100">
                    <Check className="w-5 h-5 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0f2d5e]">
                        Hospital Admission Base & Cashless Insurance Desk
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        When surgery is necessary, seamless admission is coordinated at Atharva Hospital Hebbal or Trinity Central Hospital Seshadripuram with cashless TPA support for all health insurances.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Timings, Exact Address, Google Map, QR Code */}
            <div className="lg:col-span-5 space-y-8">
              {/* Timings & Address Card */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-[#0f2d5e] mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#2e8b57]" />
                  RT Nagar Clinic Consultation Hours
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
                    Clinic Address & Landmark
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
                    title={`Map of ${clinicDetails.clinicName} RT Nagar`}
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
                      src="/qrcode/ayesha poli clinic qr code.jpeg?v=2"
                      alt="Scan Map QR Code RT Nagar Clinic"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#2e8b57]">
                      Scan QR Code for GPS Directions
                    </div>
                    <div className="text-gray-500 text-[11px] mt-0.5 leading-snug">
                      Point your phone camera to open instant Google Maps directions to the Sultanpalya clinic.
                    </div>
                  </div>
                </div>
              </div>

              {/* Transit & Parking Details */}
              <div className="bg-[#f0faf5] rounded-3xl p-6 border border-[#2e8b57]/20 space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-[#0f2d5e] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#2e8b57]" />
                    Parking & Street Access
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Street-level parking bays available outside the polyclinic with easy patient drop-off directly at the entrance.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#0f2d5e] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#2e8b57]" />
                    BMTC Public Transit
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Opposite Darga Bus Stop on Sultanpalya Main Road. BMTC buses from Shivajinagar, Cantonment, and Hebbal (routes 111, 114, 280) stop within walking distance.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#0f2d5e] uppercase tracking-wider mb-2">
                    Localities Served Around RT Nagar
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "RT Nagar",
                      "Sultanpalya",
                      "Ganganagar",
                      "Dinnur",
                      "Matadahalli",
                      "Kaval Byrasandra",
                      "Manorayanapalya",
                      "Hebbal",
                      "Sanjaynagar",
                      "Kanakanagar",
                      "Rahmath Nagar",
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
                  What Patients in RT Nagar & Sultanpalya Say
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
                Frequently Asked Questions — RT Nagar Clinic
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Everything you need to know about consulting Dr. Syed Parveez Ahmed at Shifa Hospital in RT Nagar.
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
                Senior Orthopedic Surgeon in RT Nagar
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Book Your Consultation with Dr. Syed Parveez Ahmed
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Consult for joint pain, knee arthritis, shoulder stiffness, fracture care, and spine discomfort at Shifa Hospital, Sultanpalya Main Road, RT Nagar.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-emerald-200">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                  <Clock className="w-3.5 h-3.5" />
                  Mon, Wed, Fri: 7:30 PM – 9:00 PM
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                  <Phone className="w-3.5 h-3.5" />
                  Doctor's Booking Number: {clinicDetails.phone}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <LocationBookingCTA 
                locationName="Shifa Hospital (RT Nagar / Sultanpalya)" 
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
                href={`https://wa.me/${clinicDetails.cleanPhone}?text=${encodeURIComponent("Hello Dr. Syed Parveez Ahmed, I want to book an orthopedic appointment at RT Nagar clinic.")}`}
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

