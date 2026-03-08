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
}

export const products: Product[] = [
  {
    id: "1",
    name: "Ivory Chikankari Kurti",
    price: 3499,
    originalPrice: 4299,
    category: "kurtis",
    embroideryType: "chikankari",
    color: "Ivory",
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80"
    ],
    description: "A timeless ivory kurti adorned with intricate Chikankari hand-embroidery from Lucknow. Each motif is carefully stitched by master artisans.",
    embroideryDetails: "Traditional Lucknowi Chikankari with shadow work and jaali patterns. Over 40 hours of hand-stitching.",
    fabricDetails: "Pure cotton mull, pre-washed for softness. Breathable and perfect for all seasons.",
    fabricType: "cotton",
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "Bestseller",
    artisanId: "a1",
    isBestseller: true,
  },
  {
    id: "2",
    name: "Maroon Zardozi Kurti",
    price: 5999,
    originalPrice: 7499,
    category: "kurtis",
    embroideryType: "zardozi",
    color: "Maroon",
    rating: 4.9,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80"
    ],
    description: "Rich maroon silk kurti featuring royal Zardozi embroidery with gold metallic threadwork. A statement piece for special occasions.",
    embroideryDetails: "Zardozi gold thread embroidery with dabka and sequin detailing. Handcrafted in Agra.",
    fabricDetails: "Pure silk with cotton lining. Dry clean recommended.",
    fabricType: "silk",
    sizes: ["S", "M", "L", "XL"],
    badge: "New Arrival",
    artisanId: "a2",
    isBestseller: true,
  },
  {
    id: "3",
    name: "Phulkari Embroidered Dupatta",
    price: 2199,
    originalPrice: 2799,
    category: "dupattas",
    embroideryType: "phulkari",
    color: "Mustard",
    rating: 4.7,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80"
    ],
    description: "Vibrant Phulkari dupatta in warm mustard, hand-embroidered by artisans from Punjab. A celebration of folk art traditions.",
    embroideryDetails: "Traditional Phulkari satin stitch covering the entire surface with geometric floral patterns.",
    fabricDetails: "Handwoven cotton base with silk embroidery thread.",
    sizes: ["Free Size"],
    artisanId: "a3",
    isBestseller: true,
  },
  {
    id: "4",
    name: "Kantha Stitch Shirt",
    price: 2899,
    originalPrice: 3599,
    category: "shirts",
    embroideryType: "kantha",
    color: "White",
    rating: 4.6,
    reviews: 67,
    images: [
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80"
    ],
    description: "Crisp white linen shirt with delicate Kantha running stitch embroidery along the collar and cuffs.",
    embroideryDetails: "Bengal Kantha running stitch in indigo thread. Subtle yet distinctive craftsmanship.",
    fabricDetails: "Pure linen, machine washable. Pre-shrunk for consistent fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    artisanId: "a4",
  },
  {
    id: "5",
    name: "Kashida Embroidered Jeans",
    price: 3299,
    category: "jeans",
    embroideryType: "kashida",
    color: "Indigo",
    rating: 4.5,
    reviews: 43,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
    ],
    description: "Classic indigo denim jeans with Kashmiri Kashida embroidery along the pockets and hem.",
    embroideryDetails: "Kashida chain stitch embroidery with floral motifs. Hand-embroidered in Kashmir.",
    fabricDetails: "Premium stretch denim, mid-rise relaxed fit.",
    sizes: ["28", "30", "32", "34", "36"],
    badge: "Limited Edition",
    artisanId: "a5",
  },
  {
    id: "6",
    name: "Chikankari Tote Bag",
    price: 1499,
    originalPrice: 1899,
    category: "accessories",
    embroideryType: "chikankari",
    color: "Off-White",
    rating: 4.8,
    reviews: 201,
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80",
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80"
    ],
    description: "Elegant tote bag with Chikankari embroidery. Perfect for everyday use or gifting.",
    embroideryDetails: "Delicate Chikankari tepchi and bakhia stitches on cotton canvas.",
    fabricDetails: "12oz cotton canvas with reinforced handles. Fully lined interior.",
    sizes: ["One Size"],
    isBestseller: true,
  },
  {
    id: "7",
    name: "Sage Green Kurti",
    price: 2799,
    category: "kurtis",
    embroideryType: "kantha",
    color: "Green",
    rating: 4.6,
    reviews: 78,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80"
    ],
    description: "Soft sage green cotton kurti with Kantha stitch detailing across the yoke and sleeves.",
    embroideryDetails: "Fine Kantha running stitch in contrasting cream thread.",
    fabricDetails: "Organic cotton, enzyme-washed for softness.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "8",
    name: "Zardozi Clutch",
    price: 1999,
    originalPrice: 2499,
    category: "accessories",
    embroideryType: "zardozi",
    color: "Gold",
    rating: 4.9,
    reviews: 92,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80"
    ],
    description: "Luxurious evening clutch with Zardozi embroidery. A perfect complement for festive occasions.",
    embroideryDetails: "Gold Zardozi embroidery with pearl and sequin embellishments.",
    fabricDetails: "Silk velvet exterior, satin lining with magnetic closure.",
    sizes: ["One Size"],
    badge: "Festive Pick",
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
