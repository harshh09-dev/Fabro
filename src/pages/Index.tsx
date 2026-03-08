import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import CollectionsSection from "@/components/CollectionsSection";
import BestsellersSection from "@/components/BestsellersSection";
import ArtisanSection from "@/components/ArtisanSection";
import CustomPreviewSection from "@/components/CustomPreviewSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GalleryGrid from "@/components/GalleryGrid";
import NewsletterSection from "@/components/NewsletterSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <CollectionsSection />
      <BestsellersSection />
      <ArtisanSection />
      <CustomPreviewSection />
      <TestimonialsSection />
      <GalleryGrid />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
