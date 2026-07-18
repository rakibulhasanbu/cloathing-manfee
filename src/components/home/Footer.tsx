import Link from "next/link";
import Image from "next/image";

const infoLinks = [
  { label: "About", href: "/about" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Return & Exchange Policy", href: "/refund-policy" },
  { label: "Payment & Refund policy", href: "/payment-policy" },
  { label: "Contact Us", href: "/contact" },
  { label: "Sitemap", href: "/sitemap" },
];

// Social icons SVGs
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.548 4.108 1.508 5.836L.057 23.453a.5.5 0 00.621.601l5.795-1.516A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.6-.498-5.103-1.368l-.366-.215-3.816 1 .971-3.723-.238-.383A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.76a8.26 8.26 0 004.84 1.55V6.88a4.85 4.85 0 01-1.07-.19z" />
    </svg>
  );
}

// Payment method logos using Manfare CDN
const paymentMethods = [
  { name: "Visa", src: "https://manfarebd.com/_next/static/media/visa.09e0d8f9.svg" },
  { name: "Mastercard", src: "https://manfarebd.com/_next/static/media/mastercard.d3b1f3f7.svg" },
  { name: "American Express", src: "https://manfarebd.com/_next/static/media/amex.38d26c1a.svg" },
  { name: "bKash", src: "https://manfarebd.com/_next/static/media/bkash.6c23c177.svg" },
  { name: "Nagad", src: "https://manfarebd.com/_next/static/media/nagad.68d0a89d.svg" },
  { name: "AamarPay", src: "https://manfarebd.com/_next/static/media/aamarpay.f8a2d119.svg" },
  { name: "Upay", src: "https://manfarebd.com/_next/static/media/upay.2ed7c8f0.svg" },
  { name: "Rocket", src: "https://manfarebd.com/_next/static/media/rocket.9bd19623.svg" },
  { name: "DBBL Nexus", src: "https://manfarebd.com/_next/static/media/dbbl-nexus.66dc5f81.svg" },
  { name: "MTB", src: "https://manfarebd.com/_next/static/media/mtb.703a2b1f.svg" },
  { name: "FastCash", src: "https://manfarebd.com/_next/static/media/fastcash.85b8cf00.svg" },
];

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white relative overflow-hidden pb-16 md:pb-0">
      {/* Decorative diamond lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 60px,
            rgba(169,129,83,0.6) 60px,
            rgba(169,129,83,0.6) 61px
          )`,
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1.5fr]">

          {/* ── Brand / Contact col ── */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="https://manfarebd.com/_next/static/media/logo.11838dda.png"
                alt="Manfare Logo"
                width={175}
                height={45}
                className="invert brightness-0 invert"
              />
            </div>

            {/* Phone */}
            <a
              href="tel:+8809606999695"
              className="text-lg font-bold text-[#A98153] hover:text-[#c9a575] transition-colors font-bahnschrift"
            >
              +880 9606999695
            </a>
            <p className="mt-1 text-xs text-gray-400 font-bahnschrift">
              Worktime: SAT – FRI, 10AM – 11PM
            </p>

            {/* Social icons */}
            <div className="mt-5 flex items-center gap-3">
              {[
                {
                  href: "https://www.facebook.com/manfarebd",
                  Icon: FacebookIcon,
                  label: "Facebook",
                },
                {
                  href: "https://www.instagram.com/manfarebd",
                  Icon: InstagramIcon,
                  label: "Instagram",
                },
                {
                  href: "https://wa.me/8809606999695",
                  Icon: WhatsappIcon,
                  label: "WhatsApp",
                },
                {
                  href: "https://www.tiktok.com/@manfarebd",
                  Icon: TiktokIcon,
                  label: "TikTok",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-gray-400 hover:border-white/50 hover:text-white transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* ── Information links ── */}
          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[0.2em] text-[#A98153] uppercase font-bahnschrift">
              INFORMATION
            </h3>
            <ul className="space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-gray-400 hover:text-white transition-colors font-bahnschrift"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Info ── */}
          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[0.2em] text-[#A98153] uppercase font-bahnschrift">
              CONTACT INFO
            </h3>
            <div className="space-y-3 text-xs text-gray-400 font-bahnschrift">
              <p>
                Bashundhara City Shopping Complex,
                <br />
                Level-3, Block-D, Shop 45, 46,
                <br />
                Panthapath, Dhaka.
              </p>
              <a
                href="mailto:manfarebd@gmail.com"
                className="block hover:text-white transition-colors"
              >
                manfarebd@gmail.com
              </a>
              <a
                href="mailto:info@manfarebd.com"
                className="block hover:text-white transition-colors"
              >
                info@manfarebd.com
              </a>
              <p>
                09606999695 | 01948-898198
                <br />
                01730-642262 | 01845-813237
              </p>
            </div>
          </div>

          {/* ── Facebook Page Widget placeholder ── */}
          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[0.2em] text-[#A98153] uppercase font-bahnschrift">
              FOLLOW US
            </h3>
            <a
              href="https://www.facebook.com/manfarebd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877f2]">
                <FacebookIcon />
              </div>
              <div>
                <p className="text-sm font-bold font-bahnschrift">Manfare</p>
                <p className="text-[10px] text-gray-400 font-bahnschrift">616,500 followers</p>
                <p className="mt-1 text-[10px] font-semibold text-[#1877f2] font-bahnschrift">👍 Follow Page</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ── Payment row ── */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase font-bahnschrift">
              Pay With
            </span>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex flex-wrap items-center gap-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="flex h-8 w-auto items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  <Image
                    src={method.src}
                    alt={method.name}
                    width={60}
                    height={24}
                    className="h-6 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Copyright ── */}
      <div className="relative border-t border-white/5 py-3">
        <p className="text-center text-[10px] text-gray-600 font-bahnschrift">
          © {new Date().getFullYear()} Manfare. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
