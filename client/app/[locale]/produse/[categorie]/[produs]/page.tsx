"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../../../../../supabaseClient";

export default function ProductPage() {
  const params = useParams();
  const categorie =
    typeof params.categorie === "string" ? params.categorie : "";
  const produs = typeof params.produs === "string" ? params.produs : "";
  const locale = typeof params.locale === "string" ? params.locale : "ro";
  const [product, setProduct] = useState<any>(null);
  const [similar, setSimilar] = useState<any[]>([]);
  const [quantity, setQuantity] = useState<number>(100);

  useEffect(() => {
    const fetchProductData = async () => {
      // Fetch product details by name
      const { data: productData, error: productError } = await supabase
        .from("product")
        .select("*")
        .eq("name", produs)
        .single();
      if (productError) {
        setProduct({ error: true });
      } else {
        setProduct(productData);
      }

      // Fetch similar products by category, excluding current product
      const { data: similarData, error: similarError } = await supabase
        .from("product")
        .select("*")
        .eq("category", categorie);
      if (similarError) {
        setSimilar([]);
      } else {
        setSimilar((similarData || []).filter((p: any) => p.name !== produs));
      }
    };
    fetchProductData();
  }, [produs, categorie]);

  if (!product || product.error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <span>Produsul nu a fost găsit.</span>
      </div>
    );
  }

  console.log("Produs din URL:", produs);

  return (
    <div
      className="min-h-screen pb-16 bg-cover bg-center flex flex-col items-center"
      style={{ backgroundImage: "url('/images/bg-marble.jpg')" }}
    >
      <div className="w-full max-w-5xl mx-auto px-2 sm:px-6">
        <div className="mt-16 sm:mt-24" />
        <div className="backdrop-blur-md bg-black/70 border border-yellow-500/20 rounded-3xl shadow-2xl p-8 sm:p-12 flex flex-col">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-8">
            <img
              src="/images/dara-logo.png"
              alt="Produs Dara"
              className="w-full md:w-[400px] h-[400px] object-cover rounded-2xl shadow-lg"
            />
            <div className="flex-1">
              <span className="text-gray-300 font-semibold mb-2 block text-lg">
                Face parte din categoria:{" "}
                <span className="text-yellow-400">{product.category}</span>
              </span>
              <h1 className="font-serif text-4xl font-bold text-yellow-400 drop-shadow mb-2">
                {product.name}
              </h1>

              <div className="bg-black/20 border border-yellow-500/30 rounded-lg p-4 mb-4">
                <span className="font-bold text-red-400">
                  ⚠ Greutatea comenzii poate varia, ceea ce poate influența și
                  prețul final. Diferența de preț va fi comunicată prin e-mail,
                  iar eventualele costuri suplimentare vor fi facturate și
                  trimise prin e-mail.
                </span>
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-6 justify-center">
                  <div className="flex flex-col items-center bg-black/40 rounded-xl p-6 border border-yellow-500/20 shadow-lg">
                    <label className="text-yellow-300 font-semibold mb-2 text-lg">
                      Cantitate dorită
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-lg hover:bg-yellow-500 transition"
                        onClick={() =>
                          setQuantity(Math.max(100, quantity - 50))
                        }
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min={100}
                        step={50}
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="rounded-lg px-4 py-2 bg-black/60 border border-yellow-500/30 text-yellow-200 text-center w-24 text-lg font-bold"
                      />
                      <button
                        type="button"
                        className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-lg hover:bg-yellow-500 transition"
                        onClick={() => setQuantity(quantity + 50)}
                      >
                        +
                      </button>
                    </div>
                    <span className="text-gray-400 mt-2 text-sm">
                      Minim 100g
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black/30 rounded-xl p-4 mt-2 border border-yellow-500/10">
            <h2 className="text-yellow-400 font-bold text-lg mb-2">
              Descriere produs
            </h2>
            <p className="text-gray-200 text-base leading-relaxed">
              {product.description ||
                "Produs de calitate Dara Transilvania, ideal pentru preparate diverse."}
            </p>
          </div>
          <div className="flex items-center justify-between mt-8">
            <Link
              href={`/${locale}/produse/${categorie}`}
              className="text-yellow-400 font-semibold hover:underline"
            >
              ← Înapoi la categorie
            </Link>
          </div>
        </div>
        {/* Produse similare */}
        <div className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-yellow-400 mb-6">
            Produse similare
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {similar.map((prod, index) => (
              <div
                key={prod.name}
                className="group block h-full cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => {
                  // Poți adăuga aici o funcție pentru a afișa mai multe detalii
                  console.log("Clicked on product:", prod.name);
                }}
              >
                <div className="bg-black/40 rounded-xl p-6 border border-yellow-500/10 shadow hover:shadow-yellow-500/20 transition-shadow duration-200 flex flex-col items-center">
                  <img
                    src="/images/imagine-Dara.png"
                    alt="Produs similar"
                    className="w-24 h-24 object-cover rounded-lg mb-3"
                  />
                  <span className="text-yellow-300 font-bold text-center text-lg">
                    {prod.name}
                  </span>
                  <p className="text-gray-200 text-center text-sm mt-1">
                    {prod.description}
                  </p>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="inline-flex items-center text-yellow-400 text-sm font-semibold">
                      <span>
                        {locale === "ro"
                          ? "Click pentru detalii"
                          : "Click for details"}
                      </span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}