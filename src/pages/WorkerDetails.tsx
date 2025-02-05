import { useParams, Navigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PhoneCall, Target, Users, TrendingUp, ArrowRight, Briefcase } from "lucide-react";

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
    <div className="min-h-screen">
      <Navigation />
      
      <div className="relative bg-gradient-to-b from-primary-50 to-white pt-32 pb-24">
        <div className="container max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
                {worker.greeting}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">{worker.description}</p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="text-lg hover:bg-[#9b87f5]" asChild>
                  <a href={`tel:${worker.phoneNumber}`} className="flex items-center gap-2">
                    <PhoneCall className="w-5 h-5" />
                    Speak with {worker.name}
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg hover:bg-[#9b87f5] hover:text-white" asChild>
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
      </div>

      <div className="py-24 bg-white">
        <div className="container max-w-7xl">
          <h2 className="text-4xl font-bold mb-12">What I Can Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {worker.features.map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-gray-50 hover:bg-primary hover:text-white transition-all duration-300">
                <feature.icon className="w-12 h-12 mb-6 text-primary group-hover:text-white" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-white/90 mb-6">{feature.description}</p>
                <Button variant="ghost" className="group-hover:text-white">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WorkerDetails;