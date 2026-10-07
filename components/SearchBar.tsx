"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CITIES } from "@/data/stays";

type Props = {
  initial?: { city?: string; checkIn?: string; checkOut?: string; guests?: string };
  compact?: boolean;
};

export default function SearchBar({ initial = {}, compact = false }: Props) {
  const router = useRouter();
  const [city, setCity] = useState(initial.city ?? "");
  const [checkIn, setCheckIn] = useState(initial.checkIn ?? "");
  const [checkOut, setCheckOut] = useState(initial.checkOut ?? "");
  const [guests, setGuests] = useState(initial.guests ?? "2");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const p = new URLSearchParams();
    if (city) p.set("city", city);
    if (checkIn) p.set("checkIn", checkIn);
    if (checkOut) p.set("checkOut", checkOut);
    if (guests) p.set("guests", guests);
    router.push(`/stays${p.size ? `?${p}` : ""}`);
  }

  const field = "flex flex-col gap-0.5 rounded-xl px-4 py-2.5 transition hover:bg-sand/70 focus-within:bg-sand/70";
  const label = "text-[11px] font-semibold uppercase tracking-wider text-muted";
  const input = "w-full bg-transparent text-sm font-medium text-ink outline-none";

  return (
    <form
      onSubmit={submit}
      className={`grid gap-1 rounded-2xl bg-white p-2 text-left shadow-xl shadow-ink/10 sm:grid-cols-[1.4fr_1fr_1fr_0.8fr_auto] sm:items-center ${compact ? "" : "sm:rounded-full"}`}
    >
      <label className={`${field} ${compact ? "" : "sm:rounded-full"}`}>
        <span className={label}>Where</span>
        <input
          list="waypoint-cities"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Goa, Manali, Jaipur…"
          className={input}
        />
        <datalist id="waypoint-cities">
          {CITIES.map((c) => (
            <option key={c} value={c} />
          ))}
        </datalist>
      </label>
      <label className={`${field} ${compact ? "" : "sm:rounded-full"}`}>
        <span className={label}>Check in</span>
        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className={input} />
      </label>
      <label className={`${field} ${compact ? "" : "sm:rounded-full"}`}>
        <span className={label}>Check out</span>
        <input
          type="date"
          value={checkOut}
          min={checkIn || undefined}
          onChange={(e) => setCheckOut(e.target.value)}
          className={input}
        />
      </label>
      <label className={`${field} ${compact ? "" : "sm:rounded-full"}`}>
        <span className={label}>Guests</span>
        <select value={guests} onChange={(e) => setGuests(e.target.value)} className={input}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        className={`flex items-center justify-center gap-2 bg-clay px-6 py-3.5 font-semibold text-cream transition hover:bg-clay-dark ${compact ? "rounded-xl" : "rounded-xl sm:rounded-full"}`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        Search
      </button>
    </form>
  );
}
