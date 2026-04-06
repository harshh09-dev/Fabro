import { useState } from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState<"india" | "international">("india");

  const indianTestimonials = testimonials.filter((t) => t.region === "india");
  const internationalTestimonials = testimonials.filter((t) => t.region === "international");
  const activeTestimonials = activeTab === "india" ? indianTestimonials : internationalTestimonials;

  return (
    <section className="py-32 md:py-40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="section-divider mx-auto mb-8" />
          <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">
            Social Proof
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Voices of Appreciation
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-1 mb-14">
          <button
            onClick={() => setActiveTab("india")}
            className={`px-8 py-3 font-body text-sm tracking-wider transition-all duration-500 ${
              activeTab === "india"
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
            }`}
          >
            From India
          </button>
          <button
            onClick={() => setActiveTab("international")}
            className={`px-8 py-3 font-body text-sm tracking-wider transition-all duration-500 ${
              activeTab === "international"
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
            }`}
          >
            International
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {activeTestimonials.map((t, i) => (
            <div
              key={t.id}
              className="bg-card/50 border border-border/50 p-8 animate-on-scroll group hover:border-primary/20 transition-colors duration-500"
              style={{ animationDelay: `${0.15 * i}s` }}
            >
              <Quote size={24} className="text-primary/20 mb-6" />

              <blockquote className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
                {t.text}
              </blockquote>

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={12} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="font-display text-sm font-medium text-foreground">{t.name}</p>
              <p className="font-body text-xs text-muted-foreground">{t.role}</p>
              <p className="font-body text-[10px] text-muted-foreground/50 mt-1">{t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
