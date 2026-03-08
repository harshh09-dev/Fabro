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
import TrustBadges from "@/components/TrustBadges";
import MeeshoTrustSection from "@/components/MeeshoTrustSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

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
    <div className="min-h-screen bg-background pb-mobile-nav md:pb-0">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <CollectionsSection />
      <BestsellersSection />
      <ArtisanSection />
      <CustomPreviewSection />
      <TestimonialsSection />
      <GalleryGrid />
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <TrustBadges />
        </div>
      </section>
      <MeeshoTrustSection />
      <NewsletterSection />
      <Footer />
      <MobileBottomNav />
    </div>
  );
};

export default Index;
