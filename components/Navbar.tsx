"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { conditionCategories } from "@/data/conditions";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { 
    label: "Conditions & Treatments", 
    isDropdown: true,
    items: conditionCategories.map(c => ({
      href: `/conditions/${c.slug}`,
      label: c.title,
    }))
  },
  { href: "/blog", label: "Blog" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
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
            className={`relative w-[240px] h-[72px] lg:w-52 lg:h-14 transition-all duration-500 ${
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
            if (link.isDropdown) {
              const active = pathname.startsWith("/conditions");
              return (
                <div key={link.label} className="relative group">
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-2 ${
                      active
                        ? "text-[#2e8b57]"
                        : transparent
                        ? "text-white hover:text-[#2e8b57]"
                        : "text-[#0f2d5e] hover:text-[#2e8b57]"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white rounded-2xl shadow-xl shadow-[#0f2d5e]/10 border border-gray-100 p-2 flex flex-col gap-1">
                      {link.items?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="px-4 py-2.5 text-sm text-gray-600 font-medium hover:bg-[#f0faf5] hover:text-[#2e8b57] rounded-xl transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            const active = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href!}
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

      {/* Mobile menu – right aligned sliding panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-64 bg-white/95 backdrop-blur-md overflow-y-auto transform transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-3 p-6 pt-6 border-l border-gray-100 h-full items-end text-right">
          <div className="flex justify-between w-full mb-4">
            <span className="text-lg font-bold text-[#0f2d5e]">Menu</span>
            <button onClick={() => setOpen(false)} className="text-gray-600 hover:text-gray-800">
              <X className="w-6 h-6" />
            </button>
          </div>
          {navLinks.map((link) => (
  link.isDropdown ? (
    <div key={link.label} className="flex flex-col border-b border-gray-100">
      <button
        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
        className={`flex items-center justify-between py-2 font-medium transition-colors ${pathname.startsWith("/conditions") ? "text-[#2e8b57]" : "text-[#0f2d5e]"}`}
      >
        {link.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`flex flex-col gap-2 overflow-hidden transition-all duration-300 ${mobileDropdownOpen ? "max-h-64 pb-3" : "max-h-0"}`}
      >
        {link.items?.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="pr-4 py-1.5 text-gray-500 font-medium hover:text-[#2e8b57] transition-colors text-right"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Link
      key={link.label}
      href={link.href!}
      onClick={() => setOpen(false)}
      className={`font-medium py-2 border-b border-gray-100 transition-colors ${pathname === link.href ? "text-[#2e8b57]" : "text-[#0f2d5e] hover:text-[#2e8b57]"}`}
      style={{ textAlign: "right" }}
    >
      {link.label}
    </Link>
  )
))}
          <Link
            href="?booking=true"
            scroll={false}
            onClick={() => setOpen(false)}
            className="mt-4 px-5 py-3 rounded-full bg-[#2e8b57] text-white text-center font-semibold hover:bg-[#1f6b3d] transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
