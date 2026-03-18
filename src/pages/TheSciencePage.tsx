import prostateDiagram from "@/assets/prostate-diagram.png";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";
import {
  ArrowRight,
  ShieldCheck,
  Leaf,
  Beaker,
  Sun,
  Flag,
  Award,
  CheckCircle,
  XCircle,
  FlaskConical } from
"lucide-react";
import { useEffect, useRef, useState } from "react";

/* ───── Animated counter hook ───── */
function useCountUp(target: number, isVisible: boolean, duration = 1400) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = target / (duration / 16);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [isVisible, target, duration]);
  return count;
}

/* ───── Stat bar item ───── */
function StatItem({
  value,
  suffix,
  label,
  isVisible





}: {value: number;suffix: string;label: string;isVisible: boolean;}) {
  const count = useCountUp(value, isVisible);
  return (
    <div className="text-center px-4 py-3">
      <p className="text-3xl md:text-4xl font-display font-bold text-primary">
        {count}
        {suffix}
      </p>
      <p className="text-xs md:text-sm font-body text-muted-foreground mt-1 leading-tight">
        {label}
      </p>
    </div>);

}

/* ───── Data ───── */
const stats = [
{ value: 3000, suffix: "×", label: "More Beta-Sitosterol than saw palmetto" },
{ value: 99, suffix: "%", label: "Pure phytosterol complex" },
{ value: 70, suffix: "%+", label: "Beta-Sitosterol guaranteed" },
{ value: 4, suffix: "", label: "Active ingredients" }];


const ingredients = [
{
  id: "beta-sitosterol",
  icon: Leaf,
  tab: "Beta-Sitosterol",
  heading: "The #1 Most Studied Prostate Health Nutrient",
  body: "Beta-sitosterol is the miraculous common denominator found in saw palmetto, pygeum africanum, pumpkinseed oil and stinging nettles. However, the concentration of beta sitosterol in these herbs is very small at best. A mere 3,000th of the amount found in Prostate Miracle®. ",
  points: [
  "Most extensively studied prostate health supplement",
  "3,000× more beta-sitosterol than saw palmetto",
  "Sourced from non-GMO European pine (not Chinese or US soy)",
  "Guaranteed 99% pure and ≥70% beta-sitosterol per serving",
  "Manufactured in GMP Certified, FDA licensed & inspected US facilities"]

},
{
  id: "zinc",
  icon: FlaskConical,
  tab: "Zinc",
  heading: "The Prostate's Most Critical Mineral",
  body: "The concentration of zinc in the prostate is higher than in any other soft tissue in the human body — a fact that makes its role in prostate health undeniable. Research shows that prostate conditions consistently correlate with dramatically reduced zinc levels.",
  points: [
  "Men with prostatitis: 90% lower zinc in the prostate vs. healthy men",
  "Men with prostate cancer: 83% lower zinc vs. healthy men",
  "Men with BPH: 61% lower zinc vs. healthy men",
  "15 mg Zinc Citrate per serving — 100% Daily Value"]

},
{
  id: "selenium",
  icon: Beaker,
  tab: "Selenium",
  heading: "The Trace Mineral That Most Doctors Overlook",
  body: "Most doctors assume we get enough selenium through diet. But in many parts of the U.S., China, and Russia, acid rain has depleted selenium from the soil, reducing the amount available for absorption into the plants we eat.\n\nResearchers have been actively investigating selenium's health-supporting potential, including its possible role in conditions involving oxidative stress and inflammation.",
  points: [
  "Uses Albion® Selenium Glycinate Complex — the gold standard",
  "70 mcg per serving — 100% Daily Value",
  "Superior to generic 'selenium amino acid chelate'",
  "Supports the body's defenses against oxidative stress"]

},
{
  id: "vitamin-d3",
  icon: Sun,
  tab: "Vitamin D3",
  heading: "Low D Levels Linked to More Aggressive Prostate Cancer",
  body: "Research published in Clinical Cancer Research (2014) suggests vitamin D may play a role in normal prostate cell differentiation and healthy cell growth rates. Deficiency risk increases with age, low sun exposure, and darker skin tones.",
  points: [
  "2,000 IU cholecalciferol per serving — 500% Daily Value",
  "Regulates normal differentiation of cells",
  "Regulates growth rate of both normal and cancer cells",
  "Deficiency more common in older men & low-sunlight regions"]

}];


