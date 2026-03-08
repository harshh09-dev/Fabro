import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 md:items-center md:pb-0 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=1920&q=80"
          alt="Handcrafted embroidered garment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-2xl">
          <div className="gold-line w-16 mb-8" />
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4 animate-fade-in">
            Handcrafted Indian Embroidery
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-foreground leading-[1.1] mb-6 animate-slide-up">
            Where Every Stitch
            <span className="block italic text-primary">Tells a Story</span>
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-lg mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Discover timeless garments where heritage embroidery meets contemporary design. 
            Crafted by India's finest artisans, reimagined for the modern world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/shop"
              className="btn-luxury inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 font-body text-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
            >
              Shop Collection
            </Link>
            <Link
              to="/customize"
              className="btn-luxury inline-flex items-center justify-center border border-foreground/20 text-foreground px-8 py-4 font-body text-sm tracking-wider uppercase hover:bg-foreground/5 transition-colors"
            >
              Customize Your Piece
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-foreground/20 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
