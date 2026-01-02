import { motion } from "framer-motion";
import { Phone, Clock, DollarSign, Bus, MapPin, Check, Star } from "lucide-react";
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
  "Passport-sized photographs (white background, recent)",
  "UAE residence visa copy",
  "Emirates ID copy (front and back)",
  "Vaccination certificate (as per current requirements)",
  "Completed Umrah application form",
];

const included = [
  "Bus transportation from Dubai to Makkah and Madinah",
  "Hotel accommodation in Makkah (near Haram)",
  "Hotel accommodation in Madinah (near Prophet's Mosque)",
  "Umrah visa processing",
  "Transportation between cities",
  "Experienced Umrah guide",
  "Ziyarat (holy sites) tours",
];

const faqs = [
  {
    question: "What is included in the Umrah package by bus?",
    answer: "Our Umrah package includes bus transportation from Dubai, hotel accommodation in Makkah and Madinah near the holy mosques, Umrah visa processing, transportation between cities, an experienced guide, and Ziyarat tours to holy sites. Meals are typically not included unless specified."
  },
  {
    question: "How long is the Umrah trip by bus?",
    answer: "The duration varies by package, typically ranging from 5-10 days. This includes travel time and time spent in Makkah and Madinah. We offer various package durations to suit different schedules and preferences."
  },
  {
    question: "How long is the bus journey from Dubai to Makkah?",
    answer: "The bus journey from Dubai to Makkah takes approximately 14-18 hours, depending on border crossing times and traffic. The journey includes rest stops and is operated by experienced drivers."
  },
  {
    question: "What is the departure schedule for Umrah trips?",
    answer: "We organize Umrah trips throughout the year, with departures scheduled based on demand and seasonal factors. Contact us to check upcoming departure dates and availability."
  },
  {
    question: "Can I perform Umrah during Ramadan?",
    answer: "Yes, we offer special Ramadan Umrah packages. These are popular and book quickly, so early reservation is recommended. Ramadan packages may have different pricing and duration."
  },
  {
    question: "What class of hotels are provided?",
    answer: "We offer various hotel categories from economy to premium. Standard packages include 3-star hotels close to the Haram. Upgrades to 4-star or 5-star hotels are available at additional cost."
  },
  {
    question: "Are meals included in the package?",
    answer: "Standard packages typically include accommodation only. Some packages may include breakfast or selected meals. We can customize packages to include meal plans if preferred."
  },
  {
    question: "What vaccination requirements apply?",
    answer: "Vaccination requirements are set by Saudi authorities and may change. Currently, certain vaccinations are required for Umrah visas. We will provide the current requirements when you book."
  },
  {
    question: "Can women travel for Umrah without a mahram?",
    answer: "Saudi regulations regarding women traveling for Umrah have evolved. Currently, women over 45 may travel in organized groups without a mahram. Younger women may need to be accompanied. We can advise on current regulations."
  },
  {
    question: "What is the refund policy for Umrah packages?",
    answer: "Refund policies depend on the timing of cancellation and costs already incurred. Visa fees and advance hotel bookings may be non-refundable. Please review our full refund policy and discuss cancellation terms before booking."
  },
];

export default function UmrahPackages() {
  const whatsappMessage = "Hello Purple Royal Tourism, I am interested in your Umrah Package by Bus. Number of travelers: ___, Preferred travel dates: ___. Please provide package details and pricing.";
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Layout>
      <PageHero
        subtitle="Religious Travel"
        title="Umrah Packages by Bus"
        description="Embark on your spiritual journey with our affordable Umrah packages from Dubai. Comfortable bus transportation, quality accommodation, and professional guidance throughout."
        showCTA
        whatsappMessage={whatsappMessage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Umrah Packages by Bus" },
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
                  About Our Umrah Packages
                </h2>
                <div className="w-16 h-1 bg-gold rounded-full mb-6" />
                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground">
                    Purple Royal Tourism offers affordable Umrah packages from Dubai to the 
                    holy cities of Makkah and Madinah. Our packages are designed to make your 
                    spiritual journey comfortable and hassle-free, with all logistics handled 
                    by our experienced team.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    We provide bus transportation from Dubai, quality hotel accommodation near 
                    the holy mosques, visa processing, and guided Ziyarat tours. Our packages 
                    cater to individuals, families, and groups looking for an organized and 
                    affordable Umrah experience.
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
                  Package Includes
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

              {/* Journey Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Journey Highlights
                </h2>
                <div className="w-16 h-1 bg-gold rounded-full mb-6" />
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: MapPin, title: "Makkah", desc: "Perform Umrah at the Holy Kaaba" },
                    { icon: MapPin, title: "Madinah", desc: "Visit the Prophet's Mosque" },
                    { icon: Star, title: "Ziyarat", desc: "Guided tours to sacred sites" },
                    { icon: Bus, title: "Transport", desc: "Comfortable AC bus travel" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-5"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <item.icon className="w-5 h-5 text-gold" />
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
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
                    "Umrah visa requirements and fees are subject to Saudi regulations",
                    "Valid UAE residence visa required for application",
                    "Vaccination requirements must be met as per Saudi guidelines",
                    "Package prices may vary during Ramadan and peak seasons",
                    "Personal expenses, tips, and meals (unless specified) not included",
                    "Early booking recommended for preferred dates",
                  ].map((note, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-gold">•</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <Disclaimer text="Package prices and inclusions are subject to change based on season, availability, and Saudi regulations. Umrah visa approval is at the discretion of Saudi authorities. Purple Royal Tourism provides booking and coordination services." />

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
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Star className="w-6 h-6 text-gold" />
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Package Pricing
                    </h3>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-3xl font-bold text-gold">From AED 1,270</p>
                  <p className="text-sm text-muted-foreground">Per person</p>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Transport</span>
                    <span>AC Bus</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Accommodation</span>
                    <span>Near Haram</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Visa</span>
                    <span>Included</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Guide</span>
                    <span>Included</span>
                  </div>
                </div>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" className="w-full" size="lg">
                    <Phone className="w-4 h-4" />
                    Inquire via WhatsApp
                  </Button>
                </a>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Prices vary by package and season
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Begin Your Spiritual Journey"
        description="Contact us via WhatsApp with your preferred dates and number of travelers to book your Umrah package."
        whatsappMessage={whatsappMessage}
      />
    </Layout>
  );
}
