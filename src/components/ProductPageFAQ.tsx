import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Why no saw palmetto?",
    a: "Because it doesn't work at the doses found in supplements. Saw palmetto contains almost no beta-sitosterol — the active compound that actually supports prostate health. You'd need thousands of capsules of saw palmetto powder to match a single capsule of Prostate Miracle®. We skip the middleman herb and deliver the active ingredient directly.",
  },
  {
    q: "How is this different from other prostate supplements?",
    a: "Most prostate formulas stuff their capsules with saw palmetto, lycopene, and a dozen filler herbs at ineffective doses. Prostate Miracle® focuses on four clinically relevant ingredients at meaningful doses — led by 300mg of 99%-pure beta-sitosterol per capsule. We source our beta-sitosterol from non-GMO pine in France, not cheap soy from China. And we publish our Certificate of Analysis so you can verify it yourself.",
  },
  {
    q: "How long does it take to work?",
    a: "Most men begin noticing a difference within 30–60 days of consistent daily use. That's exactly why we offer a 60-day money-back guarantee — it gives you enough time to experience meaningful results before deciding.",
  },
  {
    q: "Is this safe to take with my current medications?",
    a: "Prostate Miracle® contains only four well-studied, natural ingredients in a vegetable capsule with no artificial additives. However, we always recommend discussing any new supplement with your doctor, especially if you're taking prescription medications.",
  },
  {
    q: "Why is it more expensive than drugstore brands?",
    a: "Because the ingredients cost more. Non-GMO pine-extracted beta-sitosterol imported from France is significantly more expensive than the soy-based extracts most brands use. You're also getting 300mg per capsule vs. the 50–100mg typical in drugstore brands. When you do the math on cost per milligram of actual beta-sitosterol, Prostate Miracle® is often the better value — especially on the multi-bottle bundles. The Buy 3, Get 2 Free drops it to roughly $16/bottle.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "Send back the two empty bottles within 60 days for a full 100% refund (less shipping). We've made this guarantee since 2001 and we stand behind it.",
  },
];

export const ProductPageFAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-10">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl px-4">
              <AccordionTrigger className="text-foreground font-semibold text-left py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
