import { Header } from "@/components/home/Header";
import { BottomNav } from "@/components/home/BottomNav";
import { HeroBanner } from "@/components/home/HeroBanner";
import { FeatureBar } from "@/components/home/FeatureBar";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ProductSection } from "@/components/home/ProductSection";
import { VideoSection } from "@/components/home/VideoSection";
import { PromoBanner } from "@/components/home/PromoBanner";
import { AboutSection } from "@/components/home/AboutSection";
import { CategoryProductSection } from "@/components/home/CategoryProductSection";
import { CustomerReviews } from "@/components/home/CustomerReviews";
import { Newsletter } from "@/components/home/Newsletter";
import { Footer } from "@/components/home/Footer";

import {
  bestSelling,
  newArrivals,
  featuredProducts,
  hijarNiqab,
  abayaGown,
  khimarJilbab,
  designerKarchupi,
} from "@/data/products";
import { browseCategories, categoryBanners } from "@/data/categories";

const CDN = "https://cdn.manfarebd.com/glamtouch/media";

const hijarNiqabCat = browseCategories.find((c) => c.slug === "panjabi")!;
const abayaGownCat = browseCategories.find((c) => c.slug === "polo-shirt")!;
const khimarJilbabCat = browseCategories.find((c) => c.slug === "drop-shoulder-tshirt")!;
const designerKarchupiCat = browseCategories.find((c) => c.slug === "bootcut-gurkha-pant")!;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BottomNav />

      <main className="pb-16 md:pb-0">
        {/* 1. Hero carousel */}
        <HeroBanner />

        {/* 2. Feature icons */}
        <FeatureBar />

        {/* 3. Browse categories */}
        <CategoryGrid />

        {/* 4. Best selling products */}
        <ProductSection
          title="Best Selling Products"
          products={bestSelling}
          viewAllHref="/category/best-selling"
        />

        {/* 5. New arrival products */}
        <ProductSection
          title="New Arrival Products"
          products={newArrivals}
          viewAllHref="/category/new-arrivals"
        />

        {/* 6. YouTube video section */}
        <VideoSection />

        {/* 7 + 8. Luxury + Designer Premium — side by side */}
        <section className="bg-white py-4">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <PromoBanner
                image="https://cdn.manfarebd.com/manfarebd/media/md/177799054199940989123_product_caruosel_banner_premium_tshirt.webp"
                alt="Premium Pants Collection — Manfare"
                href="/category/bootcut-gurkha-pant"
                overlayText="Formal Gurkha Pants"
                overlaySubtext="Discover our premium collection"
                aspectClass="aspect-[4/3]"
              />
              <PromoBanner
                image="https://cdn.manfarebd.com/manfarebd/media/md/177159452640628470149_product_caruosel_banner_panjabi.webp"
                alt="Designer Panjabi — Manfare"
                href="/category/panjabi"
                overlayText="Designer Eid Panjabi"
                overlaySubtext="Tradition meets comfort"
                aspectClass="aspect-[4/3]"
              />
            </div>
          </div>
        </section>

        {/* 9. Featured products */}
        <ProductSection title="" products={featuredProducts} />

        {/* 10. About / brand section */}
        <AboutSection />

        {/* 11. Hijar & Niqab category section */}
        <CategoryProductSection
          category={hijarNiqabCat}
          products={hijarNiqab}
          imagePosition="left"
          bannerImage={categoryBanners["panjabi"]}
        />

        {/* 12. Abaya & Gown category section */}
        <CategoryProductSection
          category={abayaGownCat}
          products={abayaGown}
          imagePosition="right"
          bannerImage={categoryBanners["polo-shirt"]}
        />

        {/* 13. Three-column promo row */}
        <section className="bg-white py-4">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  image: "https://cdn.manfarebd.com/manfarebd/media/sm/177799448192420972676_category_cards_panjabi.webp",
                  alt: "Panjabi Collection",
                  href: "/category/panjabi",
                },
                {
                  image: "https://cdn.manfarebd.com/manfarebd/media/sm/177799451597618912378_category_cards_knitted_polo.webp",
                  alt: "Polo Shirt Collection",
                  href: "/category/polo-shirt",
                },
                {
                  image: "https://cdn.manfarebd.com/manfarebd/media/sm/176581748811188152344_5_web_card_drop.webp",
                  alt: "Drop Shoulder T-Shirt Collection",
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

        {/* 14. Khimar & Jilbab category section */}
        <CategoryProductSection
          category={khimarJilbabCat}
          products={khimarJilbab}
          imagePosition="left"
          bannerImage={categoryBanners["drop-shoulder-tshirt"]}
        />

        {/* 15. Designer Karchupi Abayas category section */}
        <CategoryProductSection
          category={designerKarchupiCat}
          products={designerKarchupi}
          imagePosition="right"
          bannerImage={categoryBanners["bootcut-gurkha-pant"]}
        />

        {/* 16. Customer reviews */}
        <CustomerReviews />

        {/* 17. Newsletter */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
