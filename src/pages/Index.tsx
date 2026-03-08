import { Navbar } from "@/components/Navbar";
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
      <div className="pt-16">
        <ProductSection />
        <TestimonialsSection />
        <MarqueeStrip />
        <BenefitsSection />
        <FAQSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
