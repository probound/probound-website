import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsletterPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem("newsletter-popup-shown")) {
        setOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = () => {
    window.location.href = "https://probound-ai-newsletter.beehiiv.com/subscribe";
    setOpen(false);
    localStorage.setItem("newsletter-popup-shown", "true");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Stay Updated</DialogTitle>
          <DialogDescription>
            Subscribe to our newsletter to receive the latest updates and news about ProBound.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Button onClick={handleSubscribe} className="w-full">
            Subscribe to Newsletter
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};