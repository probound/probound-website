
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MSPBenefits } from "@/components/MSPBenefits";
import { MSPUseCases } from "@/components/MSPUseCases";
import { Partners } from "@/components/Partners";
import { TrustSection } from "@/components/TrustSection";
import { MSPFAQ } from "@/components/MSPFAQ";
import { CTA } from "@/components/CTA";
import Footer from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <MSPBenefits />
        <MSPUseCases />
        <Partners />
        
        <MSPFAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
