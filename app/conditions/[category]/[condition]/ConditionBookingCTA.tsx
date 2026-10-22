"use client";

import { useBooking } from "@/context/BookingContext";

export default function ConditionBookingCTA({ conditionTitle }: { conditionTitle: string }) {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={() => openBooking(conditionTitle)}
      className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#2e8b57] text-white font-bold hover:bg-[#1f6b3d] transition-all shadow-lg hover:shadow-green-900/30 cursor-pointer"
    >
      Book a Consultation
    </button>
  );
}
