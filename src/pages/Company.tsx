
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, Users2, Heart } from "lucide-react";
import { NewsletterPopup } from "@/components/NewsletterPopup";

const Company = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="bg-grid absolute inset-0 opacity-10"></div>
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold tracking-tight mb-6">
                Empowering Businesses with
                <span className="gradient-text block mt-2">AI Innovation</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-8">
                ProBound is revolutionizing the way businesses operate by providing intelligent digital workforce solutions that drive growth and efficiency.
              </p>
              <Button size="lg" className="gradient-bg hover:opacity-90" asChild>
                <a href="mailto:founders@probound.ai">
                  Join Our Journey
                </a>
              </Button>
            </div>
          </div>
          <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
        </section>

        {/* What We Offer Section */}
        <section className="py-20 relative">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
              <p className="text-lg leading-relaxed text-foreground/70">
                We're developing an enterprise-grade conversational AI platform that facilitates seamless human-machine interactions. Leveraging our cutting-edge LLM technology, businesses can create sophisticated AI agents that listen, reason, and respond with human-like intelligence and emotional depth, driving automated decision-making and action aligned with their strategic objectives.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 relative">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-foreground/70">The principles that guide everything we do</p>
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
                <div key={index} className="p-6 rounded-2xl border border-border/40 hover:border-primary/40 transition-all duration-300">
                  <value.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <NewsletterPopup />
    </div>
  );
};

export default Company;
