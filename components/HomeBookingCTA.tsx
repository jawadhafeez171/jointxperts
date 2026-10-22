"use client";

import { useBooking } from "@/context/BookingContext";

export default function HomeBookingCTA() {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={() => openBooking("General Consultation")}
      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2e8b57] text-white font-semibold text-base hover:bg-[#1f6b3d] transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/40 cursor-pointer"
    >
      Book Appointment
    </button>
  );
}
