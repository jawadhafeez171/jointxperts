"use client";

import { MapPin, Navigation, Clock } from "lucide-react";

const locations = [
  {
    name: "JOINTXPERTS (Primary Clinic)",
    address: "No. 29, Tirumala Complex, Bhoopasandra Bus Stop, RMV 2nd Stage, Bengaluru — 560094",
    link: "https://maps.app.goo.gl/dzvjfqa8Y3TXfJEK9",
    primary: true,
  },
  {
    name: "Atharva Multispecialty Clinic",
    address: "20/2, Guddadhalli Main Rd, near Aryan tower, Kempanna Layout, Hebbal, Bengaluru",
    link: "https://maps.app.goo.gl/yYqi7YNaccBzvqLJ8",
    primary: false,
  },
  {
    name: "Ayesha Polyclinic",
    address: "26, KHB Colony Main Rd, Ayyappa Layout, Sultanpalya, Hebbal, Bengaluru",
    link: "https://maps.app.goo.gl/5TfJEiDDZayVwHze9",
    primary: false,
  },
  {
    name: "Darr-Ul-Shifa Clinic",
    address: "Anjuman Manzil, Govindapura Main Rd, Nagavara, Bengaluru",
    link: "https://maps.app.goo.gl/NJTQtWkiQAmuGmPj6",
    primary: false,
  },
  {
    name: "Apollo Clinic BEL Road",
    address: "No.1, Vaccum House, New BEL Road, RMV 2nd Stage, Chikkamaranahalli, Bengaluru",
    link: "https://maps.app.goo.gl/zyJwywMvVKEE8E6e7",
    primary: false,
  },
];

export default function Locations() {
  return (
    <section className="py-20 bg-white">
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
            Dr. Syed Parveez Ahmed is available for consultation at multiple convenient locations across Bengaluru.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <a
              key={i}
              href={loc.link}
              target="_blank"
              rel="noopener noreferrer"
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
                  <h3 className="text-[#0f2d5e] font-bold text-lg leading-tight group-hover:text-[#2e8b57] transition-colors">{loc.name}</h3>
                  {loc.primary && (
                    <span className="inline-block mt-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#2e8b57] text-white">
                      Primary Clinic
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                {loc.address}
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-semibold text-[#0f2d5e] group-hover:text-[#2e8b57] transition-colors">
                <span className="flex items-center gap-1.5"><Navigation className="w-4 h-4" /> Get Directions</span>
                <span className="text-[#2e8b57]">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
