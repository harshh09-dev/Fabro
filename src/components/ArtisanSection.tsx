import { Link } from "react-router-dom";
import { artisans } from "@/data/artisans";

const ArtisanSection = () => {
  return (
    <section className="py-32 md:py-40 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="animate-on-scroll">
            <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-6">The Makers</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight">
              Crafted by Hands <span className="italic text-primary">That Know</span>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-10">
              Behind every FABRO piece is an artisan whose family has perfected embroidery 
              techniques over generations. We work directly with craft communities across 
              India — Lucknow, Agra, Punjab, Bengal, and Kashmir.
            </p>
            <div className="space-y-5 mb-10">
              {[
                { label: "Artisan Families", value: "50+" },
                { label: "Embroidery Styles", value: "5 Traditional" },
                { label: "Average Craft Experience", value: "25+ Years" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-6">
                  <span className="font-display text-2xl font-light text-primary w-36">{stat.value}</span>
                  <span className="font-body text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="font-body text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300 border-b border-primary/30 pb-1"
            >
              Meet Our Artisans
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            {artisans.slice(0, 4).map((artisan, i) => (
              <Link
                key={artisan.id}
                to={`/artisan/${artisan.id}`}
                className={`img-zoom overflow-hidden group relative ${i === 0 ? "col-span-2 aspect-[2/1]" : "aspect-square"}`}
              >
                <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                  <div>
                    <p className="font-body text-sm text-foreground font-medium">{artisan.name}</p>
                    <p className="font-body text-xs text-primary">{artisan.embroideryStyle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanSection;
