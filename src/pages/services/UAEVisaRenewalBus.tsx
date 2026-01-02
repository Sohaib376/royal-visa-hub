import { motion } from "framer-motion";
import { Phone, Clock, DollarSign, Bus, MapPin, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { DocumentList } from "@/components/common/DocumentList";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { Disclaimer } from "@/components/common/Disclaimer";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "971565330500";

const documents = [
  "Valid passport with minimum 6 months validity",
  "Current UAE visa (even if expired)",
  "Passport-sized photograph with white background",
  "Copy of Emirates ID (if applicable)",
];

const included = [
  "Bus transportation from Dubai to Oman border and back",
  "Exit and entry stamp processing",
  "Border crossing assistance",
  "New visa application processing",
  "Coordination of all logistics",
];

const faqs = [
  {
    question: "What is a visa renewal by bus?",
    answer: "A visa renewal by bus involves a border run where you exit the UAE via the Oman border by bus, get your exit stamp, and then re-enter the UAE to receive a new entry stamp or apply for a new visa. This is a common method for renewing expired or expiring visas."
  },
  {
    question: "How long does the bus visa renewal trip take?",
    answer: "The entire trip typically takes 6-10 hours, depending on border processing times and traffic. Departure is usually early morning from Dubai, and you return the same day."
  },
  {
    question: "What happens at the Oman border?",
    answer: "At the border, you will exit the UAE, receive an exit stamp, enter Oman briefly, then exit Oman and re-enter the UAE. Our team assists with the entire process and ensures smooth border crossing."
  },
  {
    question: "Can I do a visa run if my visa has already expired?",
    answer: "Yes, visa runs are commonly used when visas have expired. However, you may need to pay overstay fines at the border. We can advise on the estimated fines based on your overstay period."
  },
  {
    question: "What if I have an overstay fine?",
    answer: "Overstay fines are calculated at the border and must be paid before you can exit. These fines are separate from our service fee and are paid directly to immigration authorities."
  },
  {
    question: "Is the bus comfortable for the journey?",
    answer: "We use comfortable, air-conditioned buses for the journey. The trip includes rest stops, and our coordinators ensure a smooth experience throughout."
  },
  {
    question: "What time does the bus depart?",
    answer: "Departure times are typically early morning to ensure return the same day. We will confirm the exact pickup time and location when you book."
  },
  {
    question: "Can I get a new visa on the same day?",
    answer: "In most cases, you can apply for a new visa upon re-entry or arrange for a new visa to be processed for entry. We will advise on the best approach based on your nationality and visa requirements."
  },
  {
    question: "What if there are issues at the border?",
    answer: "Our team accompanies the bus and assists with any border issues. However, entry decisions are at the discretion of immigration authorities. If there are travel bans or other restrictions, we cannot override these."
  },
  {
    question: "Can I choose visa renewal by bus or flight?",
    answer: "Yes, we offer both options. Bus is more economical but takes longer. Flight options are faster but more expensive. Contact us to discuss which option suits your situation and budget."
  },
];

export default function UAEVisaRenewalBus() {
  const whatsappMessage = "Hello Purple Royal Tourism, I need to renew my UAE visa by bus. My current visa status is: ___, and my passport nationality is: ___. Please advise on available dates and requirements.";
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Layout>
      <PageHero
        subtitle="Visa Renewal Services"
        title="UAE Visa Renewal by Bus"
        description="Convenient and economical visa renewal through a border run trip to Oman. Same-day service with comfortable transportation and full assistance."
        showCTA
        whatsappMessage={whatsappMessage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "UAE Visa Renewal by Bus" },
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Service Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Service Overview
                </h2>
                <div className="w-16 h-1 bg-gold rounded-full mb-6" />
                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground">
                    Our visa renewal by bus service provides a convenient and cost-effective 
                    way to renew your UAE visa through a border run to Oman. The trip departs 
                    from Dubai, travels to the Hatta/Oman border, where you exit the UAE, 
                    briefly enter Oman, and then re-enter the UAE for a fresh visa.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    This service is ideal for those whose UAE visa is expiring or has expired 
                    and need to renew without leaving the region. Our experienced team 
                    coordinates all logistics and assists at every step of the process.
                  </p>
                </div>
              </motion.div>

              {/* What's Included */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  What is Included
                </h2>
                <div className="w-16 h-1 bg-gold rounded-full mb-6" />
                <div className="bg-card border border-border rounded-xl p-6">
                  <ul className="space-y-3">
                    {included.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Documents */}
              <DocumentList documents={documents} />

              {/* Trip Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Trip Details
                </h2>
                <div className="w-16 h-1 bg-gold rounded-full mb-6" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-gold" />
                      <h3 className="font-semibold text-foreground">Route</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Dubai → Hatta Border → Oman → Hatta Border → Dubai
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-6 h-6 text-gold" />
                      <h3 className="font-semibold text-foreground">Duration</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Approximately 6-10 hours (same day return)
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Important Notes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Important Notes
                </h2>
                <div className="w-16 h-1 bg-gold rounded-full mb-6" />
                <ul className="space-y-3">
                  {[
                    "Overstay fines (if applicable) are paid separately at the border",
                    "Entry is subject to immigration approval at the border",
                    "Bring sufficient cash for any border fees or fines",
                    "Trip may be rescheduled due to border closures or restrictions",
                    "Dress code: Modest attire recommended for border crossing",
                    "Meals and refreshments are not included",
                  ].map((note, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-gold">•</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <Disclaimer />

              {/* FAQs */}
              <FAQSection faqs={faqs} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-24 bg-gradient-card border border-gold/30 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Bus className="w-6 h-6 text-gold" />
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Pricing
                  </h3>
                </div>

                <div className="mb-6">
                  <p className="text-3xl font-bold text-gold">From AED 250</p>
                  <p className="text-sm text-muted-foreground">Per person</p>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Trip duration</span>
                    <span>6-10 hours</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Departure</span>
                    <span>Early morning</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Return</span>
                    <span>Same day</span>
                  </div>
                </div>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" className="w-full" size="lg">
                    <Phone className="w-4 h-4" />
                    Book via WhatsApp
                  </Button>
                </a>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Overstay fines and visa fees not included
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Renew Your Visa?"
        description="Contact us via WhatsApp with your visa status and nationality to book your seat."
        whatsappMessage={whatsappMessage}
      />
    </Layout>
  );
}
