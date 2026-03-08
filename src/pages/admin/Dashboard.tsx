import { Link } from "react-router-dom";
import { Package, Palette, Users, TrendingUp, ShoppingBag, Star } from "lucide-react";
import { products } from "@/data/products";
import { artisans } from "@/data/artisans";
import AdminLayout from "@/components/AdminLayout";

const stats = [
  { label: "Total Products", value: products.length.toString(), icon: Package, color: "text-primary" },
  { label: "Artisans", value: artisans.length.toString(), icon: Users, color: "text-gold-muted" },
  { label: "Pending Orders", value: "12", icon: ShoppingBag, color: "text-success" },
  { label: "Custom Requests", value: "5", icon: Palette, color: "text-wine" },
];

const recentOrders = [
  { id: "ORD-001", customer: "Priya Sharma", product: "Ivory Chikankari Kurti", amount: 3499, status: "Processing" },
  { id: "ORD-002", customer: "Ananya Reddy", product: "Maroon Zardozi Kurti", amount: 5999, status: "Shipped" },
  { id: "ORD-003", customer: "David Chen", product: "Zardozi Clutch", amount: 1999, status: "Delivered" },
  { id: "ORD-004", customer: "Sarah Mitchell", product: "Phulkari Dupatta", amount: 2199, status: "Processing" },
];

const topProducts = products.filter((p) => p.isBestseller).slice(0, 4);

const Dashboard = () => (
  <AdminLayout>
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl font-medium text-foreground mb-1">Dashboard</h2>
        <p className="font-body text-sm text-muted-foreground">Welcome back to FABRO admin</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card border border-border p-6 rounded-sm">
            <s.icon size={20} className={`${s.color} mb-3`} />
            <p className="font-display text-2xl font-medium text-foreground">{s.value}</p>
            <p className="font-body text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent orders */}
        <div className="bg-card border border-border rounded-sm p-6">
          <h3 className="font-display text-lg font-medium text-foreground mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {recentOrders.map((o) => (
              <div key={o.id} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="font-body text-sm text-foreground">{o.customer}</p>
                  <p className="font-body text-xs text-muted-foreground">{o.product}</p>
                </div>
                <div className="text-right">
                  <p className="font-body text-sm font-medium text-foreground">₹{o.amount.toLocaleString()}</p>
                  <span className={`font-body text-[10px] tracking-wider uppercase ${
                    o.status === "Delivered" ? "text-success" : o.status === "Shipped" ? "text-gold-muted" : "text-muted-foreground"
                  }`}>{o.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top products */}
        <div className="bg-card border border-border rounded-sm p-6">
          <h3 className="font-display text-lg font-medium text-foreground mb-4">Top Products</h3>
          <div className="space-y-4">
            {topProducts.map((p) => (
              <div key={p.id} className="flex items-center gap-4 border-b border-border pb-3 last:border-0 last:pb-0">
                <img src={p.images[0]} alt={p.name} className="w-12 h-12 object-cover rounded-sm" />
                <div className="flex-1 min-w-0">
                  <p className="font-body text-sm text-foreground truncate">{p.name}</p>
                  <div className="flex items-center gap-1">
                    <Star size={10} className="fill-gold-muted text-gold-muted" />
                    <span className="font-body text-xs text-muted-foreground">{p.rating} ({p.reviews})</span>
                  </div>
                </div>
                <p className="font-body text-sm font-medium text-foreground">₹{p.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
);

export default Dashboard;
