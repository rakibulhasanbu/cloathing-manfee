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

const hijarNiqabCat = browseCategories.find((c) => c.slug === "hijab-niqab")!;
const abayaGownCat = browseCategories.find((c) => c.slug === "abaya-gown")!;
const khimarJilbabCat = browseCategories.find((c) => c.slug === "khimar-jilbab")!;
const designerKarchupiCat = browseCategories.find((c) => c.slug === "designer-karchupi-abayas")!;

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
                image={`${CDN}/md/175490745481841481619_banner_1_cape_and_cover_up.webp`}
                alt="Luxury Products — Glam Touch"
                href="/category/cape-cover-up"
                overlayText="Luxury Products"
                overlaySubtext="Discover our premium collection"
                aspectClass="aspect-[4/3]"
              />
              <PromoBanner
                image={`${CDN}/177114819266541485860_glmatouch_eid_collection_web_banner.webp`}
                alt="Designer Premium Abaya — Glam Touch"
                href="/category/designer-premium-abayas"
                overlayText="Designer Premium Abaya"
                overlaySubtext="Elegance meets modesty"
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
          bannerImage={categoryBanners["hijab-niqab"]}
        />

        {/* 12. Abaya & Gown category section */}
        <CategoryProductSection
          category={abayaGownCat}
          products={abayaGown}
          imagePosition="right"
          bannerImage={categoryBanners["abaya-gown"]}
        />

        {/* 13. Three-column promo row */}
        <section className="bg-white py-4">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  image: `${CDN}/sm/175337414065373076723_1_designer_premium_abayas.webp`,
                  alt: "Designer Premium Abayas",
                  href: "/category/designer-premium-abayas",
                },
                {
                  image: `${CDN}/sm/175337417429422013213_4_designer_karchupi_abayas_cart.webp`,
                  alt: "Designer Karchupi Abayas",
                  href: "/category/designer-karchupi-abayas",
                },
                {
                  image: `${CDN}/sm/175337418506020103852_6_cape_cover_up_category_cart.webp`,
                  alt: "Cape & Cover Up",
                  href: "/category/cape-cover-up",
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
          bannerImage={categoryBanners["khimar-jilbab"]}
        />

        {/* 15. Designer Karchupi Abayas category section */}
        <CategoryProductSection
          category={designerKarchupiCat}
          products={designerKarchupi}
          imagePosition="right"
          bannerImage={categoryBanners["designer-karchupi-abayas"]}
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
