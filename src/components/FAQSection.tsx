import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Prostate Miracle Advanced Formula?",
    a: "Prostate Miracle Advanced Formula is a dietary supplement made with clinically-studied, naturally-sourced ingredients designed to support healthy prostate function, urinary comfort, and overall wellness.",
  },
  {
    q: "How do I take Prostate Miracle?",
    a: "Take two vegetable capsules daily with a meal and a full glass of water. For best results, use consistently as part of your daily routine.",
  },
  {
    q: "How long does it take to see results?",
    a: "Many users report noticing improvements in urinary comfort within the first 2–4 weeks. For optimal results, we recommend consistent daily use for at least 60–90 days.",
  },
  {
    q: "Are there any side effects?",
    a: "Prostate Miracle is made with natural ingredients and is generally well-tolerated. However, as with any supplement, we recommend consulting your healthcare provider before starting, especially if you are taking medications.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "Yes! We offer a 90-day satisfaction guarantee. If you're not completely satisfied, contact our support team for a full refund — no questions asked.",
  },
  {
    q: "Can I take this with other medications?",
    a: "While our formula uses natural ingredients, we always recommend consulting your doctor or pharmacist before combining supplements with prescription medications.",
  },
];

export const FAQSection = () => (
  <section id="faq" className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:text-primary">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-body leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
