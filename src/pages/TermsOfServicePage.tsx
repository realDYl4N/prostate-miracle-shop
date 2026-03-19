import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground font-body space-y-6">
            <p><em>Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</em></p>

            <p>
              Welcome to Prostate Miracle®. By accessing or using our website and purchasing our products, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Use of This Website</h2>
            <p>
              You agree to use this website for lawful purposes only. You must not use it in any way that may cause damage, impair availability, or infringe upon the rights of others. You must be at least 18 years old to make a purchase.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Products & Pricing</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>All product descriptions and pricing are subject to change without notice.</li>
              <li>We reserve the right to limit quantities or refuse any order at our discretion.</li>
              <li>Prices are listed in US dollars unless otherwise stated.</li>
            </ul>

            <h2 className="text-xl font-display font-semibold text-foreground">Orders & Payment</h2>
            <p>
              By placing an order, you represent that the information you provide is accurate and that you are authorized to use the payment method submitted. We reserve the right to cancel orders that appear fraudulent or unauthorized.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Health Disclaimer</h2>
            <p>
              Our products are dietary supplements and are not intended to diagnose, treat, cure, or prevent any disease. Statements on this website have not been evaluated by the Food and Drug Administration. Consult your physician before starting any supplement regimen, especially if you have a medical condition or take prescription medications.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Intellectual Property</h2>
            <p>
              All content on this website — including text, images, logos, and trademarks — is the property of Prostate Miracle® and its licensors. You may not reproduce, distribute, or create derivative works without our prior written consent.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Prostate Miracle® shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or products. Our total liability shall not exceed the amount you paid for the product in question.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the United States. Any disputes shall be resolved in the appropriate courts of the state in which our business operates.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of the website constitutes acceptance of the revised terms.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Contact Us</h2>
            <p>
              If you have questions about these terms, please contact us:<br />
              Email: <a href="mailto:support@prostatemiracle.com" className="text-primary hover:underline">support@prostatemiracle.com</a><br />
              Phone: <a href="tel:8779652140" className="text-primary hover:underline">(877) 965-2140</a>
            </p>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default TermsOfServicePage;
