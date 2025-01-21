import { Bot, HeartHandshake, PhoneCall, Briefcase } from "lucide-react";
import { Button } from "./ui/button";

const workers = [
  {
    name: "James",
    role: "AI Sales Development Rep",
    description: "I automate outreach pipeline to engage your ideal prospects, qualify, and seamlessly schedule meetings to convert them to customers - on autopilot.",
    icon: Bot,
    phoneNumber: "14153198525",
    image: "/lovable-uploads/6858bebe-8b28-4358-aebc-18b3248538cb.png"
  },
  {
    name: "Kelly",
    role: "AI Customer Support",
    description: "I provide 24/7 multilingual support to your customers, answering their questions and handling conversations with ease.",
    icon: HeartHandshake,
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
                  className="object-cover w-full h-full scale-125 object-top"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{worker.name}</h3>
                <p className="text-gray-600">{worker.description}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    className="w-full sm:w-auto hover:bg-gray-600"
                    asChild
                  >
                    <a href={`tel:${worker.phoneNumber}`} className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4" />
                      Speak with {worker.name}
                    </a>
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto hover:bg-gray-600 hover:text-white"
                    asChild
                  >
                    <a href="mailto:founders@probound.ai" className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Hire Me
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};