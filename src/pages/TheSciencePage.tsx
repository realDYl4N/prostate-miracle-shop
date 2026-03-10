import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";

const TheSciencePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
              The Science
            </h1>
            <p className="text-lg text-secondary-foreground/70 font-body max-w-2xl mx-auto">
              Peer-reviewed research and clinical studies behind Prostate Miracle's key ingredient: beta-sitosterol.
            </p>
          </div>
        </section>

        {/* Studies */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl space-y-12">
            <div className="space-y-6">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Beta-Sitosterol: Clinically Proven
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed">
                Beta-sitosterol is a plant sterol found in fruits, vegetables, nuts, and seeds. It has been extensively studied for its role in supporting prostate health. Multiple randomized, double-blind, placebo-controlled trials have demonstrated its efficacy.
              </p>
            </div>

            {[
              {
                title: "Lancet Study (1995)",
                description:
                  "A landmark randomized, double-blind, placebo-controlled study published in The Lancet showed that beta-sitosterol significantly improved urinary flow rates and reduced residual urinary volume in men with benign prostatic hyperplasia (BPH).",
                source: "Berges RR, et al. Lancet. 1995;345(8964):1529-32.",
              },
              {
                title: "British Journal of Urology (1997)",
                description:
                  "A follow-up study confirmed the long-term efficacy and safety of beta-sitosterol, showing sustained improvements in urinary symptoms over an 18-month period with no significant side effects.",
                source: "Berges RR, et al. BJU Int. 1997;80(3):427-32.",
              },
              {
                title: "Cochrane Systematic Review (2000)",
                description:
                  "A comprehensive Cochrane review analyzed four randomized trials involving 519 men and concluded that beta-sitosterol improves urological symptoms and flow measures. The evidence supports its use for symptomatic BPH.",
                source: "Wilt T, et al. Cochrane Database Syst Rev. 2000;(2):CD001043.",
              },
              {
                title: "Non-GMO European Pine Source",
                description:
                  "Prostate Miracle uses beta-sitosterol derived from non-GMO European pine trees — a premium, sustainable source that ensures high purity and consistent potency in every capsule.",
                source: "Prostate Miracle formulation standard since 2003.",
              },
            ].map((study, i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-6 md:p-8 space-y-3 bg-card"
              >
                <h3 className="font-display text-xl font-semibold text-card-foreground">
                  {study.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {study.description}
                </p>
                <p className="text-xs text-muted-foreground/60 font-body italic">
                  {study.source}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default TheSciencePage;
