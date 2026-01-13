"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PorkProductsPage() {
  const params = useParams();
  const locale = typeof params.locale === "string" ? params.locale : "ro";
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // modal state
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await fetch(
          `http://localhost:8000/api/products?category=Porc`
        );

        if (!response.ok) {
          response = await fetch("http://localhost:8000/api/products");
        }

        if (response.ok) {
          const data = await response.json();
          const porkProducts = data.filter(
            (product: any) =>
              product.category === "Porc" ||
              product.subcategory === "Porc" ||
              product.name.toLowerCase().includes("porc") ||
              product.name.toLowerCase().includes("pork") ||
              product.name.toLowerCase().includes("șuncă") ||
              product.name.toLowerCase().includes("cârnați")
          );
          setProducts(porkProducts);
        } else {
          setProducts([]);
        }
      } catch (error) {
        setProducts([
          {
            id: 1,
            name: "Mușchi de porc",
            price: "32.50",
            description:
              "Mușchi de porc tender și savuros, perfect pentru friptură",
            inStock: true,
          },
          {
            id: 2,
            name: "Cotlet de porc",
            price: "28.00",
            description: "Cotlet de porc cu os, ideal pentru grătar",
            inStock: true,
          },
          {
            id: 3,
            name: "Pulpă de porc",
            price: "24.75",
            description: "Pulpă de porc pentru preparate tradiționale",
            inStock: true,
          },
          {
            id: 4,
            name: "Șuncă de porc",
            price: "36.00",
            description: "Șuncă de porc afumată tradițional",
            inStock: true,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const title = locale === "ro" ? "Carne de Porc" : "Pork";
  const subtitle =
    locale === "ro"
      ? "Descoperă gama noastră selectă de carne de porc de calitate"
      : "Discover our select range of quality pork products";

  // modal handlers
  const openProductModal = (product: any) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden";
  };
  const closeProductModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProductModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      className="min-h-screen pb-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg-marble.jpg')" }}
    >
      {/* scrollbar styles for modal */}
      <style jsx global>{`
        .modal-custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .modal-custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.35);
          border-radius: 8px;
          margin: 6px;
        }
        .modal-custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          border-radius: 8px;
          border: 2px solid rgba(0, 0, 0, 0.25);
        }
        .modal-custom-scrollbar::-webkit-scrollbar-thumb:hover {
          box-shadow: 0 0 12px rgba(251, 191, 36, 0.45);
        }
        .modal-custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #fbbf24 rgba(0, 0, 0, 0.35);
        }
      `}</style>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 sm:pt-28 pb-12">
          <div className="text-center mb-8">
            <div className="inline-block mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-2xl transform scale-150"></div>
                <div className="relative text-8xl">🐷</div>
              </div>
            </div>

            <div className="inline-block">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 drop-shadow-2xl mb-4">
                {title}
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex justify-start mb-8">
              <Link
                href={`/${locale}/produse/carne-subcategorii`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-black/60 to-gray-900/60 backdrop-blur-lg border-2 border-yellow-500/40 rounded-2xl text-yellow-200 font-bold text-lg hover:from-black/80 hover:to-gray-900/80 hover:border-yellow-400/60 hover:text-yellow-100 transition-all duration-400 group shadow-2xl hover:shadow-yellow-500/30 transform hover:scale-105"
              >
                <div className="relative flex items-center">
                  <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                  <div className="relative mr-4 p-2 bg-yellow-500/20 rounded-full group-hover:bg-yellow-400/30 transition-all duration-300">
                    <svg
                      className="w-6 h-6 transform group-hover:-translate-x-2 group-hover:scale-110 transition-all duration-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </div>
                  <span className="relative font-bold tracking-wide">
                    {locale === "ro" ? "Înapoi la Carne" : "Back to Meat"}
                  </span>
                </div>
              </Link>
            </div>

            <div className="text-center">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-pink-400/20 to-pink-500/10 rounded-2xl blur-xl"></div>
                <div className="relative px-8 py-4 bg-black/30 backdrop-blur-sm border border-pink-500/30 rounded-2xl shadow-xl">
                  <p className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200 drop-shadow-lg leading-relaxed">
                    {subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/20 backdrop-blur-sm rounded-3xl border border-pink-500/10"></div>
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-32 h-32 bg-pink-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 bg-pink-600 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 p-8 lg:p-12">
              {loading ? (
                <div className="text-center py-16">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mb-4"></div>
                  <p className="text-xl text-gray-200">
                    {locale === "ro"
                      ? "Se încarcă produsele..."
                      : "Loading products..."}
                  </p>
                </div>
              ) : products.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🐷</div>
                  <h3 className="text-2xl font-bold text-yellow-300 mb-4">
                    {locale === "ro"
                      ? "Nu există produse disponibile"
                      : "No products available"}
                  </h3>
                  <p className="text-gray-300">
                    {locale === "ro"
                      ? "Produsele de porc vor fi adăugate în curând."
                      : "Pork products will be added soon."}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                  {products.map((product, index) => (
                    <button
                      key={product.id}
                      onClick={() => openProductModal(product)}
                      className="group block h-full text-left focus:outline-none"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border-2 border-pink-500/20 rounded-2xl shadow-2xl hover:shadow-pink-500/40 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 overflow-hidden h-full min-h-[350px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-pink-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                        <div className="relative z-10 p-6 h-full flex flex-col">
                          <div className="relative mb-4 overflow-hidden rounded-xl flex-shrink-0">
                            {product.image ? (
                              <img
                                src={`/images/produse/${product.image}`}
                                alt={product.name}
                                className="w-full h-40 object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-40 bg-gradient-to-br from-pink-900/20 to-pink-700/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                <div className="text-5xl opacity-40">🐷</div>
                              </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                          </div>

                          <div className="flex-1 flex flex-col text-center">
                            <h3 className="text-lg font-bold text-yellow-300 mb-3 group-hover:text-yellow-200 transition-colors duration-300 leading-tight">
                              {locale === "ro" ? product.name : product.name_en || product.name}
                            </h3>

                            {(locale === "ro" ? product.description : product.description_en || product.description) && (
                              <div className="flex-1 flex items-center justify-center mb-4">
                                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 line-clamp-3 leading-relaxed">
                                  {locale === "ro" ? product.description : product.description_en || product.description}
                                </p>
                              </div>
                            )}

                            <div className="mt-auto">
                              <div className="flex items-center justify-between mb-3">
                                {product.inStock !== false && (
                                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                                    {locale === "ro" ? "În stoc" : "In Stock"}
                                  </span>
                                )}
                              </div>

                              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="inline-flex items-center text-yellow-400 text-sm font-semibold">
                                  <span>
                                    {locale === "ro"
                                      ? "Vezi detalii"
                                      : "View details"}
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
                        </div>

                        <div className="absolute inset-0 rounded-2xl border border-pink-500/0 group-hover:border-pink-500/50 transition-all duration-500"></div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal produs (deschis în loc de navigare) */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeProductModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border-2 border-yellow-500/30 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeProductModal}
              className="absolute top-4 right-4 z-10 p-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 rounded-full text-red-300 hover:text-red-200 transition-all duration-300 group"
              aria-label="Close product details"
            >
              <svg
                className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="modal-custom-scrollbar overflow-y-auto max-h-[90vh] p-8">
              <div className="text-center mb-6">
                {selectedProduct.image ? (
                  <img
                    src={`/images/produse/${selectedProduct.image}`}
                    alt={selectedProduct.name}
                    className="w-32 h-32 mx-auto object-cover object-center rounded-2xl"
                  />
                ) : (
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-900/20 to-yellow-700/20 rounded-2xl flex items-center justify-center">
                    <div className="text-6xl opacity-60">🐷</div>
                  </div>
                )}
              </div>

              <div className="text-center">
                <h2 className="font-serif text-3xl font-bold text-yellow-400 mb-4">
                  {locale === "ro" ? selectedProduct.name : selectedProduct.name_en || selectedProduct.name}
                </h2>

                {(locale === "ro" ? selectedProduct.description : selectedProduct.description_en || selectedProduct.description) && (
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {locale === "ro" ? selectedProduct.description : selectedProduct.description_en || selectedProduct.description}
                  </p>
                )}

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-yellow-500/20">
                    <span className="text-yellow-400 font-semibold">
                      Categorie:
                    </span>
                    <span className="text-gray-300">Porc</span>
                  </div>
                </div>

                {selectedProduct.inStock && (
                  <div className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-400 rounded-full border border-green-500/30 mb-6">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    {locale === "ro" ? "În stoc" : "In Stock"}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
