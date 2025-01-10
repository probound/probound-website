import { Button } from "./ui/button";

export const CTA = () => {
  return (
    <section className="relative py-24 bg-primary">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get Started with ProBound.ai
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-100">
            The future of work is here. Transform how your business manages sales and customer service
            with the power of intelligent digital workers.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-primary-50">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-primary-600">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 opacity-20 mix-blend-multiply">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-primary-900" />
      </div>
    </section>
  );
};