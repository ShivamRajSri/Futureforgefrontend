import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Building,
  Megaphone,
  Code,
  Camera,
  TrendingUp,
  Smartphone,
  Globe,
  CheckCircle,
  ArrowRight,
  Video,
  Target,
  Users,
  DollarSign,
  Filter,
} from "lucide-react";
import { motion } from "framer-motion";

import realEstateImage from "@/assets/real-estate-hero.jpg";
import businessAdsImage from "@/assets/business-ads-hero.jpg";
import webDevImage from "@/assets/web-dev-hero.jpg";
import videoCommImage from "/Saman/Videoedit.jpeg";
import brandingImage from "/Saman/Brand Positioning.jpeg";
import crmImage from "/Saman/Crm.jpeg";
import mediaBuyingImage from "/Saman/Paidadvertise.jpeg";
import funnelImage from "/Saman/Videoedit.jpeg";

const Services = () => {
  const services = [
    {
      id: "funnel-design",
      icon: Filter,
      title: "Customer Acquisition Funnel Design",
      subtitle: "Conversion-Optimized Funnels",
      description:
        "Create data-backed customer acquisition funnels that convert traffic into loyal customers through structured targeting and measurement.",
      image: funnelImage,
      features: [
        "Landing pages",
        "Lead magnets",
        "A/B testing",
        "Conversion analytics",
      ],
      subServices: [
        {
          icon: Filter,
          name: "Funnel Strategy",
          description: "Optimized mapping from awareness to conversion",
        },
        {
          icon: Filter,
          name: "Landing Pages",
          description: "High‑converting page designs",
        },
        {
          icon: Filter,
          name: "Testing & Analytics",
          description: "Data‑driven funnel improvements",
        },
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      id: "real-estate",
      icon: Building,
      title: "Real Estate Advertisement",
      subtitle: "Showcase Properties with Professional Marketing",
      description:
        "Transform your property listings into compelling marketing campaigns that attract qualified buyers and generate meaningful leads through strategic visual storytelling and targeted digital presence.",
      image: realEstateImage,
      features: [
        "Property Photography",
        "Marketing Campaigns",
        "Digital Listings",
        "Virtual Tours",
      ],
      subServices: [
        {
          icon: Camera,
          name: "Property Photography",
          description: "High-quality images and virtual tours",
        },
        {
          icon: TrendingUp,
          name: "Market Analysis",
          description: "Comprehensive market research and insights",
        },
        {
          icon: Globe,
          name: "Digital Marketing",
          description: "Multi-platform online presence optimization",
        },
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "business-ads",
      icon: Megaphone,
      title: "Business Advertisement",
      subtitle: "Amplify Your Brand Across All Channels",
      description:
        "Elevate your business visibility through comprehensive promotional strategies that engage your target audience, build brand recognition, and drive sustainable customer acquisition across digital and traditional channels.",
      image: businessAdsImage,
      features: [
        "Brand identity development and positioning",
        "Social media strategy and content creation",
        "Search engine marketing (SEM) and SEO",
        "Email marketing automation campaigns",
        "Performance analytics and optimization",
        "Creative content production and design",
      ],
      subServices: [
        {
          icon: TrendingUp,
          name: "Brand Strategy",
          description: "Comprehensive brand positioning and messaging",
        },
        {
          icon: Megaphone,
          name: "Digital Campaigns",
          description: "Multi-channel advertising campaigns",
        },
        {
          icon: Camera,
          name: "Content Creation",
          description: "Engaging visual and written content",
        },
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "web-development",
      icon: Code,
      title: "Web & App Development",
      subtitle: "Build Your Digital Future",
      description:
        "Create powerful, scalable, and user-friendly digital solutions that drive business growth through custom web applications, mobile apps, and e-commerce platforms built with cutting-edge technologies.",
      image: webDevImage,
      features: [
        "Custom website design and development",
        "Mobile application development (iOS & Android)",
        "E-commerce platform development and integration",
        "API development and third‑party integrations",
        "Database design and management",
        "Ongoing maintenance and technical support",
      ],
      subServices: [
        {
          icon: Globe,
          name: "Web Development",
          description: "Custom websites and web applications",
        },
        {
          icon: Smartphone,
          name: "Mobile Apps",
          description: "Native and cross-platform mobile solutions",
        },
        {
          icon: Code,
          name: "E-commerce",
          description: "Online store development and optimization",
        },
      ],
      color: "from-green-500 to-green-600",
    },
    {
      id: "video-communication",
      icon: Video,
      title: "Video-Based Brand Communication",
      subtitle: "Engaging Video & Content Editing",
      description:
        "Video production and editing services that strengthen your brand messaging through impactful storytelling and creative visual content.",
      image: videoCommImage,
      features: [
        "Promotional videos",
        "Reels/Shorts editing",
        "Explainer content",
        "Storyboarding & scripting",
      ],
      subServices: [
        {
          icon: Video,
          name: "Promotional Videos",
          description: "High‑impact promotional video creation",
        },
        {
          icon: Video,
          name: "Short-Form Content",
          description: "Reels, shorts, story edits optimized for social",
        },
        {
          icon: Video,
          name: "Explainer Videos",
          description: "Clear, concise product or brand explainers",
        },
      ],
      color: "from-red-500 to-red-600",
    },
    {
      id: "brand-strategy",
      icon: Target,
      title: "Brand Positioning & Content Strategy",
      subtitle: "Authority Content & Brand Clarity",
      description:
        "Position your brand as an authority with a strategic content roadmap that builds credibility, trust, and engagement over time.",
      image: brandingImage,
      features: [
        "Positioning framework",
        "Content roadmap",
        "Authority building",
        "SEO‑driven messaging",
      ],
      subServices: [
        {
          icon: Target,
          name: "Content Strategy",
          description: "Research-backed editorial planning",
        },
        {
          icon: Target,
          name: "Brand Positioning",
          description: "Authority and differentiation strategy",
        },
        {
          icon: Target,
          name: "SEO Content Framework",
          description: "Content optimized for search and impact",
        },
      ],
      color: "from-yellow-500 to-yellow-600",
    },
    {
      id: "crm-nurturing",
      icon: Users,
      title: "Automated CRM & Lead Nurturing",
      subtitle: "Streamlined Automation & Customer Journeys",
      description:
        "CRM integrations and lead nurturing pipelines automated to drive retention and conversion with minimal effort.",
      image: crmImage,
      features: [
        "CRM integration",
        "Lead scoring",
        "Email automation",
        "Customer journey mapping",
      ],
      subServices: [
        {
          icon: Users,
          name: "CRM Setup",
          description: "HubSpot, ActiveCampaign, etc.",
        },
        {
          icon: Users,
          name: "Lead Scoring",
          description: "Qualify inbound leads automatically",
        },
        {
          icon: Users,
          name: "Drip Campaigns",
          description: "Automated nurturing sequences",
        },
      ],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      id: "media-buying",
      icon: DollarSign,
      title: "Paid Advertising & Media Buying",
      subtitle: "ROI‑Driven Campaign Management",
      description:
        "Targeted paid ad management including media planning and optimization across Google, Meta, and display networks.",
      image: mediaBuyingImage,
      features: [
        "Google Ads",
        "Meta Ads",
        "Retargeting",
        "Budget optimization",
      ],
      subServices: [
        {
          icon: DollarSign,
          name: "Campaign Strategy",
          description: "Audience targeting & budget planning",
        },
        {
          icon: DollarSign,
          name: "Ad Management",
          description: "Hands‑on platform optimization",
        },
        {
          icon: DollarSign,
          name: "Retargeting",
          description: "Conversions via retargeted ads",
        },
      ],
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 leading-relaxed">
              Comprehensive solutions designed to accelerate your business
              growth and establish a commanding market presence.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  !isEven ? "lg:grid-flow-col-dense" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Image */}
                <div className={`relative ${!isEven ? "lg:col-start-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover brightness-90 saturate-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-70 mix-blend-multiply`}
                    ></div>
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Sub-services */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    {service.subServices.map((sub, si) => {
                      const SubIcon = sub.icon;
                      return (
                        <motion.div
                          key={si}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: si * 0.1 }}
                        >
                          <Card className="text-center border-0 bg-background/40 hover:shadow-xl transition-all rounded-xl">
                            <CardContent className="p-4">
                              <SubIcon className="w-6 h-6 text-primary mx-auto mb-2" />
                              <div className="text-sm font-medium mb-1">
                                {sub.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {sub.description}
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Content */}
                <motion.div
                  className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                    <span className="text-sm font-semibold text-primary">
                      {service.title}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                    {service.subtitle}
                  </h2>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feat, fi) => (
                      <div
                        key={fi}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="hero"
                    size="xl"
                    className="w-full sm:w-auto transition-transform hover:scale-105"
                    asChild
                  >
                    <Link to="/contact" className="flex items-center">
                      Get Started with {service.title}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;