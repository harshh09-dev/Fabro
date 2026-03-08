export interface Artisan {
  id: string;
  name: string;
  location: string;
  embroideryStyle: string;
  experience: number;
  story: string;
  image: string;
}

export const artisans: Artisan[] = [
  {
    id: "a1",
    name: "Rukmini Devi",
    location: "Lucknow, Uttar Pradesh",
    embroideryStyle: "Chikankari",
    experience: 27,
    story: "Rukmini Devi has practiced Chikankari embroidery for over 27 years. Each motif is hand-stitched using traditional Lucknow techniques passed down through five generations of her family.",
    image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&q=80",
  },
  {
    id: "a2",
    name: "Mohammad Iqbal",
    location: "Agra, Uttar Pradesh",
    embroideryStyle: "Zardozi",
    experience: 35,
    story: "Master craftsman Mohammad Iqbal specializes in royal Zardozi work. His intricate gold threadwork has adorned garments for discerning collectors worldwide.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80",
  },
  {
    id: "a3",
    name: "Harpreet Kaur",
    location: "Patiala, Punjab",
    embroideryStyle: "Phulkari",
    experience: 20,
    story: "Harpreet Kaur learned Phulkari from her grandmother. Her vibrant geometric patterns celebrate Punjab's folk art heritage with contemporary expression.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
  },
  {
    id: "a4",
    name: "Rina Mondal",
    location: "Shantiniketan, West Bengal",
    embroideryStyle: "Kantha",
    experience: 18,
    story: "Rina Mondal's Kantha work transforms simple running stitches into narrative tapestries inspired by Bengali folk tales and rural landscapes.",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&q=80",
  },
  {
    id: "a5",
    name: "Abdul Rashid Wani",
    location: "Srinagar, Kashmir",
    embroideryStyle: "Kashida",
    experience: 30,
    story: "Abdul Rashid Wani carries forward Kashmir's Kashida tradition with his distinctive chain stitch work featuring chinars, paisleys, and floral motifs.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80",
  },
];
