import productBottle from "@/assets/product-bottle-hero.png";
import { Button } from "@/components/ui/button";
import { Star, ShieldCheck } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Left content */}
          <div className="flex-1 max-w-xl">
            {/* Rating bar */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) =>
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                )}
              </div>
              <span className="text-sm font-semibold text-foreground">Rated 4.8 / 5</span>
              <span className="text-sm text-muted-foreground">Trusted By 50K+ Happy Customers </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-display font-bold leading-[1.1] text-foreground mb-5">
              The <span className="text-primary">#1 Prostate Formula</span> For
              Everyday Comfort & Support
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed mb-8 max-w-md">
              Support prostate health and urinary comfort with a clinically-studied
              blend of natural ingredients, carefully formulated for powerful daily
              support.
            </p>

            {/* CTA */}
            <a href="/prostate-miracle">
              <Button size="lg" className="text-base font-bold px-10 py-6 rounded-lg shadow-[var(--shadow-elevated)]">
                Shop Now
              </Button>
            </a>

            {/* Guarantee line */}
            <div className="flex items-center gap-2 mt-5">
              <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">
                90-Day Satisfaction Guarantee · Simple Daily Routine
              </span>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 flex justify-center">
            <img
              src={productBottle}
              alt="Prostate Miracle supplement bottle"
              className="w-[320px] md:w-[420px] lg:w-[480px] drop-shadow-2xl" />
            
          </div>
        </div>
      </div>
    </section>);

};