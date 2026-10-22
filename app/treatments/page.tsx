import Link from "next/link";
import Image from "next/image";
import { treatments } from "@/data/treatments";
import { ArrowRight, CheckCircle2, Sparkles, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orthopedic Treatments & Joint Procedures in Bangalore & Bengaluru | JointXperts",
  description:
    "Explore specialized knee replacement, hip arthroplasty, spine surgery, and sports medicine treatments by Dr. Syed Parveez Ahmed across Bangalore North & Central Bengaluru.",
  alternates: {
    canonical: "https://www.jointxperts.in/treatments",
  },
  openGraph: {
    title: "Orthopedic Treatments & Joint Procedures in Bangalore & Bengaluru | JointXperts",
    description:
      "Explore specialized knee replacement, hip arthroplasty, spine surgery, and sports medicine treatments by Dr. Syed Parveez Ahmed across Bangalore North & Central Bengaluru.",
    url: "https://www.jointxperts.in/treatments",
    siteName: "JointXperts",
    images: [
      {
        url: "/photo1.webp",
        width: 1200,
        height: 630,
        alt: "JointXperts Orthopedic Treatments Bangalore & Bengaluru",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orthopedic Treatments & Joint Procedures in Bangalore & Bengaluru | JointXperts",
    description:
      "Explore specialized knee replacement, hip arthroplasty, spine surgery, and sports medicine treatments by Dr. Syed Parveez Ahmed across Bangalore North & Central Bengaluru.",
    images: ["/photo1.webp"],
  },
};

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#2e8b57] text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-100">
            <Sparkles className="w-3.5 h-3.5" />
            Specialized Procedures
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0f2d5e] tracking-tight mb-4">
            Advanced Orthopedic <span className="text-[#2e8b57]">Treatments</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Dedicated surgical and conservative procedures performed by Dr. Syed Parveez Ahmed across Bangalore North & Central clinics.
          </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((t) => (
            <Link
              key={t.slug}
              href={`/treatments/${t.slug}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#0f2d5e] uppercase tracking-wider shadow-sm">
                    {t.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#0f2d5e] group-hover:text-[#2e8b57] transition-colors mb-2">
                    {t.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {t.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Clock className="w-3.5 h-3.5 text-[#2e8b57]" />
                    <span>{t.recoveryTime.split("(")[0]}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#2e8b57] group-hover:translate-x-1 transition-transform">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
