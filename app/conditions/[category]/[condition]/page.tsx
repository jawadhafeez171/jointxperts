import { notFound } from "next/navigation";
import { conditionCategories } from "@/data/conditions";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ category: string; condition: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug, condition: conditionSlug } = await params;
  
  const category = conditionCategories.find((c) => c.slug === categorySlug);
  const condition = category?.conditions.find((c) => c.slug === conditionSlug);
  
  if (!condition) return { title: "Condition Not Found" };
  
  return {
    title: `${condition.title} | JointXperts`,
    description: condition.shortDescription,
  };
}

export function generateStaticParams() {
  const params: { category: string; condition: string }[] = [];
  
  conditionCategories.forEach((category) => {
    category.conditions.forEach((condition) => {
      params.push({
        category: category.slug,
        condition: condition.slug,
      });
    });
  });
  
  return params;
}

export default async function ConditionPage({ params }: Props) {
  const { category: categorySlug, condition: conditionSlug } = await params;
  
  const category = conditionCategories.find((c) => c.slug === categorySlug);
  const condition = category?.conditions.find((c) => c.slug === conditionSlug);

  if (!category || !condition) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6 lg:px-8 bg-[#0f2d5e] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(46,139,87,0.15),transparent_50%)] pointer-events-none z-0" />
        
        {condition.image && (
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none z-0">
            <Image 
              src={condition.image} 
              alt={condition.title} 
              fill 
              className="object-cover object-left mask-image-gradient"
              style={{ maskImage: 'linear-gradient(to right, transparent, black 40%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%)' }}
            />
          </div>
        )}
        
        <div className="relative max-w-4xl mx-auto z-10 text-white">
          <Link 
            href={`/conditions/${category.slug}`}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {category.title}
          </Link>
          
          <div className="mb-4">
            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/10 uppercase tracking-wider">
              {category.title} Condition
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {condition.title}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            {condition.shortDescription}
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
          
          <div className="p-8 md:p-12">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f2d5e] mb-4">Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {condition.fullDescription}
              </p>
            </div>

            {/* Symptoms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f2d5e] mb-6">Common Symptoms</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {condition.symptoms.map((symptom, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-medium">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatments */}
            <div>
              <h2 className="text-2xl font-bold text-[#0f2d5e] mb-6">Treatment Options</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Non-Surgical */}
                {condition.treatments.nonSurgical && (
                  <div className="p-8 rounded-3xl bg-[#f8fafc] border border-gray-100">
                    <h3 className="text-lg font-bold text-[#0f2d5e] mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#3aad6e]" />
                      Non-Surgical
                    </h3>
                    <ul className="space-y-3">
                      {condition.treatments.nonSurgical.map((tx, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-[#2e8b57] font-bold">•</span>
                          {tx}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Surgical */}
                {condition.treatments.surgical && (
                  <div className="p-8 rounded-3xl bg-[#f0faf5] border border-[#2e8b57]/10">
                    <h3 className="text-lg font-bold text-[#2e8b57] mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#2e8b57]" />
                      Surgical Solutions
                    </h3>
                    <ul className="space-y-3">
                      {condition.treatments.surgical.map((tx, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-[#0f2d5e] font-bold">•</span>
                          {tx}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            
          </div>

          {/* CTA Footer inside the card */}
          <div className="bg-gradient-to-r from-[#0f2d5e] to-[#1a3d6b] p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Don't let {condition.title.toLowerCase()} limit your life.</h3>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Get an expert diagnosis and a personalized treatment plan from Dr. Ahmed.
            </p>
            <Link 
              href={`/?booking=true`} 
              scroll={false}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#2e8b57] text-white font-bold hover:bg-[#1f6b3d] transition-all shadow-lg hover:shadow-green-900/30"
            >
              Book a Consultation
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}
