import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { DigitalWorkers } from "@/components/DigitalWorkers";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <DigitalWorkers />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;