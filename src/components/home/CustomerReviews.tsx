"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { reviews } from "@/data/reviews";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export function CustomerReviews() {
  return (
    <section className="bg-[#f8f4f0] py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 text-center">
          <h2 className="text-base font-bold tracking-widest text-gray-900 uppercase md:text-lg">
            Customer Review
          </h2>
          <div className="mx-auto mt-1.5 h-[2px] w-12 bg-gray-800" />
        </div>

        <Carousel opts={{ align: "start" }} className="px-9">
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200">
                      {review.avatar ? (
                        <Image
                          src={review.avatar}
                          alt={review.customerName}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center text-sm font-bold text-gray-500">
                          {review.customerName[0]}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{review.customerName}</p>
                      <StarRating rating={review.rating} />
                    </div>
                    <span className="ml-auto shrink-0 text-[10px] text-gray-400">
                      {review.date}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-gray-600">{review.text}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 border-gray-200 bg-white shadow-md hover:bg-gray-50" />
          <CarouselNext className="right-0 border-gray-200 bg-white shadow-md hover:bg-gray-50" />
        </Carousel>
      </div>
    </section>
  );
}
