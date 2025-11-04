type ProductCategoriesProps = { locale: string };

const categories = {
  ro: [
    {
      name: "Carne",
      link: "/ro/produse/carne",
      icon: "🥩",
      hasSubcategories: true,
    },
    { name: "Cartofi", link: "/ro/produse/cartofi", icon: "🥔" },
    { name: "Lactate", link: "/ro/produse/lactate", icon: "🧀" },
    { name: "Legume", link: "/ro/produse/legume", icon: "🥦" },
    { name: "Conserve", link: "/ro/produse/conserve", icon: "🥫" },
    { name: "Condimente", link: "/ro/produse/condimente", icon: "🧂" },
    { name: "Paste", link: "/ro/produse/paste", icon: "🍝" },
    { name: "Specialități", link: "/ro/produse/specialitati", icon: "🍲" },
  ],
  en: [
    {
      name: "Meat",
      link: "/en/products/meat",
      icon: "🥩",
      hasSubcategories: true,
    },
    { name: "Potatoes", link: "/en/products/potatoes", icon: "🥔" },
    { name: "Dairy", link: "/en/products/dairy", icon: "🧀" },
    { name: "Vegetables", link: "/en/products/vegetables", icon: "🥦" },
    { name: "Canned", link: "/en/products/canned", icon: "🥫" },
    { name: "Spices", link: "/en/products/spices", icon: "🧂" },
    { name: "Pasta", link: "/en/products/pasta", icon: "🍝" },
    { name: "Specialties", link: "/en/products/specialties", icon: "🍲" },
  ],
};

export default function ProductCategories({ locale }: ProductCategoriesProps) {
  const cats = locale === "ro" ? categories.ro : categories.en;
  const title = locale === "ro" ? "Categorii de produse" : "Product Categories";
  const subtitle =
    locale === "ro"
      ? "Alege categoria dorită pentru a descoperi gama noastră."
      : "Choose a category to discover our range.";

  return (
    <section className="w-full flex justify-center py-24 px-4">
      <div className="max-w-6xl w-full rounded-3xl backdrop-blur-lg bg-black/40 mx-auto p-10 border border-yellow-500/20 shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-2 text-center drop-shadow-lg">
          {title}
        </h2>
        <p className="text-lg text-gray-200 mb-10 text-center">{subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cats.map((cat) => (
            <a
              key={cat.name}
              href={cat.link}
              className="group bg-black/60 border border-yellow-500/30 rounded-2xl p-8 flex flex-col items-center shadow-xl hover:scale-105 hover:border-yellow-400 hover:bg-black/80 transition-all duration-200 relative overflow-hidden"
              style={{ boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)" }}
            >
              <span className="text-5xl mb-4 drop-shadow group-hover:drop-shadow-[0_0_16px_gold] transition-all duration-200">
                {cat.icon}
              </span>
              <span className="text-xl font-semibold text-yellow-400 group-hover:text-yellow-300 mb-2 transition-colors">
                {cat.name}
              </span>
              <span className="text-gray-400 text-sm">
                {locale === "ro" ? "Vezi produsele" : "See products"}
              </span>
              {/* Glow effect */}
              <span
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-300"
                style={{
                  boxShadow: "0 0 40px 10px gold",
                  zIndex: 0,
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
