const steps = [
  {
    number: "01",
    title: "Design",
    description: "Collaborate with our artisans to envision your piece",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&q=80",
  },
  {
    number: "02",
    title: "Thread Selection",
    description: "Choose from premium threads and embellishments",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop&q=80",
  },
  {
    number: "03",
    title: "Embroidery",
    description: "Hand-embroidered with meticulous care",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop&q=80",
  },
  {
    number: "04",
    title: "Finishing",
    description: "Quality inspection and careful finishing",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop&q=80",
  },
];

const CraftJourneySection = () => {
  return (
    <section className="py-32 md:py-40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-on-scroll">
          <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">
            The Craft
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Journey of Creation
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 md:gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="text-center animate-on-scroll group"
              style={{ animationDelay: `${0.2 * i}s` }}
            >
              <div className="relative mb-8 mx-auto w-40 h-40 md:w-full md:h-auto md:aspect-square overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500" />
              </div>

              <span className="font-display text-2xl font-light text-primary/30 mb-3 block">
                {step.number}
              </span>
              <h3 className="font-display text-lg font-light text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll">
          <a
            href="/customize"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 font-body text-sm tracking-[0.2em] uppercase btn-elevated btn-luxury"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default CraftJourneySection;
