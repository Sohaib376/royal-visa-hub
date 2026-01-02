import { motion } from "framer-motion";
import { 
  Shield, 
  Users, 
  FileCheck, 
  MessageSquare, 
  CheckCircle,
  Target,
  Eye,
  Heart
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CTASection } from "@/components/common/CTASection";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with complete transparency in our pricing, processes, and communication. No hidden fees, no false promises.",
  },
  {
    icon: FileCheck,
    title: "Accuracy",
    description: "Our team ensures every document is thoroughly reviewed and correctly prepared to maximize the chances of successful processing.",
  },
  {
    icon: Users,
    title: "Client-First",
    description: "Your travel goals are our priority. We provide personalized guidance tailored to your specific situation and requirements.",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description: "We maintain clear, consistent communication throughout the process, keeping you informed at every stage.",
  },
];

const milestones = [
  {
    title: "Dubai Registered",
    description: "Licensed tourism company operating in Dubai, UAE",
  },
  {
    title: "Professional Team",
    description: "Experienced visa consultants with in-depth knowledge",
  },
  {
    title: "Comprehensive Services",
    description: "UAE visas, renewals, Umrah packages, and global visas",
  },
  {
    title: "WhatsApp Support",
    description: "Quick, accessible communication 7 days a week",
  },
];

export default function About() {
  return (
    <Layout>
      <PageHero
        subtitle="About Us"
        title="Your Trusted Dubai-Based Visa & Travel Consultancy"
        description="Purple Royal Tourism is committed to providing professional, transparent, and reliable visa and travel services from the heart of Dubai."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                Who We Are
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Professional Visa Consultancy Built on Trust
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Purple Royal Tourism is a Dubai-registered travel and visa consultancy 
                  dedicated to helping individuals and families navigate the complexities 
                  of visa applications and travel documentation.
                </p>
                <p>
                  Based in Al Mankhool, Dubai, we operate with a commitment to transparency, 
                  accuracy, and professional service. Our team brings together expertise in 
                  UAE immigration processes, global visa applications, and religious travel 
                  arrangements.
                </p>
                <p>
                  We understand that visa processes can be overwhelming. That is why we focus 
                  on clear communication, accurate document preparation, and honest guidance 
                  throughout your journey.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {milestones.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-colors"
                >
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                <Target className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To provide professional, transparent, and accessible visa and travel 
                consultancy services that simplify the journey for our clients, ensuring 
                accurate documentation and clear guidance every step of the way.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                <Eye className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To be recognized as a trusted and reliable travel partner for individuals 
                and families across the UAE, known for our integrity, expertise, and 
                commitment to client satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Promise
              </h3>
              <p className="text-muted-foreground">
                We commit to honest pricing, accurate document preparation, clear communication, 
                and professional service. We provide documentation assistance and never 
                guarantee visa outcomes that are beyond our control.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Our Values"
            title="Principles That Guide Our Service"
            description="Every interaction with Purple Royal Tourism is governed by these core values."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                Our Location
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Conveniently Located in Dubai
              </h2>
              <p className="text-muted-foreground mb-8">
                Visit us at our Dubai office for in-person consultations.
              </p>
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <p className="text-lg text-foreground mb-2">
                  CBD Bank Building
                </p>
                <p className="text-muted-foreground">
                  Sharaf DG Metro Station Exit 1<br />
                  Office No 12, 3rd Floor<br />
                  Al Mankhool, Dubai<br />
                  United Arab Emirates
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
