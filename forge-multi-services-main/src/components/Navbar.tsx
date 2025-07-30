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
                alt="Future Fordge Logo"
                className="w-10 h-10 rounded-lg object-contain group-hover:scale-105 transition-transform"
              />
              <span className="text-xl font-bold text-foreground">Future Forge</span>
            </Link>

            {/* Always show hamburger icon */}
              <div className="flex items-center gap-4">
                <span
                  className="hidden sm:inline-block text-lg font-semibold text-primary animate-fade-in-slide"
                >
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

      {/* Slide-in Sidebar (from left) */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-background shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-border">
          <span className="text-lg font-semibold">Menu</span>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex flex-col gap-4 p-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive(item.href)
                  ? "text-primary bg-secondary px-3 py-2 rounded-md"
                  : "text-muted-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Optional dim background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;