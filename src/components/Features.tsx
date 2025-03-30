
import { BarChart3, Globe2, Rocket, Shield, Zap, Users, Brain, Clock } from "lucide-react";

const features = [
  {
    name: "Human-Like Conversations",
    description: "Experience natural, context-aware interactions that feel genuinely human.",
    icon: Brain,
  },
  {
    name: "Real-Time Analytics",
    description: "Get instant insights into performance and customer engagement metrics.",
    icon: BarChart3,
  },
  {
    name: "24/7 Availability",
    description: "Your digital workforce never sleeps, ensuring round-the-clock operations.",
    icon: Clock,
  },
  {
    name: "Enterprise Security",
    description: "Bank-grade encryption and compliance with privacy regulations.",
    icon: Shield,
  },
  {
    name: "Instant Deployment",
    description: "Get started in minutes with our seamless onboarding process.",
    icon: Zap,
  },
  {
    name: "Team Collaboration",
    description: "Integrate smoothly with your existing team and workflows.",
    icon: Users,
  },
  {
    name: "Global Reach",
    description: "Connect with customers worldwide in multiple languages.",
    icon: Globe2,
  },
  {
    name: "Scalable Solution",
    description: "Grow your digital workforce as your business expands.",
    icon: Rocket,
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-10"></div>
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Our Advantage
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with enterprise-grade features to deliver unmatched business value.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative p-6 bg-secondary/10 rounded-xl border border-border/40 hover:card-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"></div>
    </section>
  );
};
