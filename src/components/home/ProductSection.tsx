"use client";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCard } from "@/components/home/ProductCard";
import type { Product } from "@/types/shop";

interface Props {
  title: string;
  products: Product[];
  viewAllHref?: string;
}

export function ProductSection({ title, products, viewAllHref }: Props) {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-4">
        {title && (
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold tracking-widest text-gray-900 uppercase md:text-lg">
                {title}
              </h2>
              <div className="mt-1 h-[2px] w-12 bg-gray-800" />
            </div>
            {viewAllHref && (
              <Link
                href={viewAllHref}
                className="text-xs font-medium text-gray-600 underline-offset-2 hover:underline"
              >
                View All
              </Link>
            )}
          </div>
        )}

        <Carousel opts={{ align: "start" }} className="px-9">
          <CarouselContent className="-ml-3">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-3 basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 top-[38%] border-gray-200 bg-white shadow-md hover:bg-gray-50" />
          <CarouselNext className="right-0 top-[38%] border-gray-200 bg-white shadow-md hover:bg-gray-50" />
        </Carousel>
      </div>
    </section>
  );
}
