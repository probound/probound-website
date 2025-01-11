import { Bot, HeartHandshake, CheckCircle2, PhoneCall, User } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const workers = [
  {
    name: "Kelly",
    role: "AI Sales Development Representative",
    description: "Makes realistic cold calls, qualify leads, and schedule demos seamlessly.",
    icon: Bot,
    features: [
      "Scale Outbound Cold Calls",
      "Smart Engagement",
      "Always On",
    ],
    testimonial: {
      quote: "Kelly has transformed our sales process, handling lead qualification with incredible precision.",
      author: "Dione D",
      position: "President",
    },
    bgColor: "bg-[#E6F4F1]",
    phoneNumber: "14153198525"
  },
  {
    name: "Jordan",
    role: "AI Customer Service Assistant",
    description: "Handles inquiries with empathy and precision, providing instant and accurate responses.",
    icon: HeartHandshake,
    features: [
      "Instant Customer Support Resolution",
      "Empathetic Communication",
      "Seamless Issue Management",
    ],
    testimonial: {
      quote: "The level of customer satisfaction has increased dramatically since implementing Jordan.",
      author: "Sarah Martinez",
      position: "Customer Success Lead",
    },
    bgColor: "bg-[#F3E8FF]",
  },
];

export const DigitalWorkers = () => {
  return (
    <section className="py-24">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Meet Your Digital Workforce
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our digital workers are more than tools—they are intelligent collaborators that integrate
            seamlessly into your team.
          </p>
        </div>

        <div className="space-y-20">
          {workers.map((worker, index) => (
            <div
              key={worker.name}
              className={`rounded-3xl p-8 ${worker.bgColor} ${
                index % 2 === 0 ? "" : "bg-opacity-50"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 text-[#0C7BCE] font-medium">
                    <span className="w-8 h-8 rounded-lg bg-white/80 flex items-center justify-center">
                      <worker.icon className="w-5 h-5" />
                    </span>
                    {worker.role}
                  </div>

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

                  <Card className="bg-white/80 backdrop-blur-sm border-none">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <User className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <blockquote className="text-gray-700">"{worker.testimonial.quote}"</blockquote>
                          <div className="mt-4">
                            <div className="font-semibold">{worker.testimonial.author}</div>
                            <div className="text-sm text-gray-500">{worker.testimonial.position}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 rounded-lg border bg-gray-50/50">
                        <div className="w-10 h-10 rounded bg-[#0C7BCE]/10 flex items-center justify-center">
                          <worker.icon className="w-5 h-5 text-[#0C7BCE]" />
                        </div>
                        <div>
                          <div className="font-medium">{worker.name}</div>
                          <div className="text-sm text-gray-500">Active and ready</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {worker.features.map((feature, i) => (
                          <div
                            key={i}
                            className="p-4 rounded-lg border bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                          >
                            <div className="text-sm font-medium">{feature}</div>
                          </div>
                        ))}
                      </div>

                      <Button 
                        className="w-full mt-4"
                        size="lg"
                        asChild
                      >
                        <a href={`tel:${worker.phoneNumber}`} className="flex items-center justify-center gap-2">
                          <PhoneCall className="w-4 h-4" />
                          Speak with {worker.name}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
