"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
} from "framer-motion";

const TAGLINE = "Expert Care for Every Joint";
const DURATION_MS = 2600; // how long the splash stays visible

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  // Spring-driven progress value 0 → 100
  const progress = useSpring(0, { stiffness: 28, damping: 18 });
  const barWidth = useTransform(progress, [0, 100], ["0%", "100%"]);

  useEffect(() => {
    // Small delay so the first paint is clean before animating
    const t0 = setTimeout(() => progress.set(100), 80);
    const t1 = setTimeout(() => setVisible(false), DURATION_MS);
    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
    };
  }, [progress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#091d3d] gap-10"
          // Exit: slide the whole overlay upward like a curtain
          exit={{ y: "-100%", transition: { duration: 0.72, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Subtle radial glow behind logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[480px] h-[480px] rounded-full bg-[#2e8b57]/10 blur-[100px]" />
          </div>

          {/* Logo */}
          <motion.div
            className="relative w-64 h-16"
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* White pill background so the navy logo shows on dark splash */}
            <div className="absolute inset-0 bg-white/90 rounded-2xl" />
            <Image
              src="/logo.png"
              alt="JointXperts"
              fill
              className="object-contain relative z-10"
              priority
            />
          </motion.div>

          {/* Typewriter tagline */}
          <motion.p
            className="text-white/70 text-sm font-mono tracking-[0.18em] uppercase overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.4 }}
          >
            {TAGLINE.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.5 + i * 0.038,
                  duration: 0.01,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="w-56 h-[3px] rounded-full bg-white/10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#2e8b57] to-[#3aad6e]"
              style={{ width: barWidth }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
