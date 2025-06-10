
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-display text-2xl font-bold text-primary">
            Artisan Kurtis
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Collections', 'Featured', 'Reviews', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="font-body text-sm font-medium text-foreground hover:text-terracotta transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>

          <button className="bg-terracotta text-white px-6 py-2 rounded-full font-body font-medium hover:bg-earth transition-colors duration-200">
            Shop Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
