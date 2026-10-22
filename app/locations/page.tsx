import { locationsData } from "@/data/locations";
import Link from "next/link";
import { MapPin, Clock, Phone, ArrowRight, Compass, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orthopedic Clinics & Consultation Locations in Bangalore | JointXperts",
  description:
    "Find Dr. Syed Parveez Ahmed's consultation locations across Bangalore North & Central Bengaluru: Hebbal, New BEL Road, Seshadripuram, Nagavara, and RT Nagar.",
  alternates: {
    canonical: "https://www.jointxperts.in/locations",
  },
  openGraph: {
    title: "Orthopedic Clinics & Consultation Locations in Bangalore | JointXperts",
    description:
      "Find Dr. Syed Parveez Ahmed's consultation locations across Bangalore North & Central Bengaluru: Hebbal, New BEL Road, Seshadripuram, Nagavara, and RT Nagar.",
    url: "https://www.jointxperts.in/locations",
    siteName: "JointXperts",
    images: [
      {
        url: "/photo1.webp",
        width: 1200,
        height: 630,
        alt: "JointXperts Orthopedic Clinic Locations Bangalore",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orthopedic Clinics & Consultation Locations in Bangalore | JointXperts",
    description:
      "Find Dr. Syed Parveez Ahmed's consultation locations across Bangalore North & Central Bengaluru: Hebbal, New BEL Road, Seshadripuram, Nagavara, and RT Nagar.",
    images: ["/photo1.webp"],
  },
};

export default function LocationsIndexPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#2e8b57]" />
            <span className="text-[#2e8b57] font-semibold text-sm uppercase tracking-widest">
              Consultation Network
            </span>
            <div className="h-px w-10 bg-[#2e8b57]" />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f2d5e] mb-4">
            Our Orthopedic Clinic <span className="text-[#2e8b57]">Locations</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Dr. Syed Parveez Ahmed consults at premier multi-speciality hospitals and clinic centers across <strong>Bangalore North</strong> and <strong>Central Bengaluru</strong>. Select a location below for exact timings, map directions, parking, and appointment bookings.
          </p>
        </div>

        {/* Location Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {locationsData.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#2e8b57]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0f2d5e] border border-blue-100">
                    {loc.zone}
                  </span>
                  <span className="text-xs font-semibold text-[#2e8b57] flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5" />
                    {loc.area}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#0f2d5e] mb-2 leading-tight">
                  {loc.name}
                </h2>

                <p className="text-gray-500 text-xs mb-5 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                  <span>
                    {loc.address.line1}, {loc.address.line2}, {loc.address.city} - {loc.address.postalCode}
                  </span>
                </p>

                <div className="space-y-2 mb-6 pt-4 border-t border-gray-100 text-xs text-gray-600">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                    <span>{loc.timings[0]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#2e8b57] flex-shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-50">
                <Link
                  href={`/locations/${loc.slug}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#f0faf5] text-[#1f6b3d] font-semibold text-sm hover:bg-[#2e8b57] hover:text-white transition-all duration-200"
                >
                  View Area Guide & Timings
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Local Areas Covered */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0faf5] text-[#2e8b57] text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            North & Central Bengaluru Accessibility
          </div>
          <h3 className="text-2xl font-bold text-[#0f2d5e] mb-3">
            Looking for an Orthopedic Doctor Near You?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed mb-6">
            With 5 strategically located clinic branches, patients in Hebbal, Kempapura, Sahakarnagar, Nagavara, Manyata Tech Park, Thanisandra, New BEL Road, RMV, Mathikere, Sadashivanagar, Seshadripuram, Malleshwaram, and RT Nagar can reach Dr. Syed Parveez Ahmed within 10 to 15 minutes.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0f2d5e] text-white font-semibold text-sm hover:bg-[#1a4a8a] transition-all shadow-md"
            >
              Contact Our Clinic Desk
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
