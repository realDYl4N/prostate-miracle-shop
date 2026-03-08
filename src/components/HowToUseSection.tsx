import { Pill } from "lucide-react";

export const HowToUseSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <Pill className="h-8 w-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            How To Use
          </h2>
        </div>
        <p className="text-muted-foreground font-body leading-relaxed text-lg">
          – <strong>Take 2 vegetable capsules daily</strong> with water, preferably with your largest meal. 
          For enhanced support, may be taken up to 3 times daily. Most customers report noticeable 
          improvement in urinary comfort within 2–4 weeks, with optimal prostate support after 60 days 
          of consistent use.
        </p>
      </div>
    </section>
  );
};
