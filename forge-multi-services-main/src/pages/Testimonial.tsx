import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Eco Car Wash",
    location: "Austin, Texas, USA",
    text: "Our monthly subscription model was confusing to customers until FutureForge stepped in. They built a slick landing page with an easy funnel, and the conversions jumped by 60%. Incredible work!"
  },
  {
    name: "Maple Lane Pet Store",
    location: "Toronto, Canada",
    text: "We needed help bringing our in-store experience online. FutureForge built us a sales funnel and rebranded our website with stunning visuals. Our local online orders have taken off!"
  },
  {
    name: "Aarushi Sharma",
    location: "India (Lifestyle Influencer)",
    text: "FutureForge helped me automate my content booking system and launched a digital portfolio that looks premium and converts. My brand deals now feel organized and scalable."
  },
  {
    name: "The Fit Doc",
    location: "Canada (Health & Wellness Creator)",
    text: "The team understood my audience perfectly. They built a community funnel that moved my YouTube subscribers into an email list, where I now sell my e-books directly. Game-changer!"
  },
  {
    name: "@RealChefMike",
    location: "USA (Food Content Creator)",
    text: "I needed someone to structure my online cooking course funnel. FutureForge took my idea and turned it into a high-converting system. I made more in one launch than I did in 6 months on socials!"
  },
  {
    name: "Rahul Arora Realty",
    location: "Delhi NCR, India",
    text: "Leads were scattered and unqualified—until FutureForge streamlined my entire funnel. From lead magnet to WhatsApp follow-ups, everything runs smoothly now. I closed 4 deals last month directly through the funnel."
  },
  {
    name: "Keller & Grove Realty",
    location: "Vancouver, Canada",
    text: "FutureForge helped us generate consistent buyer leads with a landing page and retargeting strategy tailored for the Canadian market. Our team is impressed with the results and the support!"
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
  <Card className="bg-background/80 backdrop-blur-md border border-border rounded-2xl shadow-md flex-shrink-0 w-[300px] sm:w-[340px] mx-4">
    <CardContent className="flex flex-col gap-4 p-6">
      <FiveStars />
      <p className="text-muted-foreground text-sm">{review.text}</p>
      <div className="text-sm font-semibold">{review.name}</div>
      <div className="text-xs text-gray-400">{review.location}</div>
    </CardContent>
  </Card>
);

const TestimonialSection = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-muted/30">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">
        Hear from Our Happy Clients
      </h2>
      <div className="overflow-hidden relative">
        <div className="flex w-max animate-scroll-x gap-4 hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((review, i) => (
            <TestimonialCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;