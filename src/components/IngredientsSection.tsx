import { Leaf, Droplets, Shield, Beaker } from "lucide-react";

const ingredients = [
{
  icon: Leaf,
  name: "Saw Palmetto Extract",
  description:
  "The gold standard for prostate support — clinically studied to promote healthy urinary flow and reduce nighttime trips."
},
{
  icon: Droplets,
  name: "Beta-Sitosterol Complex",
  description:
  "A powerful plant sterol that supports normal prostate size and helps maintain comfortable urinary function."
},
{
  icon: Shield,
  name: "Pygeum Africanum Bark",
  description:
  "Traditionally used for centuries to soothe urinary discomfort and support healthy prostate tissue."
},
{
  icon: Beaker,
  name: "Zinc & Selenium Blend",
  description:
  "Essential minerals that protect prostate cells from oxidative stress while supporting hormonal balance."
}];


export const IngredientsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-4">
          4 Ingredients. Zero Filler. Every One Earns Its Spot.
        </h2>
        <p className="text-muted-foreground font-body text-center max-w-2xl mx-auto mb-12">
          Our formula is built using carefully sourced plant-based extracts traditionally studied for their role in prostate health, urinary comfort, and hormonal balance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ingredients.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-6 flex items-start gap-4">
                
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-1">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>);

          })}
        </div>
      </div>
    </section>);

};