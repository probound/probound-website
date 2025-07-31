
import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { PhoneCall, ChevronRight, Shield, Calendar, ArrowRight, Headphones } from "lucide-react";

export const Hero = () => {
  const [showVideoDialog, setShowVideoDialog] = useState(false);
  return (
    <div className="relative overflow-hidden bg-background pt-20">
      <div className="bg-grid absolute inset-0 opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center pt-32 pb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-primary/20 rounded-full text-sm text-primary bg-primary/5">
            <Shield className="w-4 h-4" />
            <span>Voice AI for IT Support & MSPs</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
            Meet Your 24/7
            <br />
            <span className="gradient-text">
              Voice AI Agent
            </span>
            <br />
            for IT Support
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mb-10">
            Automate Tier 1 support calls, reduce ticket volumes by 60%, and deliver instant responses to your clients—even after hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="gradient-bg px-8 py-6 text-white hover:opacity-90" asChild>
              <a href="https://cal.com/kemiprobound/ai" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 border-primary/20 hover:bg-primary/5" 
              onClick={() => setShowVideoDialog(true)}
            >
              Watch Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border/40 pt-8 w-full max-w-4xl">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">60%</div>
              <div className="text-sm text-foreground/70">Ticket Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-foreground/70">Client Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">3s</div>
              <div className="text-sm text-foreground/70">Response Time</div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div id="how-it-works" className="py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">From Call to Resolution in Seconds</h2>
          <p className="text-lg text-foreground/70 text-center max-w-2xl mx-auto mb-16">
            Your AI agent handles common IT issues instantly, escalating complex problems with full context
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Step 1 */}
              <div className="text-center relative">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <PhoneCall className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Client Calls</h3>
                <p className="text-foreground/70">AI answers instantly, identifies the issue, and greets by name</p>
                
                {/* Arrow */}
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-primary/30">
                  <ArrowRight className="absolute -top-2 -right-1 w-4 h-4 text-primary/30" />
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="text-center relative">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Handles Request</h3>
                <p className="text-foreground/70">Password resets, basic troubleshooting, ticket creation with PSA integration</p>
                
                {/* Arrow */}
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-primary/30">
                  <ArrowRight className="absolute -top-2 -right-1 w-4 h-4 text-primary/30" />
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Escalation</h3>
                <p className="text-foreground/70">Complex issues escalated to your team with full conversation context</p>
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
