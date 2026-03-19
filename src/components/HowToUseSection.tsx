import { Pill } from "lucide-react";

export const HowToUseSection = () => {
  return (
    <section className="py-10 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
          <Pill className="h-6 w-6 md:h-8 md:w-8 text-primary" />
          <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground">
            How To Use
          </h2>
        </div>
        <p className="text-muted-foreground font-body leading-relaxed text-lg">
          <strong>Take one capsule in the morning and one in the evening</strong> with water, ideally with food. That's it, two capsules a day, every day. Most men notice a difference within the first 30 days.
        </p>
      </div>
    </section>
  );
};
