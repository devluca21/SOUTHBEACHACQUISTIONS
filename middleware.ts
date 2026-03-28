import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BYPASS_COOKIE = "sba_coming_soon_bypass";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  const secret = process.env.COMING_SOON_BYPASS_SECRET ?? "";
  const preview = url.searchParams.get("sba_preview");

  if (preview && secret && preview === secret) {
    url.searchParams.delete("sba_preview");
    const res = NextResponse.redirect(url);
    res.cookies.set(BYPASS_COOKIE, "1", {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 14,
    });
    return res;
  }

  if (process.env.COMING_SOON !== "true") {
    return NextResponse.next();
  }

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.[a-zA-Z0-9][a-zA-Z0-9]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (pathname === "/coming-soon") {
    return NextResponse.next();
  }

  if (request.cookies.get(BYPASS_COOKIE)?.value === "1") {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL("/coming-soon", request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except Next internals (already skipped in code for _next).
     * Matcher limits middleware work.
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
