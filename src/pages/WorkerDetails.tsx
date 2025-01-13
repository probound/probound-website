import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

const workers = {
  kelly: {
    name: "Kelly",
    role: "AI Sales Development Rep",
    description: "Handles inquiries with empathy and precision, providing instant and accurate responses.",
    features: [
      "24/7 Customer Support",
      "Empathetic Communication",
      "Seamless Issue Management",
    ],
    image: "/lovable-uploads/5a92af00-06e1-4449-a871-95ed6c064182.png",
    phoneNumber: "14153198525"
  },
  james: {
    name: "James",
    role: "AI Phone Agent",
    description: "Makes realistic cold calls, qualify leads, and schedule demos seamlessly.",
    features: [
      "Scale Outbound Cold Calls",
      "Smart Engagement",
      "Always On",
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
      <div className="container max-w-7xl py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{worker.name}</h1>
            <p className="text-xl text-gray-600">{worker.role}</p>
            <p className="text-gray-600">{worker.description}</p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Features</h3>
              <ul className="space-y-2">
                {worker.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Button size="lg" className="w-full md:w-auto" asChild>
              <a href={`tel:${worker.phoneNumber}`} className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                Speak with {worker.name}
              </a>
            </Button>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <img 
              src={worker.image}
              alt={worker.name}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkerDetails;