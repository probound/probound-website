import { Button } from "./ui/button";
import { Rocket, ArrowRight, PhoneCall } from "lucide-react";
export const CTA = () => {
  return <section className="relative py-16 sm:py-24 overflow-hidden bg-background">
      <div className="bg-grid absolute inset-0 opacity-10"></div>
      <div className="container relative z-10 px-4">
        <div className="bg-card/50 backdrop-blur-xl rounded-3xl px-4 sm:px-8 py-12 sm:py-16 md:p-16 relative overflow-hidden border border-primary/20">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 rounded-full text-xs sm:text-sm bg-primary/10 backdrop-blur-sm mb-6 sm:mb-8">
              <Rocket className="w-3 sm:w-4 h-3 sm:h-4 text-primary" />
              <span className="text-primary font-medium">Ready to Transform Your Support Operations?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">Start Using ProBound Today</h2>
            <p className="text-base sm:text-lg text-foreground/60 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Reduce ticket volumes, improve client satisfaction, and scale your business without expanding your support team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button size="lg" className="gradient-bg hover:opacity-90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto font-semibold shadow-lg shadow-primary/25" asChild>
                <a href="tel:+14153198525" className="flex items-center justify-center gap-2">
                  <PhoneCall className="w-4 sm:w-5 h-4 sm:h-5" />
                  Speak with Kelly
                  <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto border-primary/30 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 font-semibold" asChild>
                <a href="https://app.probound.ai/auth/sign-up" className="flex items-center justify-center gap-2">
                  Start for free
                </a>
              </Button>
            </div>
          </div>
          
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-1/2 aspect-square bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-1/2 aspect-square bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>;
};