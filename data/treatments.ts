export interface TreatmentDeepDive {
  whoNeedsIt: {
    overview: string;
    indications: string[];
    candidateChecklist: string[];
  };
  surgicalTechnique: {
    approachName: string;
    details: string[];
    advantages: string[];
  };
  recoveryTimeline: {
    phase: string;
    milestones: string[];
  }[];
  costAnalysis: {
    priceRange: string;
    comparison: {
      procedureType: string;
      costRange: string;
      stayDuration: string;
      bestFor: string;
    }[];
    includedFactors: string[];
    insuranceAndTPA: string;
  };
  doctorCredentials: {
    fellowship: string;
    experienceYears: string;
    surgeriesCompleted: string;
    successRate: string;
    philosophy: string;
  };
  clinicsAvailable: {
    clinicName: string;
    area: string;
    highlights: string;
    schedule: string;
  }[];
}

export interface Treatment {
  id: string;
  slug: string;
  aliases: string[];
  title: string;
  tag: string;
  shortDescription: string;
  fullDescription: string;
  color: string;
  lightColor: string;
  iconColor: string;
  accent: string;
  image: string;
  recoveryTime: string;
  symptoms: string[];
  procedures: string[];
  nonSurgical: string;
  metaTitle: string;
  metaDescription: string;
  deepDive?: TreatmentDeepDive;
  faqs: { question: string; answer: string }[];
}

