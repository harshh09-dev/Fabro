import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-end pb-20 md:items-center md:pb-0 overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 parallax-slow">
        <img
          src="https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=1920&q=80"
          alt="Handcrafted embroidered garment"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative container mx-auto px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="gold-line w-16 mb-8 origin-left"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4"
          >
            Handcrafted Indian Embroidery
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground leading-[1.05] mb-6"
          >
            Where Every Stitch
            <span className="block italic text-primary">Tells a Story</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-base md:text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
          >
            Discover timeless garments where heritage embroidery meets contemporary design. 
            Crafted by India's finest artisans, reimagined for the modern world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/shop"
              className="btn-luxury btn-elevated inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 font-body text-sm tracking-wider uppercase"
            >
              Shop Collection
            </Link>
            <Link
              to="/customize"
              className="btn-luxury btn-elevated inline-flex items-center justify-center border border-foreground/20 text-foreground px-8 py-4 font-body text-sm tracking-wider uppercase hover:bg-foreground/5 transition-colors"
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
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-foreground/20 animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
