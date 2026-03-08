import { useState } from "react";
import { Upload, ChevronRight, ChevronLeft, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const placements = ["Collar", "Chest", "Sleeve", "Back", "Hem", "Full Body"];
const colorOptions = ["Gold", "Silver", "Maroon", "Ivory", "Black", "Custom"];

const Customize = () => {
  const [step, setStep] = useState(1);
  const [garmentType, setGarmentType] = useState<"fabro" | "own" | "">("");
  const [referenceImage, setReferenceImage] = useState<string>("");
  const [placement, setPlacement] = useState("");
  const [colors, setColors] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

  const toggleColor = (color: string) => {
    setColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setReferenceImage(file.name);
    }
  };

  const handleSubmit = () => {
    const msg = encodeURIComponent(
      `Hi FABRO, I'd like to request custom embroidery:\n\n` +
      `Garment: ${garmentType === "fabro" ? "FABRO Product" : "My Own Clothing"}\n` +
      `Reference Design: ${referenceImage || "None uploaded"}\n` +
      `Placement: ${placement}\n` +
      `Colors: ${colors.join(", ")}\n` +
      `Notes: ${notes}\n\n` +
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
                Custom Embroidery
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
                Design Your Own Piece
              </h2>
            </div>

            {/* Progress */}
            <div className="flex items-center justify-center gap-2 mb-12">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-body text-xs transition-colors ${
                      s <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {s}
                  </div>
                  {s < 5 && <div className={`w-8 h-px ${s < step ? "bg-primary" : "bg-border"}`} />}
                </div>
              ))}
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="font-display text-xl font-medium text-foreground">Choose Your Garment</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "fabro" as const, label: "FABRO Product", desc: "Choose from our collection" },
                    { value: "own" as const, label: "Your Own Clothing", desc: "Send us your garment" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setGarmentType(opt.value)}
                      className={`p-6 border text-left transition-colors ${
                        garmentType === opt.value ? "border-primary bg-primary/5" : "border-border hover:border-foreground/20"
                      }`}
                    >
                      <p className="font-body text-sm font-medium text-foreground mb-1">{opt.label}</p>
                      <p className="font-body text-xs text-muted-foreground">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="font-display text-xl font-medium text-foreground">Upload Reference Design</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Share an image of the embroidery design you have in mind, or skip this step.
                </p>
                <label className="flex flex-col items-center justify-center border-2 border-dashed border-border p-12 cursor-pointer hover:border-foreground/30 transition-colors">
                  <Upload size={24} className="text-muted-foreground mb-3" />
                  <span className="font-body text-sm text-muted-foreground">
                    {referenceImage || "Click to upload image"}
                  </span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                </label>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="font-display text-xl font-medium text-foreground">Select Placement</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {placements.map((p) => (
                    <button
                      key={p}
                      onClick={() => setPlacement(p)}
                      className={`p-4 border font-body text-sm transition-colors ${
                        placement === p ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground hover:border-foreground/20"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="font-display text-xl font-medium text-foreground">Choose Colors & Add Notes</h3>
                <div>
                  <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-3">Thread Colors</p>
                  <div className="flex flex-wrap gap-2">
                    {colorOptions.map((c) => (
                      <button
                        key={c}
                        onClick={() => toggleColor(c)}
                        className={`px-4 py-2 border font-body text-sm transition-colors ${
                          colors.includes(c) ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground hover:border-foreground/20"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-3">Additional Notes</p>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                    placeholder="Any specific instructions or preferences..."
                    className="w-full bg-background border border-border p-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors resize-none"
                  />
                </div>
              </div>
            )}

            {/* Step 5 */}
            {step === 5 && (
              <div className="space-y-6 animate-fade-in text-center">
                <h3 className="font-display text-xl font-medium text-foreground">Review & Submit</h3>
                <div className="bg-muted/50 p-6 rounded-sm text-left space-y-3">
                  <div><span className="font-body text-xs text-muted-foreground">Garment:</span> <span className="font-body text-sm text-foreground">{garmentType === "fabro" ? "FABRO Product" : "My Own Clothing"}</span></div>
                  <div><span className="font-body text-xs text-muted-foreground">Reference:</span> <span className="font-body text-sm text-foreground">{referenceImage || "None"}</span></div>
                  <div><span className="font-body text-xs text-muted-foreground">Placement:</span> <span className="font-body text-sm text-foreground">{placement}</span></div>
                  <div><span className="font-body text-xs text-muted-foreground">Colors:</span> <span className="font-body text-sm text-foreground">{colors.join(", ")}</span></div>
                  {notes && <div><span className="font-body text-xs text-muted-foreground">Notes:</span> <span className="font-body text-sm text-foreground">{notes}</span></div>}
                </div>
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-body text-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
                >
                  <MessageCircle size={16} />
                  Submit via WhatsApp
                </button>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-12">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronLeft size={16} /> Back
                </button>
              ) : <div />}
              {step < 5 && (
                <button
                  onClick={() => canProceed() && setStep(step + 1)}
                  disabled={!canProceed()}
                  className="flex items-center gap-2 font-body text-sm text-foreground disabled:text-muted-foreground disabled:opacity-50 hover:text-primary transition-colors"
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
  );
};

export default Customize;
