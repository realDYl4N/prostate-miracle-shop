import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import { useCartStore } from "@/stores/cartStore";
import { Button } from "@/components/ui/button";
import { Loader2, ShoppingCart, ShieldCheck, Star, Truck, Package, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import productBottle from "@/assets/product-bottle.png";

const pricingTiers = [
  {
    label: "Buy 3, Get 2 Free",
    badge: "Best Value",
    savings: "Save 46%",
    price: "$80.99",
    originalPrice: "$149.95",
    quantity: 5,
    freeShipping: true,
  },
  {
    label: "Buy 2, Get 1 Free",
    badge: "Most Popular",
    savings: "Save 40%",
    price: "$53.99",
    originalPrice: "$89.97",
    quantity: 3,
    freeShipping: true,
  },
  {
    label: "Buy One",
    badge: null,
    savings: null,
    price: "$26.99",
    originalPrice: "$29.99",
    quantity: 1,
    freeShipping: false,
  },
];

const benefitTags = [
  "Supports Healthy Urinary Flow",
  "Promotes Prostate Comfort",
  "Natural Ingredients",
  "Gentle Vegetable Capsules",
  "Clinically-Studied Formula",
];

export const ProductSection = () => {
  const { data: products, isLoading: productsLoading } = useProducts();
  const addItem = useCartStore((state) => state.addItem);
  const cartLoading = useCartStore((state) => state.isLoading);
  const [selectedTier, setSelectedTier] = useState(1);

  const product = products?.[0];
  const variant = product?.node.variants.edges[0]?.node;

  const handleAddToCart = async () => {
    if (!product || !variant) return;
    const tier = pricingTiers[selectedTier];
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: tier.quantity,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Added to cart", {
      description: `${tier.quantity}x Prostate Miracle`,
      position: "top-center",
    });
  };

  return (
    <section id="product" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
          {/* Left: Product Image */}
          <div className="bg-muted/30 rounded-2xl p-8 flex items-center justify-center sticky top-24">
            <img
              src={product?.node.images.edges[0]?.node.url || productBottle}
              alt="Prostate Miracle Advanced Formula"
              className="w-full max-w-sm h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Right: Product Details */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Prostate Miracle Advanced Formula
            </h2>

            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Clinically-inspired, naturally-sourced ingredients in easy-to-take vegetable capsules, designed to support your prostate health and daily comfort without harsh additives or fillers.
            </p>

            {/* Benefit Tags */}
            <p className="text-sm font-semibold text-primary mb-6">
              {benefitTags.join(" | ")}
            </p>

            {/* Urgency */}
            <div className="text-center mb-4">
              <span className="text-sm font-bold text-destructive">Low Stock Available!</span>
            </div>

            {/* Pricing Tiers */}
            <div className="space-y-3 mb-6">
              {pricingTiers.map((tier, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedTier(i)}
                  className={`w-full relative rounded-xl border-2 p-4 text-left transition-all ${
                    selectedTier === i
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  {tier.badge && (
                    <span className="absolute -top-2.5 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-0.5 rounded-full">
                      {tier.badge}
                    </span>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedTier === i
                            ? "border-primary"
                            : "border-muted-foreground/30"
                        }`}
                      >
                        {selectedTier === i && (
                          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-foreground text-sm">
                            {tier.label}
                          </span>
                          {tier.savings && (
                            <span className="bg-accent/20 text-accent-foreground text-xs font-bold px-2 py-0.5 rounded">
                              {tier.savings}
                            </span>
                          )}
                        </div>
                        {tier.freeShipping && (
                          <span className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                            <Truck className="h-3 w-3" /> Free Shipping
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-foreground text-lg">{tier.price}</span>
                      {tier.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          {tier.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Add to Cart */}
            <Button
              size="lg"
              onClick={handleAddToCart}
              disabled={cartLoading || (!productsLoading && !variant)}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-7 text-lg font-bold shadow-lg"
            >
              {cartLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <ShoppingCart className="h-5 w-5 mr-2" /> Add To Cart
                </>
              )}
            </Button>

            {productsLoading && (
              <div className="flex justify-center py-4">
                <Loader2 className="h-5 w-5 animate-spin text-primary" />
              </div>
            )}

            {/* Guarantee Banner */}
            <div className="mt-6 bg-primary rounded-xl p-5 flex items-start gap-4">
              <ShieldCheck className="h-10 w-10 text-primary-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-display font-bold text-primary-foreground text-lg">
                  Try Now Risk-Free for 90 Days*
                </p>
                <p className="text-primary-foreground/80 text-sm font-body">
                  We want you to shop with confidence. Every order is backed by a 90-day satisfaction guarantee. If you're not happy, we'll refund you — no questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
