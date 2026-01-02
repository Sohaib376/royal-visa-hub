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
];

const faqs = [
  {
    question: "Who can apply for a UAE 30-day tourist visa?",
    answer: "Citizens of various countries who do not qualify for visa-on-arrival can apply for a UAE tourist visa. Eligibility depends on nationality. Contact us with your passport details to confirm your eligibility."
  },
  {
    question: "How long does the 30-day tourist visa processing take?",
    answer: "Standard processing typically takes 3-5 working days. Express processing may be available for urgent cases, subject to additional fees and availability."
  },
  {
    question: "What is the validity of the 30-day tourist visa?",
    answer: "The visa is typically valid for 60 days from the date of issuance for entry. Once you enter the UAE, you can stay for up to 30 days from the date of entry."
  },
  {
    question: "Can I extend my 30-day tourist visa?",
    answer: "Extension options depend on the type of visa issued. Some visas are extendable within the UAE, while others require you to exit and re-enter. Contact us before your visa expires to discuss options."
  },
  {
    question: "What if my visa application is rejected?",
    answer: "Visa rejections can occur for various reasons. Our service fee is non-refundable as the work has been completed, but we can advise on possible reasons and whether reapplication is advisable."
  },
  {
    question: "Can I work on a tourist visa?",
    answer: "No, tourist visas do not permit employment in the UAE. Working on a tourist visa is illegal and can result in penalties, deportation, and future visa bans."
  },
  {
    question: "Do I need travel insurance for a UAE tourist visa?",
    answer: "While travel insurance is not always mandatory for visa approval, it is highly recommended. Some visa types may require proof of travel insurance. We recommend obtaining coverage for your trip."
  },
  {
    question: "Can I apply for a tourist visa if I have been to the UAE before?",
    answer: "Yes, previous travel to the UAE generally does not prevent future visa applications. However, if you had any immigration issues during previous visits, this may affect your application."
  },
  {
    question: "What happens if I overstay my tourist visa?",
    answer: "Overstaying a UAE visa results in daily fines and potential immigration consequences. It is important to exit before your visa expires or arrange for an extension or renewal if eligible."
  },
  {
    question: "How do I receive my approved visa?",
    answer: "Approved visas are sent electronically via email as a PDF document. You should print a copy to present at immigration upon arrival in the UAE."
  },
];

export default function UAETouristVisa30Days() {
  const whatsappMessage = "Hello Purple Royal Tourism, I would like to apply for a UAE Tourist Visa (30 Days). My nationality is: ___, and my intended travel dates are: ___. Please advise on the process and requirements.";
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Layout>
      <PageHero
        subtitle="UAE Visa Services"
        title="UAE Tourist Visa - 30 Days"
        description="Short-term tourist visa for visitors looking to explore the UAE. Ideal for tourism, business meetings, family visits, and short holidays."
        showCTA
        whatsappMessage={whatsappMessage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "UAE Tourist Visa - 30 Days" },
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
                    The UAE 30-day tourist visa is designed for visitors who wish to explore the 
                    United Arab Emirates for a short period. Whether you are visiting for tourism, 
                    attending business meetings, visiting family and friends, or simply enjoying 
                    a holiday, this visa allows you to stay in the UAE for up to 30 days from 
                    your date of entry.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Purple Royal Tourism provides professional documentation assistance to help 
                    ensure your application is complete and accurate. Our team reviews your 
                    documents, prepares your application, and guides you through the process.
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
                    { icon: Plane, label: "Tourists visiting the UAE" },
                    { icon: Users, label: "Business travelers for meetings" },
                    { icon: Users, label: "Family and friends visiting residents" },
                    { icon: Plane, label: "Transit visitors staying in UAE" },
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
                    Processing times are estimates and may vary based on application volume 
                    and immigration authority processing. Express processing may be available 
                    for urgent cases.
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
                    "Ensure your passport has at least 6 months validity from travel date",
                    "Provide clear, high-quality document scans for faster processing",
                    "Do not book non-refundable flights until visa is approved",
                    "Tourist visas do not permit employment in the UAE",
                    "Overstaying results in fines and potential immigration issues",
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
                  <p className="text-3xl font-bold text-gold">From AED 250</p>
                  <p className="text-sm text-muted-foreground">Service fee</p>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Processing</span>
                    <span>3-5 working days</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Visa validity</span>
                    <span>30 days stay</span>
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
        title="Ready to Apply?"
        description="Contact us via WhatsApp with your nationality and travel dates to get started."
        whatsappMessage={whatsappMessage}
      />
    </Layout>
  );
}
