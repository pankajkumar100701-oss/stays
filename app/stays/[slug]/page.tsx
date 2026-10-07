import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingCard from "@/components/BookingCard";
import Gallery from "@/components/Gallery";
import Rating from "@/components/Rating";
import StayCard from "@/components/StayCard";
import WishlistButton from "@/components/WishlistButton";
import { getStay, stays } from "@/data/stays";

type Params = Promise<{ slug: string }>;
type SP = Promise<{ [key: string]: string | string[] | undefined }>;

const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

export function generateStaticParams() {
  return stays.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const stay = getStay((await params).slug);
  return { title: stay ? `${stay.name}, ${stay.city} · Waypoint` : "Stay not found · Waypoint" };
}

export default async function StayPage({ params, searchParams }: { params: Params; searchParams: SP }) {
  const { slug } = await params;
  const sp = await searchParams;
  const stay = getStay(slug);
  if (!stay) notFound();

  const similar = stays.filter((s) => s.slug !== stay.slug && (s.city === stay.city || s.type === stay.type)).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
      <nav className="text-sm text-muted">
        <Link href="/stays" className="hover:text-ink">Stays</Link>
        <span className="mx-2">/</span>
        <Link href={`/stays?city=${stay.city}`} className="hover:text-ink">{stay.city}</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{stay.name}</span>
      </nav>

      <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-semibold sm:text-4xl">{stay.name}</h1>
          <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <Rating value={stay.rating} count={stay.reviewCount} />
            <span className="text-muted">·</span>
            <span className="text-muted">{stay.area}, {stay.city}{stay.state !== stay.city && `, ${stay.state}`}</span>
            {stay.host.superhost && (
              <>
                <span className="text-muted">·</span>
                <span className="font-medium text-clay">★ Superhost</span>
              </>
            )}
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium">
          <WishlistButton slug={stay.slug} className="border border-line" />
          <span>Save</span>
        </div>
      </div>

      <div className="mt-6">
        <Gallery images={stay.images} name={stay.name} />
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_380px]">
        <div className="min-w-0">
          <div className="border-b border-line pb-8">
            <h2 className="text-xl font-semibold">
              {stay.type} hosted by {stay.host.name}
            </h2>
            <p className="mt-1 text-muted">
              {stay.type === "Hostel"
                ? "Bed in a shared dorm · shared bathroom"
                : `${stay.maxGuests} guests · ${stay.bedrooms} ${stay.bedrooms === 1 ? "bedroom" : "bedrooms"} · ${stay.beds} ${stay.beds === 1 ? "bed" : "beds"} · ${stay.baths} ${stay.baths === 1 ? "bath" : "baths"}`}
            </p>
          </div>

          <div className="space-y-6 border-b border-line py-8">
            {stay.highlights.map((h, i) => (
              <div key={h.title} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sand text-lg">
                  {["✨", "🏞️", "🍲"][i % 3]}
                </span>
                <div>
                  <h3 className="font-semibold">{h.title}</h3>
                  <p className="text-sm text-muted">{h.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-b border-line py-8">
            <p className="font-serif text-xl italic text-ink/90">&ldquo;{stay.tagline}&rdquo;</p>
            <p className="mt-4 leading-relaxed text-ink/80">{stay.description}</p>
          </div>

          <div className="border-b border-line py-8">
            <h2 className="text-xl font-semibold">What this place offers</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {stay.amenities.map((a) => (
                <li key={a} className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-leaf" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="m5 12 5 5L20 7" />
                  </svg>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-b border-line py-8">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <Rating value={stay.rating} /> · {stay.reviewCount} reviews
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {stay.reviews.map((r) => (
                <figure key={r.name + r.date} className="rounded-2xl bg-white p-5 ring-1 ring-line">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-clay/15 font-semibold text-clay">
                      {r.name[0]}
                    </span>
                    <div>
                      <figcaption className="font-semibold">{r.name}</figcaption>
                      <p className="text-xs text-muted">{r.from} · {r.date}</p>
                    </div>
                    <span className="ml-auto text-sm text-saffron">{"★".repeat(r.rating)}</span>
                  </div>
                  <blockquote className="mt-3 text-sm leading-relaxed text-ink/80">{r.text}</blockquote>
                </figure>
              ))}
            </div>
          </div>

          <div className="py-8">
            <h2 className="text-xl font-semibold">Meet your host</h2>
            <div className="mt-5 flex items-center gap-4 rounded-2xl bg-sand/70 p-5">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-ink font-serif text-2xl text-cream">
                {stay.host.name.replace(/^(Col\.|Thakur)\s+/, "")[0]}
              </span>
              <div>
                <p className="font-semibold">{stay.host.name}</p>
                <p className="text-sm text-muted">
                  Hosting since {stay.host.since} · Speaks {stay.host.languages.join(", ")}
                </p>
                {stay.host.superhost && <p className="mt-1 text-sm font-medium text-clay">★ Superhost — top-rated & reliable</p>}
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <BookingCard
            stay={stay}
            initial={{ checkIn: one(sp.checkIn), checkOut: one(sp.checkOut), guests: one(sp.guests) }}
          />
          <p className="mt-4 text-center text-sm text-muted">🛡️ Free cancellation up to 48 hours before check-in</p>
        </aside>
      </div>

      {similar.length > 0 && (
        <section className="mt-12 border-t border-line pt-12">
          <h2 className="font-serif text-2xl font-semibold">You might also like</h2>
          <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {similar.map((s) => (
              <StayCard key={s.slug} stay={s} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
