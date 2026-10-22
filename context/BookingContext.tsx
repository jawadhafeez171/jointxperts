"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface BookingContextType {
  isOpen: boolean;
  concern: string;
  openBooking: (concern?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [concern, setConcern] = useState("");
  const searchParams = useSearchParams();

  // If a user navigates to the site via an external URL with ?booking=true, respect it
  useEffect(() => {
    if (searchParams?.get("booking") === "true") {
      setIsOpen(true);
      const urlConcern = searchParams.get("concern");
      if (urlConcern) {
        setConcern(urlConcern);
      }
    }
  }, [searchParams]);

  const openBooking = (initialConcern?: string) => {
    if (initialConcern) {
      setConcern(initialConcern);
    }
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
    setConcern("");
  };

  return (
    <BookingContext.Provider value={{ isOpen, concern, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
