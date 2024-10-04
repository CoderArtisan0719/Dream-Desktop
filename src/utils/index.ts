export function formatAmount(
  amount: number | string,
  options?: Intl.NumberFormatOptions,
  currency: "usd" = "usd",
) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation: "compact",
    compactDisplay: "short",
    ...options,
  }).format(typeof amount === "number" ? amount : Number(amount));
}
