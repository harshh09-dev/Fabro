import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Package, ShoppingBag, Users, ArrowLeft } from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: Package, label: "Products", href: "/admin/products" },
  { icon: ShoppingBag, label: "Orders", href: "/admin/orders" },
  { icon: Users, label: "Artisans", href: "/admin/artisans" },
];

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 admin-sidebar hidden lg:flex flex-col p-6 sticky top-0 h-screen">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 font-body text-xs text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft size={14} /> Back to Site
          </Link>
          <h1 className="font-display text-xl font-semibold text-foreground">FABRO</h1>
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Admin Panel</p>
        </div>

        <nav className="space-y-1 flex-1">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-sm font-body text-sm transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-4 h-14">
          <Link to="/" className="font-body text-xs text-muted-foreground">← Site</Link>
          <span className="font-display text-sm font-semibold text-foreground">FABRO Admin</span>
          <div className="w-10" />
        </div>
        <div className="flex overflow-x-auto gap-1 px-4 pb-2">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-body text-xs whitespace-nowrap transition-colors ${
                  isActive ? "bg-primary/10 text-primary" : "text-muted-foreground"
                }`}
              >
                <item.icon size={14} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 p-6 lg:p-10 pt-28 lg:pt-10">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
