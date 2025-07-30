import { Link } from "react-router-dom";
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Real Estate Ads", href: "/services" },
      { name: "Business Promotion", href: "/services" },
      { name: "Web Development", href: "/services" },
      { name: "App Development", href: "/services" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about" },
      { name: "Careers", href: "/contact" },
      { name: "Contact", href: "/contact" },
    ],
    resources: [
      { name: "Portfolio", href: "/services" },
      { name: "Case Studies", href: "/services" },
      { name: "Blog", href: "/contact" },
      { name: "Support", href: "/contact" },
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61578234999572" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/Sri_Tushar_01" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/108076048/admin/dashboard/" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/cooperofpoopers?igsh=MTZwd2p0b2djejJjOA==" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">Future Forge</span>
            </Link>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Forging the future of business success through comprehensive real estate marketing, 
              business promotion, and cutting-edge web development solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm">futureforge.official.work@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm">+91 9305253970</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm">Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Connected</h3>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Connect to our newsletter for the latest updates and industry insights.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-2">
                {/* <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-md text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
                /> */}
                <Button variant="accent" size="sm">
                <Link to="/contact">Connect</Link>
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-8 h-8 bg-primary-foreground/10 hover:bg-accent rounded-md flex items-center justify-center transition-colors duration-200 group"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <IconComponent className="w-4 h-4 text-primary-foreground/80 group-hover:text-accent-foreground" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/80">
              © {currentYear} Future Forge. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;