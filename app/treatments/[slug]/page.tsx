import { notFound } from "next/navigation";
import { treatments, getTreatmentBySlugOrId } from "@/data/treatments";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, CheckCircle2, Clock, MapPin, Award, Shield, Phone, Sparkles, 
  HelpCircle, Building2, IndianRupee, ShieldCheck, Stethoscope, ChevronRight 
} from "lucide-react";
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

  const deep = treatment.deepDive;

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
                <Link href="/treatments" className="hover:text-[#2e8b57] transition-colors">
                  Treatments
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
                  {treatment.tag} Specialty Procedure
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
                    <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">JointXperts Orthopedic Center</span>
                    <p className="text-sm font-medium opacity-90 mt-0.5">Bangalore North & Central Bengaluru</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* If Deep Dive is present (Knee & Hip Replacement 1,500+ words dedicated authority layout) */}
          {deep ? (
            <div className="space-y-12 mb-14">
              {/* Section 1: Who Needs It & Candidate Self-Assessment */}
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0f2d5e] text-xs font-bold uppercase tracking-wider mb-4">
                  <Stethoscope className="w-4 h-4 text-[#2e8b57]" />
                  Clinical Indications
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f2d5e] mb-4">
                  Who Needs {treatment.title}?
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                  {deep.whoNeedsIt.overview}
                </p>

                <div className="grid lg:grid-cols-2 gap-8 pt-4 border-t border-gray-100">
                  <div>
                    <h3 className="text-lg font-bold text-[#0f2d5e] mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#2e8b57]" />
                      Primary Diagnoses & Medical Indications
                    </h3>
                    <ul className="space-y-3">
                      {deep.whoNeedsIt.indications.map((ind, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f8fafc] text-sm text-gray-700 border border-gray-100">
                          <span className="w-5 h-5 rounded-full bg-[#2e8b57]/10 text-[#2e8b57] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{ind}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#0f2d5e] mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#2e8b57]" />
                      Candidate Self-Assessment Checklist
                    </h3>
                    <div className="p-6 rounded-2xl bg-[#f0faf5] border border-[#2e8b57]/20 space-y-3">
                      <p className="text-xs text-[#1f6b3d] font-bold uppercase tracking-wider mb-2">
                        Are you experiencing 2 or more of the following?
                      </p>
                      {deep.whoNeedsIt.candidateChecklist.map((check, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-800 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#2e8b57] shrink-0 mt-0.5" />
                          <span>{check}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Surgical Technique & Muscle-Sparing Mastery */}
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#2e8b57] text-xs font-bold uppercase tracking-wider mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  Surgical Technique
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f2d5e] mb-4">
                  {deep.surgicalTechnique.approachName}
                </h2>

                <div className="space-y-4 mb-8 text-gray-600 text-base leading-relaxed">
                  {deep.surgicalTechnique.details.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                <div className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-base font-bold text-[#0f2d5e] mb-3">
                    Key Patient Advantages of Dr. Ahmed's Technique:
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {deep.surgicalTechnique.advantages.map((adv, idx) => (
                      <div key={idx} className="p-3 bg-white rounded-xl border border-gray-100 text-xs sm:text-sm font-semibold text-[#0f2d5e] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2e8b57] shrink-0" />
                        <span>{adv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 3: Recovery Timeline */}
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0f2d5e] text-xs font-bold uppercase tracking-wider mb-4">
                  <Clock className="w-4 h-4 text-[#2e8b57]" />
                  Rehabilitation Pathway
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f2d5e] mb-2">
                  Procedure & Recovery Timeline (Day 1 to Month 6)
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Under Dr. Syed Parveez Ahmed's rapid recovery protocol, patients experience steady, documented recovery milestones:
                </p>

                <div className="space-y-6">
                  {deep.recoveryTimeline.map((item, idx) => (
                    <div key={idx} className="relative pl-8 sm:pl-10 pb-6 border-l-2 border-[#2e8b57]/30 last:border-l-0 last:pb-0">
                      <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[#2e8b57] text-white flex items-center justify-center text-[10px] font-bold">
                        {idx + 1}
                      </div>
                      <h3 className="text-lg font-bold text-[#0f2d5e] mb-2">
                        {item.phase}
                      </h3>
                      <ul className="space-y-1.5">
                        {item.milestones.map((m, mIdx) => (
                          <li key={mIdx} className="text-gray-600 text-sm flex items-start gap-2">
                            <span className="text-[#2e8b57] font-bold">•</span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Cost Range in Bangalore & Insurance Coverage */}
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#2e8b57] text-xs font-bold uppercase tracking-wider mb-4">
                  <IndianRupee className="w-4 h-4" />
                  Transparent Pricing (2026)
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f2d5e] mb-3">
                  Cost Range of {treatment.title} in Bangalore & Bengaluru
                </h2>
                <p className="text-gray-600 text-base mb-6">
                  Typical package estimated price range: <strong>{deep.costAnalysis.priceRange}</strong>.
                </p>

                {/* Cost Comparison Table */}
                <div className="overflow-x-auto mb-8 border border-gray-100 rounded-2xl">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#f8fafc] text-[#0f2d5e] border-b border-gray-100">
                        <th className="p-4 font-bold">Procedure Type</th>
                        <th className="p-4 font-bold">Estimated Cost (Bangalore)</th>
                        <th className="p-4 font-bold">Hospital Stay</th>
                        <th className="p-4 font-bold">Clinical Suitability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {deep.costAnalysis.comparison.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                          <td className="p-4 font-semibold text-[#0f2d5e]">{row.procedureType}</td>
                          <td className="p-4 font-bold text-[#2e8b57] whitespace-nowrap">{row.costRange}</td>
                          <td className="p-4 text-gray-600">{row.stayDuration}</td>
                          <td className="p-4 text-gray-500 text-xs">{row.bestFor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                  <div>
                    <h3 className="text-sm font-bold text-[#0f2d5e] uppercase tracking-wider mb-3">
                      What is Included in the Surgical Package?
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                      {deep.costAnalysis.includedFactors.map((inc, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#2e8b57] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100/60">
                    <h3 className="text-sm font-bold text-[#0f2d5e] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-[#2e8b57]" />
                      Insurance, Mediclaim & Cashless TPA
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {deep.costAnalysis.insuranceAndTPA}
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5: Doctor's Arthroplasty Credentials */}
              <div className="bg-gradient-to-br from-[#0f2d5e] to-[#1a4a8a] rounded-3xl p-8 lg:p-10 text-white shadow-xl">
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-4 text-center">
                    <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white/20 mb-4 shadow-2xl">
                      <Image
                        src="/photo1.webp"
                        alt="Dr. Syed Parveez Ahmed"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Dr. Syed Parveez Ahmed</h3>
                    <p className="text-xs text-emerald-300 font-semibold mt-1">MBBS, MS (Ortho), FRGUHS (Arthroplasty)</p>
                  </div>

                  <div className="md:col-span-8 space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                      Surgeon Background & Specialization
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
                      Arthroplasty Fellowship Trained Specialist
                    </h2>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {deep.doctorCredentials.philosophy}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
                      <div>
                        <span className="text-2xl font-bold text-emerald-300 block">12+</span>
                        <span className="text-xs text-white/60">Years Exp.</span>
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-emerald-300 block">5000+</span>
                        <span className="text-xs text-white/60">Joint Surgeries</span>
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-emerald-300 block">98%</span>
                        <span className="text-xs text-white/60">Success Rate</span>
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-emerald-300 block">FRGUHS</span>
                        <span className="text-xs text-white/60">Fellowship</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6: Available Partner Clinics & Consultation Schedule */}
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0f2d5e] text-xs font-bold uppercase tracking-wider mb-4">
                  <Building2 className="w-4 h-4 text-[#2e8b57]" />
                  Consultation Network
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f2d5e] mb-3">
                  Where Does Dr. Ahmed Perform {treatment.title}?
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Surgeries and OPD consultations are conducted at premier partner hospitals across Bangalore North and Central Bengaluru:
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {deep.clinicsAvailable.map((c, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-[#f8fafc] border border-gray-100 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-bold text-[#2e8b57] uppercase tracking-wider block mb-1">
                          {c.area}
                        </span>
                        <h3 className="text-base font-bold text-[#0f2d5e] mb-2">{c.clinicName}</h3>
                        <p className="text-gray-500 text-xs mb-3">{c.highlights}</p>
                      </div>
                      <div className="pt-3 border-t border-gray-200/60 text-xs font-semibold text-[#0f2d5e]">
                        <Clock className="w-3.5 h-3.5 inline mr-1 text-[#2e8b57]" />
                        {c.schedule}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 7: In-Depth FAQs (10+ Questions) */}
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                  <HelpCircle className="w-6 h-6 text-[#2e8b57]" />
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f2d5e]">
                    Patient FAQs About {treatment.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {treatment.faqs.map((faq, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-[#f8fafc] border border-gray-100">
                      <h3 className="text-base font-bold text-[#0f2d5e] mb-2">{faq.question}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Standard Treatment Layout for other procedures */
            <div className="grid lg:grid-cols-12 gap-8 mb-12">
              {/* Left 8 columns: Full Description, Symptoms, Procedures */}
              <div className="lg:col-span-8 space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold text-[#0f2d5e] mb-4">
                    Overview of Treatment
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {treatment.fullDescription}
                  </p>
                </div>

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

                <div className="bg-gradient-to-br from-[#f0faf5] to-white rounded-3xl p-8 shadow-sm border border-emerald-100">
                  <h3 className="text-xl font-bold text-[#0f2d5e] mb-3">
                    Conservative & Non-Surgical Philosophy
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {treatment.nonSurgical}
                  </p>
                </div>

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
                    Consultant Orthopedic & Joint Replacement Surgeon with 12+ years experience and 5,000+ satisfied patients.
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-around text-center">
                    <div>
                      <span className="text-lg font-bold text-[#0f2d5e]">12+</span>
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

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-[#0f2d5e] mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#2e8b57]" />
                    Consultation Clinics
                  </h3>
                  <div className="space-y-4 text-xs">
                    <Link href="/locations/hebbal" className="p-3.5 rounded-xl bg-[#f8fafc] border border-gray-100 block hover:border-[#2e8b57]/40 transition-colors">
                      <span className="font-bold text-[#0f2d5e] block">Atharva Multispeciality Hospital</span>
                      <span className="text-gray-500 block mt-0.5">Hebbal, Bangalore North</span>
                    </Link>
                    <Link href="/locations/new-bel-road" className="p-3.5 rounded-xl bg-[#f8fafc] border border-gray-100 block hover:border-[#2e8b57]/40 transition-colors">
                      <span className="font-bold text-[#0f2d5e] block">Apollo Clinic</span>
                      <span className="text-gray-500 block mt-0.5">New BEL Road, RMV 2nd Stage</span>
                    </Link>
                    <Link href="/locations/seshadripuram" className="p-3.5 rounded-xl bg-[#f8fafc] border border-gray-100 block hover:border-[#2e8b57]/40 transition-colors">
                      <span className="font-bold text-[#0f2d5e] block">Trinity Central Hospital</span>
                      <span className="text-gray-500 block mt-0.5">Seshadripuram, Central Bengaluru</span>
                    </Link>
                    <Link href="/locations/nagavara" className="p-3.5 rounded-xl bg-[#f8fafc] border border-gray-100 block hover:border-[#2e8b57]/40 transition-colors">
                      <span className="font-bold text-[#0f2d5e] block">Medstar Hospital</span>
                      <span className="text-gray-500 block mt-0.5">Nagavara / Manyata Tech Park</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Consultation Booking CTA */}
          <div className="bg-gradient-to-r from-[#0f2d5e] to-[#1a4a8a] rounded-3xl p-8 lg:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                Personalized Joint Care
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Ready to Consult for {treatment.title}?
              </h3>
              <p className="text-white/80 text-sm mt-1 max-w-xl">
                Schedule a priority consultation with Dr. Syed Parveez Ahmed across our Hebbal, New BEL Road, Seshadripuram, Nagavara, or RT Nagar clinics.
              </p>
            </div>
            <TreatmentBookingCTA treatmentTitle={treatment.title} />
          </div>
        </div>
      </div>
    </>
  );
}
