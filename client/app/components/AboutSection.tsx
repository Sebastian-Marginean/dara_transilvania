type AboutSectionProps = { locale: string };

export default function AboutSection({ locale }: AboutSectionProps) {
  const title =
    locale === "ro" ? "Despre Dara Transilvania" : "About Dara Transilvania";
  const text =
    locale === "ro"
      ? "Dara Transilvania este lider în distribuția de produse alimentare congelate în România. Cu o experiență vastă și o rețea extinsă, oferim clienților noștri produse de cea mai înaltă calitate, selectate cu grijă pentru sectorul HoReCa și retail. Ne mândrim cu profesionalismul, promptitudinea și parteneriatele solide construite de-a lungul timpului."
      : "Dara Transilvania is a leader in the distribution of frozen food products in Romania. With extensive experience and a wide network, we offer our clients the highest quality products, carefully selected for the HoReCa and retail sectors. We pride ourselves on professionalism, promptness, and strong partnerships built over time.";

  return (
    <section className="w-full py-24 px-4 mt-[20px] flex justify-center">
      <div className="max-w-6xl w-full rounded-3xl backdrop-blur-lg bg-black/40 mx-auto flex flex-col md:flex-row items-center gap-20 p-36 border border-yellow-500/20 shadow-2xl">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/imagine-Dara.png"
            alt="Dara Transilvania"
            className="rounded-3xl shadow-2xl max-h-96 object-cover w-full md:w-[420px] border border-yellow-500/30"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-6 drop-shadow-lg">
            {title}
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">{text}</p>
        </div>
      </div>
    </section>
  );
}
