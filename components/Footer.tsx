import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-sand/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Every journey deserves a peaceful stop. Handpicked homestays, villas, houseboats and havelis
            across India — hosted by people who love their hometowns.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li><Link href="/stays?city=Goa" className="hover:text-ink">Stays in Goa</Link></li>
            <li><Link href="/stays?city=Manali" className="hover:text-ink">Stays in Manali</Link></li>
            <li><Link href="/stays?type=Houseboat" className="hover:text-ink">Houseboats</Link></li>
            <li><Link href="/stays?type=Haveli" className="hover:text-ink">Heritage havelis</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Waypoint</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>About us</li>
            <li>Become a host</li>
            <li>Help centre</li>
            <li>Cancellation options</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-muted">
        © 2026 Waypoint · Demo version — no real bookings or payments are made.
      </div>
    </footer>
  );
}
