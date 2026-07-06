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
    <nav className="fixed right-0 bottom-0 left-0 z-50 border-t-2 border-yellow-500 bg-gradient-to-r from-black via-gray-900 to-black shadow-2xl md:hidden">
      <div className="grid grid-cols-5 gap-0">
        {items.map(({ label, href, Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "group relative flex flex-col items-center justify-center gap-1.5 py-4 px-2 text-xs font-semibold transition-all duration-300",
                active 
                  ? "text-yellow-400" 
                  : "text-gray-300 hover:text-yellow-300"
              )}
            >
              {/* Active background highlight */}
              {active && (
                <div className="absolute inset-0 top-0 bottom-auto h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-100" />
              )}
              
              {/* Icon with enhanced styling */}
              <div className={cn(
                "transition-all duration-300 relative",
                active ? "scale-110" : "scale-100 group-hover:scale-110"
              )}>
                <Icon 
                  className={cn(
                    "h-6 w-6 transition-all duration-300",
                    active 
                      ? "stroke-[2.5] text-yellow-400 drop-shadow-lg" 
                      : "stroke-2 text-gray-300 group-hover:text-yellow-300"
                  )} 
                />
              </div>

              {/* Label */}
              <span className={cn(
                "transition-colors duration-300 tracking-wide",
                active ? "text-yellow-400 font-bold" : "text-gray-400"
              )}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
