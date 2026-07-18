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
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-16 my-5 lg:mb-8">
        {title && (
          <div className="container mb-4">
            {/* Mobile heading */}
            <div className="flex lg:hidden items-end mt-3 justify-between">
              <h2 className="uppercase text-lg font-bahnschrift text-[#212121]">
                {title}
              </h2>
              {viewAllHref && (
                <Link
                  href={viewAllHref}
                  className="text-sm text-gray-500 hover:text-black transition-colors font-bahnschrift"
                >
                  View All
                </Link>
              )}
            </div>
            {/* Desktop heading */}
            <div className="hidden lg:block">
              <h2 className="uppercase text-[27px] text-center font-bahnschrift text-[#212121] -mb-5">
                {title}
              </h2>
              {viewAllHref && (
                <div className="flex justify-end">
                  <Link
                    href={viewAllHref}
                    className="text-sm text-gray-500 hover:text-black transition-colors font-bahnschrift"
                  >
                    View All
                  </Link>
                </div>
              )}
            </div>
            <hr className="border border-gray-200 mt-3" />
            <div className="w-[150px] lg:w-[288px] h-[2px] bg-[#b89579] -mt-[2px] lg:mx-auto" />
          </div>
        )}

        <div className="container relative">
          <Carousel opts={{ align: "start" }} className="px-8 md:px-10">
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
            <CarouselPrevious className="left-0 border-0 bg-transparent hover:bg-transparent text-gray-500 hover:text-black shadow-none disabled:opacity-20 [&_svg]:h-6 [&_svg]:w-6" />
            <CarouselNext className="right-0 border-0 bg-transparent hover:bg-transparent text-gray-500 hover:text-black shadow-none disabled:opacity-20 [&_svg]:h-6 [&_svg]:w-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
