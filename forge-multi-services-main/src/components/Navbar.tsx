import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/Saman/Futureforgelogo.png"
                alt="Future Forge Logo"
                className="w-10 h-10 rounded-lg object-contain group-hover:scale-105 transition-transform"
              />
              <span className="text-xl font-bold text-foreground">FutureForge</span>
            </Link>

            {/* Nav Links for Large Screens */}
            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Hamburger for Small Screens */}
            <div className="flex md:hidden items-center gap-2">
              <span className="text-sm font-semibold text-primary animate-fade-in-slide">
                {
                  navigation.find((item) => item.href === location.pathname)?.name || ""
                }
              </span>
              <div className="p-1 rounded-md bg-muted hover:bg-muted/70 transition-all duration-200 shadow-md">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(true)}
                  aria-label="Open menu"
                  className="text-primary"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Slide-in Sidebar for Small Screens */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-background shadow-2xl rounded-r-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } md:hidden`}
      >
        <div className="p-4 border-b border-border bg-gradient-to-r from-muted to-transparent rounded-tr-xl">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-primary">Navigation</span>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5 text-foreground" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-base font-medium px-3 py-2 rounded-md transition-all hover:bg-muted hover:text-primary ${
                isActive(item.href)
                  ? "text-primary bg-secondary"
                  : "text-muted-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;