import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const NewsletterPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem("hasSeenNewsletterPopup");
      if (!hasSeenPopup) {
        setOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = () => {
    localStorage.setItem("hasSeenNewsletterPopup", "true");
    window.location.href = "https://probound-ai-newsletter.beehiiv.com/subscribe";
    setOpen(false);
  };

  const handleClose = () => {
    localStorage.setItem("hasSeenNewsletterPopup", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-white/90 backdrop-blur-lg border border-primary/20 animate-fade-up">
        <div className="flex flex-col items-center space-y-6 p-6">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Stay Updated</h2>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for the latest updates on AI and automation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <Button 
              onClick={handleSubscribe}
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              Subscribe Now
            </Button>
            <Button 
              variant="outline" 
              onClick={handleClose}
              className="flex-1"
            >
              Maybe Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};