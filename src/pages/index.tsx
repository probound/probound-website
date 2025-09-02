
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MSPBenefits } from "@/components/MSPBenefits";
import { MSPUseCases } from "@/components/MSPUseCases";
import { Partners } from "@/components/Partners";
import { TrustSection } from "@/components/TrustSection";
import { MSPFAQ } from "@/components/MSPFAQ";
import { CTA } from "@/components/CTA";
import Footer from "@/components/Footer";
import { NewsletterPopup } from "@/components/NewsletterPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <MSPBenefits />
      <MSPUseCases />
      <Partners />
      
      <MSPFAQ />
      <CTA />
      <Footer />
      <NewsletterPopup />
    </div>
  );
};

export default Index;
