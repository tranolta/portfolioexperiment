import { NextResponse } from "next/server";
import { AUTH_COOKIE, COOKIE_MAX_AGE, authToken, getSitePasswords, safeEqual } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const passwords = await getSitePasswords();
  if (passwords.length === 0) {
    return NextResponse.json({ error: "Site password is not configured." }, { status: 503 });
  }

  let password = "";
  try {
    const body = (await req.json()) as { password?: unknown };
    password = typeof body.password === "string" ? body.password : "";
  } catch {
    // fall through to failure
  }

  const match = passwords.find((p) => safeEqual(password, p));
  if (!match) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(AUTH_COOKIE, await authToken(match), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });
  return res;
}
