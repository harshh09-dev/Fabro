import { Plus, Edit, MapPin } from "lucide-react";
import { artisans } from "@/data/artisans";
import { products } from "@/data/products";
import AdminLayout from "@/components/AdminLayout";

const AdminArtisans = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display text-2xl font-medium text-foreground mb-1">Artisans</h2>
            <p className="font-body text-sm text-muted-foreground">{artisans.length} artisan profiles</p>
          </div>
          <button className="btn-elevated flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 font-body text-sm tracking-wider uppercase">
            <Plus size={16} /> Add Artisan
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artisans.map((a) => {
            const productCount = products.filter((p) => p.artisanId === a.id).length;
            return (
              <div key={a.id} className="bg-card border border-border rounded-sm overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={a.image} alt={a.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-lg font-medium text-foreground">{a.name}</h3>
                    <button className="p-1 text-muted-foreground hover:text-foreground transition-colors"><Edit size={14} /></button>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground mb-3">
                    <MapPin size={12} />
                    <span className="font-body text-xs">{a.location}</span>
                  </div>
                  <div className="flex gap-4 mb-3">
                    <div>
                      <p className="font-body text-xs text-muted-foreground">Style</p>
                      <p className="font-body text-sm text-foreground">{a.embroideryStyle}</p>
                    </div>
                    <div>
                      <p className="font-body text-xs text-muted-foreground">Experience</p>
                      <p className="font-body text-sm text-foreground">{a.experience} years</p>
                    </div>
                    <div>
                      <p className="font-body text-xs text-muted-foreground">Products</p>
                      <p className="font-body text-sm text-foreground">{productCount}</p>
                    </div>
                  </div>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-2">{a.story}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminArtisans;
