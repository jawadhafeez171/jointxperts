"use client";

import { CheckCircle2, GraduationCap, Stethoscope, Trophy } from "lucide-react";

const credentials = [
  { icon: GraduationCap, title: "MBBS", desc: "Bachelor of Medicine and Bachelor of Surgery" },
  { icon: GraduationCap, title: "MS (Ortho)", desc: "Master of Surgery in Orthopedics" },
  { icon: Trophy, title: "FRGUHS (Arthroplasty)", desc: "Fellowship in Joint Replacement Surgery" },
  { icon: Stethoscope, title: "Consultant Surgeon", desc: "Orthopedic & Joint Replacement Specialist" },
];

const highlights = [
  "Advanced Hip & Knee Replacement Surgery",
  "Minimally Invasive Surgical Techniques",
  "Comprehensive Spine Care & Treatment",
  "Sports Injury Management",
  "Arthroscopic Surgery",
  "Post-operative Rehabilitation Guidance",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e8f5ee] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e8f0f8] rounded-full translate-y-1/2 -translate-x-1/2 opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-[#2e8b57]" />
          <span className="text-[#2e8b57] font-semibold text-sm uppercase tracking-widest">About the Doctor</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <div className="relative order-2 lg:order-1">
            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group p-5 rounded-2xl border border-gray-100 bg-white hover:border-[#2e8b57]/30 hover:shadow-lg hover:shadow-green-50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#e8f5ee] flex items-center justify-center mb-3 group-hover:bg-[#2e8b57] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#2e8b57] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="font-bold text-[#0f2d5e] text-sm">{title}</div>
                  <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>

            {/* Experience banner */}
            <div className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-[#0f2d5e] to-[#1a4a8a] text-white flex items-center gap-6">
              <div className="text-center flex-shrink-0">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-white/70 text-xs mt-0.5">Years</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <div className="font-semibold">Dedicated to Excellence</div>
                <div className="text-white/60 text-sm mt-0.5">
                  Providing world-class orthopedic care with cutting-edge techniques and personalised treatment plans.
                </div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2d5e] leading-tight mb-6">
              Meet{" "}
              <span className="text-[#2e8b57]">Dr. Syed Parveez Ahmed</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Dr. Syed Parveez Ahmed is a highly qualified Consultant Orthopedic and Joint Replacement Surgeon
              with extensive training in arthroplasty. His fellowship in Joint Replacement (FRGUHS) combined with
              his MS in Orthopedics positions him among the leading specialists in his field.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              At <span className="font-semibold text-[#0f2d5e]">JointXperts</span>, Dr. Ahmed is committed to
              restoring mobility and improving quality of life through evidence-based, patient-centred care. Every
              treatment plan is personalised to meet the unique needs of each patient.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2e8b57] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 rounded-full bg-[#0f2d5e] text-white font-semibold hover:bg-[#1a4a8a] transition-all duration-300 hover:shadow-xl hover:shadow-navy/20"
            >
              Consult Dr. Ahmed
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
