import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-light tracking-[0.15em] mb-2">FABRO</h3>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6">Handcrafted Embroidery</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Where every stitch tells a story of heritage, craftsmanship, and timeless beauty.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.3em] uppercase mb-6 text-primary">Shop</h4>
            <div className="flex flex-col gap-3">
              {["Kurtis", "Shirts", "Dupattas", "Jeans", "Accessories"].map((item) => (
                <Link key={item} to={`/shop?category=${item.toLowerCase()}`} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.3em] uppercase mb-6 text-primary">Company</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Our Story", href: "/about" },
                { label: "Customize", href: "/customize" },
                { label: "Journal", href: "/journal" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link key={item.href} to={item.href} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.3em] uppercase mb-6 text-primary">Get in Touch</h4>
            <div className="flex flex-col gap-3 font-body text-sm text-muted-foreground">
              <a href="mailto:hello@fabro.in" className="hover:text-primary transition-colors duration-300">hello@fabro.in</a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">WhatsApp Support</a>
              <a href="https://instagram.com/fabro.craft" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground/50">© 2026 FABRO. All rights reserved.</p>
          <p className="font-body text-xs text-muted-foreground/50">Crafted with care in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
