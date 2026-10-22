"use client";

import { useBooking } from "@/context/BookingContext";
import { ArrowRight, Calendar } from "lucide-react";

export default function LocationBookingCTA({ locationName }: { locationName: string }) {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={() => openBooking(`Consultation at ${locationName}`)}
      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2e8b57] text-white font-bold text-sm hover:bg-[#257247] transition-all hover:shadow-lg shadow-green-900/20 cursor-pointer hover:scale-105"
    >
      <Calendar className="w-4 h-4" />
      Book Appointment at this Clinic
      <ArrowRight className="w-4 h-4 ml-1" />
    </button>
  );
}
