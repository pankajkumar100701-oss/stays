"use client";

import Link from "next/link";
import StayCard from "@/components/StayCard";
import { stays } from "@/data/stays";
import { useWishlist } from "@/lib/wishlist";

export default function WishlistPage() {
  const { list } = useWishlist();
  const saved = stays.filter((s) => list.includes(s.slug));

  return (
    <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
      <h1 className="font-serif text-4xl font-semibold">Your wishlist</h1>
      <p className="mt-2 text-muted">
        {saved.length ? `${saved.length} saved ${saved.length === 1 ? "stay" : "stays"}` : "Stays you ❤️ will show up here."}
      </p>

      {saved.length > 0 ? (
        <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {saved.map((s) => (
            <StayCard key={s.slug} stay={s} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-3xl border border-dashed border-line py-20 text-center">
          <p className="text-5xl">🤍</p>
          <h2 className="mt-4 font-serif text-2xl font-semibold">Nothing saved yet</h2>
          <p className="mt-2 text-muted">Tap the heart on any stay to save it for later.</p>
          <Link href="/stays" className="mt-6 inline-block rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-cream">
            Start exploring
          </Link>
        </div>
      )}
    </div>
  );
}
