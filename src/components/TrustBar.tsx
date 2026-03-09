import { Microscope, ShieldCheck, Leaf } from "lucide-react";

const trustItems = [
  { icon: Microscope, label: "GMP Certified Labs (USA)" },
  { icon: ShieldCheck, label: "60-Day Money-Back Guarantee" },
  { icon: Leaf, label: "Beta-Sitosterol from France" },
];

export const TrustBar = () => (
  <section className="py-4">
    <div className="container mx-auto px-4">
      <div className="bg-primary rounded-2xl py-8 px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
          {trustItems.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full border-2 border-primary-foreground/20 flex items-center justify-center">
                <item.icon className="h-6 w-6 text-primary-foreground/80" />
              </div>
              <span className="text-sm font-semibold text-primary-foreground tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