export const treatments: Treatment[] = [
  {
    id: "knee-replacement",
    slug: "knee-replacement-surgery-bangalore",
    aliases: ["knee-replacement", "knee-replacement-surgery"],
    title: "Knee Replacement Surgery",
    tag: "Surgical",
    shortDescription:
      "Precision total and partial knee arthroplasty using advanced minimally invasive techniques for faster recovery and lasting joint mobility.",
    fullDescription:
      "Knee replacement surgery (arthroplasty) by Dr. Syed Parveez Ahmed restores active, pain-free mobility for individuals suffering from severe knee osteoarthritis, rheumatoid arthritis, or post-traumatic joint degeneration. Utilizing subvastus quadriceps-sparing approaches and high-durability modern implants, patients experience reduced post-operative discomfort, shorter hospital stays, and rapid return to everyday activities across Bangalore North and Central Bengaluru.",
    color: "from-[#1a4a8a] to-[#0f2d5e]",
    lightColor: "bg-[#eef2ff]",
    iconColor: "text-[#1a4a8a]",
    accent: "#1a4a8a",
    image: "/services/service_knee_replacement.png",
    recoveryTime: "6 - 10 Weeks (Rapid recovery protocol)",
    symptoms: [
      "Severe knee pain during weight-bearing activities and walking",
      "Visible joint deformity (bow-legged or knock-kneed appearance)",
      "Inability to fully extend or bend the knee joint",
      "Persistent pain and stiffness preventing restful sleep",
      "Chronic swelling and inflammation unresponsive to medications"
    ],
    procedures: [
      "Subvastus (quadriceps-sparing) minimally invasive approach",
      "Total Knee Arthroplasty (TKA) with high-flexion longevity implants",
      "Unicompartmental (Partial) Knee Replacement for single-compartment arthritis",
      "Pre-operative 3D digital templating and computer-assisted alignment",
      "Day 1 early mobilization and specialized gait retraining"
    ],
    nonSurgical:
      "Before considering surgery, non-surgical options include targeted quadriceps strengthening, unloader knee bracing, hyaluronic acid viscosupplementation, and weight management programs.",
    metaTitle: "Knee Replacement Surgery in Bangalore & Bengaluru | Dr. Syed Parveez Ahmed",
    metaDescription:
      "Advanced total and partial knee replacement surgery in Bangalore North & Central Bengaluru by Dr. Syed Parveez Ahmed. Minimally invasive techniques, rapid recovery, and 98% success rate.",
    deepDive: {
      whoNeedsIt: {
        overview:
          "Total Knee Arthroplasty (TKA) is recommended when severe articular cartilage destruction causes chronic pain, joint stiffness, and physical disability that no longer respond to medications, physiotherapy, or joint injections. In Bengaluru, knee arthritis affects active adults and seniors alike, often exacerbated by lifestyle, prior sports trauma, or hereditary predisposition.",
        indications: [
          "Advanced Kellgren-Lawrence Grade 3 and Grade 4 Knee Osteoarthritis with bone-on-bone friction",
          "Severe Rheumatoid or Psoriatic Arthritis with joint space collapse and chronic synovial inflammation",
          "Post-Traumatic Arthritis resulting from previous fractures of the tibial plateau or distal femur",
          "Avascular Necrosis (AVN) causing collapse of the femoral condyle bone architecture",
          "Progressive angular knee deformities (bow-legged varus or knock-kneed valgus) exceeding 15 degrees"
        ],
        candidateChecklist: [
          "Debilitating pain when walking even 200–500 meters or climbing stairs",
          "Constant, throbbing knee ache that disrupts sleep even when resting in bed",
          "Morning knee stiffness lasting longer than 45 minutes",
          "Visible bowing or angular deformity of the leg affecting natural gait",
          "Audible bone-on-bone crepitus, grinding, and grating upon knee bending",
          "Inability to perform routine chores, travel, or walk comfortably without heavy painkiller reliance"
        ]
      },
      surgicalTechnique: {
        approachName: "Subvastus (Quadriceps-Sparing) Minimally Invasive Total Knee Arthroplasty",
        details: [
          "Traditional knee replacement surgery requires cutting through the vastus medialis tendon and dividing the quadriceps muscle mechanism (the medial parapatellar approach). While effective, cutting muscle creates substantial post-operative pain, causes temporary extensor lag (inability to lift the leg straight), and requires extended hospitalization.",
          "Dr. Syed Parveez Ahmed specializes in the subvastus (quadriceps-sparing) surgical technique. In this approach, the vastus medialis muscle is gently elevated from its underside without transecting tendon fibers. The entire quadriceps extensor mechanism remains anatomically untouched and fully functional.",
          "Using pre-operative 3D digital templating and computerized alignment guides, Dr. Ahmed removes only the worn-out 8–9 mm cartilage surface, resurfacing the femur and tibia with high-flexion medical-grade cobalt-chromium or oxidized zirconium (Oxinium) components matched to an ultra-high-molecular-weight polyethylene bearing.",
          "Because the thigh muscle is preserved, surgical blood loss is reduced by over 40%, post-operative pain scores are dramatically lower, and patients achieve active straight-leg raising on the very day of surgery."
        ],
        advantages: [
          "Zero cutting of the quadriceps muscle or patellar tendon",
          "Significantly less post-operative surgical pain and minimal narcotics requirement",
          "Bedside standing and first assisted walking within 24 hours of surgery",
          "Shorter hospital stay (average 2 to 3 days instead of 6 days)",
          "Superior long-term knee flexion up to 135–140 degrees for active lifestyles"
        ]
      },
      recoveryTimeline: [
        {
          phase: "Day 1 (Immediate Post-Op Mobilization)",
          milestones: [
            "Continuous multi-modal local infiltration analgesia (LIA) minimizes pain",
            "Under guided physiotherapy, the patient sits bedside and takes their first assisted steps with a walker within 24 hours",
            "Ankle pump exercises and compression stockings initiate deep vein thrombosis (DVT) prophylaxis"
          ]
        },
        {
          phase: "Days 2 – 3 (Stair Climbing & Hospital Discharge)",
          milestones: [
            "Independent walking to the bathroom using a walker",
            "Stair-climbing practice (up with the good leg, down with the operated leg)",
            "Knee bending active-assisted range of motion reaching 80–90 degrees",
            "Transition to oral anti-inflammatory medications and safe discharge home"
          ]
        },
        {
          phase: "Weeks 1 – 2 (Home Physical Therapy & Wound Inspection)",
          milestones: [
            "Daily home exercise protocol: straight-leg raises, heel slides, and quadriceps sets",
            "Waterproof dressing allows comfortable sponge baths; wound review on Day 12–14",
            "Progressive walking distance increases to 500–1000 meters per day with walker"
          ]
        },
        {
          phase: "Weeks 3 – 6 (Transition to Unassisted Walking & Driving)",
          milestones: [
            "Weaning off walker to a single walking stick, then full unassisted walking",
            "Knee bending achieves 110–120 degrees; low-resistance stationary cycling begins",
            "Resumption of car driving (right leg at 4–6 weeks once emergency braking reflex is verified)",
            "Return to sedentary office work and light domestic activities"
          ]
        },
        {
          phase: "Months 3 – 6 (Full Functional Restoration & Active Life)",
          milestones: [
            "Achievement of maximum flexion (up to 135+ degrees)",
            "Return to swimming, brisk walking, golf, low-impact gym workouts, and comfortable long-distance travel",
            "Bone-implant biological osseointegration complete; lifetime joint durability secured"
          ]
        }
      ],
      costAnalysis: {
        priceRange: "₹1,50,000 to ₹2,50,000 (Single Knee) | ₹2,80,000 to ₹4,50,000 (Both Knees)",
        comparison: [
          {
            procedureType: "Total Knee Replacement (TKA) - Single Leg",
            costRange: "₹1,50,000 – ₹2,50,000",
            stayDuration: "2 – 3 Days",
            bestFor: "Moderate to severe Grade 3 & 4 arthritis affecting multiple compartments of the knee"
          },
          {
            procedureType: "Unicompartmental (Partial) Knee Replacement",
            costRange: "₹1,25,000 – ₹1,90,000",
            stayDuration: "1 – 2 Days",
            bestFor: "Isolated medial or lateral cartilage wear with intact ACL/PCL ligaments"
          },
          {
            procedureType: "Bilateral Knee Replacement (Both Knees Same Time)",
            costRange: "₹2,80,000 – ₹4,50,000",
            stayDuration: "3 – 4 Days",
            bestFor: "Severe symmetrical arthritis in both knees; reduces total recovery and hospital fees"
          }
        ],
        includedFactors: [
          "Surgeon consultation, surgical fee, and assistant surgeon team",
          "State-of-the-art modular Laminar Airflow Operation Theatre charges",
          "US-FDA / Indian-FDA approved premium medical-grade knee implant & bone cement",
          "Specialist cardiac and anaesthesia evaluation with multi-modal pain blocks",
          "2 to 3 days hospital room rent (semi-private / private based on package)",
          "Inpatient physiotherapy, nursing care, routine surgical consumables, and discharge medications"
        ],
        insuranceAndTPA:
          "Knee replacement surgery is fully covered under all standard private health insurance policies and corporate group mediclaim schemes in India. Our partner hospitals in Hebbal, New BEL Road, and Seshadripuram provide dedicated cashless TPA desks for Star Health, Care Health, HDFC ERGO, ICICI Lombard, Medi Assist, Paramount TPA, Vidal Health, and others. Pre-authorization is handled directly by our hospital team with zero out-of-pocket delays."
      },
      doctorCredentials: {
        fellowship: "Fellowship in Arthroplasty (FRGUHS) — Rajiv Gandhi University of Health Sciences",
        experienceYears: "12+ Years of Specialized Surgical Practice",
        surgeriesCompleted: "5,000+ Successful Joint Replacements & Orthopedic Procedures",
        successRate: "98% Documented Clinical Success & Patient Satisfaction Rate",
        philosophy:
          "Dr. Syed Parveez Ahmed believes in precision joint preservation first. When surgery is necessary, his subvastus muscle-preserving approach ensures patients regain independent, active mobility with the least possible discomfort and rapid discharge."
      },
      clinicsAvailable: [
        {
          clinicName: "Atharva Multispeciality Hospital",
          area: "Hebbal, Bangalore North",
          highlights: "Primary surgical base with Modular Laminar Airflow OTs, ICU, and inpatient joint wards",
          schedule: "Monday – Saturday: 10:00 AM – 1:00 PM & 6:00 PM – 8:00 PM"
        },
        {
          clinicName: "Trinity Central Hospital",
          area: "Seshadripuram, Central Bengaluru",
          highlights: "Central surgical suite near Mantri Square Metro with comprehensive arthroplasty setup",
          schedule: "Monday, Wednesday, Friday: 2:00 PM – 4:00 PM"
        },
        {
          clinicName: "Apollo Clinic",
          area: "New BEL Road, RMV 2nd Stage",
          highlights: "High-resolution digital X-rays, bone health screening & specialized OPD consultations",
          schedule: "Tuesday, Thursday, Saturday: 4:30 PM – 6:00 PM"
        },
        {
          clinicName: "Medstar Hospital",
          area: "Nagavara / Manyata Tech Park",
          highlights: "Evening consultation clinic convenient for Outer Ring Road & Tech corridor residents",
          schedule: "Monday – Saturday: 5:00 PM – 6:30 PM"
        },
        {
          clinicName: "Shifa Hospital & Poly Clinic",
          area: "Sultanpalya / RT Nagar",
          highlights: "Community evening clinic for joint evaluations, post-op wound checks & medication advice",
          schedule: "Monday, Wednesday, Friday: 7:30 PM – 9:00 PM"
        }
      ]
    },
    faqs: [
      {
        question: "How long do modern knee replacement implants last?",
        answer: "Modern knee implants crafted from medical-grade cobalt-chromium, titanium, or oxidized zirconium (Oxinium) paired with highly cross-linked polyethylene bearings typically last 20 to 25+ years with normal active living."
      },
      {
        question: "How is the subvastus approach different from conventional knee surgery?",
        answer: "Conventional knee replacement cuts through the major quadriceps thigh muscle. Dr. Syed Parveez Ahmed performs the subvastus technique, which preserves the quadriceps muscle entirely by lifting it from underneath. This reduces post-op pain by 50% and allows walking within 24 hours."
      },
      {
        question: "When can I start walking after knee replacement surgery?",
        answer: "Under Dr. Syed Parveez Ahmed's rapid recovery protocol, patients typically take their first assisted steps with a walker within 24 hours of surgery."
      },
      {
        question: "What is the average cost of knee replacement surgery in Bangalore?",
        answer: "In Bangalore, a single knee replacement package typically ranges from ₹1,50,000 to ₹2,50,000 depending on the implant brand and room category. Bilateral surgery (both knees) ranges between ₹2,80,000 and ₹4,50,000."
      },
      {
        question: "Is knee replacement covered by health insurance and cashless TPA?",
        answer: "Yes, knee replacement is fully recognized and covered by all private health insurance policies and corporate mediclaim plans. Our partner hospitals in Hebbal and Seshadripuram provide 100% cashless pre-authorization."
      },
      {
        question: "Can both knees be replaced at the same time (Bilateral Knee Replacement)?",
        answer: "Yes. In medically fit patients under 75 years without severe cardiac disease, simultaneous bilateral knee replacement offers the distinct advantage of a single anaesthesia, single hospital stay, and a unified 6-week rehabilitation period."
      },
      {
        question: "Can I sit cross-legged or kneel after knee replacement?",
        answer: "With modern high-flexion implants and subvastus muscle preservation, patients achieve up to 135 degrees of knee flexion. While high-impact ground sitting is generally discouraged to avoid excessive wear, kneeling on soft cushioned surfaces is feasible."
      },
      {
        question: "When can I drive a car after knee replacement?",
        answer: "Most patients resume driving between 4 to 6 weeks after surgery, once full quadriceps strength, unassisted walking, and rapid emergency braking reflex have been evaluated."
      },
      {
        question: "Will the artificial knee set off airport metal detectors?",
        answer: "Yes, medical-grade titanium and cobalt-chromium implants can trigger airport security scanners. Patients are provided with a personalized implant identification certificate to present at airport security checkpoints."
      },
      {
        question: "Where does Dr. Ahmed perform knee replacement surgeries in Bangalore & Bengaluru?",
        answer: "Surgeries and consultations are conducted at premier partner hospitals across Bangalore North (Atharva Multispeciality Hospital Hebbal, Apollo Clinic New BEL Road) and Central Bengaluru (Trinity Central Hospital Seshadripuram)."
      }
    ]
  },
  {
    id: "hip-replacement",
    slug: "hip-replacement-surgery-bangalore",
    aliases: ["hip-replacement", "hip-replacement-surgery"],
    title: "Hip Replacement Surgery",
    tag: "Surgical",
    shortDescription:
      "Minimally invasive total and partial hip arthroplasty using premium ceramic bearings and anatomical alignment mapping for enduring pain relief.",
    fullDescription:
      "Total hip replacement surgery relieves debilitating pain caused by avascular necrosis (AVN), osteoarthritis, hip dysplasia, and femoral neck fractures. Dr. Syed Parveez Ahmed employs muscle-preserving approaches and premium ceramic-on-polyethylene bearings that mimic natural joint kinematics, allowing patients to regain stability, flexibility, and independent mobility without lingering pain.",
    color: "from-[#0f2d5e] to-[#2e8b57]",
    lightColor: "bg-[#f0f7ff]",
    iconColor: "text-[#0f2d5e]",
    accent: "#0f2d5e",
    image: "/services/service_hip_replacement.png",
    recoveryTime: "6 - 12 Weeks (Full restoration of normal mobility)",
    symptoms: [
      "Deep groin, buttock, or outer hip pain when walking or standing",
      "Stiffness that restricts bending down, sitting, or wearing shoes",
      "Persistent discomfort during resting or sleeping",
      "Limping or uneven gait caused by leg length discrepancy or joint stiffness",
      "Crepitus or grinding sensations inside the hip socket"
    ],
    procedures: [
      "Minimally invasive muscle-preserving hip arthroplasty",
      "High-performance ceramic-on-crosslinked-polyethylene articulating bearings",
      "Pre-operative digital template mapping for leg-length equality",
      "Dual-mobility articulation for high-stability risk cases",
      "Post-operative structured physiotherapy and home rehabilitation"
    ],
    nonSurgical:
      "Early-stage hip symptoms can often be managed through activity modification, protected weight-bearing, physical therapy, and joint injections.",
    metaTitle: "Hip Replacement Surgery in Bangalore & Bengaluru | Dr. Syed Parveez Ahmed",
    metaDescription:
      "Expert total & partial hip replacement surgery in Bangalore North & Central Bengaluru by Dr. Syed Parveez Ahmed. Modern muscle-sparing techniques, ceramic bearings & rapid recovery.",
    deepDive: {
      whoNeedsIt: {
        overview:
          "Total Hip Replacement (THR) is widely regarded as one of the most successful surgical innovations in modern medicine. When hip joint cartilage wears down or the femoral head loses its blood supply, every step produces sharp groin pain and restricted mobility. In Bangalore, Dr. Syed Parveez Ahmed treats a wide cross-section of patients suffering from avascular necrosis (AVN) in young working adults as well as severe degenerative hip arthritis and osteoporotic fractures in seniors.",
        indications: [
          "Avascular Necrosis (AVN) of the Femoral Head (Ficat-Arlet Stages 3 & 4) causing bone collapse",
          "Advanced Primary Osteoarthritis of the hip joint with severe bone spur formation and joint space loss",
          "Secondary Osteoarthritis resulting from childhood hip dysplasia or slipped capital femoral epiphysis",
          "Ankylosing Spondylitis and Rheumatoid Arthritis causing severe hip stiffness or fibrous ankylosis",
          "Femoral Neck Fractures in elderly adults requiring primary arthroplasty for immediate weight bearing"
        ],
        candidateChecklist: [
          "Deep, aching groin or outer buttock pain when standing, walking, or weight bearing",
          "Difficulty or inability to bend over to put on socks, tie shoes, or pick objects up",
          "Visible limping or uneven gait caused by shortening of the affected leg",
          "Severe hip stiffness making sitting in standard chairs or getting into a car painful",
          "Night pain radiating down the front of the thigh to the knee",
          "Loss of pain relief from anti-inflammatories, physical therapy, or protected weight-bearing"
        ]
      },
      surgicalTechnique: {
        approachName: "Minimally Invasive Muscle-Sparing Total Hip Arthroplasty (Direct Anterior / Posterior)",
        details: [
          "Dr. Syed Parveez Ahmed utilizes advanced muscle-sparing approaches that access the hip joint through natural inter-muscular planes. Rather than detaching the major gluteal abductor muscles that control pelvis stability, the muscles are gently retracted, preserving soft tissue integrity.",
          "Pre-Operative Digital Templating: Dr. Ahmed performs precise computer mapping of the patient's pelvis and femur to calculate exact femoral offset, cup inclination, and leg-length equality down to the millimeter. This ensures that the patient does not experience a leg length difference or persistent limp post-surgery.",
          "Fourth-Generation Biolox Delta Ceramic Bearings: For young, active individuals (such as patients with AVN in their 20s to 50s), Dr. Ahmed utilizes state-of-the-art ceramic-on-crosslinked polyethylene or ceramic-on-ceramic articulations. Ceramic is exceptionally scratch-resistant and wettable, reducing annual microscopic wear to near zero and extending implant longevity beyond 25–30+ years.",
          "Dual-Mobility Acetabular Cups: For elderly patients or those with neuromuscular instability at higher risk of dislocation, dual-mobility articulation provides an extraordinary range of motion with a dislocation rate below 0.3%."
        ],
        advantages: [
          "Preservation of key hip abductor muscles for zero postoperative limp",
          "Accurate digital leg-length restoration matching your natural anatomical stride",
          "Ultra-low friction ceramic bearings engineered for 25–30+ years of active durability",
          "Minimal dislocation risk with advanced dual-mobility and large-head options",
          "Bedside standing and walking within 24 hours under rapid recovery protocols"
        ]
      },
      recoveryTimeline: [
        {
          phase: "Day 1 (Immediate Bedside Mobilization)",
          milestones: [
            "Regional epidural / spinal anaesthesia with multimodal pain block ensures comfortable recovery",
            "Under guided physiotherapy, the patient sits bedside and takes their first steps using a walker within 24 hours",
            "Gentle ankle pumps and gluteal isometric contractions promote healthy circulation"
          ]
        },
        {
          phase: "Days 2 – 3 (Stair Climbing & Safe Home Discharge)",
          milestones: [
            "Independent walking in hospital corridors with walker or crutches",
            "Safe sitting, toilet seat transfer, and stair climbing instruction",
            "Removal of drain (if placed) and transition to oral medications; discharge home"
          ]
        },
        {
          phase: "Weeks 1 – 2 (Early Home Healing & Precautions)",
          milestones: [
            "Walking comfortably around the home using a walker or elbow crutches",
            "Adhering to initial hip precautions (avoiding extreme inward rotation and crossing legs)",
            "Wound inspection on Day 12–14; dressing change with waterproof seal"
          ]
        },
        {
          phase: "Weeks 3 – 6 (Walking Stick Transition & Driving Resumption)",
          milestones: [
            "Progression from walker to a single walking stick, followed by unassisted walking",
            "Driving resumption for automatic cars at 4 weeks (6 weeks for manual/right hip)",
            "Return to desk jobs and sedentary professional responsibilities"
          ]
        },
        {
          phase: "Months 3 – 6 (Full Functional Freedom & Exercise)",
          milestones: [
            "Complete elimination of limp and 100% painless natural walking",
            "Resumption of low-impact recreational activities: swimming, cycling, brisk hiking, and gym workouts",
            "Lifelong osseointegration of uncemented titanium cup and stem secured"
          ]
        }
      ],
      costAnalysis: {
        priceRange: "₹1,80,000 to ₹2,80,000 (Unilateral Total Hip) | ₹3,20,000 to ₹4,80,000 (Both Hips)",
        comparison: [
          {
            procedureType: "Total Hip Replacement (Ceramic-on-Polyethylene)",
            costRange: "₹1,80,000 – ₹2,50,000",
            stayDuration: "3 Days",
            bestFor: "Primary osteoarthritis, hip dysplasia, and AVN in patients seeking maximum durability"
          },
          {
            procedureType: "Premium Ceramic-on-Ceramic / Dual-Mobility Hip",
            costRange: "₹2,20,000 – ₹2,80,000",
            stayDuration: "3 Days",
            bestFor: "Young, highly active adults and patients requiring maximum joint stability and zero wear"
          },
          {
            procedureType: "Partial Hip Replacement (Bipolar Hemiarthroplasty)",
            costRange: "₹1,20,000 – ₹1,75,000",
            stayDuration: "2 – 3 Days",
            bestFor: "Elderly patients with femoral neck fractures where the acetabular socket remains healthy"
          }
        ],
        includedFactors: [
          "Surgeon charges, assistant team, and anaesthesiologist fee",
          "Ultra-clean Modular Operation Theatre with Laminar Airflow charges",
          "Imported US-FDA / CE-approved ceramic ball, crosslinked poly liner, and uncemented titanium stem",
          "3 days hospital room rent in semi-private or private category",
          "Inpatient physiotherapy, pre-op blood investigations, and discharge medications"
        ],
        insuranceAndTPA:
          "Total hip replacement is fully eligible for cashless mediclaim settlement across all major private insurers (Star Health, Care, HDFC ERGO, ICICI Lombard, Medi Assist, Vidal Health, etc.). Our hospital insurance coordinators assist patients from initial paperwork to final discharge settlement."
      },
      doctorCredentials: {
        fellowship: "Fellowship in Arthroplasty (FRGUHS) — Rajiv Gandhi University of Health Sciences",
        experienceYears: "12+ Years of Specialized Surgical Practice",
        surgeriesCompleted: "5,000+ Successful Joint Replacements & Orthopedic Procedures",
        successRate: "98% Documented Clinical Success & Patient Satisfaction Rate",
        philosophy:
          "Dr. Syed Parveez Ahmed utilizes precision digital mapping and premium ceramic bearings to eliminate limping and give patients a hip joint that feels completely natural for decades to come."
      },
      clinicsAvailable: [
        {
          clinicName: "Atharva Multispeciality Hospital",
          area: "Hebbal, Bangalore North",
          highlights: "Primary surgical facility equipped with high-tech Laminar Airflow OTs & ICU backup",
          schedule: "Monday – Saturday: 10:00 AM – 1:00 PM & 6:00 PM – 8:00 PM"
        },
        {
          clinicName: "Trinity Central Hospital",
          area: "Seshadripuram, Central Bengaluru",
          highlights: "Central surgical hospital near Mantri Square Metro with dedicated joint replacement suites",
          schedule: "Monday, Wednesday, Friday: 2:00 PM – 4:00 PM"
        },
        {
          clinicName: "Apollo Clinic",
          area: "New BEL Road, RMV 2nd Stage",
          highlights: "Diagnostic evaluations, standing digital pelvic X-rays & specialist consultations",
          schedule: "Tuesday, Thursday, Saturday: 4:30 PM – 6:00 PM"
        },
        {
          clinicName: "Medstar Hospital",
          area: "Nagavara / Manyata Tech Park",
          highlights: "Convenient evening OPD for tech professionals and Outer Ring Road residents",
          schedule: "Monday – Saturday: 5:00 PM – 6:30 PM"
        },
        {
          clinicName: "Shifa Hospital & Poly Clinic",
          area: "Sultanpalya / RT Nagar",
          highlights: "Evening consultation clinic for second opinions, post-op checks & pain management",
          schedule: "Monday, Wednesday, Friday: 7:30 PM – 9:00 PM"
        }
      ]
    },
    faqs: [
      {
        question: "What causes hip arthritis or AVN requiring hip replacement?",
        answer: "Avascular necrosis (AVN — loss of blood supply to the femoral head, commonly linked to steroid use, alcohol, or post-Covid vasculitis) and osteoarthritis are the leading causes. Advanced AVN with bone collapse requires ceramic hip replacement for permanent relief."
      },
      {
        question: "How long do modern ceramic hip replacement implants last?",
        answer: "Modern fourth-generation Biolox Delta ceramic bearings paired with highly crosslinked polyethylene or ceramic liners produce negligible microscopic wear, typically lasting 25 to 30+ years even in active patients."
      },
      {
        question: "What is the cost of hip replacement surgery in Bangalore?",
        answer: "Total hip replacement in Bangalore typically ranges from ₹1,80,000 to ₹2,80,000 depending on the implant bearings (ceramic vs metal) and room category. Partial hip replacement for senior fractures ranges between ₹1,20,000 and ₹1,75,000."
      },
      {
        question: "Will my legs be equal in length after hip replacement?",
        answer: "Yes. Dr. Syed Parveez Ahmed utilizes pre-operative digital computerized templating to measure femoral offset and leg length accurately. Restoring leg-length equality within 1 millimeter ensures patients walk without any persistent limp."
      },
      {
        question: "Can I climb stairs after hip replacement?",
        answer: "Yes, stair climbing is trained during your post-operative physiotherapy in the hospital, and most patients climb stairs comfortably within 2 to 3 weeks."
      },
      {
        question: "What precautions are necessary after hip replacement to prevent dislocation?",
        answer: "During the initial 6 weeks while soft tissues heal, avoid crossing your legs, bending past 90 degrees at the waist, or sleeping without a pillow between your knees. With muscle-preserving techniques and dual-mobility options, dislocation risks are below 0.5%."
      },
      {
        question: "Can young patients in their 30s or 40s have hip replacement?",
        answer: "Absolutely. With modern ceramic-on-ceramic and ceramic-on-polyethylene bearings, total hip replacement is frequently performed on young adults with AVN or hip dysplasia, allowing them to return to active careers, gym workouts, and sports without pain."
      },
      {
        question: "When can I resume driving and work after hip surgery?",
        answer: "Most patients return to desk jobs within 3 to 4 weeks. Automatic car driving can typically resume at 4 weeks once leg coordination and emergency braking strength are verified."
      },
      {
        question: "Is hip replacement surgery covered by insurance in Bangalore?",
        answer: "Yes, total hip replacement is covered under all private health insurance policies and corporate mediclaim schemes in India. Our partner hospitals in Hebbal and Seshadripuram offer complete cashless TPA assistance."
      },
      {
        question: "Where does Dr. Ahmed perform hip replacement surgeries in Bangalore & Bengaluru?",
        answer: "Surgeries are conducted at premier partner hospitals with modular laminar airflow operation theatres: Atharva Multispeciality Hospital in Hebbal (Bangalore North) and Trinity Central Hospital in Seshadripuram (Central Bengaluru)."
      }
    ]
  },
  {
    id: "arthroscopy",
    slug: "arthroscopy-surgery-bangalore",
    aliases: ["arthroscopy", "keyhole-surgery", "sports-injury-surgery"],
    title: "Arthroscopic Surgery & Sports Injuries",
    tag: "Surgical",
    shortDescription:
      "Minimally invasive keyhole joint surgery for ACL/PCL tears, meniscus injuries, rotator cuff tears, and labral repairs with rapid athletic recovery.",
    fullDescription:
      "Arthroscopic surgery is a state-of-the-art keyhole surgical procedure that allows precise diagnosis and repair of joint cartilage, ligaments, and tendons through millimeter incisions. Dr. Syed Parveez Ahmed specializes in arthroscopic reconstructions for athletes, sports enthusiasts, and active professionals across Bengaluru.",
    color: "from-[#1a4a8a] to-[#0f2d5e]",
    lightColor: "bg-[#eef2ff]",
    iconColor: "text-[#1a4a8a]",
    accent: "#1a4a8a",
    image: "/services/service_arthroscopy.png",
    recoveryTime: "2 - 6 Weeks (Active functional recovery path)",
    symptoms: [
      "Sudden severe pain following a sports twist, tackle, or awkward pivot",
      "Knee or shoulder joint instability and feeling of 'giving way'",
      "Joint locking, clicking, or inability to fully straighten the limb",
      "Rapid swelling within hours of a sporting mishap"
    ],
    procedures: [
      "Keyhole Arthroscopic ACL / PCL ligament reconstruction",
      "Arthroscopic meniscus repair, trimming, and preservation",
      "Shoulder rotator cuff repair and Bankart labral stabilization",
      "Removal of intra-articular loose bodies and osteophytes",
      "Return-to-sport physical conditioning protocol"
    ],
    nonSurgical:
      "Partial tears or mild sprains are often rehabilitated with targeted neuromuscular conditioning, sport-specific bracing, and platelet-rich plasma (PRP) therapy.",
    metaTitle: "Arthroscopic Surgery in Bangalore & Bengaluru | Keyhole Joint Care | Dr. Syed Parveez Ahmed",
    metaDescription:
      "Advanced arthroscopy and sports injury surgery in Bangalore North & Central Bengaluru by Dr. Syed Parveez Ahmed. Keyhole ACL reconstruction, meniscus repair & rapid sports recovery.",
    faqs: [
      {
        question: "How big are the incisions for arthroscopic surgery?",
        answer: "Incisions are tiny keyholes (typically 4 to 6 millimeters), resulting in minimal scarring, lower infection risk, and faster healing."
      },
      {
        question: "When can I return to competitive sports after ACL reconstruction?",
        answer: "Return to sports generally occurs between 6 to 9 months, following objective biomechanical and strength clearance."
      }
    ]
  },
  {
    id: "joint-care",
    slug: "joint-care-treatment-bangalore",
    aliases: ["joint-care", "arthritis-care"],
    title: "Comprehensive Joint Care & Arthritis Treatment",
    tag: "Speciality",
    shortDescription:
      "Holistic joint preservation, digital biomechanical assessments, biological therapies, and individualized management for all major joints.",
    fullDescription:
      "JointXperts provides complete diagnostic and therapeutic joint care designed to preserve natural bone and cartilage before surgical intervention becomes necessary. Dr. Syed Parveez Ahmed combines digital joint alignment assessments, biological PRP injections, and posture optimization to treat early degenerative disease across Bangalore and Bengaluru.",
    color: "from-[#0f2d5e] to-[#1a4a8a]",
    lightColor: "bg-[#eef2ff]",
    iconColor: "text-[#0f2d5e]",
    accent: "#0f2d5e",
    image: "/services/service_joint_care.png",
    recoveryTime: "1 - 2 Weeks for acute flare-ups / Ongoing preservation",
    symptoms: [
      "Chronic joint stiffness, particularly during morning hours",
      "Aching discomfort exacerbated by weather changes or prolonged activity",
      "Crepitus, grinding, and crackling sounds during joint movement",
      "Difficulty climbing stairs, squatting, or lifting arms overhead"
    ],
    procedures: [
      "Digital standing X-ray and MRI joint degradation analysis",
      "Ultrasound-guided Platelet-Rich Plasma (PRP) regenerative injections",
      "Hyaluronic acid viscosupplementation joint lubrication",
      "Individualized anti-inflammatory medical protocols"
    ],
    nonSurgical:
      "Non-surgical therapy is the cornerstone of joint care, emphasizing weight reduction, low-impact conditioning (swimming, cycling), and functional orthotics.",
    metaTitle: "Joint Care & Arthritis Treatment in Bangalore & Bengaluru | JointXperts",
    metaDescription:
      "Comprehensive joint care and arthritis management in Bangalore North & Central Bengaluru by Dr. Syed Parveez Ahmed. Non-surgical preservation, PRP therapy, and joint lubrication.",
    faqs: [
      {
        question: "Can arthritis be reversed without surgery?",
        answer: "While lost cartilage cannot fully regenerate, early-stage arthritis can be effectively controlled to stop progression and eliminate pain without surgery."
      }
    ]
  },
  {
    id: "spine-care",
    slug: "spine-care-treatment-bangalore",
    aliases: ["spine-care", "back-pain-treatment"],
    title: "Spine Care & Back Pain Management",
    tag: "Advanced",
    shortDescription:
      "Expert diagnosis and treatment of disc herniations, sciatica, cervical spondylosis, and postural spinal disorders in Bangalore & Bengaluru.",
    fullDescription:
      "Spinal health is vital to daily mobility and independence. Dr. Syed Parveez Ahmed evaluates and treats the full spectrum of spinal conditions, including herniated lumbar discs, sciatica, neck pain, spinal stenosis, and degenerative disc disease through conservative therapy and modern micro-surgical procedures.",
    color: "from-[#2e8b57] to-[#1f6b3d]",
    lightColor: "bg-[#e8f5ee]",
    iconColor: "text-[#2e8b57]",
    accent: "#2e8b57",
    image: "/services/service_spine_general.png",
    recoveryTime: "2 - 6 Weeks (Conservative) / 6 - 12 Weeks (Surgical)",
    symptoms: [
      "Shooting nerve pain radiating down the leg or arm (Sciatica / Radiculopathy)",
      "Numbness, tingling, or weakness in feet, fingers, or calves",
      "Chronic low back stiffness worsened by sitting or bending forward",
      "Difficulty maintaining an upright posture or walking extended distances"
    ],
    procedures: [
      "Targeted epidural injections & selective nerve root blocks",
      "Non-invasive mechanical spinal decompression and posture correction",
      "Minimally invasive microdiscectomy and spinal decompression",
      "Core stabilization and ergonomic rehabilitation therapy"
    ],
    nonSurgical:
      "Over 90% of back and neck pain cases resolve with conservative treatment: selective nerve blocks, posture correction, and specialized spinal physiotherapy.",
    metaTitle: "Spine Care & Sciatica Treatment in Bangalore & Bengaluru | Dr. Syed Parveez Ahmed",
    metaDescription:
      "Leading spine care and back pain management in Bangalore North & Central Bengaluru by Dr. Syed Parveez Ahmed. Sciatica relief, disc treatments, and non-surgical therapies.",
    faqs: [
      {
        question: "Does back pain always require spinal surgery?",
        answer: "No. The vast majority of back pain and herniated disc conditions heal successfully with structured non-surgical care and physical rehabilitation."
      }
    ]
  },
  {
    id: "fracture-management",
    slug: "fracture-management-treatment-bangalore",
    aliases: ["fracture-management", "bone-fracture-care"],
    title: "Fracture Management & Trauma Care",
    tag: "Speciality",
    shortDescription:
      "Urgent and definitive care for bone fractures, complex trauma, and skeletal injuries using modern casting and anatomical internal fixation.",
    fullDescription:
      "Proper bone alignment and timely stabilization are critical for preventing permanent deformity and joint stiffness following fractures. Dr. Syed Parveez Ahmed delivers comprehensive fracture care, ranging from lightweight fiberglass casting to complex Open Reduction and Internal Fixation (ORIF) surgery with titanium plates and intramedullary nails.",
    color: "from-[#0f2d5e] to-[#2e8b57]",
    lightColor: "bg-[#f0f7ff]",
    iconColor: "text-[#0f2d5e]",
    accent: "#0f2d5e",
    image: "/services/service_fracture.png",
    recoveryTime: "6 - 12 Weeks (Bone consolidation timeline)",
    symptoms: [
      "Severe acute pain following a fall, road accident, or sports impact",
      "Visible bone deformity, angulation, or abnormal limb contour",
      "Intense localized tenderness, rapid swelling, and subcutaneous bruising",
      "Total inability to bear weight or move the injured extremity"
    ],
    procedures: [
      "High-resolution digital radiological bone alignment mapping",
      "Breathable fiberglass casting and custom functional splints",
      "Open Reduction and Internal Fixation (ORIF) with titanium implants",
      "Minimally invasive percutaneous plate osteosynthesis (MIPPO)",
      "Post-union joint mobilization and stiffness recovery physical therapy"
    ],
    nonSurgical:
      "Stable fractures are managed with precision immobilization using water-resistant fiberglass casts and progressive weight-bearing protocols.",
    metaTitle: "Fracture Treatment & Trauma Care in Bangalore & Bengaluru | JointXperts",
    metaDescription:
      "Expert fracture management and trauma surgery in Bangalore North & Central Bengaluru by Dr. Syed Parveez Ahmed. Advanced casting, ORIF surgery & complete bone recovery.",
    faqs: [
      {
        question: "How soon should a suspected fracture be evaluated?",
        answer: "Immediately. Timely radiological imaging and stabilization within hours reduce complications, neurovascular risk, and severe swelling."
      }
    ]
  },
  {
    id: "spine-injury-care",
    slug: "spine-injury-treatment-bangalore",
    aliases: ["spine-injury-care", "spine-injury-treatment"],
    title: "Spine Injury & Acute Trauma Care",
    tag: "Trauma",
    shortDescription:
      "Emergency evaluation, neurological monitoring, and stabilization for acute spinal injuries, vertebral fractures, and trauma.",
    fullDescription:
      "Acute spinal trauma requires urgent, highly specialized care to safeguard spinal cord integrity and avoid neurological deficits. Dr. Syed Parveez Ahmed offers prompt evaluation and intervention for compression fractures, whiplash, sports collisions, and post-traumatic disc displacements across Bangalore and Bengaluru.",
    color: "from-[#2e8b57] to-[#1f6b3d]",
    lightColor: "bg-[#e8f5ee]",
    iconColor: "text-[#2e8b57]",
    accent: "#2e8b57",
    image: "/services/service_spine_care.png",
    recoveryTime: "4 - 12 Weeks (Varies by trauma severity)",
    symptoms: [
      "Acute debilitating neck or spine pain following a collision or impact",
      "Numbness, loss of reflexes, or weakness in upper or lower limbs",
      "Inability to stand or sit upright without severe spinal distress",
      "Loss of balance or altered gait stability"
    ],
    procedures: [
      "Urgent neurological and spinal canal radiological evaluation",
      "Minimally invasive percutaneous spinal stabilization",
      "Vertebroplasty / Kyphoplasty for osteoporotic compression fractures",
      "Individualized spinal brace fitting and neurological monitoring"
    ],
    nonSurgical:
      "Mild fractures and ligamentous sprains are managed with custom rigid orthoses, strict initial resting protocols, and monitored postural rehabilitation.",
    metaTitle: "Spine Injury & Acute Trauma Treatment in Bangalore & Bengaluru | JointXperts",
    metaDescription:
      "Urgent spine injury evaluation and acute trauma treatment in Bangalore North & Central Bengaluru by Dr. Syed Parveez Ahmed. Neurological protection, vertebral care & spinal stabilization.",
    faqs: [
      {
        question: "What is the emergency protocol for a suspected spinal injury?",
        answer: "Keep the patient still and immobilized without twisting the neck or back, and seek immediate emergency orthopedic evaluation."
      }
    ]
  },
  {
    id: "pain-relief",
    slug: "orthopedic-pain-relief-bangalore",
    aliases: ["pain-relief", "orthopedic-pain-relief"],
    title: "Musculoskeletal Pain Relief Management",
    tag: "Non-Surgical",
    shortDescription:
      "Targeted non-surgical pain management using image-guided injections, dry needling, and modern interventional therapies.",
    fullDescription:
      "Chronic musculoskeletal pain impairs quality of life and limits productivity. Dr. Syed Parveez Ahmed utilizes targeted, evidence-based pain management modalities to treat bursitis, tendinitis, fasciitis, and chronic muscle spasms without relying on prolonged oral painkillers.",
    color: "from-[#2e8b57] to-[#3aad6e]",
    lightColor: "bg-[#e8f5ee]",
    iconColor: "text-[#2e8b57]",
    accent: "#2e8b57",
    image: "/blogs/blog_plantar_fasciitis.png",
    recoveryTime: "Immediate to 1 Week (For interventional relief)",
    symptoms: [
      "Persistent localized muscle tenderness and sharp aching points",
      "Tendinitis (Tennis Elbow, Golfer's Elbow, Achilles Tendinitis)",
      "Plantar fasciitis with sharp heel pain upon waking",
      "Myofascial trigger points restricting shoulder and back movement"
    ],
    procedures: [
      "Ultrasound-guided bursal and tendon sheath injections",
      "Trigger point dry needling and myofascial release",
      "Platelet-Rich Plasma (PRP) therapies for chronic tendinopathies",
      "Custom medical and topical pain modulation protocols"
    ],
    nonSurgical:
      "100% non-surgical. Combines interventional targeted therapies with specialized stretching and kinetic chain correction.",
    metaTitle: "Orthopedic Pain Relief & Non-Surgical Care Bangalore & Bengaluru | JointXperts",
    metaDescription:
      "Effective musculoskeletal pain relief in Bangalore North & Central Bengaluru by Dr. Syed Parveez Ahmed. Non-surgical injections, tendon therapies & rapid comfort.",
    faqs: [
      {
        question: "Are steroid or PRP injections safe?",
        answer: "Yes, when administered under precise ultrasound guidance by a trained orthopedic surgeon, complications are minimal and targeted efficacy is maximized."
      }
    ]
  },
  {
    id: "mobility-restoration",
    slug: "mobility-restoration-rehabilitation-bangalore",
    aliases: ["mobility-restoration", "orthopedic-rehab"],
    title: "Mobility Restoration & Post-Op Rehabilitation",
    tag: "Rehab",
    shortDescription:
      "Comprehensive physiotherapy, gait retraining, and functional conditioning to restore strength and movement after surgery or injury.",
    fullDescription:
      "Regaining full range of motion and muscular strength is just as crucial as the surgery itself. JointXperts provides guided, evidence-based rehabilitation protocols supervised by Dr. Syed Parveez Ahmed to safely return patients to work, exercise, and independent living.",
    color: "from-[#0f3d2e] to-[#0f2d5e]",
    lightColor: "bg-[#e8f5ee]",
    iconColor: "text-[#2e8b57]",
    accent: "#0f3d2e",
    image: "/conditions/physio_postop_rehab.png",
    recoveryTime: "1 - 3 Months (Tailored to initial mobility status)",
    symptoms: [
      "Post-surgical joint stiffness and restricted flexion/extension",
      "Muscle atrophy and weakness following weeks of immobilization",
      "Impaired balance, stumbling, or unsteady walking pattern",
      "Fear of falling or re-injury during physical exertion"
    ],
    procedures: [
      "Proprioceptive Neuromuscular Facilitation (PNF) stretching",
      "Video gait analysis and treadmill biofeedback retraining",
      "Progressive kinetic chain resistance and eccentric loading",
      "Return-to-work and return-to-sport physical screening"
    ],
    nonSurgical:
      "Entirely conservative and restorative, using active physical therapy, resistance bands, and functional movement training.",
    metaTitle: "Mobility Restoration & Orthopedic Rehab in Bangalore & Bengaluru | JointXperts",
    metaDescription:
      "Expert post-operative rehabilitation and mobility restoration in Bangalore North & Central Bengaluru by Dr. Syed Parveez Ahmed. Regain strength, balance, and independence.",
    faqs: [
      {
        question: "How soon does post-operative physiotherapy begin?",
        answer: "Gentle bed-side mobilization begins on Day 1 after surgery, followed by progressive outpatient therapy."
      }
    ]
  },
  {
    id: "knee-pain-arthritis",
    slug: "knee-pain-arthritis-treatment-bangalore",
    aliases: ["knee-pain-arthritis", "knee-arthritis-treatment"],
    title: "Knee Pain & Osteoarthritis Treatment",
    tag: "Speciality",
    shortDescription:
      "Non-surgical therapies, viscosupplementation, unloader bracing, and advanced solutions for chronic degenerative knee pain.",
    fullDescription:
      "Knee osteoarthritis affects millions of adults, causing stiffness, swelling, and difficulty walking. Dr. Syed Parveez Ahmed offers a personalized stepped-care approach, prioritizing joint preservation with injections, custom braces, and lifestyle modifications before surgical intervention is contemplated.",
    color: "from-[#2e8b57] to-[#1f6b3d]",
    lightColor: "bg-[#e8f5ee]",
    iconColor: "text-[#2e8b57]",
    accent: "#2e8b57",
    image: "/services/service_joint_care.png",
    recoveryTime: "2 - 4 Weeks for acute flare-up management",
    symptoms: [
      "Dull or aching knee joint pain worsened by stair climbing or walking",
      "Morning knee stiffness lasting under 30 minutes",
      "Visible warm swelling and tenderness around the joint line",
      "Crepitus, grinding, and cracking sensations during knee bends"
    ],
    procedures: [
      "Full digital radiological joint degeneration staging",
      "Hyaluronic acid viscosupplementation lubricating injections",
      "Custom unloader knee brace fitting to offload damaged cartilage",
      "Structured quadriceps, hamstring, and hip abductor conditioning"
    ],
    nonSurgical:
      "Stepped-care conservative management including weight management, unloader braces, and biological joint injections.",
    metaTitle: "Knee Pain & Osteoarthritis Treatment in Bangalore & Bengaluru | Dr. Syed Parveez Ahmed",
    metaDescription:
      "Comprehensive knee pain and arthritis treatment in Bangalore North & Central Bengaluru by Dr. Syed Parveez Ahmed. Non-surgical options, viscosupplementation, and joint relief.",
    faqs: [
      {
        question: "When should I consult an orthopedic specialist for knee pain?",
        answer: "If knee pain persists for more than 2 weeks, disrupts sleep, causes limping, or is accompanied by swelling, professional assessment is recommended."
      }
    ]
  },
  {
    id: "ligament-injuries",
    slug: "ligament-injury-acl-pcl-treatment-bangalore",
    aliases: ["ligament-injuries", "acl-pcl-treatment"],
    title: "Ligament Injuries (ACL / PCL Tears)",
    tag: "Surgical",
    shortDescription:
      "State-of-the-art keyhole ligament reconstruction and customized athletic rehabilitation for sports joint injuries.",
    fullDescription:
      "Anterior Cruciate Ligament (ACL) and Posterior Cruciate Ligament (PCL) injuries frequently affect active individuals in football, badminton, running, and cricket. Dr. Syed Parveez Ahmed performs precision anatomical keyhole reconstructions using the patient's own autografts to restore complete knee stability across Bangalore and Bengaluru.",
    color: "from-[#1a4a8a] to-[#0f2d5e]",
    lightColor: "bg-[#eef2ff]",
    iconColor: "text-[#1a4a8a]",
    accent: "#1a4a8a",
    image: "/blogs/blog_acl_recovery.png",
    recoveryTime: "6 - 9 Months (Full athletic return-to-play clearance)",
    symptoms: [
      "A loud popping sound or sensation at the moment of injury",
      "Immediate severe knee pain and inability to continue playing",
      "Rapid joint swelling within 2 to 4 hours of trauma",
      "Sensation that the knee is buckling or giving way under weight"
    ],
    procedures: [
      "Minimally invasive arthroscopic ACL/PCL reconstruction",
      "High-strength hamstring or bone-patellar tendon-bone autograft placement",
      "Concomitant meniscus repair and cartilage preservation",
      "Phased sports rehabilitation and return-to-sport testing"
    ],
    nonSurgical:
      "Sedentary patients or partial tears with no functional instability may be managed with dedicated hamstring/quadriceps strengthening and functional knee bracing.",
    metaTitle: "ACL & PCL Ligament Surgery in Bangalore & Bengaluru | Dr. Syed Parveez Ahmed",
    metaDescription:
      "Specialized ACL & PCL ligament tear reconstruction in Bangalore & Bengaluru by Dr. Syed Parveez Ahmed. Keyhole arthroscopy, anatomical graft placement, and sports rehab.",
    faqs: [
      {
        question: "Can an ACL tear heal on its own without surgery?",
        answer: "Complete ACL tears do not heal on their own due to synovial fluid inside the joint preventing clot formation; active individuals typically require arthroscopic reconstruction for joint stability."
      }
    ]
  }
];

export function getTreatmentBySlugOrId(identifier: string): Treatment | undefined {
  const clean = identifier.toLowerCase().trim();
  return treatments.find(
    (t) => t.slug === clean || t.id === clean || t.aliases.includes(clean)
  );
}
