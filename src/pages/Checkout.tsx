import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Truck, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const shipping = subtotal >= 2000 ? 0 : 99;
  const total = subtotal + shipping;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const whatsappMsg = encodeURIComponent(
    `Hello FABRO,\n\nI would like to place an order.\n\n*Products:*\n${items
      .map((i, idx) => `${idx + 1}. ${i.product.name}\n   Size: ${i.size}\n   Qty: ${i.quantity}\n   Price: ₹${(i.product.price * i.quantity).toLocaleString()}`)
      .join("\n\n")}\n\n*Total: ₹${total.toLocaleString()}*${shipping === 0 ? " (Free Shipping)" : ` (+ ₹99 Shipping)`}\n\n*Customer Details:*\nName: ${form.name}\nPhone: ${form.phone}\nCity: ${form.city}, ${form.state} - ${form.pincode}\nAddress: ${form.address}\n\nPayment: Cash on Delivery\n${form.notes ? `\nNotes: ${form.notes}` : ""}`
  );

  const handleCODSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (items.length === 0 && !submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-28 pb-24 flex flex-col items-center justify-center min-h-[60vh]">
          <p className="font-body text-muted-foreground mb-6">Your cart is empty</p>
          <Link to="/shop" className="bg-primary text-primary-foreground px-8 py-3 font-body text-sm tracking-wider uppercase">
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-28 pb-24 flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <Truck size={28} className="text-primary" />
          </div>
          <h2 className="font-display text-2xl font-medium text-foreground mb-3">Order Placed!</h2>
          <p className="font-body text-sm text-muted-foreground max-w-md mb-2">
            Thank you, {form.name}! Your order of ₹{total.toLocaleString()} will be delivered via Cash on Delivery.
          </p>
          <p className="font-body text-xs text-muted-foreground mb-8">
            We'll confirm your order via WhatsApp at {form.phone}.
          </p>
          <Link to="/shop" onClick={() => clearCart()} className="bg-primary text-primary-foreground px-8 py-3 font-body text-sm tracking-wider uppercase">
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
          <Link to="/cart" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Cart
          </Link>

          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-medium text-foreground">Checkout</h2>
            <p className="font-body text-sm text-muted-foreground mt-2">Cash on Delivery</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <form onSubmit={handleCODSubmit} className="space-y-5">
              <h3 className="font-display text-lg font-medium text-foreground mb-4">Delivery Details</h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-xs text-muted-foreground mb-1 block">Full Name *</label>
                  <input name="name" required value={form.name} onChange={handleChange} className="w-full font-body text-sm border border-border bg-card px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label className="font-body text-xs text-muted-foreground mb-1 block">Phone *</label>
                  <input name="phone" required type="tel" value={form.phone} onChange={handleChange} className="w-full font-body text-sm border border-border bg-card px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
              </div>

              <div>
                <label className="font-body text-xs text-muted-foreground mb-1 block">Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full font-body text-sm border border-border bg-card px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>

              <div>
                <label className="font-body text-xs text-muted-foreground mb-1 block">Address *</label>
                <textarea name="address" required value={form.address} onChange={handleChange} rows={2} className="w-full font-body text-sm border border-border bg-card px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="font-body text-xs text-muted-foreground mb-1 block">City *</label>
                  <input name="city" required value={form.city} onChange={handleChange} className="w-full font-body text-sm border border-border bg-card px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label className="font-body text-xs text-muted-foreground mb-1 block">State *</label>
                  <input name="state" required value={form.state} onChange={handleChange} className="w-full font-body text-sm border border-border bg-card px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label className="font-body text-xs text-muted-foreground mb-1 block">Pincode *</label>
                  <input name="pincode" required value={form.pincode} onChange={handleChange} className="w-full font-body text-sm border border-border bg-card px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
              </div>

              <div>
                <label className="font-body text-xs text-muted-foreground mb-1 block">Order Notes</label>
                <textarea name="notes" value={form.notes} onChange={handleChange} rows={2} className="w-full font-body text-sm border border-border bg-card px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
              </div>

              <div className="space-y-3 pt-4">
                <button type="submit" className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-4 font-body text-sm tracking-wider uppercase hover:opacity-90 transition-opacity btn-elevated">
                  <Truck size={16} />
                  Place COD Order — ₹{total.toLocaleString()}
                </button>
                <a
                  href={`https://wa.me/919876543210?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border border-primary text-primary py-4 font-body text-sm tracking-wider uppercase hover:bg-primary/5 transition-colors"
                >
                  <MessageCircle size={16} />
                  Order via WhatsApp Instead
                </a>
              </div>
            </form>

            {/* Summary */}
            <div>
              <div className="bg-card border border-border p-8 sticky top-28">
                <h3 className="font-display text-lg font-medium text-foreground mb-6">Order Summary</h3>
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.size}`} className="flex gap-3">
                      <img src={item.product.images[0]} alt={item.product.name} className="w-14 h-14 object-cover rounded-sm" />
                      <div className="flex-1 min-w-0">
                        <p className="font-body text-sm text-foreground line-clamp-1">{item.product.name}</p>
                        <p className="font-body text-xs text-muted-foreground">Size: {item.size} × {item.quantity}</p>
                      </div>
                      <span className="font-body text-sm text-foreground">₹{(item.product.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="gold-line w-full mb-4" />
                <div className="space-y-2 font-body text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-foreground">{shipping === 0 ? "Free" : "₹99"}</span>
                  </div>
                </div>
                <div className="gold-line w-full my-4" />
                <div className="flex justify-between font-body text-base font-medium">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
