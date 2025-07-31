import { Star, Shield, Users, Award } from "lucide-react";

const testimonials = [
  {
    quote: "ProBound's AI agent has been a game-changer for our MSP. We've reduced our Tier 1 call volume by 65% and our clients love the instant response times.",
    author: "Mike Chen",
    role: "IT Director",
    company: "TechForward Solutions",
    rating: 5
  },
  {
    quote: "The PSA integration was seamless. Our AI agent creates tickets automatically and escalates complex issues with perfect context. It's like having a junior tech available 24/7.",
    author: "Sarah Rodriguez", 
    role: "MSP Owner",
    company: "CloudFirst IT",
    rating: 5
  },
  {
    quote: "After-hours support used to be our biggest pain point. Now our clients get immediate help even at 2 AM, and our team only gets called for true emergencies.",
    author: "David Kim",
    role: "Operations Manager", 
    company: "NetworkPro MSP",
    rating: 5
  }
];

const stats = [
  { number: "150+", label: "MSPs Trust ProBound" },
  { number: "99.8%", label: "Uptime Guarantee" },
  { number: "4.8/5", label: "Client Satisfaction" },
  { number: "< 48hrs", label: "Implementation Time" }
];

const certifications = [
  { name: "SOC 2 Compliant", icon: Shield },
  { name: "GDPR Ready", icon: Shield },
  { name: "Microsoft Partner", icon: Award },
  { name: "Founded by MSP Veterans", icon: Users }
];

export const TrustSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-sm text-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Trusted by MSPs Nationwide
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border/40 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <blockquote className="text-foreground/80 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-foreground/70">{testimonial.role}</div>
                  <div className="text-sm text-primary">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-8">Security & Partnerships</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <cert.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-foreground/70 text-center">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};