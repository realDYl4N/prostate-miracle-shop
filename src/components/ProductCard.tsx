import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Loader2, ShoppingCart } from "lucide-react";
import { useCartStore, type ShopifyProduct } from "@/stores/cartStore";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);
  const { node } = product;
  const image = node.images.edges[0]?.node;
  const variant = node.variants.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Added to cart", { description: node.title, position: "top-center" });
  };

  return (
    <Link to={`/product/${node.handle}`} className="group block">
      <div className="bg-card rounded-xl overflow-hidden border border-border/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-square bg-muted overflow-hidden">
          {image ? (
            <img src={image.url} alt={image.altText || node.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">No image</div>
          )}
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">{node.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 font-body">{node.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary font-display">
              ${parseFloat(price.amount).toFixed(2)}
            </span>
            <Button
              size="sm"
              onClick={handleAddToCart}
              disabled={isLoading || !variant?.availableForSale}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><ShoppingCart className="h-4 w-4 mr-1" /> Add</>}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
