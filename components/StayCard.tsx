import Image from "next/image";
import Link from "next/link";
import type { Stay } from "@/data/stays";
import { inr } from "@/lib/pricing";
import Rating from "./Rating";
import WishlistButton from "./WishlistButton";

export default function StayCard({ stay, query = "" }: { stay: Stay; query?: string }) {
  return (
    <Link href={`/stays/${stay.slug}${query}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
        <Image
          src={stay.images[0]}
          alt={stay.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-1.5">
          <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-ink">{stay.type}</span>
          {stay.host.superhost && (
            <span className="rounded-full bg-ink/80 px-2.5 py-1 text-xs font-semibold text-cream">Superhost</span>
          )}
        </div>
        <WishlistButton slug={stay.slug} className="absolute right-3 top-3" />
      </div>
      <div className="mt-3 space-y-0.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-snug">{stay.name}</h3>
          <Rating value={stay.rating} className="shrink-0 text-sm" />
        </div>
        <p className="text-sm text-muted">
          {stay.area}, {stay.city}
        </p>
        <p className="line-clamp-1 text-sm text-muted">{stay.tagline}</p>
        <p className="pt-1 text-sm">
          <span className="font-semibold">{inr(stay.pricePerNight)}</span>
          <span className="text-muted"> / night</span>
        </p>
      </div>
    </Link>
  );
}
