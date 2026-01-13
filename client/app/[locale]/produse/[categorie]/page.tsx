"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../../supabaseClient";

// Maparea categoriilor cu iconuri și clase CSS complete
const categoryConfig: Record<
  string,
  {
    icon: string;
    glowClass: string;
    borderClass: string;
    textClass: string;
    bgClass: string;
    decorClass: string;
    bgPatterns: { top: string; bottom: string; center: string };
  }
> = {
  Cartofi: {
    icon: "🥔",
    glowClass: "bg-yellow-500/20",
    borderClass:
      "border-yellow-500/20 hover:border-yellow-500/50 hover:shadow-yellow-500/40",
    textClass: "from-yellow-200 via-yellow-100 to-yellow-200",
    bgClass: "from-yellow-500/10 to-yellow-700/10",
    decorClass: "border-yellow-400/50",
    bgPatterns: {
      top: "bg-yellow-400",
      bottom: "bg-yellow-600",
      center: "bg-yellow-500",
    },
  },
  Lactate: {
    icon: "🧀",
    glowClass: "bg-blue-500/20",
    borderClass:
      "border-blue-500/20 hover:border-blue-500/50 hover:shadow-blue-500/40",
    textClass: "from-blue-200 via-blue-100 to-blue-200",
    bgClass: "from-blue-500/10 to-blue-700/10",
    decorClass: "border-blue-400/50",
    bgPatterns: {
      top: "bg-blue-400",
      bottom: "bg-blue-600",
      center: "bg-blue-500",
    },
  },
  Specialitati: {
    icon: "🍤",
    glowClass: "bg-purple-500/20",
    borderClass:
      "border-purple-500/20 hover:border-purple-500/50 hover:shadow-purple-500/40",
    textClass: "from-purple-200 via-purple-100 to-purple-200",
    bgClass: "from-purple-500/10 to-purple-700/10",
    decorClass: "border-purple-400/50",
    bgPatterns: {
      top: "bg-purple-400",
      bottom: "bg-purple-600",
      center: "bg-purple-500",
    },
  },
  Condimente: {
    icon: "🧂",
    glowClass: "bg-orange-500/20",
    borderClass:
      "border-orange-500/20 hover:border-orange-500/50 hover:shadow-orange-500/40",
    textClass: "from-orange-200 via-orange-100 to-orange-200",
    bgClass: "from-orange-500/10 to-orange-700/10",
    decorClass: "border-orange-400/50",
    bgPatterns: {
      top: "bg-orange-400",
      bottom: "bg-orange-600",
      center: "bg-orange-500",
    },
  },
  Conserve: {
    icon: "🥫",
    glowClass: "bg-green-500/20",
    borderClass:
      "border-green-500/20 hover:border-green-500/50 hover:shadow-green-500/40",
    textClass: "from-green-200 via-green-100 to-green-200",
    bgClass: "from-green-500/10 to-green-700/10",
    decorClass: "border-green-400/50",
    bgPatterns: {
      top: "bg-green-400",
      bottom: "bg-green-600",
      center: "bg-green-500",
    },
  },
  Legume: {
    icon: "🥦",
    glowClass: "bg-emerald-500/20",
    borderClass:
      "border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-emerald-500/40",
    textClass: "from-emerald-200 via-emerald-100 to-emerald-200",
    bgClass: "from-emerald-500/10 to-emerald-700/10",
    decorClass: "border-emerald-400/50",
    bgPatterns: {
      top: "bg-emerald-400",
      bottom: "bg-emerald-600",
      center: "bg-emerald-500",
    },
  },
  Paste: {
    icon: "🍝",
    glowClass: "bg-amber-500/20",
    borderClass:
      "border-amber-500/20 hover:border-amber-500/50 hover:shadow-amber-500/40",
    textClass: "from-amber-200 via-amber-100 to-amber-200",
    bgClass: "from-amber-500/10 to-amber-700/10",
    decorClass: "border-amber-400/50",
    bgPatterns: {
      top: "bg-amber-400",
      bottom: "bg-amber-600",
      center: "bg-amber-500",
    },
  },
  Peste: {
    icon: "🐟",
    glowClass: "bg-cyan-500/20",
    borderClass:
      "border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-cyan-500/40",
    textClass: "from-cyan-200 via-cyan-100 to-cyan-200",
    bgClass: "from-cyan-500/10 to-cyan-700/10",
    decorClass: "border-cyan-400/50",
    bgPatterns: {
      top: "bg-cyan-400",
      bottom: "bg-cyan-600",
      center: "bg-cyan-500",
    },
  },
  "Fructe de mare": {
    icon: "🦐",
    glowClass: "bg-teal-500/20",
    borderClass:
      "border-teal-500/20 hover:border-teal-500/50 hover:shadow-teal-500/40",
    textClass: "from-teal-200 via-teal-100 to-teal-200",
    bgClass: "from-teal-500/10 to-teal-700/10",
    decorClass: "border-teal-400/50",
    bgPatterns: {
      top: "bg-teal-400",
      bottom: "bg-teal-600",
      center: "bg-teal-500",
    },
  },
};

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const categorie =
    typeof params.categorie === "string"
      ? decodeURIComponent(params.categorie)
      : "";
  const locale = typeof params.locale === "string" ? params.locale : "ro";
  const tc = useTranslations("categories");
  const td = useTranslations("categoryDescriptions");
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // DOAR pentru categoria "Carne" redirecționează
  useEffect(() => {
    if (categorie === "Carne") {
      router.push(`/${locale}/produse/carne-subcategorii`);
      return;
    }

    const fetchProducts = async () => {
      try {
        console.log("Fetching products for category:", categorie);

        // Încearcă endpoint-ul principal cu filtru de categorie
        supabase
          .from("Product")
          .select("*")
          .eq("category", categorie)
          .then(console.log);

        const { data, error } = await supabase
          .from("Product")
          .select("*")
          .eq("category", categorie);
        if (error) {
          console.error("Supabase error:", error);
          setProducts([]);
        } else {
          setProducts(data || []);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categorie, locale, router]);

  // Nu renderează nimic dacă este Carne (va fi redirecționat)
  if (categorie === "Carne") {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-marble.jpg')" }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <p className="text-yellow-300">Redirecting...</p>
        </div>
      </div>
    );
  }

  const config = categoryConfig[categorie] || categoryConfig["Cartofi"]; // fallback
  const categoryName =
    tc(categorie) !== `categories.${categorie}` ? tc(categorie) : categorie;

  // Subtitle cu fallback din traduceri
  const subtitle =
    td(categorie) !== `categoryDescriptions.${categorie}`
      ? td(categorie)
      : locale === "ro"
      ? `Descoperă gama noastră selectă de ${categoryName.toLowerCase()}`
      : `Discover our select range of ${categoryName.toLowerCase()}`;

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      
      {/* Stilizare scroll bar pentru modal */}
      <style jsx global>{`
        /* Stilizare scroll bar pentru modal */
        .modal-custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }

        .modal-custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.4);
          border-radius: 8px;
          margin: 8px;
        }

        .modal-custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          border-radius: 8px;
          border: 2px solid rgba(0, 0, 0, 0.3);
        }

        .modal-custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #f59e0b, #d97706);
          box-shadow: 0 0 15px rgba(251, 191, 36, 0.6);
        }

        .modal-custom-scrollbar::-webkit-scrollbar-corner {
          background: rgba(0, 0, 0, 0.4);
        }

        /* Pentru Firefox */
        .modal-custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #fbbf24 rgba(0, 0, 0, 0.4);
        }
      `}</style>

      <div
        className="min-h-screen pb-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-marble.jpg')" }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-20 sm:pt-28 pb-12">
            {/* Header Section */}
            <div className="text-center mb-8">
              {/* Icon mare central */}
              <div className="inline-block mb-6">
                <div className="relative">
                  <div
                    className={`absolute inset-0 ${config.glowClass} rounded-full blur-2xl transform scale-150`}
                  ></div>
                  <div className="relative text-8xl">{config.icon}</div>
                </div>
              </div>

              <div className="inline-block">
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 drop-shadow-2xl mb-4">
                  {categoryName}
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
              </div>
            </div>

            {/* Navigation and Subtitle Section */}
            <div className="mb-16">
              {/* Back Button - Left aligned */}
              <div className="flex justify-start mb-8">
                <Link
                  href={`/${locale}/produse`}
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
                      {locale === "ro"
                        ? "Înapoi la Produse"
                        : "Back to Products"}
                    </span>
                  </div>
                </Link>
              </div>

              {/* Styled Subtitle */}
              <div className="text-center">
                <div className="inline-block relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${config.bgClass} rounded-2xl blur-xl`}
                  ></div>

                  <div
                    className={`relative px-8 py-4 bg-black/30 backdrop-blur-sm border ${
                      config.borderClass.split(" ")[0]
                    } rounded-2xl shadow-xl`}
                  >
                    <p
                      className={`text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${config.textClass} drop-shadow-lg leading-relaxed`}
                    >
                      {subtitle}
                    </p>

                    {/* Decorative elements */}
                    <div
                      className={`absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 ${config.decorClass} rounded-tl-lg`}
                    ></div>
                    <div
                      className={`absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 ${config.decorClass} rounded-tr-lg`}
                    ></div>
                    <div
                      className={`absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 ${config.decorClass} rounded-bl-lg`}
                    ></div>
                    <div
                      className={`absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 ${config.decorClass} rounded-br-lg`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Container cu fundal pentru produse */}
            <div className="relative">
              {/* Background container */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/20 backdrop-blur-sm rounded-3xl border border-yellow-500/10"></div>

              {/* Decorative background patterns */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className={`absolute top-4 left-4 w-32 h-32 ${config.bgPatterns.top} rounded-full blur-3xl`}
                ></div>
                <div
                  className={`absolute bottom-4 right-4 w-24 h-24 ${config.bgPatterns.bottom} rounded-full blur-2xl`}
                ></div>
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 ${config.bgPatterns.center} rounded-full blur-3xl`}
                ></div>
              </div>

              {/* Products Grid */}
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
                    <div className="text-6xl mb-4">{config.icon}</div>
                    <h3 className="text-2xl font-bold text-yellow-300 mb-4">
                      {locale === "ro"
                        ? "Nu există produse disponibile"
                        : "No products available"}
                    </h3>
                    <p className="text-gray-300">
                      {locale === "ro"
                        ? `Produsele din categoria ${categoryName} vor fi adăugate în curând.`
                        : `Products from ${categoryName} category will be added soon.`}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {products.map((product, index) => (
                      <div
                        key={product.id}
                        onClick={() => handleProductClick(product)}
                        className="group block h-full cursor-pointer"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div
                          className={`relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border-2 ${config.borderClass} rounded-2xl shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 overflow-hidden h-full min-h-[320px]`}
                        >
                          {/* Color overlay */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${config.bgClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                          ></div>

                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                          <div className="relative z-10 p-6 h-full flex flex-col">
                            {/* Product Image */}
                            <div className="relative mb-4 overflow-hidden rounded-xl flex-shrink-0">
                              {product.image ? (
                                <img
                                  src={`/images/produse/${product.image}`}
                                  alt={product.name}
                                  className="w-full h-40 object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                  loading="lazy"
                                />
                              ) : (
                                <div
                                  className={`w-full h-40 bg-gradient-to-br ${config.bgClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-700`}
                                >
                                  <div className="text-4xl opacity-30">
                                    {config.icon}
                                  </div>
                                </div>
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                            </div>

                            {/* Product Info */}
                            <div className="flex-1 flex flex-col text-center">
                              <h3 className="text-lg font-bold text-yellow-300 mb-3 group-hover:text-yellow-200 transition-colors duration-300 leading-tight">
                                {locale === "ro" ? product.name : product.name_en || product.name}
                              </h3>

                              {(locale === "ro" ? product.description : product.description_en || product.description) && (
                                <div className="flex-1 flex items-center justify-center mb-4">
                                  <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
                                    {locale === "ro" ? product.description : product.description_en || product.description}
                                  </p>
                                </div>
                              )}

                              <div className="mt-auto">
                                <div className="flex items-center justify-between mb-2">
                                  {product.inStock !== false && (
                                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                                      {locale === "ro" ? "În stoc" : "In Stock"}
                                    </span>
                                  )}
                                </div>

                                {/* Call to action */}
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

                          {/* Border glow effect */}
                          <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-yellow-500/30 transition-all duration-500"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Product Detail Modal cu scroll bar stilizat */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border-2 border-yellow-500/30 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
              {/* Close button */}
              <button
                onClick={closeProductModal}
                className="absolute top-4 right-4 z-10 p-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 rounded-full text-red-300 hover:text-red-200 transition-all duration-300 group"
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

              {/* Scrollable content cu scroll bar stilizat */}
              <div className="modal-custom-scrollbar overflow-y-auto max-h-[90vh] p-8">
                {/* Product Image */}
                <div className="text-center mb-6">
                  {selectedProduct.image ? (
                    <img
                      src={`/images/produse/${selectedProduct.image}`}
                      alt={selectedProduct.name}
                      className="w-32 h-32 mx-auto object-cover object-center rounded-2xl"
                    />
                  ) : (
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-900/20 to-yellow-700/20 rounded-2xl flex items-center justify-center">
                      <div className="text-6xl opacity-60">{config.icon}</div>
                    </div>
                  )}
                </div>

                {/* Product Details */}
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
                      <span className="text-gray-300">{categorie}</span>
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
    </>
  );
}
