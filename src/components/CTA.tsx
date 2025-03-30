
import { Button } from "./ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="bg-grid absolute inset-0 opacity-5"></div>
      <div className="container relative z-10">
        <div className="bg-background rounded-2xl px-8 py-16 md:p-16 relative overflow-hidden border border-border/40">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/20 rounded-full text-sm text-primary bg-primary/5 mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Transform Your Business Today</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Experience the Future of Work?
            </h2>
            <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
              Leverage our AI digital workers to streamline operations and boost growth today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gradient-bg hover:opacity-90 text-lg px-8 py-6" asChild>
                <a href="https://cal.com/kemiprobound/ai" className="flex items-center gap-2">
                  Schedule Demo
                  <ArrowRight className="w-4 h-4" />
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
