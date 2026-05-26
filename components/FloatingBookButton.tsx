"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FloatingBookButton() {
  return (
    <motion.div
      className="fixed bottom-20 right-6 z-50 lg:bottom-8 lg:right-8"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href="?booking=true" scroll={false} className="group flex items-center gap-3 relative bg-white/95 backdrop-blur-sm p-1.5 pr-5 rounded-full shadow-lg shadow-blue-900/20 border border-blue-100 hover:shadow-blue-900/30 hover:border-blue-200 transition-all duration-300">
        
        {/* Button Container / Image */}
        <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
          <Image
            src="/photo2.webp"
            alt="Book Appointment"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Text */}
        <div className="flex flex-col">
          <span className="text-blue-900 font-bold text-sm md:text-base whitespace-nowrap leading-tight">
            Book Consultation
          </span>
          <span className="text-blue-600 text-xs font-medium whitespace-nowrap hidden sm:block">
            Available Now
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
