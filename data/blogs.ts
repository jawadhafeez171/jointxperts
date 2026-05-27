export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  gradient: string;
  image: string;
}

export const blogs: BlogPost[] = [
  {
    id: "1",
    slug: "understanding-osteoarthritis",
    title: "Understanding Osteoarthritis: The Wear-and-Tear Arthritis",
    excerpt: "Osteoarthritis is the most common form of joint disease. Discover the causes, symptoms, and modern management strategies.",
    content: `
      <h2>What is Osteoarthritis?</h2>
      <p>Osteoarthritis (OA) is often referred to as "wear-and-tear" arthritis. It occurs when the protective cartilage that cushions the ends of the bones wears down over time. While osteoarthritis can damage any joint, the disorder most commonly affects joints in your hands, knees, hips, and spine.</p>
      
      <h2>Common Symptoms</h2>
      <ul>
        <li><strong>Pain:</strong> Affected joints might hurt during or after movement.</li>
        <li><strong>Stiffness:</strong> Joint stiffness might be most noticeable upon awakening or after being inactive.</li>
        <li><strong>Tenderness:</strong> Your joint might feel tender when you apply light pressure to or near it.</li>
        <li><strong>Loss of Flexibility:</strong> You might not be able to move your joint through its full range of motion.</li>
      </ul>

      <h2>Management Strategies</h2>
      <p>While the process underlying osteoarthritis cannot be reversed, symptoms can usually be effectively managed. Staying active, maintaining a healthy weight, and certain treatments might slow progression of the disease and help improve pain and joint function.</p>
      <p>Modern approaches include <strong>physical therapy</strong>, <strong>corticosteroid injections</strong>, and in advanced cases, <strong>joint replacement surgery</strong>.</p>
    `,
    author: "Dr. Syed Parveez Ahmed",
    date: "May 10, 2026",
    readTime: "5 min read",
    category: "Joint Care",
    gradient: "from-[#0f2d5e] to-[#1a4a8a]",
    image: "/blogs/blog_osteoarthritis.png",
  },
  {
    id: "2",
    slug: "acl-tears-recovery",
    title: "ACL Tears: From Injury to Full Recovery",
    excerpt: "An ACL injury is the tearing of the anterior cruciate ligament. Learn about the surgical and non-surgical pathways to get back on your feet.",
    content: `
      <h2>The Role of the ACL</h2>
      <p>The anterior cruciate ligament (ACL) is one of the key ligaments that help stabilize your knee joint. ACL injuries most commonly occur during sports that involve sudden stops or changes in direction, jumping, and landing.</p>
      
      <h2>Signs of an ACL Tear</h2>
      <ul>
        <li>A loud "pop" or a "popping" sensation in the knee</li>
        <li>Severe pain and inability to continue activity</li>
        <li>Rapid swelling</li>
        <li>Loss of range of motion</li>
        <li>A feeling of instability or "giving way" with weight bearing</li>
      </ul>

      <h2>Treatment Pathways</h2>
      <p>Treatment for an ACL injury varies depending on the patient's needs. A young athlete involved in agility sports will most likely require surgery to safely return to sports. The less active, older individual may be able to return to a quieter lifestyle without surgery.</p>
      <p><strong>Rehabilitation</strong> plays a crucial role in both surgical and non-surgical treatments. Physical therapy focuses on restoring strength to the muscles surrounding the knee and regaining a full range of motion.</p>
    `,
    author: "Dr. Syed Parveez Ahmed",
    date: "April 28, 2026",
    readTime: "6 min read",
    category: "Sports Injuries",
    gradient: "from-[#2e8b57] to-[#3aad6e]",
    image: "/blogs/blog_acl_recovery.png",
  },
  {
    id: "3",
    slug: "rotator-cuff-tears",
    title: "Decoding Shoulder Pain: Rotator Cuff Tears",
    excerpt: "Shoulder pain keeping you awake? A rotator cuff tear might be the culprit. Explore the symptoms and advanced arthroscopic solutions.",
    content: `
      <h2>Understanding the Rotator Cuff</h2>
      <p>The rotator cuff is a group of four muscles and their tendons that come together to form a covering around the head of the humerus. This cuff attaches the humerus to the shoulder blade and helps to lift and rotate your arm.</p>
      
      <h2>How Tears Occur</h2>
      <p>Rotator cuff tears can occur in two ways: acutely (from an injury like a fall) or chronically (from degeneration and wear-and-tear over time). Degenerative tears are increasingly common as we age.</p>

      <h2>Symptoms</h2>
      <ul>
        <li>Pain at rest and at night, particularly if lying on the affected shoulder</li>
        <li>Pain when lifting and lowering your arm or with specific movements</li>
        <li>Weakness when lifting or rotating your arm</li>
        <li>Crepitus or a crackling sensation when moving your shoulder in certain positions</li>
      </ul>

      <h2>Treatment Options</h2>
      <p>Many patients with rotator cuff tears manage their symptoms through non-surgical treatments such as rest, activity modification, nonsteroidal anti-inflammatory medications, and physical therapy. When surgery is required, modern <strong>arthroscopic techniques</strong> allow for minimally invasive repair and faster recovery times.</p>
    `,
    author: "Dr. Syed Parveez Ahmed",
    date: "April 15, 2026",
    readTime: "4 min read",
    category: "Shoulder Care",
    gradient: "from-[#091d3d] to-[#0f3d2e]",
    image: "/blogs/blog_rotator_cuff.png",
  },
  {
    id: "4",
    slug: "plantar-fasciitis-relief",
    title: "Overcoming Plantar Fasciitis and Heel Pain",
    excerpt: "Experiencing sharp heel pain with your first morning steps? Learn how to manage and overcome Plantar Fasciitis.",
    content: `
      <h2>The Morning Misery</h2>
      <p>Plantar fasciitis is one of the most common causes of heel pain. It involves inflammation of a thick band of tissue that runs across the bottom of your foot and connects your heel bone to your toes.</p>
      
      <h2>What Causes It?</h2>
      <p>The plantar fascia is designed to absorb the high stresses and strains we place on our feet. But, sometimes, too much pressure damages or tears the tissues. The body's natural response to injury is inflammation, which results in the heel pain and stiffness of plantar fasciitis.</p>

      <h2>Effective Relief Strategies</h2>
      <ul>
        <li><strong>Stretching:</strong> Calf and plantar fascia stretches are the most effective way to relieve pain.</li>
        <li><strong>Ice:</strong> Rolling your foot over a frozen water bottle for 20 minutes a day is effective.</li>
        <li><strong>Footwear:</strong> Supportive shoes and custom orthotics can reduce tension on the fascia.</li>
        <li><strong>Rest:</strong> Decreasing or stopping the activities that make the pain worse is the first step in reducing pain.</li>
      </ul>
      <p>If conservative treatments don't yield results after several months, your orthopedic specialist may recommend extracorporeal shock wave therapy or, rarely, surgery.</p>
    `,
    author: "Dr. Syed Parveez Ahmed",
    date: "March 30, 2026",
    readTime: "4 min read",
    category: "Foot & Ankle",
    gradient: "from-[#1a3a6b] to-[#2e8b57]",
    image: "/blogs/blog_plantar_fasciitis.png",
  }
];
