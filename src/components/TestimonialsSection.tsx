import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 texture-linen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="gold-line w-12 mx-auto mb-6" />
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">What Our Customers Say</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-4">
                  <div className="embroidery-border bg-background p-8 md:p-12 text-center">
                    <div className="flex justify-center mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={16} className="fill-gold-muted text-gold-muted" />
                      ))}
                    </div>
                    <blockquote className="font-body text-base md:text-lg text-muted-foreground italic leading-relaxed mb-6">
                      "{t.text}"
                    </blockquote>
                    <div>
                      <p className="font-display text-base font-medium text-foreground">{t.name}</p>
                      <p className="font-body text-xs text-muted-foreground">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  i === current ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
