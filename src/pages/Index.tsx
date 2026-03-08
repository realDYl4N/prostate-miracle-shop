import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { ProductSection } from "@/components/ProductSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ProductSection />
      <TestimonialsSection />
      <BenefitsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
