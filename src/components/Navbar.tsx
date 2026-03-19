import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "./CartDrawer";
import { useLocation } from "react-router-dom";
import { Phone, UserRound, Menu, X } from "lucide-react";
import nhsLogoFull from "@/assets/nhs-logo-full.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/prostate-miracle", label: "Prostate Miracle" },
  { href: "/the-science", label: "The Science" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/track-order", label: "Track Order" },
];

export const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <a href="https://natureshealthsupply.com/" className="flex flex-col items-center gap-0">
          <div className="h-7 md:h-8 overflow-hidden">
            <img src={nhsLogoFull} alt="NHS Global Distributors" className="h-10 md:h-11 w-auto -mt-0.5 object-contain" />
          </div>
          <span className="font-display text-[9px] md:text-[10px] font-bold tracking-widest text-foreground leading-none">
            NATURE'S HEALTH SUPPLY
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider h-full">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`h-full flex items-center border-b-[3px] transition-colors ${
                location.pathname === link.href
                  ? "text-foreground border-primary"
                  : "text-muted-foreground border-transparent hover:border-primary hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <a href="tel:8779652140" className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
            <Phone className="h-4 w-4" />
            <span>Call Now: (877)-965-2140</span>
          </a>
          <a href="https://shopify.com/65829666878/account" target="_blank" rel="noopener noreferrer" aria-label="Log in">
            <Button variant="outline" size="icon" className="h-9 w-9 md:h-10 md:w-10 border-primary/20 hover:border-primary/40" aria-label="Log in">
              <UserRound className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </a>
          <CartDrawer />

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden h-9 w-9 border-primary/20 hover:border-primary/40" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 pt-12">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                      location.pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="tel:8779652140"
                  className="mt-4 px-4 py-3 flex items-center gap-2 text-primary font-semibold"
                >
                  <Phone className="h-4 w-4" />
                  (877)-965-2140
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
