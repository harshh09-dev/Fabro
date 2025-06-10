
import { useState } from "react";

const CollectionsGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const collections = [
    { id: 1, name: "Floral Paradise", category: "floral", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", price: "₹2,499" },
    { id: 2, name: "Royal Heritage", category: "traditional", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", price: "₹3,299" },
    { id: 3, name: "Modern Elegance", category: "contemporary", image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04", price: "₹2,899" },
    { id: 4, name: "Vintage Charm", category: "traditional", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", price: "₹2,799" },
    { id: 5, name: "Garden Bloom", category: "floral", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", price: "₹2,199" },
    { id: 6, name: "Minimalist Grace", category: "contemporary", image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04", price: "₹2,599" },
  ];

  const filters = ['all', 'floral', 'traditional', 'contemporary'];

  const filteredCollections = activeFilter === 'all' 
    ? collections 
    : collections.filter(item => item.category === activeFilter);

  return (
    <section id="collections" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Collections
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of hand-embroidered Kurtis, 
            each piece uniquely designed to celebrate your individual style.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center mb-12 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-body font-medium capitalize transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-terracotta text-white shadow-lg'
                    : 'bg-background text-muted-foreground hover:bg-sage/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((item, index) => (
            <div
              key={item.id}
              className="animate-on-scroll group cursor-pointer"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="embroidery-border bg-background rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 bg-gold text-primary px-3 py-1 rounded-full font-body text-sm font-semibold">
                    {item.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-primary mb-2">
                    {item.name}
                  </h3>
                  <p className="font-body text-muted-foreground capitalize">
                    {item.category} Collection
                  </p>
                  <button className="mt-4 w-full bg-sage text-white py-2 rounded-full font-body font-medium hover:bg-earth transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsGallery;
