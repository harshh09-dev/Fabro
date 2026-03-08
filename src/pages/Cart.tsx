import { Link } from "react-router-dom";
import { Minus, Plus, X, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Cart = () => {
  const { items, updateQuantity, removeItem, subtotal, totalItems } = useCart();

  const whatsappMsg = encodeURIComponent(
    `Hi FABRO, I'd like to place an order (COD):\n\n` +
    items.map((i) => `• ${i.product.name} (Size: ${i.size}) x${i.quantity} — ₹${(i.product.price * i.quantity).toLocaleString()}`).join("\n") +
    `\n\nSubtotal: ₹${subtotal.toLocaleString()}\n\nPlease confirm.`
  );

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-28 pb-24 flex flex-col items-center justify-center min-h-[60vh]">
          <ShoppingBag size={48} className="text-muted-foreground/30 mb-6" />
          <h2 className="font-display text-2xl font-medium text-foreground mb-4">Your cart is empty</h2>
          <p className="font-body text-sm text-muted-foreground mb-8">Discover our handcrafted collections</p>
          <Link to="/shop" className="bg-primary text-primary-foreground px-8 py-3 font-body text-sm tracking-wider uppercase hover:opacity-90 transition-opacity">
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-medium text-foreground">Your Cart</h2>
            <p className="font-body text-sm text-muted-foreground mt-2">{totalItems} {totalItems === 1 ? "item" : "items"}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-4 md:gap-6 border-b border-border pb-6">
                  <Link to={`/product/${item.product.id}`} className="w-24 md:w-32 aspect-[3/4] rounded-sm overflow-hidden flex-shrink-0">
                    <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link to={`/product/${item.product.id}`} className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors">
                          {item.product.name}
                        </Link>
                        <p className="font-body text-xs text-muted-foreground mt-1">Size: {item.size}</p>
                      </div>
                      <button onClick={() => removeItem(item.product.id)} className="text-muted-foreground hover:text-foreground transition-colors">
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3 border border-border">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-2 hover:bg-muted transition-colors">
                          <Minus size={12} />
                        </button>
                        <span className="font-body text-sm w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-2 hover:bg-muted transition-colors">
                          <Plus size={12} />
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

            {/* Summary */}
            <div className="bg-card border border-border p-8">
              <h3 className="font-display text-lg font-medium text-foreground mb-6">Order Summary</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">{subtotal >= 2000 ? "Free" : "₹99"}</span>
                </div>
              </div>
              <div className="gold-line w-full mb-6" />
              <div className="flex justify-between font-body text-base font-medium mb-8">
                <span className="text-foreground">Total</span>
                <span className="text-foreground">₹{(subtotal + (subtotal >= 2000 ? 0 : 99)).toLocaleString()}</span>
              </div>

              <div className="space-y-3">
                <Link
                  to="/checkout"
                  className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-4 font-body text-sm tracking-wider uppercase hover:opacity-90 transition-opacity btn-elevated"
                >
                  Proceed to Checkout
                </Link>
                <a
                  href={`https://wa.me/919876543210?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border border-primary text-primary py-4 font-body text-sm tracking-wider uppercase hover:bg-primary/5 transition-colors"
                >
                  <MessageCircle size={16} />
                  Order via WhatsApp (COD)
                </a>
                <p className="font-body text-[10px] text-center text-muted-foreground">
                  Cash on Delivery available across India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
