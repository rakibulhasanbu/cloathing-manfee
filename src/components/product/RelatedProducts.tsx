import type { Product } from "@/types/shop";
import { ProductCard } from "@/components/home/ProductCard";

interface Props {
  products: Product[];
}

export function RelatedProducts({ products }: Props) {
  if (products.length === 0) return null;

  return (
    <section className="mt-12 md:mt-16">
      {/* Heading */}
      <div className="mb-6 text-center">
        <h2 className="text-lg font-bold uppercase tracking-[0.25em] text-gray-900 md:text-xl">
          You May Also Like
        </h2>
        <div className="mx-auto mt-2 h-[2px] w-[140px] rounded-full bg-gradient-to-r from-[#977b63] to-[#c0a086]" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {products.slice(0, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
