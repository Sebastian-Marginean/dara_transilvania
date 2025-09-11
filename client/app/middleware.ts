import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["ro", "en"],
  defaultLocale: "ro",
  localePrefix: "always",
});

export default function middleware(request: NextRequest) {
  // Redirect root (/) to /ro
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/ro", request.url));
  }
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", "/", "/(ro|en)/:path*"],
};
