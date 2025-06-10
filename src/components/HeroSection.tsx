
const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden texture-paper">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-sage/20 to-terracotta/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-gold/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-sage/40 rounded-full animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-on-scroll">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Hand-Embroidered
            <span className="block text-terracotta">Elegance</span>
          </h1>
        </div>
        
        <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <p className="font-body text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover timeless Kurtis crafted with traditional artistry, 
            where every stitch tells a story of heritage and beauty.
          </p>
        </div>
        
        <div className="animate-on-scroll flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.4s' }}>
          <button className="embroidery-border bg-terracotta text-white px-8 py-4 rounded-full font-body font-semibold text-lg hover:bg-earth transform hover:scale-105 transition-all duration-300">
            Explore Collections
          </button>
          <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-body font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Our Story
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
