const PhilosophySection = () => {
  return (
    <section className="py-24 md:py-32 texture-linen">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <div className="gold-line w-12 mx-auto mb-8" />
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6">
            Our Philosophy
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-snug mb-8">
            Embroidery is not decoration —{" "}
            <span className="italic text-primary">it is storytelling</span>
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            At FABRO, we believe every thread carries a narrative — of tradition passed through generations, 
            of hands that know the language of needles, of cultures that weave their identity into fabric. 
            We don't manufacture clothing. We preserve a craft.
          </p>
          <div className="gold-line w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-20">
          {[
            {
              title: "Slow Fashion",
              desc: "Each piece takes days, sometimes weeks to complete. We honour the pace of true craftsmanship.",
            },
            {
              title: "Artisan Heritage",
              desc: "Our embroiderers carry forward techniques perfected over centuries in India's craft villages.",
            },
            {
              title: "Thoughtful Design",
              desc: "We bridge tradition and modernity — heritage stitches on contemporary silhouettes.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="text-center animate-on-scroll"
              style={{ animationDelay: `${0.2 * i}s` }}
            >
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
