import type { Stay } from "@/data/stays";

export const SERVICE_FEE_RATE = 0.08;
export const GST_RATE = 0.12;

export const inr = (n: number) =>
  "₹" + Math.round(n).toLocaleString("en-IN");

export function nightsBetween(checkIn?: string, checkOut?: string) {
  if (!checkIn || !checkOut) return 0;
  const ms = new Date(checkOut).getTime() - new Date(checkIn).getTime();
  const nights = Math.round(ms / 86_400_000);
  return Number.isFinite(nights) && nights > 0 ? nights : 0;
}

export function quote(stay: Stay, nights: number) {
  const base = stay.pricePerNight * nights;
  const cleaning = nights > 0 ? stay.cleaningFee : 0;
  const service = Math.round(base * SERVICE_FEE_RATE);
  const gst = Math.round((base + cleaning) * GST_RATE);
  return { nights, base, cleaning, service, gst, total: base + cleaning + service + gst };
}

export function formatDate(iso?: string) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}
