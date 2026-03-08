import { Microscope, ShieldCheck, Leaf } from "lucide-react";

const trustItems = [
  { icon: Microscope, label: "Verified By Testing" },
  { icon: ShieldCheck, label: "Certified Product" },
  { icon: Leaf, label: "Natural Formula" },
];

export const TrustBar = () => (
  <section className="bg-primary py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {trustItems.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center">
              <item.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-sm font-medium text-primary-foreground tracking-wide">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
