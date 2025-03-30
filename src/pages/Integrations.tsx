
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { IntegrationsHero } from "@/components/IntegrationsHero";
import { IntegrationsContent } from "@/components/IntegrationsContent";
import { CTA } from "@/components/CTA";
import { NewsletterPopup } from "@/components/NewsletterPopup";

const Integrations = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <IntegrationsHero />
      <IntegrationsContent />
      <CTA />
      <Footer />
      <NewsletterPopup />
    </div>
  );
};

export default Integrations;
