
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const collectionImages = [
    {
      url: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Floral Embroidery",
      description: "Delicate hand-stitched florals"
    },
    {
      url: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Traditional Patterns",
      description: "Heritage designs in modern cuts"
    },
    {
      url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Contemporary Elegance",
      description: "Timeless artistry meets modern style"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % collectionImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [collectionImages.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Images */}
      {collectionImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-30' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image.url})` }}
        />
      ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream/90 via-sage/20 to-terracotta/30"></div>
      
      {/* Floating Embroidery Motifs */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-gold/40 rounded-full animate-pulse">
        <div className="absolute inset-4 border border-gold/20 rounded-full"></div>
      </div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-sage/50 rounded-full animate-pulse delay-1000">
        <div className="absolute inset-3 border border-sage/30 rounded-full"></div>
      </div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-terracotta/30 rounded-full animate-pulse delay-500"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-on-scroll">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Wear Art,
            <span className="block text-terracotta">Live Fabroidery</span>
          </h1>
        </div>
        
        <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <p className="font-body text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Where every thread tells a story of heritage and every stitch whispers elegance
          </p>
          <p className="font-body text-lg text-primary/80 mb-8">
            {collectionImages[currentImage].description}
          </p>
        </div>
        
        <div className="animate-on-scroll flex flex-col sm:flex-row gap-4 justify-center mb-8" style={{ animationDelay: '0.4s' }}>
          <button className="embroidery-border bg-terracotta text-white px-8 py-4 rounded-full font-body font-semibold text-lg hover:bg-earth transform hover:scale-105 transition-all duration-300 shadow-lg">
            Shop the Charm
          </button>
          <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-body font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Our Story
          </button>
        </div>

        {/* Collection Indicators */}
        <div className="flex justify-center space-x-2 animate-on-scroll" style={{ animationDelay: '0.6s' }}>
          {collectionImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                index === currentImage 
                  ? 'bg-terracotta border-terracotta' 
                  : 'border-primary/50 hover:border-primary'
              }`}
            />
          ))}
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
