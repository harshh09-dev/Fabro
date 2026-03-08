import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const { items, updateQuantity, removeItem, subtotal, totalItems } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border z-[61] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <h3 className="font-display text-lg font-medium text-foreground">
                Your Cart ({totalItems})
              </h3>
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <ShoppingBag size={40} className="text-muted-foreground/30 mb-4" />
                  <p className="font-body text-sm text-muted-foreground">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-5">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                      <Link to={`/product/${item.product.id}`} onClick={onClose} className="w-20 aspect-[3/4] rounded-sm overflow-hidden flex-shrink-0">
                        <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <Link to={`/product/${item.product.id}`} onClick={onClose} className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors line-clamp-1">
                              {item.product.name}
                            </Link>
                            <p className="font-body text-xs text-muted-foreground mt-0.5">Size: {item.size}</p>
                          </div>
                          <button onClick={() => removeItem(item.product.id)} className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0">
                            <X size={14} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2 border border-border">
                            <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-1.5 hover:bg-muted transition-colors">
                              <Minus size={10} />
                            </button>
                            <span className="font-body text-xs w-5 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-1.5 hover:bg-muted transition-colors">
                              <Plus size={10} />
                            </button>
                          </div>
                          <span className="font-body text-sm font-medium text-foreground">
                            ₹{(item.product.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border px-6 py-5 space-y-4">
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-foreground">₹{subtotal.toLocaleString()}</span>
                </div>
                <p className="font-body text-[10px] text-muted-foreground">
                  {subtotal >= 2000 ? "✓ Free shipping" : "Free shipping on orders above ₹2,000"}
                </p>
                <Link
                  to="/cart"
                  onClick={onClose}
                  className="block text-center w-full bg-primary text-primary-foreground py-3.5 font-body text-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
                >
                  View Cart & Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
