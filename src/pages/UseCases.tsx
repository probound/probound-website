import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, BarChart2, Headphones, ShieldCheck, Zap, Users } from "lucide-react";

const UseCases = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100/50" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Transform Your Business Operations
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover how ProBound.ai's digital workforce solutions can revolutionize your industry
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: MessageSquare,
                  title: "Customer Service",
                  description: "24/7 intelligent support that understands and resolves customer inquiries instantly",
                },
                {
                  icon: BarChart2,
                  title: "Data Analysis",
                  description: "Transform raw data into actionable insights with AI-powered analytics",
                },
                {
                  icon: Headphones,
                  title: "Sales Support",
                  description: "Automate lead qualification and nurturing while maintaining personal touch",
                },
                {
                  icon: ShieldCheck,
                  title: "Compliance & Risk",
                  description: "Ensure regulatory compliance with AI-powered monitoring and reporting",
                },
                {
                  icon: Zap,
                  title: "Process Automation",
                  description: "Streamline workflows and eliminate repetitive tasks with intelligent automation",
                },
                {
                  icon: Users,
                  title: "HR & Recruitment",
                  description: "Optimize talent acquisition and management with AI assistance",
                },
              ].map((useCase, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100">
                    <useCase.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <Button variant="ghost" className="text-primary-600 hover:text-primary-700 p-0">
                    Learn more →
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 text-primary-50">
                Join the growing number of businesses leveraging our AI solutions
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-gray-100">
                Get Started Today
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UseCases;