
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PhoneCall, Briefcase, Target, Users, TrendingUp } from "lucide-react";
import { NewsletterPopup } from "@/components/NewsletterPopup";
import { CTA } from "@/components/CTA";

const DispatchService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="relative overflow-hidden pt-32 pb-24">
        <div className="bg-grid absolute inset-0 opacity-10"></div>
        <div className="container max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Dispatch
                <span className="gradient-text block">Service</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                Optimize your dispatch operations with AI-powered coordination. Efficiently manage resources and coordinate field teams in real-time.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="gradient-bg hover:opacity-90" asChild>
                  <a href="tel:14153198525" className="flex items-center gap-2">
                    <PhoneCall className="w-5 h-5" />
                    Contact Sales
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="hover:border-primary" asChild>
                  <a href="https://cal.com/kemiprobound/ai" className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Schedule Demo
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/93314768-0dde-4b76-9f23-53e93a49b62c.png"
                  alt="Dispatch Service Professional"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="py-24 relative">
        <div className="container max-w-7xl">
          <h2 className="text-4xl font-bold mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Smart Routing",
                description: "Optimize routes and assignments for maximum efficiency and coverage.",
              },
              {
                icon: Users,
                title: "Team Coordination",
                description: "Seamlessly coordinate field teams with real-time updates and communication.",
              },
              {
                icon: TrendingUp,
                title: "Resource Management",
                description: "Efficiently allocate resources based on demand and availability.",
              },
            ].map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl border border-border/40 hover:border-primary/40 transition-all duration-300">
                <feature.icon className="w-12 h-12 mb-6 text-primary" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTA />
      <Footer />
      <NewsletterPopup />
    </div>
  );
};

export default DispatchService;
