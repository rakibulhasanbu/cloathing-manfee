"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  /* Reset gallery when color changes (images prop changes) */
  useEffect(() => {
    setFade(false);
    const t = setTimeout(() => {
      setActiveIndex(0);
      setFade(true);
    }, 150);
    return () => clearTimeout(t);
  }, [images]);

  const selectImage = (index: number) => {
    if (index === activeIndex) return;
    setFade(false);
    setTimeout(() => {
      setActiveIndex(index);
      setFade(true);
    }, 150);
  };

  const thumbnails = images.map((src, i) => (
    <button
      key={`${src}-${i}`}
      onClick={() => selectImage(i)}
      aria-label={`View image ${i + 1}`}
      className={cn(
        "relative h-[72px] w-[72px] flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#977b63]",
        i === activeIndex
          ? "border-[#977b63] shadow-md ring-1 ring-[#977b63]/30"
          : "border-transparent bg-gray-100 hover:border-[#c0a086]"
      )}
    >
      <Image
        src={src}
        alt={`${productName} — thumbnail ${i + 1}`}
        fill
        className="object-cover"
        sizes="72px"
      />
    </button>
  ));

  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-4">
      {/* ── Thumbnail strip ─────────────────────────────────────────────
          Desktop: vertical column on the LEFT
          Mobile:  horizontal scrollable row BELOW the main image      */}
      <div className="order-2 flex flex-row gap-2 overflow-x-auto pb-1 md:order-1 md:w-[72px] md:flex-col md:overflow-x-hidden md:overflow-y-auto md:pb-0">
        {thumbnails}
      </div>

      {/* ── Main image ─────────────────────────────────────────────────
          Desktop: right side (flex-1)
          Mobile:  top (order-1)                                       */}
      <div className="order-1 min-w-0 flex-1 md:order-2">
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-2xl bg-gray-50 shadow-sm transition-opacity duration-200",
            fade ? "opacity-100" : "opacity-0"
          )}
          style={{ aspectRatio: "4 / 5" }}
        >
          <Image
            src={images[activeIndex] ?? images[0]}
            alt={`${productName} — view ${activeIndex + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Dot indicator (mobile only) */}
        {images.length > 1 && (
          <div className="mt-3 flex justify-center gap-1.5 md:hidden">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => selectImage(i)}
                aria-label={`Go to image ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-200",
                  i === activeIndex ? "w-5 bg-[#977b63]" : "w-1.5 bg-gray-300"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
