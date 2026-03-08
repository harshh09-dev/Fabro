import { Link } from "react-router-dom";
import { Star, Eye } from "lucide-react";
import { Product } from "@/data/products";

interface ShopProductCardProps {
  product: Product;
  index: number;
  onQuickView: () => void;
}

const ShopProductCard = ({ product, index, onQuickView }: ShopProductCardProps) => {
  return (
    <div
      className="group animate-on-scroll"
      style={{ animationDelay: `${0.08 * index}s` }}
    >
      <Link to={`/product/${product.id}`}>
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
          <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView();
              }}
              className="flex items-center justify-center gap-2 w-full bg-background/90 backdrop-blur-sm text-foreground font-body text-xs tracking-wider uppercase py-2.5 hover:bg-background transition-colors"
            >
              <Eye size={14} />
              Quick View
            </button>
          </div>
        </div>
      </Link>
      <div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-body text-sm text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
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
    </div>
  );
};

export default ShopProductCard;
