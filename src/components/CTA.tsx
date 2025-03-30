
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container relative z-10">
        <div className="bg-gray-50 rounded-3xl px-8 py-16 md:px-16 relative overflow-hidden border border-gray-100">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Ready to Experience the Future of Work?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Leverage our AI digital workers to streamline operations and boost growth today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full text-lg px-8 py-6 w-full sm:w-auto group" asChild>
                <a href="https://cal.com/kemiprobound/ai" className="flex items-center gap-2">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary-50/50 rounded-full blur-3xl" />
            <div className="absolute left-0 top-0 w-64 h-64 bg-primary-50/50 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
