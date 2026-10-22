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
    faqs: [
      {
        question: "How long do modern knee replacement implants last?",
        answer: "Modern knee implants are designed with ultra-high molecular weight polyethylene and ceramic-metal alloys, typically lasting 20 to 25+ years with proper rehabilitation and care."
      },
      {
        question: "When can I start walking after knee replacement surgery?",
        answer: "Under Dr. Syed Parveez Ahmed's rapid recovery protocol, patients typically take their first assisted steps within 24 hours of surgery."
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
    faqs: [
      {
        question: "What causes hip arthritis or AVN requiring hip replacement?",
        answer: "Avascular necrosis (loss of blood supply to the femoral head), osteoarthritis, previous trauma, and steroid use are the most frequent causes treated across Bangalore and Bengaluru."
      },
      {
        question: "Can I climb stairs after hip replacement?",
        answer: "Yes, stair climbing is trained during your post-operative physiotherapy, and most patients climb stairs comfortably within 2 to 3 weeks."
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
