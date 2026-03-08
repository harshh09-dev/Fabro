import { useParams, Link } from "react-router-dom";
import { ChevronLeft, MapPin } from "lucide-react";
import { artisans } from "@/data/artisans";
import { products } from "@/data/products";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const ArtisanProfile = () => {
  const { id } = useParams();
  const artisan = artisans.find((a) => a.id === id);

  if (!artisan) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="font-body text-muted-foreground">Artisan not found.</p>
      </div>
    );
  }

  const artisanProducts = products.filter((p) => p.artisanId === artisan.id);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background pb-mobile-nav md:pb-0">
        <Navigation />

        <div className="pt-24 pb-24">
          <div className="container mx-auto px-6">
            <Link to="/about" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12">
              <ChevronLeft size={16} /> Back to Our Story
            </Link>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Portrait */}
              <div className="img-zoom aspect-[3/4] rounded-sm overflow-hidden">
                <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover" />
              </div>

              {/* Story */}
              <div>
                <div className="gold-line w-12 mb-8" />
                <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Artisan Story</p>
                <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-4">{artisan.name}</h2>

                <div className="flex items-center gap-2 text-muted-foreground mb-8">
                  <MapPin size={14} />
                  <span className="font-body text-sm">{artisan.location}</span>
                </div>

                <div className="flex gap-8 mb-10 border-y border-border py-6">
                  <div>
                    <p className="font-display text-2xl font-medium text-primary">{artisan.experience}+</p>
                    <p className="font-body text-xs text-muted-foreground">Years Experience</p>
                  </div>
                  <div>
                    <p className="font-display text-lg font-medium text-foreground">{artisan.embroideryStyle}</p>
                    <p className="font-body text-xs text-muted-foreground">Specialization</p>
                  </div>
                </div>

                <p className="font-body text-base text-muted-foreground leading-[1.8] mb-8">{artisan.story}</p>

                <div className="bg-muted/50 p-6 rounded-sm">
                  <p className="font-body text-sm text-muted-foreground italic leading-relaxed">
                    "Every piece I create carries the spirit of my ancestors. When someone wears my embroidery, they wear a piece of our heritage."
                  </p>
                  <p className="font-body text-xs text-foreground mt-3">— {artisan.name}</p>
                </div>
              </div>
            </div>

            {/* Products by artisan */}
            {artisanProducts.length > 0 && (
              <div className="mt-24">
                <h3 className="font-display text-2xl font-medium text-foreground mb-10">
                  Crafted by {artisan.name.split(" ")[0]}
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {artisanProducts.map((p) => (
                    <Link key={p.id} to={`/product/${p.id}`} className="group">
                      <div className="img-zoom aspect-[3/4] rounded-sm overflow-hidden mb-3">
                        <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <h4 className="font-body text-sm text-foreground group-hover:text-primary transition-colors">{p.name}</h4>
                      <p className="font-body text-sm text-muted-foreground">₹{p.price.toLocaleString()}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ArtisanProfile;
