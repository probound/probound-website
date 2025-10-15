import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { PhoneCall, ChevronRight, Shield, Calendar, ArrowRight, Headphones } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";
export const Hero = () => {
  const [showVideoDialog, setShowVideoDialog] = useState(false);
  return <div className="relative overflow-hidden bg-background pt-16 sm:pt-20">
      <AnimatedBackground />
      <div className="bg-grid absolute inset-0 opacity-20"></div>
      <div className="bg-dot-pattern absolute inset-0 opacity-10"></div>
      
      {/* Blue glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 blue-glow opacity-20 blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-20 md:pt-32 pb-20 px-4">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-primary/30 rounded-full text-sm bg-primary/10 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium">Built for IT & MSPs</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Meet Your 24/7
              <br />
              <span className="gradient-text">
                Voice AI Agent
              </span>
              <br />
              for IT Support
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/60 mb-10 leading-relaxed">
              Automate IT support calls, reduce ticket volumes by 60%, and deliver instant responses to your clients even after hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center lg:justify-start">
              <Button size="lg" className="gradient-bg px-8 py-6 text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all" asChild>
                <a href="tel:+14153198525" className="flex items-center justify-center gap-2">
                  <PhoneCall className="w-5 h-5" />
                  Speak with Kelly
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="px-8 py-6 border-primary/30 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 transition-all font-semibold" asChild>
                <a href="https://outlook.office365.com/book/ProBoundBookingPage@probound.ai/">Book a demo</a>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/30">
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold gradient-text">60%</div>
                <div className="text-sm text-foreground/60 mt-1">Ticket Reduction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-foreground/60 mt-1">Client Support</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold gradient-text">30%</div>
                <div className="text-sm text-foreground/60 mt-1">Increase in CSAT</div>
              </div>
            </div>
          </div>
          
          {/* Right visual mockup */}
          <div className="flex-1 relative max-w-xl lg:max-w-none">
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px]">
              {/* Main card */}
              <div className="absolute inset-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl border border-primary/20 p-8 shadow-2xl card-glow">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <Headphones className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold">Good Evening</div>
                        <div className="text-sm text-foreground/60">AI Support Active</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Active call card */}
                  <div className="bg-primary/20 backdrop-blur-sm rounded-2xl p-6 border border-primary/30">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <PhoneCall className="w-5 h-5 text-primary" />
                        <span className="font-medium">Active Call</span>
                      </div>
                      <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                        Connected
                      </div>
                    </div>
                    <div className="text-foreground/80 text-sm mb-3">
                      Password reset request from John Smith
                    </div>
                    <div className="flex items-center gap-2 text-xs text-foreground/60">
                      <Calendar className="w-4 h-4" />
                      <span>01:23 duration</span>
                    </div>
                  </div>
                  
                  {/* Task list */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-border/50">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="text-sm">Verify user identity</span>
                      </div>
                      <div className="text-xs text-green-400">✓ Complete</div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-primary/50">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm">Reset password in AD</span>
                      </div>
                      <div className="text-xs text-primary">In Progress...</div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background/30 rounded-xl border border-border/30">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-foreground/30"></div>
                        <span className="text-sm text-foreground/60">Send confirmation email</span>
                      </div>
                      <div className="text-xs text-foreground/40">Pending</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-float-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-float-medium"></div>
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

      {/* Video Dialog */}
      <Dialog open={showVideoDialog} onOpenChange={setShowVideoDialog}>
        <DialogContent className="max-w-4xl p-0">
          <div className="aspect-video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4DGJMPnyc2M?autoplay=1" title="ProBound Demo Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-lg" />
          </div>
        </DialogContent>
      </Dialog>
    </div>;
};