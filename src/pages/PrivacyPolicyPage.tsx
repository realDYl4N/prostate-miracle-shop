import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground font-body space-y-6">
            <p><em>Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</em></p>

            <p>
              Prostate Miracle® ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Personal Information:</strong> Name, email address, mailing address, phone number, and payment information when you place an order.</li>
              <li><strong className="text-foreground">Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, and other diagnostic data.</li>
              <li><strong className="text-foreground">Cookies:</strong> We use cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic.</li>
            </ul>

            <h2 className="text-xl font-display font-semibold text-foreground">How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Send order confirmations, shipping updates, and customer support communications</li>
              <li>Send promotional emails and newsletters (you may opt out at any time)</li>
              <li>Improve our website, products, and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-xl font-display font-semibold text-foreground">Sharing Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, processing payments, and delivering orders — only to the extent necessary to perform those services.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access, update, or delete your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of the data we hold about you</li>
            </ul>

            <h2 className="text-xl font-display font-semibold text-foreground">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us:<br />
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

export default PrivacyPolicyPage;
