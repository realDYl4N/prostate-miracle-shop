import { Button } from "@/components/ui/button";
import { Shield, Truck, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const BottomCTA = () => {
  const navigate = useNavigate();
  return (
  <section className="py-24 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
        Ready to Stop Planning Your Day Around a Bathroom?
      </h2>
      <p className="text-primary-foreground/80 font-body text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
        Join thousands of men who've switched to Prostate Miracle® Advanced Formula — the most concentrated beta-sitosterol formula on the market, backed by a 60-day guarantee and 20+ years of trust.
      </p>
      <Button
        size="lg"
        variant="secondary"
        className="text-lg px-10 py-6 font-display font-semibold shadow-lg hover:scale-105 transition-transform"
        onClick={() => navigate("/prostate-miracle")}
      >
        Try Prostate Miracle® Risk-Free
      </Button>
      <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/70 font-body">
        <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> 60-day money-back guarantee</span>
        <span className="flex items-center gap-1.5"><Truck className="w-4 h-4" /> Free shipping on 3+ bottles</span>
        <span className="flex items-center gap-1.5"><Factory className="w-4 h-4" /> Produced in GMP-certified USA labs</span>
      </div>
    </div>
  </section>
);
