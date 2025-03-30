
import { useParams, Navigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PhoneCall, Target, Users, TrendingUp, ArrowRight, Briefcase } from "lucide-react";
import { NewsletterPopup } from "@/components/NewsletterPopup";
import { CTA } from "@/components/CTA";

const workers = {
  kelly: {
    name: "Kelly",
    greeting: "Hi, I'm Kelly.",
    role: "AI Customer Support",
    description: "I provide 24/7 multilingual support to your customers, answering their questions and handling conversations with ease.",
    features: [
      {
        title: "Track Your Market",
        description: "I analyze market trends and identify potential leads, ensuring your sales team focuses on high-value opportunities.",
        icon: Target
      },
      {
        title: "Engage Key Accounts",
        description: "I maintain consistent communication with prospects, nurturing relationships until they're ready to convert.",
        icon: Users
      },
      {
        title: "Generate Demand",
        description: "Through personalized outreach, I create interest in your product and qualify leads for your sales team.",
        icon: TrendingUp
      }
    ],
    image: "/lovable-uploads/5a92af00-06e1-4449-a871-95ed6c064182.png",
    phoneNumber: "14153198525"
  }
};

const WorkerDetails = () => {
  const { workerId } = useParams();
  const worker = workers[workerId as keyof typeof workers];

  // Redirect to Kelly's page if worker doesn't exist
  if (!worker) {
    return <Navigate to="/workers/kelly" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="relative overflow-hidden pt-32 pb-24">
        <div className="bg-grid absolute inset-0 opacity-10"></div>
        <div className="container max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                {worker.greeting.split(',')[0]}
                <span className="gradient-text block">{worker.greeting.split(',')[1] || ''}</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">{worker.description}</p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="gradient-bg hover:opacity-90" asChild>
                  <a href={`tel:${worker.phoneNumber}`} className="flex items-center gap-2">
                    <PhoneCall className="w-5 h-5" />
                    Speak with {worker.name}
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="hover:border-primary" asChild>
                  <a href="mailto:founders@probound.ai" className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Hire Me
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={worker.image}
                  alt={worker.name}
                  className="object-cover w-full h-full scale-125 object-top"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="py-24 relative">
        <div className="container max-w-7xl">
          <h2 className="text-4xl font-bold mb-12">What I Can Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {worker.features.map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl border border-border/40 hover:border-primary/40 transition-all duration-300">
                <feature.icon className="w-12 h-12 mb-6 text-primary" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-foreground/70 mb-6">{feature.description}</p>
                <Button variant="ghost" className="text-primary hover:text-primary/80">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTA />
      <Footer />
      <NewsletterPopup />
    </div>
  );
};

export default WorkerDetails;
