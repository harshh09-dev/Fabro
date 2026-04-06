const galleryImages = [
  "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&q=80",
  "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&q=80",
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
  "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80",
  "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&q=80",
];

const GalleryGrid = () => {
  return (
    <section className="py-32 md:py-40 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">
            @fabro.craft
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            From Our Studio
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="img-zoom aspect-square overflow-hidden animate-on-scroll group"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <img
                src={img}
                alt={`FABRO studio ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
