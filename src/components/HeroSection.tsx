import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-end overflow-hidden">
      {/* Background with zoom effect */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=1920&q=80"
          alt="Handcrafted embroidered garment"
          className="w-full h-full object-cover"
        />
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-background/30" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative container mx-auto px-6 pb-24 md:pb-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="section-divider mb-8 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-6"
          >
            Handcrafted Indian Embroidery
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[1.05] mb-6"
          >
            Your story,
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="block italic text-primary font-light"
            >
              stitched.
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-base md:text-lg text-muted-foreground max-w-lg mb-12 leading-relaxed"
          >
            Where heritage embroidery meets contemporary design. 
            Crafted by India's finest artisans, reimagined for the modern world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/shop"
              className="btn-luxury btn-elevated inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-4 font-body text-sm tracking-[0.2em] uppercase group"
            >
              Shop Collection
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/customize"
              className="btn-luxury inline-flex items-center justify-center border border-foreground/20 text-foreground px-10 py-4 font-body text-sm tracking-[0.2em] uppercase hover:border-primary/50 transition-colors duration-500"
            >
              Customize Your Piece
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <span className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
