import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How secure is ProBound for handling sensitive client data?",
    answer: "ProBound is SOC 2 compliant and follows enterprise-grade security protocols. All voice data is encrypted in transit and at rest. We're also GDPR compliant and undergo regular security audits. Your client data never leaves our secure infrastructure."
  },
  {
    question: "How complex is the integration with our PSA tools?",
    answer: "Integration is designed to be simple. We support direct API connections with ConnectWise, Autotask, and other major PSA platforms. Most integrations are completed within 48 hours with our white-glove setup service."
  },
  {
    question: "How accurate is the AI in understanding technical issues?",
    answer: "Our AI is specifically trained on IT support scenarios and achieves 95%+ accuracy on common Tier 1 issues. For complex problems it can't handle, it intelligently escalates to your team with full conversation context and diagnostic information."
  },
  {
    question: "What happens when the AI can't resolve an issue?",
    answer: "The AI seamlessly transfers calls to your available technicians with a complete summary of the conversation, diagnostic steps taken, and client information. Your team gets the full context without the client having to repeat themselves."
  },
  {
    question: "Can we customize the AI's responses for our brand?",
    answer: "Absolutely. The AI can be trained on your specific procedures, terminology, and brand voice. It can reference your knowledge base, follow your escalation procedures, and maintain your professional standards."
  },
  {
    question: "What's the ROI timeline for MSPs using ProBound?",
    answer: "Most MSPs see positive ROI within 2-3 months. By reducing Tier 1 call volume by 60%+ and enabling 24/7 support without additional staffing, the cost savings and increased client satisfaction typically pay for the solution quickly."
  }
];

export const MSPFAQ = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Common Questions from MSPs
          </h2>
          <p className="text-lg text-foreground/70">
            Get answers to the most frequent concerns about implementing AI voice agents
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border/40 rounded-lg px-6 py-2 bg-card"
            >
              <AccordionTrigger className="text-left text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};