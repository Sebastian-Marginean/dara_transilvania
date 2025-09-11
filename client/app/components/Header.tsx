import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header({ locale }: { locale?: string }) {
  const t = useTranslations("Navigation");

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* outer nav is transparent so the marble background shows at the edges */}
      <nav className="w-full">
        <div className="container mx-auto max-w-6xl p-2">
          {/* inner rounded container holds the dark visual for the nav */}
          <div className="bg-dark-overlay backdrop-blur-lg rounded-xl p-4 h-20 grid grid-cols-3 items-center border border-gold/20 shadow-lg">
            <div className="flex items-center">
              <Link
                href="/"
                className="font-serif text-2xl font-bold text-white hover:text-gold transition-colors"
              >
                Dara Transilvania
              </Link>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-dark-overlay/60 px-6 py-2 rounded-full shadow-md flex items-center gap-6 text-white font-semibold">
                <Link
                  href="/"
                  className="text-gold font-semibold hover:underline"
                >
                  {t("home", { default: "Acasă" })}
                </Link>
                <Link
                  href="/produse"
                  className="hover:text-gold transition-colors"
                >
                  {t("products")}
                </Link>
                <Link
                  href="/despre-noi"
                  className="hover:text-gold transition-colors"
                >
                  {t("about")}
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-end">
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
