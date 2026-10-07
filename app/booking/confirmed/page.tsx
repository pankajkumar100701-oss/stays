import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingSummary from "@/components/BookingSummary";
import { getStay } from "@/data/stays";
import { nightsBetween } from "@/lib/pricing";

export const metadata: Metadata = { title: "Booking confirmed · Waypoint" };

const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

export default async function ConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const stay = getStay(one(sp.slug));
  if (!stay) notFound();

  const id = one(sp.id) || "WPT-000000";
  const name = one(sp.name).split(" ")[0];
  const checkIn = one(sp.checkIn);
  const checkOut = one(sp.checkOut);
  const guests = Number(one(sp.guests)) || 1;
  const nights = nightsBetween(checkIn, checkOut);

  return (
    <div className="mx-auto max-w-2xl px-4 pt-14 text-center sm:px-6">
      <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-leaf text-cream shadow-lg shadow-leaf/30">
        <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="m5 12 5 5L20 7" />
        </svg>
      </div>
      <h1 className="mt-6 font-serif text-4xl font-semibold">
        Booking confirmed{name ? `, ${name}` : ""}! 🎉
      </h1>
      <p className="mt-3 text-muted">
        Your stay is all set. {stay.host.name} is looking forward to hosting you in {stay.city}.
      </p>
      <p className="mt-6 inline-block rounded-full border border-dashed border-clay bg-clay/5 px-5 py-2 font-mono text-sm">
        Booking ID: <span className="font-semibold text-clay">{id}</span>
      </p>

      <div className="mt-10 text-left">
        {nights > 0 && <BookingSummary stay={stay} checkIn={checkIn} checkOut={checkOut} guests={guests} nights={nights} />}
      </div>

      <div className="mt-6 grid gap-3 rounded-2xl bg-sand/70 p-5 text-left text-sm sm:grid-cols-3">
        <p>📩 Confirmation sent to your email</p>
        <p>💬 Host will WhatsApp you directions</p>
        <p>🛡️ Free cancellation for 48 hrs</p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href={`/stays/${stay.slug}`} className="rounded-full border border-ink px-5 py-2.5 text-sm font-semibold">
          View stay
        </Link>
        <Link href="/stays" className="rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-cream">
          Explore more stays
        </Link>
      </div>
    </div>
  );
}
