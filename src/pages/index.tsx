
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { DigitalWorkers } from "@/components/DigitalWorkers";
import { Features } from "@/components/Features";
import { Partners } from "@/components/Partners";
import { CTA } from "@/components/CTA";
import Footer from "@/components/Footer";
import { NewsletterPopup } from "@/components/NewsletterPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Partners />
      <DigitalWorkers />
      <Features />
      <CTA />
      <Footer />
      <NewsletterPopup />
    </div>
  );
};

export default Index;
