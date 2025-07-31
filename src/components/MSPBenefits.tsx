import { Clock, Users, TrendingUp, Globe, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "24/7 Availability", 
    description: "Never miss a client call again with round-the-clock AI support that never sleeps."
  },
  {
    icon: TrendingUp,
    title: "60% Faster Response",
    description: "Instant answers to common queries eliminate wait times and improve client satisfaction."
  },
  {
    icon: Users,
    title: "Reduced Burnout",
    description: "Free your team from repetitive Tier 1 calls to focus on complex problem-solving."
  },
  {
    icon: Globe,
    title: "Scalable Growth", 
    description: "Handle more clients without hiring additional support staff or expanding overhead."
  },
  {
    icon: Shield,
    title: "PSA Integration",
    description: "Seamlessly works with ConnectWise, Autotask, and other MSP management platforms."
  },
  {
    icon: Zap,
    title: "Client Satisfaction",
    description: "Consistent, professional support experience that strengthens client relationships."
  }
];

export const MSPBenefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Scale IT Support Not Headcount
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Transform your support operations with AI that understands the unique challenges of managed service providers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-xl border border-border/40 bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-foreground/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};