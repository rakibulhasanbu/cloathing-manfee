import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

const CDN = "https://cdn.manfarebd.com/glamtouch/media";

const videos = [
  {
    id: 1,
    title: "Glam Touch Premium Quality Faringi Kimono Abaya",
    label: "Designer Karchupi Abaya",
    thumbnail: `${CDN}/174834076870113829666_gt_1302_1.webp`,
    href: "https://www.youtube.com/@glamtouchbd",
  },
  {
    id: 2,
    title: "Eid Collection - 2025",
    label: "Eid Collection 2025",
    thumbnail: `${CDN}/177114819266541485860_glmatouch_eid_collection_web_banner.webp`,
    href: "https://www.youtube.com/@glamtouchbd",
  },
];

export function VideoSection() {
  return (
    <section className="bg-[#f8f4f0] py-8">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-16">
        <div className="mb-5">
          <h2 className="text-base font-bold tracking-widest text-gray-900 uppercase md:text-lg">
            Designer Karchupi Abaya
          </h2>
          <div className="mt-1 h-[2px] w-12 bg-gray-800" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {videos.map((video) => (
            <Link
              key={video.id}
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl shadow-sm"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-gray-200">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />

                {/* YouTube play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-lg transition-transform group-hover:scale-110">
                    <Play className="h-6 w-6 translate-x-0.5 fill-white text-white" />
                  </div>
                </div>

                {/* Watch on YouTube badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded bg-black/70 px-2 py-1 backdrop-blur-sm">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-red-500">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span className="text-[10px] font-medium text-white">Watch on YouTube</span>
                </div>
              </div>

              <div className="bg-white px-3 py-2">
                <p className="text-xs font-semibold text-gray-800">{video.title}</p>
                <p className="text-[10px] text-gray-500">{video.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
