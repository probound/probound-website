import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    quote: "Most of our time used to be taken up by administrative work whereas now we can focus on building out programs to help our employees.",
    author: "Mark Zellers",
    role: "Director of Human Resources",
    avatar: "/placeholder.svg"
  },
  {
    quote: "I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
    author: "Matt Henderson",
    role: "Client Success Manager",
    avatar: "/placeholder.svg"
  },
  {
    quote: "This powerful tool eliminates the need to leave Salesforce to get things done.",
    author: "Natalia Larsson",
    role: "Director of Sales Operations",
    avatar: "/placeholder.svg"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-white">
              <CardContent className="pt-6">
                <blockquote className="text-gray-600 mb-6">"{testimonial.quote}"</blockquote>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
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