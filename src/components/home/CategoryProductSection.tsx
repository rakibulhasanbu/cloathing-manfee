"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { Product, Category } from "@/types/shop";

/* ─────────────────────────────────────────
   MINI PRODUCT CARD  (Panjabi style)
───────────────────────────────────────── */
function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="flex flex-col bg-white overflow-hidden"
      style={{ borderRadius: 14, boxShadow: "0 2px 10px rgba(0,0,0,0.07)" }}
    >
      {/* IMAGE */}
      <Link
        href={`/product/${product.slug}`}
        className="relative block w-full overflow-hidden bg-[#e8e8e8]"
        style={{ aspectRatio: "3 / 4" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 50vw, 22vw"
        />

        {/* TOP-LEFT: manflare brand */}
        <div
          className="absolute top-[9px] left-[9px] z-10 flex items-center gap-[3px] px-[5px] py-[2px] rounded-[3px]"
          style={{ background: "rgba(255,255,255,0.78)", backdropFilter: "blur(2px)" }}
        >
          {/* M icon */}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect width="12" height="12" rx="2" fill="white" fillOpacity="0.0" />
            <text x="1" y="10" fontSize="9" fontWeight="800" fill="#111" fontFamily="serif">M</text>
          </svg>
          <span style={{ fontFamily: "sans-serif", fontSize: 9.5, fontWeight: 700, color: "#111", letterSpacing: "0.04em" }}>
            {product.brand ?? "manflare"}
          </span>
        </div>

        {/* BOTTOM-LEFT: SKU text + rating pill */}
        <div className="absolute bottom-[9px] left-[9px] z-10 flex flex-col gap-[4px]">
          {/* SKU / signature */}
          {product.sku && (
            <span style={{ fontFamily: "cursive", fontSize: 8, color: "rgba(255,255,255,0.75)", lineHeight: 1 }}>
              {product.sku}
            </span>
          )}
          {/* Dark rating pill */}
          <div
            className="flex items-center gap-[3px] px-[6px] py-[3px] w-fit"
            style={{ background: "rgba(20,20,20,0.78)", borderRadius: 4, backdropFilter: "blur(2px)" }}
          >
            <span style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 600, color: "#fff", lineHeight: 1 }}>
              {product.rating?.toFixed(1) ?? "0.0"}
            </span>
            <Star style={{ width: 9, height: 9, fill: "#facc15", color: "#facc15" }} />
            <span style={{ color: "#666", fontSize: 10, lineHeight: 1 }}>|</span>
            <span style={{ fontFamily: "sans-serif", fontSize: 10, color: "#ccc", lineHeight: 1 }}>
              {typeof product.reviewCount === "number" ? product.reviewCount.toFixed(1) : "0.0"}
            </span>
          </div>
        </div>

        {/* BOTTOM-RIGHT: SKU code */}
        {product.sku && (
          <div className="absolute bottom-[9px] right-[9px] z-10 text-right">
            <span style={{ fontFamily: "monospace", fontSize: 7, color: "rgba(255,255,255,0.7)", lineHeight: 1 }}>
              {product.sku}
            </span>
          </div>
        )}
      </Link>

      {/* INFO */}
      <div className="flex flex-col gap-[5px] px-[12px] pt-[10px] pb-[12px]">
        {/* Name */}
        <Link href={`/product/${product.slug}`}>
          <p style={{ fontFamily: "sans-serif", fontSize: 12.5, color: "#1c1c1c", lineHeight: 1.4, fontWeight: 400 }}
            className="line-clamp-1 hover:text-black transition-colors">
            {product.name}
          </p>
        </Link>

        {/* Price */}
        <div className="flex items-center gap-[7px]">
          <span style={{ fontFamily: "sans-serif", fontSize: 14, fontWeight: 700, color: "#111" }}>
            TK. {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span style={{ fontFamily: "sans-serif", fontSize: 11.5, color: "#aaa", textDecoration: "line-through" }}>
              TK. {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add To Cart */}
        <div className="flex justify-center mt-[4px]">
          <button
            style={{ fontFamily: "sans-serif", fontSize: 11.5, fontWeight: 500, color: "#2a2a2a", letterSpacing: "0.03em" }}
            className="w-full max-w-[190px] rounded-full border border-[#c8c8c8] bg-white py-[7px] transition duration-150 hover:bg-gray-50 hover:border-gray-400 active:scale-[0.98]"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   CATEGORY PRODUCT SECTION
───────────────────────────────────────── */
interface Props {
  category: Category;
  products: Product[];
  imagePosition?: "left" | "right";
  bannerImage?: string;
}

export function CategoryProductSection({
  category,
  products,
  imagePosition = "left",
  bannerImage,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const banner = bannerImage ?? category.image;

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) setCanRight(el.scrollWidth > el.clientWidth);
  }, [products]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
  };

  /* ── Left banner panel ── */
  const bannerPanel = (
    <div
      className="relative flex-shrink-0 overflow-hidden"
      style={{ width: "27%", minWidth: 220, minHeight: 500 }}
    >
      <Link href={`/category/${category.slug}`} className="block w-full h-full">
        <Image
          src={banner}
          alt={category.name}
          fill
          className="object-cover object-center"
          sizes="27vw"
        />
      </Link>

      {/* Ghost watermark text */}
      <div
        className="absolute bottom-[70px] left-0 right-0 text-center pointer-events-none select-none"
        style={{ zIndex: 2 }}
      >
        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: 28,
            fontWeight: 900,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.18)",
            lineHeight: 1,
            display: "block",
          }}
        >
          {category.name}
        </span>
      </div>

      {/* VIEW ALL pill button */}
      <div
        className="absolute bottom-[22px] left-0 right-0 flex justify-center"
        style={{ zIndex: 3 }}
      >
        <Link
          href={`/category/${category.slug}`}
          className="flex items-center gap-[6px] bg-white rounded-full px-[18px] py-[7px] hover:bg-gray-100 transition"
          style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.18)" }}
        >
          <span
            style={{
              fontFamily: "sans-serif",
              fontSize: 11.5,
              fontWeight: 700,
              color: "#111",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            VIEW ALL
          </span>
          {/* cursor/arrow icon */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 4 L7 11 L8 7 L12 6 Z" fill="#222" />
          </svg>
        </Link>
      </div>
    </div>
  );

  /* ── Product slider panel ── */
  const sliderPanel = (
    <div className="relative flex-1 flex items-center min-w-0" style={{ padding: "28px 0" }}>
      {/* Left arrow — sits between banner and first card */}
      <button
        onClick={() => scroll("left")}
        disabled={!canLeft}
        className="flex-shrink-0 flex items-center justify-center w-8 h-8 transition disabled:opacity-20"
        aria-label="Scroll left"
        style={{ marginLeft: 8, marginRight: 8 }}
      >
        <ChevronLeft style={{ width: 22, height: 22, color: "#444" }} />
      </button>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex gap-[14px] overflow-x-auto scroll-smooth flex-1 min-w-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", paddingRight: 8 }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0"
            style={{ width: "calc((100% - 3 * 14px) / 3.35)" }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Right arrow — far right edge */}
      <button
        onClick={() => scroll("right")}
        disabled={!canRight}
        className="flex-shrink-0 flex items-center justify-center w-8 h-8 transition disabled:opacity-20"
        aria-label="Scroll right"
        style={{ marginLeft: 8, marginRight: 4 }}
      >
        <ChevronRight style={{ width: 22, height: 22, color: "#444" }} />
      </button>
    </div>
  );

  return (
    <section className="bg-[#f3f3f3] my-5 lg:my-10 overflow-hidden">
      <div
        className="mx-auto max-w-[1400px] flex"
        style={{ flexDirection: imagePosition === "right" ? "row-reverse" : "row", minHeight: 500 }}
      >
        {bannerPanel}
        {sliderPanel}
      </div>

      <style jsx>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}