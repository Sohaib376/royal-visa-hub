import { motion } from "framer-motion";
import { Phone, Clock, DollarSign, Users, Plane } from "lucide-react";
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
  "Passport-sized photograph with white background",
  "Clear scanned copy of passport bio page",
  "Confirmed travel dates",
  "Proof of accommodation in UAE (hotel booking or host details)",
  "Return flight ticket or itinerary",
  "Bank statement showing sufficient funds (may be required)",
];

const faqs = [
  {
    question: "What is the difference between 30-day and 60-day tourist visas?",
    answer: "The main difference is the permitted length of stay. A 30-day visa allows you to stay for up to 30 days from entry, while a 60-day visa allows up to 60 days. The 60-day visa is ideal for extended holidays, long-term business engagements, or visitors who need more time in the UAE."
  },
  {
    question: "How long does the 60-day tourist visa processing take?",
    answer: "Standard processing typically takes 3-5 working days, similar to the 30-day visa. Express processing may be available for urgent cases."
  },
  {
    question: "Is the 60-day visa extendable?",
    answer: "Extension options depend on the type of visa issued and current immigration policies. Some visas may be extended within the UAE. Contact us before your visa expires to discuss available options."
  },
  {
    question: "What if I only end up staying for 2 weeks?",
    answer: "You can leave at any time before your visa expires. If you are unsure about your stay duration, consider starting with a 30-day visa, which is less expensive. You can always apply for renewal if needed."
  },
  {
    question: "Can I travel outside UAE and return on the same visa?",
    answer: "This depends on the type of visa issued. Single-entry visas allow only one entry, while multiple-entry visas allow re-entry. We can advise on the visa type that suits your travel plans."
  },
  {
    question: "What are the accommodation requirements?",
    answer: "You need to provide proof of where you will stay in the UAE. This can be a hotel booking, a letter from a UAE resident hosting you, or proof of rented accommodation."
  },
  {
    question: "Do I need to show proof of funds?",
    answer: "Bank statements or proof of sufficient funds may be required for some applications. This helps demonstrate that you can support yourself during your stay. We will advise on specific requirements based on your situation."
  },
  {
    question: "Can I apply for a 60-day visa if my previous 30-day visa expired?",
    answer: "Yes, having a previously expired visa does not prevent future applications. However, if you overstayed your previous visa or had any immigration issues, this may affect your new application."
  },
  {
    question: "Is health insurance required for the 60-day visa?",
    answer: "While not always mandatory for visa approval, travel health insurance is strongly recommended for any extended stay. Some visa types may require proof of insurance coverage."
  },
  {
    question: "What is the cancellation policy if I no longer need the visa?",
    answer: "Once visa processing has begun, service fees are generally non-refundable. If you cancel before processing starts, please refer to our refund policy for applicable terms."
  },
];

export default function UAETouristVisa60Days() {
  const whatsappMessage = "Hello Purple Royal Tourism, I would like to apply for a UAE Tourist Visa (60 Days). My nationality is: ___, and my intended travel dates are: ___. Please advise on the process and requirements.";
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Layout>
      <PageHero
        subtitle="UAE Visa Services"
        title="UAE Tourist Visa - 60 Days"
        description="Extended stay tourist visa for visitors who need more time to explore the UAE. Perfect for longer holidays, extended business trips, and family visits."
        showCTA
        whatsappMessage={whatsappMessage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "UAE Tourist Visa - 60 Days" },
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
                    The UAE 60-day tourist visa is designed for visitors who require an extended 
                    stay in the United Arab Emirates. Whether you are planning a longer holiday, 
                    conducting extended business activities, visiting family for an extended period, 
                    or exploring multiple emirates, this visa provides the flexibility of up to 
                    60 days from your date of entry.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Our team at Purple Royal Tourism ensures your application is thoroughly prepared 
                    with all necessary documentation to support your request for an extended stay visa.
                  </p>
                </div>
              </motion.div>

              {/* Who Is This For */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Who Is This Service For?
                </h2>
                <div className="w-16 h-1 bg-gold rounded-full mb-6" />
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Plane, label: "Long-term tourists and travelers" },
                    { icon: Users, label: "Extended business visitors" },
                    { icon: Users, label: "Family visits requiring more time" },
                    { icon: Plane, label: "Those exploring multiple emirates" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-card border border-border rounded-lg p-4"
                    >
                      <item.icon className="w-5 h-5 text-gold shrink-0" />
                      <span className="text-muted-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Documents */}
              <DocumentList documents={documents} />

              {/* Processing Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Processing Time
                </h2>
                <div className="w-16 h-1 bg-gold rounded-full mb-6" />
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Clock className="w-8 h-8 text-gold" />
                    <div>
                      <p className="font-semibold text-foreground">Standard Processing</p>
                      <p className="text-muted-foreground">3-5 working days</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Processing times may vary based on application volume and 
                    immigration authority processing times.
                  </p>
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
                    "Visa approval is at the discretion of UAE immigration authorities",
                    "The 60-day visa allows a longer stay but has similar requirements to the 30-day visa",
                    "Consider travel insurance for the full duration of your extended stay",
                    "Do not book non-refundable flights until visa is approved",
                    "Tourist visas do not permit employment in the UAE",
                    "Plan your departure before visa expiry to avoid fines",
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
                  <DollarSign className="w-6 h-6 text-gold" />
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Pricing
                  </h3>
                </div>

                <div className="mb-6">
                  <p className="text-3xl font-bold text-gold">From AED 450</p>
                  <p className="text-sm text-muted-foreground">Service fee</p>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Processing</span>
                    <span>3-5 working days</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Visa validity</span>
                    <span>60 days stay</span>
                  </div>
                </div>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" className="w-full" size="lg">
                    <Phone className="w-4 h-4" />
                    Apply via WhatsApp
                  </Button>
                </a>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Government visa fees apply separately
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for Your Extended Stay?"
        description="Contact us via WhatsApp with your nationality and travel dates to get started."
        whatsappMessage={whatsappMessage}
      />
    </Layout>
  );
}
