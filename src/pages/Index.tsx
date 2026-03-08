import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { SocialProofStrip } from "@/components/SocialProofStrip";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { FooterSection } from "@/components/FooterSection";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ScrollFadeIn>
        <TrustBar />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.05}>
        <SocialProofStrip />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.05}>
        <TestimonialsSection />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <MarqueeStrip />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.05}>
        <BenefitsSection />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.05}>
        <FAQSection />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <FooterSection />
      </ScrollFadeIn>
    </div>
  );
};

export default Index;
