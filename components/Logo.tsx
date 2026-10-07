import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Waypoint home">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-clay text-cream">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 20h18" />
          <path d="M5 20V10l7-6 7 6v10" />
          <path d="M10 20v-5a2 2 0 0 1 4 0v5" />
        </svg>
      </span>
      <span className={`font-serif text-2xl font-semibold tracking-tight ${light ? "text-cream" : "text-ink"}`}>
        waypoint
      </span>
    </Link>
  );
}
