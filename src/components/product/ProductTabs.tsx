"use client";

import { useState } from "react";
import { Truck, Clock, RefreshCw, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  description: string;
  features: string[];
  deliveryStandard: string;
  deliveryExpress?: string;
  returnPolicy: string;
}

const TABS = ["description", "delivery"] as const;
type Tab = (typeof TABS)[number];

const TAB_LABELS: Record<Tab, string> = {
  description: "Description",
  delivery: "Delivery Options",
};

export function ProductTabs({
  description,
  features,
  deliveryStandard,
  deliveryExpress,
  returnPolicy,
}: Props) {
  const [active, setActive] = useState<Tab>("description");

  return (
    <div className="mt-12 md:mt-16">
      {/* Tab nav */}
      <div className="flex gap-8 border-b border-gray-200">
        {TABS.map((tab) => (
          <button
            key={tab}
            id={`tab-${tab}`}
            aria-selected={active === tab}
            onClick={() => setActive(tab)}
            className={cn(
              "relative pb-3 text-sm font-semibold uppercase tracking-widest transition-colors duration-150 focus:outline-none",
              active === tab
                ? "text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-[#977b63] after:to-[#c0a086]"
                : "text-gray-400 hover:text-gray-600"
            )}
          >
            {TAB_LABELS[tab]}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="py-7">
        {/* ── Description ─── */}
        {active === "description" && (
          <div className="max-w-3xl space-y-6">
            <div className="space-y-4">
              {description.split("\n\n").map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-gray-700 md:text-[15px]">
                  {para}
                </p>
              ))}
            </div>

            {features.length > 0 && (
              <div>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-900">
                  Key Features
                </h3>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#c0a086] to-[#977b63] text-[10px] text-white font-bold">
                        ✓
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* ── Delivery Options ─── */}
        {active === "delivery" && (
          <div className="max-w-2xl space-y-3">
            {[
              {
                icon: Truck,
                label: "Standard Delivery",
                value: deliveryStandard,
              },
              ...(deliveryExpress
                ? [{ icon: Clock, label: "Express Delivery", value: deliveryExpress }]
                : []),
              {
                icon: RefreshCw,
                label: "Return Policy",
                value: returnPolicy,
              },
              {
                icon: ShieldCheck,
                label: "100% Authentic",
                value:
                  "All products are genuine and quality-checked before shipping. Your satisfaction is guaranteed.",
              },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50/80 p-4 transition-colors hover:border-[#977b63]/30"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#c0a086] to-[#977b63]">
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="mb-0.5 text-sm font-semibold text-gray-900">{label}</h4>
                  <p className="text-sm leading-relaxed text-gray-600">{value}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
