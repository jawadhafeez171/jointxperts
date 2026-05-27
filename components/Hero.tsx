"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { icon: Users, value: "5000+", label: "Patients Treated" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Shield, value: "98%", label: "Success Rate" },
];

// Shared animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let raf: number;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(46, 139, 87, ${p.alpha})`;
        ctx.fill();
      });
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(46, 139, 87, ${0.12 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative min-h-screen hero-bg flex items-center overflow-hidden">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-[#2e8b57]/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-[#1a4a8a]/20 blur-3xl" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content — staggered fade-up */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#3aad6e] text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#3aad6e] animate-pulse" />
              Accepting New Patients
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.22}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            >
              An Orthopedic Surgeon Who{" "}
              <span className="text-[#3aad6e]">Truly Cares</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.34}
              className="text-lg text-white/70 leading-relaxed mb-4 max-w-lg"
            >
              Led by{" "}
              <span className="text-white font-semibold">
                Dr. Syed Parveez Ahmed
              </span>
              , our clinic specialises in advanced orthopedic care — from joint
              replacement to spine care — with precision and compassion.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.44}
              className="flex flex-wrap gap-3 text-xs text-white/50 mb-10 font-mono"
            >
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">MBBS</span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">MS(Ortho)</span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">FRGHS(Arthroplasty)</span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.55}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="?booking=true"
                scroll={false}
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#2e8b57] text-white font-semibold text-base hover:bg-[#1f6b3d] transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/40 hover:-translate-y-0.5"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all duration-300"
              >
                Our Services
              </a>
            </motion.div>
          </div>

          {/* Right — slide in from right */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="relative hidden lg:flex justify-center items-center w-full"
          >
            <div className="relative w-full max-w-lg aspect-square mt-10 group">
              {/* Back card 1 */}
              <div className="absolute inset-4 bg-[#2e8b57]/20 rounded-[3rem] rotate-6 border border-[#2e8b57]/30 backdrop-blur-sm transition-transform duration-700 group-hover:rotate-12" />
              
              {/* Back card 2 */}
              <div className="absolute inset-4 bg-[#1a4a8a]/40 rounded-[3rem] -rotate-3 border border-[#1a4a8a]/50 backdrop-blur-md transition-transform duration-700 group-hover:-rotate-6" />
              
              {/* Main Image */}
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden border border-white/20 shadow-2xl z-10 bg-[#0a1e3f]">
                <Image 
                  src="/photo1.webp" 
                  alt="JointXperts Orthopedic Care" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1e3f]/80 via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating stat cards — staggered */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={0.65}
                className="absolute -left-6 top-10 glass-card rounded-2xl px-6 py-5 float-animation z-20 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#3aad6e]/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#3aad6e]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white leading-none">5000+</div>
                    <div className="text-white/60 text-xs mt-1">Happy Patients</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={0.8}
                className="absolute -right-8 bottom-16 glass-card rounded-2xl px-6 py-5 float-animation z-20 shadow-2xl"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#3aad6e]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white leading-none">98%</div>
                    <div className="text-white/60 text-xs mt-1">Success Rate</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={0.72}
                className="absolute right-4 -top-6 glass-card rounded-2xl px-5 py-4 float-animation z-20 shadow-2xl"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="text-2xl font-bold text-[#3aad6e] text-center">4.9★</div>
                <div className="text-white/60 text-xs mt-0.5 text-center">Patient Rating</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom stats bar — staggered children */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="mt-20 grid grid-cols-3 gap-8 pt-10 border-t border-white/10"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              custom={0.7}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2e8b57]/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-[#3aad6e]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white text-center sm:text-left">{value}</div>
                <div className="text-white/50 text-sm text-center sm:text-left">{label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
