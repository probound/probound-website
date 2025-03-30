
import { Button } from "./ui/button";
import { PhoneCall, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl pt-40 pb-20 md:pt-48 md:pb-28">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              <span className="block mb-4">AI Voice Agents</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
                for every business
              </span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl leading-relaxed text-gray-600 max-w-2xl mx-auto md:mx-0">
              Never miss a call again with our human-like AI Voice Agents that conduct full-length conversations with perfect recall.
            </p>
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full w-full md:w-auto" asChild>
                <a href="tel:14153198525" className="flex items-center gap-2">
                  <PhoneCall className="w-5 h-5" />
                  Speak with Kelly
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full w-full md:w-auto group" asChild>
                <a href="https://cal.com/kemiprobound/ai" className="flex items-center gap-2">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Simplified How It Works Section */}
        <div className="py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Hire", description: "Choose the AI Agent you want to hire." },
              { number: "02", title: "Customize", description: "Configure the agent with your business information." },
              { number: "03", title: "Deploy", description: "Easily launch your agents to take phone calls." },
              { number: "04", title: "Monitor", description: "Track calls and performance through our analytics dashboard." },
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-5xl font-bold text-primary-500 mb-4">{step.number}</div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
