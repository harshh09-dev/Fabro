import { useState } from "react";
import { Plus, Edit, Trash2, Search } from "lucide-react";
import { products } from "@/data/products";
import { artisans } from "@/data/artisans";
import AdminLayout from "@/components/AdminLayout";

const AdminProducts = () => {
  const [search, setSearch] = useState("");
  const filtered = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display text-2xl font-medium text-foreground mb-1">Products</h2>
            <p className="font-body text-sm text-muted-foreground">{products.length} total products</p>
          </div>
          <button className="btn-elevated flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 font-body text-sm tracking-wider uppercase">
            <Plus size={16} /> Add Product
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-card border border-border pl-10 pr-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors rounded-sm"
          />
        </div>

        {/* Table */}
        <div className="bg-card border border-border rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left font-body text-xs tracking-wider uppercase text-muted-foreground p-4">Product</th>
                  <th className="text-left font-body text-xs tracking-wider uppercase text-muted-foreground p-4">Category</th>
                  <th className="text-left font-body text-xs tracking-wider uppercase text-muted-foreground p-4">Embroidery</th>
                  <th className="text-left font-body text-xs tracking-wider uppercase text-muted-foreground p-4">Price</th>
                  <th className="text-left font-body text-xs tracking-wider uppercase text-muted-foreground p-4">Artisan</th>
                  <th className="text-right font-body text-xs tracking-wider uppercase text-muted-foreground p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => {
                  const artisan = artisans.find((a) => a.id === p.artisanId);
                  return (
                    <tr key={p.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img src={p.images[0]} alt={p.name} className="w-10 h-10 object-cover rounded-sm" />
                          <div>
                            <p className="font-body text-sm text-foreground">{p.name}</p>
                            {p.badge && <span className="font-body text-[10px] text-primary">{p.badge}</span>}
                          </div>
                        </div>
                      </td>
                      <td className="p-4 font-body text-sm text-muted-foreground capitalize">{p.category}</td>
                      <td className="p-4 font-body text-sm text-muted-foreground capitalize">{p.embroideryType}</td>
                      <td className="p-4 font-body text-sm text-foreground">₹{p.price.toLocaleString()}</td>
                      <td className="p-4 font-body text-sm text-muted-foreground">{artisan?.name || "—"}</td>
                      <td className="p-4">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors"><Edit size={14} /></button>
                          <button className="p-2 text-muted-foreground hover:text-destructive transition-colors"><Trash2 size={14} /></button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminProducts;
