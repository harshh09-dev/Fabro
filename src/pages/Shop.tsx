import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { products, categories, embroideryTypes, Product } from "@/data/products";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import QuickViewModal from "@/components/QuickViewModal";
import ShopProductCard from "@/components/ShopProductCard";
import { Slider } from "@/components/ui/slider";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [embType, setEmbType] = useState("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortBy, setSortBy] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

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
    <PageTransition>
      <div className="min-h-screen bg-background pb-mobile-nav md:pb-0">
        <Navigation />
        <div className="pt-28 pb-24">
          <div className="container mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="gold-line w-12 mx-auto mb-6" />
              <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Browse</p>
              <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground">Shop Collection</h2>
            </div>

            {/* Filters bar */}
            <div className="flex items-center justify-between mb-10 border-b border-border pb-4">
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
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
                          className={`font-body text-xs px-3 py-1.5 border transition-all duration-300 ${
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
                          className={`font-body text-xs px-3 py-1.5 border transition-all duration-300 ${
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
                    <Slider
                      defaultValue={[10000]}
                      max={10000}
                      step={500}
                      onValueChange={(val) => setPriceRange([0, val[0]])}
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Product grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {filtered.map((product, i) => (
                <ShopProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  onQuickView={() => setQuickViewProduct(product)}
                />
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

        {quickViewProduct && (
          <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
        )}
      </div>
    </PageTransition>
  );
};

export default Shop;
