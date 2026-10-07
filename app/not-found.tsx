import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-5xl">🗺️</p>
      <h1 className="mt-4 font-serif text-3xl font-semibold">Lost your way?</h1>
      <p className="mt-2 text-muted">We couldn&apos;t find that page or stay.</p>
      <Link href="/" className="mt-6 inline-block rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-cream">
        Back to home
      </Link>
    </div>
  );
}
