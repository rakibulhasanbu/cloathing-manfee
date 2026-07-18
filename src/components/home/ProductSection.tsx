"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import type { Product } from "@/types/shop";

/* ─────────────────────────────────────────
   PRODUCT CARD  (pixel-perfect Manflare)
───────────────────────────────────────── */
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[12px] bg-white border border-[#e2e2e2]" style={{ minWidth: 0 }}>

      {/* IMAGE BLOCK */}
      <Link href={`/product/${product.slug}`} className="relative block w-full bg-[#efefef]" style={{ aspectRatio: "1 / 1.05" }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
        />

        {/* TOP-LEFT: manflare brand */}
        <div className="absolute top-[9px] left-[9px] z-10 flex items-center gap-[3px]">
          <div className="w-[14px] h-[14px] rounded-[2px] bg-white/90 flex items-center justify-center">
            <span style={{ fontFamily: "serif", fontSize: 9, fontWeight: 800, color: "#111", lineHeight: 1 }}>M</span>
          </div>
          <span style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700, color: "#111", letterSpacing: "0.04em", textShadow: "0 1px 2px rgba(255,255,255,0.7)" }}>
            {product.brand ?? "manflare"}
          </span>
        </div>

        {/* TOP-RIGHT: badge with ✕ and red cursive label */}
        {product.badge && (
          <div className="absolute top-[9px] right-[9px] z-10 flex flex-col items-end gap-[1px]">
            {/* red cursive label above badge */}
            <span style={{ fontFamily: "cursive", fontSize: 8, color: "#e03030", lineHeight: 1, fontStyle: "italic" }}>
              {product.badgeLabel ?? "Top Picks"}
            </span>
            {/* badge box */}
            <div className="relative border border-[#999] bg-white/85 backdrop-blur-[1px] px-[5px] pt-[2px] pb-[2px]">
              {/* ✕ close icon top-right of badge */}
              <button className="absolute -top-[5px] -right-[5px] w-[10px] h-[10px] rounded-full bg-[#555] flex items-center justify-center">
                <X className="w-[6px] h-[6px] text-white" strokeWidth={3} />
              </button>
              {/* dots row */}
              <div className="flex justify-center gap-[1.5px] mb-[2px]">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-[1.5px] h-[1.5px] rounded-full bg-[#888]" />
                ))}
              </div>
              <span style={{ fontFamily: "sans-serif", fontSize: 7.5, fontWeight: 800, color: "#222", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", lineHeight: 1.3 }}>
                {product.badge}
              </span>
            </div>
          </div>
        )}

        {/* LEFT SIDE: decorative vertical text/marks */}
        <div className="absolute left-[10px] top-1/2 -translate-y-1/2 z-10 flex flex-col gap-[3px] opacity-70">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-[1px] h-[6px] bg-white/60 rounded-full" />
          ))}
        </div>

        {/* BOTTOM-LEFT: rating pill — dark background */}
        <div className="absolute bottom-[9px] left-[9px] z-10 flex flex-col gap-[3px]">
          {/* SKU line */}
          <div className="flex items-center gap-[3px]">
            <div className="w-[10px] h-[7px] rounded-[1px] bg-[#006a4e] flex items-center justify-center">
              <div className="w-[4px] h-[4px] rounded-full bg-[#f42a41]" />
            </div>
            <span style={{ fontFamily: "monospace", fontSize: 7.5, color: "rgba(255,255,255,0.85)", lineHeight: 1 }}>
              {product.sku ?? "MV-202"}
            </span>
          </div>
          {/* rating pill — DARK background matching image */}
          <div className="flex items-center gap-[3px] rounded-[4px] bg-[#1a1a1a]/80 border border-[#444] px-[6px] py-[3px] w-fit backdrop-blur-[1px]">
            <span style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 600, color: "#fff", lineHeight: 1 }}>
              {product.rating?.toFixed(1) ?? "0.0"}
            </span>
            <Star className="h-[9px] w-[9px] fill-yellow-400 text-yellow-400" />
            <span style={{ color: "#666", fontSize: 10 }}>|</span>
            <span style={{ fontFamily: "sans-serif", fontSize: 10, color: "#ddd", lineHeight: 1 }}>
              {typeof product.reviewCount === "number" ? product.reviewCount : "0.0"}
            </span>
          </div>
        </div>

        {/* BOTTOM-RIGHT: Made in Bangladesh */}
        <div className="absolute bottom-[9px] right-[9px] z-10 text-right">
          <span style={{ fontFamily: "sans-serif", fontSize: 6.5, fontWeight: 700, color: "rgba(255,255,255,0.88)", letterSpacing: "0.06em", textTransform: "uppercase", lineHeight: 1.5, display: "block" }}>
            MADE IN
          </span>
          <span style={{ fontFamily: "sans-serif", fontSize: 6.5, fontWeight: 700, color: "rgba(255,255,255,0.88)", letterSpacing: "0.06em", textTransform: "uppercase", lineHeight: 1.5, display: "block" }}>
            {product.madeIn ?? "BANGLADESH"}
          </span>
        </div>
      </Link>

      {/* INFO BLOCK */}
      <div className="flex flex-col gap-[5px] px-[12px] pt-[10px] pb-[12px] bg-white">
        {/* Name */}
        <Link href={`/product/${product.slug}`}>
          <p style={{ fontFamily: "sans-serif", fontSize: 12.5, color: "#1c1c1c", lineHeight: 1.45, fontWeight: 400 }}
            className="line-clamp-1 hover:text-black transition-colors">
            {product.name}
          </p>
        </Link>

        {/* Price */}
        <div className="flex items-center gap-[8px]">
          <span style={{ fontFamily: "sans-serif", fontSize: 14, fontWeight: 700, color: "#111" }}>
            TK. {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span style={{ fontFamily: "sans-serif", fontSize: 11, color: "#aaa", textDecoration: "line-through" }}>
              TK. {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add To Cart */}
        <div className="flex justify-center mt-[4px]">
          <button
            style={{ fontFamily: "sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", color: "#2a2a2a" }}
            className="w-full max-w-[200px] rounded-full border border-[#c8c8c8] bg-white py-[7px] uppercase transition duration-150 hover:bg-gray-50 hover:border-gray-400 active:scale-[0.98]"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   PRODUCT SECTION
───────────────────────────────────────── */
interface Props {
  title: string;
  products: Product[];
  viewAllHref?: string;
}

export function ProductSection({ title, products, viewAllHref }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-10">

        {/* HEADER ROW */}
        <div className="relative flex items-start justify-center mb-7">
          {/* Center: title + underline */}
          <div className="flex flex-col items-center">
            <h2
              style={{ fontFamily: "sans-serif", fontSize: 22, fontWeight: 700, letterSpacing: "0.22em", color: "#212121", textTransform: "uppercase" }}
            >
              {title}
            </h2>
            {/* tan/brown underline — centered, short */}
            <div style={{ width: 110, height: 2, backgroundColor: "#b89579", borderRadius: 2, marginTop: 6 }} />
          </div>

          {/* View All — absolute top-right */}
          {viewAllHref && (
            <Link
              href={viewAllHref}
              style={{ fontFamily: "sans-serif", fontSize: 13, fontWeight: 600, color: "#333", letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none" }}
              className="absolute right-0 top-0 hover:text-black transition-colors"
            >
              View All
            </Link>
          )}
        </div>

        {/* CAROUSEL WRAPPER */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-[#d0d0d0] shadow-sm flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 disabled:cursor-default transition"
          >
            <ChevronLeft className="w-5 h-5 text-[#3b3b3b]" />
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="flex gap-[14px] overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0"
                style={{ width: "calc((100% - 4 * 14px) / 4.3)" }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-[#d0d0d0] shadow-sm flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 disabled:cursor-default transition"
          >
            <ChevronRight className="w-5 h-5 text-[#3b3b3b]" />
          </button>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}