import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Fran",
    location: "London, England",
    text: "Your Prostate Miracle keeps me alive, keeps me asleep at night and enables me to function as a man at the age of 77. I cheated the surgeons who wanted to steal my prostate maybe 25 or 30 years ago.",
  },
  {
    name: "Nick W.",
    location: "Richmond, VA",
    text: "Your product has been very impressive. I'll sum it up and very frankly say that I feel like a teenager again! Simply put, I forgot what it was like to have a good pee. You have another convinced and satisfied life-long customer.",
  },
  {
    name: "Wilfred B.P. Martin",
    location: "New Zealand",
    text: "Over the last 5 years I have tried many prostate tablets from different companies, but none have worked as well as yours. Ever since I did my 6 month trial with Prostate Miracle, I sleep right through the night with no get ups.",
  },
  {
    name: "Donn Davenport",
    location: "USA",
    text: "I have taken only been taking Prostate Miracle pills for 4 days and have already noticed a significant improvement. What I have experienced in only 4 days in a word is a 'miracle.'",
  },
  {
    name: "Dave Osborne",
    location: "Verified Customer",
    text: "I've been taking Prostate Miracle for about 6 months and recently had another PSA blood test — the number improved to .50. My doctor said 'That is as good as it gets'. I am of course a customer for life.",
  },
  {
    name: "Glen",
    location: "Valencia, CA",
    text: "Prostate Miracle is amazing — I enjoyed improvements within the first week! Thanks for making such an outstanding product.",
  },
  {
    name: "Jack C. Moore",
    location: "Verified Customer",
    text: "After the quick results, I have ordered 4 times over the last year. Today I got the results from the doctor — my PSA is 0.7. I was so happy. It really does work.",
  },
];

export const TestimonialsSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
          Trusted By <span className="text-primary">Thousands</span>
        </h2>
      </div>

      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-accent text-accent" />
          ))}
        </div>
        <p className="text-sm font-medium text-foreground">Rated 4.8 / 5</p>
        <p className="text-sm text-muted-foreground">Trusted by 50K+</p>
      </div>

      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[Autoplay({ delay: 3500, stopOnInteraction: false })]}
      >
        <CarouselContent className="-ml-5">
          {testimonials.map((t) => (
            <CarouselItem
              key={t.name}
              className="pl-5 basis-[85%] sm:basis-[45%] lg:basis-[33%]"
            >
              <div className="bg-card border border-border rounded-xl p-6 shadow-[var(--shadow-card)] flex flex-col h-full">
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
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                    <p className="text-xs text-primary font-medium">✓ Verified Buyer</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  </section>
);
