import { Bot, HeartHandshake } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const workers = [
  {
    name: "Kelly",
    role: "AI Sales Development Representative",
    description: "Identifies, contacts, and nurtures leads through intelligent, data-driven engagement.",
    icon: Bot,
    features: ["Lead Generation & Outreach", "Pipeline Management", "24/7 Operations"],
  },
  {
    name: "Jordan",
    role: "AI Customer Service Assistant",
    description: "Handles inquiries with empathy and precision, providing instant and accurate responses.",
    icon: HeartHandshake,
    features: ["Customer Support", "Issue Resolution", "Personalized Interactions"],
  },
];

export const DigitalWorkers = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Your Digital Workforce
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our digital workers are more than tools—they are intelligent collaborators that integrate
            seamlessly into your team.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {workers.map((worker) => (
            <Card key={worker.name} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <worker.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{worker.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {worker.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{worker.description}</p>
                <ul className="space-y-2">
                  {worker.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};