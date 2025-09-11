export default async function DespreNoiPage({
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
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            {isRomanian ? "Despre Noi" : "About Us"}
          </h1>
          <p className="text-xl text-gray-300">
            {isRomanian
              ? "Povestea Dara Transilvania"
              : "The Dara Transilvania Story"}
          </p>
        </header>

        <section className="space-y-6 text-gray-200">
          <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/30">
            <h2 className="font-serif text-2xl font-semibold text-yellow-500 mb-3">
              {isRomanian ? "Misiunea Noastră" : "Our Mission"}
            </h2>
            <p className="text-lg leading-relaxed">
              {isRomanian
                ? "Dara Transilvania are misiunea de a oferi produse congelate de cea mai înaltă calitate, menținând standardele stricte de siguranță alimentară și asigurând o distribuție eficientă în întreaga țară."
                : "Dara Transilvania's mission is to provide frozen products of the highest quality, maintaining strict food safety standards and ensuring efficient distribution throughout the country."}
            </p>
          </div>

          <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/30">
            <h2 className="font-serif text-2xl font-semibold text-yellow-500 mb-3">
              {isRomanian ? "Experiența Noastră" : "Our Experience"}
            </h2>
            <p className="text-lg leading-relaxed">
              {isRomanian
                ? "Cu peste 15 ani de experiență în industria alimentară, echipa noastră înțelege nevoile specifice ale sectorului HoReCa și oferă soluții personalizate pentru fiecare client."
                : "With over 15 years of experience in the food industry, our team understands the specific needs of the HoReCa sector and offers personalized solutions for each client."}
            </p>
          </div>

          <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/30">
            <h2 className="font-serif text-2xl font-semibold text-yellow-500 mb-3">
              {isRomanian ? "Calitate Garantată" : "Guaranteed Quality"}
            </h2>
            <p className="text-lg leading-relaxed">
              {isRomanian
                ? "Toate produsele noastre sunt atent selecționate și depozitate în condiții optime, folosind tehnologie modernă de refrigerare pentru a păstra prospețimea și valoarea nutritivă."
                : "All our products are carefully selected and stored under optimal conditions, using modern refrigeration technology to preserve freshness and nutritional value."}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
