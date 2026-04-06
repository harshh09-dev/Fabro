import { Link } from "react-router-dom";
import { Star, Eye, ShoppingBag, Heart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ShopProductCardProps {
  product: Product;
  index: number;
  onQuickView: () => void;
}

const ShopProductCard = ({ product, index, onQuickView }: ShopProductCardProps) => {
  const { addItem } = useCart();

  return (
    <div
      className="group animate-on-scroll"
      style={{ animationDelay: `${0.08 * index}s` }}
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
          {/* Hover overlay with actions */}
          <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-3">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product, product.sizes[0]);
              }}
              className="w-10 h-10 bg-foreground/90 text-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0"
            >
              <ShoppingBag size={14} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView();
              }}
              className="w-10 h-10 bg-foreground/90 text-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75"
            >
              <Eye size={14} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="w-10 h-10 bg-foreground/90 text-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 delay-150"
            >
              <Heart size={14} />
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
  );
};

export default ShopProductCard;
