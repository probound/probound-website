import { Bot, HeartHandshake, CheckCircle2, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";

const workers = [
  {
    name: "James",
    role: "AI Sales Development Representative",
    description: "Makes realistic cold calls, qualify leads, and schedule demos seamlessly.",
    icon: Bot,
    features: [
      "Scale Outbound Cold Calls",
      "Smart Engagement",
      "Always On",
    ],
    testimonial: {
      quote: "James has transformed our sales process, handling lead qualification with incredible precision.",
      author: "Dione D",
      position: "President",
    },
    bgColor: "bg-[#F5F5F4]",
    phoneNumber: "14153198525",
    image: "/lovable-uploads/6858bebe-8b28-4358-aebc-18b3248538cb.png"
  },
  {
    name: "Kelly",
    role: "AI Customer Service Assistant",
    description: "Handles inquiries with empathy and precision, providing instant and accurate responses.",
    icon: HeartHandshake,
    features: [
      "24/7 Customer Support",
      "Empathetic Communication",
      "Seamless Issue Management",
    ],
    testimonial: {
      quote: "The level of customer satisfaction has increased dramatically since implementing Kelly.",
      author: "Sarah M",
      position: "Customer Success Lead",
    },
    bgColor: "bg-[#F5F5F4]",
    phoneNumber: "14153198525",
    image: "/lovable-uploads/5a92af00-06e1-4449-a871-95ed6c064182.png"
  },
];

export const DigitalWorkers = () => {
  return (
    <section className="py-24">
      <div className="container max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8">
          {workers.map((worker, index) => (
            <div key={worker.name} className="space-y-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src={worker.image} 
                  alt={worker.name}
                  className={`object-cover w-full h-full ${worker.name === 'James' ? 'scale-125 object-top' : ''}`}
                />
                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                  {worker.name} - {worker.role}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{worker.name}</h3>
                <p className="text-gray-600">{worker.description}</p>

                <ul className="space-y-3">
                  {worker.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-[#0C7BCE] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href={`tel:${worker.phoneNumber}`} className="flex items-center justify-center gap-2">
                    <PhoneCall className="w-4 h-4" />
                    Speak with {worker.name}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};