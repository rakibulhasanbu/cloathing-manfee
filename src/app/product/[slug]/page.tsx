import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Header } from "@/components/home/Header";
import { BottomNav } from "@/components/home/BottomNav";
import { Footer } from "@/components/home/Footer";
import { ProductDetailMain } from "@/components/product/ProductDetailMain";
import { ProductTabs } from "@/components/product/ProductTabs";
import { ProductReviews } from "@/components/product/ProductReviews";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { StickyAddToCart } from "@/components/product/StickyAddToCart";
import { getProductDetail, getRelatedProducts } from "@/data/productDetails";

/* ── Params type (Next.js App Router) ───────────────────────────────── */
interface Props {
  params: Promise<{ slug: string }>;
}

/* ── Metadata ────────────────────────────────────────────────────────── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductDetail(slug);

  if (!product) return { title: "Product Not Found | Alpha Man" };

  const desc = product.description.replace(/\n\n/g, " ").slice(0, 160);

  return {
    title: `${product.name} | Alpha Man`,
    description: desc,
    openGraph: {
      title: `${product.name} | Alpha Man`,
      description: desc,
      images: [{ url: product.image }],
    },
  };
}

/* ── Page ────────────────────────────────────────────────────────────── */
export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductDetail(slug);

  if (!product) notFound();

  const related = getRelatedProducts(slug, product.categorySlug);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BottomNav />

      <main className="pb-20 md:pb-0">
        {/* ── Breadcrumb ─────────────────────────────────────────────── */}
        <div className="border-b border-gray-100 bg-gray-50">
          <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-16 py-3">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1 overflow-x-auto whitespace-nowrap text-[11px] text-gray-400"
            >
              <Link href="/" className="transition-colors hover:text-gray-700">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 flex-shrink-0 text-gray-300" />
              <Link
                href={`/category/${product.categorySlug}`}
                className="uppercase transition-colors hover:text-gray-700"
              >
                {product.categoryName}
              </Link>
              <ChevronRight className="h-3 w-3 flex-shrink-0 text-gray-300" />
              <span className="truncate text-gray-600">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* ── Content ────────────────────────────────────────────────── */}
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-16 py-6 md:py-10">
          {/* 1. Gallery + Info */}
          <ProductDetailMain product={product} />

          {/* 2. Description / Delivery tabs */}
          <ProductTabs
            description={product.description}
            features={product.features}
            deliveryStandard={product.deliveryStandard}
            deliveryExpress={product.deliveryExpress}
            returnPolicy={product.returnPolicy}
          />

          {/* 3. Customer Reviews */}
          <ProductReviews
            reviews={product.reviews}
            rating={product.rating}
            reviewCount={product.reviewCount}
          />

          {/* 4. Related Products */}
          <RelatedProducts products={related} />
        </div>
      </main>

      <Footer />

      {/* Mobile sticky Add to Cart (appears when main CTAs leave viewport) */}
      <StickyAddToCart
        productName={product.name}
        price={product.price}
        originalPrice={product.originalPrice}
      />
    </div>
  );
}
