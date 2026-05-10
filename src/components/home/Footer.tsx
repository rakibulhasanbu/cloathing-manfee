import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const infoLinks = [
  { label: "About Us", href: "/about" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund & Return Policy", href: "/refund-policy" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Contact Us", href: "/contact" },
];

const categoryLinks = [
  { label: "Designer Premium Abayas", href: "/category/designer-premium-abayas" },
  { label: "Hijab & Niqab", href: "/category/hijab-niqab" },
  { label: "Khimar & Jilbab", href: "/category/khimar-jilbab" },
  { label: "Designer Karchupi Abayas", href: "/category/designer-karchupi-abayas" },
  { label: "Abaya & Gown", href: "/category/abaya-gown" },
  { label: "Cape & Cover Up", href: "/category/cape-cover-up" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] pb-16 text-gray-300 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1">
            <div className="mb-3">
              <span className="font-serif text-lg font-bold tracking-[0.2em] text-white uppercase">
                GLAM TOUCH
              </span>
              <p className="text-[9px] tracking-[0.3em] text-gray-500 uppercase">
                Glamour of Modesty
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+8809606999695"
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-gray-400" />
                +880 9606-999695
              </a>
              <a
                href="tel:+8809639148048"
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-gray-400" />
                +880 9639-148048
              </a>
              <a
                href="mailto:info@glamtouch.com.bd"
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-gray-400" />
                info@glamtouch.com.bd
              </a>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.facebook.com/glamtouchbd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/glamtouchbd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@glamtouchbd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="mb-3 text-xs font-bold tracking-widest text-white uppercase">
              Information
            </h3>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-3 text-xs font-bold tracking-widest text-white uppercase">
              Categories
            </h3>
            <ul className="space-y-2">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-3 text-xs font-bold tracking-widest text-white uppercase">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gray-500" />
                98/2 Vista Garden (3rd Floor), Shenpara, Parbata, Mirpur-10, Dhaka-1216
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-gray-500" />
                SAT – FRI, 10AM – 11PM
              </p>
            </div>

            {/* Payment methods */}
            <div className="mt-5">
              <p className="mb-2 text-xs text-gray-500">We Accept</p>
              <div className="flex flex-wrap gap-2">
                {["bKash", "Nagad", "Visa", "MC", "Cash"].map((method) => (
                  <span
                    key={method}
                    className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4">
        <p className="text-center text-[11px] text-gray-500">
          © {new Date().getFullYear()} Glam Touch. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
