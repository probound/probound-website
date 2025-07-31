import { UserPlus, Key, Wifi, Clock } from "lucide-react";

const useCases = [
  {
    icon: UserPlus,
    title: "New Client Onboarding",
    description: "Automated setup guidance and initial support",
    scenario: "AI guides new clients through initial setup, collects account information, and creates welcome tickets—all while maintaining your brand voice."
  },
  {
    icon: Key,
    title: "Password & Access Issues", 
    description: "Instant resets and account unlocks",
    scenario: "Clients get immediate password resets and account access without waiting for your team. AI verifies identity and handles common authentication issues."
  },
  {
    icon: Wifi,
    title: "Network Connectivity",
    description: "Basic troubleshooting and escalation routing",
    scenario: "AI walks clients through standard network diagnostics, power cycling, and cable checks before escalating complex issues with detailed notes."
  },
  {
    icon: Clock,
    title: "After-Hours Emergency",
    description: "Intelligent triage and emergency escalation", 
    scenario: "Outside business hours, AI assesses urgency, provides immediate solutions where possible, and escalates true emergencies to on-call staff."
  }
];

export const MSPUseCases = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Real MSP Scenarios
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            See how your AI agent handles the most common support requests your team deals with daily
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl p-8 border border-border/40 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <useCase.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-primary mb-3 font-medium">{useCase.description}</p>
                  <p className="text-foreground/70 text-sm leading-relaxed">{useCase.scenario}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};