import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ProductsPage() {
  const t = useTranslations("ProductsPage");

  // Lista de categorii, poți muta în fișierul JSON pentru a fi tradusă
  const categories = [
    {
      name: t("categories.poultry.title", { default: "Pui" }),
      description: t("categories.poultry.desc", {
        default: "Carne de pui, aripioare, piept, pulpe.",
      }),
    },
    {
      name: t("categories.pork.title", { default: "Porc" }),
      description: t("categories.pork.desc", {
        default: "Carne de porc, cotlet, ceafă, mușchi.",
      }),
    },
    {
      name: t("categories.vegetables.title", { default: "Legume" }),
      description: t("categories.vegetables.desc", {
        default: "Legume congelate, mixuri, mazăre, fasole.",
      }),
    },
    {
      name: t("categories.potatoes.title", { default: "Cartofi" }),
      description: t("categories.potatoes.desc", {
        default: "Cartofi pai, rondele, wedges.",
      }),
    },
    {
      name: t("categories.fish.title", { default: "Pește" }),
      description: t("categories.fish.desc", {
        default: "Pește congelat, file, rondele.",
      }),
    },
    {
      name: t("categories.beef.title", { default: "Vită" }),
      description: t("categories.beef.desc", {
        default: "Carne de vită, antricot, mușchi.",
      }),
    },
  ];

  return (
    <div className="marble-bg min-h-screen pb-16">
      <div className="container mx-auto max-w-6xl px-4 pt-32">
        <div className="mx-auto max-w-5xl bg-dark-overlay backdrop-blur-lg rounded-2xl p-10 border border-gold/20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Link
                href="/"
                className="text-gold font-semibold hover:underline"
              >
                ← Înapoi la Acasă
              </Link>
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="font-serif text-5xl font-bold text-white">
              {t("title", { default: "Produse" })}
            </h1>
            <p className="text-xl text-gray-300 mt-2">
              {t("subtitle", { default: "Gama noastră de produse congelate" })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 mt-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-dark-overlay/70 backdrop-blur-sm rounded-lg p-6 border border-gold/20"
              >
                <h2 className="text-2xl font-bold text-gold mb-2">
                  {category.name}
                </h2>
                <p className="text-gray-200">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
