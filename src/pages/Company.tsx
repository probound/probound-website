import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, Users2, Heart } from "lucide-react";

const Company = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
                Empowering Businesses with AI Innovation
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                probound is revolutionizing the way businesses operate by providing intelligent digital workforce solutions that drive growth and efficiency.
              </p>
              <Button size="lg" className="rounded-full" asChild>
                <a href="mailto:founders@probound.ai">
                  Join Our Journey
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="glass-morphism rounded-2xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">What We Offer</h2>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-center">
                  We're developing an enterprise-grade conversational AI platform that facilitates seamless human-machine interactions. Leveraging our cutting-edge LLM technology, businesses can create sophisticated AI agents that listen, reason, and respond with human-like intelligence and emotional depth, driving automated decision-making and action aligned with their strategic objectives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
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
                <div 
                  key={index} 
                  className="glass-morphism p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
                >
                  <value.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
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