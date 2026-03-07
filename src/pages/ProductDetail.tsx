import { useParams } from "react-router-dom";
import { useProductByHandle } from "@/hooks/useProducts";
import { useCartStore } from "@/stores/cartStore";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { Loader2, ShoppingCart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const { data: product, isLoading } = useProductByHandle(handle || "");
  const addItem = useCartStore(state => state.addItem);
  const cartLoading = useCartStore(state => state.isLoading);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Product not found.</p>
      </div>
    );
  }

  const { node } = product;
  const images = node.images.edges;
  const variants = node.variants.edges;
  const selectedVariant = variants[selectedVariantIdx]?.node;

  const handleAddToCart = async () => {
    if (!selectedVariant) return;
    await addItem({
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || [],
    });
    toast.success("Added to cart", { description: node.title, position: "top-center" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to store
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              {images[0] && (
                <div className="aspect-square bg-muted rounded-xl overflow-hidden">
                  <img src={images[0].node.url} alt={images[0].node.altText || node.title} className="w-full h-full object-cover" />
                </div>
              )}
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {images.slice(1).map((img, i) => (
                    <div key={i} className="aspect-square bg-muted rounded-lg overflow-hidden">
                      <img src={img.node.url} alt={img.node.altText || ""} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">{node.title}</h1>
              <p className="text-3xl font-display font-bold text-primary mb-6">
                ${parseFloat(selectedVariant?.price.amount || node.priceRange.minVariantPrice.amount).toFixed(2)}
                <span className="text-sm text-muted-foreground ml-2 font-body font-normal">{selectedVariant?.price.currencyCode}</span>
              </p>
              {variants.length > 1 && (
                <div className="mb-6">
                  <p className="text-sm font-medium mb-2">Variant</p>
                  <div className="flex flex-wrap gap-2">
                    {variants.map((v, i) => (
                      <button
                        key={v.node.id}
                        onClick={() => setSelectedVariantIdx(i)}
                        className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                          i === selectedVariantIdx
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border text-foreground hover:border-primary/50"
                        }`}
                      >
                        {v.node.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <p className="text-muted-foreground font-body leading-relaxed mb-8">{node.description}</p>
              <Button
                size="lg"
                onClick={handleAddToCart}
                disabled={cartLoading || !selectedVariant?.availableForSale}
                className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 py-6 text-base font-semibold"
              >
                {cartLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <><ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart</>}
              </Button>
              {selectedVariant && !selectedVariant.availableForSale && (
                <p className="text-destructive text-sm mt-3">Currently out of stock</p>
              )}
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default ProductDetail;
