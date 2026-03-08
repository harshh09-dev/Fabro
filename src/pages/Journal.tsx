import { Link } from "react-router-dom";
import { useEffect } from "react";
import { journalArticles } from "@/data/journal";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Journal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const featured = journalArticles[0];
  const rest = journalArticles.slice(1);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background pb-mobile-nav md:pb-0">
        <Navigation />

        <div className="pt-28 pb-24">
          <div className="container mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-20 animate-on-scroll">
              <div className="gold-line w-12 mx-auto mb-6" />
              <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Stories of Craft</p>
              <h2 className="font-display text-4xl md:text-6xl font-medium text-foreground">FABRO Journal</h2>
            </div>

            {/* Featured article */}
            <Link to={`/journal/${featured.slug}`} className="group block mb-20 animate-on-scroll">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="img-zoom aspect-[4/3] rounded-sm overflow-hidden">
                  <img src={featured.coverImage} alt={featured.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <span className="font-body text-[10px] tracking-wider uppercase text-gold-muted mb-3 block">{featured.category}</span>
                  <h3 className="font-display text-2xl md:text-4xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors duration-500">
                    {featured.title}
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4">
                    <span className="font-body text-xs text-muted-foreground">{featured.readTime} min read</span>
                    <span className="font-body text-xs text-muted-foreground">{new Date(featured.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((article, i) => (
                <Link
                  key={article.id}
                  to={`/journal/${article.slug}`}
                  className="group animate-on-scroll"
                  style={{ animationDelay: `${0.1 * i}s` }}
                >
                  <div className="img-zoom aspect-[4/3] rounded-sm overflow-hidden mb-4">
                    <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <span className="font-body text-[10px] tracking-wider uppercase text-gold-muted mb-2 block">{article.category}</span>
                  <h3 className="font-display text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                    {article.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">{article.excerpt}</p>
                  <span className="font-body text-xs text-muted-foreground">{article.readTime} min read</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Journal;
