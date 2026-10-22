import { notFound } from "next/navigation";
import { locationsData, getLocationBySlug } from "@/data/locations";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, Clock, Phone, Navigation, Car, ShieldCheck, CheckCircle2, 
  Star, ArrowLeft, Hospital, Sparkles, Building2, Compass
} from "lucide-react";
import type { Metadata } from "next";
import LocationBookingCTA from "./LocationBookingCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return { title: "Location Not Found | JointXperts" };
  }

  const canonicalUrl = `https://www.jointxperts.in/locations/${location.slug}`;

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: canonicalUrl,
      siteName: "JointXperts",
      images: [
        {
          url: "/photo1.webp",
          width: 1200,
          height: 630,
          alt: `${location.seoH1}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
      images: ["/photo1.webp"],
    },
  };
}

export function generateStaticParams() {
  return locationsData.map((loc) => ({
    slug: loc.slug,
  }));
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const canonicalUrl = `https://www.jointxperts.in/locations/${location.slug}`;

  // Structured Data Schema for LocalBusiness / MedicalClinic
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
            "name": location.area,
            "item": canonicalUrl,
          },
        ],
      },
      {
        "@type": "MedicalClinic",
        "@id": `${canonicalUrl}#clinic`,
        "name": `${location.name} - JointXperts Clinic`,
        "description": location.overview,
        "url": canonicalUrl,
        "telephone": location.phone,
        "medicalSpecialty": "Orthopedic Surgery",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": `${location.address.line1}, ${location.address.line2}`,
          "addressLocality": location.address.city,
          "addressRegion": location.address.state,
          "postalCode": location.address.postalCode,
          "addressCountry": "IN",
        },
        "areaServed": location.nearbyAreasServed.map((area) => ({
          "@type": "Place",
          "name": area,
        })),
        "physician": {
          "@type": "Physician",
          "name": "Dr. Syed Parveez Ahmed",
          "jobTitle": "Orthopedic & Joint Replacement Surgeon",
          "url": "https://www.jointxperts.in/about",
        },
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
          {/* Breadcrumb / Back Navigation */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/#locations"
              className="inline-flex items-center gap-2 text-[#2e8b57] hover:text-[#1f6b3d] text-sm font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Clinics & Locations
            </Link>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0f2d5e] border border-blue-100">
              <Compass className="w-3.5 h-3.5 text-[#2e8b57]" />
              {location.zone}
            </span>
          </div>

          {/* Hero Banner Card */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#f0faf5] via-[#f8fafc] to-transparent rounded-full -mr-20 -mt-20 pointer-events-none" />

            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0faf5] text-[#2e8b57] text-xs font-bold uppercase tracking-widest mb-4">
                <Hospital className="w-4 h-4" />
                {location.name}
              </div>

              {/* Exact SEO H1 */}
              <h1 className="text-3xl lg:text-5xl font-extrabold text-[#0f2d5e] leading-tight mb-4">
                {location.seoH1}
              </h1>

              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                {location.overview}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <LocationBookingCTA locationName={`${location.name} (${location.area})`} />
                <a
                  href={`tel:${location.phone.replace(/[^0-9+]/g, "")}`}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-gray-200 bg-white text-[#0f2d5e] font-semibold text-sm hover:border-[#2e8b57] hover:text-[#2e8b57] transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#2e8b57]" />
                  Call Clinic: {location.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Two-Column Layout: Details on Left, Map & Logistics on Right */}
          <div className="grid lg:grid-cols-12 gap-8 mb-14">
            {/* Left 7 Columns: Timings, Address, Treatments, Facilities */}
            <div className="lg:col-span-7 space-y-8">
              {/* Address & Timings Box */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-[#0f2d5e] mb-6 flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#2e8b57]" />
                  Clinic Timings & Consultation Hours
                </h2>

                <div className="space-y-3 mb-6">
                  {location.timings.map((time, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-[#f8fafc] border border-gray-100 text-sm font-medium text-gray-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2e8b57] flex-shrink-0" />
                      <span>{time}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-bold text-[#0f2d5e] uppercase tracking-wider mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#2e8b57]" />
                    Exact Address & Landmark
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>{location.name}</strong>
                    <br />
                    {location.address.line1}, {location.address.line2}
                    <br />
                    {location.address.city}, {location.address.state} — {location.address.postalCode}
                  </p>
                  <p className="text-xs text-gray-500 mt-2 bg-blue-50/60 p-2.5 rounded-lg border border-blue-100/50">
                    <strong>Landmark:</strong> {location.address.landmark}
                  </p>
                </div>
              </div>

              {/* Treatments Offered at This Branch */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-[#0f2d5e] mb-2 flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-[#2e8b57]" />
                  Treatments & Procedures at this Location
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Comprehensive orthopedic surgical and non-surgical treatments provided by Dr. Syed Parveez Ahmed at {location.area}.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {location.treatmentsOffered.map((treatment, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#f0faf5]/70 border border-[#2e8b57]/20 flex items-start gap-2.5 text-xs md:text-sm font-semibold text-[#0f2d5e]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                      <span>{treatment}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Facility Highlights */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-[#0f2d5e] mb-4 flex items-center gap-2.5">
                  <Building2 className="w-5 h-5 text-[#2e8b57]" />
                  Clinic & Hospital Amenities
                </h2>

                <ul className="space-y-3">
                  {location.facilityHighlights.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0f2d5e] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right 5 Columns: Map Embed, Directions, Parking, Transit */}
            <div className="lg:col-span-5 space-y-8">
              {/* Interactive / Embed Map Card */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm overflow-hidden">
                <h2 className="text-lg font-bold text-[#0f2d5e] mb-3 flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-[#2e8b57]" />
                  Location Map & Directions
                </h2>

                <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-4 border border-gray-100 bg-gray-100">
                  <iframe
                    src={location.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${location.name}`}
                  />
                </div>

                <a
                  href={location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#0f2d5e] text-white text-sm font-semibold hover:bg-[#1a4a8a] transition-all shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-emerald-400" />
                  Open in Google Maps for Navigation
                </a>
              </div>

              {/* Parking & Accessibility */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-base font-bold text-[#0f2d5e] mb-3 flex items-center gap-2">
                  <Car className="w-5 h-5 text-[#2e8b57]" />
                  Parking & Accessibility
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {location.parkingInfo}
                </p>
              </div>

              {/* Public Transit & Metro */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-base font-bold text-[#0f2d5e] mb-3 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#2e8b57]" />
                  Metro & Public Transit Access
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {location.transitAndMetro}
                </p>
              </div>

              {/* Nearby Areas Served Tag Cloud */}
              <div className="bg-[#f0faf5] rounded-3xl p-6 border border-[#2e8b57]/20">
                <h3 className="text-sm font-bold text-[#0f2d5e] uppercase tracking-wider mb-3">
                  Nearby Localities Served Around {location.area}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {location.nearbyAreasServed.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white text-gray-700 border border-gray-200/80 shadow-2xs"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Local Patient Reviews Section */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm mb-14">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold text-[#2e8b57] uppercase tracking-widest">
                  Verified Local Feedback
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f2d5e] mt-1">
                  What Patients in {location.area} Say
                </h2>
              </div>
              <div className="flex items-center gap-2 bg-[#f0faf5] px-4 py-2 rounded-2xl border border-[#2e8b57]/30">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#0f2d5e]">5.0 Rating</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {location.localReviews.map((rev, idx) => (
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
                    <p className="text-gray-600 text-sm leading-relaxed italic mb-4">
                      "{rev.text}"
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-[#0f2d5e] block">{rev.author}</span>
                      <span className="text-gray-400">{rev.locality}</span>
                    </div>
                    <span className="text-gray-400 font-mono text-[11px]">{rev.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Booking CTA */}
          <div className="bg-gradient-to-r from-[#0f2d5e] to-[#1a4a8a] rounded-3xl p-8 lg:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                Trusted Orthopedic Surgeon
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Book Consultation with Dr. Syed Parveez Ahmed
              </h3>
              <p className="text-white/80 text-sm mt-1 max-w-xl">
                Serving {location.area} and surrounding North & Central Bengaluru neighborhoods. Minimally invasive care, rapid recovery, and honest guidance.
              </p>
            </div>
            <LocationBookingCTA locationName={`${location.name} (${location.area})`} />
          </div>
        </div>
      </div>
    </>
  );
}
