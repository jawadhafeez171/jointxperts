import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        has: [{ type: "query", key: "service", value: "knee-replacement" }],
        destination: "/treatments/knee-replacement-surgery-bangalore",
        permanent: true,
      },
      {
        source: "/services",
        has: [{ type: "query", key: "service", value: "hip-replacement" }],
        destination: "/treatments/hip-replacement-surgery-bangalore",
        permanent: true,
      },
      {
        source: "/services",
        has: [{ type: "query", key: "service", value: "arthroscopy" }],
        destination: "/treatments/arthroscopy-surgery-bangalore",
        permanent: true,
      },
      {
        source: "/services",
        has: [{ type: "query", key: "service", value: "spine-care" }],
        destination: "/treatments/spine-care-treatment-bangalore",
        permanent: true,
      },
      {
        source: "/services",
        has: [{ type: "query", key: "service", value: "joint-care" }],
        destination: "/treatments/joint-care-treatment-bangalore",
        permanent: true,
      },
      {
        source: "/services",
        has: [{ type: "query", key: "service", value: "fracture-management" }],
        destination: "/treatments/fracture-management-treatment-bangalore",
        permanent: true,
      },
      {
        source: "/services",
        has: [{ type: "query", key: "service", value: "spine-injury-care" }],
        destination: "/treatments/spine-injury-treatment-bangalore",
        permanent: true,
      },
      {
        source: "/services",
        has: [{ type: "query", key: "service", value: "pain-relief" }],
        destination: "/treatments/orthopedic-pain-relief-bangalore",
        permanent: true,
      },
      {
        source: "/services",
        has: [{ type: "query", key: "service", value: "mobility-restoration" }],
        destination: "/treatments/mobility-restoration-rehabilitation-bangalore",
        permanent: true,
      },
      {
        source: "/services",
        has: [{ type: "query", key: "service", value: "knee-pain-arthritis" }],
        destination: "/treatments/knee-pain-arthritis-treatment-bangalore",
        permanent: true,
      },
      {
        source: "/services",
        has: [{ type: "query", key: "service", value: "ligament-injuries" }],
        destination: "/treatments/ligament-injury-acl-pcl-treatment-bangalore",
        permanent: true,
      },
      // Local SEO location alias redirects
      {
        source: "/orthopedic-doctor-in-hebbal",
        destination: "/locations/hebbal",
        permanent: true,
      },
      {
        source: "/orthopedic-doctor-in-nagavara",
        destination: "/locations/nagavara",
        permanent: true,
      },
      {
        source: "/orthopedic-doctor-in-new-bel-road",
        destination: "/locations/new-bel-road",
        permanent: true,
      },
      {
        source: "/orthopedic-doctor-in-seshadripuram",
        destination: "/locations/seshadripuram",
        permanent: true,
      },
      {
        source: "/orthopedic-doctor-in-rt-nagar",
        destination: "/locations/rt-nagar",
        permanent: true,
      },
      {
        source: "/orthopedic-doctor-in-sultanpalya",
        destination: "/locations/rt-nagar",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
