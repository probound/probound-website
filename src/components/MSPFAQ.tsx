import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [{
  question: "What exactly does your AI agent do?",
  answer: "Our AI voice agent handles triage, dispatch, and Level 1 IT support tasks like password resets, email issues, and printer problems. It collects details, resolves common issues, and escalates when needed."
}, {
  question: "Does the agent integrate with our PSA tools like ConnectWise or Autotask?",
  answer: "Yes. We integrate with ConnectWise, Autotask, and Datto to enable seamless ticket creation, updates, and resolution tracking."
}, {
  question: "What happens when the AI agent can't solve the issue?",
  answer: "It creates a detailed ticket and routes it to the right technician based on your internal escalation rules."
}, {
  question: "Can we customize the workflows and voice of the agent?",
  answer: "Yes. You can personalize greetings, escalation logic, authentication flows, ticket formatting, and even choose the agent's voice."
}, {
  question: "How does the AI verify who's calling?",
  answer: "We use saved contacts, allowlist verification, and MFA to confirm user identity before taking action."
}, {
  question: "Can we assign different agents to different customers or departments?",
  answer: "Yes. You can assign agents per customer, location, or workflow. Each agent runs in a secure, isolated workspace."
}, {
  question: "Is the platform secure and compliant?",
  answer: "Yes. We're building toward SOC 2 Type II compliance. All data is encrypted, and each customer environment is siloed for security."
}, {
  question: "How long does it take to get started?",
  answer: "Set up takes under 15 minutes. You can connect your Microsoft tenant and deploy your first agent the same day."
}];
export const MSPFAQ = () => {
  return <section className="py-16 sm:py-24 bg-muted/20">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-base sm:text-lg text-foreground/70">
            Get answers to the most frequent concerns about implementing AI voice agents
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border/40 rounded-lg px-4 sm:px-6 py-2 bg-card">
              <AccordionTrigger className="text-left text-base sm:text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>)}
        </Accordion>
      </div>
    </section>;
};