"use client";

import { useBooking } from "@/context/BookingContext";
import { ArrowRight } from "lucide-react";

export default function TreatmentBookingCTA({ treatmentTitle }: { treatmentTitle: string }) {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={() => openBooking(treatmentTitle)}
      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2e8b57] text-white font-semibold text-sm hover:bg-[#1f6b3d] transition-all hover:shadow-lg shadow-green-900/20 cursor-pointer"
    >
      Book Appointment
      <ArrowRight className="w-4 h-4" />
    </button>
  );
}
