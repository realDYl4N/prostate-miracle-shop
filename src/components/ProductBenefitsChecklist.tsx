import { Check } from "lucide-react";

const benefits = [
  "Reduces nighttime bathroom trips in as little as 2 weeks",
  "Supports healthy urinary flow and comfort",
  "Promotes normal prostate size and function",
  "Enhances bladder emptying for lasting relief",
  "Protects prostate cells from oxidative stress",
  "Supports hormonal balance naturally",
  "Relieves urgency and frequency discomfort",
  "Gentle vegetable capsules with no harsh additives",
];

export const ProductBenefitsChecklist = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
          Benefits
        </h2>
        <div className="space-y-4">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <p className="text-foreground font-body text-base leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
