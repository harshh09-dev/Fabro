import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Star, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

const QuickViewModal = ({ product, onClose }: QuickViewModalProps) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  if (!product) return null;

  const handleAdd = () => {
    if (!selectedSize) return;
    addItem(product, selectedSize, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="bg-background border border-border max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="aspect-[3/4] overflow-hidden">
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
            </div>

            {/* Details */}
            <div className="p-6 md:p-8 flex flex-col">
              <button onClick={onClose} className="self-end mb-4 text-muted-foreground hover:text-foreground transition-colors">
                <X size={20} />
              </button>

              {product.badge && (
                <span className="font-body text-[10px] tracking-wider uppercase text-primary mb-2">{product.badge}</span>
              )}
              <h3 className="font-display text-2xl font-medium text-foreground mb-3">{product.name}</h3>

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className={i < Math.floor(product.rating) ? "fill-gold-muted text-gold-muted" : "text-border"} />
                ))}
                <span className="font-body text-xs text-muted-foreground ml-1">({product.reviews})</span>
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-display text-2xl font-medium text-foreground">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="font-body text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                )}
              </div>

              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">{product.description}</p>

              {/* Sizes */}
              <div className="mb-6">
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-3">Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`font-body text-xs px-3 py-1.5 border transition-all duration-300 ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-foreground hover:border-foreground/40"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-auto space-y-3">
                <button
                  onClick={handleAdd}
                  disabled={!selectedSize}
                  className="btn-elevated w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 font-body text-sm tracking-wider uppercase disabled:opacity-50"
                >
                  <ShoppingBag size={16} />
                  {added ? "Added!" : "Add to Cart"}
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="block text-center font-body text-xs text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-foreground/20 pb-0.5"
                >
                  View Full Details
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuickViewModal;
