import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

/* ─────────────────────────────────────────
   TYPES
───────────────────────────────────────── */
interface BannerItem {
    image: string;
    alt: string;
    href: string;
    title: string;
    /** true = large left banner, false = small right banner */
    large?: boolean;
}

/* ─────────────────────────────────────────
   SINGLE BANNER
───────────────────────────────────────── */
function Banner({ item, large = false }: { item: BannerItem; large?: boolean }) {
    return (
        <Link
            href={item.href}
            className="group relative block w-full h-full overflow-hidden"
            style={{ borderRadius: 12 }}
        >
            {/* Background image */}
            <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes={large ? "(max-width: 768px) 100vw, 65vw" : "(max-width: 768px) 100vw, 33vw"}
            />

            {/* Dark overlay — subtle, only on edges */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(135deg, rgba(0,0,0,0.28) 0%, transparent 50%, rgba(0,0,0,0.18) 100%)",
                }}
            />

            {/* TOP-LEFT: manflare logo */}
            <div className="absolute top-[10px] left-[12px] z-10 flex items-center gap-[4px]">
                {/* M triangle icon */}
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M2 15 L9 3 L16 15 Z" fill="white" fillOpacity="0.9" />
                    <path d="M5.5 15 L9 9 L12.5 15 Z" fill="white" fillOpacity="0.5" />
                </svg>
                <span
                    style={{
                        fontFamily: "sans-serif",
                        fontSize: large ? 13 : 10,
                        fontWeight: 700,
                        color: "white",
                        letterSpacing: "0.05em",
                        textShadow: "0 1px 3px rgba(0,0,0,0.4)",
                    }}
                >
                    manfare
                </span>
            </div>

            {/* TOP-RIGHT: title + ORDER NOW */}
            <div className="absolute top-[10px] right-[12px] z-10 flex flex-col items-end gap-[6px]">
                {/* Category title */}
                <span
                    style={{
                        fontFamily: "sans-serif",
                        fontSize: large ? 26 : 11,
                        fontWeight: 800,
                        color: "white",
                        letterSpacing: large ? "0.15em" : "0.1em",
                        textTransform: "uppercase",
                        textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                        lineHeight: 1.1,
                        textAlign: "right",
                    }}
                >
                    {item.title}
                </span>

                {/* ORDER NOW pill */}
                <div
                    className="flex items-center gap-[5px] px-[10px] py-[5px]"
                    style={{
                        background: large ? "rgba(60,40,20,0.82)" : "rgba(50,35,15,0.80)",
                        borderRadius: 20,
                        backdropFilter: "blur(4px)",
                        border: "1px solid rgba(255,255,255,0.15)",
                    }}
                >
                    <ShoppingCart
                        style={{
                            width: large ? 13 : 10,
                            height: large ? 13 : 10,
                            color: "white",
                            flexShrink: 0,
                        }}
                    />
                    <span
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: large ? 11 : 9,
                            fontWeight: 700,
                            color: "white",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                        }}
                    >
                        ORDER NOW
                    </span>
                </div>
            </div>
        </Link>
    );
}

/* ─────────────────────────────────────────
   PROMO BANNER GRID
   Layout: [large left] [top-right / bottom-right]
───────────────────────────────────────── */
interface Props {
    banners: {
        large: BannerItem;      // left big banner
        topRight: BannerItem;   // right top
        bottomRight: BannerItem; // right bottom
    };
}

export function PromoBannerGrid({ banners }: Props) {
    return (
        <div
            className="w-full"
            style={{
                display: "grid",
                gridTemplateColumns: "1.88fr 1fr",
                gridTemplateRows: "1fr",
                gap: 10,
                height: 460, // total section height
            }}
        >
            {/* LEFT: large banner — spans full height */}
            <div style={{ gridRow: "1 / 2", gridColumn: "1 / 2" }}>
                <Banner item={banners.large} large />
            </div>

            {/* RIGHT: two stacked banners */}
            <div
                style={{
                    gridRow: "1 / 2",
                    gridColumn: "2 / 3",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                }}
            >
                <div style={{ flex: 1 }}>
                    <Banner item={banners.topRight} />
                </div>
                <div style={{ flex: 1 }}>
                    <Banner item={banners.bottomRight} />
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────
   USAGE EXAMPLE
   Replace the old grid JSX with:

   <PromoBannerGrid
     banners={{
       large: {
         image: "https://...",
         alt: "Leather Wallet — Manfare",
         href: "/category/leather-wallet",
         title: "Leather Wallet",
       },
       topRight: {
         image: "https://...",
         alt: "Leather Belt — Manfare",
         href: "/category/leather-belt",
         title: "Leather Belt",
       },
       bottomRight: {
         image: "https://...",
         alt: "Fashion Mask — Manfare",
         href: "/category/fashion-mask",
         title: "Fashion Mask",
       },
     }}
   />
───────────────────────────────────────── */