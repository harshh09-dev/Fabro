import { useEffect } from "react";
import { Link } from "react-router-dom";
import { artisans } from "@/data/artisans";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate"); }),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background pb-mobile-nav md:pb-0">
        <Navigation />

        {/* Hero */}
        <section className="relative h-[60vh] flex items-end pb-16">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80" alt="Artisan at work" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>
          <div className="relative container mx-auto px-6">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Our Story</p>
            <h2 className="font-display text-4xl md:text-6xl font-medium text-foreground">
              Crafted, Not <span className="italic text-primary">Manufactured</span>
            </h2>
          </div>
        </section>

        {/* Story */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-8 animate-on-scroll">
              <p className="font-body text-lg text-muted-foreground leading-[1.8]">
                FABRO was born from a simple belief: Indian embroidery is one of the world's most exquisite art forms, 
                and it deserves to live beyond museum walls and wedding trousseaus.
              </p>
              <p className="font-body text-base text-muted-foreground leading-[1.8]">
                We work with artisan families across India — from the Chikankari masters of Lucknow to the Phulkari 
                weavers of Punjab. Each community carries centuries of knowledge in their fingers.
              </p>
              <p className="font-body text-base text-muted-foreground leading-[1.8]">
                Our role is to create a bridge — between ancient technique and modern design, between the artisan's 
                studio and your wardrobe, between heritage and everyday life.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 texture-linen">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: "Heritage Craft", desc: "Every piece features embroidery techniques perfected over centuries by Indian artisan communities." },
                { title: "Slow Fashion", desc: "We create consciously. No mass production. Each garment is made to order with intention." },
                { title: "Fair Wages", desc: "Our artisans receive fair compensation that reflects the true value of their extraordinary skill." },
                { title: "Sustainable Materials", desc: "We use natural fabrics — cotton, silk, linen — sourced ethically from Indian textile mills." },
              ].map((v, i) => (
                <div key={v.title} className="animate-on-scroll" style={{ animationDelay: `${0.15 * i}s` }}>
                  <span className="font-display text-5xl font-light text-primary/20 block mb-4">0{i + 1}</span>
                  <h3 className="font-display text-xl font-medium text-foreground mb-3">{v.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Artisans */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-on-scroll">
              <div className="gold-line w-12 mx-auto mb-6" />
              <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">The Makers</p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">Our Artisans</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artisans.map((artisan, i) => (
                <Link
                  key={artisan.id}
                  to={`/artisan/${artisan.id}`}
                  className="group animate-on-scroll"
                  style={{ animationDelay: `${0.1 * i}s` }}
                >
                  <div className="img-zoom aspect-[4/3] rounded-sm overflow-hidden mb-4">
                    <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{artisan.name}</h3>
                  <p className="font-body text-xs text-muted-foreground mb-2">
                    {artisan.location} · {artisan.embroideryStyle} · {artisan.experience} years
                  </p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">{artisan.story}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
