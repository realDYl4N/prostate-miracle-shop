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

const ProstateMiraclePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
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
