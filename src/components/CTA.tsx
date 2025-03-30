
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#020617]">
      <div className="container relative z-10">
        <div className="rounded-3xl px-8 py-16 md:p-16 relative overflow-hidden border border-gray-700 bg-gradient-to-br from-indigo-900/30 to-transparent backdrop-blur-sm">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-indigo-200 mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Transform Your Business Today</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Ready to Experience the Future of Work?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Leverage our AI digital workers to streamline operations and boost growth today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium px-8 py-6 text-base" asChild>
                <a href="https://cal.com/kemiprobound/ai">Schedule Demo</a>
              </Button>
            </div>
          </div>
          
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-1/2 aspect-square bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-1/2 aspect-square bg-teal-500/10 rounded-full blur-3xl" />
          </div>
          
          {/* Dot pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxLjUiIGN5PSIxLjUiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        </div>
      </div>
    </section>
  );
};
