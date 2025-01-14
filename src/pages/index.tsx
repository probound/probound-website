import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { DigitalWorkers } from "@/components/DigitalWorkers";
import { Features } from "@/components/Features";
import { Partners } from "@/components/Partners";
import { CTA } from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Partners />
      <DigitalWorkers />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;