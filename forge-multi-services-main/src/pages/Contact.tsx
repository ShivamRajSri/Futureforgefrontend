import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary text-primary-foreground">
                    <motion.section
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="pt-24 pb-16 bg-gradient-primary text-primary-foreground"
>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/90 leading-relaxed">
              Forge your business to the next level..Get in touch with our team of experts today.
            </p>
          </div>
        </div>
        </motion.section>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;