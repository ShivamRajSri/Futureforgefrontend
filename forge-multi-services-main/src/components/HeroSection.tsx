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
        <div className="mt-2 text-lg sm:text-xl font-bold tracking-wide text-white relative">
          <style>
            {`
              @keyframes colorCycle {
                0%   { color: #e11d48; }  /* rose-600 */
                10%  { color: #f97316; }  /* orange-500 */
                20%  { color: #facc15; }  /* yellow-400 */
                30%  { color: #10b981; }  /* emerald-500 */
                40%  { color: #14b8a6; }  /* teal-500 */
                50%  { color: #3b82f6; }  /* blue-500 */
                60%  { color: #6366f1; }  /* indigo-500 */
                70%  { color: #8b5cf6; }  /* violet-500 */
                80%  { color: #ec4899; }  /* pink-500 */
                90%  { color: #f43f5e; }  /* rose-500 */
                100% { color: #e11d48; }  /* back to start */
              }
              .animate-colorCycle {
                animation: colorCycle 5s linear infinite;
              }
            `}
          </style>

          <span className="font-bold mx-2 animate-colorCycle">India</span>
          <span className="font-bold mx-2 animate-colorCycle">|</span>
          <span className="font-bold mx-2 animate-colorCycle">USA</span>
          <span className="font-bold mx-2 animate-colorCycle">|</span>
          <span className="font-bold mx-2 animate-colorCycle">Canada</span>
        </div>
   </div>
   </div>
</section>
  );
};

export default HeroSection;