type AboutSectionProps = { locale: string };

export default function AboutSection({ locale }: AboutSectionProps) {
  const title =
    locale === "ro" ? "Dara Transilvania" : "About Dara Transilvania";
  const text =
    locale === "ro"
      ? [
          "Pasiune pentru gust și calitate",
          "Suntem o companie formată din oameni pasionați de mâncare bună și servicii de cea mai bună calitate din domeniul HoReCa.",
          "Din 2013, ne străduim să vă oferim produse de calitate superioară.",
          "Echipa noastră este formată din profesioniști dedicați, care împărtășesc aceeași pasiune pentru calitatea produselor, cât și a serviciilor de top din industria gastronomică.",
          "La Dara Transilvania ne pasă de gastronomia locală, națională și internațională.",
          "Avem în portofoliu produse premium și soluții creative în gastronomie, cu o paletă largă de materii prime și arome de cel mai înalt nivel.",
          "Suntem o echipă, mereu în căutare de noi moduri pentru a îmbunătăți experiența culinară, cu materii prime și ingrediente autentice, de la producători locali și internaționali selectați cu grijă."
        ].join("\n\n")
      : [
          "Passion for taste and quality",
          "We are a company made up of people passionate about good food and the highest quality services in the HoReCa field.",
          "Since 2013, we have been striving to offer you superior quality products.",
          "Our team consists of dedicated professionals who share the same passion for the quality of products as well as top services in the gastronomic industry.",
          "At Dara Transilvania, we care about local, national, and international gastronomy.",
          "We have a portfolio of premium products and creative solutions in gastronomy, with a wide range of top-quality raw materials and flavors.",
          "We are a team always looking for new ways to improve the culinary experience, with authentic raw materials and ingredients from carefully selected local and international producers."
        ].join("\n\n");

  return (
    <section className="w-full py-12 md:py-24 px-4 mt-[20px] flex justify-center">
      <div className="max-w-6xl w-full rounded-3xl backdrop-blur-lg bg-black/40 mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 p-6 md:p-24 border border-yellow-500/20 shadow-2xl">
        {/* MODIFICĂRI CHEIE: 
            1. p-6 md:p-24 -> Pe mobil padding mic (text lat), pe desktop mare.
            2. gap-10 md:gap-20 -> Spațiu mai mic între logo și text pe mobil.
        */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/dara-logo.png"
            alt="Dara Transilvania Logo"
            className="h-72 sm:h-80 md:h-[28rem] w-auto mb-6 md:mb-0 drop-shadow-lg transition-all duration-300"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gold mb-4 tracking-tight">
            {title}
          </h2>
          {text.split("\n\n").map((p, i) => (
            <p key={i} className="text-lg sm:text-xl md:text-xl text-white/90 leading-relaxed sm:leading-loose md:leading-loose mb-4">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}