import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/shop";

const badgeStyles: Record<string, string> = {
  NEW: "bg-emerald-500 text-white",
  SALE: "bg-red-500 text-white",
  HOT: "bg-orange-500 text-white",
};

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white transition-shadow hover:shadow-md">
      <Link href={`/product/${product.slug}`} className="relative block overflow-hidden">
        <div className="relative aspect-[3/4] w-full bg-gray-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
          {product.badge && (
            <span
              className={cn(
                "absolute top-2 left-2 rounded px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase",
                badgeStyles[product.badge]
              )}
            >
              {product.badge}
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-2.5">
        <Link href={`/product/${product.slug}`}>
          <p className="line-clamp-2 text-xs font-medium text-gray-800 hover:text-black">
            {product.name}
          </p>
        </Link>

        <div className="flex items-center gap-1.5">
          <span className="text-sm font-bold text-gray-900">
            ৳{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              ৳{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        <button className="mt-auto flex w-full items-center justify-center gap-1.5 rounded bg-gray-900 py-1.5 text-[11px] font-medium text-white transition-colors hover:bg-black">
          <ShoppingCart className="h-3 w-3" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
