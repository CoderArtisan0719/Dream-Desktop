export function getApiBaseUrl() {
  if (typeof window !== "undefined") {
    // console.log("apiBaseUrl: client-side", window.location.origin);

    // Client-side
    return window.location.origin;
  }
  // Server-side
  if (process.env.VERCEL_URL) {
    // console.log({ VERCEL_URL: process.env.VERCEL_URL });
    // Vercel deployment
    return `https://${process.env.VERCEL_URL}`;
  }
  // Local development
  return "http://localhost:3000";
}
