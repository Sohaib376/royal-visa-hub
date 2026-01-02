import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "UAE Tourist Visa - 30 Days", href: "/services/uae-tourist-visa-30-days" },
      { name: "UAE Tourist Visa - 60 Days", href: "/services/uae-tourist-visa-60-days" },
      { name: "UAE Visa Renewal by Bus", href: "/services/uae-visa-renewal-bus" },
      { name: "UAE Visa Renewal by Flight", href: "/services/uae-visa-renewal-flight" },
      { name: "Umrah Packages by Bus", href: "/services/umrah-packages" },
      { name: "Schengen Visa Assistance", href: "/services/schengen-visa" },
      { name: "Canada Visa Assistance", href: "/services/canada-visa" },
      { name: "USA Visa Assistance", href: "/services/usa-visa" },
      { name: "USA Express Appointments", href: "/services/usa-express-appointments" },
    ],
  },
  { name: "FAQ", href: "/faq" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const WHATSAPP_NUMBER = "971565330500";
const WHATSAPP_MESSAGE = "Hello Purple Royal Tourism, I would like to inquire about your visa services.";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-royal flex items-center justify-center">
              <span className="text-gold font-display font-bold text-xl">P</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-xl font-semibold text-foreground">
                Purple Royal
              </span>
              <span className="block text-xs text-muted-foreground tracking-wider uppercase">
                Tourism
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-gold transition-colors">
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border-border min-w-[250px]">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link
                          to={child.href}
                          className="cursor-pointer text-foreground/80 hover:text-gold focus:text-gold"
                        >
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? "text-gold"
                      : "text-foreground/80 hover:text-gold"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden md:block">
              <Button variant="whatsapp" size="default">
                <Phone className="w-4 h-4" />
                WhatsApp Now
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-border"
            >
              <div className="flex flex-col gap-2 pt-4">
                {navigation.map((item) =>
                  item.children ? (
                    <div key={item.name} className="space-y-2">
                      <span className="text-sm font-semibold text-gold px-4">
                        {item.name}
                      </span>
                      <div className="pl-6 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block py-2 px-4 text-sm text-foreground/80 hover:text-gold transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`py-2 px-4 text-sm font-medium transition-colors ${
                        location.pathname === item.href
                          ? "text-gold"
                          : "text-foreground/80 hover:text-gold"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                )}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 mx-4"
                >
                  <Button variant="whatsapp" className="w-full">
                    <Phone className="w-4 h-4" />
                    WhatsApp Now
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
