"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Zap,
  Phone,
  Facebook,
  MessageCircle,
  Instagram,
} from "lucide-react";
import type { ProductDetail } from "@/types/shop";
import { cn } from "@/lib/utils";

/* ── Star renderer ───────────────────────────────────────────────────── */
const STAR_PATH =
  "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width={15} height={15} viewBox="0 0 24 24" aria-hidden="true">
          <path d={STAR_PATH} fill={s <= Math.round(rating) ? "#FBCA51" : "#e5e7eb"} />
        </svg>
      ))}
    </div>
  );
}

/* ── Props ───────────────────────────────────────────────────────────── */
interface Props {
  product: ProductDetail;
  onColorChange: (images: string[]) => void;
}

/* ── Component ───────────────────────────────────────────────────────── */
export function ProductInfo({ product, onColorChange }: Props) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const handleColorSelect = (index: number) => {
    setSelectedColorIndex(index);
    const imgs = product.colors[index]?.images;
    if (imgs?.length) onColorChange(imgs);
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* ── SKU ── */}
      <p className="text-[11px] font-medium tracking-[0.2em] text-gray-400 uppercase">
        SKU: {product.sku}
      </p>

      {/* ── Title ── */}
      <h1 className="text-xl font-semibold leading-snug text-gray-900 md:text-2xl">
        {product.name}
      </h1>

      {/* ── Price ── */}
      <div className="flex flex-wrap items-baseline gap-3">
        <span className="text-3xl font-bold tracking-tight text-gray-900">
          ৳{product.price.toLocaleString()}
        </span>
        {product.originalPrice && (
          <>
            <span className="text-lg text-gray-400 line-through">
              ৳{product.originalPrice.toLocaleString()}
            </span>
            <span className="rounded-full bg-red-500 px-2.5 py-0.5 text-[11px] font-bold text-white">
              {discount}% OFF
            </span>
          </>
        )}
      </div>

      {/* ── Rating badge ── */}
      {product.reviewCount > 0 && (
        <a
          href="#product-reviews"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 shadow-sm transition-colors hover:border-[#977b63]"
        >
          <span className="text-sm font-bold text-gray-900">{product.rating.toFixed(1)}</span>
          <Stars rating={product.rating} />
          <span className="text-xs text-gray-500">| {product.reviewCount} Reviews</span>
        </a>
      )}

      <hr className="border-gray-100" />

      {/* ── Color selector ── */}
      {product.colors.length > 0 && (
        <div className="space-y-2">
          <p className="text-[11px] font-semibold tracking-[0.15em] text-gray-700 uppercase">
            COLOR:{" "}
            <span className="font-normal capitalize text-gray-500">
              {product.colors[selectedColorIndex]?.name}
            </span>
          </p>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color, i) => (
              <button
                key={color.name}
                onClick={() => handleColorSelect(i)}
                aria-label={`Select color: ${color.name}`}
                title={color.name}
                className={cn(
                  "relative h-[58px] w-[58px] overflow-hidden rounded-xl border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#977b63]",
                  i === selectedColorIndex
                    ? "border-[#977b63] shadow-md scale-105"
                    : "border-gray-200 hover:border-[#c0a086]"
                )}
              >
                <Image
                  src={color.swatchImage}
                  alt={color.name}
                  fill
                  className="object-cover"
                  sizes="58px"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Size selector ── */}
      {product.sizes.length > 0 && (
        <div className="space-y-2">
          <p className="text-[11px] font-semibold tracking-[0.15em] text-gray-700 uppercase">
            SIZE
          </p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size === selectedSize ? null : size)}
                aria-pressed={selectedSize === size}
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full border text-xs font-semibold uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#977b63]",
                  selectedSize === size
                    ? "border-transparent bg-gradient-to-br from-[#c0a086] to-[#977b63] text-white shadow-md scale-105"
                    : "border-gray-300 text-gray-600 hover:border-[#977b63] hover:text-[#977b63]"
                )}
              >
                {size}
              </button>
            ))}
          </div>
          {product.stock > 0 && (
            <p className="text-xs text-emerald-600 font-medium">
              ✓ {product.stock} items in stock
            </p>
          )}
        </div>
      )}

      <hr className="border-gray-100" />

      {/* ── Quantity + CTAs ── */}
      <div className="flex flex-wrap gap-3">
        {/* Quantity stepper */}
        <div className="flex items-center overflow-hidden rounded-lg border border-gray-200 bg-white">
          <button
            id="qty-decrease-btn"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="flex h-10 w-10 items-center justify-center text-gray-600 transition-colors hover:bg-gray-50 active:bg-gray-100"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          <span className="w-10 select-none text-center text-sm font-semibold text-gray-900">
            {qty}
          </span>
          <button
            id="qty-increase-btn"
            onClick={() => setQty((q) => q + 1)}
            aria-label="Increase quantity"
            className="flex h-10 w-10 items-center justify-center text-gray-600 transition-colors hover:bg-gray-50 active:bg-gray-100"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Add to Cart */}
        <button
          id="add-to-cart-btn"
          onClick={handleAddToCart}
          className={cn(
            "flex flex-1 items-center justify-center gap-2 rounded-lg border-2 px-5 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98]",
            addedToCart
              ? "border-gray-900 bg-gray-900 text-white"
              : "border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"
          )}
        >
          <ShoppingCart className="h-4 w-4" />
          {addedToCart ? "Added to Cart!" : "Add to Cart"}
        </button>

        {/* Buy Now */}
        <button
          id="buy-now-btn"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#977b63] to-[#c0a086] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg hover:opacity-90 active:scale-[0.98]"
        >
          <Zap className="h-4 w-4" />
          Buy Now
        </button>
      </div>

      {/* Sentinel — StickyAddToCart observes when this scrolls out of view */}
      <div id="cta-sentinel" className="h-px" aria-hidden="true" />

      {/* ── Wishlist + Share ── */}
      <div className="flex items-center justify-between">
        <button
          id="wishlist-btn"
          onClick={() => setWishlisted((w) => !w)}
          aria-pressed={wishlisted}
          className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-gray-500 transition-colors hover:text-[#977b63]"
        >
          <Heart
            className={cn("h-4 w-4 transition-colors", wishlisted && "fill-[#977b63] text-[#977b63]")}
          />
          {wishlisted ? "Wishlisted" : "Add to Wishlist"}
        </button>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>Share:</span>
          {[
            { Icon: Facebook, label: "Share on Facebook", hover: "hover:border-blue-500 hover:text-blue-600" },
            { Icon: MessageCircle, label: "Share on WhatsApp", hover: "hover:border-green-500 hover:text-green-600" },
            { Icon: Instagram, label: "Share on Instagram", hover: "hover:border-pink-500 hover:text-pink-600" },
          ].map(({ Icon, label, hover }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-150",
                hover
              )}
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>

      {/* ── Call us ── */}
      <a
        href="tel:+8809606999695"
        className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 transition-colors hover:border-[#977b63] hover:text-[#977b63]"
      >
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#c0a086] to-[#977b63]">
          <Phone className="h-4 w-4 text-white" />
        </div>
        <span>
          Need help? Call us:{" "}
          <span className="font-semibold">+880 9606-999695</span>
        </span>
      </a>
    </div>
  );
}
