import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const FooterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold tracking-tight">
              PROSTATE MIRACLE
            </h3>
            <p className="text-sm text-primary-foreground/70 font-body leading-relaxed">
              Clinically-studied beta-sitosterol from non-GMO European pine, supporting prostate health since 2003.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Mail className="h-4 w-4" />
              <a href="mailto:support@prostatemiracle.com" className="hover:text-primary-foreground transition-colors">
                support@prostatemiracle.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-base">Quick Links</h4>
            <nav className="flex flex-col gap-2.5">
              <a href="/" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body">Home</a>
              <a href="/prostate-miracle" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body">Prostate Miracle</a>
              <a href="/track-order" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body">Track Order</a>
            </nav>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-base">Information</h4>
            <nav className="flex flex-col gap-2.5">
              <a href="mailto:support@prostatemiracle.com" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body">Contact Information</a>
              <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body">Privacy Policy</a>
              <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body">Refund Policy</a>
              <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body">Shipping Policy</a>
              <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body">Terms of Service</a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-base">Be In The Know</h4>
            <p className="text-sm text-primary-foreground/70 font-body leading-relaxed">
              Promotions, new products and sales. Directly to your inbox.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              className="space-y-3"
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 h-11"
                required
              />
              <Button
                type="submit"
                variant="secondary"
                className="font-display font-bold uppercase tracking-wider text-sm"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/15">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/50 font-body">
            © {new Date().getFullYear()} Prostate Miracle. All rights reserved.
          </p>
          <p className="text-[10px] text-primary-foreground/40 font-body max-w-md text-center md:text-right">
            *These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
};
