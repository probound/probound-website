import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, Users2, Target, Rocket, Award, Heart } from "lucide-react";

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
                ProBound.ai is revolutionizing the way businesses operate by providing intelligent digital workforce solutions that drive growth and efficiency.
              </p>
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                Join Our Journey
              </Button>
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

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
              <p className="text-lg text-gray-600">Meet the team behind ProBound.ai</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  role: "CEO & Founder",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                },
                {
                  name: "Michael Ross",
                  role: "CTO",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                },
                {
                  name: "Emily Wong",
                  role: "Head of AI",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
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