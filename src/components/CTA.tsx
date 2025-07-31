
import { Button } from "./ui/button";
import { Rocket, ArrowRight, PhoneCall } from "lucide-react";

export const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="bg-grid absolute inset-0 opacity-5"></div>
      <div className="container relative z-10">
        <div className="bg-background rounded-2xl px-8 py-16 md:p-16 relative overflow-hidden border border-border/40">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/20 rounded-full text-sm text-primary bg-primary/5 mb-8">
              <Rocket className="w-4 h-4" />
              <span>Ready to Transform Your Support Operations?</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Join MSPs Already Using ProBound
            </h2>
            <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
              Reduce ticket volumes, improve client satisfaction, and scale your business without expanding your support team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gradient-bg hover:opacity-90 text-lg px-8 py-6" asChild>
                <a href="tel:+14153198525" className="flex items-center gap-2">
                  <PhoneCall className="w-5 h-5" />
                  Speak with Kelly
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="https://cal.com/kemiprobound/ai" className="flex items-center gap-2">
                  Start Free Trial
                </a>
              </Button>
            </div>
          </div>
          
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-1/2 aspect-square bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-1/2 aspect-square bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
