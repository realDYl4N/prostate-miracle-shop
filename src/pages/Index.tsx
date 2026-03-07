import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductSection } from "@/components/ProductSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <BenefitsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
