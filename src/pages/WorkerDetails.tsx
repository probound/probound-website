import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PhoneCall, CheckCircle2 } from "lucide-react";

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
        image: "/lovable-uploads/2bf70f73-8cb2-466c-92a0-427bd9db26a6.png"
      },
      {
        title: "Engage Key Accounts",
        description: "I maintain consistent communication with prospects, nurturing relationships until they're ready to convert.",
        image: "/lovable-uploads/2bf70f73-8cb2-466c-92a0-427bd9db26a6.png"
      },
      {
        title: "Generate Demand",
        description: "Through personalized outreach, I create interest in your product and qualify leads for your sales team.",
        image: "/lovable-uploads/2bf70f73-8cb2-466c-92a0-427bd9db26a6.png"
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
        image: "/lovable-uploads/2bf70f73-8cb2-466c-92a0-427bd9db26a6.png"
      },
      {
        title: "Engage Key Accounts",
        description: "I maintain consistent follow-ups with key accounts, ensuring no opportunities slip through the cracks.",
        image: "/lovable-uploads/2bf70f73-8cb2-466c-92a0-427bd9db26a6.png"
      },
      {
        title: "Generate Demand",
        description: "Through natural phone conversations, I qualify leads and schedule demos for your sales team.",
        image: "/lovable-uploads/2bf70f73-8cb2-466c-92a0-427bd9db26a6.png"
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
              <Button size="lg" className="w-full md:w-auto" asChild>
                <a href={`tel:${worker.phoneNumber}`} className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4" />
                  Speak with {worker.name}
                </a>
              </Button>
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
          <h2 className="text-4xl font-bold mb-16">Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {worker.features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-2xl p-6 h-[400px] relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10 h-full flex flex-col">
                    <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    <div className="mt-auto">
                      <Button variant="ghost" className="group-hover:bg-primary/10 transition-colors">
                        Learn more
                        <span className="ml-2">→</span>
                      </Button>
                    </div>
                  </div>
                </div>
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