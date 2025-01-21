import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, Users2, Heart } from "lucide-react";

const Company = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100/50" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Empowering Businesses with AI Innovation
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                probound is revolutionizing the way businesses operate by providing intelligent digital workforce solutions that drive growth and efficiency.
              </p>
              <Button size="lg" asChild>
                <a href="mailto:founders@probound.ai">
                  Join Our Journey
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Core Value Proposition Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Value Proposition</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                We are building business-friendly agentic platform that enables natural-sounding conversations between humans and machines. With one powerful AI platform, create LLM-powered AI agents that listen, think, and speak with the same intelligence and emotive quality that a person can and act in your business interest on auto-pilot.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Innovation First",
                  description: "Pushing boundaries with cutting-edge AI solutions",
                },
                {
                  icon: Users2,
                  title: "Customer Success",
                  description: "Your growth is our primary mission",
                },
                {
                  icon: Heart,
                  title: "Ethical AI",
                  description: "Responsible development for a better future",
                },
              ].map((value, index) => (
                <div key={index} className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                  <value.icon className="w-12 h-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Company;