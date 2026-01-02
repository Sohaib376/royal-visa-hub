import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "971565330500";
const WHATSAPP_MESSAGE = "Hello Purple Royal Tourism, I would like to inquire about your visa services.";

const contactMethods = [
  {
    icon: Phone,
    title: "WhatsApp",
    value: "+971 56 533 0500",
    description: "Our primary communication channel for quick responses",
    action: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    actionLabel: "Chat on WhatsApp",
    primary: true,
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+971 56 533 0500",
    description: "Call us directly for immediate assistance",
    action: "tel:+971565330500",
    actionLabel: "Call Now",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@purpleroyaltourism.com",
    description: "For detailed inquiries and document submissions",
    action: "mailto:info@purpleroyaltourism.com",
    actionLabel: "Send Email",
  },
];

const officeHours = [
  { day: "Saturday - Thursday", hours: "9:00 AM - 7:00 PM" },
  { day: "Friday", hours: "Closed" },
];

export default function Contact() {
  return (
    <Layout>
      <PageHero
        subtitle="Contact Us"
        title="Get in Touch"
        description="Have questions about our visa services? Our team is ready to assist you. Reach out via WhatsApp for the fastest response."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Methods */}
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-xl border ${
                  method.primary
                    ? "bg-gradient-card border-gold/50"
                    : "bg-card border-border"
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  method.primary ? "bg-gold/20" : "bg-primary/20"
                }`}>
                  <method.icon className={`w-7 h-7 ${
                    method.primary ? "text-gold" : "text-primary"
                  }`} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className={`text-lg font-semibold mb-2 ${
                  method.primary ? "text-gold" : "text-foreground"
                }`}>
                  {method.value}
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  {method.description}
                </p>
                <a href={method.action} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant={method.primary ? "whatsapp" : "outlineGold"}
                    className="w-full"
                  >
                    {method.actionLabel}
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location & Hours */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Office Location */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Our Office
                </h2>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Purple Royal Tourism
                </h3>
                <address className="not-italic text-muted-foreground space-y-1">
                  <p>CBD Bank Building</p>
                  <p>Sharaf DG Metro Station Exit 1</p>
                  <p>Office No 12, 3rd Floor</p>
                  <p>Al Mankhool, Dubai</p>
                  <p>United Arab Emirates</p>
                </address>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Easily accessible via metro - Sharaf DG Metro Station, Exit 1
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Office Hours
                </h2>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="space-y-4">
                  {officeHours.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    >
                      <span className="text-foreground font-medium">{item.day}</span>
                      <span className="text-gold font-semibold">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MessageSquare className="w-5 h-5 text-gold" />
                    <p className="text-sm">
                      WhatsApp messages are monitored and responded to promptly
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Inquiry CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today via WhatsApp for the fastest response. Our team is ready 
              to assist you with all your visa and travel needs.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="xl">
                <Phone className="w-5 h-5" />
                WhatsApp Now - +971 56 533 0500
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
