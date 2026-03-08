import productBottle from "@/assets/product-bottle.png";
import { Button } from "@/components/ui/button";
import { Star, ShieldCheck } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-0 md:pt-20 bg-background min-h-[85vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 items-center">
          {/* Left: Text Content */}
          <div className="order-2 md:order-1 pb-12 md:pb-0">
            {/* Rating Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-0.5 bg-accent/20 px-2 py-1 rounded">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">Rated 4.8 / 5</span>
              <span className="text-sm text-muted-foreground">Trusted By 50K+</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-foreground leading-[1.1] mb-6">
              The <span className="text-primary">#1 Prostate Formula</span>{" "}
              For Everyday Comfort & Support
            </h1>

            <p className="text-base text-muted-foreground mb-8 font-body max-w-lg leading-relaxed">
              Support prostate health and urinary comfort with clinically-inspired,
              naturally-sourced ingredients designed for powerful daily support.
            </p>

            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-body font-semibold px-10 py-6 text-base rounded-md shadow-lg mb-5"
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
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
              <img
                src={productBottle}
                alt="Prostate Miracle supplement"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
