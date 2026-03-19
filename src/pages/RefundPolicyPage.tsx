import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";

const RefundPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">Refund Policy</h1>

          <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground font-body space-y-6">
            <p>
              At Prostate Miracle®, we stand behind the quality of our products. If you are not completely satisfied with your purchase, we offer a <strong className="text-foreground">60-Day Money-Back Guarantee</strong>.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">60-Day Money-Back Guarantee</h2>
            <p>
              If you are unsatisfied with your purchase for any reason, you may return the product within 60 days of the original purchase date for a full refund of the product price (less shipping and handling costs).
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">How to Request a Refund</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Contact our customer support team at <a href="mailto:support@prostatemiracle.com" className="text-primary hover:underline">support@prostatemiracle.com</a> or call <a href="tel:8779652140" className="text-primary hover:underline">(877) 965-2140</a>.</li>
              <li>Provide your order number and reason for the return.</li>
              <li>Ship the product (including empty bottles) back to the address provided by our support team.</li>
              <li>Once we receive and inspect the return, your refund will be processed within 5–10 business days.</li>
            </ol>

            <h2 className="text-xl font-display font-semibold text-foreground">Conditions</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Refund requests must be made within 60 days of the original purchase date.</li>
              <li>Products must be returned to qualify for a refund (empty bottles accepted).</li>
              <li>Shipping and handling charges are non-refundable.</li>
              <li>Return shipping costs are the responsibility of the customer.</li>
            </ul>

            <h2 className="text-xl font-display font-semibold text-foreground">Damaged or Defective Products</h2>
            <p>
              If you receive a damaged or defective product, please contact us immediately at <a href="mailto:support@prostatemiracle.com" className="text-primary hover:underline">support@prostatemiracle.com</a>. We will arrange a replacement or full refund at no additional cost to you.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Contact Us</h2>
            <p>
              If you have any questions about our refund policy, please reach out:<br />
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

export default RefundPolicyPage;
