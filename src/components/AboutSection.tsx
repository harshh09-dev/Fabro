
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll animate-left">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Crafted with
              <span className="block text-terracotta">Passion & Tradition</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
              For generations, our artisans have passed down the sacred art of hand embroidery. 
              Each Kurti is a masterpiece, taking weeks to complete with intricate threadwork 
              that celebrates India's rich textile heritage.
            </p>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe in slow fashion - creating pieces that last lifetimes while supporting 
              rural communities and preserving traditional craftsmanship that would otherwise be lost.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-terracotta mb-2">500+</div>
                <div className="font-body text-sm text-muted-foreground">Artisans</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-sage mb-2">15+</div>
                <div className="font-body text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-gold mb-2">10k+</div>
                <div className="font-body text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll animate-right">
            <div className="relative">
              <div className="embroidery-border bg-cream p-8 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                  alt="Artisan crafting embroidery"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-terracotta text-white p-6 rounded-lg">
                <div className="font-display text-xl font-bold">Hand Crafted</div>
                <div className="font-body text-sm">With Love & Care</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
