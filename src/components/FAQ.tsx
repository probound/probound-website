import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why is ViralHooks different from ChatGPT?",
    answer: "ViralHooks is specifically designed for content creators, offering specialized tools and features tailored to content creation and social media management."
  },
  {
    question: "Can ViralHooks help me create authentic, non-robotic content?",
    answer: "Yes, ViralHooks uses advanced AI to help you create genuine, engaging content while maintaining your unique voice and style."
  },
  {
    question: "Who is ViralHooks for?",
    answer: "ViralHooks is designed for content creators, social media managers, and anyone looking to enhance their online presence with authentic content."
  },
  {
    question: "What is ViralHooks?",
    answer: "ViralHooks is an AI-powered platform that helps creators generate engaging content while maintaining authenticity and personal brand voice."
  },
  {
    question: "Is there a trial period for ViralHooks?",
    answer: "Yes, we offer a trial period to help you experience the full potential of our platform before making a commitment."
  },
  {
    question: "What's the deal with the free plan and refund policy?",
    answer: "We offer a flexible free plan to get started, and our refund policy ensures your satisfaction with our premium features."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-4">
          <span className="text-[#4ADE80] text-sm">+ Frequently Asked Questions</span>
        </div>
        <h2 className="text-5xl font-bold text-center mb-16">Have Questions?</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-800 rounded-lg px-6 py-2"
            >
              <AccordionTrigger className="text-left text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};