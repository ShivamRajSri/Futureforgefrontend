import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Saman/Bgvideo2.O.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-snug sm:leading-tight px-2 sm:px-0">
            BUILD BOLD DESIGN SMART
            <span className="block bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              MARKET LOUD
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            From real estate marketing to business promotion and cutting-edge web development, 
            we forge comprehensive solutions that elevate your business to new heights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="xl" className="shadow-hero" asChild>
              <Link to="/services" className="group">
                Explore Our Services
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="bg-background/20 backdrop-blur-sm border-background/30 text-primary-foreground hover:bg-background/30"
              asChild
            >
              <Link to="/about" className="group">
                <Play className="w-5 h-5" />
                Learn More
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">1000+</div>
              <div className="text-primary-foreground/80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">8</div>
              <div className="text-primary-foreground/80">Core Services</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default HeroSection;