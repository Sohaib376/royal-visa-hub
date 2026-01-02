import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <PageHero subtitle="Legal" title="Privacy Policy" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <section className="py-20"><div className="container mx-auto px-4 max-w-4xl prose prose-invert">
        <p className="text-muted-foreground">Last updated: January 2025</p>
        <h2 className="font-display text-xl text-foreground mt-8">Information We Collect</h2>
        <p className="text-muted-foreground">We collect personal information you provide when using our services, including name, contact details, passport information, and travel documents necessary for visa processing.</p>
        <h2 className="font-display text-xl text-foreground mt-8">How We Use Your Information</h2>
        <p className="text-muted-foreground">Your information is used solely for processing visa applications and providing our travel services. We do not sell or share your data with third parties except as required for visa processing.</p>
        <h2 className="font-display text-xl text-foreground mt-8">Data Security</h2>
        <p className="text-muted-foreground">We implement appropriate security measures to protect your personal information against unauthorized access or disclosure.</p>
        <h2 className="font-display text-xl text-foreground mt-8">Contact</h2>
        <p className="text-muted-foreground">For privacy inquiries, contact info@purpleroyaltourism.com</p>
      </div></section>
    </Layout>
  );
}
