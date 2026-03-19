import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";

const ShippingPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">Shipping Policy</h1>

          <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground font-body space-y-6">
            <p>
              We want you to receive your Prostate Miracle® order as quickly and conveniently as possible. Below you'll find our shipping details.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Processing Time</h2>
            <p>
              Orders are typically processed within <strong className="text-foreground">1–2 business days</strong> after payment is confirmed. Orders placed on weekends or holidays will be processed the next business day.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Domestic Shipping (United States)</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Standard Shipping:</strong> 5–7 business days — Free on orders over $50</li>
              <li><strong className="text-foreground">Expedited Shipping:</strong> 2–3 business days — Available at checkout</li>
              <li><strong className="text-foreground">Priority/Overnight:</strong> 1–2 business days — Available at checkout</li>
            </ul>

            <h2 className="text-xl font-display font-semibold text-foreground">International Shipping</h2>
            <p>
              We ship internationally to select countries. International orders typically arrive within <strong className="text-foreground">10–21 business days</strong> depending on location. Customs duties, taxes, and import fees are the responsibility of the recipient.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Order Tracking</h2>
            <p>
              Once your order ships, you will receive a confirmation email with a tracking number. You can also track your order on our <a href="/track-order" className="text-primary hover:underline">Track Order</a> page.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Lost or Damaged Packages</h2>
            <p>
              If your package is lost or arrives damaged, please contact us within 7 days of the expected delivery date. We will work with the carrier to resolve the issue and, if necessary, send a replacement at no additional cost.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">P.O. Boxes & APO/FPO</h2>
            <p>
              We ship to P.O. Boxes and APO/FPO addresses via USPS. Delivery times may vary.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Contact Us</h2>
            <p>
              For shipping questions, please reach out:<br />
              Email: <a href="mailto:hello@prostatemiracle.com" className="text-primary hover:underline">hello@prostatemiracle.com</a><br />
              Phone: <a href="tel:8779652140" className="text-primary hover:underline">(877) 965-2140</a>
            </p>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default ShippingPolicyPage;
