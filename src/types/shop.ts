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
