export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'kurtis' | 'shirts' | 'dupattas' | 'jeans' | 'accessories';
  embroideryType: 'chikankari' | 'kantha' | 'zardozi' | 'phulkari' | 'kashida';
  fabricType: 'cotton' | 'linen' | 'silk' | 'denim';
  color: string;
  rating: number;
  reviews: number;
  images: string[];
  description: string;
  embroideryDetails: string;
  fabricDetails: string;
  sizes: string[];
  badge?: string;
  artisanId?: string;
  isBestseller?: boolean;
  isTrending?: boolean;
  isNewArrival?: boolean;
  isOnSale?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Ivory Heirloom Kurti",
    price: 3500,
    originalPrice: 4200,
    category: "kurtis",
    embroideryType: "chikankari",
    color: "Ivory",
    rating: 4.8,
    reviews: 45,
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80"
    ],
    description: "Hand-embroidered ivory kurti with traditional peacock motifs. A timeless piece crafted by master artisans in Lucknow.",
    embroideryDetails: "Traditional Lucknowi Chikankari with shadow work and jaali patterns. Over 40 hours of hand-stitching.",
    fabricDetails: "Pure cotton mull, pre-washed for softness. Breathable and perfect for all seasons.",
    fabricType: "cotton",
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "Bestseller",
    artisanId: "a1",
    isBestseller: true,
    isTrending: true,
    isOnSale: true,
  },
  {
    id: "2",
    name: "Maroon Wine Shirt",
    price: 2800,
    category: "shirts",
    embroideryType: "zardozi",
    color: "Maroon",
    rating: 4.6,
    reviews: 38,
    images: [
      "https://images.unsplash.com/photo-1598521910271-6e5e6b4f2e08?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80"
    ],
    description: "Luxurious shirt with wine-red embroidered collar and cuffs. Perfect blend of traditional embroidery on modern silhouette.",
    embroideryDetails: "Zardozi gold thread embroidery with dabka detailing on collar and cuffs.",
    fabricDetails: "Premium cotton blend with silk thread accents. Machine washable.",
    fabricType: "cotton",
    sizes: ["S", "M", "L", "XL"],
    artisanId: "a2",
    isNewArrival: true,
  },
  {
    id: "3",
    name: "Golden Dupatta",
    price: 1800,
    category: "dupattas",
    embroideryType: "phulkari",
    color: "Gold",
    rating: 4.7,
    reviews: 62,
    images: [
      "https://images.unsplash.com/photo-1535193566835-aa23bf28e7d0?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
    ],
    description: "Elegant dupatta with muted gold embroidered borders. A versatile piece for everyday elegance.",
    embroideryDetails: "Traditional Phulkari satin stitch with geometric and floral border patterns.",
    fabricDetails: "Handwoven cotton base with silk embroidery thread.",
    fabricType: "cotton",
    sizes: ["Free Size"],
    artisanId: "a3",
    isBestseller: true,
    isTrending: true,
  },
  {
    id: "4",
    name: "Embroidered Jeans",
    price: 2200,
    originalPrice: 2600,
    category: "jeans",
    embroideryType: "kashida",
    color: "Indigo",
    rating: 4.5,
    reviews: 28,
    images: [
      "https://images.unsplash.com/photo-1541999414701-4ee6c4b97d9d?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80"
    ],
    description: "Casual jeans with subtle ankle embroidery detailing. Where Indian craft meets Western comfort.",
    embroideryDetails: "Kashida chain stitch embroidery with floral motifs along pockets and hem.",
    fabricDetails: "Premium stretch denim, mid-rise relaxed fit.",
    fabricType: "denim",
    sizes: ["28", "30", "32", "34", "36"],
    isOnSale: true,
    isNewArrival: true,
  },
  {
    id: "5",
    name: "Hand-embroidered Handkerchiefs",
    price: 1200,
    category: "accessories",
    embroideryType: "chikankari",
    color: "White",
    rating: 4.9,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80"
    ],
    description: "Set of 3 beautifully embroidered cotton handkerchiefs. A thoughtful, heritage gift.",
    embroideryDetails: "Delicate Chikankari tepchi and bakhia stitches on fine cotton.",
    fabricDetails: "100% cotton muslin, soft and absorbent.",
    fabricType: "cotton",
    sizes: ["One Size"],
    isBestseller: true,
    isTrending: true,
  },
  {
    id: "6",
    name: "Sage Green Kurti",
    price: 3200,
    category: "kurtis",
    embroideryType: "kantha",
    color: "Sage",
    rating: 4.7,
    reviews: 52,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80"
    ],
    description: "Soft sage green kurti with delicate floral embroidery across the yoke and sleeves.",
    embroideryDetails: "Fine Kantha running stitch in contrasting cream thread.",
    fabricDetails: "Organic cotton, enzyme-washed for softness.",
    fabricType: "cotton",
    sizes: ["XS", "S", "M", "L", "XL"],
    isTrending: true,
    isNewArrival: true,
  },
  {
    id: "7",
    name: "Cream Heritage Shirt",
    price: 3000,
    originalPrice: 3500,
    category: "shirts",
    embroideryType: "chikankari",
    color: "Cream",
    rating: 4.6,
    reviews: 34,
    images: [
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80"
    ],
    description: "Classic cream shirt with heritage embroidery on front panel. Timeless elegance for every occasion.",
    embroideryDetails: "Traditional Chikankari with shadow work on premium cotton.",
    fabricDetails: "Pure linen-cotton blend, pre-shrunk for consistent fit.",
    fabricType: "linen",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isOnSale: true,
  },
  {
    id: "8",
    name: "Beige Embroidered Dupatta",
    price: 1600,
    category: "dupattas",
    embroideryType: "kantha",
    color: "Beige",
    rating: 4.8,
    reviews: 71,
    images: [
      "https://images.unsplash.com/photo-1537555467226-47bc2f18f89b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
    ],
    description: "Lightweight dupatta with traditional paisley embroidery. Perfect drape for all seasons.",
    embroideryDetails: "Kantha running stitch with traditional paisley motifs.",
    fabricDetails: "Lightweight cotton mull with hand-finished edges.",
    fabricType: "cotton",
    sizes: ["Free Size"],
    isBestseller: true,
  },
  {
    id: "9",
    name: "Custom Embroidered Sleeve",
    price: 1400,
    category: "accessories",
    embroideryType: "kashida",
    color: "Multi",
    rating: 4.9,
    reviews: 19,
    images: [
      "https://images.unsplash.com/photo-1495562411223-441a19a6def3?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80"
    ],
    description: "Bespoke embroidered sleeve piece for personalized styling. Add artisan flair to any garment.",
    embroideryDetails: "Kashida chain stitch with custom floral and geometric options.",
    fabricDetails: "Premium cotton base, compatible with most garments.",
    fabricType: "cotton",
    sizes: ["One Size"],
    isNewArrival: true,
  },
  {
    id: "10",
    name: "Indigo Embroidered Jeans",
    price: 2400,
    category: "jeans",
    embroideryType: "kashida",
    color: "Indigo",
    rating: 4.7,
    reviews: 41,
    images: [
      "https://images.unsplash.com/photo-1541999414701-4ee6c4b97d9d?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80"
    ],
    description: "Deep indigo jeans with traditional embroidered pockets. Statement denim with heritage soul.",
    embroideryDetails: "Kashida chain stitch embroidery with traditional Kashmiri floral motifs.",
    fabricDetails: "Premium selvedge denim, mid-rise straight fit.",
    fabricType: "denim",
    sizes: ["28", "30", "32", "34", "36"],
    isTrending: true,
  },
  {
    id: "11",
    name: "Silk Scarf - Maroon",
    price: 2000,
    originalPrice: 2500,
    category: "accessories",
    embroideryType: "zardozi",
    color: "Maroon",
    rating: 4.9,
    reviews: 55,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80"
    ],
    description: "Luxury silk scarf with embroidered border. An artisan accessory for every season.",
    embroideryDetails: "Zardozi gold thread embroidery along the borders with sequin highlights.",
    fabricDetails: "Pure mulberry silk, hand-rolled edges.",
    fabricType: "silk",
    sizes: ["One Size"],
    badge: "Festive Pick",
    isOnSale: true,
    isTrending: true,
  },
  {
    id: "12",
    name: "Burgundy Kurti with Dupatta",
    price: 4500,
    originalPrice: 5200,
    category: "kurtis",
    embroideryType: "zardozi",
    color: "Burgundy",
    rating: 4.8,
    reviews: 38,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80"
    ],
    description: "Complete set — burgundy kurti with matching embroidered dupatta. Perfect for festive celebrations.",
    embroideryDetails: "Zardozi and sequin work on both kurti and dupatta with coordinated motifs.",
    fabricDetails: "Silk-cotton blend with satin lining for comfort.",
    fabricType: "silk",
    sizes: ["S", "M", "L", "XL"],
    badge: "New Arrival",
    isOnSale: true,
    isNewArrival: true,
    isBestseller: true,
  },
  {
    id: "13",
    name: "Phulkari Linen Shirt",
    price: 2600,
    category: "shirts",
    embroideryType: "phulkari",
    color: "White",
    rating: 4.5,
    reviews: 29,
    images: [
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80"
    ],
    description: "Crisp linen shirt with vibrant Phulkari embroidery along the yoke. Heritage meets casual.",
    embroideryDetails: "Traditional Phulkari satin stitch in multi-colored silk threads.",
    fabricDetails: "Pure European linen, pre-washed for softness.",
    fabricType: "linen",
    sizes: ["S", "M", "L", "XL"],
    isNewArrival: true,
    isTrending: true,
  },
  {
    id: "14",
    name: "Chikankari Silk Dupatta",
    price: 2800,
    originalPrice: 3400,
    category: "dupattas",
    embroideryType: "chikankari",
    color: "Ivory",
    rating: 4.8,
    reviews: 67,
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1535193566835-aa23bf28e7d0?w=800&q=80"
    ],
    description: "Luxurious silk dupatta with all-over Chikankari embroidery. An heirloom piece for special moments.",
    embroideryDetails: "Full surface Chikankari with shadow work on pure silk.",
    fabricDetails: "Chanderi silk with hand-finished zari border.",
    fabricType: "silk",
    sizes: ["Free Size"],
    isOnSale: true,
    isBestseller: true,
  },
];

export const categories = [
  { value: 'all', label: 'All' },
  { value: 'kurtis', label: 'Kurtis' },
  { value: 'shirts', label: 'Shirts' },
  { value: 'dupattas', label: 'Dupattas' },
  { value: 'jeans', label: 'Jeans' },
  { value: 'accessories', label: 'Accessories' },
];

export const embroideryTypes = [
  { value: 'all', label: 'All Styles' },
  { value: 'chikankari', label: 'Chikankari' },
  { value: 'kantha', label: 'Kantha' },
  { value: 'zardozi', label: 'Zardozi' },
  { value: 'phulkari', label: 'Phulkari' },
  { value: 'kashida', label: 'Kashida' },
];
