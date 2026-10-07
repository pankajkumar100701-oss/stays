"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { STAY_TYPES } from "@/data/stays";

const PRICES = [
  { label: "Any price", value: "" },
  { label: "Under ₹5,000", value: "5000" },
  { label: "Under ₹10,000", value: "10000" },
  { label: "Under ₹15,000", value: "15000" },
];

export const FILTER_AMENITIES = ["Wi-Fi", "Breakfast included", "Pool", "Mountain view", "Lake view", "Pet friendly"];

const SORTS = [
  { label: "Recommended", value: "" },
  { label: "Price: low to high", value: "price-asc" },
  { label: "Price: high to low", value: "price-desc" },
  { label: "Top rated", value: "rating" },
];

export default function Filters() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const type = params.get("type") ?? "";
  const maxPrice = params.get("maxPrice") ?? "";
  const sort = params.get("sort") ?? "";
  const amenities = params.getAll("amenity");

  function update(mutate: (p: URLSearchParams) => void) {
    const p = new URLSearchParams(params.toString());
    mutate(p);
    router.replace(`${pathname}${p.size ? `?${p}` : ""}`, { scroll: false });
  }

  const set = (key: string, value: string) =>
    update((p) => (value ? p.set(key, value) : p.delete(key)));

  const chip = (active: boolean) =>
    `shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
      active ? "border-ink bg-ink text-cream" : "border-line bg-white hover:border-ink"
    }`;

  return (
    <div className="space-y-4">
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
        <button className={chip(!type)} onClick={() => set("type", "")}>All stays</button>
        {STAY_TYPES.map((t) => (
          <button key={t.type} className={chip(type === t.type)} onClick={() => set("type", type === t.type ? "" : t.type)}>
            {t.icon} {t.type}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <select
          value={maxPrice}
          onChange={(e) => set("maxPrice", e.target.value)}
          className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium outline-none"
          aria-label="Price"
        >
          {PRICES.map((p) => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>
        {FILTER_AMENITIES.map((a) => {
          const on = amenities.includes(a);
          return (
            <button
              key={a}
              onClick={() =>
                update((p) => {
                  p.delete("amenity");
                  (on ? amenities.filter((x) => x !== a) : [...amenities, a]).forEach((x) => p.append("amenity", x));
                })
              }
              className={`rounded-full border px-3.5 py-2 text-sm transition ${
                on ? "border-clay bg-clay/10 font-medium text-clay" : "border-line bg-white hover:border-ink"
              }`}
            >
              {on ? "✓ " : ""}{a}
            </button>
          );
        })}
        <select
          value={sort}
          onChange={(e) => set("sort", e.target.value)}
          className="ml-auto rounded-full border border-line bg-white px-4 py-2 text-sm font-medium outline-none"
          aria-label="Sort"
        >
          {SORTS.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
