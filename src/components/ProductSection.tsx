import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import { useCartStore } from "@/stores/cartStore";
import { Button } from "@/components/ui/button";
import { Loader2, ShoppingCart, ShieldCheck, Star, Package, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import productBottle from "@/assets/product-bottle.png";

const pricingTiers = [
{
  label: "Six Bottles",
  badge: "Best Value",
  savings: "Save 29%",
  price: "$143.70",
  originalPrice: "$203.70",
  quantity: 6,
  variantOption: "Six Bottles",
},
{
  label: "Three Bottles",
  badge: "Most Popular",
  savings: "Save 20%",
  price: "$80.99",
  originalPrice: "$101.85",
  quantity: 3,
  variantOption: "Three Bottles",
},
{
  label: "Two Bottles",
  badge: null,
  savings: "Save 21%",
  price: "$53.99",
  originalPrice: "$67.90",
  quantity: 2,
  variantOption: "Two Bottles",
},
{
  label: "One Bottle",
  badge: null,
  savings: null,
  price: "$33.95",
  originalPrice: "$36.95",
  quantity: 1,
  variantOption: "One Bottle",
}];


const benefitTags = [
"Clinically-Studied Ingredients",
"Fewer Nighttime Bathroom Trips",
"Trusted by Men Since 2003"];


export const ProductSection = () => {
  const { data: products, isLoading: productsLoading } = useProducts();
  const addItem = useCartStore((state) => state.addItem);
  const cartLoading = useCartStore((state) => state.isLoading);
  const cartItems = useCartStore((state) => state.items);
  const setDrawerOpen = useCartStore((state) => state.setDrawerOpen);
  const [selectedTier, setSelectedTier] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [justAdded, setJustAdded] = useState(false);

  const product = products?.[0];
  const variant = product?.node.variants.edges[0]?.node;
  const images = product?.node.images.edges || [];

  const handleAddToCart = async () => {
    if (!product) return;
    const tier = pricingTiers[selectedTier];
    
    // Find the matching variant by option title, fallback to first variant
    const matchedVariant = tier.variantOption
      ? product.node.variants.edges.find(v => v.node.title === tier.variantOption)?.node || variant
      : variant;
    
    if (!matchedVariant) return;
    
    await addItem({
      product,
      variantId: matchedVariant.id,
      variantTitle: matchedVariant.title,
      price: matchedVariant.price,
      quantity: 1,
      selectedOptions: matchedVariant.selectedOptions || []
    });
    toast.success("Added to cart", {
      description: `${tier.label} — Prostate Miracle`,
      position: "top-center"
    });
    setJustAdded(true);
    setDrawerOpen(true);
  };

  // Reset justAdded when cart becomes empty
  const hasItems = cartItems.length > 0;
  
  const handleViewCart = () => {
    setDrawerOpen(true);
  };

  return (
    <section id="product" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
          {/* Left: Product Images */}
          <div className="md:sticky md:top-24 space-y-3">
            <div className="bg-muted/30 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden aspect-square max-h-[500px] mx-auto w-full">
              <img
                src={images[selectedImage]?.node.url || productBottle}
                alt={images[selectedImage]?.node.altText || "Prostate Miracle Advanced Formula"}
                className="w-full h-full object-contain drop-shadow-xl" />
              
              {images.length > 1 &&
              <>
                  <button
                  onClick={() => setSelectedImage((prev) => prev === 0 ? images.length - 1 : prev - 1)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-background transition-colors">
                  
                    <ChevronLeft className="h-4 w-4 text-foreground" />
                  </button>
                  <button
                  onClick={() => setSelectedImage((prev) => prev === images.length - 1 ? 0 : prev + 1)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-background transition-colors">
                  
                    <ChevronRight className="h-4 w-4 text-foreground" />
                  </button>
                </>
              }
            </div>
            {images.length > 1 &&
            <div className="grid grid-cols-5 gap-2">
                {images.map((img, i) =>
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                selectedImage === i ?
                "border-primary ring-1 ring-primary" :
                "border-border hover:border-primary/40"}`
                }>
                
                    <img
                  src={img.node.url}
                  alt={img.node.altText || `Product image ${i + 1}`}
                  className="w-full h-full object-contain bg-muted/30" />
                
                  </button>
              )}
              </div>
            }
          </div>

          {/* Right: Product Details */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Prostate Miracle Advanced Formula

            </h2>

            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Built with beta-sitosterol and a targeted blend of plant-based ingredients backed by real clinical research. Every vegetable capsule is free from fillers, artificial additives, and the unnecessary junk most brands hide behind proprietary labels. Just clean, direct prostate support for fewer nighttime trips and better daily comfort.
            </p>

            {/* Benefit Tags */}
            <p className="text-sm font-semibold text-primary mb-6">
              {benefitTags.join(" | ")}
            </p>

            {/* Urgency */}
            <div className="text-center mb-4">
              <span className="text-sm font-bold text-destructive">60-Day Money-Back Guarantee — Try It Risk-Free</span>
            </div>

            {/* Pricing Tiers */}
            <div className="space-y-3 mb-6">
              {pricingTiers.map((tier, i) =>
              <button
                key={i}
                onClick={() => { setSelectedTier(i); setJustAdded(false); }}
                className={`w-full relative rounded-xl border-2 p-4 text-left transition-all ${
                selectedTier === i ?
                "border-primary bg-primary/5" :
                "border-border hover:border-primary/30"}`
                }>
                
                  {tier.badge &&
                <span className="absolute -top-2.5 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-0.5 rounded-full">
                      {tier.badge}
                    </span>
                }
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedTier === i ?
                      "border-primary" :
                      "border-muted-foreground/30"}`
                      }>
                      
                        {selectedTier === i &&
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                      }
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-foreground text-sm">
                            {tier.label}
                          </span>
                          {tier.savings &&
                        <span className="bg-accent/20 text-accent-foreground text-xs font-bold px-2 py-0.5 rounded">
                              {tier.savings}
                            </span>
                        }
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-foreground text-lg">{tier.price}</span>
                      {tier.originalPrice &&
                    <span className="text-sm text-muted-foreground line-through ml-2">
                          {tier.originalPrice}
                        </span>
                    }
                    </div>
                  </div>
                </button>
              )}
            </div>

            {/* Add to Cart */}
            {justAdded && hasItems ? (
              <Button
                size="lg"
                onClick={handleViewCart}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl py-7 text-lg font-bold shadow-lg">
                <ShoppingCart className="h-5 w-5 mr-2" /> View Cart & Checkout
              </Button>
            ) : (
              <Button
                size="lg"
                onClick={handleAddToCart}
                disabled={cartLoading || !productsLoading && !variant}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-7 text-lg font-bold shadow-lg">
                {cartLoading ?
                  <Loader2 className="h-5 w-5 animate-spin" /> :
                  <><ShoppingCart className="h-5 w-5 mr-2" /> Add To Cart</>
                }
              </Button>
            )}

            {productsLoading &&
            <div className="flex justify-center py-4">
                <Loader2 className="h-5 w-5 animate-spin text-primary" />
              </div>
            }

            {/* Guarantee Banner */}
            <div className="mt-6 bg-primary rounded-xl p-5 flex items-start gap-4">
              <ShieldCheck className="h-10 w-10 text-primary-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-display font-bold text-primary-foreground text-lg">
                  Try Now Risk-Free for 60 Days
                </p>
                <p className="text-primary-foreground/80 text-sm font-body">
                  We want you to shop with confidence. Every order is backed by a 60-day satisfaction guarantee. If you're not happy, we'll refund you, no questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};