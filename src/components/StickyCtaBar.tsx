import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const StickyCtaBar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex items-stretch justify-center border-y border-border/30">
      <a
        href="tel:8779652140"
        className="flex-1 flex items-center justify-center gap-1.5 md:gap-2 bg-primary/20 text-primary font-display font-bold text-sm md:text-lg py-3 px-3 md:px-6 hover:bg-primary/30 transition-colors">
        <Phone className="h-4 w-4 flex-shrink-0" />
        <span className="hidden sm:inline">Call: </span>1.877.965.2140
      </a>
      <button
        onClick={() => {navigate("/prostate-miracle");window.scrollTo(0, 0);}}
        className="flex-1 flex items-center justify-center bg-primary text-primary-foreground font-display font-bold text-sm md:text-lg py-3 px-3 md:px-6 hover:bg-primary/90 transition-colors">
        Buy Prostate Miracle® Risk-Free
      </button>
    </div>
  );
};
