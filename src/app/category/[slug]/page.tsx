import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Header } from "@/components/home/Header";
import { BottomNav } from "@/components/home/BottomNav";
import { Footer } from "@/components/home/Footer";
import { CategoryFilter } from "@/components/category/CategoryFilter";
import { CategoryProducts } from "@/components/category/CategoryProducts";
import { getCategoryProducts } from "@/data/categoryProducts";
import { browseCategories, categoryBanners } from "@/data/categories";

/* ── Params type (Next.js App Router) ───────────────────────────────── */
interface Props {
  params: Promise<{ slug: string }>;
}

/* ── Metadata ────────────────────────────────────────────────────────── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = browseCategories.find((cat) => cat.slug === slug);

  if (!category) return { title: "Category Not Found | Alpha Man" };

  return {
    title: `${category.name} | Alpha Man`,
    description: `Explore our premium collection of ${category.name.toLowerCase()} for men. Best quality and affordable prices.`,
    openGraph: {
      title: `${category.name} | Alpha Man`,
      description: `Explore our premium collection of ${category.name.toLowerCase()} for men.`,
      images: [{ url: category.image }],
    },
  };
}

/* ── Page ────────────────────────────────────────────────────────────── */
export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  // Get category data
  const category = browseCategories.find((cat) => cat.slug === slug);
  if (!category) notFound();

  // Get products for this category
  const products = getCategoryProducts(slug);
  const bannerImage = categoryBanners[slug];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* ── Main Content ──────────────────────────────────────────────── */}
      <main className="flex-1">
        {/* Category Banner */}
        {bannerImage && (
          <div className="relative h-40 sm:h-56 md:h-80 overflow-hidden bg-gray-200">
            <img
              src={bannerImage}
              alt={category.name}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/40"></div>

            {/* Category Title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white text-center tracking-tight drop-shadow-lg">
                {category.name}
              </h1>
            </div>
          </div>
        )}

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-yellow-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">{category.name}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Sidebar - Hidden on Mobile, Shown on Desktop */}
            <aside className="hidden lg:block">
              <CategoryFilter />
            </aside>

            {/* Main Products Grid */}
            <div className="lg:col-span-3">
              {products.length > 0 ? (
                <CategoryProducts
                  products={products}
                  categoryName={category.name}
                />
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4">
                    No products available in this category yet.
                  </p>
                  <Link
                    href="/"
                    className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                  >
                    Back to Home
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Filter Modal would be implemented with a button */}
        {/* For now, filters are visible on desktop only */}
      </main>

      <BottomNav />
      <Footer />
    </div>
  );
}
