import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import CollectionsSection from "@/components/CollectionsSection";
import BestsellersSection from "@/components/BestsellersSection";
import TrendingSection from "@/components/TrendingSection";
import CustomPreviewSection from "@/components/CustomPreviewSection";
import PhilosophySection from "@/components/PhilosophySection";
import ArtisanSection from "@/components/ArtisanSection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import CraftJourneySection from "@/components/CraftJourneySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OnSaleSection from "@/components/OnSaleSection";
import GalleryGrid from "@/components/GalleryGrid";
import TrustBadges from "@/components/TrustBadges";
import MeeshoTrustSection from "@/components/MeeshoTrustSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
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

      {/* Hero — Full viewport, emotional */}
      <HeroSection />

      {/* Category Sections — Visual hierarchy */}
      <CollectionsSection />

      {/* Featured Products — Curated grid */}
      <BestsellersSection />

      {/* Trending */}
      <TrendingSection />

      {/* Customization Section — Core USP */}
      <CustomPreviewSection />

      {/* Brand Story — Minimal poetic */}
      <PhilosophySection />

      {/* Artisan Heritage */}
      <ArtisanSection />

      {/* New Arrivals */}
      <NewArrivalsSection />

      {/* Craft Journey */}
      <CraftJourneySection />

      {/* Testimonials / Social Proof */}
      <TestimonialsSection />

      {/* Sale */}
      <OnSaleSection />

      {/* Studio Gallery */}
      <GalleryGrid />

      {/* Trust Badges */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <TrustBadges />
        </div>
      </section>

      {/* Meesho Trust */}
      <MeeshoTrustSection />

      {/* Contact */}
      <ContactSection />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />
      <MobileBottomNav />
    </div>
  );
};

export default Index;
