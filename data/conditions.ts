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
  description: string;
  conditions: Condition[];
}

export const conditionCategories: ConditionCategory[] = [
  {
    id: "shoulder",
    slug: "shoulder",
    title: "Shoulder",
    description: "Expert diagnosis and treatment for all shoulder-related conditions, restoring your mobility and strength.",
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
    description: "Comprehensive care for knee injuries and degenerative conditions to keep you moving pain-free.",
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
    description: "Advanced treatments for spinal disorders, back pain, and nerve compression issues.",
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
    description: "Immediate and long-term care for broken bones, ensuring proper healing and alignment.",
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
    description: "Targeted rehabilitation and physical therapy programs for post-op and injury recovery.",
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
  }
];
