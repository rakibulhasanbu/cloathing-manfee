"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { heroBanners } from "@/data/categories";

export function HeroBanner() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        onBeforeInit={(s) => { swiperRef.current = s; }}
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        className="w-full"
      >
        {heroBanners.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative aspect-[16/7] w-full md:aspect-[16/6]">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover object-top"
                priority
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom prev button */}
      <button
        aria-label="Previous slide"
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute top-1/2 left-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-black/40"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Custom next button */}
      <button
        aria-label="Next slide"
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute top-1/2 right-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-black/40"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
        {heroBanners.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => swiperRef.current?.slideToLoop(i)}
            className={cn(
              "h-1.5 rounded-full bg-white transition-all duration-300",
              activeIndex === i ? "w-5 opacity-100" : "w-1.5 opacity-50"
            )}
          />
        ))}
      </div>
    </div>
  );
}
