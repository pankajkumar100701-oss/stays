"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Stay } from "@/data/stays";
import { inr, nightsBetween, quote } from "@/lib/pricing";
import Rating from "./Rating";

type Props = {
  stay: Stay;
  initial: { checkIn?: string; checkOut?: string; guests?: string };
};

export default function BookingCard({ stay, initial }: Props) {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState(initial.checkIn ?? "");
  const [checkOut, setCheckOut] = useState(initial.checkOut ?? "");
  const [guests, setGuests] = useState(
    Math.min(Number(initial.guests) || Math.min(2, stay.maxGuests), stay.maxGuests)
  );
  const [error, setError] = useState("");

  const nights = nightsBetween(checkIn, checkOut);
  const q = quote(stay, nights);

  function reserve() {
    if (!checkIn || !checkOut) return setError("Please choose check-in and check-out dates.");
    if (nights < 1) return setError("Check-out must be after check-in.");
    const p = new URLSearchParams({ checkIn, checkOut, guests: String(guests) });
    router.push(`/checkout/${stay.slug}?${p}`);
  }

  const label = "text-[11px] font-semibold uppercase tracking-wider text-muted";

  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-xl shadow-ink/5">
      <div className="flex items-baseline justify-between">
        <p>
          <span className="text-2xl font-semibold">{inr(stay.pricePerNight)}</span>
          <span className="text-muted"> / night</span>
        </p>
        <Rating value={stay.rating} count={stay.reviewCount} className="text-sm" />
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-line">
        <div className="grid grid-cols-2 divide-x divide-line">
          <label className="block p-3">
            <span className={label}>Check in</span>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => {
                setCheckIn(e.target.value);
                setError("");
              }}
              className="mt-0.5 w-full bg-transparent text-sm font-medium outline-none"
            />
          </label>
          <label className="block p-3">
            <span className={label}>Check out</span>
            <input
              type="date"
              value={checkOut}
              min={checkIn || undefined}
              onChange={(e) => {
                setCheckOut(e.target.value);
                setError("");
              }}
              className="mt-0.5 w-full bg-transparent text-sm font-medium outline-none"
            />
          </label>
        </div>
        <div className="flex items-center justify-between border-t border-line p-3">
          <div>
            <span className={label}>Guests</span>
            <p className="text-sm font-medium">
              {guests} {guests === 1 ? "guest" : "guests"}
              <span className="text-muted"> · max {stay.maxGuests}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Stepper label="Fewer guests" disabled={guests <= 1} onClick={() => setGuests((g) => g - 1)}>−</Stepper>
            <Stepper label="More guests" disabled={guests >= stay.maxGuests} onClick={() => setGuests((g) => g + 1)}>+</Stepper>
          </div>
        </div>
      </div>

      <button
        onClick={reserve}
        className="mt-4 w-full rounded-xl bg-clay py-3.5 font-semibold text-cream transition hover:bg-clay-dark active:scale-[0.99]"
      >
        {nights ? "Reserve" : "Check availability"}
      </button>
      {error && <p className="mt-2 text-center text-sm text-clay">{error}</p>}
      <p className="mt-3 text-center text-xs text-muted">You won&apos;t be charged yet</p>

      {nights > 0 && (
        <div className="mt-5 space-y-2.5 border-t border-line pt-5 text-sm">
          <Row label={`${inr(stay.pricePerNight)} × ${nights} ${nights === 1 ? "night" : "nights"}`} value={q.base} />
          {q.cleaning > 0 && <Row label="Cleaning fee" value={q.cleaning} />}
          <Row label="Waypoint service fee" value={q.service} />
          <Row label="GST (12%)" value={q.gst} />
          <div className="flex justify-between border-t border-line pt-3 text-base font-semibold">
            <span>Total</span>
            <span>{inr(q.total)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex justify-between text-muted">
      <span className="underline decoration-line underline-offset-4">{label}</span>
      <span className="text-ink">{inr(value)}</span>
    </div>
  );
}

function Stepper({ children, label, disabled, onClick }: { children: React.ReactNode; label: string; disabled: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="grid h-8 w-8 place-items-center rounded-full border border-line text-lg leading-none transition hover:border-ink disabled:opacity-30 disabled:hover:border-line"
    >
      {children}
    </button>
  );
}
