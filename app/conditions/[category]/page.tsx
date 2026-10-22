import { notFound } from "next/navigation";
import { conditionCategories } from "@/data/conditions";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Activity, CheckCircle2, ShieldCheck, Stethoscope } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = conditionCategories.find((c) => c.slug === categorySlug);
  if (!category) return { title: "Category Not Found | JointXperts" };
  
  const canonicalUrl = `https://www.jointxperts.in/conditions/${category.slug}`;

  const pageTitle = category.seoTitle || `${category.title} Conditions & Orthopedic Care in Bangalore & Bengaluru | JointXperts`;
  const pageDesc = `${category.description} Consult Dr. Syed Parveez Ahmed across Bangalore North & Central Bengaluru clinics.`;

  return {
    title: pageTitle,
    description: pageDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: canonicalUrl,
      siteName: "JointXperts",
      images: [
        {
          url: "/photo1.webp",
          width: 1200,
          height: 630,
          alt: category.seoH1 || category.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
      images: ["/photo1.webp"],
    },
  };
}

export function generateStaticParams() {
  return conditionCategories.map((c) => ({
    category: c.slug,
  }));
}

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;
  const category = conditionCategories.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const canonicalUrl = `https://www.jointxperts.in/conditions/${category.slug}`;

  // Structured Data
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
            "name": "Conditions",
            "item": "https://www.jointxperts.in/services",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": category.title,
            "item": canonicalUrl,
          },
        ],
      },
      {
        "@type": "MedicalWebPage",
        "name": category.seoH1 || category.title,
        "description": category.description,
        "url": canonicalUrl,
        "specialty": "Orthopedic Surgery",
        "author": {
          "@type": "Physician",
          "name": "Dr. Syed Parveez Ahmed",
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
          {/* Breadcrumb / Back Link */}
          <div className="mb-6">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-[#2e8b57] hover:text-[#1f6b3d] text-sm font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back Home
            </Link>
          </div>

          {/* Header Section */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#2e8b57]" />
              <span className="text-[#2e8b57] font-semibold text-sm uppercase tracking-widest">Orthopedic Specialty Hub</span>
              <div className="h-px w-8 bg-[#2e8b57]" />
            </div>

            {/* Keyword-Rich Location H1 */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0f2d5e] mb-4 tracking-tight leading-tight max-w-4xl">
              {category.seoH1 || category.title}
            </h1>
            
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              {category.description}
            </p>
          </div>

          {/* Detailed Clinical Hub Guide (400 - 600 words) */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm mb-14">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <Stethoscope className="w-6 h-6 text-[#2e8b57]" />
              <h2 className="text-xl md:text-2xl font-bold text-[#0f2d5e]">
                Clinical Overview & Treatment Approach by Dr. Syed Parveez Ahmed
              </h2>
            </div>

            {/* Hub Intro */}
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8 font-normal">
              {category.hubIntro}
            </p>

            {/* Deep-dive sections */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {category.clinicalDetails.map((section, idx) => (
                <div key={idx} className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100/80">
                  <h3 className="text-lg font-bold text-[#0f2d5e] mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#2e8b57]/10 text-[#2e8b57] flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </span>
                    {section.heading}
                  </h3>
                  <div className="space-y-3">
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-gray-600 text-sm leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Common Treatment Protocols */}
            {category.commonTreatments && category.commonTreatments.length > 0 && (
              <div className="pt-6 border-t border-gray-100">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Available Treatments & Advanced Procedures at JointXperts
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {category.commonTreatments.map((treatment, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#f0faf5] text-[#1f6b3d] border border-[#2e8b57]/20"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2e8b57]" />
                      {treatment}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Conditions Grid Section Header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#0f2d5e]">
                Explore Specific Conditions & Diagnoses
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Select a condition below to view symptoms, non-surgical options, and recovery pathways.
              </p>
            </div>
          </div>

          {/* Conditions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.conditions.map((condition) => (
              <Link 
                key={condition.id}
                href={`/conditions/${category.slug}/${condition.slug}`}
                className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#0f2d5e]/5 transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full h-44 mb-5 rounded-2xl overflow-hidden bg-gray-100">
                  {condition.image ? (
                    <Image src={condition.image} alt={condition.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#f0faf5] text-[#2e8b57]">
                      <Activity className="w-8 h-8" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-lg font-bold text-[#0f2d5e] mb-2 group-hover:text-[#2e8b57] transition-colors">
                  {condition.title}
                </h3>
                
                <p className="text-gray-500 text-sm mb-6 flex-1 line-clamp-3">
                  {condition.shortDescription}
                </p>
                
                <div className="flex items-center text-[#2e8b57] font-semibold text-sm group-hover:gap-2 transition-all mt-auto pt-4 border-t border-gray-50">
                  View Treatments & Care
                  <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          {/* Consultation CTA Banner */}
          <div className="mt-16 bg-gradient-to-r from-[#0f2d5e] to-[#1a4a8a] rounded-3xl p-8 lg:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-4 h-4" />
                Trusted Specialist Care
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Consult Dr. Syed Parveez Ahmed in Bangalore
              </h3>
              <p className="text-white/80 text-sm md:text-base mt-2 max-w-xl">
                Available at Hebbal, New BEL Road, Seshadripuram, Nagavara, and RT Nagar clinics. Minimal wait times and comprehensive diagnostic evaluations.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#2e8b57] text-white font-bold text-sm hover:bg-[#257247] transition-all whitespace-nowrap shadow-lg shadow-black/20 hover:scale-105"
            >
              Book Consultation Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
