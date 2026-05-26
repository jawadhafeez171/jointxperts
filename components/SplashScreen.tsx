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
const DURATION_MS = 2800; // slightly longer to appreciate the logo

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
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white gap-12"
          // Exit: Fade out gently instead of slide for a cleaner transition from light to light
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          {/* Subtle radial glow to give depth to the white background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] rounded-full bg-[#f0faf5] blur-[120px]" />
          </div>

          {/* Logo Container (proportional to 1592x988) */}
          <motion.div
            className="relative w-[340px] h-[210px] md:w-[420px] md:h-[260px]"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/logo2.webp"
              alt="JointXperts"
              fill
              className="object-contain relative z-10"
              priority
            />
          </motion.div>

          <div className="flex flex-col items-center gap-6 relative z-10">
            {/* Typewriter tagline */}
            <motion.p
              className="text-[#0f2d5e] text-sm md:text-base font-semibold tracking-[0.2em] uppercase overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              {TAGLINE.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.7 + i * 0.04,
                    duration: 0.2,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>

            {/* Premium Progress bar */}
            <motion.div
              className="w-64 h-1 rounded-full bg-gray-100 overflow-hidden shadow-inner"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#0f2d5e] to-[#2e8b57]"
                style={{ width: barWidth }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
