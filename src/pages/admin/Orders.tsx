import { useState } from "react";
import { Eye, Check, X as XIcon } from "lucide-react";
import AdminLayout from "@/components/AdminLayout";

const mockOrders = [
  { id: "ORD-001", customer: "Priya Sharma", email: "priya@email.com", items: "Ivory Chikankari Kurti (M) x1", total: 3499, status: "processing", type: "regular", date: "2026-03-07" },
  { id: "ORD-002", customer: "Sarah Mitchell", email: "sarah@email.com", items: "Custom Phulkari Dupatta", total: 4500, status: "pending", type: "custom", date: "2026-03-06", designImage: true },
  { id: "ORD-003", customer: "Ananya Reddy", email: "ananya@email.com", items: "Kashida Jeans (32) x1, Zardozi Clutch x1", total: 5298, status: "shipped", type: "regular", date: "2026-03-05" },
  { id: "ORD-004", customer: "David Chen", email: "david@email.com", items: "Custom Kantha Shirt - Peacock design", total: 3800, status: "pending", type: "custom", date: "2026-03-04", designImage: true },
  { id: "ORD-005", customer: "Meera Joshi", email: "meera@email.com", items: "Maroon Zardozi Kurti (L) x2", total: 11998, status: "delivered", type: "regular", date: "2026-03-03" },
];

const statusColors: Record<string, string> = {
  pending: "text-warning",
  processing: "text-gold-muted",
  shipped: "text-primary",
  delivered: "text-success",
  rejected: "text-destructive",
};

const AdminOrders = () => {
  const [filter, setFilter] = useState<"all" | "regular" | "custom">("all");
  const filtered = filter === "all" ? mockOrders : mockOrders.filter((o) => o.type === filter);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="font-display text-2xl font-medium text-foreground mb-1">Orders</h2>
          <p className="font-body text-sm text-muted-foreground">Manage orders and customization requests</p>
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          {(["all", "regular", "custom"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-body text-xs px-4 py-2 border transition-colors capitalize ${
                filter === f ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-foreground/30"
              }`}
            >
              {f === "all" ? "All Orders" : f === "custom" ? "Custom Requests" : "Regular Orders"}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-card border border-border rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left font-body text-xs tracking-wider uppercase text-muted-foreground p-4">Order</th>
                  <th className="text-left font-body text-xs tracking-wider uppercase text-muted-foreground p-4">Customer</th>
                  <th className="text-left font-body text-xs tracking-wider uppercase text-muted-foreground p-4">Items</th>
                  <th className="text-left font-body text-xs tracking-wider uppercase text-muted-foreground p-4">Total</th>
                  <th className="text-left font-body text-xs tracking-wider uppercase text-muted-foreground p-4">Status</th>
                  <th className="text-left font-body text-xs tracking-wider uppercase text-muted-foreground p-4">Date</th>
                  <th className="text-right font-body text-xs tracking-wider uppercase text-muted-foreground p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((o) => (
                  <tr key={o.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="p-4">
                      <p className="font-body text-sm text-foreground">{o.id}</p>
                      {o.type === "custom" && <span className="font-body text-[10px] tracking-wider uppercase text-gold-muted">Custom</span>}
                    </td>
                    <td className="p-4">
                      <p className="font-body text-sm text-foreground">{o.customer}</p>
                      <p className="font-body text-xs text-muted-foreground">{o.email}</p>
                    </td>
                    <td className="p-4 font-body text-sm text-muted-foreground max-w-[200px] truncate">{o.items}</td>
                    <td className="p-4 font-body text-sm font-medium text-foreground">₹{o.total.toLocaleString()}</td>
                    <td className="p-4">
                      <span className={`font-body text-xs tracking-wider uppercase ${statusColors[o.status]}`}>{o.status}</span>
                    </td>
                    <td className="p-4 font-body text-sm text-muted-foreground">{o.date}</td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors" title="View"><Eye size={14} /></button>
                        {o.status === "pending" && (
                          <>
                            <button className="p-2 text-muted-foreground hover:text-success transition-colors" title="Approve"><Check size={14} /></button>
                            <button className="p-2 text-muted-foreground hover:text-destructive transition-colors" title="Reject"><XIcon size={14} /></button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminOrders;
