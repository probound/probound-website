import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PhoneCall, Target, Users, TrendingUp, ArrowRight, Briefcase } from "lucide-react";

const workers = {
  kelly: {
    name: "Kelly",
    greeting: "Hi, I'm Kelly.",
    role: "AI Sales Development Rep",
    description: "I help sales teams scale their outreach by handling lead qualification and scheduling demos with precision and empathy.",
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
  },
  james: {
    name: "James",
    greeting: "Hi, I'm James.",
    role: "AI Phone Agent",
    description: "I help businesses scale their outbound calling efforts by making natural, engaging calls that convert leads into opportunities.",
    features: [
      {
        title: "Track Your Market",
        description: "I conduct targeted outbound calls, identifying and engaging with potential customers in your market.",
        icon: Target
      },
      {
        title: "Engage Key Accounts",
        description: "I maintain consistent follow-ups with key accounts, ensuring no opportunities slip through the cracks.",
        icon: Users
      },
      {
        title: "Generate Demand",
        description: "Through natural phone conversations, I qualify leads and schedule demos for your sales team.",
        icon: TrendingUp
      }
    ],
    image: "/lovable-uploads/6858bebe-8b28-4358-aebc-18b3248538cb.png",
    phoneNumber: "14153198525"
  }
};

const WorkerDetails = () => {
  const { workerId } = useParams();
  const worker = workers[workerId as keyof typeof workers];

  if (!worker) return null;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-[#F5F5F4] pt-32 pb-24">
        <div className="container max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight">{worker.greeting}</h1>
              <p className="text-xl text-gray-600">{worker.description}</p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" asChild>
                  <a href={`tel:${worker.phoneNumber}`} className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4" />
                    Speak with {worker.name}
                  </a>
                </Button>
                <Button size="lg" variant="secondary">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Hire Me
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src={worker.image}
                  alt={worker.name}
                  className="object-cover w-full h-full scale-125 object-top"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-6 py-3 rounded-xl">
                <div className="text-sm opacity-80">Now talking to</div>
                <div className="font-medium">{worker.name} - {worker.role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-24 bg-white">
        <div className="container max-w-7xl">
          <h2 className="text-3xl font-bold mb-12">Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {worker.features.map((feature, index) => (
              <div key={index} className="group p-8 rounded-xl bg-gray-50 hover:bg-primary hover:text-white transition-all duration-300">
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

      {/* CTA Section */}
      <div className="py-24 bg-primary text-white">
        <div className="container max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Business?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let {worker.name} help you automate your {worker.role === "AI Phone Agent" ? "outbound calls" : "lead qualification"} 
            and grow your business faster.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href={`tel:${worker.phoneNumber}`}>
                <PhoneCall className="w-4 h-4 mr-2" />
                Speak with {worker.name}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Briefcase className="w-4 h-4 mr-2" />
              Hire {worker.name}
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WorkerDetails;