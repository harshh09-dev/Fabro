export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  readTime: number;
  category: string;
  publishedAt: string;
  relatedProductIds: string[];
}

export const journalArticles: JournalArticle[] = [
  {
    id: "j1",
    title: "The History of Chikankari Embroidery",
    slug: "history-of-chikankari",
    excerpt: "Tracing Lucknow's most celebrated embroidery tradition from Mughal courts to modern fashion.",
    content: [
      "Chikankari is one of India's most refined embroidery traditions, originating in the royal courts of Lucknow during the Mughal era. The word 'chikan' is derived from the Persian word 'chikin' meaning a cloth wrought with needlework.",
      "Legend has it that Nur Jahan, the queen of Mughal emperor Jahangir, introduced this craft to Lucknow in the 17th century. What began as royal patronage evolved into a living craft sustained by thousands of artisan families across Uttar Pradesh.",
      "The craft involves over 36 distinct stitches, each with its own character. The most celebrated include 'tepchi' (running stitch), 'bakhia' (shadow work), 'jaali' (net-like lattice), and 'murri' (rice-grain knots). A single garment may combine multiple stitch types.",
      "Traditional Chikankari was done on white muslin with white thread — a study in texture rather than color. Today the craft has expanded to include colored threads and diverse fabrics, while purists still revere the all-white aesthetic.",
      "At FABRO, we work with third-generation Chikankari artisans in Lucknow who maintain the integrity of traditional techniques while embracing contemporary silhouettes. Each piece takes between 20 to 60 hours of hand-stitching.",
    ],
    coverImage: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=1200&q=80",
    readTime: 6,
    category: "Heritage",
    publishedAt: "2026-02-15",
    relatedProductIds: ["1", "6"],
  },
  {
    id: "j2",
    title: "How Zardozi Embroidery is Crafted",
    slug: "how-zardozi-is-crafted",
    excerpt: "Inside the meticulous process of creating gold threadwork that has adorned royalty for centuries.",
    content: [
      "Zardozi, meaning 'gold sewing' in Persian, is one of the most opulent forms of embroidery in the Indian subcontinent. This ancient craft dates back over 3,000 years and reached its pinnacle during the Mughal period.",
      "The technique involves couching gold and silver metallic threads onto fabric using a small hooked needle called an 'ari'. Artisans also incorporate sequins, beads, pearls, and precious stones to create elaborate designs.",
      "Traditional Zardozi work is done on heavy fabrics like velvet, silk, and satin. The artisan stretches the fabric taut on a wooden frame called an 'adda' and works from the top, pushing the needle through with one hand and pulling it from below with the other.",
      "A single Zardozi piece can take weeks to months to complete. The most intricate bridal pieces may require a team of artisans working for several months. The weight of the metallic threadwork often makes these garments notably heavier than their base fabric.",
      "FABRO's Zardozi collection bridges this royal tradition with modern wearability, using lighter metallic threads and strategic placement that honors the craft without overwhelming the garment.",
    ],
    coverImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&q=80",
    readTime: 5,
    category: "Craft",
    publishedAt: "2026-02-01",
    relatedProductIds: ["2", "8"],
  },
  {
    id: "j3",
    title: "Caring for Hand Embroidered Clothing",
    slug: "caring-for-embroidered-clothing",
    excerpt: "Essential tips to preserve the beauty and longevity of your handcrafted garments.",
    content: [
      "Hand-embroidered clothing is an investment in artistry. With proper care, these pieces can last generations, becoming more beautiful with time. Here's how to ensure your embroidered garments stay pristine.",
      "Always check the care label first. Chikankari on cotton can often be gently hand-washed, while Zardozi pieces typically require professional dry cleaning. Kantha and Phulkari items fall somewhere in between.",
      "When washing by hand, use cold water and a mild detergent. Never wring or twist embroidered fabric — instead, gently press water out and lay flat to dry. Avoid direct sunlight during drying as it can fade thread colors.",
      "Store embroidered garments flat or on padded hangers. Avoid folding along embroidered areas, as this can crack metallic threads or distort patterns. Use muslin dust bags rather than plastic, which can trap moisture.",
      "For any stains, blot gently rather than rubbing. Take the garment to a specialist cleaner familiar with embroidered textiles. A little care goes a long way in preserving the artisan's work for years to come.",
    ],
    coverImage: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1200&q=80",
    readTime: 4,
    category: "Care Guide",
    publishedAt: "2026-01-20",
    relatedProductIds: ["1", "3"],
  },
  {
    id: "j4",
    title: "The Story of Indian Textile Heritage",
    slug: "indian-textile-heritage",
    excerpt: "How India became the world's richest textile tradition spanning five millennia of innovation.",
    content: [
      "India's textile heritage is one of the oldest and most diverse in the world, dating back to the Indus Valley Civilization around 3000 BCE. Archaeological evidence from Mohenjo-daro reveals sophisticated dyeing and weaving techniques.",
      "Each region of India developed its own distinct textile identity. Kashmir became renowned for Pashmina shawls, Bengal for Jamdani muslins, Gujarat for Patola silk, and Varanasi for Banarasi brocades. These traditions were shaped by local materials, climate, and cultural influences.",
      "Indian textiles were prized globally for centuries. The word 'calico' comes from Calicut, 'chintz' from the Hindi 'chint', and 'muslin' from Mosul — though the finest muslins were woven in Dhaka. Indian fabric exports drove much of the maritime silk route trade.",
      "The colonial period devastated India's textile industry through policies that favored British manufactured cloth. Gandhi's spinning wheel became a powerful symbol of self-reliance and the independence movement.",
      "Today, India's textile traditions are experiencing a renaissance. Brands like FABRO are connecting artisan communities directly with global consumers, ensuring fair compensation and keeping ancient techniques alive for future generations.",
    ],
    coverImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    readTime: 7,
    category: "Heritage",
    publishedAt: "2026-01-10",
    relatedProductIds: ["3", "5"],
  },
  {
    id: "j5",
    title: "Phulkari: The Flower Work of Punjab",
    slug: "phulkari-flower-work-punjab",
    excerpt: "Exploring Punjab's vibrant folk embroidery tradition that transforms fabric into fields of flowers.",
    content: [
      "Phulkari, literally meaning 'flower work', is a vibrant embroidery tradition from Punjab that dates back to the 15th century. Unlike most embroidery that works from the front, Phulkari is created from the wrong side of the fabric.",
      "The artisan uses a long needle to create geometric patterns using satin stitch, working entirely from the back. The designs emerge as dazzling geometric flowers, stars, and motifs on the front — a testament to the artisan's spatial intelligence.",
      "Traditionally, Phulkari was created by women for personal use and as part of a bride's trousseau. The most elaborate form, 'Bagh' (garden), covers the entire fabric surface with embroidery, leaving almost no base fabric visible.",
      "Each region of Punjab has its own Phulkari style. Patterns often carry symbolic meaning — peacocks represent beauty, wheat sheaves symbolize prosperity, and geometric flowers celebrate nature's abundance.",
      "At FABRO, we work with Phulkari artisans in Patiala who maintain traditional techniques while adapting designs for contemporary fashion. Our dupattas and accessories showcase this joyful craft in its full vibrancy.",
    ],
    coverImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80",
    readTime: 5,
    category: "Craft",
    publishedAt: "2025-12-28",
    relatedProductIds: ["3"],
  },
];
