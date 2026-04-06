import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const collections = [
  {
    name: "Women's Collection",
    subtitle: "Embroidered kurtis, dupattas & more",
    image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80",
    slug: "kurtis",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    name: "Men's Collection",
    subtitle: "Shirts & accessories with artisan touch",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    slug: "shirts",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    name: "Custom Embroidery",
    subtitle: "Your design, our craft",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80",
    slug: "accessories",
    span: "",
    aspect: "aspect-[4/3]",
  },
];

const CollectionsSection = () => {
  return (
    <section className="py-32 md:py-40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-on-scroll">
          <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">
            Explore
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {collections.map((col, i) => (
            <Link
              key={col.name}
              to={col.slug === "accessories" ? "/customize" : `/collection/${col.slug}`}
              className={`group animate-on-scroll relative overflow-hidden ${col.span}`}
              style={{ animationDelay: `${0.15 * i}s` }}
            >
              <div className={`img-zoom ${col.aspect} relative`}>
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute inset-0 bg-background/10 group-hover:bg-background/0 transition-colors duration-700" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    className="transform group-hover:translate-y-0 transition-all duration-500"
                  >
                    <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-2">
                      {col.subtitle}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-light text-foreground">
                      {col.name}
                    </h3>
                    <div className="h-px w-0 group-hover:w-16 bg-primary mt-4 transition-all duration-700" />
                  </motion.div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
