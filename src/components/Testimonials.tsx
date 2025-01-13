import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "ProBound's AI workers have transformed how we handle customer support. Response times are down 80% while satisfaction is up.",
    author: "Sarah Chen",
    role: "Head of Customer Success",
    company: "TechFlow Inc.",
    avatar: "/placeholder.svg"
  },
  {
    quote: "The natural conversations and 24/7 availability have dramatically improved our lead qualification process.",
    author: "Michael Rodriguez",
    role: "Sales Director",
    company: "GrowthForce",
    avatar: "/placeholder.svg"
  },
  {
    quote: "Implementation was seamless, and the ROI was evident within the first month. A game-changer for our operations.",
    author: "Emily Watson",
    role: "Operations Manager",
    company: "ScaleUp Solutions",
    avatar: "/placeholder.svg"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Loved by Businesses Worldwide</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how companies are transforming their operations with ProBound's AI digital workers.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary-500 text-primary-500" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-8 text-lg">"{testimonial.quote}"</blockquote>
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-primary-100 text-primary-700">
                      {testimonial.author[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                    <div className="text-sm text-primary-600">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};