import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Shivam Raj",
    location: "India",
    text: "Working with Future Forge was a game-changer for our startup. Their team is incredibly professional and delivered beyond expectations."
  },
  {
    name: "Emily Chen",
    location: "USA",
    text: "Future Forge helped us scale faster with their automation and marketing strategies. Highly recommended!"
  },
  {
    name: "Carlos Diaz",
    location: "Canada",
    text: "Innovative, creative, and responsive. The team at Future Forge truly understands what businesses need."
  },
  {
    name: "Priya Nair",
    location: "India",
    text: "Absolutely satisfied with the design and development process. Every aspect was handled with perfection."
  },
  {
    name: "David Kim",
    location: "USA",
    text: "The turnaround time was excellent. They delivered a powerful solution that exceeded our expectations."
  }
];

const FiveStars = () => (
  <div className="flex text-yellow-500">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} fill="currentColor" strokeWidth={0} className="w-4 h-4" />
    ))}
  </div>
);

const TestimonialCard = ({ review }: { review: typeof testimonials[0] }) => (
  <Card className="bg-background/80 backdrop-blur-md border border-border rounded-2xl shadow-md m-2">
    <CardContent className="flex flex-col gap-4 p-6">
      <FiveStars />
      <p className="text-muted-foreground text-sm">{review.text}</p>
      <div className="text-sm font-semibold">{review.name}</div>
      <div className="text-xs text-gray-400">{review.location}</div>
    </CardContent>
  </Card>
);

const TestimonialSection = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-muted/30">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">
        Hear from Our Happy Clients
      </h2>
      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((review, index) => (
          <div key={index}>
            <TestimonialCard review={review} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialSection;