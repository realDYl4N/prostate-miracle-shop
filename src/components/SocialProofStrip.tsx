import { Star } from "lucide-react";
import sp1 from "@/assets/social-proof-1.jpg";
import sp2 from "@/assets/social-proof-2.jpg";
import sp3 from "@/assets/social-proof-3.jpg";
import sp4 from "@/assets/social-proof-4.jpg";
import sp5 from "@/assets/social-proof-5.jpg";

const images = [sp1, sp2, sp3, sp4, sp5];

export const SocialProofStrip = () => (
  <section className="py-16 bg-background overflow-hidden">
    <div className="text-center mb-10">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
        Tested By <span className="text-primary">Thousands</span>
      </h2>
    </div>

    {/* Scrolling photo strip */}
    <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-4 justify-center">
      {images.map((img, i) => (
        <div
          key={i}
          className="w-[200px] h-[260px] flex-shrink-0 rounded-xl overflow-hidden snap-start"
        >
          <img
            src={img}
            alt={`Happy customer ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>

    {/* Rating summary below */}
    <div className="text-center mt-8">
      <div className="flex items-center justify-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-sm font-semibold text-foreground">Rated 4.8 / 5</p>
      <p className="text-sm text-muted-foreground">Trusted by 50K+</p>
    </div>
  </section>
);
