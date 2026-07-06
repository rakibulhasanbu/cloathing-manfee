"use client";

import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  productName: string;
  price: number;
  originalPrice?: number;
}

export function StickyAddToCart({ productName, price, originalPrice }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("cta-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      role="region"
      aria-label="Quick add to cart"
      className={cn(
        /* position above bottom nav (64px) */
        "fixed bottom-[64px] left-0 right-0 z-30 border-t border-gray-200 bg-white/95 px-4 py-3 shadow-2xl backdrop-blur-sm transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex items-center gap-3">
        {/* Product name + price */}
        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] text-gray-500">{productName}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-bold text-gray-900">
              ৳{price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ৳{originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* CTA */}
        <button
          id="sticky-add-to-cart-btn"
          className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#977b63] to-[#c0a086] px-5 py-2.5 text-xs font-semibold text-white shadow-md transition-opacity hover:opacity-90 active:scale-95"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
