"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const params = useParams();
  const categorie =
    typeof params.categorie === "string" ? params.categorie : "";
  const locale = typeof params.locale === "string" ? params.locale : "ro";
  const tc = useTranslations("categories");
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      `http://localhost:8000/api/products?category=${encodeURIComponent(
        categorie
      )}`
    )
      .then((res) => res.json())
      .then(setProducts);
  }, [categorie]);

  return (
    <div
      className="min-h-screen pb-16 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/bg-marble.jpg')" }}
    >
      <div className="w-full max-w-4xl mx-auto px-2 sm:px-6">
        <div className="mt-16 sm:mt-24" />
        <div className="backdrop-blur-md bg-black/60 border border-yellow-500/20 rounded-3xl shadow-2xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-yellow-400 drop-shadow">
              {tc(categorie)}
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mt-2">
              Produse din această categorie
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            {products.length === 0 ? (
              <p className="text-gray-400 text-center">
                Nu există produse în această categorie.
              </p>
            ) : (
              products.map((prod) => (
                <Link
                  key={prod.id}
                  href={`/${locale}/produse/${categorie}/${encodeURIComponent(
                    prod.name
                  )}`}
                  className="block"
                >
                  <div className="bg-black/30 rounded-xl p-6 border border-yellow-500/10 shadow hover:shadow-yellow-500/20 transition-shadow duration-200">
                    <h2 className="text-yellow-300 font-bold text-lg mb-2">
                      {prod.name}
                    </h2>
                    <p className="text-gray-200">{prod.description}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
          <div className="flex items-center justify-between">
            <Link
              href={`/${locale}/produse`}
              className="text-yellow-400 font-semibold hover:underline"
            >
              ← Înapoi la categorii
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
