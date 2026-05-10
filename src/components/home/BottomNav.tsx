"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Search, ShoppingCart, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Home", href: "/", Icon: Home },
  { label: "Category", href: "/categories", Icon: LayoutGrid },
  { label: "Search", href: "/search", Icon: Search },
  { label: "Cart", href: "/cart", Icon: ShoppingCart },
  { label: "Wishlist", href: "/wishlist", Icon: Heart },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-white md:hidden">
      <div className="grid grid-cols-5">
        {items.map(({ label, href, Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 py-2 text-xs transition-colors",
                active ? "text-gray-900" : "text-gray-500"
              )}
            >
              <Icon className={cn("h-5 w-5", active && "stroke-[2.5]")} />
              <span className="font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
