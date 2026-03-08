import { Leaf } from "lucide-react";

const badges = [
  "Gentle on Stomach",
  "Gluten-Free Formula",
  "Non-GMO Ingredients",
  "Vegetable Capsules",
  "Clinically Studied",
  "Made in the USA",
];

export const MarqueeStrip = () => (
  <section className="py-4 overflow-hidden bg-secondary/50">
    <div className="relative flex">
      <div className="flex animate-marquee whitespace-nowrap gap-8">
        {[...badges, ...badges, ...badges].map((badge, i) => (
          <div key={i} className="flex items-center gap-2 px-2">
            <Leaf className="h-4 w-4 text-primary flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">{badge}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
