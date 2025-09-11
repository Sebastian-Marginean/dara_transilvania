import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // Adaugă aici toate limbile pe care le vei folosi
  locales: ["ro", "en"],

  // Limba default dacă nu se poate detecta una
  defaultLocale: "ro",
});

export const config = {
  // Potrivește toate rutele cu excepția celor pentru fișiere statice
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
