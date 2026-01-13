"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const categoryIcons: Record<string, string> = {
  Carne: "🥩",
  "Condiment & FRT": "🧂",
  Conserve: "🥫",
  Cartofi: "🥔",
  Legume: "🥦",
  Paste: "🍝",
  Lactate: "🧀",
  Specialitati: "🍤",
  Peste: "🐟",
  "Fructe de mare": "🦐",
  Sosuri: "🥗",
};

const subcategoryToMainCategory: Record<string, string> = {
  Vita: "Carne",
  Porc: "Carne",
  Pui: "Carne",
  Peste: "Carne",
  Rata: "Carne",
  "Peste si Fructe de Mare": "Carne",
};

export default function ProductsPage() {
  const t = useTranslations("ProductsPage");
  const tc = useTranslations("categories");
  const td = useTranslations("categoryDescriptions");
  const [rawCategories, setRawCategories] = useState<string[]>([]);
  const params = useParams();
  const locale = typeof params.locale === "string" ? params.locale : "ro";

  useEffect(() => {
    fetch("http://localhost:8000/api/categories")
      .then((res) => res.json())
      .then((data) => setRawCategories(Array.isArray(data) ? data : []));
  }, []);

  const processedCategories = rawCategories.reduce(
    (acc: string[], category: string) => {
      if (subcategoryToMainCategory[category]) {
        const mainCategory = subcategoryToMainCategory[category];
        if (!acc.includes(mainCategory)) {
          acc.push(mainCategory);
        }
      } else {
        if (!acc.includes(category)) {
          acc.push(category);
        }
      }
      return acc;
    },
    []
  );

  return (
    <div
      className="min-h-screen pb-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg-marble.jpg')" }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 sm:pt-28 pb-12">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 drop-shadow-2xl mb-4">
                {t("title", { default: "Produse" })}
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl sm:text-2xl text-gray-100 mt-6 font-light">
              {t("subtitle", {
                default: "Alege din categoriile noastre premium",
              })}
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {processedCategories.map((cat, index) => (
              <Link
                key={cat}
                href={
                  cat === "Carne"
                    ? `/${locale}/produse/carne-subcategorii`
                    : `/${locale}/produse/${encodeURIComponent(cat)}`
                }
                className="group block h-full"
              >
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border-2 border-yellow-500/20 rounded-3xl shadow-2xl hover:shadow-yellow-500/40 transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-1 overflow-hidden h-full min-h-[400px]">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full blur-3xl transform -translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-600 rounded-full blur-2xl transform translate-x-12 translate-y-12"></div>
                  </div>

                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Icon - Fixed height section */}
                    <div className="flex justify-center mb-6 flex-shrink-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl transform group-hover:scale-125 transition-transform duration-500"></div>
                        <div className="relative w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center text-5xl group-hover:rotate-6 transition-transform duration-500">
                          {categoryIcons[cat] || "📦"}
                        </div>
                      </div>
                    </div>

                    {/* Content - Flexible middle section */}
                    <div className="flex-1 flex flex-col text-center">
                      {/* Title - Fixed height */}
                      <div className="mb-4 flex-shrink-0">
                        <h3 className="text-2xl lg:text-3xl font-bold text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300 leading-tight">
                          {tc(cat) !== `categories.${cat}` ? tc(cat) : cat}
                        </h3>
                      </div>

                      {/* Description - Fixed height with 2 lines */}
                      <div className="mb-6 flex-1 flex items-center justify-center">
                        <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300 h-12 flex items-center line-clamp-2">
                          {td(cat) !== `categoryDescriptions.${cat}`
                            ? td(cat)
                            : `Produse din categoria ${cat}`}
                        </p>
                      </div>

                      {/* Button - Fixed position at bottom */}
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-full text-yellow-300 font-semibold group-hover:from-yellow-500/20 group-hover:to-yellow-600/20 group-hover:border-yellow-400/50 transition-all duration-300">
                          <span>Vezi produsele</span>
                          <svg
                            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
