export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: "NEW" | "SALE" | "HOT";
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Review {
  id: string;
  customerName: string;
  avatar?: string;
  rating: number;
  date: string;
  text: string;
}

export interface NavItem {
  label: string;
  href: string;
}

/** A single color/variant swatch for the product detail page */
export interface ProductColor {
  name: string;
  /** Small thumbnail image shown in the color selector */
  swatchImage: string;
  /** Gallery images for this color variant */
  images: string[];
}

/** Full product detail — used on the /product/[slug] page */
export interface ProductDetail extends Product {
  /** Full-size gallery images (default/first color) */
  images: string[];
  /** Color variants with their own gallery sets */
  colors: ProductColor[];
  /** Available sizes */
  sizes: string[];
  /** Long-form product description (paragraphs separated by \n\n) */
  description: string;
  /** Bullet-point feature list */
  features: string[];
  /** Average rating (0–5) */
  rating: number;
  /** Total number of reviews */
  reviewCount: number;
  /** Units in stock for the default variant */
  stock: number;
  /** Internal SKU code */
  sku: string;
  /** Human-readable category name */
  categoryName: string;
  /** Category slug for breadcrumb link */
  categorySlug: string;
  /** Standard delivery description */
  deliveryStandard: string;
  /** Express delivery description (optional) */
  deliveryExpress?: string;
  /** Return policy text */
  returnPolicy: string;
  /** Customer reviews */
  reviews: Review[];
}
