import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import SplashScreen from "@/components/SplashScreen";
import FloatingBookButton from "@/components/FloatingBookButton";
import { Suspense } from "react";
import BookingModal from "@/components/BookingModal";
import { BookingProvider } from "@/context/BookingContext";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.jointxperts.in"),
  title: "JointXperts | Dr. Syed Parveez Ahmed — Orthopedic Surgeon in Bangalore & Bengaluru",
  description:
    "Leading orthopedic & joint replacement care by Dr. Syed Parveez Ahmed across Bangalore North & Central Bengaluru. Expert knee, hip, spine, and sports injury treatments. Clinics in Hebbal, Nagavara, New BEL Road, Seshadripuram & Malleshwaram.",
  icons: { icon: "/favicon.ico" },
  verification: {
    google: "eM33ov6Ql0Bx2EUNtCWJIgU1bZIwJdzNElJtm0Yj4JM",
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru, Karnataka, India",
    "geo.position": "13.0358;77.5970",
    "ICBM": "13.0358, 77.5970",
    "coverage": "Bangalore, Bengaluru, Bangalore North, Central Bengaluru, Hebbal, Nagavara, New BEL Road, Seshadripuram, Malleshwaram, RT Nagar, Sanjaynagar, Sadashivanagar, Rajajinagar, Yelahanka",
  },
  openGraph: {
    title: "JointXperts | Dr. Syed Parveez Ahmed — Orthopedic Surgeon in Bangalore & Bengaluru",
    description:
      "Expert orthopedic and joint replacement care across Bangalore North & Central Bengaluru by Dr. Syed Parveez Ahmed. Clinics in Hebbal, Nagavara, New BEL Road, Seshadripuram & Malleshwaram.",
    url: "https://www.jointxperts.in",
    siteName: "JointXperts",
    images: [
      {
        url: "/photo1.webp",
        width: 1200,
        height: 630,
        alt: "JointXperts | Dr. Syed Parveez Ahmed — Orthopedic & Joint Replacement Surgeon Bangalore & Bengaluru",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JointXperts | Dr. Syed Parveez Ahmed — Orthopedic Surgeon in Bangalore & Bengaluru",
    description:
      "Expert orthopedic care in Bangalore North & Central Bengaluru by Dr. Syed Parveez Ahmed. Specialising in knee, hip, spine & sports injuries.",
    images: ["/photo1.webp"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://www.jointxperts.in/#physician",
      "name": "Dr. Syed Parveez Ahmed",
      "jobTitle": "Consultant Orthopedic & Joint Replacement Surgeon",
      "medicalSpecialty": [
        "Orthopedic",
        "JointReplacement",
        "SportsMedicine",
        "SpineSurgery"
      ],
      "description":
        "Consultant Orthopedic and Joint Replacement Surgeon specializing in Knee Replacement, Hip Replacement, Arthroscopy, Spine Care, and Trauma Surgery with consultations across Bangalore North and Central Bengaluru.",
      "url": "https://www.jointxperts.in",
      "image": "https://www.jointxperts.in/photo1.webp",
      "telephone": "+91 99017 38622",
      "areaServed": [
        { "@type": "City", "name": "Bangalore" },
        { "@type": "City", "name": "Bengaluru" },
        { "@type": "AdministrativeArea", "name": "Bangalore North" },
        { "@type": "AdministrativeArea", "name": "Bengaluru North" },
        { "@type": "AdministrativeArea", "name": "Bangalore Central" },
        { "@type": "AdministrativeArea", "name": "Bengaluru Central" },
        { "@type": "Place", "name": "Hebbal" },
        { "@type": "Place", "name": "Nagavara" },
        { "@type": "Place", "name": "New BEL Road" },
        { "@type": "Place", "name": "Seshadripuram" },
        { "@type": "Place", "name": "Malleshwaram" },
        { "@type": "Place", "name": "RT Nagar" },
        { "@type": "Place", "name": "Sanjaynagar" },
        { "@type": "Place", "name": "Sadashivanagar" },
        { "@type": "Place", "name": "RMV Extension" },
        { "@type": "Place", "name": "Rajajinagar" },
        { "@type": "Place", "name": "Yelahanka" },
        { "@type": "Place", "name": "Mathikere" },
        { "@type": "Place", "name": "Manyata Tech Park" },
        { "@type": "Place", "name": "Kalyan Nagar" },
        { "@type": "Place", "name": "Hennur" }
      ]
    },
    {
      "@type": "MedicalOrganization",
      "@id": "https://www.jointxperts.in/#organization",
      "name": "JointXperts",
      "url": "https://www.jointxperts.in",
      "logo": "https://www.jointxperts.in/logo.webp",
      "department": [
        {
          "@type": "MedicalClinic",
          "name": "Atharva Multispeciality Hospital — JointXperts Hebbal (Bangalore North)",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "20/2, Guddadhalli Main Rd, near Aryan tower, Kempanna Layout, Hebbal",
            "addressLocality": "Bengaluru",
            "addressRegion": "Karnataka",
            "postalCode": "560032",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 13.0358,
            "longitude": 77.597
          }
        },
        {
          "@type": "MedicalClinic",
          "name": "Trinity Central Hospital — JointXperts Seshadripuram (Bangalore Central)",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Swastik Circle, 139, Subedar Chatram Road, Seshadripuram",
            "addressLocality": "Bengaluru",
            "addressRegion": "Karnataka",
            "postalCode": "560020",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 12.9904,
            "longitude": 77.5714
          }
        },
        {
          "@type": "MedicalClinic",
          "name": "Apollo Clinic New BEL Road — JointXperts (Bangalore North)",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "No.1, Vaccum House, New BEL Road, RMV 2nd Stage, Chikkamaranahalli",
            "addressLocality": "Bengaluru",
            "addressRegion": "Karnataka",
            "postalCode": "560054",
            "addressCountry": "IN"
          }
        },
        {
          "@type": "MedicalClinic",
          "name": "Darr-Ul-Shifa Clinic — JointXperts Nagavara (Bangalore North)",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Anjuman Manzil, Govindapura Main Rd, Nagavara",
            "addressLocality": "Bengaluru",
            "addressRegion": "Karnataka",
            "postalCode": "560045",
            "addressCountry": "IN"
          }
        },
        {
          "@type": "MedicalClinic",
          "name": "Ayesha Polyclinic — JointXperts Sultanpalya (Bangalore North)",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "26, KHB Colony Main Rd, Ayyappa Layout, Sultanpalya, Hebbal",
            "addressLocality": "Bengaluru",
            "addressRegion": "Karnataka",
            "postalCode": "560032",
            "addressCountry": "IN"
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full scroll-smooth antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <BookingProvider>
            <SplashScreen />
            <Navbar />
            <main className="flex-1 pb-20 lg:pb-0" style={{ paddingBottom: 'calc(5rem + env(safe-area-inset-bottom))' }}>{children}</main>
            <FloatingBookButton />
            <Footer />
            <BottomNav />
            <BookingModal />
          </BookingProvider>
        </Suspense>
      </body>
    </html>
  );
}
