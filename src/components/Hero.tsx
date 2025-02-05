import { Button } from "./ui/button";
import { PhoneCall, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center pt-32 pb-8">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-primary-900 ring-1 ring-primary-900/10 hover:ring-primary-900/20 bg-white/80 backdrop-blur-sm">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary-500" />
                Revolutionizing Business Communication
              </span>
            </div>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Intelligent Human-like
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
              AI Digital Workers
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Transform your business operations with our advanced AI digital workers. Experience seamless automation and human-like interactions that drive growth and efficiency.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="group text-lg px-8" asChild>
              <a href="tel:14153198525" className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                Contact Us
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" asChild>
              <a href="https://cal.com/kemiprobound/ai">Schedule Demo</a>
            </Button>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="py-24">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-5xl font-bold text-primary-500 mb-4">01</div>
              <h3 className="text-2xl font-semibold mb-4">Hire</h3>
              <p className="text-gray-600">
                Choose the AI Agent you want to hire.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-5xl font-bold text-primary-500 mb-4">02</div>
              <h3 className="text-2xl font-semibold mb-4">Customize</h3>
              <p className="text-gray-600">
                Configure the agent with your business information to represent you.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-5xl font-bold text-primary-500 mb-4">03</div>
              <h3 className="text-2xl font-semibold mb-4">Deploy</h3>
              <p className="text-gray-600">
                Easily launch your agents to start make or take phone calls.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-5xl font-bold text-primary-500 mb-4">04</div>
              <h3 className="text-2xl font-semibold mb-4">Monitor</h3>
              <p className="text-gray-600">
                Track calls, conversion rates, and more through our analytics dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-primary-100/40 to-primary-200/40 blur-3xl" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-primary-100/30 to-primary-200/30 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-gradient-to-t from-primary-100/30 to-primary-200/30 blur-2xl" />
      </div>
    </div>
  );
};