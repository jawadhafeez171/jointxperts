"use client";

import { useBooking } from "@/context/BookingContext";

export default function BlogBookingCTA() {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={() => openBooking("General Consultation")}
      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2e8b57] text-white font-semibold hover:bg-[#1f6b3d] transition-all hover:shadow-lg hover:shadow-green-900/20 cursor-pointer"
    >
      Book a Consultation Now
    </button>
  );
}
