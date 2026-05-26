"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-lg shadow-navy/10"
      }`}
      style={{ "--navy": "#0f2d5e" } as React.CSSProperties}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={`relative w-52 h-14 transition-all duration-500 ${
              transparent ? "bg-white/90 rounded-xl px-3 py-1 backdrop-blur-sm" : ""
            }`}
          >
            <Image
              src="/logo.webp"
              alt="JointXperts Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "text-[#2e8b57]"
                    : transparent
                    ? "text-white hover:text-[#2e8b57]"
                    : "text-[#0f2d5e] hover:text-[#2e8b57]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+918867270633"
            className="flex items-center gap-2 text-sm font-medium text-[#2e8b57] hover:text-[#1f6b3d] transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <Link
            href="?booking=true"
            scroll={false}
            className="px-5 py-2.5 rounded-full bg-[#2e8b57] text-white text-sm font-semibold hover:bg-[#1f6b3d] transition-all duration-200 hover:shadow-lg hover:shadow-green-900/30"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            transparent ? "text-white" : "text-[#0f2d5e]"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-medium py-2 border-b border-gray-100 transition-colors ${
                  active ? "text-[#2e8b57]" : "text-[#0f2d5e] hover:text-[#2e8b57]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="?booking=true"
            scroll={false}
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 rounded-full bg-[#2e8b57] text-white text-center font-semibold hover:bg-[#1f6b3d] transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
