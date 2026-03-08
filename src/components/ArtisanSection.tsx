import { artisans } from "@/data/artisans";

const ArtisanSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
              The Makers
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
              Crafted by Hands <span className="italic">That Know</span>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              Behind every FABRO piece is an artisan whose family has perfected embroidery 
              techniques over generations. We work directly with craft communities across 
              India — Lucknow, Agra, Punjab, Bengal, and Kashmir — ensuring fair wages 
              and preserving ancient skills.
            </p>
            <div className="space-y-4">
              {[
                { label: "Artisan Families", value: "50+" },
                { label: "Embroidery Styles", value: "5 Traditional" },
                { label: "Average Craft Experience", value: "25+ Years" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <span className="font-display text-2xl font-medium text-primary w-32">
                    {stat.value}
                  </span>
                  <span className="font-body text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            {artisans.slice(0, 4).map((artisan, i) => (
              <div
                key={artisan.id}
                className={`img-zoom rounded-sm overflow-hidden ${i === 0 ? "col-span-2 aspect-[2/1]" : "aspect-square"}`}
              >
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanSection;
