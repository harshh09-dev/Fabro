import { Link } from "react-router-dom";
import { Star, TrendingUp } from "lucide-react";
import { products } from "@/data/products";

const TrendingSection = () => {
  const trending = products.filter((p) => p.isTrending).slice(0, 6);

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-4">
            <TrendingUp size={14} className="text-primary" />
            <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">
              Trending Now
            </p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
            Most Popular This Season
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-3 max-w-md mx-auto">
            Discover the designs our customers can't stop wearing
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {trending.map((product, i) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group animate-on-scroll"
              style={{ animationDelay: `${0.12 * i}s` }}
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
              </div>
              <div>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                  {product.category}
                </p>
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
                  <span className="font-body text-[10px] text-muted-foreground ml-1">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-body text-sm font-medium text-foreground">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="font-body text-xs text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
