import { useParams, Link } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import { products, embroideryTypes, Product } from "@/data/products";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ShopProductCard from "@/components/ShopProductCard";
import QuickViewModal from "@/components/QuickViewModal";
import { Slider } from "@/components/ui/slider";

const collectionMeta: Record<string, { title: string; description: string; banner: string }> = {
  kurtis: {
    title: "Kurtis",
    description: "Hand-embroidered kurtis blending tradition with contemporary silhouettes. Each piece is a labour of love by master artisans.",
    banner: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=1200&q=80",
  },
  shirts: {
    title: "Shirts",
    description: "Crisp shirts elevated with delicate embroidery details — crafted for the modern wardrobe.",
    banner: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&q=80",
  },
  dupattas: {
    title: "Dupattas",
    description: "Vibrant dupattas celebrating centuries-old embroidery traditions from across India.",
    banner: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
  },
  jeans: {
    title: "Denim",
    description: "Premium denim reimagined with handcrafted Indian embroidery — where heritage meets street style.",
    banner: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80",
  },
  accessories: {
    title: "Accessories",
    description: "Embroidered totes, clutches, and more — everyday accessories with artisan soul.",
    banner: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1200&q=80",
  },
  sale: {
    title: "Sale",
    description: "Limited-time offers on handcrafted FABRO pieces. Heritage craft at special prices.",
    banner: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=1200&q=80",
  },
};

const fabricTypes = [
  { value: "all", label: "All Fabrics" },
  { value: "cotton", label: "Cotton" },
  { value: "linen", label: "Linen" },
  { value: "silk", label: "Silk" },
  { value: "denim", label: "Denim" },
];

const Collection = () => {
  const { slug } = useParams();
  const meta = collectionMeta[slug || ""] || collectionMeta.kurtis;
  const [embType, setEmbType] = useState("all");
  const [fabricType, setFabricType] = useState("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortBy, setSortBy] = useState("featured");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const isSale = slug === "sale";

  const filtered = useMemo(() => {
    let result = [...products];

    if (isSale) {
      result = result.filter((p) => p.originalPrice && p.originalPrice > p.price);
    } else if (slug && slug !== "all") {
      result = result.filter((p) => p.category === slug);
    }

    if (embType !== "all") result = result.filter((p) => p.embroideryType === embType);
    if (fabricType !== "all") result = result.filter((p) => p.fabricType === fabricType);
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);
    else if (sortBy === "newest") result.sort((a, b) => Number(b.id) - Number(a.id));

    return result;
  }, [slug, embType, fabricType, priceRange, sortBy, isSale]);

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

        {/* Banner */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img src={meta.banner} alt={meta.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <div className="text-center">
              <h1 className="font-display text-4xl md:text-5xl font-medium text-white mb-3">{meta.title}</h1>
              <p className="font-body text-sm text-white/80 max-w-lg mx-auto px-6">{meta.description}</p>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="container mx-auto px-6 py-4">
          <div className="font-body text-xs text-muted-foreground flex gap-2">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-foreground">{meta.title}</span>
          </div>
        </div>

        <div className="container mx-auto px-6 pb-24">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1 space-y-8">
              {/* Embroidery */}
              <div>
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-3">Embroidery Technique</p>
                <div className="space-y-2">
                  {embroideryTypes.map((e) => (
                    <button
                      key={e.value}
                      onClick={() => setEmbType(e.value)}
                      className={`block w-full text-left font-body text-sm px-3 py-2 rounded-sm transition-all duration-300 ${
                        embType === e.value ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {e.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fabric */}
              <div>
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-3">Fabric Type</p>
                <div className="space-y-2">
                  {fabricTypes.map((f) => (
                    <button
                      key={f.value}
                      onClick={() => setFabricType(f.value)}
                      className={`block w-full text-left font-body text-sm px-3 py-2 rounded-sm transition-all duration-300 ${
                        fabricType === f.value ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-3">
                  Price: ₹{priceRange[0].toLocaleString()} – ₹{priceRange[1].toLocaleString()}
                </p>
                <Slider
                  defaultValue={[10000]}
                  max={10000}
                  step={500}
                  onValueChange={(val) => setPriceRange([0, val[0]])}
                />
              </div>

              {/* Sort */}
              <div>
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-3">Sort By</p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full font-body text-sm bg-card border border-border rounded-sm px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Best Rated</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <span className="font-body text-xs text-muted-foreground">{filtered.length} products</span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product, i) => (
                  <ShopProductCard key={product.id} product={product} index={i} onQuickView={() => setQuickViewProduct(product)} />
                ))}
              </div>
              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <p className="font-body text-muted-foreground">No products match your filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <Footer />
        {quickViewProduct && <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />}
      </div>
    </PageTransition>
  );
};

export default Collection;
