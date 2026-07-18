"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { reviews } from "@/data/reviews";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < rating ? "#f59e0b" : "none"}
          stroke={i < rating ? "#f59e0b" : "#d1d5db"}
          strokeWidth="1.5"
          className="w-3.5 h-3.5"
        >
          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78z" />
        </svg>
      ))}
    </div>
  );
}

// Quote SVG icon
function QuoteIcon() {
  return (
    <svg viewBox="0 0 32 22" fill="#ccc" className="w-8 h-6 opacity-60">
      <path d="M0 22V13.2C0 9.75 .817 6.933 2.45 4.75 4.083 2.567 6.517 1.017 9.75 0.1L11 3.3C9.167 3.967 7.75 5 6.75 6.4 5.75 7.8 5.267 9.533 5.3 11.6H10V22H0zm18 0V13.2c0-3.45.817-6.267 2.45-8.45 1.633-2.183 4.067-3.733 7.3-4.65L29 3.3c-1.833.667-3.25 1.7-4.25 3.1-1 1.4-1.483 3.133-1.45 5.2H28V22H18z" />
    </svg>
  );
}

export function CustomerReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#f5f5f5] py-10">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-16">
        {/* Heading */}
        <div className="mb-7 text-center">
          <h2 className="text-base font-bold text-[#212121] font-bahnschrift">
            Customer Review
          </h2>
          <p className="mt-1 text-xs text-gray-500 font-bahnschrift">
            What our customer think about us
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            aria-label="Scroll left"
            onClick={() => scroll("left")}
            className="absolute left-0 top-[40%] z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto px-10 pb-2 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="shrink-0 w-[75vw] sm:w-[45vw] lg:w-[22vw] bg-white rounded-lg border border-gray-100 p-4 flex flex-col gap-3"
              >
                {/* Avatar + name + stars */}
                <div className="flex items-start gap-3">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[30%] bg-gray-200">
                    {review.avatar ? (
                      <Image
                        src={review.avatar}
                        alt={review.customerName}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center text-lg font-bold text-gray-500">
                        {review.customerName[0]}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#212121] font-bahnschrift">
                        {review.rating} ★
                      </span>
                      <StarRating rating={review.rating} />
                    </div>
                    <QuoteIcon />
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#212121] font-bahnschrift">
                    {review.customerName}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-gray-500 font-bahnschrift line-clamp-4">
                    {review.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            aria-label="Scroll right"
            onClick={() => scroll("right")}
            className="absolute right-0 top-[40%] z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
