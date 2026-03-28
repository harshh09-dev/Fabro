const steps = [
  {
    number: "01",
    title: "Design",
    subtitle: "Collaborate with our artisans to envision your piece",
    description: "Share your inspiration, color palette, and embroidery style. Our designers sketch initial concepts.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&q=80",
  },
  {
    number: "02",
    title: "Thread Selection",
    subtitle: "Choose premium threads and embellishments",
    description: "Select from our curated collection of threads, silks, and traditional embroidery materials.",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop&q=80",
  },
  {
    number: "03",
    title: "Embroidery",
    subtitle: "Hand-embroidered with meticulous care",
    description: "Master artisans hand-embroider your piece using traditional techniques passed through generations.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop&q=80",
  },
  {
    number: "04",
    title: "Finishing",
    subtitle: "Quality inspection and careful finishing",
    description: "Each piece undergoes rigorous quality checks before hand-wrapped delivery to your door.",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop&q=80",
  },
];

const CraftJourneySection = () => {
  return (
    <section className="py-24 md:py-32 texture-linen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-on-scroll">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            THE CRAFT
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
            Journey of Creation
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-3 max-w-lg mx-auto">
            From concept to completion, every step honors both tradition and your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 md:gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="text-center animate-on-scroll"
              style={{ animationDelay: `${0.2 * i}s` }}
            >
              <div className="relative mb-6 mx-auto w-40 h-40 md:w-full md:h-auto md:aspect-square rounded-full md:rounded-sm overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/10" />
              </div>

              <span className="font-display text-2xl font-light text-primary/40 mb-2 block">
                {step.number}
              </span>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-1">
                {step.subtitle}
              </p>
              <p className="font-body text-xs text-muted-foreground/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll">
          <a
            href="/customize"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 font-body text-sm tracking-wider uppercase hover:opacity-90 transition-opacity btn-elevated"
          >
            Start Your Bespoke Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default CraftJourneySection;
