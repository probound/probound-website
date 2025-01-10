import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50/50 pt-32 pb-24">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-primary">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transforming Sales and Customer Service with{" "}
            <span className="text-primary">AI-Powered Digital Workers</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Empower your business to scale effortlessly by automating repetitive tasks and optimizing
            customer interactions through intelligent, human-like AI.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">No credit card required.</p>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 opacity-10 mix-blend-multiply">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-300 to-primary-100" />
      </div>
    </div>
  );
};