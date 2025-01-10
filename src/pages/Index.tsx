import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { DigitalWorkers } from "@/components/DigitalWorkers";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Partners } from "@/components/Partners";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Partners />
      <DigitalWorkers />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Index;