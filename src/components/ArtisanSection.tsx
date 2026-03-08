import { Link } from "react-router-dom";
import { artisans } from "@/data/artisans";

const ArtisanSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">The Makers</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
              Crafted by Hands <span className="italic text-primary">That Know</span>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              Behind every FABRO piece is an artisan whose family has perfected embroidery 
              techniques over generations. We work directly with craft communities across 
              India — Lucknow, Agra, Punjab, Bengal, and Kashmir.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { label: "Artisan Families", value: "50+" },
                { label: "Embroidery Styles", value: "5 Traditional" },
                { label: "Average Craft Experience", value: "25+ Years" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <span className="font-display text-2xl font-medium text-primary w-32">{stat.value}</span>
                  <span className="font-body text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="font-body text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300 border-b border-foreground/20 pb-1"
            >
              Meet Our Artisans
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            {artisans.slice(0, 4).map((artisan, i) => (
              <Link
                key={artisan.id}
                to={`/artisan/${artisan.id}`}
                className={`img-zoom rounded-sm overflow-hidden group relative ${i === 0 ? "col-span-2 aspect-[2/1]" : "aspect-square"}`}
              >
                <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <div>
                    <p className="font-body text-sm text-background font-medium">{artisan.name}</p>
                    <p className="font-body text-xs text-background/70">{artisan.embroideryStyle}</p>
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
