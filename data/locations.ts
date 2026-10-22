export interface LocationData {
  id: string;
  slug: string;
  name: string;
  area: string;
  zone: string;
  seoH1: string;
  metaTitle: string;
  metaDescription: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    landmark: string;
  };
  phone: string;
  timings: string[];
  transitAndMetro: string;
  parkingInfo: string;
  mapEmbedUrl: string;
  googleMapsUrl: string;
  overview: string;
  treatmentsOffered: string[];
  facilityHighlights: string[];
  localReviews: {
    author: string;
    locality: string;
    rating: number;
    text: string;
    date: string;
  }[];
  nearbyAreasServed: string[];
}

export const locationsData: LocationData[] = [
  {
    id: "hebbal",
    slug: "hebbal",
    name: "Atharva Multispeciality Hospital",
    area: "Hebbal",
    zone: "Bangalore North",
    seoH1: "Best Orthopedic Doctor in Hebbal, Bangalore North | Dr. Syed Parveez Ahmed",
    metaTitle: "Orthopedic Doctor in Hebbal, Bangalore North | Dr. Syed Parveez Ahmed",
    metaDescription: "Consult top orthopedic surgeon Dr. Syed Parveez Ahmed at Atharva Hospital Hebbal. Knee & hip replacement, fracture care & arthroscopy. Mon-Sat OPD.",
    address: {
      line1: "#12, 1st Main Road, Vinayakanagar",
      line2: "Hebbal",
      city: "Bangalore",
      state: "Karnataka",
      postalCode: "560024",
      landmark: "Near Vinayakanagar Bus Stop & 400m from Hebbal Flyover junction"
    },
    phone: "+91 88672 70633",
    timings: [
      "Monday to Saturday: 10:00 AM – 1:00 PM (Morning OPD)",
      "Monday to Saturday: 6:00 PM – 8:00 PM (Evening OPD)",
      "Sunday: By Emergency Appointment Only"
    ],
    transitAndMetro:
      "Conveniently situated 400 meters from the Hebbal Flyover on Bellary Road. Easily accessible via BMTC airport feeder buses (KIA-9, KIA-14) and Hebbal Railway Station (800m). Direct road connectivity from Outer Ring Road, Sahakarnagar, and Kempapura.",
    parkingInfo:
      "Dedicated multi-level hospital basement parking with separate bays for two-wheelers and four-wheelers. Valet assistance, smooth wheelchair ramps, and direct stretcher elevator access to OPD rooms.",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.974864293931!2d77.5944!3d13.0360!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17937740ffb5%3A0x6b490d16568dbfc4!2sHebbal%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsUrl: "https://maps.app.goo.gl/dzvjfqa8Y3TXfJEK9",
    overview:
      "Atharva Multispeciality Hospital serves as Dr. Syed Parveez Ahmed's primary orthopedic surgical and consultation hub in Bangalore North. Equipped with state-of-the-art modular laminar airflow operation theatres, in-house digital 500mA X-rays, high-dependency ICU support, and a dedicated joint rehabilitation department, this hospital delivers complete surgical and non-surgical orthopedic care for Hebbal, Sahakarnagar, Kempapura, and surrounding North Bangalore neighborhoods.",
    treatmentsOffered: [
      "Subvastus Total Knee Replacement (TKA)",
      "Minimally Invasive Total Hip Replacement (THR)",
      "Keyhole Arthroscopic ACL & Meniscus Surgery",
      "Emergency Fracture Management & ORIF Trauma Surgery",
      "Biological PRP & Hyaluronic Acid Injections",
      "Post-Operative Inpatient Physiotherapy & Rehabilitation"
    ],
    facilityHighlights: [
      "Primary surgical base with Ultra-clean Laminar Airflow Operation Theatres",
      "24/7 Trauma, Accident & Emergency Department",
      "Cashless TPA Desk for all major private and corporate health insurances",
      "In-house digital radiography (X-ray) and pathology laboratory"
    ],
    localReviews: [
      {
        author: "Naveen Kumar R.",
        locality: "Hebbal Kempapura",
        rating: 5,
        text: "Dr. Syed Parveez Ahmed performed knee replacement surgery on my mother at Atharva Hospital Hebbal. His muscle-sparing technique is unbelievable — she was walking with a walker the next morning! The hospital staff and doctor's personal follow-up were outstanding.",
        date: "September 2026"
      },
      {
        author: "Meenakshi Sundaram",
        locality: "Sahakarnagar",
        rating: 5,
        text: "I consulted Dr. Ahmed for severe shoulder pain that other clinics recommended surgery for. He thoroughly evaluated my MRI and treated it with hydrodilatation and targeted exercises. Pain was gone in 3 weeks without surgery. Best orthopedic doctor in Hebbal!",
        date: "August 2026"
      },
      {
        author: "Farhan Qureshi",
        locality: "Vinayakanagar, Hebbal",
        rating: 5,
        text: "Had a fracture in my wrist after a bike skid. Dr. Ahmed set it perfectly with a lightweight fiberglass cast. Zero complications and recovery was faster than expected. Highly recommended in North Bangalore.",
        date: "July 2026"
      }
    ],
    nearbyAreasServed: ["Hebbal", "Kempapura", "Sahakarnagar", "Nagavara", "Ganga Nagar", "Kodigehalli", "Judicial Layout", "Yelahanka"]
  },
  {
    id: "nagavara",
    slug: "nagavara",
    name: "Medstar Hospital",
    area: "Nagavara",
    zone: "Bangalore North",
    seoH1: "Best Orthopedic Doctor in Nagavara & Manyata Tech Park | Dr. Syed Parveez Ahmed",
    metaTitle: "Orthopedic Doctor in Nagavara & Manyata Tech Park | Dr. Syed Parveez Ahmed",
    metaDescription: "Consult expert orthopedic specialist Dr. Syed Parveez Ahmed at Medstar Hospital Nagavara. Spine care, sports injuries & joint pain near Manyata Tech Park.",
    address: {
      line1: "Outer Ring Road, Near Manyata Tech Park Gate 1",
      line2: "Nagavara",
      city: "Bangalore",
      state: "Karnataka",
      postalCode: "560045",
      landmark: "Adjacent to Manyata Tech Park Gate 1 and Nagavara Junction"
    },
    phone: "+91 88672 70633",
    timings: [
      "Monday to Saturday: 5:00 PM – 6:30 PM (Evening Consultation)"
    ],
    transitAndMetro:
      "Strategically situated on Outer Ring Road right outside Manyata Tech Park. Rapid connectivity via Outer Ring Road buses (500 series) and direct access from Hennur, Thanisandra, and HBR Layout. Upcoming Nagavara Metro Interchange is within walking distance.",
    parkingInfo:
      "Spacious on-campus surface visitor parking bays with dedicated security marshals. Easy drive-in access directly off the ORR service road.",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.685324330103!2d77.6180!3d13.0450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176b6d5c5f49%3A0xa6187747e9cbcf87!2sNagavara%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsUrl: "https://maps.app.goo.gl/dzvjfqa8Y3TXfJEK9",
    overview:
      "Medstar Hospital in Nagavara offers premier orthopedic consultations tailored for tech professionals, local residents, and athletes across the Manyata Tech Park corridor. Dr. Syed Parveez Ahmed provides specialized treatments for desk-related postural spine disorders, gym injuries, knee pain, and acute bone fractures, delivering swift diagnostic evaluations with minimal clinic waiting times.",
    treatmentsOffered: [
      "Desk-Worker Ergonomic Back Pain & Sciatica Care",
      "Sports Medicine & Keyhole Arthroscopy Consultations",
      "Platelet-Rich Plasma (PRP) Regenerative Injections",
      "Knee Osteoarthritis Staging & Lubrication Injections",
      "Acute Fracture Assessment, Splinting & Casting",
      "Second Opinions for Joint Replacement Surgery"
    ],
    facilityHighlights: [
      "Prime tech corridor location directly outside Manyata Tech Park",
      "Convenient evening timings for working software professionals",
      "Digital X-ray imaging and quick orthopedic consultations",
      "Seamless surgical admission transfer to Atharva or Trinity Central Hospital"
    ],
    localReviews: [
      {
        author: "Karthik Swaminathan",
        locality: "Manyata Tech Park / Nagavara",
        rating: 5,
        text: "Working 10 hours on a laptop caused unbearable lower back and sciatica pain. Dr. Ahmed at Medstar Nagavara was wonderful — explained the exact disc pressure mechanism and put me on a posture correction and physio program. Back to 100% within 4 weeks!",
        date: "September 2026"
      },
      {
        author: "Pooja Reddy",
        locality: "HBR Layout",
        rating: 5,
        text: "Twisted my ankle during badminton in Hennur. Dr. Ahmed assessed ligament stability and placed a functional splint. Appreciated that he did not order unnecessary scans. Very honest and skilled orthopedic doctor.",
        date: "August 2026"
      },
      {
        author: "Zameer Pasha",
        locality: "Thanisandra Main Road",
        rating: 5,
        text: "Took my father for knee pain consultation. Dr. Ahmed was very patient in listening and suggested viscosupplementation injections. Great relief for my dad's arthritis. Best orthopedic specialist near Manyata.",
        date: "June 2026"
      }
    ],
    nearbyAreasServed: ["Nagavara", "Manyata Tech Park", "HBR Layout", "Thanisandra", "Hennur", "Kalyan Nagar", "Kammanahalli", "Venkateshapura"]
  },
  {
    id: "new-bel-road",
    slug: "new-bel-road",
    name: "Apollo Clinic",
    area: "New BEL Road",
    zone: "Bangalore North",
    seoH1: "Best Orthopedic Doctor in New BEL Road & RMV 2nd Stage | Dr. Syed Parveez Ahmed",
    metaTitle: "Orthopedic Doctor in New BEL Road & RMV | Dr. Syed Parveez Ahmed",
    metaDescription: "Consult senior orthopedic surgeon Dr. Syed Parveez Ahmed at Apollo Clinic New BEL Road. Expert joint pain, arthritis & spine consultation. Tue, Thu, Sat OPD.",
    address: {
      line1: "#82, New BEL Road, RMV 2nd Stage",
      line2: "Opp. Ramaiah Memorial Hospital junction",
      city: "Bangalore",
      state: "Karnataka",
      postalCode: "560054",
      landmark: "Near CPRI Gate & Ramaiah Hospital intersection on New BEL Road"
    },
    phone: "+91 88672 70633",
    timings: [
      "Tuesday, Thursday, Saturday: 4:30 PM – 6:00 PM"
    ],
    transitAndMetro:
      "Prime location on commercial New BEL Road in RMV 2nd Stage. Easily accessible from Sadashivanagar, Mathikere, Sanjaynagar, and Yeshwanthpur. Sandal Soap Factory and Yeshwanthpur Metro stations are just 10 minutes away.",
    parkingInfo:
      "Reserved basement customer parking with direct elevator access to the Apollo Clinic consultation reception on the 1st floor. Dedicated security valet support.",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.218552109503!2d77.5665!3d13.0315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17c5b6b6b6b7%3A0x6b490d16568dbfc4!2sNew%20BEL%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsUrl: "https://maps.app.goo.gl/dzvjfqa8Y3TXfJEK9",
    overview:
      "Apollo Clinic on New BEL Road offers a premium, modern clinical environment for orthopedic consultations by Dr. Syed Parveez Ahmed. Patients from RMV Stage 2, Sadashivanagar, and Sanjaynagar benefit from comprehensive musculoskeletal evaluations, advanced digital imaging, bone health screening, and personalized non-surgical treatment plans backed by Apollo's world-class clinical standards.",
    treatmentsOffered: [
      "Osteoarthritis Staging & Joint Preservation Therapies",
      "Subvastus Total Knee Replacement Consultations",
      "Shoulder Rotator Cuff & Frozen Shoulder Evaluations",
      "Osteoporosis & Bone Mineral Density Screening",
      "Sports Injury Physical Assessments",
      "Custom Unloader Knee Brace Prescriptions"
    ],
    facilityHighlights: [
      "Prestigious Apollo healthcare infrastructure and clinical protocols",
      "Digital X-ray, DEXA Bone Density Scan, and Comprehensive Lab on-site",
      "Comfortable air-conditioned OPD waiting lounge with minimal queues",
      "Central North Bangalore accessibility from Sadashivanagar and Mathikere"
    ],
    localReviews: [
      {
        author: "Dr. Anirudh Rao",
        locality: "Sadashivanagar",
        rating: 5,
        text: "As a physician myself, I am very discerning about who I consult for joint issues. Dr. Syed Parveez Ahmed at Apollo Clinic New BEL Road demonstrated exceptional diagnostic acumen and patient empathy for my severe knee stiffness. Truly top-tier orthopedic care.",
        date: "October 2026"
      },
      {
        author: "Shanti Narayanan",
        locality: "RMV 2nd Stage",
        rating: 5,
        text: "Visited for persistent shoulder pain. Dr. Ahmed took time to review previous scans and explained every option clearly. Did not rush into surgery. The Apollo clinic setup on New BEL road is very comfortable and efficient.",
        date: "August 2026"
      },
      {
        author: "Vikram Shenoy",
        locality: "Sanjaynagar",
        rating: 5,
        text: "Consulted Dr. Ahmed for my mother's bilateral knee arthritis. His advice was crisp and reassuring. Highly recommend him for anyone seeking senior orthopedic opinions in North Bangalore.",
        date: "July 2026"
      }
    ],
    nearbyAreasServed: ["New BEL Road", "RMV 2nd Stage", "Sadashivanagar", "Sanjaynagar", "Mathikere", "Yeshwanthpur", "Gokula", "Dollars Colony"]
  },
  {
    id: "seshadripuram",
    slug: "seshadripuram",
    name: "Trinity Central Hospital",
    area: "Seshadripuram",
    zone: "Central Bengaluru",
    seoH1: "Best Orthopedic Doctor in Seshadripuram, Central Bengaluru | Dr. Syed Parveez Ahmed",
    metaTitle: "Orthopedic Doctor in Seshadripuram, Bengaluru | Dr. Syed Parveez Ahmed",
    metaDescription: "Consult top joint replacement surgeon Dr. Syed Parveez Ahmed at Trinity Hospital Seshadripuram. Knee & hip replacement, spine care & trauma. Mon, Wed, Fri.",
    address: {
      line1: "#45, 2nd Main Road",
      line2: "Seshadripuram",
      city: "Bangalore",
      state: "Karnataka",
      postalCode: "560020",
      landmark: "Near Seshadripuram College & 650m from Mantri Square Sampige Road Metro"
    },
    phone: "+91 88672 70633",
    timings: [
      "Monday, Wednesday, Friday: 2:00 PM – 4:00 PM (Afternoon OPD & Surgeries)"
    ],
    transitAndMetro:
      "Prime Central Bengaluru location adjacent to Malleshwaram and Kumara Park. Just 650 meters from Mantri Square Sampige Road Metro Station (Green Line). Bangalore City Railway Station / Majestic Bus Stand is only 1.8 km away.",
    parkingInfo:
      "Dedicated hospital parking lot with full-time security guards and patient drop-off bay. Ramp access, wheelchairs, and stretcher-friendly hospital elevators directly to the orthopedic suite.",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.674912839213!2d77.5750!3d12.9930!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1641b6b6b6b7%3A0x6b490d16568dbfc4!2sSeshadripuram%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsUrl: "https://maps.app.goo.gl/dzvjfqa8Y3TXfJEK9",
    overview:
      "Trinity Central Hospital is Dr. Syed Parveez Ahmed's central surgical anchor in Bengaluru, serving residents across Seshadripuram, Malleshwaram, Kumara Park, Rajajinagar, and Majestic. Featuring advanced multi-disciplinary surgical suites, modern arthroplasty instrumentation, intensive care monitoring, and cashless mediclaim support, Trinity Central provides full-spectrum joint replacement and trauma surgery.",
    treatmentsOffered: [
      "Total & Partial Knee Replacement (Subvastus Technique)",
      "Total Hip Arthroplasty (Ceramic & Muscle-Sparing)",
      "Complex Trauma Surgery & Non-Union Fracture Reconstruction",
      "Minimally Invasive Spine Microdiscectomy",
      "Arthroscopic Keyhole Joint Reconstructions",
      "Geriatric Orthopedic Care & Fragility Fracture Fixation"
    ],
    facilityHighlights: [
      "Full-fledged hospital with modular operating suites and surgical ICU",
      "Close proximity to Mantri Square Metro (Green Line) and Majestic",
      "Cashless hospitalization for all private insurers and TPA networks",
      "Inpatient rooms ranging from economy to single private executive suites"
    ],
    localReviews: [
      {
        author: "Ranganathan G.",
        locality: "Malleshwaram",
        rating: 5,
        text: "My hip replacement was done by Dr. Syed Parveez Ahmed at Trinity Central Hospital Seshadripuram. Before surgery I could barely walk due to AVN. Today, 3 months post-op, I walk 4 km daily without any limp or pain. Excellent hospital and truly gifted surgeon.",
        date: "September 2026"
      },
      {
        author: "Geetha K.",
        locality: "Kumara Park West",
        rating: 5,
        text: "Dr. Ahmed treated my elderly father's femur fracture at Trinity Hospital. His calm demeanor and surgical precision gave our family tremendous confidence. Recovery was seamless. Very grateful.",
        date: "August 2026"
      },
      {
        author: "Sanjay Bhandari",
        locality: "Rajajinagar",
        rating: 5,
        text: "Top orthopedic specialist in Central Bangalore. Very transparent about surgery costs and insurance approvals. Hospital staff was courteous and care was excellent.",
        date: "July 2026"
      }
    ],
    nearbyAreasServed: ["Seshadripuram", "Malleshwaram", "Kumara Park", "Rajajinagar", "Vasanth Nagar", "Majestic", "Shivajinagar", "Gandhinagar"]
  },
  {
    id: "rt-nagar",
    slug: "rt-nagar",
    name: "Shifa Hospital & Poly Clinic",
    area: "RT Nagar / Sultanpalya",
    zone: "Bangalore North",
    seoH1: "Best Orthopedic Doctor in RT Nagar & Sultanpalya | Dr. Syed Parveez Ahmed",
    metaTitle: "Orthopedic Doctor in RT Nagar & Sultanpalya | Dr. Syed Parveez Ahmed",
    metaDescription: "Consult senior orthopedic surgeon Dr. Syed Parveez Ahmed at Shifa Hospital Sultanpalya / RT Nagar. Joint pain, fracture care & arthritis. Mon, Wed, Fri evening OPD.",
    address: {
      line1: "Sultanpalya Main Road, RT Nagar Post",
      line2: "Opposite Darga Bus Stop",
      city: "Bangalore",
      state: "Karnataka",
      postalCode: "560032",
      landmark: "Near RT Nagar BDA Complex & Sultanpalya Main Market"
    },
    phone: "+91 88672 70633",
    timings: [
      "Monday, Wednesday, Friday: 7:30 PM – 9:00 PM (Evening Clinic)"
    ],
    transitAndMetro:
      "Centrally situated on bustling Sultanpalya Main Road in RT Nagar. Easily reachable via BMTC buses connecting Shivajinagar, Hebbal, and Cantonment (routes 111, 114, 280). Bangalore Cantonment Railway Station is just 3 km away.",
    parkingInfo:
      "Dedicated street-level clinic parking bay with easy ground-floor entrance access, making it effortless for elderly patients and individuals on crutches.",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.351234567890!2d77.6000!3d13.0185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16e5b6b6b6b7%3A0x6b490d16568dbfc4!2sR.T.%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsUrl: "https://maps.app.goo.gl/dzvjfqa8Y3TXfJEK9",
    overview:
      "Shifa Hospital & Poly Clinic serves as a trusted community orthopedic clinic on Sultanpalya Main Road in RT Nagar. Dr. Syed Parveez Ahmed conducts convenient evening consultations for neighborhood residents, offering rapid diagnosis of acute sports sprains, fracture casting, joint injections, and ongoing arthritis care without the hassle of long hospital commutes.",
    treatmentsOffered: [
      "Evening Orthopedic Consultations & Joint Checkups",
      "Fracture Plaster Application, Splinting & Cast Removal",
      "Hyaluronic Acid & Corticosteroid Injections for Knee Arthritis",
      "Back Pain, Cervical Spondylosis & Posture Management",
      "Minor Orthopedic Wound Care & Suture Removals",
      "Surgical Consultations & Hospital Admission Guidance"
    ],
    facilityHighlights: [
      "Convenient evening consultation hours (7:30 PM – 9:00 PM)",
      "Direct ground floor wheelchair-accessible entrance",
      "Affordable community healthcare with senior specialist guidance",
      "Pharmacy and basic laboratory diagnostics on premises"
    ],
    localReviews: [
      {
        author: "Mohammad Irfan",
        locality: "Sultanpalya, RT Nagar",
        rating: 5,
        text: "Dr. Syed Parveez Ahmed is a blessing for RT Nagar residents. Being able to consult such a senior joint replacement specialist in the evening right on Sultanpalya Main Road saved us so much travel time. He treated my father's knee swelling with great care.",
        date: "September 2026"
      },
      {
        author: "Ayesha Siddiqua",
        locality: "RT Nagar Post",
        rating: 5,
        text: "Very gentle and patient doctor. He explained my frozen shoulder condition clearly and gave an injection that immediately relieved the severe pain. Highly recommended in RT Nagar.",
        date: "August 2026"
      },
      {
        author: "Basavaraj Patil",
        locality: "Ganganagar / RT Nagar",
        rating: 5,
        text: "Consulted for wrist fracture after a household fall. Cast was applied neatly and healing was monitored carefully. Very honest doctor with reasonable consultation fees.",
        date: "June 2026"
      }
    ],
    nearbyAreasServed: ["RT Nagar", "Sultanpalya", "Ganganagar", "Dinnur", "Matadahalli", "Kaval Byrasandra", "Manorayanapalya", "Hebbal"]
  }
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  const clean = slug.toLowerCase().trim();
  return locationsData.find((loc) => loc.slug === clean || loc.id === clean);
}
