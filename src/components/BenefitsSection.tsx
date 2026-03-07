import { Shield, Leaf, Moon } from "lucide-react";

const benefits = [
  { icon: Shield, title: "Prostate Health", desc: "Supports normal prostate function and urinary flow." },
  { icon: Leaf, title: "Natural Ingredients", desc: "Formulated with clinically-studied botanical extracts." },
  { icon: Moon, title: "Restful Nights", desc: "Helps reduce nighttime bathroom trips for better sleep." },
];

export const BenefitsSection = () => (
  <section id="benefits" className="py-24 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-[0.25em] text-accent font-medium mb-3">Why Choose Us</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold">Real Benefits, Real Results</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
        {benefits.map((b) => (
          <div key={b.title} className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-6">
              <b.icon className="h-7 w-7 text-accent" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">{b.title}</h3>
            <p className="text-primary-foreground/70 font-body font-light">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
