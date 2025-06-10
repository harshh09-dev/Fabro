
const CustomizationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll animate-left">
            <div className="embroidery-border bg-gradient-to-br from-cream via-sage/10 to-terracotta/10 p-8 rounded-lg">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
                Made Just for You
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-primary mb-2">
                      Choose Your Design
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Select from our collection or share your own design inspiration.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-primary mb-2">
                      Select Fabric & Size
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Premium cotton, silk, or linen in your perfect fit.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-primary mb-2">
                      Handcrafted with Love
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Our artisans create your unique piece over 2-3 weeks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll animate-right">
            <div className="bg-card rounded-lg p-8">
              <h3 className="font-display text-2xl font-bold text-primary mb-6">
                Size Guide
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full font-body text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-primary font-semibold">Size</th>
                      <th className="text-left py-3 text-primary font-semibold">Bust (inches)</th>
                      <th className="text-left py-3 text-primary font-semibold">Length (inches)</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3 font-semibold">XS</td>
                      <td className="py-3">32-34</td>
                      <td className="py-3">42-44</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 font-semibold">S</td>
                      <td className="py-3">34-36</td>
                      <td className="py-3">44-46</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 font-semibold">M</td>
                      <td className="py-3">36-38</td>
                      <td className="py-3">46-48</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 font-semibold">L</td>
                      <td className="py-3">38-40</td>
                      <td className="py-3">48-50</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold">XL</td>
                      <td className="py-3">40-42</td>
                      <td className="py-3">50-52</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-display font-semibold text-primary mb-2">
                  Available Fabrics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Premium Cotton', 'Pure Silk', 'Linen Blend', 'Organic Cotton'].map((fabric) => (
                    <span
                      key={fabric}
                      className="bg-background px-3 py-1 rounded-full text-xs font-medium text-muted-foreground"
                    >
                      {fabric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizationSection;
