import { BarChart3, Globe2, Rocket, Shield } from "lucide-react";

const features = [
  {
    name: "Human-Like Conversations",
    description: "Leverage advanced AI to deliver lifelike voice interactions for seamless customer experiences.",
    icon: Globe2,
  },
  {
    name: "Intelligent Analytics",
    description: "Real-time insights into call performance, customer sentiment, and lead quality.",
    icon: BarChart3,
  },
  {
    name: "Scalability",
    description: "Handle thousands of simultaneous interactions without compromising quality.",
    icon: Rocket,
  },
  {
    name: "Enterprise Security",
    description: "End-to-end encryption and compliance with data privacy regulations.",
    icon: Shield,
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose ProBound.ai?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our platform offers cutting-edge features designed to supercharge your business.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};