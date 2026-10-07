import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import Filters from "@/components/Filters";
import SearchBar from "@/components/SearchBar";
import StayCard from "@/components/StayCard";
import { stays } from "@/data/stays";

export const metadata: Metadata = { title: "Explore stays · Waypoint" };

type SP = { [key: string]: string | string[] | undefined };

const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";
const many = (v: string | string[] | undefined) => (Array.isArray(v) ? v : v ? [v] : []);

export default async function StaysPage({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams;
  const city = one(sp.city).trim();
  const type = one(sp.type);
  const guests = Number(one(sp.guests)) || 0;
  const maxPrice = Number(one(sp.maxPrice)) || 0;
  const sort = one(sp.sort);
  const amenities = many(sp.amenity);
  const checkIn = one(sp.checkIn);
  const checkOut = one(sp.checkOut);

  let results = stays.filter(
    (s) =>
      (!city ||
        s.city.toLowerCase().includes(city.toLowerCase()) ||
        s.area.toLowerCase().includes(city.toLowerCase()) ||
        s.state.toLowerCase().includes(city.toLowerCase())) &&
      (!type || s.type === type) &&
      (!guests || s.maxGuests >= guests || s.type === "Hostel") &&
      (!maxPrice || s.pricePerNight <= maxPrice) &&
      amenities.every((a) => s.amenities.some((x) => x.toLowerCase().includes(a.toLowerCase())))
  );

  if (sort === "price-asc") results = [...results].sort((a, b) => a.pricePerNight - b.pricePerNight);
  if (sort === "price-desc") results = [...results].sort((a, b) => b.pricePerNight - a.pricePerNight);
  if (sort === "rating") results = [...results].sort((a, b) => b.rating - a.rating);

  const carry = new URLSearchParams();
  if (checkIn) carry.set("checkIn", checkIn);
  if (checkOut) carry.set("checkOut", checkOut);
  if (guests) carry.set("guests", String(guests));
  const query = carry.size ? `?${carry}` : "";

  return (
    <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
      <SearchBar compact initial={{ city, checkIn, checkOut, guests: guests ? String(guests) : undefined }} />

      <div className="mt-10 flex flex-wrap items-baseline justify-between gap-2">
        <h1 className="font-serif text-3xl font-semibold">
          {city ? `Stays in ${city}` : type ? `${type} stays across India` : "All stays across India"}
        </h1>
        <p className="text-sm text-muted">
          {results.length} {results.length === 1 ? "stay" : "stays"} found
        </p>
      </div>

      <div className="mt-6">
        <Suspense>
          <Filters />
        </Suspense>
      </div>

      {results.length > 0 ? (
        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((s) => (
            <StayCard key={s.slug} stay={s} query={query} />
          ))}
        </div>
      ) : (
        <div className="mt-16 rounded-3xl border border-dashed border-line py-20 text-center">
          <p className="text-4xl">🧭</p>
          <h2 className="mt-4 font-serif text-2xl font-semibold">No stays found</h2>
          <p className="mt-2 text-muted">Try another city or remove a few filters.</p>
          <Link href="/stays" className="mt-6 inline-block rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream">
            Clear all filters
          </Link>
        </div>
      )}
    </div>
  );
}
