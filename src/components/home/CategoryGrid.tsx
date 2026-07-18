"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { browseCategories } from "@/data/categories";
import type { Category } from "@/types/shop";

export function CategoryGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-16">
        {/* Section heading */}
        <div className="container">
          {/* Mobile heading */}
          <div className="flex lg:hidden items-end mt-6 justify-center">
            <h2 className="uppercase text-lg font-bahnschrift text-[#212121]">
              BROWSE OUR CATEGORIES
            </h2>
          </div>
          {/* Desktop heading */}
          <div className="hidden lg:block mt-10">
            <h2 className="uppercase text-[27px] text-center font-bahnschrift text-[#212121]">
              BROWSE OUR CATEGORIES
            </h2>
          </div>
          <hr className="border border-gray-200 mt-3" />
          <div className="w-[150px] lg:w-[288px] h-[2px] bg-[#b89579] -mt-[2px] mx-auto" />
        </div>

        {/* Swiper carousel — shows 4 at a time on desktop */}
        <div className="my-5 lg:mb-12 md:px-3 category-swiper">
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={2}
            spaceBetween={10}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 12 },
              1024: { slidesPerView: 4, spaceBetween: 16 },
            }}
            style={
              {
                "--swiper-navigation-color": "#ffffff",
                "--swiper-navigation-size": "20px",
              } as React.CSSProperties
            }
          >
            {browseCategories.map((cat) => (
              <SwiperSlide key={cat.id}>
                <CategoryCard cat={cat} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ cat }: { cat: Category }) {
  return (
    <div className="rounded-lg">
      <div className="relative">
        <Link href={`/category/${cat.slug}`}>
          <Image
            src={cat.image}
            alt={cat.name}
            width={330}
            height={220}
            className="rounded-lg w-full h-full object-cover"
            style={{ aspectRatio: "1.5" }}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </Link>
        <Link href={`/category/${cat.slug}`}>
          <p className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 bg-white uppercase text-[#4a4a4a] rounded-md px-2 sm:px-3 lg:px-10 py-1 text-xs sm:text-sm font-bahnschrift tracking-wide sm:tracking-widest hover:bg-gradient-to-l hover:from-[#977b63] hover:to-[#c0a086] hover:text-white cursor-pointer w-max transition-all duration-200">
            {cat.name}
          </p>
        </Link>
      </div>
    </div>
  );
}
