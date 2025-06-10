
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our collections or need a custom design? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-on-scroll animate-left">
            <div className="embroidery-border bg-background p-8 rounded-lg">
              <h3 className="font-display text-2xl font-bold text-primary mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-body font-medium text-primary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none transition-all duration-200"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-body font-medium text-primary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none transition-all duration-200"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block font-body font-medium text-primary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-body font-medium text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none transition-all duration-200"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-terracotta text-white py-3 rounded-lg font-body font-semibold hover:bg-earth transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-on-scroll animate-right">
            <div className="space-y-8">
              <div className="bg-background p-6 rounded-lg">
                <h4 className="font-display text-xl font-bold text-primary mb-4">
                  Visit Our Studio
                </h4>
                <p className="font-body text-muted-foreground mb-2">
                  123 Artisan Lane, Craft District
                </p>
                <p className="font-body text-muted-foreground mb-2">
                  Mumbai, Maharashtra 400001
                </p>
                <p className="font-body text-muted-foreground">
                  Open: Mon-Sat, 10 AM - 7 PM
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg">
                <h4 className="font-display text-xl font-bold text-primary mb-4">
                  Quick Contact
                </h4>
                <p className="font-body text-muted-foreground mb-2">
                  📞 +91 98765 43210
                </p>
                <p className="font-body text-muted-foreground mb-2">
                  ✉️ hello@artisankurtis.com
                </p>
                <p className="font-body text-muted-foreground">
                  💬 WhatsApp: +91 98765 43210
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg">
                <h4 className="font-display text-xl font-bold text-primary mb-4">
                  Follow Our Journey
                </h4>
                <div className="flex gap-4">
                  {['Instagram', 'Facebook', 'Pinterest', 'YouTube'].map((social) => (
                    <button
                      key={social}
                      className="bg-terracotta text-white px-4 py-2 rounded-full font-body text-sm font-medium hover:bg-earth transition-colors duration-200"
                    >
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="embroidery-border bg-gradient-to-r from-cream via-sage/10 to-terracotta/10 p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-primary mb-4">
              Stay Updated
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Subscribe to our newsletter for exclusive designs, special offers, and artisan stories.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none"
              />
              <button className="bg-terracotta text-white px-6 py-3 rounded-lg font-body font-semibold hover:bg-earth transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-primary mb-2">
              Artisan Kurtis
            </div>
            <p className="font-body text-muted-foreground mb-4">
              Handcrafted with love, designed for you
            </p>
            <p className="font-body text-sm text-muted-foreground">
              © 2024 Artisan Kurtis. All rights reserved. | Preserving tradition, embracing modernity.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
