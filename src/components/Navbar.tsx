import { Button } from "@/components/ui/button";
import { CartDrawer } from "./CartDrawer";
import { useLocation } from "react-router-dom";
import { Phone, UserRound } from "lucide-react";
import nhsLogo from "@/assets/nhs-logo.png";
import nhsLogoFull from "@/assets/nhs-logo-full.png";

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isProduct = location.pathname === "/prostate-miracle";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="https://natureshealthsupply.com/" className="flex flex-col items-center gap-0">
          <div className="h-8 overflow-hidden">
            <img src={nhsLogoFull} alt="NHS Global Distributors" className="h-11 w-auto -mt-0.5 object-contain" />
          </div>
          <span className="font-display text-[10px] font-bold tracking-widest text-foreground leading-none">
            NATURE'S HEALTH SUPPLY
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider h-full">
          <a
            href="/"
            className={`h-full flex items-center border-b-[3px] transition-colors ${
            isHome ? "text-foreground border-primary" : "text-muted-foreground border-transparent hover:border-primary hover:text-foreground"}`
            }>
            
            Home
          </a>
          <a
            href="/prostate-miracle"
            className={`h-full flex items-center border-b-[3px] transition-colors ${
            isProduct ? "text-foreground border-primary" : "text-muted-foreground border-transparent hover:border-primary hover:text-foreground"}`
            }>
            
            Prostate Miracle
          </a>
          <a
            href="/the-science"
            className={`h-full flex items-center border-b-[3px] transition-colors ${
              location.pathname === "/the-science" ? "text-foreground border-primary" : "text-muted-foreground border-transparent hover:border-primary hover:text-foreground"
            }`}>
            The Science
          </a>
          <a
            href="/track-order"
            className={`h-full flex items-center border-b-[3px] transition-colors ${
              location.pathname === "/track-order" ? "text-foreground border-primary" : "text-muted-foreground border-transparent hover:border-primary hover:text-foreground"
            }`}>
            Track Order
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="tel:8779652140" className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
            <Phone className="h-4 w-4" />
            <span>Call Now: (877)-965-2140</span>
          </a>
          <a href="https://shopify.com/65829666878/account" target="_blank" rel="noopener noreferrer" aria-label="Log in">
            <Button variant="outline" size="icon" className="border-primary/20 hover:border-primary/40" aria-label="Log in">
              <UserRound className="h-5 w-5" />
            </Button>
          </a>
          <CartDrawer />
        </div>
      </div>
    </header>);

};