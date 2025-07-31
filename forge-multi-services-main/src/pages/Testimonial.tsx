import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
const testimonials = [
  {
    name: "Ravi Sharma",
    title: "Founder, PropNest Realty",
    image: "/testimonials/ravi.jpg",
    feedback:
      "The Real Estate Advertisement service was spot on! Our properties saw a 60% increase in online inquiries. Truly impressive visuals and strategic marketing.",
    rating: 5,
  },
  {
    name: "Anjali Mehta",
    title: "Marketing Head, GrowFast Corp",
    image: "/testimonials/anjali.jpg",
    feedback:
      "Their CRM automation changed how we handle leads. We now close deals faster and retain clients better. Absolutely recommended!",
    rating: 5,
  },
  {
    name: "Siddharth Verma",
    title: "CEO, StartNova Tech",
    image: "/testimonials/sid.jpg",
    feedback:
      "We hired them for web & app development, and the results were outstanding. Sleek design, fast performance, and responsive team support!",
    rating: 5,
  },
  {
    name: "Neha Tiwari",
    title: "Creative Director, Visionary Films",
    image: "/testimonials/neha.jpg",
    feedback:
      "The video editing and brand communication services took our social presence to a whole new level. Every reel tells a powerful story!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium text-primary">What Clients Say</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear directly from our clients who’ve experienced business growth and creative success with our services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border border-border shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback>{testimonial.name.split(" ")[0][0]}{testimonial.name.split(" ")[1]?.[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.title}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.feedback}"</p>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;