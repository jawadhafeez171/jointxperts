"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown, CalendarCheck } from "lucide-react";
import { conditionCategories } from "@/data/conditions";
import { useBooking } from "@/context/BookingContext";

type NavItem = {
  label: string;
  href?: string;
  items?: { href: string; label: string }[];
};

const LOCATION_PATHS = ["/rt-nagar", "/hebbal", "/nagavara", "/new-bel-road", "/seshadripuram"];

const navLinks: NavItem[] = [
  {
    label: "About",
    items: [
      { href: "/about", label: "About Dr. Ahmed" },
      { href: "/testimonials", label: "Patient Testimonials" },
      { href: "/gallery", label: "Gallery" },
    ],
  },
  { href: "/services", label: "Services" },
  {
    label: "Conditions",
    items: conditionCategories.map((c) => ({
      href: `/conditions/${c.slug}`,
      label: c.title,
    })),
  },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function isActive(item: NavItem, pathname: string) {
  if (item.items) {
    if (item.label === "Conditions") return pathname.startsWith("/conditions");
    return item.items.some((i) => pathname === i.href);
  }
  if (item.href === "/locations") {
    return pathname.startsWith("/locations") || LOCATION_PATHS.includes(pathname);
  }
  if (item.href === "/blog") return pathname.startsWith("/blog");
  return pathname === item.href;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const { openBooking } = useBooking();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll and allow Escape to close while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  // On the home page the header sits on the hero, so it stays see-through until scrolled
  const overHero = pathname === "/" && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
          overHero
            ? "bg-transparent border-transparent"
            : "bg-[#0b2349]/95 backdrop-blur-md border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
        }`}
      >
        <nav className="max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" aria-label="JointXperts home" className="shrink-0">
            <Image
              src="/logo-light.webp"
              alt="JointXperts — Expert care for every joint"
              width={1059}
              height={279}
              sizes="(min-width: 1280px) 243px, 213px"
              className="h-14 xl:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link, pathname);
              const base = `relative flex items-center gap-1 px-3 py-2 rounded-lg text-[15px] font-medium transition-colors duration-200 ${
                active
                  ? "text-[#4cc478]"
                  : "text-white/85 hover:text-white hover:bg-white/10"
              }`;
              const indicator = active && (
                <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-[#4cc478]" />
              );

              if (link.items) {
                return (
                  <li key={link.label} className="relative group">
                    <button type="button" className={base} aria-haspopup="true">
                      {link.label}
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                      {indicator}
                    </button>
                    {/* pt-3 bridges the gap so hover isn't lost moving into the menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-60 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200">
                      <div className="bg-white rounded-2xl shadow-xl shadow-[#0f2d5e]/10 border border-gray-100 p-2 flex flex-col">
                        {link.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                              pathname === item.href
                                ? "bg-[#f0faf5] text-[#2e8b57]"
                                : "text-gray-600 hover:bg-[#f0faf5] hover:text-[#2e8b57]"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={link.label}>
                  <Link href={link.href!} className={base}>
                    {link.label}
                    {indicator}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <a href="tel:+918867270633" className="hidden xl:flex items-center gap-2.5 group">
              <span className="w-10 h-10 rounded-full bg-white/10 border border-white/15 text-[#4cc478] flex items-center justify-center group-hover:bg-[#2e8b57] group-hover:border-[#2e8b57] group-hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] uppercase tracking-wider text-white/55">Call us</span>
                <span className="block text-sm font-semibold text-white">+91 88672 70633</span>
              </span>
            </a>
            <button
              type="button"
              onClick={() => openBooking("General Consultation")}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#2e8b57] text-white text-sm font-semibold hover:bg-[#1f6b3d] hover:shadow-lg hover:shadow-green-900/20 transition-all duration-200 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lg:hidden w-11 h-11 -mr-1 rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="w-7 h-7" />
          </button>
        </nav>
      </header>

      {/* Mobile menu: backdrop + drawer (outside the header so they cover the full screen) */}
      <div
        onClick={closeMenu}
        className={`lg:hidden fixed inset-0 z-[75] bg-[#0f2d5e]/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />
      <aside
        className={`lg:hidden fixed inset-y-0 right-0 z-[80] w-[85%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile menu"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="flex items-center justify-between h-20 px-5 border-b border-gray-100 shrink-0">
          <Link href="/" onClick={closeMenu} aria-label="JointXperts home">
            <Image
              src="/logo-transparent.webp"
              alt="JointXperts"
              width={1059}
              height={279}
              sizes="160px"
              className="h-10 w-auto"
            />
          </Link>
          <button
            type="button"
            onClick={closeMenu}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-4">
          <ul className="flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(link, pathname);
              const color = active ? "text-[#2e8b57]" : "text-[#0f2d5e]";

              if (link.items) {
                const expanded = mobileSection === link.label;
                return (
                  <li key={link.label} className="border-b border-gray-100">
                    <button
                      type="button"
                      onClick={() => setMobileSection(expanded ? null : link.label)}
                      className={`w-full flex items-center justify-between py-3.5 text-base font-semibold ${color}`}
                      aria-expanded={expanded}
                    >
                      {link.label}
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        expanded ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden flex flex-col">
                        {link.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className={`pl-4 py-2 text-[15px] border-l-2 transition-colors ${
                              pathname === item.href
                                ? "border-[#2e8b57] text-[#2e8b57] font-medium"
                                : "border-gray-100 text-gray-600 hover:text-[#2e8b57]"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={link.label} className="border-b border-gray-100">
                  <Link
                    href={link.href!}
                    onClick={closeMenu}
                    className={`block py-3.5 text-base font-semibold ${color}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-5 border-t border-gray-100 flex flex-col gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              closeMenu();
              openBooking("General Consultation");
            }}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#2e8b57] text-white font-semibold hover:bg-[#1f6b3d] transition-colors cursor-pointer"
          >
            <CalendarCheck className="w-5 h-5" />
            Book Appointment
          </button>
          <a
            href="tel:+918867270633"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full border border-[#2e8b57]/30 text-[#2e8b57] font-semibold hover:bg-[#f0faf5] transition-colors"
          >
            <Phone className="w-5 h-5" />
            +91 88672 70633
          </a>
        </div>
      </aside>
    </>
  );
}
