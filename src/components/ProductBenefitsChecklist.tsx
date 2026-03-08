import { Check } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import productBottle from "@/assets/product-bottle.png";

const benefits = [
  "Reduces nighttime bathroom trips in as little as 2 weeks",
  "Supports healthy urinary flow and comfort",
  "Promotes normal prostate size and function",
  "Enhances bladder emptying for lasting relief",
  "Protects prostate cells from oxidative stress",
  "Supports hormonal balance naturally",
  "Relieves urgency and frequency discomfort",
  
];

export const ProductBenefitsChecklist = () => {
  const { data: products } = useProducts();
  const images = products?.[0]?.node.images.edges || [];
  const secondImage = images[1]?.node.url || productBottle;
  const altText = images[1]?.node.altText || "Prostate Miracle";

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
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
          <div className="flex items-center justify-center">
            <img
              src={secondImage}
              alt={altText}
              className="w-full max-w-md h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
