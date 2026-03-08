import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Share2 } from "lucide-react";
import { journalArticles } from "@/data/journal";
import { products } from "@/data/products";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const JournalArticle = () => {
  const { slug } = useParams();
  const article = journalArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="font-body text-muted-foreground">Article not found.</p>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => article.relatedProductIds.includes(p.id));

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: article.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background pb-mobile-nav md:pb-0">
        <Navigation />

        {/* Hero */}
        <section className="relative h-[50vh] md:h-[60vh] flex items-end pb-12">
          <div className="absolute inset-0">
            <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
          <div className="relative container mx-auto px-6">
            <Link to="/journal" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ChevronLeft size={16} /> Back to Journal
            </Link>
            <span className="font-body text-[10px] tracking-wider uppercase text-gold-muted block mb-3">{article.category}</span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-foreground max-w-3xl leading-tight">{article.title}</h1>
            <div className="flex items-center gap-6 mt-6">
              <span className="font-body text-sm text-muted-foreground">{article.readTime} min read</span>
              <span className="font-body text-sm text-muted-foreground">
                {new Date(article.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
              <button onClick={handleShare} className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Share2 size={14} /> Share
              </button>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto space-y-6">
              {article.content.map((paragraph, i) => (
                <p key={i} className={`font-body text-muted-foreground leading-[1.8] ${i === 0 ? "text-lg" : "text-base"}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 texture-linen">
            <div className="container mx-auto px-6">
              <h3 className="font-display text-2xl font-medium text-foreground mb-10 text-center">Shop This Story</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {relatedProducts.map((p) => (
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
          </section>
        )}

        <Footer />
      </div>
    </PageTransition>
  );
};

export default JournalArticle;
