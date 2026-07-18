"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { reviews } from "@/data/reviews";

/* ─────────────────────────────────────────
   STAR RATING
───────────────────────────────────────── */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-[2px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" width="14" height="14"
          fill={i < rating ? "#f59e0b" : "none"}
          stroke={i < rating ? "#f59e0b" : "#d1d5db"}
          strokeWidth="1.5"
        >
          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78z" />
        </svg>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   QUOTE ICON  (two overlapping speech-bubble quotes in gold)
───────────────────────────────────────── */
function QuoteIcon() {
  return (
    <div className="flex items-center gap-[2px] mt-[6px] mb-[10px]">
      {/* Two quote-bubble icons side by side, tan/gold color */}
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
        <rect x="0.5" y="0.5" width="10" height="8" rx="2.5" stroke="#c9a84c" strokeWidth="1.2" />
        <path d="M3 9.5 L5.5 13 L8 9.5" stroke="#c9a84c" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" style={{ marginLeft: -4 }}>
        <rect x="0.5" y="0.5" width="10" height="8" rx="2.5" stroke="#c9a84c" strokeWidth="1.2" />
        <path d="M3 9.5 L5.5 13 L8 9.5" stroke="#c9a84c" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────
   REVIEW CARD
───────────────────────────────────────── */
function ReviewCard({
  review,
}: {
  review: {
    id: number | string;
    customerName: string;
    rating: number;
    text: string;
    avatar?: string;
  };
}) {
  return (
    <div
      className="flex-shrink-0 bg-white flex flex-col"
      style={{
        width: 230,
        borderRadius: 16,
        border: "1px solid #ebebeb",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        overflow: "hidden",
        padding: 0,
      }}
    >
      {/* ── TOP: Avatar with shield clip-path + rating overlay ── */}
      <div className="relative w-full" style={{ height: 190, background: "#f5f5f5" }}>
        {/* Shield-shaped avatar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100%",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 72%, 50% 100%, 0% 72%)",
            overflow: "hidden",
            background: "#e0e0e0",
          }}
        >
          {review.avatar ? (
            <Image
              src={review.avatar}
              alt={review.customerName}
              fill
              className="object-cover object-top"
              sizes="230px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span style={{ fontSize: 48, fontWeight: 700, color: "#999" }}>
                {review.customerName[0]}
              </span>
            </div>
          )}
        </div>

        {/* Rating overlay — bottom-right of image area, outside the clip */}
        <div
          className="absolute flex items-center gap-[5px]"
          style={{ bottom: 12, right: 12, zIndex: 2 }}
        >
          <span
            style={{
              fontFamily: "sans-serif",
              fontSize: 15,
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1,
            }}
          >
            {review.rating}
          </span>
          <StarRating rating={review.rating} />
        </div>
      </div>

      {/* ── BOTTOM: Quote icon + name + text ── */}
      <div className="flex flex-col px-[14px] pt-[2px] pb-[16px]">
        {/* Quote icon */}
        <QuoteIcon />

        {/* Customer name */}
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: 14,
            fontWeight: 700,
            color: "#111",
            lineHeight: 1.3,
            marginBottom: 6,
          }}
        >
          {review.customerName}
        </p>

        {/* Review text */}
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: 12,
            color: "#888",
            lineHeight: 1.6,
          }}
          className="line-clamp-4"
        >
          {review.text}
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   CUSTOMER REVIEWS SECTION
───────────────────────────────────────── */
export function CustomerReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) setCanRight(el.scrollWidth > el.clientWidth);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 260 : -260, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12">

        {/* HEADING */}
        <div className="mb-7 text-center">
          <h2 className="text-2xl font-bold text-[#212121] font-bahnschrift">
            Customer Review
          </h2>
          <p className="mt-1 text-base text-gray-400 font-bahnschrift">
            What our customer think about us
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative flex items-center">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            disabled={!canLeft}
            className="flex-shrink-0 flex items-center justify-center w-7 h-7 transition disabled:opacity-20 mr-2"
            aria-label="Scroll left"
          >
            <ChevronLeft style={{ width: 22, height: 22, color: "#555" }} />
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="flex gap-[16px] overflow-x-auto scroll-smooth flex-1 min-w-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            disabled={!canRight}
            className="flex-shrink-0 flex items-center justify-center w-7 h-7 transition disabled:opacity-20 ml-2"
            aria-label="Scroll right"
          >
            <ChevronRight style={{ width: 22, height: 22, color: "#555" }} />
          </button>
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}