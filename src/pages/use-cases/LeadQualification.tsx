
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PhoneCall, Briefcase, Target, Users, TrendingUp } from "lucide-react";
import { NewsletterPopup } from "@/components/NewsletterPopup";
import { CTA } from "@/components/CTA";

const LeadQualification = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="relative overflow-hidden pt-32 pb-24">
        <div className="bg-grid absolute inset-0 opacity-10"></div>
        <div className="container max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Lead
                <span className="gradient-text block">Qualification</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                Streamline your sales process with AI-powered lead qualification. Identify and prioritize high-value prospects while saving time and resources.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="gradient-bg hover:opacity-90" asChild>
                  <a href="tel:14153198525" className="flex items-center gap-2">
                    <PhoneCall className="w-5 h-5" />
                    Contact Sales
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="hover:border-primary" asChild>
                  <a href="tel:+14153198525" className="flex items-center gap-2">
                    <PhoneCall className="w-5 h-5" />
                    Speak with Kelly
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/287bb625-a46e-4145-97f6-a0ddb844ebd4.png"
                  alt="Lead Qualification Professional"
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
                title: "Smart Scoring",
                description: "Automatically score and rank leads based on behavior, engagement, and demographic data.",
              },
              {
                icon: Users,
                title: "Prospect Analysis",
                description: "Analyze prospect interactions and identify those most likely to convert.",
              },
              {
                icon: TrendingUp,
                title: "Pipeline Optimization",
                description: "Streamline your sales pipeline by focusing on the most promising opportunities.",
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

export default LeadQualification;
