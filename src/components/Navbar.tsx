import { CartDrawer } from "./CartDrawer";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            PROSTATE MIRACLE
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider h-full">
          <a href="/" className="text-foreground hover:text-foreground transition-colors h-full flex items-center border-b-[3px] border-transparent hover:border-primary">Home</a>
          <a href="#product" className="text-foreground hover:text-foreground transition-colors h-full flex items-center border-b-[3px] border-primary">Prostate Miracle</a>
          <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors h-full flex items-center border-b-[3px] border-transparent hover:border-primary">Benefits</a>
        </nav>
        <CartDrawer />
      </div>
    </header>
  );
};
