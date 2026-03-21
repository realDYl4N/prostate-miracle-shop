import { Check, X } from "lucide-react";

const rows = [
  { label: "Beta-Sitosterol / Capsule", miracle: "300mg (pure)", competitor: "50–100mg (often impure)" },
  { label: "Beta-Sitosterol / Bottle", miracle: "18,000mg", competitor: "1,500–3,000mg" },
  { label: "Source", miracle: "Non-GMO Pine (France)", competitor: "Soy (China/USA)" },
  { label: "Purity Guarantee", miracle: "99% pure, ≥70% beta-sitosterol", competitor: "No guarantee listed" },
  { label: "Saw Palmetto", miracle: "not-included", competitor: "included-ineffective" },
  { label: "Filler Ingredients", miracle: "None", competitor: "Multiple" },
  { label: "Capsules per Bottle", miracle: "60 (30-day supply)", competitor: "30–60" },
  { label: "Money-Back Guarantee", miracle: "60-day, 100% refund", competitor: "Varies / None" },
  { label: "Years on Market", miracle: "24+ years (since 2001)", competitor: "Often <5 years" },
  
];

export const ComparisonTable = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
          How Prostate Miracle® Stacks Up
        </h2>

        {/* Desktop table */}
        <div className="hidden md:block rounded-2xl border border-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-primary/10">
                <th className="text-left font-display font-bold text-foreground px-6 py-4 w-[35%]"></th>
                <th className="text-center font-display font-bold text-primary px-6 py-4 w-[32.5%]">Prostate Miracle®</th>
                <th className="text-center font-display font-bold text-muted-foreground px-6 py-4 w-[32.5%]">Typical Competitor</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}>
                  <td className="px-6 py-4 font-body font-semibold text-foreground text-sm">{row.label}</td>
                  <td className="px-6 py-4 text-center">
                    {row.miracle === "not-included" ? (
                      <span className="inline-flex items-center gap-1.5 text-sm font-body text-primary font-medium">
                        <X className="h-4 w-4" /> Not included (by design)
                      </span>
                    ) : (
                      <span className="text-sm font-body text-primary font-medium">{row.miracle}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.competitor === "included-ineffective" ? (
                      <span className="inline-flex items-center gap-1.5 text-sm font-body text-muted-foreground">
                        <Check className="h-4 w-4" /> Included (ineffective dose)
                      </span>
                    ) : (
                      <span className="text-sm font-body text-muted-foreground">{row.competitor}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {rows.map((row, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-4">
              <p className="font-display font-bold text-foreground text-sm mb-3">{row.label}</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[11px] font-body text-muted-foreground uppercase tracking-wider mb-1">Prostate Miracle®</p>
                  {row.miracle === "not-included" ? (
                    <span className="inline-flex items-center gap-1 text-sm font-body text-primary font-medium">
                      <X className="h-3.5 w-3.5" /> Not included
                    </span>
                  ) : (
                    <p className="text-sm font-body text-primary font-medium">{row.miracle}</p>
                  )}
                </div>
                <div>
                  <p className="text-[11px] font-body text-muted-foreground uppercase tracking-wider mb-1">Competitor</p>
                  {row.competitor === "included-ineffective" ? (
                    <span className="inline-flex items-center gap-1 text-sm font-body text-muted-foreground">
                      <Check className="h-3.5 w-3.5" /> Ineffective dose
                    </span>
                  ) : (
                    <p className="text-sm font-body text-muted-foreground">{row.competitor}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
