import { Leaf, Sun, Shield, Beaker } from "lucide-react";

const ingredients = [
{
  icon: Leaf,
  name: "Beta-Sitosterol Complex",
  description:
  "The star of the formula. Beta-sitosterol is a plant sterol found in trace amounts in saw palmetto, stinging nettles, and pumpkin seeds, but the concentration in those herbs is tiny. Prostate Miracle® uses a highly concentrated phytosterol complex extracted from non-GMO European pine, imported from France, guaranteed 99% pure with not less than 70% beta-sitosterol."
},
{
  icon: Sun,
  name: "Vitamin D3",
  description:
  "Research published in Clinical Cancer Research suggests that vitamin D levels may play a role in prostate health. Vitamin D3 supports normal cell growth and differentiation. Deficiency is increasingly common, especially in older men, men with darker skin, and those in northern climates. Each daily dose delivers 2,000 IU of cholecalciferol, the body's preferred form of vitamin D."
},
{
  icon: Shield,
  name: "Selenium",
  description:
  "Selenium is a trace mineral with unique biochemical properties that researchers have been investigating for its potential role in prostate health. Prostate Miracle® uses Albion® Selenium Glycinate Complex, a patented, bioavailable form that's far superior to the generic \"selenium amino acid chelates\" most brands use. Soil depletion means many men aren't getting enough selenium from food alone."
},
{
  icon: Beaker,
  name: "Zinc",
  description:
  "The prostate contains a higher concentration of zinc than any other soft tissue in the body, which tells you it's not there by accident. Research shows that men with prostate issues typically have significantly lower zinc levels than men without them. Prostate Miracle® delivers 15mg daily as zinc citrate for optimal absorption, providing 100% of your daily value."
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