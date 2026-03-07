import { CartDrawer } from "./CartDrawer";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-tight text-primary">
            Prostate Miracle
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#product" className="hover:text-foreground transition-colors">Product</a>
          <a href="#benefits" className="hover:text-foreground transition-colors">Benefits</a>
          <a href="#ingredients" className="hover:text-foreground transition-colors">Ingredients</a>
        </nav>
        <CartDrawer />
      </div>
    </header>
  );
};
