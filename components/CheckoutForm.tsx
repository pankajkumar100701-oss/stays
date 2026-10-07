"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = { slug: string; checkIn: string; checkOut: string; guests: number; total: number };

const METHODS = [
  { id: "upi", label: "UPI", hint: "GPay, PhonePe, Paytm" },
  { id: "card", label: "Credit / Debit card", hint: "Visa, Mastercard, RuPay" },
  { id: "property", label: "Pay at property", hint: "Pay the host on arrival" },
];

export default function CheckoutForm({ slug, checkIn, checkOut, guests, total }: Props) {
  const router = useRouter();
  const [method, setMethod] = useState("upi");
  const [loading, setLoading] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = String(new FormData(e.currentTarget).get("name") ?? "").trim();
    setLoading(true);
    const id = "WPT-" + Math.floor(100000 + Math.random() * 900000);
    const p = new URLSearchParams({ id, slug, checkIn, checkOut, guests: String(guests), name, total: String(total) });
    setTimeout(() => router.push(`/booking/confirmed?${p}`), 1200);
  }

  const input =
    "mt-1 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition focus:border-ink";

  return (
    <form onSubmit={submit} className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold">Guest details</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium sm:col-span-2">
            Full name
            <input name="name" required placeholder="As per your ID" className={input} />
          </label>
          <label className="text-sm font-medium">
            Email
            <input name="email" type="email" required placeholder="you@example.com" className={input} />
          </label>
          <label className="text-sm font-medium">
            Mobile number
            <div className="mt-1 flex rounded-xl border border-line bg-white focus-within:border-ink">
              <span className="border-r border-line px-3 py-3 text-sm text-muted">+91</span>
              <input
                name="phone"
                type="tel"
                required
                pattern="[0-9]{10}"
                title="10-digit mobile number"
                placeholder="98765 43210"
                className="w-full bg-transparent px-3 py-3 text-sm outline-none"
              />
            </div>
          </label>
          <label className="text-sm font-medium sm:col-span-2">
            Message for the host <span className="font-normal text-muted">(optional)</span>
            <textarea name="note" rows={3} placeholder="Arrival time, special occasion, dietary needs…" className={input} />
          </label>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Payment method</h2>
        <div className="mt-4 space-y-3">
          {METHODS.map((m) => (
            <label
              key={m.id}
              className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
                method === m.id ? "border-ink bg-white" : "border-line hover:border-ink/50"
              }`}
            >
              <input
                type="radio"
                name="method"
                value={m.id}
                checked={method === m.id}
                onChange={() => setMethod(m.id)}
                className="accent-clay"
              />
              <span>
                <span className="block text-sm font-semibold">{m.label}</span>
                <span className="text-xs text-muted">{m.hint}</span>
              </span>
            </label>
          ))}
        </div>
        <p className="mt-3 rounded-xl bg-saffron/15 px-4 py-3 text-xs text-ink/80">
          Demo mode: no payment will actually be charged.
        </p>
      </section>

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-clay py-4 font-semibold text-cream transition hover:bg-clay-dark disabled:opacity-80"
      >
        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-cream border-t-transparent" />
            Confirming your stay…
          </>
        ) : method === "property" ? (
          "Confirm booking"
        ) : (
          "Confirm & pay"
        )}
      </button>
    </form>
  );
}
