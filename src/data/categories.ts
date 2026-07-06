import type { Category, NavItem } from "@/types/shop";

export const browseCategories: Category[] = [
  {
    id: "1",
    name: "PANJABI",
    slug: "panjabi",
    image: "https://cdn.manfarebd.com/manfarebd/media/sm/177799448192420972676_category_cards_panjabi.webp",
  },
  {
    id: "2",
    name: "HALF SHIRT",
    slug: "shirt",
    image: "https://cdn.manfarebd.com/manfarebd/media/sm/177799449231732765375_category_cards_half_shirt.webp",
  },
  {
    id: "3",
    name: "DROP SHOULDER T-SHIRT",
    slug: "drop-shoulder-tshirt",
    image: "https://cdn.manfarebd.com/manfarebd/media/sm/176581748811188152344_5_web_card_drop.webp",
  },
  {
    id: "4",
    name: "POLO SHIRT",
    slug: "polo-shirt",
    image: "https://cdn.manfarebd.com/manfarebd/media/sm/177799451597618912378_category_cards_knitted_polo.webp",
  },
  {
    id: "5",
    name: "WALLET",
    slug: "wallet",
    image: "https://cdn.manfarebd.com/manfarebd/media/sm/176581749460025076532_7_web_card_wallet.webp",
  },
  {
    id: "6",
    name: "BELT",
    slug: "belt",
    image: "https://cdn.manfarebd.com/manfarebd/media/sm/176581750101679457971_9_web_card_belt_1.webp",
  },
  {
    id: "7",
    name: "BOOTCUT FORMAL PANT",
    slug: "bootcut-gurkha-pant",
    image: "https://cdn.manfarebd.com/manfarebd/media/sm/177799453966527468424_category_cards_gurkha_pant.webp",
  },
];

export const categoryBanners: Record<string, string> = {
  "panjabi": "https://cdn.manfarebd.com/manfarebd/media/md/177159452640628470149_product_caruosel_banner_panjabi.webp",
  "polo-shirt": "https://cdn.manfarebd.com/manfarebd/media/md/177799068601889121541_product_caruosel_banner_polo_shirt.webp",
  "drop-shoulder-tshirt": "https://cdn.manfarebd.com/manfarebd/media/md/174500259077724501444_product_caruosel_banner_drop_shoulder_t_shirt.webp",
  "bootcut-gurkha-pant": "https://cdn.manfarebd.com/manfarebd/media/md/177799054199940989123_product_caruosel_banner_premium_tshirt.webp",
};

export const heroBanners = [
  {
    id: 1,
    image: "https://cdn.manfarebd.com/manfarebd/media/177894709301645357468_cover_2.webp",
    alt: "Panjabi Collection — Manfare",
  },
  {
    id: 2,
    image: "https://cdn.manfarebd.com/manfarebd/media/177798829275254222196_old_moyae_polo_web_.webp",
    alt: "Premium Polo Shirts — Manfare",
  },
  {
    id: 3,
    image: "https://cdn.manfarebd.com/manfarebd/media/177798829682249474191_half_shirt_web_cover.webp",
    alt: "Half Sleeve Shirts — Manfare",
  },
  {
    id: 4,
    image: "https://cdn.manfarebd.com/manfarebd/media/177798830025681881369_gurkha_web_cover.webp",
    alt: "Bootcut Gurkha Pants — Manfare",
  },
  {
    id: 5,
    image: "https://cdn.manfarebd.com/manfarebd/media/175916680605718166150_bagge_web_cover_1.webp",
    alt: "Drop Shoulder T-Shirts — Manfare",
  },
];

export const navItems: NavItem[] = [
  { label: "Panjabi", href: "/category/panjabi" },
  { label: "Half Shirt", href: "/category/shirt" },
  { label: "Drop Shoulder", href: "/category/drop-shoulder-tshirt" },
  { label: "Polo Shirt", href: "/category/polo-shirt" },
  { label: "Wallet", href: "/category/wallet" },
  { label: "Belt", href: "/category/belt" },
  { label: "Gurkha Pant", href: "/category/bootcut-gurkha-pant" },
];
