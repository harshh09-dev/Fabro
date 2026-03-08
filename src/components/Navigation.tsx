import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

const collections = [
  { label: "Kurtis", href: "/collection/kurtis" },
  { label: "Shirts", href: "/collection/shirts" },
  { label: "Dupattas", href: "/collection/dupattas" },
  { label: "Denim", href: "/collection/jeans" },
  { label: "Accessories", href: "/collection/accessories" },
  { label: "Sale", href: "/collection/sale" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Customize", href: "/customize" },
    { label: "Journal", href: "/journal" },
    { label: "Our Story", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
              <div className="text-center md:text-left">
                <h1 className="font-display text-xl md:text-2xl font-semibold tracking-wide text-foreground">FABRO</h1>
                <p className="hidden md:block text-[9px] tracking-[0.3em] uppercase text-muted-foreground font-body">Handcrafted Embroidery</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {/* Shop dropdown */}
              <div className="relative" onMouseEnter={() => setShopOpen(true)} onMouseLeave={() => setShopOpen(false)}>
                <Link to="/shop" className="font-body text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-500 relative group flex items-center gap-1">
                  Shop
                  <ChevronDown size={12} className={`transition-transform duration-300 ${shopOpen ? "rotate-180" : ""}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full" />
                </Link>
                <AnimatePresence>
                  {shopOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-full left-0 mt-2 bg-background/98 backdrop-blur-md border border-border shadow-lg py-3 min-w-[180px]"
                    >
                      <Link to="/shop" className="block px-5 py-2 font-body text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                        All Products
                      </Link>
                      {collections.map((c) => (
                        <Link key={c.href} to={c.href} className="block px-5 py-2 font-body text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                          {c.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-body text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-500 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <button onClick={() => setCartOpen(true)} className="relative group">
              <ShoppingBag size={20} className="text-foreground transition-transform duration-300 group-hover:scale-110" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-body font-medium"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden bg-background/98 backdrop-blur-md border-t border-border overflow-hidden"
            >
              <div className="container mx-auto px-6 py-8 flex flex-col gap-4">
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground">Shop</p>
                {collections.map((c, i) => (
                  <motion.div key={c.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, duration: 0.3 }}>
                    <Link to={c.href} onClick={() => setMobileOpen(false)} className="font-body text-base text-foreground hover:text-primary transition-colors pl-4">
                      {c.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="h-px bg-border my-2" />
                {navLinks.map((link, i) => (
                  <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: (collections.length + i) * 0.05, duration: 0.3 }}>
                    <Link to={link.href} onClick={() => setMobileOpen(false)} className="font-body text-lg text-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navigation;
