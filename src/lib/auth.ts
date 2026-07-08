import { getCloudflareContext } from "@opennextjs/cloudflare";

export const AUTH_COOKIE = "sig_auth";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function getSitePassword(): Promise<string | undefined> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    const value = (env as unknown as { SITE_PASSWORD?: string }).SITE_PASSWORD;
    if (value) return value;
  } catch {
    // Not in a Cloudflare context (local `next dev`).
  }
  return process.env.SITE_PASSWORD;
}

/** Constant-time compare to avoid leaking secrets via timing. */
export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function sha256Hex(input: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

/** Opaque cookie token derived from the password — the raw password never
 *  touches the cookie, and only someone who knows it can produce a match. */
export async function authToken(password: string): Promise<string> {
  return sha256Hex(`signalstockholm:v1:${password}`);
}
