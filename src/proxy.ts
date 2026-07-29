import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ru"];
const defaultLocale = "en";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  if (
    pathname.startsWith("/_next") ||
    pathname.includes(".") ||
    pathname.startsWith("/api")
  ) {
    return;
  }

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon\\.ico|icon\\.svg|me\\.jpg|resume\\.pdf|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};