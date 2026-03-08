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
    <section className="py-24 md:py-32 texture-linen">
      <div className="container mx-auto px-6">
        <div className="max-w-lg mx-auto text-center animate-on-scroll">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Stay Connected
          </p>
          <h2 className="font-display text-3xl font-medium text-foreground mb-4">
            The FABRO Journal
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-8">
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
                className="flex-1 bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-3 font-body text-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
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
