import productBottle from "@/assets/product-box-bottle-optimized.webp";
import { Button } from "@/components/ui/button";
import { Star, ShieldCheck, Phone } from "lucide-react";

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
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                )}
              </div>
              <span className="text-sm font-semibold text-foreground">Rated 4.8 / 5</span>
              <span className="text-sm text-muted-foreground">Trusted By 100K+ Happy Customers </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-display font-bold leading-[1.1] mb-5 text-muted-foreground">
              The Prostate Formula <span className="text-primary">100,000+</span> Men Won't Stop Reordering
            </h1>

            {/* Description */}
            <p className="text-base text-muted-foreground font-body leading-relaxed mb-8 max-w-md md:text-base">20+ years. One mission.  A prostate supplement that actually works. Prostate Miracle was built for men who've tried the generic stuff off the shelf and felt zero difference. Our formula is designed for urinary comfort, healthy flow, and fewer midnight trips, so you can get back to living on your terms. Trusted by thousands of men since 2003.







            </p>

            {/* CTA */}
            <a href="/prostate-miracle">
              <Button size="lg" className="text-base font-bold px-10 py-6 rounded-lg hover:scale-105 transition-all duration-300">
                Get Prostate Miracle®
              </Button>
            </a>

            {/* Guarantee line */}
            <div className="flex items-center gap-2 mt-5">
              <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">
                60-Day Satisfaction Guarantee 
              </span>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 flex flex-col items-center gap-6">
            <a href="/prostate-miracle">
              <img src={productBottle} alt="Prostate Miracle supplement bottle" width={480} height={480} className="w-[320px] md:w-[420px] lg:w-[480px] drop-shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform" />
            </a>
            <div className="flex gap-4">
              <a href="tel:8779652140">
                <Button variant="outline" size="lg" className="text-base font-bold px-8 py-6 rounded-lg">
                  <Phone className="h-5 w-5 mr-2" />
                  (877)-965-2140
                </Button>
              </a>
            </div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground/70 font-body">Call to order now!</p>
          </div>
        </div>
      </div>
    </section>);
};