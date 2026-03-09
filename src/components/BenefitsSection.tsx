

export const BenefitsSection = () =>
<section id="benefits" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
          You've Probably Tried Everything. Here's Why Nothing Worked.
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto items-center">
        {/* Text */}
        <div className="lg:w-3/5 space-y-5">
          <p className="text-muted-foreground font-body text-base leading-relaxed">
            If you've been buying saw palmetto, pygeum, lycopene, or pumpkin seed oil from the supplement aisle, you're not alone. Millions of men take these every year. The problem? They contain almost no beta-sitosterol, the one ingredient that actually matters for prostate health.
          </p>
          <p className="text-muted-foreground font-body text-base leading-relaxed">
            Here's the math most brands don't want you to see: you would need to take roughly <span className="text-foreground font-semibold">2,000 to 3,000 capsules</span> of saw palmetto powder to get the same amount of beta-sitosterol in a single capsule of Prostate Miracle® Advanced Formula. Even the best saw palmetto extracts only deliver a fraction of what clinical research suggests is effective.
          </p>
          <p className="text-primary font-display text-lg font-semibold italic">
            That's not a supplement. That's a rounding error.
          </p>
          <p className="text-muted-foreground font-body text-base leading-relaxed">
            Prostate Miracle® cuts straight to the source: <span className="text-foreground font-semibold">300mg of pure beta-sitosterol per capsule</span>, extracted from non-GMO pine in France, guaranteed 99% pure. No middleman herbs. No fillers pretending to be active ingredients.
          </p>
        </div>
        {/* Image */}
        <div className="lg:w-2/5">
          <img
          src={supplementComparison}
          alt="Comparison: thousands of saw palmetto capsules versus one Prostate Miracle capsule"
          className="rounded-2xl shadow-[var(--shadow-card)] w-full"
          loading="lazy" />
        
        </div>
      </div>
    </div>
  </section>;