import productBottle from "@/assets/product-box-bottle-optimized.webp";
import { Button } from "@/components/ui/button";
import { Star, ShieldCheck, Phone } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-20 pb-8 md:pt-32 md:pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
          {/* Left content */}
          <div className="flex-1 max-w-xl text-center">
            {/* Rating bar */}
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) =>
                <Star key={i} className="h-3.5 w-3.5 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                )}
              </div>
              <span className="text-xs md:text-sm font-semibold text-foreground">Rated 4.8 / 5</span>
              <span className="text-xs md:text-sm text-muted-foreground hidden sm:inline">Trusted By 100K+ Happy Customers</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-[3.4rem] font-display font-bold leading-[1.1] mb-3 md:mb-5 text-muted-foreground">
              The Prostate Formula <span className="text-primary">100,000+</span> Men Keep Reordering
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed mb-6 md:mb-8 mx-auto max-w-md">
              Prostate Miracle® Advanced Formula is our 2nd generation upgrade to the original Prostate Miracle®. This highly effective, natural, time-tested formula, supports healthy urinary flow and prostate health. Trusted by thousands of men since 2001!
            </p>

            {/* CTA */}
            <a href="/prostate-miracle" className="block">
              <Button size="lg" className="w-full sm:w-auto text-xl md:text-2xl font-extrabold px-12 md:px-20 py-8 md:py-10 rounded-xl hover:scale-105 transition-all duration-300">
                Buy Prostate Miracle®
              </Button>
            </a>

            {/* Guarantee line */}
            <div className="flex items-center justify-center gap-2 mt-4 md:mt-5">
              <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium text-foreground">
                60-Day Satisfaction Guarantee 
              </span>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 flex flex-col items-center gap-4 md:gap-6">
            <a href="/prostate-miracle">
              <img src={productBottle} alt="Prostate Miracle supplement bottle" width={480} height={480} className="w-[240px] md:w-[420px] lg:w-[480px] drop-shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform" />
            </a>
            <div className="hidden md:flex gap-4">
              <a href="tel:8779652140">
                <Button variant="outline" size="lg" className="text-base font-bold px-8 py-6 rounded-lg">
                  <Phone className="h-5 w-5 mr-2" />
                  (877)-965-2140
                </Button>
              </a>
            </div>
            <p className="hidden md:block text-xs uppercase tracking-widest text-muted-foreground/70 font-body">Call to order now!</p>
          </div>
        </div>
      </div>
    </section>
  );
};
