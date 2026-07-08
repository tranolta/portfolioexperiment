import { NextResponse, type NextRequest } from "next/server";
import { AUTH_COOKIE, authToken, getSitePassword, safeEqual } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const expected = await getSitePassword();

  // Fail closed: without a configured password, grant no access.
  if (!expected) {
    return new NextResponse("Site password is not configured.", { status: 503 });
  }

  const token = req.cookies.get(AUTH_COOKIE)?.value;
  if (token && safeEqual(token, await authToken(expected))) {
    return NextResponse.next();
  }

  // Unauthenticated: APIs get 401, everything else is sent to the login page.
  if (req.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.search = "";
  return NextResponse.redirect(url);
}

// Guard everything except static assets and the login surfaces themselves.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|login|api/login).*)"],
};
