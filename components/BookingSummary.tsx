import Image from "next/image";
import type { Stay } from "@/data/stays";
import { formatDate, inr, quote } from "@/lib/pricing";
import Rating from "./Rating";

type Props = { stay: Stay; checkIn: string; checkOut: string; guests: number; nights: number };

export default function BookingSummary({ stay, checkIn, checkOut, guests, nights }: Props) {
  const q = quote(stay, nights);
  return (
    <div className="rounded-3xl border border-line bg-white p-6">
      <div className="flex gap-4 border-b border-line pb-5">
        <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-xl">
          <Image src={stay.images[0]} alt={stay.name} fill sizes="112px" className="object-cover" />
        </div>
        <div>
          <p className="text-xs text-muted">{stay.type} · {stay.city}</p>
          <p className="font-semibold leading-snug">{stay.name}</p>
          <Rating value={stay.rating} count={stay.reviewCount} className="mt-1 text-sm" />
        </div>
      </div>
      <dl className="grid grid-cols-3 gap-2 border-b border-line py-5 text-sm">
        <div>
          <dt className="text-xs text-muted">Check in</dt>
          <dd className="font-medium">{formatDate(checkIn)}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Check out</dt>
          <dd className="font-medium">{formatDate(checkOut)}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Guests</dt>
          <dd className="font-medium">{guests}</dd>
        </div>
      </dl>
      <div className="space-y-2.5 pt-5 text-sm">
        <Line label={`${inr(stay.pricePerNight)} × ${nights} ${nights === 1 ? "night" : "nights"}`} value={q.base} />
        {q.cleaning > 0 && <Line label="Cleaning fee" value={q.cleaning} />}
        <Line label="Waypoint service fee" value={q.service} />
        <Line label="GST (12%)" value={q.gst} />
        <div className="flex justify-between border-t border-line pt-3 text-base font-semibold">
          <span>Total (INR)</span>
          <span>{inr(q.total)}</span>
        </div>
      </div>
    </div>
  );
}

function Line({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted">{label}</span>
      <span>{inr(value)}</span>
    </div>
  );
}
