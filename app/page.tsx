import Hero from "@/components/Hero";
import About from "@/components/About";
import HomeFeatures from "@/components/HomeFeatures";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Locations from "@/components/Locations";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HomeFeatures />
      <HowItWorks />
      <FAQ />
      <Locations />

      {/* Final CTA Banner */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#0f2d5e] via-[#1a3d6b] to-[#0f3d2e] p-12 text-white text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Take the First Step?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8 text-lg">
              Schedule a consultation with Dr. Syed Parveez Ahmed and start your journey to pain-free living.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="?booking=true"
                scroll={false}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2e8b57] text-white font-semibold text-base hover:bg-[#1f6b3d] transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/40"
              >
                Book Appointment
              </Link>
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all duration-300"
              >
                Meet Dr. Ahmed
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
