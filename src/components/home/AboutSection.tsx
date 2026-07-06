import Image from "next/image";

const CDN = "https://cdn.manfarebd.com/glamtouch/media";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Background — use a wide product image */}
      <div className="absolute inset-0">
        <Image
          src={`${CDN}/175412582929266302186_gt_web_banner_2.webp`}
          alt="Alpha Man collection"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content card */}
      <div className="relative mx-auto max-w-2xl px-4">
        <div className="rounded-2xl bg-white/90 px-8 py-10 text-center shadow-2xl backdrop-blur-sm">
          {/* Logo text */}
          <div className="mb-4">
            <span className="font-serif text-2xl font-bold tracking-[0.25em] text-gray-900 uppercase md:text-3xl">
              ALPHA MAN
            </span>
            <p className="mt-0.5 text-[10px] tracking-[0.35em] text-gray-400 uppercase">
              Alpha Man
            </p>
          </div>

          <div className="mx-auto mb-4 h-px w-16 bg-gray-300" />

          <p className="text-sm leading-relaxed text-gray-700 md:text-base">
            Alpha Man is a renowned fashion brand dedicated to providing premium quality
            clothing and accessories for men. Our collection combines style with confidence,
            reflecting the strength and sophistication of the modern man.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            We are committed to the{" "}
            <span className="font-semibold text-gray-800">"Sensation of Glamour"</span> — bringing
            you designs that are both fashionable and modest, crafted with the finest materials for
            the modern Muslim woman.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <span>✦ Premium Quality</span>
            <span>✦ Elegant Designs</span>
            <span>✦ Affordable Prices</span>
            <span>✦ Fast Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
