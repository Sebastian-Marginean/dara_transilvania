"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const meatSubcategories = {
  ro: [
    {
      name: "Carne de Vită",
      link: "/ro/produse/Carne/vita",
      image: "/images/imagine-Dara.png",
      description: "Bucăți premium de vită pentru cele mai rafinate preparate",
    },
    {
      name: "Carne de Porc",
      link: "/ro/produse/Carne/porc",
      image: "/images/imagine-Dara.png",
      description: "Carne de porc proaspătă, ideală pentru diverse rețete",
    },
    {
      name: "Carne de Pui",
      link: "/ro/produse/Carne/pui",
      image: "/images/imagine-Dara.png",
      description: "Carne de pui fragedă și sănătoasă",
    },
    {
      name: "Pește și Fructe de Mare",
      link: "/ro/produse/Carne/peste",
      image: "/images/imagine-Dara.png",
      description: "Pește proaspăt și fructe de mare de calitate",
    },
    {
      name: "Carne de Rață",
      link: "/ro/produse/Carne/rata",
      image: "/images/imagine-Dara.png",
      description: "Carne de rață pentru preparate speciale",
    },
  ],
  en: [
    {
      name: "Beef",
      link: "/en/produse/Carne/vita",
      image: "/images/imagine-Dara.png",
      description: "Premium beef cuts for the finest dishes",
    },
    {
      name: "Pork",
      link: "/en/produse/Carne/porc",
      image: "/images/imagine-Dara.png",
      description: "Fresh pork, ideal for various recipes",
    },
    {
      name: "Chicken",
      link: "/en/produse/Carne/pui",
      image: "/images/imagine-Dara.png",
      description: "Tender and healthy chicken meat",
    },
    {
      name: "Fish & Seafood",
      link: "/en/produse/Carne/peste",
      image: "/images/imagine-Dara.png",
      description: "Fresh fish and quality seafood",
    },
    {
      name: "Duck",
      link: "/en/produse/Carne/rata",
      image: "/images/imagine-Dara.png",
      description: "Duck meat for special preparations",
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
      className="min-h-screen pb-16 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/bg-marble.jpg')" }}
    >
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-6">
        <div className="mt-16 sm:mt-24" />
        <div className="backdrop-blur-md bg-black/60 border border-yellow-500/20 rounded-3xl shadow-2xl p-8 sm:p-12">
          <div className="flex items-center justify-between mb-8">
            <Link
              href={`/${locale}/produse`}
              className="text-yellow-400 font-semibold hover:underline"
            >
              ← {locale === "ro" ? "Înapoi la produse" : "Back to products"}
            </Link>
          </div>

          <div className="text-center mb-10">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-yellow-400 drop-shadow">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mt-2">{subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {subcats.map((subcat) => (
              <Link key={subcat.name} href={subcat.link} className="w-full">
                <div className="flex flex-col items-center bg-black/30 border border-yellow-500/10 rounded-3xl p-6 shadow-xl hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-200 cursor-pointer h-72">
                  <img
                    src={subcat.image}
                    alt={subcat.name}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <span className="text-yellow-300 font-bold text-center text-lg mb-2">
                    {subcat.name}
                  </span>
                  <p className="text-gray-300 text-sm text-center leading-relaxed">
                    {subcat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
