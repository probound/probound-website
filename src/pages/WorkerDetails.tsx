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
        description: "I analyze market trends and identify potential leads, ensuring your sales team focuses on high-value opportunities."
      },
      {
        title: "Engage Key Accounts",
        description: "I maintain consistent communication with prospects, nurturing relationships until they're ready to convert."
      },
      {
        title: "Generate Demand",
        description: "Through personalized outreach, I create interest in your product and qualify leads for your sales team."
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
        description: "I conduct targeted outbound calls, identifying and engaging with potential customers in your market."
      },
      {
        title: "Engage Key Accounts",
        description: "I maintain consistent follow-ups with key accounts, ensuring no opportunities slip through the cracks."
      },
      {
        title: "Generate Demand",
        description: "Through natural phone conversations, I qualify leads and schedule demos for your sales team."
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
          <h2 className="text-3xl font-bold mb-12">Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {worker.features.map((feature, index) => (
              <div key={index} className="space-y-4 p-6 rounded-xl bg-gray-50">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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