import type { Category, NavItem } from "@/types/shop";

const CDN = "https://cdn.manfarebd.com/glamtouch/media";

export const browseCategories: Category[] = [
  {
    id: "1",
    name: "Designer Premium Abayas",
    slug: "designer-premium-abayas",
    image: `${CDN}/sm/175337414065373076723_1_designer_premium_abayas.webp`,
  },
  {
    id: "2",
    name: "Hijab & Niqab",
    slug: "hijab-niqab",
    image: `${CDN}/sm/175337416669980956164_2_category_cart_hijab_niqab.webp`,
  },
  {
    id: "3",
    name: "Khimar & Jilbab",
    slug: "khimar-jilbab",
    image: `${CDN}/sm/175337417008764159077_3_khimar_jilbab_cart.webp`,
  },
  {
    id: "4",
    name: "Designer Karchupi Abayas",
    slug: "designer-karchupi-abayas",
    image: `${CDN}/sm/175337417429422013213_4_designer_karchupi_abayas_cart.webp`,
  },
  {
    id: "5",
    name: "Abaya & Gown",
    slug: "abaya-gown",
    image: `${CDN}/sm/175337417838811672535_5_abaya_gown_card.webp`,
  },
  {
    id: "6",
    name: "Cape & Cover Up",
    slug: "cape-cover-up",
    image: `${CDN}/sm/175337418506020103852_6_cape_cover_up_category_cart.webp`,
  },
  {
    id: "7",
    name: "Accessories & Others",
    slug: "accessories-others",
    image: `${CDN}/sm/175337418940983810850_7_accessories_others_category_card.webp`,
  },
];

export const categoryBanners: Record<string, string> = {
  "hijab-niqab": `${CDN}/md/175337526710633928060_1_product_caruosel_banner_hijab_niqab.webp`,
  "abaya-gown": `${CDN}/md/175337527014364675495_2_product_caruosel_banner_abaaya_2.webp`,
  "khimar-jilbab": `${CDN}/md/175337527320532381467_3_web_khimar_jilbab_caruosel_banner.webp`,
  "designer-karchupi-abayas": `${CDN}/md/175337527701724309484_4_product_caruosel_banner_designers_karchupi_abayas.webp`,
  "cape-cover-up": `${CDN}/lg/175490745481841481619_banner_1_cape_and_cover_up.webp`,
  accessories: `${CDN}/md/175490898142440355884_banner_2_accessories.webp`,
};

export const heroBanners = [
  {
    id: 1,
    image: `${CDN}/177114819266541485860_glmatouch_eid_collection_web_banner.webp`,
    alt: "Eid Collection 2025 — Glam Touch",
  },
  {
    id: 2,
    image: `${CDN}/175412582929266302186_gt_web_banner_2.webp`,
    alt: "New Collection — Glam Touch",
  },
];

export const navItems: NavItem[] = [
  { label: "Designer Premium Abayas", href: "/category/designer-premium-abayas" },
  { label: "Hijab & Niqab", href: "/category/hijab-niqab" },
  { label: "Khimar & Jilbab", href: "/category/khimar-jilbab" },
  { label: "Designer Karchupi Abayas", href: "/category/designer-karchupi-abayas" },
  { label: "Abaya & Gown", href: "/category/abaya-gown" },
  { label: "Cape & Cover Up", href: "/category/cape-cover-up" },
  { label: "Accessories", href: "/category/accessories-others" },
];
