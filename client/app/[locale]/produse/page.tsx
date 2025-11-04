"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const categoryIcons: Record<string, string> = {
  Carne: "🥩",
  Condimente: "🧂",
  Conserve: "🥫",
  "Fără regim termic": "🍞",
  Legume: "🥦",
  Paste: "🍝",
  "Produse lactate": "🧀",
  Specialități: "🍤",
};

export default function ProductsPage() {
  const t = useTranslations("ProductsPage");
  const tc = useTranslations("categories");
  const td = useTranslations("categoryDescriptions");
  const [categories, setCategories] = useState<string[]>([]);
  const params = useParams();
  const locale = typeof params.locale === "string" ? params.locale : "ro";

  useEffect(() => {
    fetch("http://localhost:8000/api/categories")
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  return (
    <div
      className="min-h-screen pb-16 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/bg-marble.jpg')" }}
    >
      <div className="w-full max-w-5xl mx-auto px-2 sm:px-6">
        <div className="mt-16 sm:mt-24" />
        <div className="backdrop-blur-md bg-black/60 border border-yellow-500/20 rounded-3xl shadow-2xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-yellow-400 drop-shadow">
              {t("title", { default: "Produse" })}
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mt-2">
              {t("subtitle", { default: "Alege din categoriile noastre" })}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/${locale}/produse/${encodeURIComponent(cat)}`}
                className="w-full h-full"
              >
                <div className="flex flex-col items-center justify-between bg-black/30 border border-yellow-500/10 rounded-3xl p-8 shadow-xl hover:shadow-yellow-500/20 transition-shadow duration-200 cursor-pointer h-64 min-h-[16rem]">
                  <div className="text-6xl mb-4 flex-shrink-0">
                    {categoryIcons[cat] || "📦"}
                  </div>
                  <div className="flex-1 flex flex-col justify-center text-center">
                    <span className="text-yellow-300 font-bold text-xl md:text-2xl mb-2 leading-tight">
                      {tc(cat) !== `categories.${cat}` ? tc(cat) : cat}
                    </span>
                    <p className="text-gray-200 text-base leading-relaxed">
                      {td(cat) !== `categoryDescriptions.${cat}`
                        ? td(cat)
                        : `Produse din categoria ${cat}`}
                    </p>
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
