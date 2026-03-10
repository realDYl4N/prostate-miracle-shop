import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Loader2, CheckCircle } from "lucide-react";
import aiChatgpt from "@/assets/ai-chatgpt.png";
import aiClaude from "@/assets/ai-claude.png";
import aiPerplexity from "@/assets/ai-perplexity.png";
import aiGrok from "@/assets/ai-grok.png";
import aiGemini from "@/assets/ai-gemini.png";

const KLAVIYO_PUBLIC_KEY = "Y69r2h";

export const FooterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch(
        "https://a.klaviyo.com/client/subscriptions/?company_id=" + KLAVIYO_PUBLIC_KEY,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            revision: "2024-02-15",
          },
          body: JSON.stringify({
            data: {
              type: "subscription",
              attributes: {
                profile: {
                  data: {
                    type: "profile",
                    attributes: { email },
                  },
                },
              },
              relationships: {
                list: {
                  data: {
                    type: "list",
                    id: "ULmV8d",
                  },
                },
              },
            },
          }),
        }
      );

      if (response.ok || response.status === 202) {
        setStatus("success");
        setEmail("");
      } else {
        throw new Error("Subscription failed");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold tracking-tight">
              PROSTATE MIRACLE
            </h3>
            <p className="text-sm text-secondary-foreground/70 font-body leading-relaxed">
              Clinically-studied beta-sitosterol from non-GMO European pine, supporting prostate health since 2003.
            </p>
            <div className="flex items-center gap-2 text-sm text-secondary-foreground/70">
              <Mail className="h-4 w-4" />
              <a className="hover:text-secondary-foreground transition-colors" href="mailto:hello@prostatemiracle.com">
                hello@prostatemiracle.com
              </a>
            </div>
            <p className="text-xs text-secondary-foreground/50 font-body">Ask AI for a summary</p>
            <div className="flex items-center gap-2">
              {[
                { name: "ChatGPT", url: "https://chatgpt.com", color: "#10a37f", icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>
                )},
                { name: "Claude", url: "https://claude.ai", color: "#d4a27f", icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M4.709 15.955l4.107-2.372L4.907 8.5a.477.477 0 0 1 .166-.652l1.373-.793a.477.477 0 0 1 .652.166l5.026 8.702a.477.477 0 0 1-.166.652l-1.373.793a.477.477 0 0 1-.652-.166l-.86-1.49-4.107 2.372a.477.477 0 0 1-.652-.166l-.771-1.336a.477.477 0 0 1 .166-.647zm8.164-2.372l4.107 2.372-.771 1.336a.477.477 0 0 1-.652.166l-4.107-2.372-.86 1.49a.477.477 0 0 1-.652.166l-1.373-.793a.477.477 0 0 1-.166-.652l5.026-8.702a.477.477 0 0 1 .652-.166l1.373.793a.477.477 0 0 1 .166.652l-3.902 5.083z"/></svg>
                )},
                { name: "Perplexity", url: "https://perplexity.ai", color: "#20808d", icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm6 14.18l-6 3.75-6-3.75V8.82l6-3.75 6 3.75v7.36zM12 8v8m-4-4h8" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
                )},
                { name: "Grok", url: "https://grok.x.ai", color: "#ffffff", icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 20L18 4M4 4l8 8"/></svg>
                )},
                { name: "Gemini", url: "https://gemini.google.com", color: "#8b6cef", icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16.5c-1.38 0-2.5-1.12-2.5-2.5h5c0 1.38-1.12 2.5-2.5 2.5zm-4.5-5L12 5l4.5 8.5h-9z"/></svg>
                )},
              ].map((ai) => (
                <a
                  key={ai.name}
                  href={ai.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Ask ${ai.name}`}
                  className="w-10 h-10 rounded-xl bg-secondary-foreground/10 hover:bg-secondary-foreground/20 flex items-center justify-center text-secondary-foreground/70 hover:text-secondary-foreground transition-all duration-200"
                >
                  {ai.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-base">Quick Links</h4>
            <nav className="flex flex-col gap-2.5">
              <a href="/" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors font-body">Home</a>
              <a href="/prostate-miracle" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors font-body">Prostate Miracle</a>
              <a href="/track-order" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors font-body">Track Order</a>
            </nav>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-base">Information</h4>
            <nav className="flex flex-col gap-2.5">
              <a href="mailto:support@prostatemiracle.com" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors font-body">Contact Information</a>
              <a href="#" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors font-body">Privacy Policy</a>
              <a href="#" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors font-body">Refund Policy</a>
              <a href="#" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors font-body">Shipping Policy</a>
              <a href="#" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors font-body">Terms of Service</a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-base">Be In The Know</h4>
            <p className="text-sm text-secondary-foreground/70 font-body leading-relaxed">
              Promotions, new products and sales. Directly to your inbox.
            </p>
            {status === "success" ? (
              <div className="flex items-center gap-2 text-sm text-primary font-body">
                <CheckCircle className="h-4 w-4" />
                <span>You're subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="bg-transparent border-secondary-foreground/30 text-secondary-foreground placeholder:text-secondary-foreground/40 h-11"
                  required
                />
                {status === "error" && (
                  <p className="text-xs text-destructive">{errorMsg}</p>
                )}
                <Button
                  type="submit"
                  variant="default"
                  disabled={status === "loading"}
                  className="font-display font-bold uppercase tracking-wider text-sm">
                  {status === "loading" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/15">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/50 font-body">
            © {new Date().getFullYear()} Prostate Miracle. All rights reserved.
          </p>
          <p className="text-[10px] text-secondary-foreground/40 font-body max-w-md text-center md:text-right">
            *These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>);

};