import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return { title: "Blog Not Found" };
  return {
    title: `${blog.title} | JointXperts Blog`,
    description: blog.excerpt,
  };
}

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white pb-24">
      {/* Hero Banner */}
      <div className={`relative pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br ${blog.gradient}`}>
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative max-w-4xl mx-auto z-10">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/20 uppercase tracking-wider">
              {blog.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-white/90 font-medium">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-white/70" />
              {blog.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-white/70" />
              {blog.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-white/70" />
              {blog.readTime}
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          {/* We use prose for nice typographic defaults on raw HTML */}
          <div 
            className="text-gray-600 text-lg leading-relaxed 
              [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-[#0f2d5e] [&>h2]:mt-12 [&>h2]:mb-6
              [&>p]:mb-6 
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2
              [&>strong]:text-[#0f2d5e] [&>strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>

      {/* CTA Section at bottom */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-16 text-center">
        <div className="bg-[#f0faf5] rounded-3xl p-10 border border-[#2e8b57]/20">
          <h3 className="text-2xl font-bold text-[#0f2d5e] mb-4">Experiencing these symptoms?</h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Don't let joint pain hold you back. Schedule a consultation with Dr. Ahmed to discuss your treatment options.
          </p>
          <Link 
            href="?booking=true" 
            scroll={false}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2e8b57] text-white font-semibold hover:bg-[#1f6b3d] transition-all hover:shadow-lg hover:shadow-green-900/20"
          >
            Book a Consultation Now
          </Link>
        </div>
      </div>
    </article>
  );
}
