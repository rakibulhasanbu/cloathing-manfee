"use client";

import Link from "next/link";
import { Menu, Phone, Heart, ShoppingCart, User, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { navItems } from "@/data/categories";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      {/* ── Desktop top bar ── */}
      <div className="mx-auto hidden max-w-7xl items-center gap-6 px-6 py-3 md:flex">
        {/* Search */}
        <div className="w-64">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input className="h-9 pl-9 text-sm" placeholder="Search products..." />
          </div>
        </div>

        {/* Logo */}
        <div className="flex flex-1 flex-col items-center">
          <Link href="/" className="flex flex-col items-center">
            <span className="font-serif text-2xl font-bold tracking-[0.25em] text-gray-900 uppercase">
              GLAM TOUCH
            </span>
            <span className="text-[9px] tracking-[0.4em] text-gray-400 uppercase">
              Glamour of Modesty
            </span>
          </Link>
        </div>

        {/* Action icons */}
        <div className="flex w-64 items-center justify-end gap-5">
          <a
            href="tel:+8809606999695"
            className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-black"
          >
            <Phone className="h-5 w-5" />
            <span className="text-[10px]">Call Us</span>
          </a>
          <Link
            href="/wishlist"
            className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-black"
          >
            <Heart className="h-5 w-5" />
            <span className="text-[10px]">Wishlist</span>
          </Link>
          <Link
            href="/cart"
            className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-black"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="text-[10px]">Cart</span>
          </Link>
          <Link
            href="/account"
            className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-black"
          >
            <User className="h-5 w-5" />
            <span className="text-[10px]">Account</span>
          </Link>
        </div>
      </div>

      {/* ── Desktop nav bar ── */}
      <nav className="hidden border-t border-gray-100 bg-[#1a1a1a] md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-6 py-2.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium tracking-wide text-gray-200 uppercase hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* ── Mobile top bar ── */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button aria-label="Open menu" className="p-1">
              <Menu className="h-6 w-6 text-gray-800" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <div className="border-b px-5 py-4">
              <span className="font-serif text-lg font-bold tracking-[0.2em] text-gray-900 uppercase">
                GLAM TOUCH
              </span>
              <p className="text-[9px] tracking-widest text-gray-400 uppercase">
                Glamour of Modesty
              </p>
            </div>
            <nav className="flex flex-col overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-gray-100 px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex flex-col items-center">
          <span className="font-serif text-lg font-bold tracking-[0.2em] text-gray-900 uppercase">
            GLAM TOUCH
          </span>
        </Link>

        <Link href="/account" aria-label="Account" className="p-1">
          <User className="h-6 w-6 text-gray-800" />
        </Link>
      </div>
    </header>
  );
}
