import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Lightbulb, Award, CheckCircle, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering exceptional results that exceed expectations and drive real business growth."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority. We build lasting partnerships through transparency and dedicated support."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We leverage cutting-edge technologies and creative strategies to keep you ahead of the competition."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Quality is non-negotiable. We maintain the highest standards in every project we undertake."
    }
  ];

  const achievements = [
    { number: "370+", label: "Local Businesses" },
    { number: "173+", label: "Creators" },
    { number: "41+", label: "Real Estate Businesses" },
    { number: "8", label: "Core Services" },
    { number: "24/7", label: "Support Available" }
  ];

  const team = [
    {
      name: "Tushar Srivastav",
      role: "CEO & Founder",
      description: "Visionary leader and proficient in business development and digital marketing."
    },
    {
      name: "Dipesh Mayla",
      role: "CTO",
      description: "Creative expert in professional video editing and impactful logo design for powerful brand storytelling."
    },
    {
      name: "Vansh Rana",
      role: "Creative Head",
      description: "Visionary Creative Head driving innovative concepts, compelling visuals, and brand excellence across all media platforms."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About FutureForge
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/90 leading-relaxed">
              We're a dynamic team of innovators, creators, and strategists dedicated to 
              forging successful futures for businesses across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium text-primary">Our Story</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Forge Your Business With
                <span className="block text-primary">FutureForge</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to revolutionize how businesses approach marketing and technology, 
                  Future Fordge emerged from the recognition that modern companies need comprehensive, 
                  integrated solutions to thrive in today's competitive landscape.
                </p>
                <p>
                  Our journey began when our founders identified a gap in the market for a service provider 
                  that could seamlessly blend real estate marketing expertise, business promotion strategies, 
                  and cutting-edge web development under one roof.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for businesses of all sizes, helping them 
                  forge their path to success through innovative solutions and unwavering commitment to excellence.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center border-0 bg-secondary/50 hover:shadow-card transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium text-primary">Our Values</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values shape every decision we make and every project we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center border-0 bg-card hover:shadow-elegant transition-shadow group">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium text-primary">Our Team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet the Visionaries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our talented team brings together diverse expertise and shared passion for excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 bg-secondary/50 hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="bg-gradient-primary rounded-2xl p-8 mb-8 sm:p-12 text-center shadow-hero">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-6">
              120+ Remote Creative Ops team Members
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-8">
              Our ForgeForce specialists across design,development,content,automation,and media.They bring agility,innovation,and execution power to every FutureForge project.
              </p>
                    </div>
                              <div className="bg-gradient-primary rounded-2xl p-8 mb-8 sm:p-12 text-center shadow-hero">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-6">
              Serving Clients in India, USA, and Canada
              </h3>
              </div>
          {/* Why Choose Us */}
          <div className="bg-gradient-primary rounded-2xl p-8 sm:p-12 text-center shadow-hero">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-6">
              Why Choose Future Fordge?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                "Comprehensive multi-service expertise",
                "Proven track record of success",
                "Innovative technology solutions",
                "Dedicated client support",
                "Competitive pricing models",
                "Fast project turnaround"
              ].map((reason, index) => (
                <div key={index} className="flex items-center gap-3 text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-left">{reason}</span>
                </div>
              ))}
            </div>
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">
                Start Your Project Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;