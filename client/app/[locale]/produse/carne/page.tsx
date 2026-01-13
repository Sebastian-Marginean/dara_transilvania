"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const meatSubcategories = {
  ro: [
    {
      name: "Carne de Vită",
      link: "/ro/produse/Carne/vita",
      image: "/images/imagine-Dara.png",
      description: "Bucăți premium de vită",
      icon: "🥩",
      color: "from-red-500/20 to-red-700/20",
    },
    {
      name: "Carne de Porc",
      link: "/ro/produse/Carne/porc",
      image: "/images/imagine-Dara.png",
      description: "Carne de porc proaspătă, ideală pentru diverse rețete",
      icon: "🐷",
      color: "from-pink-500/20 to-pink-700/20",
    },
    {
      name: "Carne de Pui",
      link: "/ro/produse/Carne/pui",
      image: "/images/imagine-Dara.png",
      description: "Carne de pui fragedă și sănătoasă",
      icon: "🐔",
      color: "from-orange-500/20 to-orange-700/20",
    },
    {
      name: "Pește și Fructe de Mare",
      link: "/ro/produse/Carne/peste",
      image: "/images/imagine-Dara.png",
      description: "Pește proaspăt și fructe de mare de calitate",
      icon: "🐟",
      color: "from-blue-500/20 to-blue-700/20",
    },
    {
      name: "Carne de Rață",
      link: "/ro/produse/Carne/rata",
      image: "/images/imagine-Dara.png",
      description: "Carne de rață pentru preparate speciale",
      icon: "🦆",
      color: "from-purple-500/20 to-purple-700/20",
    },
  ],
  en: [
    {
      name: "Beef",
      link: "/en/produse/Carne/vita",
      image: "/images/imagine-Dara.png",
      description: "Premium beef cuts for the finest dishes",
      icon: "🥩",
      color: "from-red-500/20 to-red-700/20",
    },
    {
      name: "Pork",
      link: "/en/produse/Carne/porc",
      image: "/images/imagine-Dara.png",
      description: "Fresh pork, ideal for various recipes",
      icon: "🐷",
      color: "from-pink-500/20 to-pink-700/20",
    },
    {
      name: "Chicken",
      link: "/en/produse/Carne/pui",
      image: "/images/imagine-Dara.png",
      description: "Tender and healthy chicken meat",
      icon: "🐔",
      color: "from-orange-500/20 to-orange-700/20",
    },
    {
      name: "Fish & Seafood",
      link: "/en/produse/Carne/peste",
      image: "/images/imagine-Dara.png",
      description: "Fish and quality seafood",
      icon: "🐟",
      color: "from-blue-500/20 to-blue-700/20",
    },
    {
      name: "Duck",
      link: "/en/produse/Carne/rata",
      image: "/images/imagine-Dara.png",
      description: "Duck meat for special preparations",
      icon: "🦆",
      color: "from-purple-500/20 to-purple-700/20",
    },
  ],
};

export default function MeatCategoriesPage() {
  const params = useParams();
  const locale = typeof params.locale === "string" ? params.locale : "ro";

  const subcats = locale === "ro" ? meatSubcategories.ro : meatSubcategories.en;
  const title = locale === "ro" ? "Carne" : "Meat";
  const subtitle =
    locale === "ro"
      ? "Alege tipul de carne pentru a vedea produsele disponibile"
      : "Choose the type of meat to see available products";

  return (
    <div
      className="min-h-screen pb-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg-marble.jpg')" }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 sm:pt-28 pb-12">
          {/* Navigation */}
          <div className="mb-8">
            <Link
              href={`/${locale}/produse`}
              className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors duration-300 group"
            >
              <svg
                className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {locale === "ro" ? "Înapoi la produse" : "Back to products"}
            </Link>
          </div>

          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-2xl transform scale-150"></div>
                <div className="relative text-8xl">🥩</div>
              </div>
            </div>

            <div className="inline-block">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 drop-shadow-2xl mb-4">
                {title}
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            </div>

            <p className="text-xl sm:text-2xl text-gray-100 mt-6 font-light max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Subcategories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
            {subcats.map((subcat, index) => (
              <Link
                key={subcat.name}
                href={subcat.link}
                className="group block h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border-2 border-yellow-500/20 rounded-2xl shadow-2xl hover:shadow-yellow-500/40 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 overflow-hidden h-full min-h-[350px]">
                  {/* Color overlay based on meat type */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${subcat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <div className="relative z-10 p-6 h-full flex flex-col">
                    {/* Icon */}
                    <div className="flex justify-center mb-4 flex-shrink-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl transform group-hover:scale-125 transition-transform duration-500"></div>
                        <div className="relative w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform duration-500">
                          {subcat.icon}
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="flex-shrink-0 mb-4">
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={subcat.image}
                          alt={subcat.name}
                          className="w-full h-24 object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col text-center">
                      {/* Title */}
                      <h3 className="text-lg font-bold text-yellow-300 mb-3 group-hover:text-yellow-200 transition-colors duration-300 leading-tight">
                        {subcat.name}
                      </h3>

                      {/* Description */}
                      <div className="flex-1 flex items-center justify-center mb-4">
                        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
                          {subcat.description}
                        </p>
                      </div>

                      {/* Hover indicator */}
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="inline-flex items-center text-yellow-400 text-sm font-semibold">
                          <span>Explorează</span>
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

                  {/* Border glow effect */}
                  <div className="absolute inset-0 rounded-2xl border border-yellow-500/0 group-hover:border-yellow-500/50 transition-all duration-500"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
