import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import StayCard from "@/components/StayCard";
import { DESTINATIONS, HERO_IMAGE, STAY_TYPES, stays } from "@/data/stays";

const featured = stays.filter((s) => s.featured);

const PROMISES = [
  { icon: "🤝", title: "Real local hosts", text: "Every stay is run by people who live there and love sharing their town." },
  { icon: "✅", title: "Verified & visited", text: "Our team checks every listing for safety, cleanliness and photos that match." },
  { icon: "💸", title: "No hidden charges", text: "See the full price — fees and GST included — before you book." },
  { icon: "📞", title: "24×7 support", text: "Hindi or English, call us anytime during your trip." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image src={HERO_IMAGE} alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/70" />
        <div className="mx-auto max-w-5xl px-4 pb-24 pt-36 text-center sm:px-6 sm:pb-32 sm:pt-44">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream backdrop-blur">
            Homestays · Villas · Houseboats · Havelis
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-cream sm:text-6xl">
            Every journey deserves
            <br />
            <em className="text-saffron">a peaceful</em> stop
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-cream/85 sm:text-lg">
            Handpicked places to stay across India — from Himalayan cabins to Kerala houseboats.
          </p>
          <div className="mx-auto mt-10 max-w-4xl">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Stay types */}
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6">
        <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
          {STAY_TYPES.map(({ type, icon }) => (
            <Link
              key={type}
              href={`/stays?type=${type}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-medium transition hover:border-clay hover:text-clay"
            >
              <span className="text-lg">{icon}</span>
              {type}
            </Link>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
        <SectionHeading eyebrow="Where to next?" title="Popular destinations" />
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <Link
              key={d.city}
              href={`/stays?city=${d.city}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[16/10]"
            >
              <Image
                src={d.image}
                alt={d.city}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 p-4 text-cream sm:p-5">
                <h3 className="font-serif text-xl font-semibold sm:text-2xl">{d.city}</h3>
                <p className="text-xs text-cream/80 sm:text-sm">{d.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured stays */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="Guest favourites" title="Stays people love" />
          <Link href="/stays" className="shrink-0 text-sm font-semibold text-clay hover:underline">
            View all {stays.length} →
          </Link>
        </div>
        <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {featured.slice(0, 8).map((s) => (
            <StayCard key={s.slug} stay={s} />
          ))}
        </div>
      </section>

      {/* Why Waypoint */}
      <section className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
        <div className="rounded-3xl bg-ink px-6 py-12 text-cream sm:px-12">
          <SectionHeading eyebrow="Why Waypoint?" title="Travel like a local, stay like family" light />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROMISES.map((p) => (
              <div key={p.title}>
                <div className="text-3xl">{p.icon}</div>
                <h3 className="mt-3 font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-cream/70">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host CTA */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-sand/70 p-8 sm:flex-row sm:items-center sm:p-12">
          <div>
            <h2 className="font-serif text-3xl font-semibold">Have a home sitting empty?</h2>
            <p className="mt-2 max-w-lg text-muted">
              Turn your spare room, farmhouse or ancestral haveli into a Waypoint stay and earn up to ₹1.5 lakh a month.
            </p>
          </div>
          <span className="rounded-full bg-clay px-6 py-3 font-semibold text-cream">Become a host</span>
        </div>
      </section>
    </>
  );
}

function SectionHeading({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div>
      <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-saffron" : "text-clay"}`}>{eyebrow}</p>
      <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">{title}</h2>
    </div>
  );
}
