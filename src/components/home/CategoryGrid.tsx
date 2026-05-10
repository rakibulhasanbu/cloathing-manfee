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
import { browseCategories } from "@/data/categories";
import type { Category } from "@/types/shop";

export function CategoryGrid() {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 text-center">
          <h2 className="text-lg font-bold tracking-widest text-gray-900 uppercase md:text-xl">
            Browse Our Categories
          </h2>
          <div className="mx-auto mt-1.5 h-[2px] w-16 bg-gray-800" />
        </div>

        {/* Desktop static grid */}
        <div className="hidden gap-4 lg:grid lg:grid-cols-7">
          {browseCategories.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} />
          ))}
        </div>

        {/* Mobile / tablet carousel */}
        <div className="lg:hidden">
          <Carousel opts={{ align: "start" }} className="px-8">
            <CarouselContent className="-ml-3">
              {browseCategories.map((cat) => (
                <CarouselItem
                  key={cat.id}
                  className="pl-3 basis-1/2 min-[480px]:basis-1/3 md:basis-1/4"
                >
                  <CategoryCard cat={cat} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 h-7 w-7 border-gray-300 bg-white shadow-md hover:bg-gray-50" />
            <CarouselNext className="right-0 h-7 w-7 border-gray-300 bg-white shadow-md hover:bg-gray-50" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ cat }: { cat: Category }) {
  return (
    <Link
      href={`/category/${cat.slug}`}
      className="group relative block overflow-hidden rounded-lg"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
        <Image
          src={cat.image}
          alt={cat.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 14vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <span className="inline-block rounded bg-black/70 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
            {cat.name}
          </span>
        </div>
      </div>
    </Link>
  );
}
