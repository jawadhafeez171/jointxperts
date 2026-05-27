import { notFound } from "next/navigation";
import { conditionCategories } from "@/data/conditions";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Activity } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = conditionCategories.find((c) => c.slug === categorySlug);
  if (!category) return { title: "Category Not Found" };
  
  return {
    title: `${category.title} Conditions & Treatments | JointXperts`,
    description: category.description,
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

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12">
          <div className="mb-6">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-[#2e8b57] hover:text-[#1f6b3d] text-sm font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back Home
            </Link>
          </div>
          
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#2e8b57]" />
            <span className="text-[#2e8b57] font-semibold text-sm uppercase tracking-widest">Conditions & Treatments</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f2d5e] mb-4">
            {category.title}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl">
            {category.description}
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.conditions.map((condition) => (
            <Link 
              key={condition.id}
              href={`/conditions/${category.slug}/${condition.slug}`}
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#0f2d5e]/5 transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gray-100">
                {condition.image ? (
                  <Image src={condition.image} alt={condition.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#f0faf5] text-[#2e8b57]">
                    <Activity className="w-8 h-8" />
                  </div>
                )}
                {/* Gradient overlay to ensure text contrast if we had text over image, but here image is just top banner */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-[#0f2d5e] mb-3 group-hover:text-[#2e8b57] transition-colors">
                {condition.title}
              </h3>
              
              <p className="text-gray-500 text-sm mb-8 flex-1">
                {condition.shortDescription}
              </p>
              
              <div className="flex items-center text-[#2e8b57] font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
                View Details & Treatments
                <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
