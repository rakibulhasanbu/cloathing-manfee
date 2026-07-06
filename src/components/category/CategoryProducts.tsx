"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronDown, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/shop";

interface CategoryProductsProps {
  products: Product[];
  categoryName: string;
}

type SortOption = "newest" | "price-low" | "price-high" | "popular";

export function CategoryProducts({
  products,
  categoryName,
}: CategoryProductsProps) {
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  /* ── Sorting Logic ──────────────────────────────────────────────── */
  const sortedProducts = useMemo(() => {
    const items = [...products];

    switch (sortBy) {
      case "price-low":
        return items.sort((a, b) => a.price - b.price);
      case "price-high":
        return items.sort((a, b) => b.price - a.price);
      case "popular":
        return items.sort((a, b) => {
          const orderMap = { HOT: 3, SALE: 2, NEW: 1 };
          return (
            (orderMap[b.badge as keyof typeof orderMap] || 0) -
            (orderMap[a.badge as keyof typeof orderMap] || 0)
          );
        });
      case "newest":
      default:
        return items;
    }
  }, [products, sortBy]);

  /* ── Pagination Logic ──────────────────────────────────────────── */
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-6">
      {/* ── Header with Sort ──────────────────────────────────────────── */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-gray-900">{categoryName}</h2>
          <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
            {sortedProducts.length} Products
          </span>
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value as SortOption);
              setCurrentPage(1);
            }}
            className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-700 hover:border-yellow-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-200 cursor-pointer"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="popular">Most Popular</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-600 pointer-events-none" />
        </div>
      </div>

      {/* ── Product Grid ──────────────────────────────────────────────── */}
      {paginatedProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {paginatedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-3 shadow-sm hover:shadow-md transition-all duration-300">
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-2 right-2 z-10 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
                      {product.badge}
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      // Add to wishlist logic
                    }}
                    className="absolute top-2 left-2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-yellow-50 hover:shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                  </button>

                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-yellow-600 transition-colors duration-200">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">
                      ৳{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ৳{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* Discount Badge */}
                  {product.originalPrice && (
                    <div className="text-xs font-semibold text-red-600">
                      Save{" "}
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      %
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* ── Pagination ────────────────────────────────────────────── */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-8 border-t border-gray-200">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:border-yellow-400 hover:text-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                ← Previous
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => {
                    const isCurrentPage = page === currentPage;
                    const isNearCurrent = Math.abs(page - currentPage) <= 1;
                    const isEdge = page === 1 || page === totalPages;

                    if (!isCurrentPage && !isNearCurrent && !isEdge) {
                      return null;
                    }

                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={cn(
                          "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                          isCurrentPage
                            ? "bg-yellow-400 text-black font-bold"
                            : "border border-gray-300 text-gray-700 hover:border-yellow-400 hover:text-yellow-600"
                        )}
                      >
                        {page}
                      </button>
                    );
                  }
                )}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:border-yellow-400 hover:text-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                Next →
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">No products found.</p>
        </div>
      )}
    </div>
  );
}
