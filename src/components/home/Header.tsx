"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Panjabi", href: "/category/panjabi" },
  { label: "Shirt", href: "/category/shirt" },
  { label: "Polo Shirt", href: "/category/polo-shirt" },
  { label: "Pant", href: "/category/bootcut-gurkha-pant" },
  { label: "Boxer", href: "/category/boxer" },
  { label: "T-Shirt", href: "/category/drop-shoulder-tshirt" },
  { label: "Winter", href: "/category/winter" },
  { label: "Accessories", href: "/category/accessories" },
  { label: "Shop", href: "/shop" },
  { label: "Lifestyle", href: "/lifestyle" },
];

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?text=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm font-bahnschrift">
        {/* ── Desktop header ── */}
        <div className="hidden lg:block">
          <div className="mx-auto grid max-w-[1400px] grid-cols-3 px-16 mt-10 mb-8 items-center">
            {/* Search (Left) */}
            <div className="justify-self-start relative">
              <form onSubmit={handleSearch} className="flex items-center border border-gray-100 rounded px-2 bg-white">
                <input
                  type="text"
                  placeholder="Search for products . . ."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="p-2 placeholder:font-montserrat placeholder:text-sm placeholder:text-[#818181] focus:outline-none text-sm w-48 text-gray-700"
                />
                <button type="submit" className="focus:outline-none">
                  <Search className="w-5 h-5 text-[#818181] ms-1 hover:text-black transition-colors" />
                </button>
              </form>
            </div>

            {/* Logo (Center) */}
            <div className="justify-self-center">
              <Link href="/">
                <Image
                  alt="manfare logo"
                  src="https://manfarebd.com/_next/static/media/logo.11838dda.png"
                  width={218}
                  height={44}
                  priority
                  className="object-cover"
                />
              </Link>
            </div>

            {/* Actions (Right) */}
            <div className="justify-self-end flex items-center gap-5">
              <a href="tel:+8809606999695" className="hover:opacity-85 transition-opacity">
                <Image
                  alt="contact icon"
                  src="https://manfarebd.com/_next/static/media/contact-us.f7909e90.png"
                  width={22}
                  height={22}
                />
              </a>
              <button className="relative hover:opacity-85 transition-opacity">
                <Image
                  alt="wish list icon"
                  src="https://manfarebd.com/_next/static/media/wishlist-icon.8cdfcb3a.png"
                  width={18}
                  height={22}
                />
                <span className="absolute -top-1 -right-2 flex h-5 w-5 items-center justify-center bg-[#A98153] text-[10px] text-white rounded-full font-bold">
                  0
                </span>
              </button>
              <Link href="/account" className="hover:opacity-85 transition-opacity">
                <Image
                  alt="profile icon"
                  src="https://manfarebd.com/_next/static/media/profile-icon.616a146c.png"
                  width={23}
                  height={22}
                />
              </Link>
            </div>
          </div>

          {/* Separator gold image */}
          <div className="container mx-auto px-16 shadow-sm">
            <Image
              alt=""
              src="https://manfarebd.com/_next/static/media/rectangle.a9cd1050.png"
              width={1537}
              height={3}
              className="mx-auto"
            />
          </div>

          {/* Navigation bar (Desktop) */}
          <div className="py-4">
            <ul className="flex gap-4 min-[1200px]:gap-6 min-[1400px]:gap-9 justify-center uppercase text-sm text-[#212121] tracking-wider min-[1400px]:tracking-widest font-bold">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#A98153] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Mobile/Tablet header ── */}
        <div className="flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-[6999] bg-white w-full lg:hidden h-16 px-4">
          <Sheet>
            <SheetTrigger asChild>
              <div className="cursor-pointer border-r pr-4 h-full flex items-center">
                <Image
                  alt="menu icon"
                  src="https://manfarebd.com/_next/static/media/menu-bar.11f1d03e.png"
                  width={23}
                  height={22}
                />
              </div>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-0 bg-white font-bahnschrift">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <div className="py-6 border-b border-gray-100 flex justify-center">
                <Image
                  alt="manfare logo"
                  src="https://manfarebd.com/_next/static/media/logo.11838dda.png"
                  width={175}
                  height={35}
                />
              </div>

              {/* Navigation links inside drawer */}
              <nav className="flex flex-col py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-6 py-3.5 text-sm font-semibold text-[#212121] hover:text-[#A98153] border-b border-gray-50 flex items-center justify-between transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-gray-400">→</span>
                  </Link>
                ))}
              </nav>

              {/* Call support */}
              <div className="p-6 bg-gray-50 absolute bottom-0 left-0 right-0 border-t">
                <a
                  href="tel:+8809606999695"
                  className="flex items-center gap-3 text-sm font-bold text-[#A98153]"
                >
                  <Search className="h-4 w-4 hidden" /> {/* spacer */}
                  Call Us: +880 9606999695
                </a>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo (Center) */}
          <div className="py-2">
            <Link href="/">
              <Image
                alt="manfare logo"
                src="https://manfarebd.com/_next/static/media/logo.11838dda.png"
                width={150}
                height={30}
                className="object-contain"
                style={{ aspectRatio: "5", objectFit: "cover" }}
              />
            </Link>
          </div>

          {/* Profile (Right) */}
          <div className="border-l pl-4 h-full flex items-center">
            <Link href="/account">
              <Image
                alt="contact icon"
                src="https://manfarebd.com/_next/static/media/profile-icon.616a146c.png"
                width={23}
                height={22}
              />
            </Link>
          </div>
        </div>
      </header>

      {/* ── Desktop Floating Shopping Cart ── */}
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 font-bahnschrift cursor-pointer z-40 shadow-xl border border-gray-100 rounded-l overflow-hidden">
        <div className="bg-[#46351F] flex flex-col items-center justify-center pt-3 pb-2 px-3 text-center">
          <Image
            alt="shopping icon"
            src="https://manfarebd.com/_next/static/media/shopping-icon.ce9b4cf2.png"
            width={30}
            height={37}
            className="w-[20px] h-auto object-contain"
          />
          <p className="text-[12px] text-[#F9AF5E] mt-1 font-semibold">0 items</p>
        </div>
        <p className="bg-[#A98153] text-white flex justify-center items-center py-1 text-center font-bold text-[12px]">
          <span className="ps-1">৳ 0</span>
        </p>
      </div>
    </>
  );
}
