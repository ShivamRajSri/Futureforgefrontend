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
    </video>
    <div className="absolute inset-0 bg-black/4" />
  </div>

  {/* Content */}
  <div className="relative z-10 text-center max-w-5xl px-4 sm:px-6 lg:px-8">
    {/* Main Heading */}
    <h1 className="text-primary-foreground font-bold mb-6 leading-snug sm:leading-tight drop-shadow-md">
      <span className="block text-3xl sm:text-5xl lg:text-7xl px-4 sm:px-0">
        BUILD BOLD
      </span>
      <span className="block text-3xl sm:text-5xl lg:text-7xl px-4 sm:px-0">
        DESIGN SMART
      </span>
      <span className="block text-3xl sm:text-5xl lg:text-7xl px-4 sm:px-0 bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
        MARKET LOUD
      </span>
    </h1>

    {/* Subheading */}
    <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto px-4 sm:px-0">
      From real estate marketing to business promotion and cutting-edge web development,
      we forge comprehensive solutions that elevate your business to new heights.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <Button asChild size="lg">
        <Link to="/services" className="group">
          Explore Our Services
          <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
      <Button asChild size="lg" className="group">
        <Link to="/about" className="group">
          <Play className="w-5 h-5 mr-1" />
          Learn More
        </Link>
      </Button>
    </div>

{/* Countries Served */}
<div className="mt-6 text-center">
  <div className="inline-block bg-blue-600 text-white/90 text-lg sm:text-xl font-semibold tracking-wide px-4 py-2 rounded-md">
    Serving Clients in
  </div>

  {/* Scrolling flags in middle part */}
  <div className="relative flex justify-center mt-2">
    <div className="overflow-hidden w-64 sm:w-80 bg-transparent"> {/* central width */}
      <div
        className="flex whitespace-nowrap animate-marquee gap-6"
        style={{ animation: "marquee 12s linear infinite" }}
      >
        <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-14 h-7" />
        <img src="https://flagcdn.com/w40/us.png" alt="USA" className="w-14 h-7" />
        <img src="https://flagcdn.com/w40/ca.png" alt="Canada" className="w-14 h-7" />
        <img src="https://flagcdn.com/w40/gb.png" alt="UK" className="w-14 h-7" />
        <img src="https://flagcdn.com/w40/br.png" alt="Brazil" className="w-14 h-7" />
        <img src="https://flagcdn.com/w40/au.png" alt="Australia" className="w-14 h-7" />
      </div>
    </div>
  </div>

  {/* Marquee animation */}
  <style>
    {`
      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
    `}
  </style>
</div>

   {/* </div> */}
   </div>
</section>
  );
};

export default HeroSection;