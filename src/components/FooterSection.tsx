export const FooterSection = () => (
  <footer className="py-12 bg-foreground text-background/70">
    <div className="container mx-auto px-4 text-center">
      <p className="font-display text-lg font-semibold text-background mb-2">Prostate Miracle</p>
      <p className="text-sm font-body">© {new Date().getFullYear()} Prostate Miracle. All rights reserved.</p>
      <p className="text-xs mt-4 max-w-md mx-auto font-body">
        *These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
      </p>
    </div>
  </footer>
);
