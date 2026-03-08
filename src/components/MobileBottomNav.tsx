import { Link, useLocation } from "react-router-dom";
import { Home, Search, Palette, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Search, label: "Shop", href: "/shop" },
  { icon: Palette, label: "Customize", href: "/customize" },
  { icon: ShoppingBag, label: "Cart", href: "/cart" },
];

const MobileBottomNav = () => {
  const location = useLocation();
  const { totalItems } = useCart();

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border">
      <div className="flex items-center justify-around h-16 pb-[env(safe-area-inset-bottom)]">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <div className="relative">
                <item.icon size={20} />
                {item.label === "Cart" && totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-primary-foreground text-[9px] rounded-full flex items-center justify-center font-body font-medium">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="font-body text-[10px]">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
