"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Users } from "lucide-react";

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
              Expert Care{" "}
              <span className="text-[#3aad6e]">for Every</span>{" "}
              Joint
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
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#2e8b57] text-white font-semibold text-base hover:bg-[#1f6b3d] transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/40 hover:-translate-y-0.5"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
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
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Large decorative circle */}
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full border-2 border-[#2e8b57]/30 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-white/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl font-bold text-white leading-none">10+</div>
                  <div className="text-[#3aad6e] font-semibold mt-1">Years of Excellence</div>
                  <div className="text-white/50 text-sm mt-1">in Orthopedic Surgery</div>
                </div>
              </div>

              {/* Orbiting dots */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-3 h-3 rounded-full bg-[#2e8b57]"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${deg}deg) translateX(155px) rotate(-${deg}deg)`,
                    marginTop: "-6px",
                    marginLeft: "-6px",
                  }}
                />
              ))}
            </div>

            {/* Floating stat cards — staggered */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.65}
              className="absolute -left-8 top-8 glass-card rounded-2xl px-5 py-4 float-animation"
            >
              <div className="text-2xl font-bold text-white">5000+</div>
              <div className="text-white/60 text-xs mt-0.5">Happy Patients</div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.8}
              className="absolute -right-4 bottom-12 glass-card rounded-2xl px-5 py-4 float-animation"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="text-2xl font-bold text-[#3aad6e]">98%</div>
              <div className="text-white/60 text-xs mt-0.5">Success Rate</div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.72}
              className="absolute right-8 -top-4 glass-card rounded-2xl px-5 py-4 float-animation"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="text-2xl font-bold text-white">4.9★</div>
              <div className="text-white/60 text-xs mt-0.5">Patient Rating</div>
            </motion.div>
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
