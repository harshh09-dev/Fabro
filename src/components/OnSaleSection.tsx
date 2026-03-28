import { Link } from "react-router-dom";
import { Star, Tag } from "lucide-react";
import { products } from "@/data/products";

const OnSaleSection = () => {
  const saleItems = products.filter((p) => p.isOnSale && p.originalPrice).slice(0, 4);

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-4">
            <Tag size={14} className="text-primary" />
            <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">
              Limited Time
            </p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
            On Sale
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-3 max-w-md mx-auto">
            Limited time offers and special discounts on select pieces
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {saleItems.map((product, i) => {
            const discount = product.originalPrice
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : 0;

            return (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group animate-on-scroll"
                style={{ animationDelay: `${0.15 * i}s` }}
              >
                <div className="img-zoom aspect-[3/4] rounded-sm overflow-hidden mb-4 relative">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground font-body text-[10px] tracking-wider uppercase px-3 py-1">
                    {discount}% OFF
                  </span>
                </div>
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
                  <span className="font-body text-[10px] text-muted-foreground ml-1">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-body text-sm font-medium text-primary">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="font-body text-xs text-muted-foreground line-through">
                    ₹{product.originalPrice?.toLocaleString()}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/collection/sale"
            className="inline-block font-body text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors border-b border-foreground/20 pb-1"
          >
            View All Sale Items
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OnSaleSection;
