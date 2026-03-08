import productBottle from "@/assets/product-bottle.png";
import { Button } from "@/components/ui/button";
import { Star, ShieldCheck } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 md:pb-0 md:pt-20 bg-background min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="order-2 md:order-1">
            {/* Rating Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">Rated 4.8 / 5</span>
              <span className="text-sm text-muted-foreground">Trusted By 50K+</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.05] mb-6">
              The <span className="text-primary">#1 Prostate Formula</span>{" "}
              For Everyday Comfort & Support
            </h1>

            <p className="text-lg text-muted-foreground mb-8 font-body font-light max-w-lg leading-relaxed">
              Support prostate health and urinary comfort with clinically-inspired,
              naturally-sourced ingredients designed for powerful daily support.
            </p>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold px-10 py-6 text-base rounded-md shadow-lg mb-5"
              onClick={() => document.getElementById("product")?.scrollIntoView({ behavior: "smooth" })}
            >
              Shop Now
            </Button>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span className="font-medium text-foreground">90-Day Satisfaction Guarantee</span>
              <span>·</span>
              <span>Simple Daily Routine</span>
            </div>
          </div>

          {/* Right: Product Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src={productBottle}
                alt="Prostate Miracle supplement"
                className="w-full h-auto rounded-2xl object-cover shadow-[var(--shadow-elevated)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
