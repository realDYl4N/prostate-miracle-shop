import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { ProductSection } from "@/components/ProductSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ProductSection />
      <TestimonialsSection />
      <MarqueeStrip />
      <BenefitsSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
