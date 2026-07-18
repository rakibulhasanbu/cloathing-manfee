import { Header } from "@/components/home/Header";
import { BottomNav } from "@/components/home/BottomNav";
import { HeroBanner } from "@/components/home/HeroBanner";
import { FeatureBar } from "@/components/home/FeatureBar";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ProductSection } from "@/components/home/ProductSection";
import { PromoBanner } from "@/components/home/PromoBanner";
import { AboutSection } from "@/components/home/AboutSection";
import { CategoryProductSection } from "@/components/home/CategoryProductSection";
import { CustomerReviews } from "@/components/home/CustomerReviews";
import { Newsletter } from "@/components/home/Newsletter";
import { Footer } from "@/components/home/Footer";

import {
  bestSelling,
  newArrivals,
  hijarNiqab,
  abayaGown,
  khimarJilbab,
  designerKarchupi,
} from "@/data/products";
import { browseCategories, categoryBanners } from "@/data/categories";

const hijarNiqabCat = browseCategories.find((c) => c.slug === "panjabi")!;
const abayaGownCat = browseCategories.find((c) => c.slug === "polo-shirt")!;
const khimarJilbabCat = browseCategories.find((c) => c.slug === "drop-shoulder-tshirt")!;
const designerKarchupiCat = browseCategories.find((c) => c.slug === "bootcut-gurkha-pant")!;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Header ── */}
      <Header />

      {/* ── Mobile bottom navigation ── */}
      <BottomNav />

      <main className="pb-16 md:pb-0">
        {/* 1. Hero carousel */}
        <HeroBanner />

        {/* 2. Feature icons bar */}
        <FeatureBar />

        {/* 3. Browse categories */}
        <CategoryGrid />

        {/* 4. Best Selling Products */}
        <ProductSection
          title="Best Selling Products"
          products={bestSelling}
          viewAllHref="/category/best-selling"
        />

        {/* 5. New Arrival Products */}
        <ProductSection
          title="New Arrival Products"
          products={newArrivals}
          viewAllHref="/category/new-arrivals"
        />

        {/* 6. Dual promo banners — Boxer / Designer Edition */}
        <section className="bg-white py-4">
          <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <PromoBanner
                image="https://cdn.manfarebd.com/manfarebd/media/md/177799054199940989123_product_caruosel_banner_premium_tshirt.webp"
                alt="Formal Gurkha Pants — Manfare"
                href="/category/bootcut-gurkha-pant"
                aspectClass="aspect-[4/3]"
              />
              <PromoBanner
                image="https://cdn.manfarebd.com/manfarebd/media/md/177159452640628470149_product_caruosel_banner_panjabi.webp"
                alt="Designer Eid Panjabi — Manfare"
                href="/category/panjabi"
                aspectClass="aspect-[4/3]"
              />
            </div>
          </div>
        </section>

        {/* 7. About / brand section */}
        <AboutSection />

        {/* 8. Panjabi category section */}
        <CategoryProductSection
          category={hijarNiqabCat}
          products={hijarNiqab}
          imagePosition="left"
          bannerImage={categoryBanners["panjabi"]}
        />

        {/* 9. Polo Shirt category section */}
        <CategoryProductSection
          category={abayaGownCat}
          products={abayaGown}
          imagePosition="right"
          bannerImage={categoryBanners["polo-shirt"]}
        />

        {/* 10. Three-column promo row */}
        <section className="bg-white py-4">
          <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  image: "https://cdn.manfarebd.com/manfarebd/media/sm/177799448192420972676_category_cards_panjabi.webp",
                  alt: "Panjabi Collection — Manfare",
                  href: "/category/panjabi",
                },
                {
                  image: "https://cdn.manfarebd.com/manfarebd/media/sm/177799451597618912378_category_cards_knitted_polo.webp",
                  alt: "Polo Shirt Collection — Manfare",
                  href: "/category/polo-shirt",
                },
                {
                  image: "https://cdn.manfarebd.com/manfarebd/media/sm/176581748811188152344_5_web_card_drop.webp",
                  alt: "Drop Shoulder T-Shirt — Manfare",
                  href: "/category/drop-shoulder-tshirt",
                },
              ].map((banner) => (
                <PromoBanner
                  key={banner.href}
                  image={banner.image}
                  alt={banner.alt}
                  href={banner.href}
                  aspectClass="aspect-[4/3] sm:aspect-[3/4]"
                />
              ))}
            </div>
          </div>
        </section>

        {/* 11. Drop Shoulder T-Shirt category section */}
        <CategoryProductSection
          category={khimarJilbabCat}
          products={khimarJilbab}
          imagePosition="left"
          bannerImage={categoryBanners["drop-shoulder-tshirt"]}
        />

        {/* 12. Bootcut Gurkha Pant category section */}
        <CategoryProductSection
          category={designerKarchupiCat}
          products={designerKarchupi}
          imagePosition="right"
          bannerImage={categoryBanners["bootcut-gurkha-pant"]}
        />

        {/* 13. Customer Reviews */}
        <CustomerReviews />

        {/* 14. Newsletter */}
        <Newsletter />
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
