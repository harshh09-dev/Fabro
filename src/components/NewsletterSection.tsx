import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-32 md:py-40">
      <div className="container mx-auto px-6">
        <div className="max-w-lg mx-auto text-center animate-on-scroll">
          <div className="section-divider mx-auto mb-8" />
          <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">
            Stay Connected
          </p>
          <h2 className="font-display text-3xl font-light text-foreground mb-4">
            The FABRO Journal
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-10">
            Stories of craft, new collections, and artisan spotlights — delivered thoughtfully.
          </p>

          {submitted ? (
            <p className="font-body text-sm text-primary animate-fade-in">
              Thank you for joining our community.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 bg-card border border-border px-5 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-8 py-4 font-body text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
