import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container relative z-10">
        <div className="bg-primary-600 rounded-3xl px-8 py-16 md:p-16 relative overflow-hidden">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary-400/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-primary-50 mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Transform Your Business Today</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Ready to Experience the Future of Work?
            </h2>
            <p className="text-lg text-primary-100 mb-10 max-w-2xl mx-auto">
              Leverage our AI digital workers to streamline operations and boost growth today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-primary-50 text-lg px-8" asChild>
                <a href="mailto:founders@probound.ai">Schedule Demo</a>
              </Button>
            </div>
          </div>
          
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-1/2 aspect-square bg-primary-500/30 rounded-full blur-3xl" />
            <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-1/2 aspect-square bg-primary-500/30 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};