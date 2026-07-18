"use client";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FilterOptions {
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
  ratings: number[];
  badges: string[];
}

interface CategoryFilterProps {
  onFilterChange?: (filters: FilterOptions) => void;
  maxPrice?: number;
}

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const COLORS = ["Black", "White", "Blue", "Red", "Green", "Yellow", "Gold"];
const RATINGS = [5, 4, 3, 2, 1];
const BADGES = ["NEW", "SALE", "HOT"];

export function CategoryFilter({ onFilterChange, maxPrice = 5000 }: CategoryFilterProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, maxPrice],
    sizes: [],
    colors: [],
    ratings: [],
    badges: [],
  });

  const [expandedSections, setExpandedSections] = useState({
    price: true,
    size: true,
    color: false,
    rating: false,
    badge: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handlePriceChange = (type: "min" | "max", value: number) => {
    const newRange: [number, number] = [...filters.priceRange];
    if (type === "min") newRange[0] = value;
    else newRange[1] = value;

    const updatedFilters = { ...filters, priceRange: newRange };
    setFilters(updatedFilters);
    onFilterChange?.(updatedFilters);
  };

  const handleMultiSelect = (
    category: keyof Omit<FilterOptions, "priceRange">,
    value: string | number
  ) => {
    const updated = { ...filters };
    const arr = updated[category] as (string | number)[];

    if (arr.includes(value)) {
      updated[category] = arr.filter((item) => item !== value) as any;
    } else {
      updated[category] = [...arr, value] as any;
    }

    setFilters(updated);
    onFilterChange?.(updated);
  };

  const clearFilters = () => {
    const cleared: FilterOptions = {
      priceRange: [0, maxPrice],
      sizes: [],
      colors: [],
      ratings: [],
      badges: [],
    };
    setFilters(cleared);
    onFilterChange?.(cleared);
  };

  const hasActiveFilters =
    filters.sizes.length > 0 ||
    filters.colors.length > 0 ||
    filters.ratings.length > 0 ||
    filters.badges.length > 0 ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < maxPrice;

  return (
    <div className="sticky top-20 space-y-6 rounded-lg border border-gray-200 bg-white p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-xs font-medium text-yellow-600 hover:text-yellow-700 transition-colors"
          >
            <X className="h-4 w-4" />
            Clear
          </button>
        )}
      </div>

      {/* Price Filter */}
      <div className="space-y-3 border-b border-gray-200 pb-4">
        <button
          onClick={() => toggleSection("price")}
          className="flex w-full items-center justify-between font-medium text-gray-900 hover:text-yellow-600 transition-colors"
        >
          <span>Price</span>
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-transform duration-300",
              expandedSections.price ? "rotate-180" : ""
            )}
          />
        </button>

        {expandedSections.price && (
          <div className="space-y-3">
            <div className="space-y-2">
              <label className="text-xs text-gray-600">Min Price</label>
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceChange("min", Number(e.target.value))}
                className="w-full cursor-pointer"
              />
              <div className="text-sm font-medium text-gray-900">
                ৳ {filters.priceRange[0]}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-600">Max Price</label>
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceChange("max", Number(e.target.value))}
                className="w-full cursor-pointer"
              />
              <div className="text-sm font-medium text-gray-900">
                ৳ {filters.priceRange[1]}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Size Filter */}
      <div className="space-y-3 border-b border-gray-200 pb-4">
        <button
          onClick={() => toggleSection("size")}
          className="flex w-full items-center justify-between font-medium text-gray-900 hover:text-yellow-600 transition-colors"
        >
          <span>Size</span>
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-transform duration-300",
              expandedSections.size ? "rotate-180" : ""
            )}
          />
        </button>

        {expandedSections.size && (
          <div className="grid grid-cols-3 gap-2">
            {SIZES.map((size) => (
              <button
                key={size}
                onClick={() => handleMultiSelect("sizes", size)}
                className={cn(
                  "rounded border-2 py-2 text-xs font-medium transition-all duration-200",
                  filters.sizes.includes(size)
                    ? "border-yellow-400 bg-yellow-50 text-yellow-700"
                    : "border-gray-200 text-gray-700 hover:border-gray-300"
                )}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Color Filter */}
      <div className="space-y-3 border-b border-gray-200 pb-4">
        <button
          onClick={() => toggleSection("color")}
          className="flex w-full items-center justify-between font-medium text-gray-900 hover:text-yellow-600 transition-colors"
        >
          <span>Color</span>
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-transform duration-300",
              expandedSections.color ? "rotate-180" : ""
            )}
          />
        </button>

        {expandedSections.color && (
          <div className="space-y-2">
            {COLORS.map((color) => (
              <label
                key={color}
                className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <input
                  type="checkbox"
                  checked={filters.colors.includes(color)}
                  onChange={() => handleMultiSelect("colors", color)}
                  className="h-4 w-4 rounded border-gray-300 text-yellow-400 accent-yellow-400"
                />
                <span className="text-sm text-gray-700">{color}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="space-y-3 border-b border-gray-200 pb-4">
        <button
          onClick={() => toggleSection("rating")}
          className="flex w-full items-center justify-between font-medium text-gray-900 hover:text-yellow-600 transition-colors"
        >
          <span>Rating</span>
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-transform duration-300",
              expandedSections.rating ? "rotate-180" : ""
            )}
          />
        </button>

        {expandedSections.rating && (
          <div className="space-y-2">
            {RATINGS.map((rating) => (
              <label
                key={rating}
                className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <input
                  type="checkbox"
                  checked={filters.ratings.includes(rating)}
                  onChange={() => handleMultiSelect("ratings", rating)}
                  className="h-4 w-4 rounded border-gray-300 text-yellow-400 accent-yellow-400"
                />
                <span className="text-sm text-gray-700">
                  {Array.from({ length: rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Badge Filter */}
      <div className="space-y-3">
        <button
          onClick={() => toggleSection("badge")}
          className="flex w-full items-center justify-between font-medium text-gray-900 hover:text-yellow-600 transition-colors"
        >
          <span>Badge</span>
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-transform duration-300",
              expandedSections.badge ? "rotate-180" : ""
            )}
          />
        </button>

        {expandedSections.badge && (
          <div className="space-y-2">
            {BADGES.map((badge) => (
              <label
                key={badge}
                className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <input
                  type="checkbox"
                  checked={filters.badges.includes(badge)}
                  onChange={() => handleMultiSelect("badges", badge)}
                  className="h-4 w-4 rounded border-gray-300 text-yellow-400 accent-yellow-400"
                />
                <span className="text-xs font-semibold text-gray-700 bg-gray-100 px-2 py-1 rounded">
                  {badge}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
