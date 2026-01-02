import { motion } from "framer-motion";
import { Plane, Bus, Globe, MapPin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { ServiceCard } from "@/components/common/ServiceCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CTASection } from "@/components/common/CTASection";
import { Disclaimer } from "@/components/common/Disclaimer";

const uaeVisaServices = [
  {
    title: "UAE Tourist Visa - 30 Days",
    description: "Short-term tourist visa for visitors looking to explore the UAE for up to 30 days. Ideal for business trips, tourism, and family visits.",
    price: "Starting from AED 250",
    icon: Plane,
    href: "/services/uae-tourist-visa-30-days",
  },
  {
    title: "UAE Tourist Visa - 60 Days",
    description: "Extended stay tourist visa for those requiring more time to experience all the UAE has to offer. Perfect for longer holidays.",
    price: "Starting from AED 450",
    icon: Plane,
    href: "/services/uae-tourist-visa-60-days",
  },
];

const renewalServices = [
  {
    title: "UAE Visa Renewal by Bus",
    description: "Convenient visa renewal service with a border run trip via bus to Oman. Comfortable and economical option.",
    price: "Starting from AED 250",
    icon: Bus,
    href: "/services/uae-visa-renewal-bus",
  },
  {
    title: "UAE Visa Renewal by Flight",
    description: "Quick visa renewal with a flight option for those who prefer faster travel and more destinations.",
    price: "Starting from AED 600",
    icon: Plane,
    href: "/services/uae-visa-renewal-flight",
  },
];

const umrahServices = [
  {
    title: "Umrah Packages by Bus",
    description: "Affordable Umrah packages from Dubai to Makkah and Madinah via bus. Includes accommodation and transportation.",
    price: "Starting From AED 1,270 per person",
    icon: MapPin,
    href: "/services/umrah-packages",
    featured: true,
  },
];

const globalVisaServices = [
  {
    title: "Schengen Visa Assistance",
    description: "Expert guidance for your Schengen visa application to visit 27 European countries. Document preparation and appointment support.",
    price: "Service Fee From AED 599",
    icon: Globe,
    href: "/services/schengen-visa",
    featured: true,
  },
  {
    title: "Canada Visa Assistance",
    description: "Professional assistance for Canadian visitor visa applications. Complete documentation support and guidance.",
    price: "Service Fee From AED 599",
    icon: Globe,
    href: "/services/canada-visa",
  },
  {
    title: "USA Visa Assistance",
    description: "Guidance for US visitor visa (B1/B2) applications. Document preparation and interview coaching.",
    price: "Service Fee From AED 299",
    icon: Globe,
    href: "/services/usa-visa",
  },
  {
    title: "USA Express Appointments",
    description: "Assistance with securing expedited US visa interview appointments when available.",
    price: "Service Fee From AED 799",
    icon: Globe,
    href: "/services/usa-express-appointments",
  },
];

export default function Services() {
  return (
    <Layout>
      <PageHero
        subtitle="Our Services"
        title="Comprehensive Visa & Travel Solutions"
        description="From UAE tourist visas to global destinations, we provide professional documentation assistance for all your travel needs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* UAE Visa Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="UAE Visas"
            title="UAE Tourist Visa Services"
            description="Whether you need a short visit or extended stay, we help you obtain the right UAE tourist visa."
            centered={false}
          />

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {uaeVisaServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Renewal */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Visa Renewal"
            title="UAE Visa Renewal Services"
            description="Need to renew your UAE visa? Choose between our bus and flight options for a smooth border run experience."
            centered={false}
          />

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {renewalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Umrah */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Religious Travel"
            title="Umrah Packages"
            description="Embark on your spiritual journey with our affordable Umrah packages from Dubai."
            centered={false}
          />

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {umrahServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Visas */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Global Visas"
            title="International Visa Assistance"
            description="Expert guidance for visa applications to popular destinations including Europe, Canada, and the USA."
            centered={false}
          />

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {globalVisaServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <Disclaimer />
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
