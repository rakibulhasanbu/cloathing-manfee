"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  const banner = bannerImage ?? category.image;

  const gridClass =
    imagePosition === "left"
      ? "grid grid-cols-1 items-start gap-4 md:grid-cols-[1.2fr_3fr]"
      : "grid grid-cols-1 items-start gap-4 md:grid-cols-[3fr_1.2fr]";

  const categoryPanel = (
    <Link
      href={`/category/${category.slug}`}
      className="group relative block h-full overflow-hidden rounded-xl"
    >
      <div className="relative h-full min-h-[300px] overflow-hidden bg-gray-100 md:min-h-[420px]">
        <Image
          src={banner}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="mb-2 font-serif text-xl font-bold text-white uppercase">
            {category.name}
          </h3>
          <span className="inline-block rounded border border-white px-4 py-1.5 text-xs font-semibold tracking-widest text-white uppercase transition-all hover:bg-white hover:text-black">
            Shop Now
          </span>
        </div>
      </div>
    </Link>
  );

  const productSlider = (
    <Carousel opts={{ align: "start" }} className="px-8">
      <CarouselContent className="-ml-3">
        {products.map((product) => (
          <CarouselItem key={product.id} className="pl-3 basis-1/2 md:basis-1/3">
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 border-gray-200 bg-white shadow-md hover:bg-gray-50" />
      <CarouselNext className="right-0 border-gray-200 bg-white shadow-md hover:bg-gray-50" />
    </Carousel>
  );

  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className={gridClass}>
          {imagePosition === "left" ? (
            // Products DOM-first so they appear first on mobile stack.
            // Explicit grid placement keeps banner in col-1 (narrow) on desktop.
            <>
              <div className="md:col-start-2 md:row-start-1">{productSlider}</div>
              <div className="h-full md:col-start-1 md:row-start-1">{categoryPanel}</div>
            </>
          ) : (
            <>
              <div>{productSlider}</div>
              <div className="h-full">{categoryPanel}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
