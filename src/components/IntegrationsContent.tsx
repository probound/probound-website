
import { Slack, Calendar, Phone, MessageSquare, Database, FileText, Bot, Mail, Share2 } from "lucide-react";

const integrations = [
  {
    name: "CRM Integration",
    description: "Connect your CRM system to automatically log call data, update customer records, and manage leads.",
    icon: Database,
  },
  {
    name: "Calendar Integration",
    description: "Allow your AI agents to check availability and schedule appointments directly in your calendar.",
    icon: Calendar,
  },
  {
    name: "Phone Systems",
    description: "Integrate with your existing phone system or use our cloud telephony to handle inbound and outbound calls.",
    icon: Phone,
  },
  {
    name: "Slack",
    description: "Get real-time notifications and summaries of calls directly in your team's Slack channels.",
    icon: Slack,
  },
  {
    name: "SMS & Messaging",
    description: "Enable your AI agents to send follow-up messages and reminders via SMS or other messaging platforms.",
    icon: MessageSquare,
  },
  {
    name: "Email Integration",
    description: "Automatically send email summaries, follow-ups, and important information after calls.",
    icon: Mail,
  },
  {
    name: "Document Management",
    description: "Allow agents to access and reference important documents and information during calls.",
    icon: FileText,
  },
  {
    name: "Chatbot Handoff",
    description: "Seamlessly transfer conversations between your website chatbots and voice agents.",
    icon: Bot,
  },
  {
    name: "API Access",
    description: "Build custom integrations with our comprehensive API to connect with any service you need.",
    icon: Share2,
  }
];

export const IntegrationsContent = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-10"></div>
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Seamless Connectivity
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our platform connects with the tools and services you already use, enhancing your workflows without disruption.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="relative p-6 bg-secondary/10 rounded-xl border border-border/40 hover:card-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <integration.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{integration.name}</h3>
              <p className="text-foreground/70">{integration.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"></div>
    </section>
  );
};
