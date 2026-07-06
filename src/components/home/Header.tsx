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
              ALPHA MAN
            </span>
            <span className="text-[9px] tracking-[0.4em] text-gray-400 uppercase">
              Alpha Man
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
      <div className="flex items-center justify-between px-4 py-3 md:hidden bg-black border-b border-yellow-500/30">
        <Sheet>
          <SheetTrigger asChild>
            <button aria-label="Open menu" className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300">
              <Menu className="h-6 w-6 text-yellow-400" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-0 shadow-2xl bg-gradient-to-b from-black to-gray-900">
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            
            {/* Header section with gold accent */}
            <div className="bg-gradient-to-b from-black to-gray-900 px-6 py-8 border-b border-yellow-500/30">
              <span className="font-serif text-xl font-bold tracking-[0.25em] text-yellow-400 uppercase block drop-shadow-lg">
                ALPHA MAN
              </span>
              <div className="h-0.5 w-16 bg-gradient-to-r from-yellow-400 to-transparent mt-3"></div>
              <p className="text-[10px] tracking-[0.15em] text-yellow-600/70 uppercase mt-3">
                Premium Collection
              </p>
            </div>

            {/* Search section */}
            <div className="px-6 py-4 border-b border-yellow-500/20">
              <div className="relative">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-yellow-500/50" />
                <Input 
                  className="h-10 pl-10 text-sm rounded-lg bg-gray-800 border border-yellow-500/30 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300" 
                  placeholder="Search products..." 
                />
              </div>
            </div>

            {/* Navigation items */}
            <nav className="flex flex-col overflow-y-auto">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-6 py-4 text-sm font-semibold text-gray-300 hover:text-yellow-400 border-b border-gray-800/50 hover:bg-gradient-to-r hover:from-yellow-500/10 hover:to-transparent transition-all duration-300 flex items-center justify-between group"
                >
                  <span>{item.label}</span>
                  <span className="text-gray-600 group-hover:text-yellow-400 transition-colors duration-300 group-hover:translate-x-1 transform">
                    →
                  </span>
                </Link>
              ))}
            </nav>

            {/* Footer section */}
            <div className="border-t border-yellow-500/20 bg-black/50 px-6 py-5">
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+8809606999695"
                  className="flex items-center gap-3 text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  <Phone className="h-5 w-5 text-yellow-500/70 group-hover:text-yellow-400" />
                  Call Us: +880 9606 999695
                </a>
                <Link
                  href="/account"
                  className="flex items-center gap-3 text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  <User className="h-5 w-5 text-yellow-500/70" />
                  My Account
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex flex-col items-center">
          <span className="font-serif text-lg font-bold tracking-[0.2em] text-yellow-400 uppercase drop-shadow-md">
            ALPHA MAN
          </span>
        </Link>

        <Link href="/account" aria-label="Account" className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300">
          <User className="h-6 w-6 text-yellow-400" />
        </Link>
      </div>
    </header>
  );
}
