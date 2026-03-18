import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package } from "lucide-react";

const TrackOrderPage = () => {
  const [orderNumber, setOrderNumber] = useState("");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderNumber.trim()) {
      window.open(
        `https://parcelsapp.com/en/tracking/${encodeURIComponent(orderNumber.trim())}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <div className="pt-16">
        <div className="bg-primary py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground">
              Track Order
            </h1>
          </div>
        </div>
      </div>

      {/* Track Form */}
      <div className="flex-1 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <Package className="h-12 w-12 text-primary mx-auto" />
          <p className="text-muted-foreground font-body text-base">
            Enter your order number to track your shipment.
          </p>
          <form onSubmit={handleTrack} className="flex gap-0 max-w-md mx-auto">
            <Input
              type="text"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="Order number"
              className="rounded-r-none h-12 text-base"
              required
            />
            <Button
              type="submit"
              className="rounded-l-none h-12 px-8 font-display font-bold uppercase tracking-wider"
            >
              Track
            </Button>
          </form>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default TrackOrderPage;
