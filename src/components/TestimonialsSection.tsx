import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Robert M.",
    text: "I didn't expect dramatic results, but this product really surprised me. After about a month, I noticed improved comfort and fewer nighttime trips. My overall energy has improved and I feel more confident about my health.",
  },
  {
    name: "David K.",
    text: "I've struggled with prostate discomfort for years. Since starting this product, I've noticed a real difference in urinary flow and comfort. It's not an overnight miracle, but the gradual improvement feels very real and sustainable.",
  },
  {
    name: "Thomas W.",
    text: "This has become part of my daily routine. I've noticed better comfort throughout the day and fewer interruptions at night. I honestly didn't expect a natural supplement to make this much of a difference.",
  },
  {
    name: "Richard S.",
    text: "After a few weeks of consistent use, I started noticing better urinary flow and improved comfort. I feel more confident knowing my body has daily support, and I don't worry as much about my prostate health.",
  },
  {
    name: "William H.",
    text: "I've tried several supplements over the years, but this is the first one where I truly noticed a difference. I feel more balanced, my energy feels steadier throughout the day, and I don't get up as often at night.",
  },
];

export const TestimonialsSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      {/* Section heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
          Trusted By <span className="text-primary">Thousands</span>
        </h2>
      </div>

      {/* Rating summary */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-accent text-accent" />
          ))}
        </div>
        <p className="text-sm font-medium text-foreground">Rated 4.8 / 5</p>
        <p className="text-sm text-muted-foreground">Trusted by 50K+</p>
      </div>

      {/* Testimonial cards - horizontal scroll */}
      <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-card border border-border rounded-xl p-6 shadow-[var(--shadow-card)] min-w-[320px] max-w-[360px] flex-shrink-0 snap-start flex flex-col"
          >
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 flex-1">
              "{t.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">
                  {t.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-primary font-medium">✓ Verified Buyer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
