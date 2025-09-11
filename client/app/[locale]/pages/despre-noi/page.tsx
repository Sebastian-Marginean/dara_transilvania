import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

// Funcția care generează metadate unice pentru SEO, folosind traducerile

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations(locale);

  return {
    title: t("AboutUsPage.title"), // Generează -> "Despre Noi | Dara Transilvania"
    description: t("AboutUsPage.metaDescription"),
  };
}

export default function DespreNoiPage() {
  // Hook-ul care încarcă traducerile pentru pagina curentă
  const t = useTranslations("AboutUsPage");

  return (
    // Am adăugat pt-32 (padding-top) pentru a face loc pentru Header-ul fix
    <main className="min-h-screen p-4 md:p-8 flex flex-col items-center pt-32">
      <div className="w-full max-w-4xl bg-dark-overlay backdrop-blur-md rounded-lg shadow-2xl p-8 md:p-12 border border-gold/20">
        <header className="text-center mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-xl text-gray-300">{t("subtitle")}</p>
        </header>

        <section className="space-y-6 text-gray-200">
          <div className="bg-gold/10 p-6 rounded-lg border border-gold/30">
            <h2 className="font-serif text-2xl font-semibold text-gold mb-3">
              {t("missionTitle")}
            </h2>
            <p className="text-lg leading-relaxed">{t("missionText")}</p>
          </div>

          <div className="bg-gold/10 p-6 rounded-lg border border-gold/30">
            <h2 className="font-serif text-2xl font-semibold text-gold mb-3">
              {t("experienceTitle")}
            </h2>
            <p className="text-lg leading-relaxed">{t("experienceText")}</p>
          </div>

          <div className="bg-gold/10 p-6 rounded-lg border border-gold/30">
            <h2 className="font-serif text-2xl font-semibold text-gold mb-3">
              {t("qualityTitle")}
            </h2>
            <p className="text-lg leading-relaxed">{t("qualityText")}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
