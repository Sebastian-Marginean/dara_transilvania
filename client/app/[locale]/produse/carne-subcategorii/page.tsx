"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const meatSubcategories = {
  ro: [
    {
      name: "Carne de Vită",
      link: "/ro/produse/carne/vita",
      description: "Bucăți premium de vită",
      icon: "🥩",
      color: "from-red-500/20 to-red-700/20",
    },
    {
      name: "Carne de Porc",
      link: "/ro/produse/carne/porc",
      description: "Carne de porc, ideală pentru diverse rețete",
      icon: "🐷",
      color: "from-pink-500/20 to-pink-700/20",
    },
    {
      name: "Carne de Pui",
      link: "/ro/produse/carne/pui",
      description: "Carne de pui",
      icon: "🐔",
      color: "from-orange-500/20 to-orange-700/20",
    },
    {
      name: "Pește și Fructe de Mare",
      link: "/ro/produse/carne/peste",
      description: "Pește și fructe de mare de calitate",
      icon: "🐟",
      color: "from-blue-500/20 to-blue-700/20",
    },
  ],
  en: [
    {
      name: "Beef",
      link: "/en/produse/carne/vita",
      description: "Premium beef",
      icon: "🥩",
      color: "from-red-500/20 to-red-700/20",
    },
    {
      name: "Pork",
      link: "/en/produse/carne/porc",
      description: "Pork meat, ideal for various recipes",
      icon: "🐷",
      color: "from-pink-500/20 to-pink-700/20",
    },
    {
      name: "Chicken",
      link: "/en/produse/carne/pui",
      description: "Chicken meat",
      icon: "🐔",
      color: "from-orange-500/20 to-orange-700/20",
    },
    {
      name: "Fish & Seafood",
      link: "/en/produse/carne/peste",
      description: "Fish and quality seafood",
      icon: "🐟",
      color: "from-blue-500/20 to-blue-700/20",
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
          {/* Header Section */}
          <div className="text-center mb-8">
            {/* Icon mare central - FIX: era comentat */}
            <div className="inline-block mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-2xl transform scale-150"></div>
              </div>
            </div>

            <div className="inline-block">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 drop-shadow-2xl mb-4">
                {title}
              </h1>
              <div className="h-1 w-48 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
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
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

                  {/* Arrow with enhanced animation */}
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
                    {locale === "ro" ? "Înapoi la Produse" : "Back to Products"}
                  </span>
                </div>
              </Link>
            </div>

            {/* Styled Subtitle */}
            <div className="text-center">
              <div className="inline-block relative">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-yellow-400/20 to-yellow-500/10 rounded-2xl blur-xl"></div>

                <div className="relative px-8 py-4 bg-black/30 backdrop-blur-sm border border-yellow-500/30 rounded-2xl shadow-xl">
                  <p className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 drop-shadow-lg leading-relaxed">
                    {subtitle}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-yellow-400/50 rounded-tl-lg"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-yellow-400/50 rounded-tr-lg"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-yellow-400/50 rounded-bl-lg"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-yellow-400/50 rounded-br-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Container cu fundal pentru carduri */}
          <div className="relative">
            {/* Background container pentru carduri */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/20 backdrop-blur-sm rounded-3xl border border-yellow-500/10"></div>

            {/* Decorative background patterns */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 bg-yellow-600 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-yellow-500 rounded-full blur-3xl"></div>
            </div>

            {/* Subcategories Grid */}
            <div className="relative z-10 p-8 lg:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
                {subcats.map((subcat, index) => (
                  <Link
                    key={subcat.name}
                    href={subcat.link}
                    className="group block h-full"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border-2 border-yellow-500/20 rounded-2xl shadow-2xl hover:shadow-yellow-500/40 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 overflow-hidden h-full min-h-[300px]">
                      {/* Color overlay based on meat type */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${subcat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      ></div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                      <div className="relative z-10 p-6 h-full flex flex-col">
                        {/* Icon */}
                        <div className="flex justify-center mb-6 flex-shrink-0">
                          <div className="relative">
                            <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl transform group-hover:scale-125 transition-transform duration-500"></div>
                            <div className="relative w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center text-4xl group-hover:rotate-12 transition-transform duration-500">
                              {subcat.icon}
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col text-center">
                          {/* Title */}
                          <h3 className="text-xl font-bold text-yellow-300 mb-4 group-hover:text-yellow-200 transition-colors duration-300 leading-tight">
                            {subcat.name}
                          </h3>

                          {/* Description */}
                          <div className="flex-1 flex items-center justify-center mb-6">
                            <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300 line-clamp-4">
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
      </div>
    </div>
  );
}
