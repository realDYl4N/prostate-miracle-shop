import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "When Can I Expect To Notice Results?",
    a: "Many customers begin noticing improved urinary comfort within the first 2–4 weeks of consistent use. For optimal prostate support, we recommend daily use for at least 60 days. Individual experiences may vary.",
  },
  {
    q: "Can This Be Taken Alongside Medications?",
    a: "If you are currently taking prescription medication or managing a medical condition, we recommend consulting your healthcare professional before use.",
  },
  {
    q: "What Is The Best Time Of Day To Take It?",
    a: "Take 2 vegetable capsules daily with food and water. Morning or early afternoon with your largest meal is preferred for optimal absorption.",
  },
  {
    q: "What Makes This Formula Different?",
    a: "Prostate Miracle combines clinically-studied Saw Palmetto with Beta-Sitosterol, Pygeum, and essential minerals, creating a comprehensive botanical blend designed to support both prostate health and urinary comfort — not just one or the other.",
  },
  {
    q: "Is This Product Clean & Allergen-Friendly?",
    a: "Yes. Our formula contains no gluten, dairy, soy, sugar, artificial colors, or synthetic preservatives. We use gentle vegetable capsules suitable for most dietary needs.",
  },
  {
    q: "Where Is It Manufactured?",
    a: "Prostate Miracle is produced in GMP-certified facilities that follow strict quality control standards to ensure purity and potency in every bottle.",
  },
  {
    q: "Is This Supported By Research?",
    a: "Yes. Key ingredients like Saw Palmetto, Beta-Sitosterol, and Pygeum have been widely studied for their prostate-supporting and urinary comfort properties in peer-reviewed research.",
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
