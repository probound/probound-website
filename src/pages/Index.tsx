import { Hero } from "@/components/Hero";
import { DigitalWorkers } from "@/components/DigitalWorkers";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <DigitalWorkers />
      <Features />
      <CTA />
    </div>
  );
};

export default Index;