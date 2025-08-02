import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Testimonials from "./Testimonial";
const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;