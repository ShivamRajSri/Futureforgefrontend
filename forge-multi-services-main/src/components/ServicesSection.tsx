import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Building,
  Megaphone,
  Code,
  Video,
  ShieldCheck,
  Users,
  DollarSign,
  Filter,
  ArrowRight,
} from "lucide-react";
import realEstateImage from "@/assets/real-estate-hero.jpg";
import businessAdsImage from "@/assets/business-ads-hero.jpg";
import webDevImage from "@/assets/web-dev-hero.jpg";
import videoCommImage from "/Saman/Videoedit.jpeg";
import brandingImage from "/Saman/Brand Positioning.jpeg";
import crmImage from "/Saman/Crm.jpeg";
import mediaBuyingImage from "/Saman/Paidadvertise.jpeg";
import funnelImage from "/Saman/Videoedit.jpeg";

const ServicesSection = () => {
  const services = [
        {
      icon: Filter,
      title: "Customer Acquisition Funnel Design",
      description:
        "Design optimized funnels that convert visitors into loyal customers through structured, data-backed strategies.",
      image: funnelImage,
      features: ["Landing Pages", "Lead Magnets", "A/B Testing", "Conversion Analytics"],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Building,
      title: "Real Estate Advertisement",
      description:
        "Professional marketing solutions to showcase your properties and reach the right buyers with compelling visual content and strategic campaigns.",
      image: realEstateImage,
      features: ["Property Photography", "Marketing Campaigns", "Digital Listings", "Virtual Tours"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Megaphone,
      title: "Business Advertisement",
      description:
        "Comprehensive promotional strategies that elevate your brand visibility and drive customer engagement across all digital platforms.",
      image: businessAdsImage,
      features: ["Brand Strategy", "Social Media Marketing", "Content Creation", "Analytics"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Code,
      title: "Web & App Development",
      description:
        "Cutting-edge web and mobile application development using the latest technologies to bring your digital vision to life.",
      image: webDevImage,
      features: ["Custom Websites", "Mobile Apps", "E-commerce", "Maintenance"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Video,
      title: "Video-Based Brand Communication",
      description:
        "Engaging video production and content editing services to strengthen brand messaging and capture audience attention effectively.",
      image: videoCommImage,
      features: ["Promotional Videos", "Reels/Shorts Editing", "Explainers", "Storyboarding"],
      color: "from-red-500 to-red-600",
    },
    {
      icon: ShieldCheck,
      title: "Brand Positioning & Content Strategy",
      description:
        "Position your brand as an authority with well-researched, targeted content strategies that enhance credibility and trust.",
      image: brandingImage,
      features: ["Positioning Framework", "Content Roadmap", "Authority Building", "SEO Strategy"],
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Users,
      title: "Automated CRM & Lead Nurturing",
      description:
        "Automation tools and CRM systems that streamline your lead nurturing process and improve customer retention.",
      image: crmImage,
      features: ["CRM Integration", "Lead Scoring", "Email Automation", "Customer Journeys"],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: DollarSign,
      title: "Paid Advertising & Media Buying",
      description:
        "ROI-driven paid ad strategies including media planning, targeting, and campaign management across digital platforms.",
      image: mediaBuyingImage,
      features: ["Google Ads", "Meta Ads", "Retargeting", "Budget Optimization"],
      color: "from-pink-500 to-pink-600",
    }
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Solutions for
            <span className="block text-primary">Your Business Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide end-to-end services that transform your business vision into measurable success across multiple domains.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.title} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80`}></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-background/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <Link to="/services">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 sm:p-12 text-center shadow-hero">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive services can help you achieve your business goals and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-background/20 backdrop-blur-sm border-background/30 text-primary-foreground hover:bg-background/30" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
