export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  text: string;
  rating: number;
  region: 'india' | 'international';
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    location: "Delhi, India",
    role: "Fashion Enthusiast",
    text: "The hand embroidery work is absolutely impeccable. Every kurti I've purchased from FABRO tells a story of true craftsmanship. The quality matches luxury brands at a fraction of the price.",
    rating: 5,
    region: "india",
  },
  {
    id: "t2",
    name: "Anjali Verma",
    location: "Mumbai, India",
    role: "Wedding Planner",
    text: "I was amazed by the customization experience. The team understood exactly what I wanted and delivered a piece that's completely one-of-a-kind. Wearing it feels special every single time.",
    rating: 5,
    region: "india",
  },
  {
    id: "t3",
    name: "Meera Gupta",
    location: "Bangalore, India",
    role: "Design Professional",
    text: "Supporting artisans while getting beautiful, timeless pieces? This is what FABRO does perfectly. Every purchase feels like celebrating Indian heritage.",
    rating: 5,
    region: "india",
  },
  {
    id: "t4",
    name: "Sarah Mitchell",
    location: "New York, USA",
    role: "Luxury Editor",
    text: "I've ordered embroidered pieces before, but nothing compares to FABRO. The attention to detail and the quality of materials are extraordinary. Truly world-class craftsmanship.",
    rating: 5,
    region: "international",
  },
  {
    id: "t5",
    name: "Emma Johnson",
    location: "London, UK",
    role: "Sustainable Fashion Advocate",
    text: "Wearing FABRO feels like carrying a piece of art. The embroidery is so intricate, and the ethical manufacturing gives me peace of mind. Highly recommend to everyone.",
    rating: 5,
    region: "international",
  },
  {
    id: "t6",
    name: "Elena Romano",
    location: "Milan, Italy",
    role: "Art Collector",
    text: "The custom embroidery service is amazing. I worked with the team to create a piece exactly as I imagined. The quality and service exceeded my expectations by far.",
    rating: 5,
    region: "international",
  },
];
