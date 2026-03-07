import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Natural supplement capsule" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70 mb-4 animate-fade-in-up font-body font-medium">
          Advanced Prostate Support
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground leading-[0.95] mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Prostate<br />Miracle
        </h1>
        <p className="max-w-lg mx-auto text-lg text-primary-foreground/80 mb-10 animate-fade-in-up font-body font-light" style={{ animationDelay: "0.2s" }}>
          Clinically-inspired, naturally-sourced ingredients designed to support your prostate health and daily comfort.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold px-8 py-6 text-base rounded-full shadow-lg"
            onClick={() => document.getElementById("product")?.scrollIntoView({ behavior: "smooth" })}
          >
            Shop Now <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
