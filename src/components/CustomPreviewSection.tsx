import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Upload, Palette, Scissors } from "lucide-react";

const CustomPreviewSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="relative py-40 md:py-52 overflow-hidden">
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1920&q=80"
          alt="Custom embroidery"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-background/85" />
      </motion.div>

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="animate-on-scroll">
            <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-6">
              Core Experience
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-4">
              Design your story.
            </h2>
            <p className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-primary/80 italic mb-10">
              We stitch it into fabric.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-12 max-w-lg">
              Send us your garment or choose from our collection — we'll hand-embroider 
              any design you dream of. From initials to full panels, our artisans bring 
              your imagination to life.
            </p>

            {/* Feature icons */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {[
                { icon: Upload, label: "Upload Design" },
                { icon: Palette, label: "Choose Colors" },
                { icon: Scissors, label: "We Craft It" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="text-center animate-on-scroll"
                  style={{ animationDelay: `${0.2 * i}s` }}
                >
                  <div className="w-14 h-14 mx-auto mb-3 border border-primary/30 rounded-full flex items-center justify-center glow-gold">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <p className="font-body text-xs text-muted-foreground tracking-wider">{item.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/customize"
              className="btn-luxury btn-elevated inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 font-body text-sm tracking-[0.2em] uppercase group"
            >
              Start Customizing
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            {/* Mock upload UI */}
            <div className="border border-border/50 bg-card/50 backdrop-blur-sm p-8 glow-gold">
              <div className="border-2 border-dashed border-primary/20 rounded-lg p-12 text-center mb-6">
                <Upload size={40} className="text-primary/40 mx-auto mb-4" />
                <p className="font-body text-sm text-muted-foreground mb-2">Drop your design here</p>
                <p className="font-body text-xs text-muted-foreground/60">PNG, JPG, SVG up to 10MB</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="img-zoom aspect-square overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&q=80"
                    alt="Custom example 1"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="img-zoom aspect-square overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&q=80"
                    alt="Custom example 2"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPreviewSection;