const sourceRows = [
{
  source: "Chinese Soy Extract",
  quality: "Low purity, low potency",
  gmo: false,
  highlight: false
},
{
  source: "US Soy Extract",
  quality: "Moderate purity",
  gmo: false,
  highlight: false
},
{
  source: "European Pine (France)",
  quality: "99% pure, ≥70% beta-sitosterol",
  gmo: true,
  highlight: true
}];


const badges = [
{ icon: Flag, label: "Made in USA" },
{ icon: Award, label: "GMP Certified" },
{ icon: ShieldCheck, label: "FDA Licensed Facility" },
{ icon: Leaf, label: "GMO-Free" },

{ icon: CheckCircle, label: "Trusted Since 2001" }];


/* ───── Component ───── */
const TheSciencePage = () => {
  const statRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStatsVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* ── 1. HERO ── */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-3 leading-tight">
              The Science Behind Prostate Miracle<sup>®</sup>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/70 font-body max-w-2xl mx-auto">
              Four clinically studied nutrients. One advanced formula.
            </p>
          </div>
        </section>

        {/* ── Stat Bar ── */}
        <div
          ref={statRef}
          className="bg-card border-y border-border">
          
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x divide-border max-w-4xl mx-auto">
              {stats.map((s, i) =>
              <StatItem key={i} {...s} isVisible={statsVisible} />
              )}
            </div>
          </div>
        </div>

        {/* ── 2. INGREDIENT TABS / ACCORDION ── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              4 Ingredients. Zero Filler. Every One Earns Its Spot.
            </h2>

            {/* Desktop: Tabs */}
            <div className="hidden md:block">
              <Tabs defaultValue="beta-sitosterol">
                <TabsList className="w-full grid grid-cols-4 mb-8 h-auto">
                  {ingredients.map((ing) => {
                    const Icon = ing.icon;
                    return (
                      <TabsTrigger
                        key={ing.id}
                        value={ing.id}
                        className="flex items-center gap-2 py-3 text-sm font-body font-semibold data-[state=active]:text-primary">
                        
                        <Icon className="h-4 w-4" />
                        {ing.tab}
                      </TabsTrigger>);

                  })}
                </TabsList>
                {ingredients.map((ing) =>
                <TabsContent key={ing.id} value={ing.id}>
                    <IngredientPanel ing={ing} />
                  </TabsContent>
                )}
              </Tabs>
            </div>

            {/* Mobile: Accordion */}
            <div className="md:hidden">
              <Accordion type="single" collapsible defaultValue="beta-sitosterol">
                {ingredients.map((ing) => {
                  const Icon = ing.icon;
                  return (
                    <AccordionItem key={ing.id} value={ing.id}>
                      <AccordionTrigger className="font-display text-lg font-semibold">
                        <span className="flex items-center gap-2">
                          <Icon className="h-5 w-5 text-primary" />
                          {ing.tab}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <IngredientPanel ing={ing} />
                      </AccordionContent>
                    </AccordionItem>);

                })}
              </Accordion>
            </div>
          </div>
        </section>

        {/* ── 3. SAW PALMETTO VS BETA-SITOSTEROL ── */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground text-center mb-12">
              Saw Palmetto Doesn't Support Prostate Health. Here's Why.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-border/30 bg-secondary-foreground/5 p-6 space-y-3">
                <h3 className="font-display text-lg font-bold text-secondary-foreground">
                  The Beta-Sitosterol Problem
                </h3>
                <p className="text-secondary-foreground/80 font-body text-sm leading-relaxed">
                  Saw palmetto has a long history of traditional use, but the beta-sitosterol content in saw palmetto is just 1/3,000 of what's in a single caplet of Prostate Miracle®. You'd need to consume over a pound of saw palmetto berries, to match one serving.
                </p>
              </div>
              <div className="rounded-xl border border-border/30 bg-secondary-foreground/5 p-6 space-y-3">
                <h3 className="font-display text-lg font-bold text-secondary-foreground">
                  May Harm Prostate Cells
                </h3>
                <p className="text-secondary-foreground/80 font-body text-sm leading-relaxed">
                  Three peer-reviewed studies suggest saw palmetto may have unintended effects on prostate tissue.
                </p>
                <div className="space-y-1">
                  <a href="https://pubmed.ncbi.nlm.nih.gov/10420151/" target="_blank" rel="noopener noreferrer" className="block font-body text-sm text-primary hover:text-primary/80 underline">
                    Prostate 1999
                  </a>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/11074529/" target="_blank" rel="noopener noreferrer" className="block font-body text-sm text-primary hover:text-primary/80 underline">
                    Prostate 2000
                  </a>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/10953171/" target="_blank" rel="noopener noreferrer" className="block font-body text-sm text-primary hover:text-primary/80 underline">
                    Journal of Urology 2000
                  </a>
                </div>
              </div>
              <div className="rounded-xl border border-border/30 bg-secondary-foreground/5 p-6 space-y-3">
                <h3 className="font-display text-lg font-bold text-secondary-foreground">
                  Expert Opinion
                </h3>
                <blockquote className="border-l-4 border-primary pl-4 italic text-secondary-foreground/80 font-body text-sm leading-relaxed">
                  "Saw palmetto, pygeum africanum, stinging nettles, and pumpkin
                  seeds have no therapeutic effect and do not support prostate
                  health."
                </blockquote>
                <p className="text-secondary-foreground/50 font-body text-xs">
                  — Roger Mason, natural health researcher
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. SOURCE QUALITY TABLE ── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Not All Beta-Sitosterol Is Equal
            </h2>
            <p className="text-muted-foreground font-body text-center max-w-2xl mx-auto mb-10">
              Source and purity change everything.
            </p>

            {/* Desktop table */}
            <div className="hidden md:block overflow-hidden rounded-xl border border-border">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="px-6 py-4 font-display font-semibold text-foreground">Source</th>
                    <th className="px-6 py-4 font-display font-semibold text-foreground">Quality</th>
                    <th className="px-6 py-4 font-display font-semibold text-foreground">GMO-Free?</th>
                  </tr>
                </thead>
                <tbody>
                  {sourceRows.map((row, i) => <tr key={i} className={row.highlight ? "bg-primary/5 border-l-4 border-l-primary" : "border-t border-border"}>
                    
                      <td className="px-6 py-4 font-body text-sm text-foreground font-medium">
                        {row.source}
                        {row.highlight && <span className="ml-2 inline-block text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                            Prostate Miracle® Source
                          </span>}
                      </td>
                      <td className="px-6 py-4 font-body text-sm text-muted-foreground">
                        {row.quality}
                      </td>
                      <td className="px-6 py-4">
                        {row.gmo ? <span className="flex items-center gap-1 text-primary font-body text-sm font-semibold">
                            <CheckCircle className="h-4 w-4" /> GMO-Free
                          </span> : <span className="flex items-center gap-1 text-destructive font-body text-sm">
                            <XCircle className="h-4 w-4" /> Often GMO
                          </span>}
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {sourceRows.map((row, i) => <div key={i} className={`rounded-xl border p-5 space-y-2 ${row.highlight ? "border-primary bg-primary/5" : "border-border bg-card"}`}>
                
                  <p className="font-display font-bold text-foreground">
                    {row.source}
                    {row.highlight && <span className="ml-2 inline-block text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        Our Source
                      </span>}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">{row.quality}</p>
                  {row.gmo ? <span className="flex items-center gap-1 text-primary font-body text-sm font-semibold">
                      <CheckCircle className="h-4 w-4" /> GMO-Free ✅
                    </span> : <span className="flex items-center gap-1 text-destructive font-body text-sm">
                      <XCircle className="h-4 w-4" /> Often GMO
                    </span>}
                </div>)}
            </div>
          </div>
        </section>

        {/* ── 4b. THE PROSTATE ── */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground text-center mb-4">
              The Prostate: Function &amp; Common Concerns
            </h2>
            <p className="text-muted-foreground font-body text-center max-w-2xl mx-auto mb-10 leading-relaxed">
              The prostate is a walnut-sized gland that wraps around the urethra and produces fluid for semen. As men age, prostate health becomes an increasingly important concern.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Symptoms */}
              <div className="rounded-xl border border-border/30 bg-secondary-foreground/5 p-6 space-y-4">
                <h3 className="font-display text-lg font-bold text-secondary-foreground">
                  Common Symptoms Men Report
                </h3>
                <ul className="space-y-3">
                  {[
                    "Difficulty initiating urination",
                    "Weak urinary stream",
                    "Frequent urination, sometimes with urgency",
                    "Waking at night to urinate",
                    "Changes in sexual function",
                  ].map((symptom, i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-sm text-secondary-foreground/80">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {symptom}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Facts */}
              <div className="rounded-xl border border-border/30 bg-secondary-foreground/5 p-6 space-y-4">
                <h3 className="font-display text-lg font-bold text-secondary-foreground">
                  Prostate Facts
                </h3>
                <ul className="space-y-3">
                  {[
                    "Nearly 30 million American men experience prostate-related concerns",
                    "Over 400,000 men in the U.S. undergo prostate procedures each year",
                    "Two key screenings used by physicians are the digital rectal exam (DRE) and the PSA test",
                  ].map((fact, i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-sm text-secondary-foreground/80">
                      <ShieldCheck className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. SUPPLEMENT FACTS CARD ── */}
        <section className="py-16 md:py-24 bg-muted/10">
          <div className="container mx-auto px-4 max-w-lg">
            <div className="rounded-xl border-2 border-foreground bg-card overflow-hidden">
              <div className="bg-foreground text-card px-6 py-3">
                <h2 className="font-display text-xl font-bold tracking-wide">
                  Supplement Facts
                </h2>
              </div>
              <div className="px-6 py-4 space-y-1 border-b-2 border-foreground">
                <p className="font-body text-sm text-foreground">
                  <span className="font-semibold">Serving Size:</span> 1 Capsule
                </p>
                <p className="font-body text-sm text-foreground">
                  <span className="font-semibold">Servings Per Container:</span> 60 (30-day supply)
                </p>
                <p className="font-body text-sm text-foreground">
                  <span className="font-semibold">Suggested Use:</span> 1 capsule AM + 1 PM
                </p>
              </div>
              <div className="border-b-8 border-foreground" />
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-foreground">
                    <th className="px-6 py-2 font-body text-xs font-semibold text-foreground">
                      Amount Per 2 Servings
                    </th>
                    <th className="px-6 py-2 font-body text-xs font-semibold text-foreground text-right">
                      % DV
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  {[{ name: "Phytosterol Complex (non-GMO Pine, ≥99% phytosterols, ≥70% Beta-Sitosterol)", amount: "600 mg", dv: "*" }, { name: "Vitamin D3 (as cholecalciferol)", amount: "2,000 IU", dv: "500%" },
                  { name: "Zinc (as Zinc Citrate)", amount: "15 mg", dv: "100%" },
                  {
                    name: "Selenium (as Albion® Selenium Glycinate Complex)",
                    amount: "70 mcg",
                    dv: "100%"
                  }].
                  map((row, i) =>
                  <tr key={i} className="border-b border-border">
                      <td className="px-6 py-2 text-foreground">
                        {row.name}
                        <span className="ml-2 text-muted-foreground">{row.amount}</span>
                      </td>
                      <td className="px-6 py-2 text-right text-foreground font-semibold">
                        {row.dv}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div className="px-6 py-3 space-y-1">
                <p className="font-body text-xs text-muted-foreground">*Daily Value not established</p>
                <p className="font-body text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Other Ingredients:</span> 100%
                  Vegetable Capsule, L-Leucine
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. QUALITY BADGES ── */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-4xl mx-auto">
              {badges.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="flex items-center gap-2 text-foreground">
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="font-body text-sm font-semibold">{b.label}</span>
                  </div>);

              })}
            </div>
          </div>
        </section>

        {/* ── 7. CTA BLOCK ── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
            <blockquote className="border-l-4 border-primary pl-6 text-left">
              <p className="font-display text-2xl md:text-3xl font-bold text-foreground italic leading-snug">
                "No other formula comes close in quality, purity, or value."
              </p>
            </blockquote>
            <div className="flex items-center justify-center gap-2 text-muted-foreground font-body">
              <ShieldCheck className="h-5 w-5 text-primary" />
              60-day money-back guarantee
            </div>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold uppercase tracking-wider text-base px-10 py-6">
              
              <a href="/prostate-miracle">
                Try Prostate Miracle® Risk-Free <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="container mx-auto px-4 pb-8">
          <p className="text-xs text-muted-foreground/60 font-body text-center max-w-3xl mx-auto leading-relaxed">
            These statements have not been evaluated by the Food and Drug Administration.
            This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </main>
      <FooterSection />
    </div>);

};

/* ───── Ingredient Panel (shared by tabs & accordion) ───── */
function IngredientPanel({ ing }: {ing: (typeof ingredients)[number];}) {
  const Icon = ing.icon;
  return (
    <div className="rounded-xl border border-border bg-card p-6 md:p-8 space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="font-display text-xl font-bold text-foreground">{ing.heading}</h3>
      </div>
      <p className="font-body text-muted-foreground leading-relaxed">{ing.body}</p>
      <ul className="space-y-2">
        {ing.points.map((pt, i) =>
        <li key={i} className="flex items-start gap-2 font-body text-sm text-foreground">
            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            {pt}
          </li>
        )}
      </ul>
    </div>);

}

export default TheSciencePage;