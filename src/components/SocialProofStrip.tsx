import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import sp1 from "@/assets/social-proof-1.jpg";
import sp2 from "@/assets/social-proof-2.jpg";
import sp3 from "@/assets/social-proof-3.jpg";
import sp4 from "@/assets/social-proof-4.jpg";
import sp5 from "@/assets/social-proof-5.jpg";

const images = [sp1, sp2, sp3, sp4, sp5];

export const SocialProofStrip = () => (
  <section className="py-16 bg-background overflow-hidden">

    <div className="max-w-4xl mx-auto px-4">
      <Carousel
        opts={{ align: "center", loop: true }}
        plugins={[Autoplay({ delay: 2500, stopOnInteraction: false })]}
      >
        <CarouselContent className="-ml-4">
          {images.map((img, i) => (
            <CarouselItem key={i} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="w-full h-[260px] rounded-xl overflow-hidden">
                <img
                  src={img}
                  alt={`Happy customer ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>

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
