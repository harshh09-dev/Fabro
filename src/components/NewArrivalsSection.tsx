import { Link } from "react-router-dom";
import { Star, Sparkles } from "lucide-react";
import { products } from "@/data/products";

const NewArrivalsSection = () => {
  const newArrivals = products.filter((p) => p.isNewArrival).slice(0, 5);

  return (
    <section className="py-24 md:py-32 texture-linen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles size={14} className="text-primary" />
            <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">
              Just Dropped
            </p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
            Newly Launched
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-3 max-w-md mx-auto">
            Fresh designs and latest arrivals from our artisan workshops
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {newArrivals.map((product, i) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group animate-on-scroll"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="img-zoom aspect-square rounded-sm overflow-hidden mb-3 relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground font-body text-[10px] tracking-wider uppercase px-3 py-1">
                  New
                </div>
              </div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                {product.category}
              </p>
              <h3 className="font-body text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 mt-1 mb-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={9}
                    className={idx < Math.floor(product.rating) ? "fill-gold-muted text-gold-muted" : "text-border"}
                  />
                ))}
                <span className="font-body text-[10px] text-muted-foreground ml-1">({product.reviews})</span>
              </div>
              <span className="font-body text-sm font-medium text-foreground">
                ₹{product.price.toLocaleString()}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
