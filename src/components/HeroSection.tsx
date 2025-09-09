
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSet, setCurrentSet] = useState(0);
  
  const productSets = [
    {
      main: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      secondary: [
        "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      ],
      title: "Floral Collection",
      description: "Hand-embroidered florals • Starting ₹2,499"
    },
    {
      main: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      secondary: [
        "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      ],
      title: "Traditional Wear",
      description: "Classic patterns • Starting ₹1,899"
    },
    {
      main: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      secondary: [
        "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      ],
      title: "Contemporary Line",
      description: "Modern elegance • Starting ₹3,299"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % productSets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [productSets.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-sage/10 to-terracotta/5">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-on-scroll">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Wear Art,
              <span className="block text-terracotta">Live Fabroidery</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground mb-6 max-w-lg">
              Discover handcrafted kurtis where every thread tells a story of heritage and elegance
            </p>
            
            {/* Current Collection Info */}
            <div className="mb-8 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-display text-2xl font-semibold text-primary mb-2">
                {productSets[currentSet].title}
              </h3>
              <p className="font-body text-lg text-terracotta">
                {productSets[currentSet].description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <button className="bg-terracotta text-white px-8 py-4 rounded-full font-body font-semibold text-lg hover:bg-earth transform hover:scale-105 transition-all duration-300 shadow-lg">
                Shop Collection
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-body font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                View All
              </button>
            </div>

            {/* Collection Indicators */}
            <div className="flex space-x-3 animate-on-scroll" style={{ animationDelay: '0.6s' }}>
              {productSets.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSet(index)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === currentSet 
                      ? 'bg-terracotta text-white' 
                      : 'border border-primary/30 text-primary hover:border-primary'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Right Product Showcase Frame */}
          <div className="relative animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-gold/20 shadow-2xl">
              {/* Main Product Image */}
              <div className="relative mb-6 group">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-sage/20 to-terracotta/20">
                  <img 
                    src={productSets[currentSet].main}
                    alt={productSets[currentSet].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute -top-2 -right-2 bg-terracotta text-white px-3 py-1 rounded-full text-sm font-semibold">
                  New
                </div>
              </div>

              {/* Secondary Product Images Grid */}
              <div className="grid grid-cols-4 gap-3">
                {productSets[currentSet].secondary.map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-sage/10 to-cream hover:scale-110 transition-transform duration-300 cursor-pointer"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fade-in 0.5s ease-out forwards'
                    }}
                  >
                    <img 
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-gold/30 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-sage/40 rounded-full animate-pulse delay-1000" />
          </div>
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
