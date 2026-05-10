import { Truck, RefreshCw, Banknote, MapPin } from "lucide-react";

const features = [
  { Icon: Truck, title: "Free Delivery", desc: "On orders over ৳2000" },
  { Icon: RefreshCw, title: "Easy Return", desc: "7-day return policy" },
  { Icon: Banknote, title: "Cash on Delivery", desc: "Available nationwide" },
  { Icon: MapPin, title: "Order Tracking", desc: "Track your order live" },
];

export function FeatureBar() {
  return (
    <div className="border-y border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="grid grid-cols-2 divide-x divide-y divide-gray-100 md:grid-cols-4 md:divide-y-0">
          {features.map(({ Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-3 px-4 py-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100">
                <Icon className="h-4 w-4 text-gray-700" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900">{title}</p>
                <p className="text-[10px] text-gray-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
