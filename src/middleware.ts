import { NextResponse, type NextRequest } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

const REALM = 'Basic realm="Signalstockholm", charset="UTF-8"';

async function sitePassword(): Promise<string | undefined> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    const value = (env as unknown as { SITE_PASSWORD?: string }).SITE_PASSWORD;
    if (value) return value;
  } catch {
    // Not in a Cloudflare context (local `next dev`).
  }
  return process.env.SITE_PASSWORD;
}

/** Constant-time string compare to avoid leaking the password via timing. */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function middleware(req: NextRequest) {
  const expected = await sitePassword();

  // Fail closed: without a configured password, grant no access.
  if (!expected) {
    return new NextResponse("Site password is not configured.", { status: 503 });
  }

  const header = req.headers.get("authorization");
  if (header?.startsWith("Basic ")) {
    try {
      const decoded = atob(header.slice(6));
      const password = decoded.slice(decoded.indexOf(":") + 1);
      if (safeEqual(password, expected)) return NextResponse.next();
    } catch {
      // Malformed header — fall through to challenge.
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": REALM },
  });
}

// Guard everything except Next's static assets and the favicon.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
