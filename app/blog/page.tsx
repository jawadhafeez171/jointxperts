import Link from "next/link";
import { blogs } from "@/data/blogs";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orthopedic Insights & Blog | JointXperts",
  description: "Read the latest insights on joint care, sports injuries, and orthopedic treatments from Dr. Syed Parveez Ahmed.",
};

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4 justify-center">
            <div className="h-px w-8 bg-[#2e8b57]" />
            <span className="text-[#2e8b57] font-semibold text-sm uppercase tracking-widest">Our Blog</span>
            <div className="h-px w-8 bg-[#2e8b57]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f2d5e] mb-6">
            Orthopedic <span className="text-[#2e8b57]">Insights</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Stay informed with the latest articles on joint health, injury prevention, and modern orthopedic treatments.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link 
              key={blog.id} 
              href={`/blog/${blog.slug}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Card Header (Gradient Cover) */}
              <div className={`h-48 bg-gradient-to-br ${blog.gradient} p-6 flex items-end relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                <span className="relative z-10 px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/20 uppercase tracking-wider">
                  {blog.category}
                </span>
              </div>
              
              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-gray-400 font-medium mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {blog.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[#0f2d5e] mb-3 group-hover:text-[#2e8b57] transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-1">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center text-[#2e8b57] font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
