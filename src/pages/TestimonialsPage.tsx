import { Star } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { PageHead } from "@/components/PageHead";
import { useMemo } from "react";
import { testimonialsSchema } from "@/lib/seo-schemas";

const testimonials = [
  { name: "Victor Stevens, Ph.D.", location: "Sahuarita, AZ", text: "Prostate Miracle is terrific! I will be 74 next month and my urine flow had become noticeably slow. I started researching natural options and gave Prostate Miracle a try. Wow! My urine flow feels so much better and all I do is take 2 capsules a day, 7 days a week. It's all natural. I can't say enough about how great Prostate Miracle is. Never stop making this stuff! Thank you!" },
  { name: "Nick W.", location: "Richmond, VA", text: "I finally decided to do something about the discomfort I'd been experiencing for the past 4 or 5 years, inconvenient urges, straining, waking 2-4 times every night. After researching options on the web for nearly a year, I found your website, read it carefully multiple times, and finally decided to try your product. I ordered a 60-day supply to give it a fair run. It sure is great to get it right the first time! I noticed improvement in the first two weeks. I kept taking it as directed and the improvement continued. I'll frankly say I feel like a completely different person. You have a convinced and satisfied life-long customer." },
  { name: "Paul O'Brien", location: "Victoria, BC", text: "I had tried several prostate support formulas to help with urine flow and nighttime disruptions. I had been getting up at least once, often twice, per night. None of the other products really did the job. After a few weeks on Prostate Miracle, I started sleeping more soundly, and that steadily improved over the months. I don't think about urine flow anymore. A great load of concern has been lifted from my mind. I believe this product delivers what is promised, a quality level of beta-sitosterol at an affordable price. Thank you!" },
  { name: "Frank D.", location: "Redding, CA", text: "I am 60 years old and was concerned about difficulty with urination, starting and stopping, having to strain. It was getting noticeably uncomfortable. I found your site, read it thoroughly, felt confident you were a real company, and ordered. I started that day and by the 4th day I noticed a significant improvement in comfort. Needless to say, I am overjoyed. You have a customer for life." },
  { name: "Glen", location: "Valencia, CA", text: "Prostate Miracle is amazing, I noticed improvements quickly after starting! Thanks for making such an outstanding product." },
  { name: "CG", location: "Ontario, Canada", text: "I am a 41-year-old male who has dealt with prostate discomfort for the last 4 years. My major concerns were post-urination dribbling and related hygiene issues. Since taking Prostate Miracle, the dribbling has decreased substantially. With so many products out there making unrealistic promises, it is genuinely refreshing to find one that actually delivers. Thank you so much!" },
  { name: "Donn Davenport", location: "USA", text: "I am a 55-year-old male who had been experiencing diminished urine flow for over two years. I wasn't sure what to expect, there are so many products out there. I found your website, which compared various prostate support products, and found it very informative. It was the determining factor for me. What I experienced quickly after starting the product, I can only describe as remarkable. I plan to use Prostate Miracle as part of my ongoing prostate health routine. Thank you." },
  { name: "Dave Osborne", location: "USA", text: "I wanted to do something proactive to support my prostate health as I approached 60. I started taking Prostate Miracle and have been very pleased with the results. I feel I have taken a meaningful step toward supporting my long-term prostate health. I am of course a customer for life." },
  { name: "Bart Palamaro", location: "Newbury Park, CA", text: "I can't believe the difference I've noticed since starting Prostate Miracle. I've gone from dealing with the typical discomforts of an aging prostate, reduced stream, dribbling, frequent urges — to feeling closer to normal than I have in a long time. Each day has been better, all within about two weeks. I'm very appreciative of this product." },
  { name: "Jack C. Moore", location: "USA", text: "I have been taking Prostate Miracle for about a year now. I was experiencing discomfort in the prostate area and had tried other approaches without lasting results. I found Prostate Miracle online and noticed improvements quickly. I've reordered four times over the last year. I just want the world to know, I'm very satisfied. Thank you. I'm 63." },
  { name: "Heinz Henneberger", location: "USA", text: "I've been very pleased with my experience taking Prostate Miracle. At 62, I was looking for a natural option to support my prostate health, and this product has delivered. Thank you very, very much." },
  { name: "Alan Pooley", location: "NSW, Australia", text: "This is my second order and I want to thank you for the product. I have noticed improvement across all areas of my prostate comfort. I had tried another option for 18 months before switching to Prostate Miracle and experienced no improvement whatsoever with the prior approach. Many thanks." },
  { name: "Jun Gatmaitan", location: "Philippines", text: "I was looking for a natural prostate support option. My daughter found your site while researching online and we ordered through a friend in the US. I started taking it immediately and noticed meaningful improvement after finishing the first bottle. I continued taking it and have been very happy with the ongoing results. Thank you!" },
  { name: "Warren Maines", location: "USA", text: "I have been taking Prostate Miracle for 27 days and I am genuinely impressed with the results. I feel noticeably more comfortable and am very pleased with my progress. Thank you for your product, I will keep you informed." },
  { name: "Ray E. Hammack", location: "USA", text: "I had some discomfort in the prostate area after long hours at my desk. Since I believe in preventative maintenance, I started taking Prostate Miracle about 3 months ago. After only three days, I noticed a very definite sense of comfort and well-being throughout the prostate area. I was genuinely surprised at how well it supported me. What else can I say, buy it, try it, you'll like it and you'll never be without it." },
  { name: "Roy M. S.", location: "USA", text: "I have been using Prostate Miracle since 1999 and have had marvelous results. I was experiencing urinary discomfort and looking for long-term prostate support. After taking the recommended dosage consistently, I noticed significant improvement in my overall comfort. I am ecstatic with the results of Prostate Miracle." },
  { name: "Jeff Gentry", location: "USA", text: "I was waking up frequently through the night. After starting Prostate Miracle, I noticed a dramatic improvement in how well I sleep. Continuing to see great results." },
  { name: "Steve L. Wilson", location: "USA", text: "I was skeptical, even thought of returning it. Then around week four I noticed a positive change. After another week I was sleeping more soundly through the night. Now I feel like myself again." },
  { name: "Frank Evans", location: "USA", text: "Urgency, frequency, low flow, dribbling, I've noticed significant improvement across the board since starting the product." },
];

const TestimonialsPage = () => {
  const jsonLd = useMemo(() => [testimonialsSchema], []);
  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Prostate Miracle® Reviews — Real Results from 100,000+ Men"
        description="Read verified reviews from men who use Prostate Miracle® Advanced Formula for prostate health, urinary flow, and fewer nighttime bathroom trips."
        canonicalPath="/testimonials"
        jsonLd={jsonLd}
      />
      <Navbar />
      <div className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                What 100,000+ Men Are Saying About <span className="text-primary">Prostate Miracle®</span>
              </h1>
            </div>

            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-medium text-foreground">Rated 4.8 / 5</p>
              <p className="text-sm text-muted-foreground">Trusted by 100K+ Happy Customers</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-card border border-border rounded-xl p-6 shadow-[var(--shadow-card)] flex flex-col"
                >
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
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
              ))}
            </div>
          </div>
        </section>
      </div>
      <FooterSection />
    </div>
  );
};

export default TestimonialsPage;
