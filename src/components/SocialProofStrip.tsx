import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem } from
"@/components/ui/carousel";
import sp1 from "@/assets/social-proof-1.jpg";
import sp2 from "@/assets/social-proof-2.jpg";
import sp3 from "@/assets/social-proof-3.jpg";
import sp4 from "@/assets/social-proof-4.jpg";
import sp5 from "@/assets/social-proof-5.jpg";

const images = [sp1, sp2, sp3, sp4, sp5];

export const SocialProofStrip = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {images.map((img, i) => (
              <CarouselItem key={i} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="overflow-hidden rounded-xl shadow-md">
                  <img src={img} alt={`Customer review ${i + 1}`} className="w-full h-auto object-cover" loading="lazy" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};