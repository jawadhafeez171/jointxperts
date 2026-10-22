"use client";

import { MapPin, Navigation } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

const locations = [
  {
    slug: "hebbal",
    name: "Atharva Multispeciality Hospital",
    zone: "Bangalore North",
    area: "Hebbal",
    address: "20/2, Guddadhalli Main Rd, near Aryan tower, Kempanna Layout, Hebbal, Bengaluru",
    link: "https://maps.app.goo.gl/yYqi7YNaccBzvqLJ8",
    primary: true,
    qrCode: "/qrcode/atharva.jpeg",
  },
  {
    slug: "seshadripuram",
    name: "Trinity Central Hospital",
    zone: "Central Bengaluru",
    area: "Seshadripuram / Malleshwaram",
    address: "Swastik Circle, 139, Subedar Chatram Road, Seshadripuram, Bengaluru — 560020",
    link: "https://maps.google.com/?q=Trinity+Central+Hospital+Seshadripuram+Bengaluru",
    primary: false,
    qrCode: "/qrcode/trinity central hospital.jpeg",
  },
  {
    slug: "new-bel-road",
    name: "Apollo Clinic BEL Road",
    zone: "Bangalore North",
    area: "New BEL Road / RMV",
    address: "No.1, Vaccum House, New BEL Road, RMV 2nd Stage, Chikkamaranahalli, Bengaluru",
    link: "https://maps.app.goo.gl/zyJwywMvVKEE8E6e7",
    primary: false,
  },
  {
    slug: "nagavara",
    name: "Medstar Hospital",
    zone: "Bangalore North",
    area: "Nagavara / Manyata",
    address: "Outer Ring Road, Near Manyata Tech Park Gate 1, Nagavara, Bengaluru",
    link: "https://maps.app.goo.gl/NJTQtWkiQAmuGmPj6",
    primary: false,
    qrCode: "/qrcode/darul shifa.jpeg",
  },
  {
    slug: "rt-nagar",
    name: "Shifa Hospital & Poly Clinic",
    zone: "Bangalore North",
    area: "Sultanpalya / RT Nagar",
    address: "Sultanpalya Main Road, RT Nagar Post, Bengaluru",
    link: "https://maps.app.goo.gl/5TfJEiDDZayVwHze9",
    primary: false,
    qrCode: "/qrcode/ayesha poli clinic qr code.jpeg",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#2e8b57]" />
            <span className="text-[#2e8b57] font-semibold text-sm uppercase tracking-widest">Visit Us</span>
            <div className="h-px w-12 bg-[#2e8b57]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f2d5e] mb-4">
            Our <span className="text-[#2e8b57]">Locations</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Dr. Syed Parveez Ahmed is available for consultation at trusted hospitals and clinics across <strong>Bangalore North</strong> (Hebbal, Nagavara, New BEL Road, RT Nagar) and <strong>Central Bengaluru</strong> (Seshadripuram, Malleshwaram).
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <div
              key={i}
              className={`group flex flex-col p-6 rounded-2xl border transition-all duration-300 ${
                loc.primary
                  ? "bg-[#f0faf5] border-[#2e8b57]/30 shadow-sm hover:shadow-md hover:border-[#2e8b57]/60"
                  : "bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-[#2e8b57]/30"
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                  loc.primary ? "bg-[#2e8b57] text-white" : "bg-[#f8fafc] text-[#0f2d5e] group-hover:bg-[#2e8b57] group-hover:text-white"
                }`}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <Link href={`/locations/${loc.slug}`}>
                    <h3 className="text-[#0f2d5e] font-bold text-lg leading-tight group-hover:text-[#2e8b57] transition-colors">{loc.name}</h3>
                  </Link>
                  <div className="flex flex-wrap items-center gap-1.5 mt-2">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#0f2d5e] border border-blue-100">
                      {loc.zone}
                    </span>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold text-gray-600 bg-gray-100">
                      {loc.area}
                    </span>
                    {loc.primary && (
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#2e8b57] text-white">
                        Primary Clinic
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                {loc.address}
              </p>

              {/* QR Code Section - Desktop/Tablet Only */}
              {loc.qrCode && (
                <div className="hidden md:flex items-center gap-3 mb-6 p-3 rounded-2xl bg-gray-50 border border-gray-100/50">
                  <div className="w-16 h-16 shrink-0 bg-white p-1 rounded-lg border border-gray-100 shadow-sm flex items-center justify-center">
                    <img
                      src={`${loc.qrCode}?v=2`}
                      alt="Scan Map QR"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#2e8b57]">Scan Google Maps QR</div>
                    <div className="text-gray-400 text-[10px] mt-0.5 leading-snug">Scan with your phone camera to open live navigation instantly.</div>
                  </div>
                </div>
              )}

              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-semibold">
                <Link
                  href={`/locations/${loc.slug}`}
                  className="text-[#2e8b57] hover:underline flex items-center gap-1"
                >
                  View Area Timings →
                </Link>
                <a
                  href={loc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#0f2d5e]"
                >
                  <Navigation className="w-3.5 h-3.5" /> Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
