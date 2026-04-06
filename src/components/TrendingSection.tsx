import { Link } from "react-router-dom";
import { Star, ShoppingBag, Heart } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

const TrendingSection = () => {
  const trending = products.filter((p) => p.isTrending).slice(0, 6);
  const { addItem } = useCart();

  return (
    <section className="py-32 md:py-40 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">
            Trending Now
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Most Popular This Season
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {trending.map((product, i) => (
            <div
              key={product.id}
              className="group animate-on-scroll"
              style={{ animationDelay: `${0.12 * i}s` }}
            >
              <Link to={`/product/${product.id}`}>
                <div className="img-zoom aspect-[3/4] overflow-hidden mb-4 relative">
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
                  <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-3">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addItem({ id: product.id, name: product.name, price: product.price, image: product.images[0], quantity: 1, size: product.sizes[0] });
                      }}
                      className="w-11 h-11 bg-foreground/90 text-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0"
                    >
                      <ShoppingBag size={16} />
                    </button>
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="w-11 h-11 bg-foreground/90 text-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75"
                    >
                      <Heart size={16} />
                    </button>
                  </div>
                </div>
              </Link>
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
                      className={idx < Math.floor(product.rating) ? "fill-primary text-primary" : "text-border"}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
