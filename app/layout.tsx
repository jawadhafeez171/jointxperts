import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import SplashScreen from "@/components/SplashScreen";
import FloatingBookButton from "@/components/FloatingBookButton";
import { Suspense } from "react";
import BookingModal from "@/components/BookingModal";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://jointxperts.in"),
  title: "JointXperts | Dr. Syed Parveez Ahmed — Orthopedic Surgeon in Bangalore North & Central",
  description:
    "Leading orthopedic & joint replacement care by Dr. Syed Parveez Ahmed across Bangalore North & Central Bengaluru. Expert knee, hip, spine, and sports injury treatments. Clinics in Hebbal, Nagavara, New BEL Road, Seshadripuram & Malleshwaram.",
  keywords: [
    // Bangalore North areas
    "Orthopedic Surgeon Bangalore North",
    "Best Orthopedic Doctor in North Bangalore",
    "Joint Replacement Surgeon Hebbal",
    "Orthopedic Clinic Hebbal",
    "Knee Replacement Doctor Nagavara",
    "Orthopedic Doctor New BEL Road",
    "Orthopedic Doctor RMV Extension",
    "Orthopedic Clinic RT Nagar",
    "Orthopedic Doctor Sultanpalya",
    "Orthopedic Specialist Sanjaynagar",
    "Bone and Joint Doctor Mathikere",
    "Orthopedic Surgeon Yelahanka",
    "Orthopedic Doctor Sahakara Nagar",
    "Orthopedic Clinic Manyata Tech Park",
    "Spine Specialist North Bangalore",
    "Sports Injury Doctor Hebbal",
    "Atharva Multispeciality Hospital Hebbal",
    "Apollo Clinic BEL Road Orthopedic",
    "Darr-Ul-Shifa Clinic Nagavara",
    "Ayesha Polyclinic Sultanpalya",
    // Bangalore Central areas
    "Orthopedic Surgeon Bangalore Central",
    "Best Orthopedic Doctor Central Bangalore",
    "Orthopedic Doctor Seshadripuram",
    "Joint Replacement Surgeon Malleshwaram",
    "Knee Replacement Doctor Seshadripuram",
    "Trinity Central Hospital Seshadripuram",
    "Orthopedic Clinic Swastik Circle",
    "Orthopedic Surgeon Sadashivanagar",
    "Orthopedic Doctor Rajajinagar",
    "Orthopedic Specialist Kumara Park",
    "Orthopedic Doctor Vasanth Nagar",
    "Hip Replacement Surgeon Bangalore Central",
    // General high-intent
    "Dr Syed Parveez Ahmed",
    "JointXperts Bengaluru",
    "Orthopedic Surgeon Bengaluru",
    "Best Orthopedician in Bangalore",
    "ortho near me",
    "orthopedic doctor near me"
  ],
  icons: { icon: "/favicon.ico" },
  verification: {
    google: "eM33ov6Ql0Bx2EUNtCWJIgU1bZIwJdzNElJtm0Yj4JM",
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru, Karnataka, India",
    "geo.position": "13.0358;77.5970",
    "ICBM": "13.0358, 77.5970",
    "coverage": "Bangalore North, Bangalore Central, Hebbal, Nagavara, New BEL Road, Seshadripuram, Malleshwaram, RT Nagar, Sanjaynagar, Sadashivanagar, Rajajinagar, Yelahanka",
  },
  openGraph: {
    title: "JointXperts | Dr. Syed Parveez Ahmed — Orthopedic Surgeon in Bangalore North & Central",
    description:
      "Expert orthopedic and joint replacement care across Bangalore North & Central Bengaluru by Dr. Syed Parveez Ahmed. Clinics in Hebbal, Nagavara, New BEL Road, Seshadripuram & Malleshwaram.",
    url: "https://jointxperts.in",
    siteName: "JointXperts",
    images: [
      {
        url: "/brochure.jpg",
        width: 1200,
        height: 630,
        alt: "JointXperts | Dr. Syed Parveez Ahmed — Orthopedic & Joint Replacement Surgeon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JointXperts | Dr. Syed Parveez Ahmed — Orthopedic Surgeon in Bangalore North & Central",
    description:
      "Expert orthopedic care in Bangalore North & Central Bengaluru by Dr. Syed Parveez Ahmed. Specialising in knee, hip, spine & sports injuries.",
    images: ["/brochure.jpg"],
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
      "@id": "https://jointxperts.in/#physician",
      "name": "Dr. Syed Parveez Ahmed",
      "jobTitle": "Consultant Orthopedic & Joint Replacement Surgeon",
      "medicalSpecialty": [
        "Orthopedic",
        "JointReplacement",
        "SportsMedicine",
        "SpineSurgery"
      ],
      "description":
        "Consultant Orthopedic and Joint Replacement Surgeon specializing in Knee Replacement, Hip Replacement, Arthroscopy, Spine Care, and Trauma Surgery with consultations across Bangalore North and Bangalore Central.",
      "url": "https://jointxperts.in",
      "image": "https://jointxperts.in/doctor.jpg",
      "telephone": "+91 99017 38622",
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Bangalore North" },
        { "@type": "AdministrativeArea", "name": "Bangalore Central" },
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
      "@id": "https://jointxperts.in/#organization",
      "name": "JointXperts",
      "url": "https://jointxperts.in",
      "logo": "https://jointxperts.in/logo.webp",
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
        <SplashScreen />
        <Navbar />
        <main className="flex-1 pb-20 lg:pb-0" style={{ paddingBottom: 'calc(5rem + env(safe-area-inset-bottom))' }}>{children}</main>
        <FloatingBookButton />
        <Footer />
        <BottomNav />
        <Suspense fallback={null}>
          <BookingModal />
        </Suspense>
      </body>
    </html>
  );
}
