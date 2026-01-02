import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Plane, 
  FileCheck, 
  Bus, 
  Globe, 
  MapPin, 
  Clock, 
  Shield, 
  Phone,
  ArrowRight,
  Star,
  Users,
  CheckCircle
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/common/ServiceCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ProcessSteps } from "@/components/common/ProcessSteps";
import { CTASection } from "@/components/common/CTASection";

const WHATSAPP_NUMBER = "971565330500";
const WHATSAPP_MESSAGE = "Hello Purple Royal Tourism, I would like to inquire about your visa services. Please help me check my eligibility.";

const services = [
  {
    title: "UAE Tourist Visa - 30 Days",
    description: "Short-term tourist visa for visitors looking to explore the UAE for up to 30 days.",
    price: "Starting from AED 250",
    icon: Plane,
    href: "/services/uae-tourist-visa-30-days",
    featured: false,
  },
  {
    title: "UAE Tourist Visa - 60 Days",
    description: "Extended stay tourist visa for those requiring more time to experience all the UAE has to offer.",
    price: "Starting from AED 450",
    icon: Plane,
    href: "/services/uae-tourist-visa-60-days",
    featured: false,
  },
  {
    title: "UAE Visa Renewal by Bus",
    description: "Convenient visa renewal service with a border run trip via bus to Oman.",
    price: "Starting from AED 250",
    icon: Bus,
    href: "/services/uae-visa-renewal-bus",
    featured: false,
  },
  {
    title: "Schengen Visa Assistance",
    description: "Expert guidance for your Schengen visa application to visit 27 European countries.",
    price: "Service Fee From AED 599",
    icon: Globe,
    href: "/services/schengen-visa",
    featured: true,
  },
  {
    title: "Canada Visa Assistance",
    description: "Professional assistance for Canadian visitor visa applications.",
    price: "Service Fee From AED 599",
    icon: Globe,
    href: "/services/canada-visa",
    featured: false,
  },
  {
    title: "Umrah Packages by Bus",
    description: "Affordable Umrah packages from Dubai to Makkah and Madinah via bus.",
    price: "Starting From AED 1,270",
    icon: MapPin,
    href: "/services/umrah-packages",
    featured: true,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Contact Us",
    description: "Reach out via WhatsApp or phone to discuss your visa requirements and travel plans.",
  },
  {
    number: "02",
    title: "Submit Documents",
    description: "Provide the required documents. Our team will review and guide you through the process.",
  },
  {
    number: "03",
    title: "Processing",
    description: "We handle your application professionally and keep you updated on the status.",
  },
];

const trustIndicators = [
  { icon: Shield, label: "Dubai Registered", value: "Licensed Tourism Company" },
  { icon: CheckCircle, label: "Transparent Pricing", value: "No Hidden Fees" },
  { icon: Clock, label: "Quick Response", value: "WhatsApp Support" },
  { icon: Users, label: "Satisfied Clients", value: "Professional Service" },
];

export default function Index() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-royal/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                Dubai-Based Visa & Travel Consultancy
              </span>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Your Gateway to <br />
                <span className="text-gradient-gold">Seamless Travel</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Professional visa assistance for UAE Tourist Visas, Visa Renewals, 
                Schengen, Canada, USA visas, and affordable Umrah packages from Dubai.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    <Phone className="w-5 h-5" />
                    WhatsApp Now - Check Eligibility
                  </Button>
                </a>
                <Link to="/services">
                  <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                    View All Services
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-2 gap-4">
                {trustIndicators.slice(0, 2).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-semibold text-foreground">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Service highlights */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-primary/20 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-card border border-border rounded-3xl p-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                    Quick Price Guide
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      { service: "UAE Tourist Visa - 30 Days", price: "From AED 250" },
                      { service: "UAE Tourist Visa - 60 Days", price: "From AED 450" },
                      { service: "Visa Renewal by Bus", price: "From AED 250" },
                      { service: "Schengen Visa Assistance", price: "From AED 599" },
                      { service: "USA Visa Assistance", price: "From AED 299" },
                      { service: "Umrah by Bus", price: "From AED 1,270" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-3 border-b border-border last:border-0"
                      >
                        <span className="text-muted-foreground">{item.service}</span>
                        <span className="text-gold font-semibold">{item.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground italic">
                      Service fees exclude embassy, consulate, or government charges.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustIndicators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 justify-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-royal flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                  <p className="font-semibold text-foreground">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Our Services"
            title="Comprehensive Visa & Travel Solutions"
            description="From UAE tourist visas to global destinations, we provide professional documentation assistance for all your travel needs."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services">
              <Button variant="outlineGold" size="lg">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="How It Works"
            title="Simple, Professional Process"
            description="We've streamlined the visa application process to make it as easy as possible for you."
          />

          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Professional Visa Assistance You Can Trust
              </h2>
              <p className="text-muted-foreground mb-8">
                Purple Royal Tourism is a Dubai-registered travel and visa consultancy 
                committed to providing transparent, professional, and reliable service. 
                We focus on accurate documentation and clear communication to support 
                your travel journey.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Dubai-registered and licensed tourism company",
                  "Transparent pricing with no hidden fees",
                  "WhatsApp support for quick communication",
                  "Experienced team with in-depth visa knowledge",
                  "Accurate document preparation and review",
                  "Clear guidance throughout the process",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/about">
                <Button variant="outlinePurple" size="lg">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-royal rounded-3xl blur-2xl opacity-30" />
              <div className="relative bg-gradient-card border border-border rounded-3xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                    <Star className="w-8 h-8 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Trusted Service
                    </h3>
                    <p className="text-muted-foreground">
                      Professional visa consultancy
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary/50 rounded-xl p-4 text-center">
                    <p className="font-display text-3xl font-bold text-gold">7</p>
                    <p className="text-sm text-muted-foreground">Days a Week</p>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-4 text-center">
                    <p className="font-display text-3xl font-bold text-gold">100%</p>
                    <p className="text-sm text-muted-foreground">Transparent</p>
                  </div>
                </div>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="whatsapp" className="w-full" size="lg">
                    <Phone className="w-5 h-5" />
                    Chat with Our Team
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
}
