import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white py-24 sm:py-32">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transforming Sales and Customer Service with{" "}
            <span className="text-primary">AI-Powered Digital Workers</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 animate-fade-up">
            Empower your business to scale effortlessly by automating repetitive tasks and optimizing
            customer interactions through intelligent, human-like AI.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-up">
            <Button size="lg" className="bg-primary hover:bg-primary-600">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 opacity-20 mix-blend-multiply">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-300 to-primary-100" />
      </div>
    </div>
  );
};