import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import type { Product } from "@/types/shop";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm transition-all hover:shadow-md">
      <Link href={`/product/${product.slug}`} className="relative block overflow-hidden">
        <div className="relative aspect-[3/4] w-full bg-gray-100 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
          <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 rounded bg-white/90 border border-gray-200/60 px-2 py-0.5 text-[10px] font-bold text-gray-800 shadow-sm">
            <span>{product.rating?.toFixed(1) ?? "0.0"}</span>
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">{product.reviewCount ?? "0"}</span>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-3.5">
        <Link href={`/product/${product.slug}`}>
          <p className="block truncate text-[13px] font-medium text-gray-600 hover:text-black transition-colors font-bahnschrift">
            {product.name}
          </p>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-[13px] font-bold text-gray-900 font-bahnschrift">
            TK. {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-[11px] text-gray-400 line-through font-bahnschrift">
              TK. {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        <div className="mt-auto flex justify-center pt-1.5">
          <button className="rounded-full border border-gray-200 bg-white px-5 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-black transition-all font-bahnschrift">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
