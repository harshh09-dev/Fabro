import { useState } from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState<"india" | "international">("india");

  const indianTestimonials = testimonials.filter((t) => t.region === "india");
  const internationalTestimonials = testimonials.filter((t) => t.region === "international");
  const activeTestimonials = activeTab === "india" ? indianTestimonials : internationalTestimonials;

  return (
    <section className="py-24 md:py-32 texture-linen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="gold-line w-12 mx-auto mb-6" />
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            WORDS FROM OUR COMMUNITY
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
            Voices of Appreciation
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-3 max-w-md mx-auto">
            From India to around the world, customers share why they love FABRO
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-1 mb-12">
          <button
            onClick={() => setActiveTab("india")}
            className={`px-6 py-3 font-body text-sm tracking-wider transition-all duration-300 ${
              activeTab === "india"
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            From Our Hearts
          </button>
          <button
            onClick={() => setActiveTab("international")}
            className={`px-6 py-3 font-body text-sm tracking-wider transition-all duration-300 ${
              activeTab === "international"
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            From Around the World
          </button>
        </div>

        {/* Subtitle */}
        <p className="text-center font-body text-xs text-muted-foreground mb-10">
          {activeTab === "india"
            ? "Voices from India celebrating heritage and craftsmanship"
            : "International customers discovering the art of Indian embroidery"}
        </p>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {activeTestimonials.map((t, i) => (
            <div
              key={t.id}
              className="embroidery-border bg-background p-8 animate-on-scroll"
              style={{ animationDelay: `${0.15 * i}s` }}
            >
              <Quote size={24} className="text-primary/30 mb-4" />

              <blockquote className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                {t.text}
              </blockquote>

              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={12} className="fill-gold-muted text-gold-muted" />
                ))}
              </div>

              <p className="font-display text-sm font-medium text-foreground">{t.name}</p>
              <p className="font-body text-xs text-muted-foreground">{t.role}</p>
              <p className="font-body text-[10px] text-muted-foreground/70 mt-1">{t.location}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <p className="font-body text-sm text-muted-foreground mb-3">Have a FABRO story to share?</p>
          <a
            href="https://wa.me/918852808522?text=I%20want%20to%20share%20my%20FABRO%20story!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-sm tracking-wider text-primary border-b border-primary pb-1 hover:opacity-80 transition-opacity"
          >
            Share Your Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
