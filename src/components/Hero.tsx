
import { Button } from "./ui/button";
import { PhoneCall, ChevronRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background pt-20">
      <div className="bg-grid absolute inset-0 opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center pt-32 pb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-primary/20 rounded-full text-sm text-primary bg-primary/5">
            <Sparkles className="w-4 h-4" />
            <span>probound.ai</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
            Turn Every Call into
            <br />
            <span className="gradient-text">
              An Opportunity
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10">
            Never miss a call again with our advanced AI Voice Agents that conduct full-length human-like phone calls with perfect recall and infinite memory.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="gradient-bg px-8 py-6 text-white hover:opacity-90" asChild>
              <a href="tel:14153198525" className="flex items-center gap-2">
                <PhoneCall className="w-5 h-5" />
                Speak with Kelly
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="px-8 py-6 border-primary/20 hover:bg-primary/5" asChild>
              <a href="https://cal.com/kemiprobound/ai" className="flex items-center gap-2">
                Schedule Demo
                <ChevronRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border/40 pt-8 w-full max-w-4xl">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">100%</div>
              <div className="text-sm text-foreground/70">Call Answer Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-foreground/70">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">95%</div>
              <div className="text-sm text-foreground/70">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">61%</div>
              <div className="text-sm text-foreground/70">Cost Reduction</div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary/10 rounded-xl p-8 border border-border/40 hover:card-glow transition-all">
              <div className="text-5xl font-bold gradient-text mb-4">01</div>
              <h3 className="text-2xl font-semibold mb-4">Hire</h3>
              <p className="text-foreground/70">
                Choose the AI Agent you want to hire.
              </p>
            </div>

            <div className="bg-secondary/10 rounded-xl p-8 border border-border/40 hover:card-glow transition-all">
              <div className="text-5xl font-bold gradient-text mb-4">02</div>
              <h3 className="text-2xl font-semibold mb-4">Customize</h3>
              <p className="text-foreground/70">
                Configure the agent with your business information to represent you.
              </p>
            </div>

            <div className="bg-secondary/10 rounded-xl p-8 border border-border/40 hover:card-glow transition-all">
              <div className="text-5xl font-bold gradient-text mb-4">03</div>
              <h3 className="text-2xl font-semibold mb-4">Deploy</h3>
              <p className="text-foreground/70">
                Easily launch your agents to start make or take phone calls.
              </p>
            </div>

            <div className="bg-secondary/10 rounded-xl p-8 border border-border/40 hover:card-glow transition-all">
              <div className="text-5xl font-bold gradient-text mb-4">04</div>
              <h3 className="text-2xl font-semibold mb-4">Monitor</h3>
              <p className="text-foreground/70">
                Track calls, conversion rates, and more through our analytics dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
    </div>
  );
};
