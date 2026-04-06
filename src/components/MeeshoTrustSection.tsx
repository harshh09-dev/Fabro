import { ExternalLink } from "lucide-react";

const MeeshoTrustSection = () => {
  return (
    <section className="py-20 md:py-24 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">
            Trusted Marketplace
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-light text-foreground mb-4">
            Also Available on Meesho
          </h2>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
            FABRO embroidered collections are also available on Meesho, making our handcrafted pieces accessible across India.
          </p>
          <a
            href="https://meesho.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 font-body text-sm tracking-[0.2em] uppercase btn-elevated btn-luxury"
          >
            Visit Our Meesho Store
            <ExternalLink size={14} />
          </a>
          <div className="flex items-center justify-center gap-8 mt-10 text-muted-foreground">
            <div className="text-center">
              <p className="font-display text-lg font-light text-foreground">4.5★</p>
              <p className="font-body text-[10px] tracking-wider uppercase">Meesho Rating</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <p className="font-display text-lg font-light text-foreground">2000+</p>
              <p className="font-body text-[10px] tracking-wider uppercase">Orders</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <p className="font-display text-lg font-light text-foreground">Pan India</p>
              <p className="font-body text-[10px] tracking-wider uppercase">Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeeshoTrustSection;
