import { Link } from "react-router-dom";

const CustomPreviewSection = () => {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <p className="font-body text-xs tracking-[0.4em] uppercase opacity-60 mb-4">
              Make It Yours
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium leading-snug mb-6">
              Custom Embroidery, <span className="italic">Your Vision</span>
            </h2>
            <p className="font-body text-base opacity-80 leading-relaxed mb-8">
              Send us your garment or choose from our collection — we'll hand-embroider 
              any design you dream of. From initials on a shirt collar to a full Phulkari 
              panel on a denim jacket, our artisans bring your imagination to life.
            </p>
            <div className="space-y-3 mb-10">
              {[
                "Choose your garment or send your own",
                "Upload a reference design",
                "Select placement, colors & thread style",
                "We craft it by hand & deliver to your door",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-display text-sm opacity-40 mt-0.5">
                    0{i + 1}
                  </span>
                  <span className="font-body text-sm opacity-90">{step}</span>
                </div>
              ))}
            </div>
            <Link
              to="/customize"
              className="inline-flex items-center justify-center border border-primary-foreground/30 text-primary-foreground px-8 py-4 font-body text-sm tracking-wider uppercase hover:bg-primary-foreground/10 transition-colors"
            >
              Start Customizing
            </Link>
          </div>

          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="img-zoom aspect-[3/4] rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&q=80"
                  alt="Custom embroidery example"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="img-zoom aspect-[3/4] rounded-sm overflow-hidden mt-8">
                <img
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80"
                  alt="Embroidery detail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPreviewSection;
