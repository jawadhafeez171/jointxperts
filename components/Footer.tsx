import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const links: Record<string, { label: string; href: string }[]> = {
  Conditions: [
    { label: "Shoulder Issues", href: "/conditions/shoulder" },
    { label: "Knee Problems", href: "/conditions/knee" },
    { label: "Spine & Back Care", href: "/conditions/spine" },
    { label: "Fracture Management", href: "/conditions/fracture" },
    { label: "Physiotherapy", href: "/conditions/physiotherapy" },
  ],
  "Quick Links": [
    { label: "About Dr. Ahmed", href: "/about" },
    { label: "Why JointXperts", href: "/about" },
    { label: "Patient Testimonials", href: "/testimonials" },
    { label: "Book Appointment", href: "?booking=true" },
    { label: "Orthopedic Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const socials = [
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#091d3d] text-white">
      {/* Top wave */}
      <div className="bg-white">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 0L1440 0L1440 60C1200 10 960 60 720 30C480 0 240 60 0 10L0 0Z" fill="#091d3d" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block relative w-48 h-14 mb-5 bg-white rounded-xl p-2">
              <Image src="/logo.webp" alt="JointXperts" fill className="object-contain p-1" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Expert care for every joint. Led by Dr. Syed Parveez Ahmed, MBBS MS(Ortho) FRGUHS(Arthroplasty), we are committed to restoring your mobility and quality of life.
            </p>
            <div className="flex gap-3">
              {socials.map(({ svg, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2e8b57] transition-colors duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="font-bold text-sm uppercase tracking-widest text-[#3aad6e] mb-5">{heading}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-white/50 text-sm hover:text-white transition-colors duration-200">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#3aad6e] mb-5">Primary Clinic</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-[#3aad6e] mt-0.5 flex-shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/dzvjfqa8Y3TXfJEK9" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  JOINTXPERTS (Atharva Clinic)<br />
                  No. 29, Tirumala Complex, Bhoopasandra Bus Stop,<br />
                  RMV 2nd Stage, Bengaluru — 560094
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-[#3aad6e] flex-shrink-0" />
                <a href="tel:+918867270633" className="hover:text-white transition-colors">+91 88672 70633</a>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-[#3aad6e] flex-shrink-0" />
                <a href="mailto:info@jointxperts.in" className="hover:text-white transition-colors">info@jointxperts.in</a>
              </li>
            </ul>

            <h4 className="font-bold text-sm uppercase tracking-widest text-[#3aad6e] mb-4 mt-8">Also Visiting At</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <a href="https://maps.app.goo.gl/yYqi7YNaccBzvqLJ8" target="_blank" rel="noopener noreferrer" className="block text-white/50 hover:text-white transition-colors group">
                <div className="text-white/80 group-hover:text-white transition-colors text-sm font-medium line-clamp-1">Atharva Multispecialty</div>
                <div className="text-xs mt-0.5 line-clamp-1">Hebbal</div>
              </a>
              <a href="https://maps.app.goo.gl/5TfJEiDDZayVwHze9" target="_blank" rel="noopener noreferrer" className="block text-white/50 hover:text-white transition-colors group">
                <div className="text-white/80 group-hover:text-white transition-colors text-sm font-medium line-clamp-1">Ayesha Polyclinic</div>
                <div className="text-xs mt-0.5 line-clamp-1">Sultanpalya</div>
              </a>
              <a href="https://maps.app.goo.gl/NJTQtWkiQAmuGmPj6" target="_blank" rel="noopener noreferrer" className="block text-white/50 hover:text-white transition-colors group">
                <div className="text-white/80 group-hover:text-white transition-colors text-sm font-medium line-clamp-1">Darr-Ul-Shifa Clinic</div>
                <div className="text-xs mt-0.5 line-clamp-1">Nagavara</div>
              </a>
              <a href="https://maps.app.goo.gl/zyJwywMvVKEE8E6e7" target="_blank" rel="noopener noreferrer" className="block text-white/50 hover:text-white transition-colors group">
                <div className="text-white/80 group-hover:text-white transition-colors text-sm font-medium line-clamp-1">Apollo Clinic</div>
                <div className="text-xs mt-0.5 line-clamp-1">New BEL Road</div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>© {new Date().getFullYear()} JointXperts. All rights reserved.</span>
            <a 
              href="https://maps.app.goo.gl/dzvjfqa8Y3TXfJEK9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#3aad6e] font-semibold hover:text-[#42c27c] transition-colors inline-flex items-center gap-1 mt-1 sm:mt-0"
            >
              <span className="text-yellow-400">★</span> Share your experience / Review us on Google
            </a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
