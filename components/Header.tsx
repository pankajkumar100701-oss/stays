"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useWishlist } from "@/lib/wishlist";

export default function Header() {
  const pathname = usePathname();
  const { list } = useWishlist();
  const overHero = pathname === "/";

  return (
    <header
      className={
        overHero
          ? "absolute inset-x-0 top-0 z-30"
          : "sticky top-0 z-30 border-b border-line bg-cream/90 backdrop-blur"
      }
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo light={overHero} />
        <nav className={`flex items-center gap-1 text-sm font-medium sm:gap-2 ${overHero ? "text-cream" : "text-ink"}`}>
          <Link href="/stays" className="rounded-full px-3 py-2 hover:bg-black/10">
            Explore stays
          </Link>
          <Link href="/wishlist" className="relative flex items-center gap-1.5 rounded-full px-3 py-2 hover:bg-black/10">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21s-7.5-4.6-9.5-9.2C1.2 8.6 3.3 5 6.8 5c2 0 3.4 1.1 4.2 2.3h2C13.8 6.1 15.2 5 17.2 5c3.5 0 5.6 3.6 4.3 6.8C19.5 16.4 12 21 12 21Z" />
            </svg>
            <span className="hidden sm:inline">Wishlist</span>
            {list.length > 0 && (
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-clay px-1 text-[11px] font-semibold text-cream">
                {list.length}
              </span>
            )}
          </Link>
          <span className="ml-1 hidden rounded-full border border-current/30 px-4 py-2 sm:inline">
            Become a host
          </span>
        </nav>
      </div>
    </header>
  );
}
