"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, Stethoscope, Phone } from "lucide-react";
import Image from "next/image";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/about", icon: Info, label: "About" },
  { href: "/services", icon: Stethoscope, label: "Services" },
  { href: "/contact", icon: Phone, label: "Contact" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-[60] w-full bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-[0_-8px_30px_rgba(0,0,0,0.06)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex items-center justify-between px-4 h-[72px] w-full">
        {/* Left items */}
        <div className="flex items-center justify-around w-[40%]">
          {navItems.slice(0, 2).map(({ href, icon: Icon, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center justify-center gap-1 transition-colors relative h-full w-full py-2 ${
                  active ? "text-[#2e8b57]" : "text-slate-400 hover:text-[#0f2d5e]"
                }`}
              >
                <Icon className={`w-[22px] h-[22px] ${active ? "opacity-100" : "opacity-80"}`} />
                <span className="text-[10px] font-medium tracking-wide">{label}</span>
                {active && (
                  <span className="absolute top-0 w-8 h-[3px] rounded-b-full bg-[#2e8b57]" />
                )}
              </Link>
            );
          })}
        </div>
        
        {/* Right items */}
        <div className="flex items-center justify-around w-[40%]">
          {navItems.slice(2).map(({ href, icon: Icon, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center justify-center gap-1 transition-colors relative h-full w-full py-2 ${
                  active ? "text-[#2e8b57]" : "text-slate-400 hover:text-[#0f2d5e]"
                }`}
              >
                <Icon className={`w-[22px] h-[22px] ${active ? "opacity-100" : "opacity-80"}`} />
                <span className="text-[10px] font-medium tracking-wide">{label}</span>
                {active && (
                  <span className="absolute top-0 w-8 h-[3px] rounded-b-full bg-[#2e8b57]" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
      {/* Book Consultation center button */}
      <Link
        href="?booking=true"
        scroll={false}
        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-4 flex flex-col items-center gap-1"
      >
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-[3px] border-white shadow-md z-10 flex-shrink-0 bg-white">
          <Image src="/photo2.webp" alt="Book Consultation" fill className="object-cover" />
        </div>
        <span className="text-blue-900 text-xs whitespace-nowrap text-center">
          Book<br />Consultation
        </span>
      </Link>
    </nav>
  );
}
