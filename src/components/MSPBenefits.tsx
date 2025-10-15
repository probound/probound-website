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
    <section className="relative py-16 sm:py-24 bg-background overflow-hidden">
      <div className="bg-dot-pattern absolute inset-0 opacity-10"></div>
      <div className="container relative z-10 px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Scale IT Support Not Headcount
          </h2>
          <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto">
            Transform your support operations with AI that understands the unique challenges of managed service providers
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group p-6 sm:p-8 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-6 sm:w-7 h-6 sm:h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};