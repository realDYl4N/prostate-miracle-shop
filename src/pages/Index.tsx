import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { SocialProofStrip } from "@/components/SocialProofStrip";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { BottomCTA } from "@/components/BottomCTA";
import { FooterSection } from "@/components/FooterSection";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { PageHead } from "@/components/PageHead";
import { useMemo } from "react";
import { organizationSchema, faqSchema } from "@/lib/seo-schemas";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <ScrollFadeIn delay={0.05}>
        <BenefitsSection />
      </ScrollFadeIn>
      <StickyCtaBar />
      <ScrollFadeIn delay={0.05}>
        <SocialProofStrip />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.05}>
        <TestimonialsSection />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <TrustBar />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.05}>
        <FAQSection />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <BottomCTA />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <FooterSection />
      </ScrollFadeIn>
    </div>
  );
};

export default Index;
