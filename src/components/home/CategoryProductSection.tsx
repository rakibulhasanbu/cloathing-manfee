"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/home/ProductCard";
import type { Product, Category } from "@/types/shop";

interface Props {
  category: Category;
  products: Product[];
  imagePosition: "left" | "right";
  bannerImage?: string;
}

export function CategoryProductSection({
  category,
  products,
  imagePosition,
  bannerImage,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const banner = bannerImage ?? category.image;

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -280 : 280,
      behavior: "smooth",
    });
  };

  const categoryPanel = (
    <div className="flex-1">
      {/* Desktop tall banner image */}
      <Link href={`/category/${category.slug}`}>
        <Image
          src={banner}
          alt={category.name}
          width={370}
          height={470}
          className="hidden md:block h-full w-full object-cover max-w-[900px]"
          style={{ aspectRatio: "0.787" }}
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </Link>
      {/* Mobile wide banner image */}
      <Link href={`/category/${category.slug}`}>
        <Image
          src={banner}
          alt={category.name}
          width={1950}
          height={840}
          className="md:hidden w-full h-full object-cover rounded-t-lg"
          style={{ aspectRatio: "2.32" }}
          sizes="100vw"
        />
      </Link>
    </div>
  );

  const productSlider = (
    <div className="flex-1 w-[88%] md:w-[75%] md:px-10 mx-auto">
      <div className="my-6 relative">
        <button
          aria-label="Scroll left"
          onClick={() => scroll("left")}
          className="preBtn absolute top-1/2 -left-4 sm:-left-5 md:-left-8 z-10 -translate-y-1/2"
        >
          <ChevronLeft className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 text-gray-700" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-4 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div key={product.id} className="shrink-0 w-[44vw] sm:w-[30vw] md:w-[22vw] lg:w-[18vw]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <button
          aria-label="Scroll right"
          onClick={() => scroll("right")}
          className="nextBtn absolute top-1/2 -right-4 sm:-right-5 md:-right-8 z-10 -translate-y-1/2"
        >
          <ChevronRight className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );

  return (
    <section className="bg-[#f3f3f3] my-5 lg:my-12">
      <div
        className={`mx-auto max-w-[1400px] flex flex-col md:flex-row ${
          imagePosition === "right" ? "md:flex-row-reverse" : ""
        }`}
      >
        {categoryPanel}
        {productSlider}
      </div>
    </section>
  );
}
