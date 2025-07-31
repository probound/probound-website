
import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { PhoneCall, ChevronRight, Shield, Calendar, ArrowRight, Headphones } from "lucide-react";

export const Hero = () => {
  const [showVideoDialog, setShowVideoDialog] = useState(false);
  return (
    <div className="relative overflow-hidden bg-background pt-16 sm:pt-20">
      <div className="bg-grid absolute inset-0 opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center pt-16 md:pt-32 pb-20 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-primary/20 rounded-full text-sm text-primary bg-primary/5">
            <Shield className="w-4 h-4" />
            <span>Voice AI for IT Support & MSPs</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl leading-tight">
            Meet Your 24/7
            <br />
            <span className="gradient-text">
              Voice AI Agent
            </span>
            <br />
            for IT Support
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mb-10 px-4">
            Automate IT support calls, reduce ticket volumes by 60%, and deliver instant responses to your clients even after hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full max-w-md sm:max-w-none">
            <Button size="lg" className="gradient-bg px-6 sm:px-8 py-4 sm:py-6 text-white hover:opacity-90 w-full sm:w-auto" asChild>
              <a href="tel:+14153198525" className="flex items-center justify-center gap-2">
                <PhoneCall className="w-4 sm:w-5 h-4 sm:h-5" />
                Speak with Kelly
                <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-6 sm:px-8 py-4 sm:py-6 border-primary/20 hover:bg-primary/5 w-full sm:w-auto" 
              asChild
            >
              <a href="https://app.probound.ai">Start Free Trial</a>
            </Button>
          </div>
          
          <p className="text-sm text-foreground/60 mb-16">no credit card required</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 border-t border-border/40 pt-8 w-full max-w-4xl">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">60%</div>
              <div className="text-sm text-foreground/70">Ticket Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-foreground/70">Client Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">3s</div>
              <div className="text-sm text-foreground/70">Response Time</div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div id="how-it-works" className="py-16 sm:py-24 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">From Call to Resolution in Seconds</h2>
          <p className="text-base sm:text-lg text-foreground/70 text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            Your AI agent handles common IT issues instantly, escalating complex problems with full context
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative">
              {/* Step 1 */}
              <div className="text-center relative">
                <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-primary flex items-center justify-center">
                  <PhoneCall className="w-6 sm:w-8 h-6 sm:h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Client Calls</h3>
                <p className="text-sm sm:text-base text-foreground/70">AI answers instantly, identifies the issue, and greets by name</p>
                
                {/* Arrow */}
                <div className="hidden md:block absolute top-6 sm:top-8 -right-4 w-8 h-0.5 bg-primary/30">
                  <ArrowRight className="absolute -top-2 -right-1 w-4 h-4 text-primary/30" />
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="text-center relative">
                <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-primary flex items-center justify-center">
                  <Headphones className="w-6 sm:w-8 h-6 sm:h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">AI Handles Request</h3>
                <p className="text-sm sm:text-base text-foreground/70">Password resets, basic troubleshooting, ticket creation with PSA integration</p>
                
                {/* Arrow */}
                <div className="hidden md:block absolute top-6 sm:top-8 -right-4 w-8 h-0.5 bg-primary/30">
                  <ArrowRight className="absolute -top-2 -right-1 w-4 h-4 text-primary/30" />
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="text-center">
                <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-primary flex items-center justify-center">
                  <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Smart Escalation</h3>
                <p className="text-sm sm:text-base text-foreground/70">Complex issues escalated to your team with full conversation context</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>

      {/* Video Dialog */}
      <Dialog open={showVideoDialog} onOpenChange={setShowVideoDialog}>
        <DialogContent className="max-w-4xl p-0">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/4DGJMPnyc2M?autoplay=1"
              title="ProBound Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
