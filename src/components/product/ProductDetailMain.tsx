"use client";

import { useState } from "react";
import type { ProductDetail } from "@/types/shop";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";

interface Props {
  product: ProductDetail;
}

/**
 * Client-side shell that owns the gallery-images state.
 * When the user switches color in <ProductInfo>, this component
 * re-renders <ProductGallery> with the new image set.
 */
export function ProductDetailMain({ product }: Props) {
  const initialImages =
    product.colors[0]?.images.length
      ? product.colors[0].images
      : product.images;

  const [galleryImages, setGalleryImages] = useState<string[]>(initialImages);

  return (
    <section
      aria-label="Product details"
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-14"
    >
      <ProductGallery images={galleryImages} productName={product.name} />
      <ProductInfo product={product} onColorChange={setGalleryImages} />
    </section>
  );
}
