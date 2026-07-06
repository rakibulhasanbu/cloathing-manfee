import type {
  ProductDetail,
  Product,
  Review,
} from "@/types/shop";
import {
  bestSelling,
  newArrivals,
  featuredProducts,
  abayaGown,
  khimarJilbab,
  hijarNiqab,
  designerKarchupi,
} from "./products";

/* ── CDN helper ─────────────────────────────────────────────────────── */
const CDN = "https://cdn.manfarebd.com/manfarebd/media";
const img = (size: "xs" | "sm" | "md" | "lg", name: string) =>
  `${CDN}/${size}/${name}`;

/* ── Detailed product entries (keyed by slug) ────────────────────────── */
const DETAILS: Record<string, ProductDetail> = {
  /* ── MFP-47 Premium Knitted Polo ── */
  "premium-knitted-polo-shirt-for-men-mfp47": {
    id: "na-3",
    name: "Premium Knitted Polo Shirt For Men | MFP-47",
    slug: "premium-knitted-polo-shirt-for-men-mfp47",
    price: 1190,
    originalPrice: 1500,
    badge: "NEW",
    image: img("lg", "177780829717534573310_mfp_47_1.webp"),
    images: [
      img("lg", "177780829717534573310_mfp_47_1.webp"),
      img("lg", "177780829285142377671_mfp_47_2.webp"),
      img("lg", "177780828893040939427_mfp_47_3.webp"),
      img("lg", "177780828550115987426_mfp_47_4.webp"),
    ],
    colors: [
      {
        name: "Coffee",
        swatchImage: img("xs", "177780829717534573310_mfp_47_1.webp"),
        images: [
          img("lg", "177780829717534573310_mfp_47_1.webp"),
          img("lg", "177780829285142377671_mfp_47_2.webp"),
          img("lg", "177780828893040939427_mfp_47_3.webp"),
          img("lg", "177780828550115987426_mfp_47_4.webp"),
        ],
      },
      {
        name: "Navy Blue",
        swatchImage: img("xs", "177780821706449403978_mfp_48_1.webp"),
        images: [img("lg", "177780821706449403978_mfp_48_1.webp")],
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Experience the perfect blend of comfort and style with our Premium Knitted Polo Shirt. Crafted from high-quality knitted fabric, this polo shirt offers a sophisticated look while maintaining exceptional breathability and comfort throughout the day.\n\nDesigned for the modern man who values both style and substance, the MFP-47 features a classic polo collar, a premium 3-button placket, and a tailored fit that flatters all body types. Whether you're heading to the office, a casual outing, or a social event, this polo delivers effortless elegance.",
    features: [
      "100% Premium Knitted Cotton Fabric",
      "Moisture-wicking technology for all-day comfort",
      "Classic polo collar with 3-button placket",
      "Reinforced shoulder seams for durability",
      "Pre-shrunk — maintains shape after washing",
      "Machine washable, easy care instructions",
    ],
    rating: 4.7,
    reviewCount: 18,
    stock: 18,
    sku: "MFP-47",
    categoryName: "Polo Shirt",
    categorySlug: "polo-shirt",
    deliveryStandard:
      "Dhaka City: 1–2 business days | Outside Dhaka: 3–5 business days",
    deliveryExpress:
      "Express delivery available in Dhaka within 4–6 hours (subject to availability)",
    returnPolicy:
      "7-day easy return policy. Product must be unused, unwashed, and in original packaging with all tags attached.",
    reviews: [
      {
        id: "mfp47-r1",
        customerName: "Rafiqul Islam",
        rating: 5,
        date: "2025-12-15",
        text: "Excellent quality polo shirt. The fabric is very soft and comfortable. The fit is perfect and the color is exactly as shown. Highly recommend to anyone looking for a premium polo!",
      },
      {
        id: "mfp47-r2",
        customerName: "Md. Karim Ahmed",
        rating: 4,
        date: "2025-12-10",
        text: "Very nice quality polo. The color matches the photos perfectly. Delivery was fast and packaging was neat. Will definitely order again.",
      },
      {
        id: "mfp47-r3",
        customerName: "Abdullah Al Mamun",
        rating: 5,
        date: "2025-11-28",
        text: "মানসম্পন্ন পণ্য। পরতে অনেক আরামদায়ক। দাম একটু বেশি মনে হলেও মানের সাথে মিলিয়ে দেখলে একদম ঠিকই আছে। আবার অর্ডার করব।",
      },
    ] satisfies Review[],
  },

  /* ── MFP-45 Premium Knitted Polo ── */
  "premium-knitted-polo-shirt-for-men-mfp45": {
    id: "bs-1",
    name: "Premium Knitted Polo Shirt For Men | MFP-45",
    slug: "premium-knitted-polo-shirt-for-men-mfp45",
    price: 1190,
    originalPrice: 1490,
    badge: "HOT",
    image: img("lg", "177780862731894559876_mfp_45_1.webp"),
    images: [img("lg", "177780862731894559876_mfp_45_1.webp")],
    colors: [
      {
        name: "Black",
        swatchImage: img("xs", "177780862731894559876_mfp_45_1.webp"),
        images: [img("lg", "177780862731894559876_mfp_45_1.webp")],
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "A timeless essential elevated with premium knitted fabric. The MFP-45 brings together classic polo styling and modern comfort technology for a shirt you'll reach for again and again.\n\nThe structured collar and precise fit make it equally suited for smart-casual office wear or weekend outings.",
    features: [
      "Premium knitted cotton blend",
      "Classic polo collar & 2-button placket",
      "Slim tailored fit",
      "Breathable mesh interior",
      "Machine washable",
    ],
    rating: 4.8,
    reviewCount: 34,
    stock: 12,
    sku: "MFP-45",
    categoryName: "Polo Shirt",
    categorySlug: "polo-shirt",
    deliveryStandard:
      "Dhaka City: 1–2 business days | Outside Dhaka: 3–5 business days",
    deliveryExpress:
      "Express delivery available in Dhaka within 4–6 hours",
    returnPolicy:
      "7-day easy return policy. Product must be unused and in original packaging.",
    reviews: [
      {
        id: "mfp45-r1",
        customerName: "Tanvir Hossain",
        rating: 5,
        date: "2025-11-20",
        text: "Best polo I have bought in a long time. Quality is top notch and the fit is spot on. Will order more colors.",
      },
      {
        id: "mfp45-r2",
        customerName: "Sabbir Rahman",
        rating: 5,
        date: "2025-11-15",
        text: "আমি অনেক দিন ধরে এই ধরনের polo খুঁজছিলাম। এটা সত্যিই premium মানের। অত্যন্ত সন্তুষ্ট।",
      },
    ] satisfies Review[],
  },
};

/* ── All products flat list for fallback lookup ─────────────────────── */
const ALL_PRODUCTS: Product[] = [
  ...bestSelling,
  ...newArrivals,
  ...featuredProducts,
  ...abayaGown,
  ...khimarJilbab,
  ...hijarNiqab,
  ...designerKarchupi,
];

/* ── Synthetic fallback for products not in DETAILS ─────────────────── */
function makeGenericDetail(product: Product): ProductDetail {
  return {
    ...product,
    images: [product.image],
    colors: [
      {
        name: "Default",
        swatchImage: product.image,
        images: [product.image],
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      `${product.name} — crafted with premium materials for the modern man who values both style and comfort. Alpha Man's commitment to quality shines through every stitch and finish.\n\nExperience the perfect fit and exceptional fabric quality that has made us the trusted choice for men's fashion.`,
    features: [
      "Premium quality fabric",
      "Comfortable fit for all-day wear",
      "Available in multiple sizes",
      "Easy care — machine washable",
      "Quality-checked before dispatch",
    ],
    rating: 4.5,
    reviewCount: 0,
    stock: 10,
    sku: product.id.toUpperCase(),
    categoryName: "Collection",
    categorySlug: "collection",
    deliveryStandard:
      "Dhaka City: 1–2 business days | Outside Dhaka: 3–5 business days",
    deliveryExpress:
      "Express delivery available in Dhaka within 4–6 hours",
    returnPolicy:
      "7-day easy return policy. Product must be unused and in original packaging.",
    reviews: [],
  };
}

/* ── Public helpers ──────────────────────────────────────────────────── */

/** Return full ProductDetail for a slug, or null if unknown */
export function getProductDetail(slug: string): ProductDetail | null {
  if (DETAILS[slug]) return DETAILS[slug];
  const found = ALL_PRODUCTS.find((p) => p.slug === slug);
  return found ? makeGenericDetail(found) : null;
}

/** Return up to 5 related products (same category, excluding current) */
export function getRelatedProducts(
  currentSlug: string,
  categorySlug: string
): Product[] {
  const pool = ALL_PRODUCTS.filter((p) => p.slug !== currentSlug);

  /* Prefer same-family products */
  if (categorySlug === "polo-shirt") {
    const poloCandidates = pool.filter((p) =>
      p.name.toLowerCase().includes("polo")
    );
    if (poloCandidates.length >= 3) return poloCandidates.slice(0, 5);
  }
  if (categorySlug === "panjabi" || categorySlug === "bootcut-gurkha-pant") {
    const panjabiCandidates = pool.filter((p) =>
      p.name.toLowerCase().includes("panjabi") ||
      p.name.toLowerCase().includes("pant")
    );
    if (panjabiCandidates.length >= 3) return panjabiCandidates.slice(0, 5);
  }

  /* Fallback: mix from all products */
  return pool.slice(0, 5);
}
