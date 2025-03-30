
import { Sparkles } from "lucide-react";

export const IntegrationsHero = () => {
  return (
    <div className="relative overflow-hidden bg-background pt-20">
      <div className="bg-grid absolute inset-0 opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center pt-32 pb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-primary/20 rounded-full text-sm text-primary bg-primary/5">
            <Sparkles className="w-4 h-4" />
            <span>Powerful Integrations</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
            Connect with Your
            <br />
            <span className="gradient-text">
              Favorite Tools
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10">
            ProBound seamlessly integrates with the tools you already use, making it easy to incorporate AI Voice Agents into your existing workflow.
          </p>
        </div>
      </div>
      
      <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
    </div>
  );
};
