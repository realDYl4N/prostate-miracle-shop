import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const GuaranteeCTA = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Real Prostate Relief<br />Or Pay Nothing!
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
          Try Prostate Miracle® completely risk-free. If you're not satisfied with your results, 
          simply contact us within 90 days for a full refund. No stress. No complicated process. 
          Your wellness is our commitment.
        </p>
        <Button
          size="lg"
          asChild
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-lg font-bold"
        >
          <a href="#product">Claim Your Bottle Now</a>
        </Button>
      </div>
    </section>
  );
};
