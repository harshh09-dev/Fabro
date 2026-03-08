import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Minus, Plus, ShoppingBag, MessageCircle, ChevronLeft } from "lucide-react";
import { products } from "@/data/products";
import { artisans } from "@/data/artisans";
import { useCart } from "@/context/CartContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="font-body text-muted-foreground">Product not found.</p>
      </div>
    );
  }

  const artisan = artisans.find((a) => a.id === product.artisanId);
  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem(product, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const whatsappMsg = encodeURIComponent(
    `Hi FABRO, I'd like to order:\n\n${product.name}\nSize: ${selectedSize || "Not selected"}\nQuantity: ${quantity}\nPrice: ₹${(product.price * quantity).toLocaleString()}\n\nPlease confirm availability.`
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-24">
        <div className="container mx-auto px-6">
          <Link to="/shop" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ChevronLeft size={16} /> Back to Shop
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Images */}
            <div>
              <div className="img-zoom aspect-[3/4] rounded-sm overflow-hidden mb-4 cursor-zoom-in">
                <img
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`aspect-square rounded-sm overflow-hidden border-2 transition-colors ${
                      i === activeImage ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              {product.badge && (
                <span className="font-body text-[10px] tracking-wider uppercase text-primary mb-2 block">
                  {product.badge}
                </span>
              )}
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
                {product.name}
              </h2>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={14} className={idx < Math.floor(product.rating) ? "fill-gold-muted text-gold-muted" : "text-border"} />
                  ))}
                </div>
                <span className="font-body text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-display text-3xl font-medium text-foreground">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="font-body text-lg text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <div className="gold-line w-full mb-8" />

              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Embroidery & Fabric details */}
              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-1">Embroidery</p>
                  <p className="font-body text-sm text-foreground">{product.embroideryDetails}</p>
                </div>
                <div>
                  <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-1">Fabric</p>
                  <p className="font-body text-sm text-foreground">{product.fabricDetails}</p>
                </div>
              </div>

              {/* Artisan credit */}
              {artisan && (
                <div className="bg-muted/50 p-4 rounded-sm mb-8">
                  <p className="font-body text-xs text-muted-foreground mb-1">Crafted by</p>
                  <p className="font-body text-sm font-medium text-foreground">{artisan.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{artisan.location} · {artisan.embroideryStyle}</p>
                </div>
              )}

              {/* Size */}
              <div className="mb-6">
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-3">Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`font-body text-sm px-4 py-2 border transition-colors ${
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

              {/* Quantity */}
              <div className="mb-8">
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-3">Quantity</p>
                <div className="flex items-center gap-4 border border-border w-fit">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-muted transition-colors">
                    <Minus size={14} />
                  </button>
                  <span className="font-body text-sm w-8 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-muted transition-colors">
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-body text-sm tracking-wider uppercase disabled:opacity-50 hover:opacity-90 transition-opacity"
                >
                  <ShoppingBag size={16} />
                  {added ? "Added!" : "Add to Cart"}
                </button>
                <a
                  href={`https://wa.me/919876543210?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-foreground/20 text-foreground py-4 px-6 font-body text-sm tracking-wider uppercase hover:bg-foreground/5 transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp Order
                </a>
              </div>
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div className="mt-24">
              <h3 className="font-display text-2xl font-medium text-foreground mb-10">
                You May Also Like
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {related.map((p) => (
                  <Link key={p.id} to={`/product/${p.id}`} className="group">
                    <div className="img-zoom aspect-[3/4] rounded-sm overflow-hidden mb-3">
                      <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <h4 className="font-body text-sm text-foreground group-hover:text-primary transition-colors">{p.name}</h4>
                    <p className="font-body text-sm text-muted-foreground">₹{p.price.toLocaleString()}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
