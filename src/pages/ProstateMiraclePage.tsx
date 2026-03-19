import { Navbar } from "@/components/Navbar";
import { ProductSection } from "@/components/ProductSection";
import { HowToUseSection } from "@/components/HowToUseSection";
import { WhyYouNeedSection } from "@/components/WhyYouNeedSection";
import { ProductBenefitsChecklist } from "@/components/ProductBenefitsChecklist";
import { IngredientsSection } from "@/components/IngredientsSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GuaranteeCTA } from "@/components/GuaranteeCTA";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ProductPageFAQ } from "@/components/ProductPageFAQ";
import { FooterSection } from "@/components/FooterSection";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { PageHead } from "@/components/PageHead";
import { useMemo } from "react";
import { faqSchema, productSchema } from "@/lib/seo-schemas";

const ProstateMiraclePage = () => {
  const jsonLd = useMemo(() => [faqSchema, productSchema], []);
  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Buy Prostate Miracle® Advanced Formula | Beta-Sitosterol Prostate Supplement"
        description="Order Prostate Miracle® Advanced Formula — 300mg pure beta-sitosterol per capsule, sourced from non-GMO European pine. 60-day guarantee. Free shipping on 3+ bottles."
        canonicalPath="/prostate-miracle"
        jsonLd={jsonLd}
      />
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Prostate Miracle® Advanced Formula — Order Today</h1>
        <ProductSection />
      </div>
      <ScrollFadeIn>
        <ProductBenefitsChecklist />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.05}>
        <WhyYouNeedSection />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.05}>
        <HowToUseSection />
      </ScrollFadeIn>
      <StickyCtaBar />
      <ScrollFadeIn>
        <IngredientsSection />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <StatsSection />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.05}>
        <TestimonialsSection />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.05}>
        <GuaranteeCTA />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.05}>
        <ComparisonTable />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.05}>
        <ProductPageFAQ />
      </ScrollFadeIn>
      <FooterSection />
    </div>
  );
};

export default ProstateMiraclePage;
