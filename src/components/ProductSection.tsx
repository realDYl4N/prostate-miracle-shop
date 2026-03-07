import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "./ProductCard";
import { Loader2, PackageOpen } from "lucide-react";

export const ProductSection = () => {
  const { data: products, isLoading, error } = useProducts();

  return (
    <section id="product" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-accent font-medium mb-3">Our Product</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Premium Prostate Support
          </h2>
        </div>

        {isLoading && (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-destructive">
            <p>Failed to load products. Please try again later.</p>
          </div>
        )}

        {!isLoading && !error && products && products.length === 0 && (
          <div className="text-center py-20">
            <PackageOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">No products found yet.</p>
            <p className="text-sm text-muted-foreground mt-2">Products will appear here once added to the store.</p>
          </div>
        )}

        {products && products.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
