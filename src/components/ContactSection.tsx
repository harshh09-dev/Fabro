import { useState } from "react";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi FABRO!\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(`https://wa.me/918852808522?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            CONNECT WITH US
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
            Get in Touch
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-3 max-w-md mx-auto">
            Have questions about our products or custom orders? Reach out now!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {/* Contact cards */}
          <div className="space-y-8 animate-on-scroll">
            <a
              href="https://wa.me/918852808522"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 bg-card border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-medium text-foreground mb-1">WhatsApp</h3>
                <p className="font-body text-xs text-muted-foreground mb-2">(Fastest Response)</p>
                <span className="font-body text-sm text-primary group-hover:underline">Message on WhatsApp</span>
              </div>
            </a>

            <a
              href="mailto:hello@fabro.in"
              className="flex items-start gap-4 p-6 bg-card border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-medium text-foreground mb-1">Email</h3>
                <p className="font-body text-sm text-muted-foreground">hello@fabro.in</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-6 bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-medium text-foreground mb-2">Other Ways</h3>
                <ul className="font-body text-sm text-muted-foreground space-y-1">
                  <li>WhatsApp: +91 8852 808 522</li>
                  <li>Email: hello@fabro.in</li>
                  <li>Meesho: @fabro.official</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-display text-lg font-medium text-foreground mb-2">Send us a Message</h3>
            <p className="font-body text-xs text-muted-foreground mb-6">
              Fill out the form below and we'll get back to you shortly
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-body text-xs text-muted-foreground mb-1 block">Name *</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  className="w-full font-body text-sm border border-border bg-card px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="font-body text-xs text-muted-foreground mb-1 block">Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  className="w-full font-body text-sm border border-border bg-card px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="font-body text-xs text-muted-foreground mb-1 block">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  className="w-full font-body text-sm border border-border bg-card px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 font-body text-sm tracking-wider uppercase hover:opacity-90 transition-opacity btn-elevated"
              >
                Send Message
              </button>
              <p className="font-body text-[10px] text-muted-foreground text-center">
                Your message will be forwarded to our WhatsApp for fastest response.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom quick links */}
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-16">
          {[
            { icon: "🛍️", title: "Product Orders", desc: "Browse and order via WhatsApp for instant confirmation" },
            { icon: "✨", title: "Custom Designs", desc: "Request personalized embroidery pieces tailored to you" },
            { icon: "🤝", title: "Wholesale", desc: "Inquire about bulk orders and reseller partnerships" },
          ].map((item) => (
            <div key={item.title} className="text-center animate-on-scroll">
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <h4 className="font-body text-sm font-medium text-foreground mb-1">{item.title}</h4>
              <p className="font-body text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
