import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-semibold mb-2">FABRO</h3>
            <p className="font-body text-xs tracking-[0.2em] uppercase opacity-50 mb-4">
              Handcrafted Embroidery
            </p>
            <p className="font-body text-sm opacity-60 leading-relaxed">
              Where every stitch tells a story of heritage, craftsmanship, and timeless beauty.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-body text-xs tracking-[0.3em] uppercase mb-6 opacity-50">
              Shop
            </h4>
            <div className="flex flex-col gap-3">
              {["Kurtis", "Shirts", "Dupattas", "Jeans", "Accessories"].map((item) => (
                <Link
                  key={item}
                  to={`/shop?category=${item.toLowerCase()}`}
                  className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body text-xs tracking-[0.3em] uppercase mb-6 opacity-50">
              Company
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Our Story", href: "/about" },
                { label: "Customize", href: "/customize" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs tracking-[0.3em] uppercase mb-6 opacity-50">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3 font-body text-sm opacity-70">
              <a href="mailto:hello@fabro.in" className="hover:opacity-100 transition-opacity">
                hello@fabro.in
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
              >
                WhatsApp Support
              </a>
              <a href="https://instagram.com/fabro.craft" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs opacity-40">
            © 2026 FABRO. All rights reserved.
          </p>
          <p className="font-body text-xs opacity-40">
            Crafted with care in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
