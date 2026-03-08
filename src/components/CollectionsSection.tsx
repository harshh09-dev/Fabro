import { Link } from "react-router-dom";

const collections = [
  {
    name: "Kurtis",
    image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=600&q=80",
    category: "kurtis",
  },
  {
    name: "Shirts",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    category: "shirts",
  },
  {
    name: "Dupattas",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    category: "dupattas",
  },
  {
    name: "Jeans",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    category: "jeans",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80",
    category: "accessories",
  },
];

const CollectionsSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Explore
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
            Our Collections
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {collections.map((col, i) => (
            <Link
              key={col.name}
              to={`/shop?category=${col.category}`}
              className="group animate-on-scroll"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="img-zoom aspect-[3/4] rounded-sm overflow-hidden mb-4">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-body text-sm tracking-wider uppercase text-center text-foreground group-hover:text-primary transition-colors">
                {col.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
