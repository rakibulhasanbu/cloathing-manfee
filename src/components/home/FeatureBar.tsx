import Image from "next/image";

const features = [
  {
    icon: "https://manfarebd.com/_next/static/media/feature_delivery.3e4f1dad.svg",
    title: "FASTEST SHIPPING COUNTRYWIDE",
  },
  {
    icon: "https://manfarebd.com/_next/static/media/feature_return.9a0b1a12.svg",
    title: "EASY RETURN POLICY",
  },
  {
    icon: "https://manfarebd.com/_next/static/media/feature_quality.7f8c9e23.svg",
    title: "PREMIUM QUALITY PRODUCT",
  },
  {
    icon: "https://manfarebd.com/_next/static/media/feature_support.1b2c3d4e.svg",
    title: "ONLINE SUPPORT 24/7",
  },
];

export function FeatureBar() {
  return (
    <div className="bg-white border-y border-gray-100 py-5">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {features.map(({ icon, title }, index) => (
            <div
              key={title}
              className={`flex flex-col items-center justify-center gap-2 px-4 py-4 text-center ${
                index < 3 ? "border-b border-gray-100 md:border-b-0 md:border-r" : ""
              }`}
            >
              <div className="h-10 w-10">
                <Image
                  src={icon}
                  alt={title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <p className="text-[11px] font-bold tracking-[0.25em] text-[#333] uppercase font-bahnschrift">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
