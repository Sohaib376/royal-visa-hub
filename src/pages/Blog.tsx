import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { CTASection } from "@/components/common/CTASection";

const blogPosts = [
  {
    title: "Complete Guide to Schengen Visa for UAE Residents",
    excerpt: "Everything you need to know about applying for a Schengen visa while living in the UAE. From document requirements to interview tips.",
    date: "Coming Soon",
    readTime: "10 min read",
    category: "Schengen Visa",
    slug: "#",
  },
  {
    title: "USA Visa Interview Tips: How to Prepare",
    excerpt: "Practical advice for preparing for your US visa interview. Learn what to expect, common questions, and how to present your case confidently.",
    date: "Coming Soon",
    readTime: "8 min read",
    category: "USA Visa",
    slug: "#",
  },
  {
    title: "UAE Visa Renewal: Bus vs Flight - Which to Choose?",
    excerpt: "A detailed comparison of visa renewal options through bus and flight border runs. Costs, duration, and what to expect with each option.",
    date: "Coming Soon",
    readTime: "6 min read",
    category: "UAE Visa",
    slug: "#",
  },
  {
    title: "Umrah Preparation Checklist: Everything You Need",
    excerpt: "A comprehensive guide to preparing for your Umrah journey from Dubai. Packing list, documents, and spiritual preparation tips.",
    date: "Coming Soon",
    readTime: "12 min read",
    category: "Umrah",
    slug: "#",
  },
  {
    title: "Understanding Canada Visitor Visa Requirements",
    excerpt: "A step-by-step guide to the Canadian visitor visa application process for UAE residents. Document requirements and processing times.",
    date: "Coming Soon",
    readTime: "7 min read",
    category: "Canada Visa",
    slug: "#",
  },
  {
    title: "Common Visa Application Mistakes to Avoid",
    excerpt: "Learn about the most common errors that lead to visa rejections and how to ensure your application is complete and accurate.",
    date: "Coming Soon",
    readTime: "5 min read",
    category: "Visa Tips",
    slug: "#",
  },
];

export default function Blog() {
  return (
    <Layout>
      <PageHero
        subtitle="Blog & Insights"
        title="Travel Guides & Visa Information"
        description="Expert insights, travel tips, and visa application guides to help you prepare for your journey."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-gold/30 rounded-2xl p-8 mb-12 text-center"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Coming Soon
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are preparing comprehensive guides and insights to help you navigate 
              the visa application process. Check back soon for valuable travel information.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-gold/50 transition-colors group"
              >
                <div className="h-48 bg-gradient-card flex items-center justify-center">
                  <span className="text-gold/50 font-display text-lg">
                    Article Preview
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-semibold text-gold uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="text-sm font-medium text-gold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Visa Assistance Now?"
        description="While our blog content is being prepared, our team is available to answer all your visa questions directly."
      />
    </Layout>
  );
}
