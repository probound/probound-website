
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-[#020617] min-h-screen flex flex-col">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -left-1/4 top-1/3 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[100px]" />
        <div className="absolute -right-1/4 bottom-1/3 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[#020617]/50 backdrop-blur-[1px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#020617] pointer-events-none" />
      </div>

      {/* Main content */}
      <div className="container relative z-10 flex-grow flex flex-col justify-center pt-32 pb-24">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Supercharge your Growth 
            <br />
            <span className="bg-gradient-to-r from-teal-300 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              with AI Agents
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
            Taalk AI Agents empower your business to create meaningful customer engagements
            <br />
            across Voice Calls and Text Messages that drive <span className="text-gray-100">Measurable Performance</span>.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium px-8 py-6 text-base" asChild>
              <a href="tel:14153198525">
                Taalk to an AI Agent now
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-white border-gray-500 hover:bg-gray-800 rounded-full px-8 py-6 text-base" asChild>
              <a href="https://cal.com/kemiprobound/ai" className="flex items-center gap-2">
                How we do it
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="relative z-10 container pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 text-center">
          <div className="border-r border-gray-700 last:border-none">
            <div className="bg-gradient-to-r from-teal-300 via-blue-500 to-indigo-500 bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl font-bold">
              600,000+
            </div>
            <p className="text-gray-400 mt-2">Dials Per Hour</p>
          </div>
          
          <div className="border-r border-gray-700 last:border-none">
            <div className="bg-gradient-to-r from-teal-300 via-blue-500 to-indigo-500 bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl font-bold">
              300,000+
            </div>
            <p className="text-gray-400 mt-2">Text Messages Per Day</p>
          </div>
          
          <div>
            <div className="bg-gradient-to-r from-teal-300 via-blue-500 to-indigo-500 bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl font-bold">
              2 Million
            </div>
            <p className="text-gray-400 mt-2">Emails Per Month</p>
          </div>
        </div>
      </div>
      
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxLjUiIGN5PSIxLjUiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvZz48L3N2Zz4=')] pointer-events-none opacity-50 z-0"></div>
    </div>
  );
};
