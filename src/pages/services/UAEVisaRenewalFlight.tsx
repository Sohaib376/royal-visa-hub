import { motion } from "framer-motion";
import { Phone, Clock, DollarSign, Plane, MapPin, Check } from "lucide-react";
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
  "Flight ticket to selected destination",
  "Exit and entry stamp processing",
  "New visa application processing",
  "Airport assistance (where available)",
  "Return flight coordination",
];

const faqs = [
  {
    question: "What is a visa renewal by flight?",
    answer: "Visa renewal by flight involves flying out of the UAE to another country, exiting on your current visa, and then returning with a new visa. This is faster than bus travel and offers more destination options."
  },
  {
    question: "Which destinations are available for flight visa runs?",
    answer: "Popular destinations include Oman (Muscat), Bahrain, and other nearby countries. The available destinations may vary based on flight schedules and your nationality requirements. Contact us for current options."
  },
  {
    question: "How long does the flight visa renewal take?",
    answer: "Depending on the destination and flight schedules, a flight visa run can be completed in the same day or may require an overnight stay. We will advise on the fastest options available."
  },
  {
    question: "Is flight visa renewal faster than bus?",
    answer: "Yes, flight-based visa renewal is generally faster than bus travel, though it is more expensive. It is ideal for those who prefer quicker travel or cannot spend 6-10 hours on a bus trip."
  },
  {
    question: "What if my visa has expired with overstay?",
    answer: "Overstay fines must be paid at the airport before departure. These fines are separate from our service fee and are calculated based on the number of days overstayed."
  },
  {
    question: "Can I choose my destination?",
    answer: "We can advise on available destinations based on your nationality and visa requirements. Some destinations may be easier for certain nationalities to enter."
  },
  {
    question: "What documents do I need for the destination country?",
    answer: "Requirements vary by destination and your nationality. Some countries offer visa-on-arrival for UAE residents, while others may require advance visas. We will confirm requirements when booking."
  },
  {
    question: "Is accommodation included if overnight stay is required?",
    answer: "Standard packages typically include flight and visa processing only. If overnight accommodation is needed, this can be arranged at additional cost. Contact us for package options."
  },
  {
    question: "What if my flight is delayed or cancelled?",
    answer: "In case of flight disruptions, we assist with rebooking and alternative arrangements. However, airline policies regarding delays and cancellations apply."
  },
  {
    question: "Can I bring luggage on the trip?",
    answer: "Luggage allowance depends on the airline and ticket type booked. We recommend traveling light for visa runs. We will confirm baggage details when booking your flight."
  },
];

export default function UAEVisaRenewalFlight() {
  const whatsappMessage = "Hello Purple Royal Tourism, I need to renew my UAE visa by flight. My current visa status is: ___, and my passport nationality is: ___. Please advise on available destinations and dates.";
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Layout>
      <PageHero
        subtitle="Visa Renewal Services"
        title="UAE Visa Renewal by Flight"
        description="Quick and convenient visa renewal through a flight-based border run. Faster than bus travel with multiple destination options available."
        showCTA
        whatsappMessage={whatsappMessage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "UAE Visa Renewal by Flight" },
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
                    Our visa renewal by flight service offers a faster alternative to bus-based 
                    border runs. You fly to a nearby country, exit the UAE on your current visa, 
                    and then return with a new visa. This option is ideal for those who prefer 
                    quicker travel or have time constraints.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Popular destinations include Muscat (Oman), Bahrain, and other nearby countries 
                    depending on availability and your nationality. Our team coordinates flights, 
                    visa processing, and all logistics for a smooth experience.
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

              {/* Destinations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Available Destinations
                </h2>
                <div className="w-16 h-1 bg-gold rounded-full mb-6" />
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "Muscat, Oman", note: "Most popular option" },
                    { name: "Bahrain", note: "Short flight duration" },
                    { name: "Other destinations", note: "Based on availability" },
                  ].map((dest, index) => (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-5"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="w-5 h-5 text-gold" />
                        <h3 className="font-semibold text-foreground">{dest.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{dest.note}</p>
                    </div>
                  ))}
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
                    "Overstay fines (if applicable) are paid separately at the airport",
                    "Prices vary based on destination and flight availability",
                    "Some destinations may require advance visa for certain nationalities",
                    "Entry is subject to immigration approval at both ends",
                    "Flight schedules and availability may affect timing",
                    "Overnight accommodation may be required for some routes",
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
                  <Plane className="w-6 h-6 text-gold" />
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Pricing
                  </h3>
                </div>

                <div className="mb-6">
                  <p className="text-3xl font-bold text-gold">From AED 600</p>
                  <p className="text-sm text-muted-foreground">Per person (varies by destination)</p>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Duration</span>
                    <span>Same day or overnight</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Includes</span>
                    <span>Flight + processing</span>
                  </div>
                </div>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" className="w-full" size="lg">
                    <Phone className="w-4 h-4" />
                    Inquire via WhatsApp
                  </Button>
                </a>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Final price depends on destination and dates
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for a Quick Visa Renewal?"
        description="Contact us via WhatsApp with your visa status and preferred dates to get a quote."
        whatsappMessage={whatsappMessage}
      />
    </Layout>
  );
}
