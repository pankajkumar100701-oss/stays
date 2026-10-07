"use client";

import { useWishlist } from "@/lib/wishlist";

export default function WishlistButton({ slug, className = "" }: { slug: string; className?: string }) {
  const { has, toggle } = useWishlist();
  const saved = has(slug);

  return (
    <button
      type="button"
      aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
      aria-pressed={saved}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(slug);
      }}
      className={`grid h-9 w-9 place-items-center rounded-full bg-white/90 shadow-sm transition hover:scale-110 active:scale-95 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill={saved ? "#c2502e" : "none"} stroke={saved ? "#c2502e" : "#2b1d14"} strokeWidth="2">
        <path d="M12 21s-7.5-4.6-9.5-9.2C1.2 8.6 3.3 5 6.8 5c2 0 3.4 1.1 4.2 2.3h2C13.8 6.1 15.2 5 17.2 5c3.5 0 5.6 3.6 4.3 6.8C19.5 16.4 12 21 12 21Z" />
      </svg>
    </button>
  );
}
