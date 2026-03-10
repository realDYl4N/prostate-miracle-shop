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
                { name: "ChatGPT", url: "https://chatgpt.com", img: aiChatgpt },
                { name: "Claude", url: "https://claude.ai", img: aiClaude },
                { name: "Perplexity", url: "https://perplexity.ai", img: aiPerplexity },
                { name: "Grok", url: "https://grok.x.ai", img: aiGrok },
                { name: "Gemini", url: "https://gemini.google.com", img: aiGemini },
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