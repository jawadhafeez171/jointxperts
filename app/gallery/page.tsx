import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | JointXperts",
  description: "Take a look at our state-of-the-art facilities and patient success stories at JointXperts.",
};

const images = [
  { src: "/gallery/gallery_1.webp", alt: "JointXperts Facility" },
  { src: "/gallery/gallery_2.webp", alt: "Patient Care at JointXperts" },
  { src: "/gallery/gallery_3.webp", alt: "Orthopedic Surgery Room" },
  { src: "/gallery/gallery_4.webp", alt: "JointXperts Team" },
  { src: "/gallery/gallery_5.webp", alt: "Physical Therapy Session" },
  { src: "/gallery/gallery_6.webp", alt: "Consultation Room" },
  { src: "/gallery/gallery_7.webp", alt: "Modern Orthopedic Equipment" },
  { src: "/Brochures/eat_right.webp", alt: "Nutrition and Joint Health Guide" },
  { src: "/Brochures/pes_anserine.webp", alt: "Pes Anserine Bursitis Care Guide" },
  { src: "/Brochures/prp_injections.webp", alt: "Platelet-Rich Plasma (PRP) Therapy" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#2e8b57]" />
            <span className="text-[#2e8b57] font-semibold text-sm uppercase tracking-widest">Our Environment</span>
            <div className="h-px w-8 bg-[#2e8b57]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f2d5e] mb-6">
            Gallery
          </h1>
          <p className="text-lg text-gray-500">
            Explore our state-of-the-art facilities, advanced equipment, and the dedicated environment where healing begins.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100/50 bg-white"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index < 4}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2d5e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
