export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRomanian = locale === "ro";

  return (
    <main className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl bg-black bg-opacity-50 backdrop-blur-md rounded-lg shadow-2xl p-8 md:p-12 border border-yellow-500/20">
        <header className="text-center mb-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white">
            Dara Transilvania
          </h1>
          <p className="text-xl text-gray-300 mt-2">
            {isRomanian
              ? "Distribuție Produse Alimentare Congelate"
              : "Frozen Food Distribution"}
          </p>
        </header>
        <section className="my-10 text-center">
          <h2 className="font-serif text-3xl font-semibold text-yellow-500 mb-4">
            {isRomanian ? "Despre Noi" : "About Us"}
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            {isRomanian
              ? "Dara Transilvania este lider în distribuția de produse alimentare congelate în România. Oferim o gamă variată de carne, legume și semipreparate pentru sectorul HoReCa."
              : "Dara Transilvania is a leader in frozen food distribution in Romania. We offer a wide range of meat, vegetables and semi-prepared products for the HoReCa sector."}
          </p>
        </section>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <a
            href={`/${locale}/pages/produse`}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors text-center"
          >
            {isRomanian ? "Vezi Produsele" : "View Products"}
          </a>
          <a
            href={`/${locale}/pages/contact`}
            className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold py-3 px-6 rounded-lg transition-colors text-center"
          >
            {isRomanian ? "Contactează-ne" : "Contact Us"}
          </a>
        </div>
      </div>
    </main>
  );
}
