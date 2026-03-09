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
          We’re so confident Prostate Miracle® will make a real difference that we guarantee it: use it for a full 60 days. If you don’t notice significant improvement in your urinary comfort, sleep quality, and daily routine, send the two empty bottles back and we’ll issue a 100% refund. No fine print. No hassle.
We’ve been making this guarantee since 2003. We can afford to because the product works and men keep reordering.


















        
        </p>
        <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-lg font-bold">
          
          <a href="#product">Claim Your Bottle Now</a>
        </Button>
      </div>
    </section>);};