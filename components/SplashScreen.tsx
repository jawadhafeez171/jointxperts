"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ANIM_MS = 4000;  // one-cycle duration of loader.webp at 2× speed
const FADE_MS = 600;

export default function SplashScreen() {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);
  const [barWidth, setBarWidth] = useState("0%");

  useEffect(() => {
    // Double-rAF guarantees the browser paints 0% before the transition starts
    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setBarWidth("100%");
      });
    });

    const t1 = setTimeout(() => setFading(true), ANIM_MS);
    const t2 = setTimeout(() => setGone(true), ANIM_MS + FADE_MS);

    return () => {
      cancelAnimationFrame(raf1);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white gap-8 transition-opacity"
      style={{
        opacity: fading ? 0 : 1,
        transitionDuration: `${FADE_MS}ms`,
        transitionTimingFunction: "ease-out",
      }}
    >
      {/* Logo */}
      <div className="relative w-52 h-14">
        <Image src="/logo.jpeg" alt="JointXperts" fill className="object-contain" priority />
      </div>

      {/* Animation */}
      <img
        src="/loader.webp"
        alt="Loading…"
        width={240}
        height={135}
        className="rounded-2xl"
        style={{ imageRendering: "auto" }}
      />

      {/* Progress bar */}
      <div className="w-56 h-1.5 rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-[#2e8b57]"
          style={{
            width: barWidth,
            transition: `width ${ANIM_MS}ms linear`,
          }}
        />
      </div>
    </div>
  );
}
