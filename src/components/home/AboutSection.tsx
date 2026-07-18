import Image from "next/image";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="relative w-full aspect-[16/6] min-h-[320px]">
        <Image
          src="https://cdn.manfarebd.com/manfarebd/media/177798829275254222196_old_moyae_polo_web_.webp"
          alt="Manfare lifestyle"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Centered glassmorphism card */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-lg w-full rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 px-8 py-8 text-center shadow-2xl">
            {/* Logo */}
            <div className="mb-4 flex justify-center">
              <Image
                src="https://manfarebd.com/_next/static/media/logo.11838dda.png"
                alt="Manfare"
                width={140}
                height={36}
                className="object-contain"
              />
            </div>

            <p className="text-xs leading-relaxed text-white md:text-sm">
              Manfare is a lifestyle brand with a touch of enhanced &amp; heritage in
              our design. We make your personality stand out with our top of the line collection.
            </p>
            <p className="mt-2.5 text-xs leading-relaxed text-white/90 md:text-sm">
              Be the attention of every occasion with manfare. Manfare is a lifestyle brand
              with a touch of enhanced &amp; heritage in our design. We make your personality
              stand out with our top of the line collection. Be the attention of every
              occasion with manfare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
