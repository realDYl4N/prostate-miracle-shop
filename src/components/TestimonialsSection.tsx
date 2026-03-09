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
    name: "Wilfred B.P. Martin",
    location: "New Zealand",
    text: "Over the last 5 years I have tried many prostate tablets from different companies, but none have worked as well as yours. Ever since I did my 6 month trial with Prostate Miracle, I sleep right through the night with no get ups.",
  },
  {
    name: "Francis Treuherz",
    location: "London, England",
    text: "I am now 75 and ordered another year's supply. You have no idea how grateful I am to you for being there and keeping the supply going. I avoid surgery. I sleep through the night.",
  },
  {
    name: "Victor Stevens, Ph.D.",
    location: "Sahuarita, AZ",
    text: "I found Prostate Miracle and gave it a try. Wow! Now I don't even think about my urine flow and all I do is take 2 capsules a day. It's all natural, no side effects, no dizziness. Please don't ever stop making this stuff!",
  },
  {
    name: "F.M.",
    location: "Cleveland, GA",
    text: "Your product is the one that finally is doing the job for me. I am taking one capsule in the AM, and two before bedtime. I'm on the second bottle now and need to reorder.",
  },
  {
    name: "Nick W.",
    location: "Richmond, VA",
    text: "Your product has been very impressive. I'll sum it up and very frankly say that I feel like a teenager again! Simply put, I forgot what it was like to have a good pee. You have another convinced and satisfied life-long customer.",
  },
  {
    name: "Paul O'Brien",
    location: "Victoria, BC",
    text: "After about a few weeks, I finally experienced for the first time in a long time, an uninterrupted night's sleep. Now I don't think about urine flow anymore. A great load of concern has been lifted from my mind.",
  },
  {
    name: "Frank D.",
    location: "Redding, CA",
    text: "I started that day and by the 4th day I noticed great improvement. Needless to say I am overjoyed. Thank you so much, you have a customer for life.",
  },
  {
    name: "Glen",
    location: "Valencia, CA",
    text: "Prostate Miracle is amazing — I enjoyed improvements within the first week! Thanks for making such an outstanding product.",
  },
  {
    name: "CG",
    location: "Ontario, Canada",
    text: "I have been taking Prostate Miracle for 2 weeks now and I am happy to report that I've got no more complaints. It is nice to see a product that actually works. Thank you so much!",
  },
  {
    name: "Donn Davenport",
    location: "USA",
    text: "I have taken only been taking Prostate Miracle pills for 4 days and have already noticed a significant improvement. What I have experienced in only 4 days in a word is a 'miracle.'",
  },
  {
    name: "Dave Osborne",
    location: "USA",
    text: "I've been taking Prostate Miracle for about 6 months and recently had another PSA blood test — the number improved to .50. My doctor said 'That is as good as it gets'. I am of course a customer for life.",
  },
  {
    name: "Bart Palamaro",
    location: "Newbury Park, CA",
    text: "I feel closer to normal than I've felt in a long time. Each day is better and better, all in about two weeks time. I am very appreciative of this product.",
  },
  {
    name: "Jack C. Moore",
    location: "USA",
    text: "After the quick results, I have ordered 4 times over the last year. Today I got the results from the doctor — my PSA is 0.7. I was so happy. It really does work.",
  },
  {
    name: "Heinz Henneberger",
    location: "USA",
    text: "I've been taking Prostate Miracle for almost 4 months now. My Doctor said my current reading was acceptable for my age and that he does not feel the need to refer me to a specialist.",
  },
  {
    name: "Alan Pooley",
    location: "NSW, Australia",
    text: "This is my second order and I want to thank you for the product, I feel great! I had taken Proscar for 18 months before trying Prostate Miracle and experienced no improvement whatsoever.",
  },
  {
    name: "Jun Gatmaitan",
    location: "Philippines",
    text: "I've only been on it for 3 weeks and already I can honestly say that I feel completely normal. It is with tears of happiness in my eyes that I want to thank you.",
  },
  {
    name: "Warren Maines Bugman",
    location: "USA",
    text: "I have taken Prostate Miracle for only 27 days and my urologist and I are completely thrilled with the results. He has canceled my scheduled biopsy. It truly has been a miracle for me.",
  },
  {
    name: "Ray E. Hammack",
    location: "USA",
    text: "After only three days of taking Prostate Miracle, I noticed a very definite feeling of well being. At last, a company that was not out to hoodwink its customers. Buy it, try it, you'll like it!",
  },
  {
    name: "Roy M. S.",
    location: "USA",
    text: "I have had marvelous results. According to my Dr, 'A normal prostate was observed, including the normal groove dividing the 2 lobes of a normal prostate.' I am ecstatic with the success.",
  },
  {
    name: "Jeff Gentry",
    location: "USA",
    text: "I used to get up 8 times a night to pee. Now I am getting up 1-2 times. I am very pleased.",
  },
  {
    name: "Steve L. Wilson",
    location: "USA",
    text: "I was skeptical, even thought of returning it, then on my fourth week I began feeling better. After another week I was getting a full night's sleep. Now, I feel normal.",
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
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
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
