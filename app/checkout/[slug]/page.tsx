import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import BookingSummary from "@/components/BookingSummary";
import CheckoutForm from "@/components/CheckoutForm";
import { getStay } from "@/data/stays";
import { nightsBetween, quote } from "@/lib/pricing";

export const metadata: Metadata = { title: "Confirm and pay · Waypoint" };

const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

export default async function CheckoutPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const sp = await searchParams;
  const stay = getStay(slug);
  if (!stay) notFound();

  const checkIn = one(sp.checkIn);
  const checkOut = one(sp.checkOut);
  const guests = Math.max(1, Math.min(Number(one(sp.guests)) || 1, stay.maxGuests));
  const nights = nightsBetween(checkIn, checkOut);
  if (!nights) redirect(`/stays/${slug}`);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
      <Link href={`/stays/${slug}?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`} className="text-sm text-muted hover:text-ink">
        ← Back to stay
      </Link>
      <h1 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Confirm and pay</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_400px]">
        <CheckoutForm slug={slug} checkIn={checkIn} checkOut={checkOut} guests={guests} total={quote(stay, nights).total} />
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <BookingSummary stay={stay} checkIn={checkIn} checkOut={checkOut} guests={guests} nights={nights} />
        </aside>
      </div>
    </div>
  );
}
