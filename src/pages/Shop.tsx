import { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Star, SlidersHorizontal, X } from "lucide-react";
import { products, categories, embroideryTypes } from "@/data/products";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [embType, setEmbType] = useState("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortBy, setSortBy] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setCategory(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let result = [...products];
    if (category !== "all") result = result.filter((p) => p.category === category);
    if (embType !== "all") result = result.filter((p) => p.embroideryType === embType);
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [category, embType, priceRange, sortBy]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
              Browse
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground">
              Shop Collection
            </h2>
          </div>

          {/* Filters bar */}
          <div className="flex items-center justify-between mb-10 border-b border-border pb-4">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
            <div className="flex items-center gap-4">
              <span className="font-body text-xs text-muted-foreground">{filtered.length} products</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-body text-sm bg-transparent text-muted-foreground border-none focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Filters panel */}
          {filtersOpen && (
            <div className="mb-10 p-6 bg-card border border-border rounded-sm animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <span className="font-body text-sm font-medium text-foreground">Filters</span>
                <button onClick={() => setFiltersOpen(false)}>
                  <X size={16} className="text-muted-foreground" />
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-3">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((c) => (
                      <button
                        key={c.value}
                        onClick={() => setCategory(c.value)}
                        className={`font-body text-xs px-3 py-1.5 border transition-colors ${
                          category === c.value
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border text-muted-foreground hover:border-foreground/30"
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-3">Embroidery Style</p>
                  <div className="flex flex-wrap gap-2">
                    {embroideryTypes.map((e) => (
                      <button
                        key={e.value}
                        onClick={() => setEmbType(e.value)}
                        className={`font-body text-xs px-3 py-1.5 border transition-colors ${
                          embType === e.value
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border text-muted-foreground hover:border-foreground/30"
                        }`}
                      >
                        {e.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-3">
                    Price: ₹{priceRange[0].toLocaleString()} – ₹{priceRange[1].toLocaleString()}
                  </p>
                  <input
                    type="range"
                    min={0}
                    max={10000}
                    step={500}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                    className="w-full accent-primary"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filtered.map((product, i) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group animate-on-scroll"
                style={{ animationDelay: `${0.08 * i}s` }}
              >
                <div className="img-zoom aspect-[3/4] rounded-sm overflow-hidden mb-4 relative">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {product.images[1] && (
                    <img
                      src={product.images[1]}
                      alt={`${product.name} alternate`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      loading="lazy"
                    />
                  )}
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-primary text-primary-foreground font-body text-[10px] tracking-wider uppercase px-3 py-1">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="block w-full bg-background/90 backdrop-blur-sm text-foreground text-center font-body text-xs tracking-wider uppercase py-2">
                      Quick View
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-body text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={10}
                        className={idx < Math.floor(product.rating) ? "fill-gold-muted text-gold-muted" : "text-border"}
                      />
                    ))}
                    <span className="font-body text-[10px] text-muted-foreground ml-1">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-body text-sm font-medium text-foreground">₹{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="font-body text-xs text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body text-muted-foreground">No products match your filters.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
