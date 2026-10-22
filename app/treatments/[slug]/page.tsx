import { notFound } from "next/navigation";
import { treatments, getTreatmentBySlugOrId } from "@/data/treatments";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Clock, MapPin, Award, Shield, Phone, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import TreatmentBookingCTA from "./TreatmentBookingCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlugOrId(slug);

  if (!treatment) {
    return { title: "Treatment Not Found | JointXperts" };
  }

  const canonicalUrl = `https://www.jointxperts.in/treatments/${treatment.slug}`;

  return {
    title: treatment.metaTitle,
    description: treatment.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: treatment.metaTitle,
      description: treatment.metaDescription,
      url: canonicalUrl,
      siteName: "JointXperts",
      images: [
        {
          url: treatment.image,
          width: 1200,
          height: 630,
          alt: treatment.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: treatment.metaTitle,
      description: treatment.metaDescription,
      images: [treatment.image],
    },
  };
}

export function generateStaticParams() {
  const params: { slug: string }[] = [];
  treatments.forEach((t) => {
    params.push({ slug: t.slug });
    t.aliases.forEach((alias) => {
      if (alias !== t.slug) {
        params.push({ slug: alias });
      }
    });
  });
  return params;
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatmentBySlugOrId(slug);

  if (!treatment) {
    notFound();
  }

  const canonicalUrl = `https://www.jointxperts.in/treatments/${treatment.slug}`;

  // Structured Data Schema for MedicalProcedure and FAQ
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
            "name": "Treatments",
            "item": "https://www.jointxperts.in/treatments",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": treatment.title,
            "item": canonicalUrl,
          },
        ],
      },
      {
        "@type": "MedicalProcedure",
        "name": treatment.title,
        "description": treatment.fullDescription,
        "procedureType": treatment.tag === "Surgical" ? "SurgicalProcedure" : "NoninvasiveProcedure",
        "bodyLocation": "Musculoskeletal System",
        "followup": treatment.recoveryTime,
        "performer": {
          "@type": "Physician",
          "name": "Dr. Syed Parveez Ahmed",
          "url": "https://www.jointxperts.in/about",
        },
      },
      ...(treatment.faqs && treatment.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "mainEntity": treatment.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#f8fafc] pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
              <li>
                <Link href="/" className="hover:text-[#2e8b57] transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-[#2e8b57] transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#0f2d5e] font-semibold">{treatment.title}</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 mb-12">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#2e8b57] text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-100">
                  <Sparkles className="w-3.5 h-3.5" />
                  {treatment.tag} Procedure
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2d5e] tracking-tight leading-tight mb-4">
                  {treatment.title}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {treatment.shortDescription}
                </p>

                {/* Key Metrics Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  <div className="bg-[#f8fafc] p-3.5 rounded-2xl border border-gray-100">
                    <span className="text-xs text-gray-400 block font-medium">Recovery Time</span>
                    <span className="text-sm font-bold text-[#0f2d5e] mt-0.5 block">{treatment.recoveryTime}</span>
                  </div>
                  <div className="bg-[#f8fafc] p-3.5 rounded-2xl border border-gray-100">
                    <span className="text-xs text-gray-400 block font-medium">Surgeon</span>
                    <span className="text-sm font-bold text-[#0f2d5e] mt-0.5 block">Dr. Syed Parveez Ahmed</span>
                  </div>
                  <div className="bg-[#f8fafc] p-3.5 rounded-2xl border border-gray-100 col-span-2 sm:col-span-1">
                    <span className="text-xs text-gray-400 block font-medium">Success Rate</span>
                    <span className="text-sm font-bold text-[#2e8b57] mt-0.5 block">98% Proven Outcome</span>
                  </div>
                </div>

                {/* Booking Button Trigger */}
                <div className="flex flex-wrap gap-4">
                  <TreatmentBookingCTA treatmentTitle={treatment.title} />
                  <a
                    href="tel:+918867270633"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#2e8b57]" />
                    Call +91 88672 70633
                  </a>
                </div>
              </div>

              {/* Cover Image */}
              <div className="lg:col-span-5">
                <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2d5e]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">JointXperts Orthopedic Excellence</span>
                    <p className="text-sm font-medium opacity-90 mt-0.5">Bangalore North & Central Clinics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            {/* Left 8 columns: Full Description, Symptoms, Procedures */}
            <div className="lg:col-span-8 space-y-8">
              {/* Comprehensive Description */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#0f2d5e] mb-4">
                  Overview of Treatment
                </h2>
                <p className="text-gray-600 leading-relaxed text-base">
                  {treatment.fullDescription}
                </p>
              </div>

              {/* Symptoms Treated */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#0f2d5e] mb-2">
                  Common Symptoms Treated
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  If you are experiencing any of the following symptoms, a clinical evaluation is recommended:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {treatment.symptoms.map((symptom, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-[#f8fafc] border border-gray-100"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#2e8b57] shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm font-medium">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Procedures & Techniques */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#0f2d5e] mb-2">
                  Procedures & Clinical Techniques
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  State-of-the-art diagnostic and operative methods employed at JointXperts:
                </p>
                <div className="space-y-3">
                  {treatment.procedures.map((proc, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-50/40 border border-emerald-100/60"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#2e8b57] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-gray-800 text-sm font-medium">{proc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Non-Surgical & Conservative Options */}
              <div className="bg-gradient-to-br from-[#f0faf5] to-white rounded-3xl p-8 shadow-sm border border-emerald-100">
                <h3 className="text-xl font-bold text-[#0f2d5e] mb-3">
                  Conservative & Non-Surgical Philosophy
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {treatment.nonSurgical}
                </p>
              </div>

              {/* FAQs */}
              {treatment.faqs && treatment.faqs.length > 0 && (
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold text-[#0f2d5e] mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {treatment.faqs.map((faq, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-[#f8fafc] border border-gray-100">
                        <h4 className="text-base font-bold text-[#0f2d5e] mb-2">{faq.question}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right 4 columns: Doctor Bio, Hospital Locations */}
            <div className="lg:col-span-4 space-y-8">
              {/* Doctor Card */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-[#2e8b57]/20">
                  <Image
                    src="/photo1.webp"
                    alt="Dr. Syed Parveez Ahmed"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0f2d5e]">Dr. Syed Parveez Ahmed</h3>
                <p className="text-xs text-[#2e8b57] font-semibold mt-1">MBBS, MS (Ortho), FRGUHS (Arthroplasty)</p>
                <p className="text-xs text-gray-500 mt-2">
                  Consultant Orthopedic & Joint Replacement Surgeon with 10+ years experience and 5,000+ satisfied patients.
                </p>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-around text-center">
                  <div>
                    <span className="text-lg font-bold text-[#0f2d5e]">10+</span>
                    <span className="text-[11px] text-gray-400 block">Years Exp.</span>
                  </div>
                  <div className="h-8 w-px bg-gray-100" />
                  <div>
                    <span className="text-lg font-bold text-[#0f2d5e]">5000+</span>
                    <span className="text-[11px] text-gray-400 block">Patients</span>
                  </div>
                  <div className="h-8 w-px bg-gray-100" />
                  <div>
                    <span className="text-lg font-bold text-[#2e8b57]">4.9★</span>
                    <span className="text-[11px] text-gray-400 block">Google Rating</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href="/about"
                    className="inline-block text-xs font-semibold text-[#2e8b57] hover:underline"
                  >
                    View Surgeon Profile →
                  </Link>
                </div>
              </div>

              {/* Consultation Locations */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-[#0f2d5e] mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#2e8b57]" />
                  Consultation Clinics
                </h3>
                <div className="space-y-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#f8fafc] border border-gray-100">
                    <span className="font-bold text-[#0f2d5e] block">Atharva Multispeciality Hospital</span>
                    <span className="text-gray-500 block mt-0.5">Hebbal, Bangalore North</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f8fafc] border border-gray-100">
                    <span className="font-bold text-[#0f2d5e] block">Apollo Clinic</span>
                    <span className="text-gray-500 block mt-0.5">New BEL Road, RMV 2nd Stage</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f8fafc] border border-gray-100">
                    <span className="font-bold text-[#0f2d5e] block">Trinity Central Hospital</span>
                    <span className="text-gray-500 block mt-0.5">Seshadripuram / Malleshwaram</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f8fafc] border border-gray-100">
                    <span className="font-bold text-[#0f2d5e] block">Darr-Ul-Shifa Clinic</span>
                    <span className="text-gray-500 block mt-0.5">Nagavara / Manyata</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
