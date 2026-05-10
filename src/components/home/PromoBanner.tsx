import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
  alt: string;
  href?: string;
  overlayText?: string;
  overlaySubtext?: string;
  aspectClass?: string;
}

export function PromoBanner({
  image,
  alt,
  href = "#",
  overlayText,
  overlaySubtext,
  aspectClass = "aspect-[16/5]",
}: Props) {
  return (
    <Link href={href} className="group relative block w-full overflow-hidden rounded-xl">
      <div className={`relative w-full overflow-hidden ${aspectClass} bg-gray-100`}>
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="100vw"
        />
        {overlayText && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 p-6 text-center">
            <h3 className="font-serif text-2xl font-bold text-white drop-shadow-lg md:text-4xl">
              {overlayText}
            </h3>
            {overlaySubtext && (
              <p className="mt-2 text-sm text-white/90 drop-shadow">{overlaySubtext}</p>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
