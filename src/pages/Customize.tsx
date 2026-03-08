import { useState } from "react";
import { Upload, ChevronRight, ChevronLeft, MessageCircle, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const steps = [
  { num: 1, label: "Garment" },
  { num: 2, label: "Design" },
  { num: 3, label: "Placement" },
  { num: 4, label: "Colors" },
  { num: 5, label: "Review" },
];

const placements = [
  { id: "collar", label: "Collar", x: "45%", y: "12%" },
  { id: "chest", label: "Chest", x: "35%", y: "30%" },
  { id: "sleeve", label: "Sleeve", x: "15%", y: "35%" },
  { id: "back", label: "Back", x: "50%", y: "40%" },
  { id: "hem", label: "Hem", x: "45%", y: "85%" },
  { id: "full", label: "Full Body", x: "45%", y: "55%" },
];

const threadColors = [
  { name: "Gold", color: "hsl(42, 70%, 55%)" },
  { name: "Silver", color: "hsl(0, 0%, 75%)" },
  { name: "Maroon", color: "hsl(345, 40%, 25%)" },
  { name: "Ivory", color: "hsl(40, 33%, 92%)" },
  { name: "Black", color: "hsl(0, 0%, 15%)" },
  { name: "Royal Blue", color: "hsl(230, 60%, 40%)" },
  { name: "Emerald", color: "hsl(152, 60%, 30%)" },
  { name: "Rose", color: "hsl(350, 60%, 55%)" },
];

const Customize = () => {
  const [step, setStep] = useState(1);
  const [garmentType, setGarmentType] = useState<"fabro" | "own" | "">("");
  const [referenceImage, setReferenceImage] = useState<string>("");
  const [placement, setPlacement] = useState("");
  const [colors, setColors] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const toggleColor = (color: string) => {
    setColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setReferenceImage(file.name);
  };

  const handleSubmit = () => {
    const msg = encodeURIComponent(
      `Hi FABRO, I'd like to request custom embroidery:\n\n` +
      `👤 Name: ${contactName}\n📱 Phone: ${contactPhone}\n\n` +
      `👕 Garment: ${garmentType === "fabro" ? "FABRO Product" : "My Own Clothing"}\n` +
      `🎨 Reference Design: ${referenceImage || "None uploaded"}\n` +
      `📍 Placement: ${placement}\n` +
      `🧵 Thread Colors: ${colors.join(", ")}\n` +
      `📝 Notes: ${notes || "None"}\n\n` +
      `Please share pricing and timeline.`
    );
    window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");
  };

  const canProceed = () => {
    if (step === 1) return garmentType !== "";
    if (step === 2) return true;
    if (step === 3) return placement !== "";
    if (step === 4) return colors.length > 0;
    return true;
  };

  const slideVariants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background pb-mobile-nav md:pb-0">
        <Navigation />
        <div className="pt-28 pb-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="gold-line w-12 mx-auto mb-6" />
                <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Design Studio</p>
                <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground">Custom Embroidery</h2>
              </div>

              {/* Stepper */}
              <div className="flex items-center justify-between mb-16 px-4">
                {steps.map((s, i) => (
                  <div key={s.num} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-body text-xs transition-all duration-500 ${
                          s.num < step
                            ? "bg-primary text-primary-foreground"
                            : s.num === step
                            ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {s.num < step ? <Check size={14} /> : s.num}
                      </div>
                      <span className={`font-body text-[10px] mt-2 transition-colors duration-300 ${
                        s.num <= step ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {s.label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`w-8 md:w-16 h-px mx-2 transition-colors duration-500 ${
                        s.num < step ? "stepper-line" : "bg-border"
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Step 1 — Garment */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h3 className="font-display text-xl font-medium text-foreground text-center">Choose Your Garment</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { value: "fabro" as const, label: "FABRO Product", desc: "Choose from our collection", img: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=300&q=80" },
                          { value: "own" as const, label: "Your Own Clothing", desc: "Send us your garment", img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&q=80" },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => setGarmentType(opt.value)}
                            className={`border text-left overflow-hidden transition-all duration-500 group ${
                              garmentType === opt.value ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-foreground/20"
                            }`}
                          >
                            <div className="aspect-[4/3] overflow-hidden">
                              <img src={opt.img} alt={opt.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="p-4">
                              <p className="font-body text-sm font-medium text-foreground mb-1">{opt.label}</p>
                              <p className="font-body text-xs text-muted-foreground">{opt.desc}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2 — Upload */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <h3 className="font-display text-xl font-medium text-foreground text-center">Upload Reference Design</h3>
                      <p className="font-body text-sm text-muted-foreground text-center">
                        Share an image of the embroidery design you'd like, or skip this step.
                      </p>
                      <label className="flex flex-col items-center justify-center border-2 border-dashed border-border p-16 cursor-pointer hover:border-primary/40 transition-all duration-500 group">
                        <Upload size={32} className="text-muted-foreground mb-4 group-hover:text-primary transition-colors duration-300" />
                        <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {referenceImage || "Click to upload image"}
                        </span>
                        <span className="font-body text-xs text-muted-foreground mt-2">PNG, JPG up to 10MB</span>
                        <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                      </label>
                    </div>
                  )}

                  {/* Step 3 — Placement with garment preview */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <h3 className="font-display text-xl font-medium text-foreground text-center">Select Placement</h3>
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Garment preview */}
                        <div className="relative aspect-[3/4] bg-muted/30 border border-border rounded-sm overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500&q=80"
                            alt="Garment preview"
                            className="w-full h-full object-cover opacity-60"
                          />
                          {/* Placement indicator */}
                          {placement && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute w-16 h-16 border-2 border-primary rounded-full bg-primary/20 flex items-center justify-center"
                              style={{
                                left: placements.find((p) => p.id === placement)?.x,
                                top: placements.find((p) => p.id === placement)?.y,
                                transform: "translate(-50%, -50%)",
                              }}
                            >
                              <span className="font-body text-[10px] text-primary font-medium">{placement}</span>
                            </motion.div>
                          )}
                        </div>

                        {/* Placement options */}
                        <div className="grid grid-cols-2 gap-3 content-start">
                          {placements.map((p) => (
                            <button
                              key={p.id}
                              onClick={() => setPlacement(p.id)}
                              className={`p-4 border font-body text-sm transition-all duration-300 ${
                                placement === p.id
                                  ? "border-primary bg-primary/5 text-foreground ring-2 ring-primary/20"
                                  : "border-border text-muted-foreground hover:border-foreground/20"
                              }`}
                            >
                              {p.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4 — Colors & Notes */}
                  {step === 4 && (
                    <div className="space-y-8">
                      <h3 className="font-display text-xl font-medium text-foreground text-center">Choose Colors & Add Notes</h3>
                      
                      {/* Thread color swatches */}
                      <div>
                        <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-4">Thread Colors</p>
                        <div className="grid grid-cols-4 gap-3">
                          {threadColors.map((c) => (
                            <button
                              key={c.name}
                              onClick={() => toggleColor(c.name)}
                              className={`flex flex-col items-center gap-2 p-3 border transition-all duration-300 ${
                                colors.includes(c.name)
                                  ? "border-primary ring-2 ring-primary/20"
                                  : "border-border hover:border-foreground/20"
                              }`}
                            >
                              <div
                                className="w-8 h-8 rounded-full border border-border"
                                style={{ backgroundColor: c.color }}
                              />
                              <span className="font-body text-[10px] text-muted-foreground">{c.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Notes */}
                      <div>
                        <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-3">Additional Notes</p>
                        <textarea
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          rows={4}
                          placeholder="Any specific instructions or preferences..."
                          className="w-full bg-background border border-border p-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors duration-300 resize-none"
                        />
                      </div>

                      {/* Contact */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-3">Your Name</p>
                          <input
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            placeholder="Full name"
                            className="w-full bg-background border border-border p-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors duration-300"
                          />
                        </div>
                        <div>
                          <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-3">Phone Number</p>
                          <input
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)}
                            placeholder="+91 98765 43210"
                            className="w-full bg-background border border-border p-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 5 — Review */}
                  {step === 5 && (
                    <div className="space-y-8">
                      <h3 className="font-display text-xl font-medium text-foreground text-center">Review & Submit</h3>
                      
                      <div className="bg-card border border-border p-8 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="font-body text-xs text-muted-foreground block mb-1">Garment</span>
                            <span className="font-body text-sm text-foreground">{garmentType === "fabro" ? "FABRO Product" : "My Own Clothing"}</span>
                          </div>
                          <div>
                            <span className="font-body text-xs text-muted-foreground block mb-1">Reference Design</span>
                            <span className="font-body text-sm text-foreground">{referenceImage || "None uploaded"}</span>
                          </div>
                          <div>
                            <span className="font-body text-xs text-muted-foreground block mb-1">Placement</span>
                            <span className="font-body text-sm text-foreground capitalize">{placement}</span>
                          </div>
                          <div>
                            <span className="font-body text-xs text-muted-foreground block mb-1">Thread Colors</span>
                            <div className="flex gap-1.5 flex-wrap">
                              {colors.map((c) => {
                                const tc = threadColors.find((t) => t.name === c);
                                return (
                                  <div key={c} className="flex items-center gap-1">
                                    <div className="w-3 h-3 rounded-full border border-border" style={{ backgroundColor: tc?.color }} />
                                    <span className="font-body text-xs text-foreground">{c}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        {notes && (
                          <div>
                            <span className="font-body text-xs text-muted-foreground block mb-1">Notes</span>
                            <span className="font-body text-sm text-foreground">{notes}</span>
                          </div>
                        )}
                        <div className="gold-line w-full" />
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="font-body text-xs text-muted-foreground block mb-1">Name</span>
                            <span className="font-body text-sm text-foreground">{contactName || "—"}</span>
                          </div>
                          <div>
                            <span className="font-body text-xs text-muted-foreground block mb-1">Phone</span>
                            <span className="font-body text-sm text-foreground">{contactPhone || "—"}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <button
                          onClick={handleSubmit}
                          className="btn-elevated inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 font-body text-sm tracking-wider uppercase"
                        >
                          <MessageCircle size={16} />
                          Submit via WhatsApp
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between mt-16">
                {step > 1 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    <ChevronLeft size={16} /> Back
                  </button>
                ) : <div />}
                {step < 5 && (
                  <button
                    onClick={() => canProceed() && setStep(step + 1)}
                    disabled={!canProceed()}
                    className="btn-elevated flex items-center gap-2 font-body text-sm text-foreground bg-muted px-6 py-2.5 disabled:opacity-50 hover:text-primary transition-colors duration-300"
                  >
                    Next <ChevronRight size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Customize;
