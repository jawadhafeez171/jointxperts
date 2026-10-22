export interface Condition {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  symptoms: string[];
  treatments: {
    surgical?: string[];
    nonSurgical?: string[];
  };
}

export interface ConditionCategory {
  id: string;
  slug: string;
  title: string;
  seoH1: string;
  seoTitle: string;
  description: string;
  hubIntro: string;
  clinicalDetails: {
    heading: string;
    paragraphs: string[];
  }[];
  commonTreatments: string[];
  conditions: Condition[];
}

export const conditionCategories: ConditionCategory[] = [
  {
    id: "shoulder",
    slug: "shoulder",
    title: "Shoulder",
    seoH1: "Shoulder Pain & Rotator Cuff Injury Care in Bangalore & Bengaluru",
    seoTitle: "Shoulder Pain & Rotator Cuff Treatment in Bangalore & Bengaluru | JointXperts",
    description: "Expert diagnosis and treatment for rotator cuff tears, frozen shoulder, impingement, and dislocations across Bangalore North and Central Bengaluru.",
    hubIntro:
      "The shoulder is the human body's most versatile and mobile ball-and-socket joint, capable of 360-degree overhead rotation and heavy load transmission. However, its tremendous mobility makes it particularly susceptible to soft tissue impingement, tendon tears, capsular stiffness, and traumatic dislocations. Under the expert clinical care of Dr. Syed Parveez Ahmed, patients in Bangalore North and Central Bengaluru receive tailored diagnostic assessments and evidence-based treatment regimens designed to restore pain-free shoulder motion without unnecessary invasive procedures.",
    clinicalDetails: [
      {
        heading: "Anatomy of Shoulder Disorders & Common Causes",
        paragraphs: [
          "Shoulder stability depends upon a coordinated balance between the bony glenohumeral socket, the fibrocartilaginous labrum, and the four dynamic muscles of the rotator cuff (supraspinatus, infraspinatus, teres minor, and subscapularis). When inflammation strikes the subacromial bursa or tendons, common daily motions such as reaching overhead, combing hair, or sleeping on one's side become excruciating.",
          "In Bengaluru's active working population and athletic community, shoulder pain commonly arises from two distinct origins: repetitive micro-trauma from gym workouts and desk ergonomics, or progressive degenerative tears in adults over 45. In younger patients, sports collisions or sudden traction forces often precipitate shoulder labral tears or recurrent shoulder dislocations requiring anatomical stabilization."
        ]
      },
      {
        heading: "Stepped Diagnostic Pathway & Conservative Care First",
        paragraphs: [
          "At JointXperts, our clinical philosophy prioritizes joint preservation and conservative care whenever possible. Each consultation begins with a thorough physical examination, testing rotator cuff strength, range of motion, and impingement signs, supported by digital standing X-rays and high-resolution MRI scans.",
          "Over 75% of early-stage shoulder conditions—including mild rotator cuff tendinopathy, shoulder impingement, and early frozen shoulder—respond effectively to targeted conservative management. This incorporates ultrasound-guided subacromial injections, regenerative platelet-rich plasma (PRP) therapy to accelerate tendon healing, and individualized eccentric rotator cuff conditioning."
        ]
      },
      {
        heading: "Advanced Keyhole Arthroscopic Shoulder Surgery",
        paragraphs: [
          "For severe full-thickness rotator cuff tears, Bankart labral lesions, or persistent shoulder stiffness that fails conservative therapy, Dr. Syed Parveez Ahmed performs advanced minimally invasive keyhole arthroscopy. Utilizing millimeter incisions and high-definition optical cameras, tendons are anchored securely back to bone using bio-composite anchors with minimal surgical trauma and rapid athletic recovery."
        ]
      }
    ],
    commonTreatments: [
      "Minimally Invasive Keyhole Shoulder Arthroscopy",
      "Ultrasound-Guided Subacromial Injections & PRP Therapy",
      "Rotator Cuff Tendon Repair & Bio-Anchor Fixation",
      "Hydrodilatation & Mobilization for Frozen Shoulder",
      "Bankart Repair for Recurrent Shoulder Dislocation"
    ],
    conditions: [
      {
        id: "rotator-cuff-tears",
        slug: "rotator-cuff-tears",
        title: "Rotator Cuff Tears",
        shortDescription: "A tear in the tissues connecting muscle to bone around the shoulder joint.",
        fullDescription: "A rotator cuff tear is a common cause of pain and disability among adults. The rotator cuff is a group of four muscles that come together as tendons to form a covering around the head of the humerus. A torn rotator cuff will weaken your shoulder, making everyday activities painful and difficult.",
        image: "/conditions/shoulder_rotator.png",
        symptoms: [
          "Pain at rest and at night, particularly if lying on the affected shoulder",
          "Pain when lifting and lowering your arm",
          "Weakness when lifting or rotating your arm",
          "Crepitus or crackling sensation when moving your shoulder"
        ],
        treatments: {
          nonSurgical: ["Rest and activity modification", "Nonsteroidal anti-inflammatory medicines", "Physical therapy and strengthening", "Steroid injections"],
          surgical: ["Arthroscopic tendon repair", "Open tendon repair", "Tendon transfer"]
        }
      },
      {
        id: "frozen-shoulder",
        slug: "frozen-shoulder",
        title: "Frozen Shoulder",
        shortDescription: "Characterized by stiffness and pain in your shoulder joint.",
        fullDescription: "Frozen shoulder, also known as adhesive capsulitis, is a condition characterized by stiffness and pain in your shoulder joint. Signs and symptoms typically begin gradually, worsen over time, and then resolve, usually within one to three years.",
        image: "/conditions/shoulder_frozen.png",
        symptoms: [
          "Freezing stage: Any movement causes pain, range of motion becomes limited",
          "Frozen stage: Pain may diminish, but shoulder becomes stiffer",
          "Thawing stage: Range of motion begins to improve"
        ],
        treatments: {
          nonSurgical: ["Pain medications", "Physical therapy focusing on range of motion", "Joint distension (injecting sterile water into the capsule)"],
          surgical: ["Shoulder manipulation under anesthesia", "Arthroscopic surgery to remove scar tissue"]
        }
      },
      {
        id: "shoulder-impingement",
        slug: "shoulder-impingement",
        title: "Shoulder Impingement",
        shortDescription: "Inflammation caused by tendons rubbing against the shoulder blade.",
        fullDescription: "Shoulder impingement syndrome occurs when the top outer edge of your shoulder blade rubs against (impinges on) the rotator cuff beneath it, causing pain and irritation. It is very common in athletes and aging adults.",
        image: "/conditions/shoulder_impingement.png",
        symptoms: [
          "Pain when lifting arms overhead",
          "Pain radiating from the front of the shoulder to the side of the arm",
          "Weakness in the shoulder",
          "Difficulty sleeping on the affected side"
        ],
        treatments: {
          nonSurgical: ["Rest", "Ice therapy", "Physical therapy", "Cortisone injections"],
          surgical: ["Arthroscopic decompression"]
        }
      },
      {
        id: "shoulder-dislocation",
        slug: "shoulder-dislocation",
        title: "Shoulder Dislocation",
        shortDescription: "When the upper arm bone pops out of the cup-shaped socket.",
        fullDescription: "The shoulder is the body's most mobile joint, which makes it susceptible to dislocation. A dislocation occurs when the head of the upper arm bone (humerus) is forced out of the shoulder socket (glenoid).",
        image: "/conditions/shoulder_dislocation.png",
        symptoms: [
          "A visibly deformed or out-of-place shoulder",
          "Intense pain",
          "Inability to move the joint",
          "Swelling and bruising"
        ],
        treatments: {
          nonSurgical: ["Closed reduction (manipulating bone back into place)", "Immobilization with a sling", "Rehabilitation exercises"],
          surgical: ["Surgery to repair torn ligaments or stabilize the joint"]
        }
      }
    ]
  },
  {
    id: "knee",
    slug: "knee",
    title: "Knee",
    seoH1: "Knee Pain & Knee Injury Treatment in Bangalore & Bengaluru",
    seoTitle: "Knee Pain & Knee Injury Treatment in Bangalore & Bengaluru | JointXperts",
    description: "Comprehensive care for knee osteoarthritis, ACL tears, meniscus injuries, and joint replacement by Dr. Syed Parveez Ahmed in Bangalore.",
    hubIntro:
      "Knee pain is one of the most frequent reasons patients visit an orthopedic surgeon in Bangalore and Bengaluru. As the primary weight-bearing joint connecting the femur, tibia, and patella, the knee absorbs tremendous repetitive ground impact during walking, stair climbing, running, and squatting. Whether caused by chronic wear-and-tear osteoarthritis, a sudden athletic twist tearing the ACL or meniscus, or patellar tendinitis, Dr. Syed Parveez Ahmed delivers complete, stepped-care orthopedic solutions spanning joint preservation therapies through state-of-the-art subvastus knee replacement.",
    clinicalDetails: [
      {
        heading: "Understanding the Spectrum of Knee Disorders",
        paragraphs: [
          "Knee conditions generally divide into two major categories: degenerative joint diseases and acute ligamentous or cartilaginous sports injuries. Knee osteoarthritis is a progressive loss of the natural protective articular cartilage cushioning the ends of the femur and tibia. In urban Bengaluru, sedentary work habits, genetic predisposition, and obesity frequently lead to premature cartilage thinning, resulting in painful bone-on-bone friction, knee deformities (such as bow-legs or knock-knees), and morning stiffness.",
          "On the sports medicine side, activities like badminton, football, cricket, and running place immense rotational stresses on the cruciate ligaments (ACL/PCL) and shock-absorbing menisci. A sudden pivot or awkward landing often produces an audible 'pop', acute swelling within hours, and the sensation that the knee is unstable or 'giving way'."
        ]
      },
      {
        heading: "Non-Surgical Joint Preservation Protocols",
        paragraphs: [
          "Surgery is never the first option for knee pain. At JointXperts, we emphasize conservative joint preservation protocols designed to postpone or avoid surgery. Early-to-moderate knee osteoarthritis is managed with high-molecular-weight hyaluronic acid viscosupplementation injections (which act as synthetic shock absorbers), Platelet-Rich Plasma (PRP) biological therapy, and custom biomechanical unloader braces that offload damaged joint compartments.",
          "Targeted physical therapy focuses on strengthening the quadriceps, hamstrings, and hip abductors to absorb shock forces before they reach the damaged joint surfaces."
        ]
      },
      {
        heading: "Surgical Mastery: Keyhole Arthroscopy & Rapid Recovery Arthroplasty",
        paragraphs: [
          "When joint degeneration reaches advanced Grade 4 bone-on-bone friction with severe deformity, or when an ACL tear threatens ongoing joint stability, surgery provides complete restoration of function. Dr. Syed Parveez Ahmed utilizes keyhole arthroscopic techniques for anatomical ligament reconstruction and meniscus preservation.",
          "For end-stage arthritis, Dr. Ahmed performs subvastus quadriceps-sparing Total Knee Arthroplasty (TKA). Because no major thigh muscle is severed, patients experience significantly lower post-operative discomfort, walk with assistance within 24 hours of surgery, and achieve full functional independence in weeks."
        ]
      }
    ],
    commonTreatments: [
      "Subvastus Quadriceps-Sparing Total Knee Replacement",
      "Partial (Unicompartmental) Knee Resurfacing",
      "Keyhole Arthroscopic ACL & PCL Reconstruction",
      "Arthroscopic Meniscus Repair & Preservation",
      "Hyaluronic Acid & PRP Joint Preservation Injections"
    ],
    conditions: [
      {
        id: "acl-injuries",
        slug: "acl-injuries",
        title: "ACL Injuries",
        shortDescription: "A tear or sprain of the anterior cruciate ligament, common in sports.",
        fullDescription: "An ACL injury is a tear or sprain of the anterior cruciate ligament — one of the strong bands of tissue that help connect your thigh bone (femur) to your shinbone (tibia). ACL injuries most commonly occur during sports that involve sudden stops or changes in direction.",
        image: "/conditions/knee_acl.png",
        symptoms: [
          "A loud 'pop' or a 'popping' sensation in the knee",
          "Severe pain and inability to continue activity",
          "Rapid swelling within hours",
          "Loss of range of motion",
          "A feeling of instability or 'giving way' with weight bearing"
        ],
        treatments: {
          nonSurgical: ["First aid (RICE: Rest, Ice, Compression, Elevation)", "Physical therapy and rehabilitation bracing"],
          surgical: ["ACL reconstruction using a tissue graft"]
        }
      },
      {
        id: "meniscus-tears",
        slug: "meniscus-tears",
        title: "Meniscus Tears",
        shortDescription: "A tearing of the shock-absorbing cartilage in the knee.",
        fullDescription: "A torn meniscus is one of the most common knee injuries. Any activity that causes you to forcefully twist or rotate your knee, especially when putting your full weight on it, can lead to a torn meniscus. Each of your knees has two menisci — C-shaped pieces of cartilage that act like a cushion.",
        image: "/conditions/knee_meniscus.png",
        symptoms: [
          "A popping sensation",
          "Swelling or stiffness",
          "Pain, especially when twisting or rotating your knee",
          "Difficulty straightening your knee fully",
          "Feeling as though your knee is locked in place"
        ],
        treatments: {
          nonSurgical: ["Rest, Ice, and Medication", "Physical therapy to strengthen leg muscles"],
          surgical: ["Arthroscopic repair", "Partial meniscectomy (removing the torn portion)"]
        }
      },
      {
        id: "knee-osteoarthritis",
        slug: "knee-osteoarthritis",
        title: "Knee Osteoarthritis",
        shortDescription: "Wear-and-tear arthritis leading to joint pain and stiffness.",
        fullDescription: "Osteoarthritis is the most common form of arthritis in the knee. It is a degenerative, wear-and-tear type of arthritis that occurs most often in people 50 years of age and older, though it may occur in younger people, too. The cartilage in the knee joint gradually wears away.",
        image: "/conditions/knee_osteoarthritis.png",
        symptoms: [
          "Pain that increases with activity and improves with rest",
          "Swelling or warmth in the joint",
          "Stiffness in the knee, especially in the morning",
          "Decreased mobility of the knee"
        ],
        treatments: {
          nonSurgical: ["Weight loss", "Physical therapy", "Assistive devices", "Injections (corticosteroids or hyaluronic acid)"],
          surgical: ["Total knee replacement", "Partial knee replacement", "Osteotomy"]
        }
      },
      {
        id: "patellar-tendinitis",
        slug: "patellar-tendinitis",
        title: "Patellar Tendinitis",
        shortDescription: "An injury to the tendon connecting your kneecap to your shinbone.",
        fullDescription: "Patellar tendinitis, also known as jumper's knee, is an injury to the tissue connecting your kneecap (patella) to your shinbone (tibia). The patellar tendon works with the muscles at the front of your thigh to extend your knee so you can kick, run and jump.",
        image: "/conditions/knee_tendinitis.png",
        symptoms: [
          "Pain between your kneecap and where the tendon attaches to your shinbone",
          "Pain that worsens with physical activity",
          "Tenderness around the lower part of the kneecap"
        ],
        treatments: {
          nonSurgical: ["Rest", "Ice", "Physical therapy (eccentric exercises)", "Patellar tendon strap"],
          surgical: ["Debridement of the tendon"]
        }
      }
    ]
  },
  {
    id: "spine",
    slug: "spine",
    title: "Spine",
    seoH1: "Spine Care, Back Pain & Sciatica Treatment in Bangalore & Bengaluru",
    seoTitle: "Spine Care, Back Pain & Sciatica Treatment in Bangalore & Bengaluru | JointXperts",
    description: "Advanced non-surgical and surgical spine care for herniated discs, sciatica, spinal stenosis, and chronic back pain in Bangalore.",
    hubIntro:
      "Spine health is fundamental to bodily alignment, neurological vitality, and pain-free daily activity. With prolonged computer usage, commute stresses on Bangalore roads, and posture fatigue, back pain and sciatica have reached unprecedented prevalence across Bangalore North and Central Bengaluru. Under the specialized clinical supervision of Dr. Syed Parveez Ahmed, JointXperts offers an integrated diagnostic and therapeutic spine center specializing in rapid pain relief, neurological decompression, and spine-strengthening rehabilitation.",
    clinicalDetails: [
      {
        heading: "Common Spinal Disorders & Neurological Symptoms",
        paragraphs: [
          "The human spine consists of 33 stacked vertebrae separated by spongy, shock-absorbing intervertebral discs. When an intervertebral disc herniates or bulges into the spinal canal, it impinges directly upon sensitive nerve roots. Lumbar disc herniations typically trigger 'sciatica'—a sharp, shooting, electric-shock pain radiating down the buttock, thigh, calf, and into the foot, often accompanied by numbness or pins-and-needles.",
          "Cervical spine degeneration causes radiating arm pain and finger weakness, while lumbar spinal stenosis (narrowing of the spinal canal) produces 'neurogenic claudication'—a cramp-like heaviness in the legs that worsens after walking a few hundred meters and relieves upon bending forward."
        ]
      },
      {
        heading: "Over 90% of Back Pain Resolves Non-Surgically",
        paragraphs: [
          "The vast majority of patients with back pain or disc herniation do not need surgery. Our conservative spine management protocol combines medical anti-inflammatory modulation, selective fluoroscopic epidural injections or nerve root blocks, mechanical spinal decompression, and specialized kinetic chain physiotherapy.",
          "Core stabilization exercises (such as pelvic tilts, bird-dogs, and monitored Pilates) train the deep multifidus and transversus abdominis muscles, creating a natural muscular corset that permanently unloads the spinal discs."
        ]
      },
      {
        heading: "When Is Surgical Decompression Indicated?",
        paragraphs: [
          "Surgical intervention is reserved for individuals with progressive neurological deficits (such as foot drop or severe motor weakness), intractable pain lasting beyond 6–12 weeks of structured care, or cauda equina syndrome. Dr. Ahmed performs minimally invasive microdiscectomy and endoscopic decompression through keyhole incisions, safeguarding spinal stability while relieving trapped nerves."
        ]
      }
    ],
    commonTreatments: [
      "Targeted Selective Nerve Root Blocks & Epidural Injections",
      "Minimally Invasive Microdiscectomy & Lumbar Decompression",
      "Non-Invasive Mechanical Spinal Decompression",
      "Ergonomic Postural Retraining & Core Rehabilitation",
      "Kyphoplasty / Vertebroplasty for Vertebral Fractures"
    ],
    conditions: [
      {
        id: "herniated-disc",
        slug: "herniated-disc",
        title: "Herniated Disc",
        shortDescription: "A problem with one of the rubbery cushions between the spinal bones.",
        fullDescription: "A herniated disc refers to a problem with one of the rubbery cushions (discs) that sit between the individual bones (vertebrae) that stack to make your spine. A herniated disc can irritate nearby nerves and result in pain, numbness or weakness in an arm or leg.",
        image: "/conditions/spine_herniated.png",
        symptoms: [
          "Arm or leg pain (depending on where the herniation is)",
          "Numbness or tingling in the affected body part",
          "Weakness in the muscles served by the affected nerves"
        ],
        treatments: {
          nonSurgical: ["Over-the-counter pain medications", "Cortisone injections", "Muscle relaxers", "Physical therapy"],
          surgical: ["Microdiscectomy", "Laminectomy", "Spinal fusion (in severe cases)"]
        }
      },
      {
        id: "sciatica",
        slug: "sciatica",
        title: "Sciatica",
        shortDescription: "Pain radiating along the sciatic nerve, which runs down one or both legs.",
        fullDescription: "Sciatica refers to pain that radiates along the path of the sciatic nerve, which branches from your lower back through your hips and buttocks and down each leg. Typically, sciatica affects only one side of your body. Sciatica most commonly occurs when a herniated disk, bone spur on the spine or narrowing of the spine compresses part of the nerve.",
        image: "/conditions/spine_sciatica.png",
        symptoms: [
          "Pain that radiates from lower spine to buttock and down the leg",
          "Discomfort almost anywhere along the nerve pathway",
          "Numbness, tingling, or muscle weakness in the affected leg or foot"
        ],
        treatments: {
          nonSurgical: ["Anti-inflammatories and muscle relaxants", "Physical therapy and stretching", "Steroid injections"],
          surgical: ["Surgery to remove the bone spur or portion of herniated disc"]
        }
      },
      {
        id: "spinal-stenosis",
        slug: "spinal-stenosis",
        title: "Spinal Stenosis",
        shortDescription: "A narrowing of the spaces within your spine.",
        fullDescription: "Spinal stenosis is a narrowing of the spaces within your spine, which can put pressure on the nerves that travel through the spine. Spinal stenosis occurs most often in the lower back and the neck.",
        image: "/conditions/spine_stenosis.png",
        symptoms: [
          "Numbness or tingling in a hand, arm, foot or leg",
          "Weakness in a hand, arm, foot or leg",
          "Problems with walking and balance",
          "Neck or back pain"
        ],
        treatments: {
          nonSurgical: ["Medications (pain relievers, antidepressants, anti-seizure)", "Physical therapy", "Steroid injections"],
          surgical: ["Laminectomy", "Laminotomy", "Laminoplasty"]
        }
      },
      {
        id: "scoliosis",
        slug: "scoliosis",
        title: "Scoliosis",
        shortDescription: "A sideways curvature of the spine.",
        fullDescription: "Scoliosis is a sideways curvature of the spine that most often is diagnosed in adolescents. While scoliosis can occur in people with conditions such as cerebral palsy and muscular dystrophy, the cause of most childhood scoliosis is unknown.",
        image: "/conditions/spine_scoliosis.png",
        symptoms: [
          "Uneven shoulders",
          "One shoulder blade that appears more prominent than the other",
          "Uneven waist",
          "One hip higher than the other"
        ],
        treatments: {
          nonSurgical: ["Observation (for mild curves)", "Bracing (for growing children)"],
          surgical: ["Spinal fusion surgery"]
        }
      }
    ]
  },
  {
    id: "fracture",
    slug: "fracture",
    title: "Fracture",
    seoH1: "Fracture Management & Bone Trauma Surgery in Bangalore & Bengaluru",
    seoTitle: "Fracture Treatment & Bone Trauma Surgery in Bangalore & Bengaluru | JointXperts",
    description: "Urgent trauma care, precision casting, and advanced internal fixation for broken bones across Bangalore North and Central Bengaluru.",
    hubIntro:
      "Skeletal trauma and bone fractures require prompt, accurate radiological assessment and anatomical stabilization to prevent permanent bone deformity, non-union, and chronic joint stiffness. Whether resulting from a slip and fall at home, a sports collision on the field, or a high-velocity vehicular accident on Bangalore roads, Dr. Syed Parveez Ahmed delivers comprehensive orthopedic fracture management utilizing cutting-edge radiological templating, lightweight functional casting, and precision internal fixation.",
    clinicalDetails: [
      {
        heading: "Types of Fractures & Urgent Clinical Evaluation",
        paragraphs: [
          "Fractures range from simple non-displaced hairline cracks to complex multi-fragmented intra-articular injuries and open fractures. In elderly individuals with underlying osteopenia or osteoporosis, low-energy falls commonly cause hip fractures (femoral neck or trochanteric), wrist fractures (distal radius), or vertebral compression fractures. In active adults and sports enthusiasts, high-impact injuries frequently involve the collarbone (clavicle), ankle joint, or long bones of the leg and arm.",
          "Immediate evaluation within hours of injury is vital to check distal blood flow, nerve reflexes, and soft tissue swelling, ensuring the fracture is safely immobilized before swelling peaks."
        ]
      },
      {
        heading: "Modern Casting & Minimally Invasive Stabilization",
        paragraphs: [
          "Stable, non-displaced fractures are managed without surgery using modern lightweight, water-resistant fiberglass casts and custom splints. These offer superior comfort, skin breathability, and structural rigidity compared to traditional plaster of Paris.",
          "When bone fragments are shifted or unstable, surgical Open Reduction and Internal Fixation (ORIF) is performed using low-profile anatomical titanium plates and screws. For long bone fractures, Minimally Invasive Percutaneous Plate Osteosynthesis (MIPPO) and interlocking intramedullary nailing stabilize bones through miniature incisions, preserving blood supply to the bone and accelerating biological bone union."
        ]
      },
      {
        heading: "Structured Rehabilitation to Avoid Joint Stiffness",
        paragraphs: [
          "Bone healing is only half the journey; restoring joint mobility and muscle strength prevents long-term disability. Under Dr. Ahmed's guided post-union protocol, active joint mobilization and progressive weight-bearing physiotherapy begin as soon as bone callus stability is radiologically verified."
        ]
      }
    ],
    commonTreatments: [
      "Open Reduction & Internal Fixation (ORIF) with Titanium Plates",
      "Minimally Invasive Percutaneous Plate Osteosynthesis (MIPPO)",
      "Interlocking Intramedullary Nailing for Long Bones",
      "Lightweight Breathable Fiberglass Casting & Splinting",
      "Post-Union Joint Stiffness Mobilization Physical Therapy"
    ],
    conditions: [
      {
        id: "collarbone-fractures",
        slug: "collarbone-fractures",
        title: "Collarbone Fractures",
        shortDescription: "A break in the clavicle, one of the main bones in the shoulder.",
        fullDescription: "A broken collarbone (clavicle) is a common injury, particularly in children and young adults. Your collarbone connects the upper part of your breastbone to your shoulder blade. Common causes of a broken collarbone include falls, sports injuries, and trauma from traffic accidents.",
        image: "/conditions/fracture_collarbone.png",
        symptoms: [
          "Pain that increases with shoulder movement",
          "Swelling, tenderness, and bruising",
          "A bulge on or near your shoulder",
          "A grinding or crackling sound when you try to move your shoulder"
        ],
        treatments: {
          nonSurgical: ["Arm support using a sling", "Pain medication", "Physical therapy once the bone begins to heal"],
          surgical: ["Internal fixation using plates and screws to maintain alignment"]
        }
      },
      {
        id: "wrist-fractures",
        slug: "wrist-fractures",
        title: "Wrist Fractures",
        shortDescription: "A break in one or more of the bones in the wrist.",
        fullDescription: "A broken wrist usually involves the radius, the larger of the two bones in your forearm. The most common cause is falling on an outstretched hand. Immediate treatment is essential for proper healing and to avoid long-term complications.",
        image: "/conditions/fracture_wrist.png",
        symptoms: [
          "Severe pain that might worsen when gripping or squeezing",
          "Swelling and bruising",
          "Obvious deformity, such as a bent wrist"
        ],
        treatments: {
          nonSurgical: ["Immobilization with a cast or splint", "Pain management", "Physical therapy"],
          surgical: ["Open reduction and internal fixation (ORIF)"]
        }
      },
      {
        id: "hip-fractures",
        slug: "hip-fractures",
        title: "Hip Fractures",
        shortDescription: "A serious injury involving a break in the upper quarter of the femur.",
        fullDescription: "A hip fracture is a serious injury, with complications that can be life-threatening. The risk of hip fracture rises with age. Older people are at higher risk of hip fracture because bones tend to weaken with age (osteoporosis).",
        image: "/conditions/fracture_hip.png",
        symptoms: [
          "Inability to move immediately after a fall",
          "Severe pain in your hip or groin",
          "Inability to put weight on your leg on the side of your injured hip",
          "Stiffness, bruising and swelling in and around your hip area"
        ],
        treatments: {
          nonSurgical: ["Rarely recommended unless surgery is unsafe"],
          surgical: ["Internal repair using screws", "Total hip replacement", "Partial hip replacement"]
        }
      },
      {
        id: "ankle-fractures",
        slug: "ankle-fractures",
        title: "Ankle Fractures",
        shortDescription: "A break in one or more of the bones that make up the ankle joint.",
        fullDescription: "An ankle fracture involves a break in one or more of the bones that make up the ankle joint: the tibia, the fibula, and the talus. Ankle fractures can range from a simple break in one bone to several fractures.",
        image: "/conditions/fracture_ankle.png",
        symptoms: [
          "Immediate and severe pain",
          "Swelling and bruising",
          "Tenderness to the touch",
          "Inability to put weight on the injured foot",
          "Deformity, particularly if the ankle joint is also dislocated"
        ],
        treatments: {
          nonSurgical: ["Immobilization with a cast or walking boot", "Crutches to avoid bearing weight"],
          surgical: ["Screws, plates, or rods to realign and hold bones together"]
        }
      }
    ]
  },
  {
    id: "physiotherapy",
    slug: "physiotherapy",
    title: "Physiotherapy",
    seoH1: "Orthopedic Physiotherapy & Post-Surgical Rehab in Bangalore & Bengaluru",
    seoTitle: "Orthopedic Physiotherapy & Rehabilitation in Bangalore & Bengaluru | JointXperts",
    description: "Evidence-based physical therapy, gait retraining, sports conditioning, and post-operative orthopedic rehabilitation in Bangalore.",
    hubIntro:
      "Physical therapy and rehabilitation are the indispensable pillars of long-term musculoskeletal wellness. Whether recovering from total knee arthroplasty, arthroscopic ligament reconstruction, spinal surgery, or a debilitating sports injury, the ultimate success of orthopedic treatment depends on structured, progressive rehabilitation. Supervised by Dr. Syed Parveez Ahmed, our specialized physiotherapy programs across Bangalore North and Central Bengaluru restore joint range of motion, re-educate muscle firing patterns, and safely return patients to active, independent lifestyles.",
    clinicalDetails: [
      {
        heading: "Phased Rehabilitation Protocols",
        paragraphs: [
          "Rehabilitation at JointXperts follows a carefully phased, criterion-based protocol tailored to tissue healing timelines rather than arbitrary calendar dates. Phase 1 focuses on gentle edema reduction, pain management, scar tissue prevention, and early passive range-of-motion. For joint replacement patients, bedside mobilization begins on Day 1 to prevent deep vein thrombosis (DVT) and muscular inhibition.",
          "As healing progresses into Phase 2 and Phase 3, therapy introduces active-assisted exercises, proprioceptive neuromuscular facilitation (PNF), closed-kinetic-chain strengthening, and core muscular stabilization."
        ]
      },
      {
        heading: "Sports Injury Conditioning & Return-to-Play Testing",
        paragraphs: [
          "For runners, badminton players, and athletes recovering from ACL or rotator cuff surgery, our rehabilitation center emphasizes objective biomechanical screenings. Using video gait analysis, limb symmetry index (LSI) measurements, and single-leg hop testing, we ensure that muscle power and dynamic neuromuscular control are fully restored before clearing athletes for competitive return to play, reducing re-injury risks to near zero."
        ]
      },
      {
        heading: "Posture Correction & Ergonomic Conditioning",
        paragraphs: [
          "For tech professionals and desk workers in Bangalore, specialized postural correction exercises strengthen weak postural stabilizers (rhomboids, lower trapezius, gluteals) while releasing chronically tight hip flexors and pectorals, providing permanent relief from postural back and neck fatigue."
        ]
      }
    ],
    commonTreatments: [
      "Day 1 Post-Operative Arthroplasty Mobilization",
      "Proprioceptive Neuromuscular Facilitation (PNF) Stretching",
      "Biomechanical Video Gait Analysis & Retraining",
      "Sports-Specific Agility & Plyometric Conditioning",
      "Ergonomic Core Stabilization & Postural Education"
    ],
    conditions: [
      {
        id: "post-operative-rehab",
        slug: "post-operative-rehab",
        title: "Post-Operative Rehabilitation",
        shortDescription: "Essential physical therapy to restore function after surgery.",
        fullDescription: "Post-operative rehabilitation is crucial for achieving the best possible outcome following orthopedic surgery. It involves a progressive program of exercises and therapies designed to restore range of motion, build strength, reduce pain, and prevent scar tissue formation.",
        image: "/conditions/physio_postop_rehab.png",
        symptoms: [
          "Post-surgical stiffness",
          "Muscle weakness around the surgical site",
          "Swelling and localized pain",
          "Difficulty performing activities of daily living"
        ],
        treatments: {
          nonSurgical: ["Manual therapy and joint mobilization", "Progressive resistance exercises", "Gait and balance training", "Modalities like ice, heat, or electrical stimulation"]
        }
      },
      {
        id: "sports-injury-recovery",
        slug: "sports-injury-recovery",
        title: "Sports Injury Recovery",
        shortDescription: "Specialized rehab for athletic injuries to return to play.",
        fullDescription: "Sports injury recovery focuses on getting athletes back to their pre-injury level of activity. Treatment plans are highly individualized based on the sport, the specific injury, and the athlete's goals, focusing heavily on dynamic strength and agility.",
        image: "/conditions/physio_sports_injury.png",
        symptoms: [
          "Acute pain from sudden impact or sprain",
          "Chronic pain from overuse",
          "Decreased athletic performance",
          "Instability during physical activity"
        ],
        treatments: {
          nonSurgical: ["Sports-specific functional training", "Plyometrics", "Kinesio taping", "Soft tissue massage"]
        }
      },
      {
        id: "core-strengthening",
        slug: "core-strengthening",
        title: "Core Strengthening",
        shortDescription: "Targeted exercises to stabilize the spine and pelvis.",
        fullDescription: "Core strengthening is a fundamental component of physical therapy, particularly for back pain and lower extremity issues. A strong core provides a stable foundation for all movement, reducing stress on the spine and peripheral joints.",
        image: "/conditions/physio_core_strengthening.png",
        symptoms: [
          "Chronic lower back pain",
          "Poor posture",
          "Balance issues",
          "General weakness leading to compensation injuries"
        ],
        treatments: {
          nonSurgical: ["Pilates-based rehabilitation", "Stability ball exercises", "Planks and bridging progressions", "Postural education"]
        }
      }
    ]
  },
  {
    id: "foot-ankle",
    slug: "foot-ankle",
    title: "Foot & Ankle",
    seoH1: "Foot & Ankle Pain and Plantar Fasciitis Treatment in Bangalore & Bengaluru",
    seoTitle: "Foot & Ankle Pain and Plantar Fasciitis Treatment in Bangalore & Bengaluru | JointXperts",
    description: "Specialized diagnosis and treatments for plantar fasciitis, heel spurs, Achilles tendinitis, and ankle ligament injuries in Bangalore.",
    hubIntro:
      "The human foot and ankle contain 26 bones, 33 complex articulating joints, and over 100 ligaments and tendons that bear the entire kinetic weight of the body with every step. When acute sports trauma or chronic biomechanical strain affects the foot, everyday mobility and work productivity are severely hindered. Dr. Syed Parveez Ahmed offers comprehensive clinical and non-surgical care for foot and ankle disorders across Bangalore North and Central Bengaluru, specializing in plantar fasciitis relief, Achilles tendinitis recovery, and chronic ankle ligament reconstruction.",
    clinicalDetails: [
      {
        heading: "Plantar Fasciitis: The Leading Cause of Morning Heel Pain",
        paragraphs: [
          "Plantar fasciitis is an overuse degeneration of the dense fibrous plantar aponeurosis that supports the longitudinal arch of the foot. Its hallmark presentation is acute, stabbing heel pain upon taking the first steps out of bed in the morning or after sitting for prolonged periods. As the fascia warms up, pain may temporarily lessen, only to throb sharply after prolonged standing or walking.",
          "Factors contributing to plantar fasciitis include improper flat footwear, walking on unyielding marble or tiled floors barefoot, tight calf muscles, high-arched or flat feet, and repetitive running impact."
        ]
      },
      {
        heading: "Achilles Tendinopathy & Ankle Ligament Sprains",
        paragraphs: [
          "The Achilles tendon is the thickest and strongest tendon in the human body, connecting the calf muscles to the calcaneus (heel bone). Overuse, sudden sprint accelerations, or tight gastrocnemius muscles can cause micro-tears and chronic tendinopathy, resulting in morning stiffness and swelling behind the ankle.",
          "Ankle sprains—particularly lateral ligament tears involving the anterior talofibular ligament (ATFL)—occur frequently in sports. Inadequately treated sprains frequently progress to chronic ankle instability, where the ankle repeatedly 'rolls' on uneven surfaces."
        ]
      },
      {
        heading: "Comprehensive Non-Surgical & Regenerative Treatment",
        paragraphs: [
          "Over 95% of foot and ankle conditions heal completely without surgery. Dr. Syed Parveez Ahmed designs individualized treatment pathways utilizing custom arch-support orthotics, night splints, frozen bottle rolling, and targeted eccentric gastrocnemius stretching.",
          "For stubborn or chronic cases, ultrasound-guided Platelet-Rich Plasma (PRP) biological injections and extracorporeal shockwave therapy (ESWT) trigger vascular regeneration and tissue remodeling. In chronic ankle instability, keyhole arthroscopic ligament repair restores structural joint firmness."
        ]
      }
    ],
    commonTreatments: [
      "Custom Biomechanical Foot Orthotics & Arch Supports",
      "Ultrasound-Guided PRP Injections for Heel & Tendon Pain",
      "Eccentric Gastrocnemius & Plantar Fascia Conditioning",
      "Ankle Arthroscopy & Ligament Stabilization (Brostrom-Gould)",
      "Night Splint Immobilization & Targeted Physical Therapy"
    ],
    conditions: [
      {
        id: "plantar-fasciitis",
        slug: "plantar-fasciitis",
        title: "Plantar Fasciitis & Heel Pain",
        shortDescription: "Severe morning heel pain and inflammation of the tissue along the bottom of the foot.",
        fullDescription: "Plantar fasciitis is one of the most common causes of heel pain, involving inflammation of the thick plantar fascia connecting your heel bone to your toes. Typically presenting with intense stabbing pain during the first morning steps, it responds exceptionally well to structured stretching, custom orthotics, and biological PRP therapies.",
        image: "/blogs/blog_plantar_fasciitis.png",
        symptoms: [
          "Sharp stabbing heel pain during the first morning steps out of bed",
          "Pain that increases after prolonged periods of standing or walking",
          "Tenderness when pressing the bottom center of the heel",
          "Stiffness and tight sensation in the arch of the foot"
        ],
        treatments: {
          nonSurgical: ["Custom biomechanical orthotic shoe inserts", "Eccentric calf and plantar fascia stretching", "Night splints and ice massage", "Ultrasound-guided PRP injections"],
          surgical: ["Rarely required; minimally invasive endoscopic plantar fascia release for refractory cases"]
        }
      },
      {
        id: "achilles-tendinitis",
        slug: "achilles-tendinitis",
        title: "Achilles Tendinitis & Heel Cord Pain",
        shortDescription: "Overuse injury causing tenderness and stiffness behind the heel and lower calf.",
        fullDescription: "Achilles tendinitis is an overuse injury of the Achilles tendon, the band of tissue connecting calf muscles at the back of the lower leg to your heel bone. Commonly affecting runners, badminton players, and active adults, it causes burning stiffness that worsens after physical exertion.",
        image: "/blogs/blog_plantar_fasciitis.png",
        symptoms: [
          "Aching discomfort or burning stiffness above the heel after running or walking",
          "Visible thickening or nodular swelling along the Achilles tendon",
          "Morning stiffness that eases with mild activity",
          "Tenderness when squeezing the sides of the tendon"
        ],
        treatments: {
          nonSurgical: ["Heel lifts and shoe modification", "Eccentric calf strengthening (Alfredson protocol)", "Ice therapy and activity modification", "PRP regenerative therapy"],
          surgical: ["Debridement and tendon repair in chronic non-healing tears"]
        }
      },
      {
        id: "ankle-sprain-instability",
        slug: "ankle-sprain-instability",
        title: "Ankle Sprain & Chronic Instability",
        shortDescription: "Torn or stretched ligaments causing recurrent rolling and 'giving way' of the ankle.",
        fullDescription: "An ankle sprain occurs when the ligaments that support the ankle stretch or tear beyond their normal limit, typically when the foot twists inward (inversion injury). Repeated or poorly healed sprains cause chronic lateral ankle instability, leaving the joint susceptible to repeated rolling and cartilage damage.",
        image: "/conditions/fracture_ankle.png",
        symptoms: [
          "Sudden sharp pain and rapid swelling around the outer ankle bone",
          "Subcutaneous bruising extending down the side of the foot",
          "Feeling that the ankle is weak, wobbly, or frequently giving way",
          "Pain when walking on uneven ground or pivoting"
        ],
        treatments: {
          nonSurgical: ["RICE protocol and functional ankle stabilizing brace", "Peroneal muscle strengthening and proprioceptive wobble board balance training", "Anti-inflammatory pain management"],
          surgical: ["Arthroscopic lateral ligament reconstruction (Brostrom-Gould repair)"]
        }
      }
    ]
  }
];
