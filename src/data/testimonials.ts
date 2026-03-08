export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    location: "Mumbai, India",
    text: "The Chikankari kurti I ordered is absolutely exquisite. You can feel the hours of craftsmanship in every stitch. This is not fast fashion — this is art you wear.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Sarah Mitchell",
    location: "London, UK",
    text: "I discovered FABRO through Instagram and ordered a customized dupatta. The attention to detail and the personal touch in communication made the entire experience special.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Ananya Reddy",
    location: "Bangalore, India",
    text: "I had my denim jacket customized with Kashida embroidery. It's become my most complimented piece of clothing. The quality is outstanding.",
    rating: 5,
  },
  {
    id: "t4",
    name: "David Chen",
    location: "Singapore",
    text: "Bought the Zardozi clutch as a gift. The craftsmanship exceeded my expectations. Packaging was thoughtful and the story card about the artisan was a beautiful touch.",
    rating: 4,
  },
  {
    id: "t5",
    name: "Meera Joshi",
    location: "Delhi, India",
    text: "FABRO understands that clothing can be a medium for preserving heritage. Every piece in my collection from them feels deeply intentional and timeless.",
    rating: 5,
  },
];
