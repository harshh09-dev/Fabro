import { Shield, Award, HandMetal, MessageCircle } from "lucide-react";

const badges = [
  { icon: Shield, label: "Secure Checkout", desc: "100% safe payments" },
  { icon: Award, label: "Artisan Certified", desc: "Authenticity guaranteed" },
  { icon: HandMetal, label: "Handcrafted", desc: "Not machine-made" },
  { icon: MessageCircle, label: "WhatsApp Support", desc: "We're always here" },
];

const TrustBadges = ({ compact = false }: { compact?: boolean }) => {
  if (compact) {
    return (
      <div className="flex flex-wrap gap-3">
        {badges.map((b) => (
          <div key={b.label} className="flex items-center gap-2 trust-shimmer px-3 py-2 border border-border rounded-sm">
            <b.icon size={14} className="text-gold-muted" />
            <span className="font-body text-[10px] tracking-wider uppercase text-muted-foreground">{b.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {badges.map((b) => (
        <div key={b.label} className="text-center trust-shimmer p-4 border border-border rounded-sm">
          <b.icon size={24} className="text-gold-muted mx-auto mb-3" />
          <p className="font-body text-xs font-medium text-foreground mb-1">{b.label}</p>
          <p className="font-body text-[10px] text-muted-foreground">{b.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
