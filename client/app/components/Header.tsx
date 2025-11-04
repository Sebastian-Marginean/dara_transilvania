import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header({ locale }: { locale?: string }) {
  const t = useTranslations("Navigation");

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="w-full">
        <div className="container mx-auto max-w-6xl p-2">
          {/* Header grid: logo | limba */}
          <div
            className="bg-dark-overlay backdrop-blur-lg rounded-xl px-4 py-2 h-auto border border-gold/20 shadow-lg
            grid grid-cols-1 md:grid-cols-3 items-center"
          >
            {/* Logo */}
            <div className="flex justify-center md:justify-start items-center">
              <Link href="/" className="flex items-center gap-3">
                <img
                  src="/images/dara-logo.png"
                  alt="Dara Transilvania Logo"
                  className="h-20 sm:h-28 md:h-32 w-auto transition-transform duration-200 hover:scale-105"
                  style={{ marginTop: "-10px" }}
                />
              </Link>
            </div>
            {/* Navigație centru */}
            <div className="flex justify-center items-center">
              <div className="bg-dark-overlay/80 px-4 py-2 rounded-full shadow flex items-center gap-4 text-white font-semibold text-base md:text-xl">
                <Link
                  href="/"
                  className="text-gold font-semibold hover:underline"
                >
                  {t("home", { default: "Acasă" })}
                </Link>
                <Link
                  href={`/${locale}/produse`}
                  className="hover:text-gold transition-colors"
                >
                  {t("products")}
                </Link>
                <Link
                  href={`/${locale}/despre-noi`}
                  className="hover:text-gold transition-colors"
                >
                  {t("about")}
                </Link>
              </div>
            </div>
            {/* Limba dreapta */}
            <div className="flex justify-center md:justify-end items-center mt-2 md:mt-0">
              <LanguageSwitcher initialLocale={locale} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
// Adaugă cheia "Navigation" în fișierele .json
// "Navigation": { "about": "Despre Noi", "products": "Produse", "contact": "Contact" }
