"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PorkProductsPage() {
  const params = useParams();
  const locale = typeof params.locale === "string" ? params.locale : "ro";
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/products?category=Porc`)
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const title = locale === "ro" ? "Carne de Porc" : "Pork";
  const subtitle =
    locale === "ro"
      ? "Produse de calitate superioară din carne de porc."
      : "Premium quality pork products.";

  return (
    <div
      className="min-h-screen pb-16 bg-cover bg-center flex flex-col items-center"
      style={{ backgroundImage: "url('/images/bg-marble.jpg')" }}
    >
      <div className="w-full max-w-5xl mx-auto px-2 sm:px-6">
        <div className="mt-16 sm:mt-24" />
        <div className="backdrop-blur-md bg-black/70 border border-yellow-500/20 rounded-3xl shadow-2xl p-8 sm:p-12">
          <div className="flex items-center justify-between mb-8">
            <Link
              href={`/${locale}/produse/carne`}
              className="text-yellow-400 font-semibold hover:underline"
            >
              ← {locale === "ro" ? "Înapoi la carne" : "Back to meat"}
            </Link>
          </div>

          <h1 className="font-serif text-4xl font-bold text-yellow-400 drop-shadow mb-4 text-center">
            {title}
          </h1>
          <p className="text-gray-200 text-lg mb-8 text-center">{subtitle}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.name}
                href={`/${locale}/produse/carne/porc/${encodeURIComponent(
                  product.name
                )}`}
                className="bg-black/40 border border-yellow-500/20 rounded-xl p-6 hover:scale-105 hover:border-yellow-400 hover:bg-black/60 transition-all duration-200 shadow-lg"
              >
                <img
                  src="/images/imagine-Dara.png"
                  alt={product.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold text-yellow-300 mb-4">
                  {product.name}
                </h3>
                <span className="text-yellow-400 font-bold text-lg">
                  {product.price} RON / 100g
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
