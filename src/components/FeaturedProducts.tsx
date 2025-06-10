
const FeaturedProducts = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Midnight Bloom Kurti",
      price: "₹3,499",
      originalPrice: "₹4,299",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      badge: "Bestseller",
      description: "Exquisite moonlit florals with silver threadwork"
    },
    {
      id: 2,
      name: "Sunset Heritage Kurti",
      price: "₹2,899",
      originalPrice: "₹3,599",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      badge: "New Arrival",
      description: "Traditional motifs in warm terracotta hues"
    },
    {
      id: 3,
      name: "Garden Whisper Kurti",
      price: "₹2,699",
      originalPrice: "₹3,299",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      badge: "Limited Edition",
      description: "Delicate leaf patterns with gold accents"
    }
  ];

  return (
    <section id="featured" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Masterpieces
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most cherished designs, handpicked for their exceptional 
            artistry and timeless appeal.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-on-scroll group"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-terracotta text-white px-3 py-1 rounded-full font-body text-sm font-semibold">
                      {item.badge}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-primary mb-2">
                    {item.name}
                  </h3>
                  <p className="font-body text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-display text-2xl font-bold text-terracotta">
                      {item.price}
                    </span>
                    <span className="font-body text-lg text-muted-foreground line-through">
                      {item.originalPrice}
                    </span>
                    <span className="bg-sage text-white px-2 py-1 rounded text-xs font-semibold">
                      SAVE ₹{parseInt(item.originalPrice.slice(1).replace(',', '')) - parseInt(item.price.slice(1).replace(',', ''))}
                    </span>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 bg-terracotta text-white py-3 rounded-full font-body font-semibold hover:bg-earth transition-colors duration-200">
                      Add to Cart
                    </button>
                    <button className="embroidery-border bg-background text-primary px-6 py-3 rounded-full font-body font-semibold hover:bg-muted transition-colors duration-200">
                      ♡
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
