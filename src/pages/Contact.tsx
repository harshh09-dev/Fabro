import { useState } from "react";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
              Reach Out
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
              Get in Touch
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="text-center py-16 animate-fade-in">
                  <p className="font-display text-xl font-medium text-foreground mb-2">Thank you</p>
                  <p className="font-body text-sm text-muted-foreground">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="font-body text-xs tracking-wider uppercase text-muted-foreground block mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:outline-none focus:border-foreground/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-wider uppercase text-muted-foreground block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:outline-none focus:border-foreground/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-wider uppercase text-muted-foreground block mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:outline-none focus:border-foreground/40 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground px-8 py-4 font-body text-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-lg font-medium text-foreground mb-6">Other Ways to Connect</h3>
                <div className="space-y-6">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center group-hover:border-foreground/40 transition-colors">
                      <MessageCircle size={18} className="text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-foreground">WhatsApp</p>
                      <p className="font-body text-xs text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </a>
                  <a href="mailto:hello@fabro.in" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center group-hover:border-foreground/40 transition-colors">
                      <Mail size={18} className="text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-foreground">Email</p>
                      <p className="font-body text-xs text-muted-foreground">hello@fabro.in</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center">
                      <MapPin size={18} className="text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-foreground">Studio</p>
                      <p className="font-body text-xs text-muted-foreground">Lucknow, Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg font-medium text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {["Instagram", "Pinterest", "Facebook"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="font-body text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-foreground/20 pb-1"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
