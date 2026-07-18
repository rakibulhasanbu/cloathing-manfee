import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import type { Product } from "@/types/shop";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[18px] bg-white border border-[#e8e8e8] shadow-[0_2px_12px_rgba(0,0,0,0.08)] w-[220px]">

      {/* ── IMAGE BLOCK ── */}
      <Link href={`/product/${product.slug}`} className="relative block w-full aspect-[4/5] overflow-hidden bg-[#f0eeec]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="220px"
        />

        {/* TOP-LEFT: brand logo */}
        <div className="absolute top-[10px] left-[10px] z-10 flex items-center gap-[3px]">
          {/* small "M" monogram icon */}
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="13" height="13" rx="2" fill="white" fillOpacity="0.85" />
            <text x="2" y="10" fontSize="8" fontWeight="700" fill="#111" fontFamily="sans-serif">M</text>
          </svg>
          <span
            style={{ fontFamily: "sans-serif", letterSpacing: "0.04em" }}
            className="text-[10px] font-bold text-[#111] leading-none drop-shadow-sm"
          >
            {product.brand ?? "manflare"}
          </span>
        </div>

        {/* TOP-RIGHT: type badge e.g. HALF SHIRT */}
        {product.badge && (
          <div className="absolute top-[10px] right-[10px] z-10">
            <div className="border border-[#aaa] bg-white/80 backdrop-blur-[2px] px-[5px] py-[2px] text-center">
              {/* dotted top decoration */}
              <div className="flex justify-center gap-[2px] mb-[1px]">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-[2px] h-[2px] rounded-full bg-gray-400" />
                ))}
              </div>
              <span
                style={{ fontFamily: "sans-serif", letterSpacing: "0.12em" }}
                className="text-[8px] font-bold text-[#222] uppercase block leading-tight"
              >
                {product.badge}
              </span>
            </div>
          </div>
        )}

        {/* CLOTHING RACK: horizontal rod */}
        <div className="absolute top-[14%] left-0 right-0 z-[1] flex items-center justify-between px-3">
          {/* left vertical stand */}
          <div className="w-[1.5px] h-[52px] bg-gray-300/70 rounded-full mt-[-4px]" />
          {/* horizontal rod */}
          <div className="flex-1 h-[1.5px] bg-gray-300/80 mx-[-1px]" />
          {/* right vertical stand */}
          <div className="w-[1.5px] h-[52px] bg-gray-300/70 rounded-full mt-[-4px]" />
        </div>

        {/* BOTTOM-LEFT: SKU + rating pill */}
        <div className="absolute bottom-[10px] left-[10px] z-10 flex flex-col gap-[4px]">
          {/* SKU */}
          <div className="flex items-center gap-[3px]">
            {/* tiny Bangladesh flag placeholder */}
            <div className="w-[10px] h-[7px] rounded-[1px] bg-[#006a4e] flex items-center justify-center overflow-hidden">
              <div className="w-[4px] h-[4px] rounded-full bg-[#f42a41]" />
            </div>
            <span
              style={{ fontFamily: "monospace" }}
              className="text-[8px] text-white/90 drop-shadow leading-none"
            >
              MV-202
            </span>
          </div>

          {/* Rating pill */}
          <div className="flex items-center gap-[3px] rounded-full bg-white/95 border border-gray-200 px-[7px] py-[3px] w-fit shadow-sm">
            <span className="text-[10px] font-semibold text-gray-700 leading-none">
              {product.rating?.toFixed(1) ?? "0.0"}
            </span>
            <Star className="h-[10px] w-[10px] fill-yellow-400 text-yellow-400" />
            <span className="text-gray-300 text-[10px] mx-[1px]">|</span>
            <span className="text-[10px] text-gray-500 leading-none">
              {typeof product.reviewCount === "number"
                ? product.reviewCount.toFixed(1)
                : "0.0"}
            </span>
          </div>
        </div>

        {/* BOTTOM-RIGHT: Made in Bangladesh */}
        <div className="absolute bottom-[10px] right-[10px] z-10 text-right">
          <span
            style={{ fontFamily: "sans-serif", letterSpacing: "0.05em" }}
            className="text-[7px] font-semibold text-white/90 uppercase drop-shadow leading-tight block"
          >
            MADE IN
          </span>
          <span
            style={{ fontFamily: "sans-serif", letterSpacing: "0.05em" }}
            className="text-[7px] font-semibold text-white/90 uppercase drop-shadow leading-tight block"
          >
            {product.madeIn ?? "BANGLADESH"}
          </span>
        </div>
      </Link>

      {/* ── INFO BLOCK ── */}
      <div className="flex flex-col gap-[6px] px-[12px] pt-[10px] pb-[12px]">

        {/* Product name */}
        <Link href={`/product/${product.slug}`}>
          <p
            style={{ fontFamily: "sans-serif" }}
            className="text-[12.5px] font-normal leading-[1.4] text-[#1c1c1c] line-clamp-1 hover:text-black transition-colors"
          >
            {product.name}
          </p>
        </Link>

        {/* Price */}
        <div className="flex items-center gap-[8px]">
          <span
            style={{ fontFamily: "sans-serif" }}
            className="text-[14px] font-bold text-[#111]"
          >
            TK. {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span
              style={{ fontFamily: "sans-serif" }}
              className="text-[11px] text-gray-400 line-through"
            >
              TK. {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <div className="flex justify-center mt-[2px]">
          <button
            style={{ fontFamily: "sans-serif", letterSpacing: "0.04em" }}
            className="w-full max-w-[176px] rounded-full border border-[#c8c8c8] bg-white py-[7px] text-[11px] font-semibold text-[#2a2a2a] transition duration-150 hover:bg-gray-50 hover:border-gray-400 active:scale-[0.98]"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}