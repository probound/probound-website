import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PhoneCall, Briefcase, Target, Users, TrendingUp } from "lucide-react";

const Receptionists = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="relative bg-gradient-to-b from-primary-50 to-white pt-32 pb-24">
        <div className="container max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
                AI Receptionists
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your front desk operations with our intelligent virtual receptionists. Handle appointments, greet visitors, and manage incoming calls 24/7 with our AI-powered reception system.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="text-lg hover:bg-primary-600" asChild>
                  <a href="tel:14153198525" className="flex items-center gap-2">
                    <PhoneCall className="w-5 h-5" />
                    Contact Sales
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg hover:bg-primary-50" asChild>
                  <a href="https://cal.com/kemiprobound/ai" className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Schedule Demo
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/89fcda54-50d8-4b05-9815-75f4bc6ac7df.png"
                  alt="AI Receptionist Professional"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="container max-w-7xl">
          <h2 className="text-4xl font-bold mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Appointment Management",
                description: "Efficiently handle scheduling, rescheduling, and cancellations while maintaining your calendar up-to-date.",
              },
              {
                icon: Users,
                title: "Visitor Management",
                description: "Greet and register visitors, notify employees of arrivals, and maintain a professional front desk presence.",
              },
              {
                icon: TrendingUp,
                title: "Call Handling",
                description: "Route calls, take messages, and provide basic information to callers with natural conversation abilities.",
              },
            ].map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-gray-50 hover:bg-primary hover:text-white transition-all duration-300">
                <feature.icon className="w-12 h-12 mb-6 text-primary group-hover:text-white" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-white/90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Receptionists;