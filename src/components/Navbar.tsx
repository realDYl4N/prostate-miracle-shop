import { CartDrawer } from "./CartDrawer";
import { useLocation } from "react-router-dom";
import { Phone, UserRound } from "lucide-react";
import nhsLogo from "@/assets/nhs-logo.png";

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isProduct = location.pathname === "/prostate-miracle";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-2">
          
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            PROSTATE MIRACLE
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
          <CartDrawer />
        </div>
      </div>
    </header>);

};