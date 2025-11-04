"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const productDescriptions: Record<string, string> = {
  "Carne vită":
    "Carnea de vită Dara Transilvania este atent selecționată pentru frăgezime și gust autentic. Ideală pentru steak-uri, tocănițe sau grătar.",
  "Carne porc":
    "Carnea de porc proaspătă, perfectă pentru preparate tradiționale românești sau rețete moderne.",
  "Carne pui":
    "Carne de pui crescută natural, potrivită pentru grătar, cuptor sau salate.",
  "Carne rață": "Carne de rață cu gust bogat, ideală pentru preparate gourmet.",
  Pește: "Pește proaspăt, sursă excelentă de proteine și omega-3.",
  Oregano: "Oregano uscat, perfect pentru pizza, paste și sosuri.",
  Usturoi: "Usturoi granulat, aromă intensă pentru orice preparat.",
  "Piper negru":
    "Piper negru măcinat, condiment universal pentru toate tipurile de carne.",
  "Boia dulce": "Boia dulce de calitate, ideală pentru ciorbe și tocănițe.",
  "Măsline negre":
    "Măsline negre la conservă, perfecte pentru salate și aperitive.",
  "Sfeclă roșie": "Sfeclă roșie la conservă, bogată în vitamine.",
  "Castraveți murați": "Castraveți murați crocanți, gust autentic românesc.",
  "Ardei capia copt":
    "Ardei capia copt la conservă, ideal pentru salate și garnituri.",
  "Pesmet galben": "Pesmet galben pentru panare crocantă.",
  "Knorr sos piper verde": "Sos Knorr cu piper verde, pentru fripturi aromate.",
  "Knorr sos lemon butter": "Sos Knorr cu lămâie și unt, perfect pentru pește.",
  "Knorr sos demi glace": "Sos demi glace Knorr, bază pentru sosuri rafinate.",
  "Knorr sos de chili și soia":
    "Sos Knorr chili și soia, pentru preparate asiatice.",
  "Knorr sos brun spaniol": "Sos brun spaniol Knorr, ideal pentru carne.",
  "Knorr pastă de tomate": "Pastă de tomate Knorr, pentru sosuri și ciorbe.",
  "Knorr reducție de oțet balsamic":
    "Reducție de oțet balsamic Knorr, pentru salate și carne.",
  "Knorr delikat de legume": "Delikat de legume Knorr, pentru gust intens.",
  "Grăsime pentru friteuse din plante":
    "Grăsime vegetală pentru friteuse, sănătoasă și eficientă.",
  "Gelatină de porc": "Gelatină de porc pentru preparate tradiționale.",
  "Condimix gustos de legume": "Mix de condimente pentru legume, gust bogat.",
  "Cartofi pentru prăjit clasa AAA":
    "Cartofi speciali pentru prăjit, crocanți și gustoși.",
  "Cartofi pentru prăjit rustic":
    "Cartofi rustic pentru prăjit, textură autentică.",
  "Cartofi pentru prăjit clasa AAAA 10x10":
    "Cartofi tăiați 10x10 pentru prăjit, perfecți pentru fast-food.",
  "Spanac frunze": "Spanac frunze congelat, bogat în fier.",
  "Mazăre boabe": "Mazăre boabe congelată, dulce și crocantă.",
  "Fasole galbenă": "Fasole galbenă congelată, ideală pentru salate.",
  "Conopidă de mărime medie":
    "Conopidă congelată, perfectă pentru gratin sau supă.",
  Broccoli: "Broccoli congelat, sursă de vitamine.",
  "Spaghete Barilla":
    "Spaghete Barilla de calitate superioară, ideale pentru paste italiene.",
  Tagliatelle: "Tagliatelle Barilla, pentru rețete rafinate.",
  "Unt de masă": "Unt de masă proaspăt, perfect pentru mic dejun.",
  "Cașcaval cu lavandă": "Cașcaval aromat cu lavandă, gust unic.",
  "Cașcaval pesto verde": "Cașcaval cu pesto verde, combinație savuroasă.",
  "Cașcaval pesto roșu": "Cașcaval cu pesto roșu, pentru aperitive speciale.",
  "Cașcaval gouda": "Cașcaval Gouda, textură fină și gust delicat.",
  "Cașcaval edamer": "Cașcaval Edamer, ideal pentru sandvișuri.",
  "Cașcaval negru": "Cașcaval negru special, gust intens.",
  "Rulouri de primăvară":
    "Rulouri de primăvară asiatice, crocante și delicioase.",
  "Jalapenos snacks": "Snacks din jalapenos, picante și savuroase.",
  "Specialitate din brânză picantă":
    "Brânză picantă specialitate, pentru iubitorii de gusturi intense.",
};

const productShortDesc: Record<string, string> = {
  "Carne vită": "Bucată fragedă, ideală pentru steak sau tocăniță.",
  "Carne porc": "Perfectă pentru grătar sau preparate tradiționale.",
  "Carne pui": "Potrivită pentru orice tip de gătit, ușor de digerat.",
  "Carne rață": "Gust bogat, potrivită pentru rețete gourmet.",
  Pește: "Sursă excelentă de proteine, ideal pentru grătar sau cuptor.",
  Oregano: "Aromă intensă, perfectă pentru preparate mediteraneene.",
  Usturoi: "Aromă puternică, ideală pentru sosuri și marinate.",
  "Piper negru": "Condiment clasic, pentru un gust picant și aromat.",
  "Boia dulce": "Culoare și aromă pentru preparatele tale.",
  "Măsline negre": "Gust sărat și intens, ideale pentru salate.",
  "Sfeclă roșie": "Gust dulceag, bogată în antioxidanți.",
  "Castraveți murați": "Crocante și acrișoare, perfecte ca aperitiv.",
  "Ardei capia copt": "Dulci și aromate, ideale pentru salate.",
  "Pesmet galben": "Pentru o crustă crocantă și aurie.",
  "Knorr sos piper verde": "Pentru un gust picant și aromat.",
  "Knorr sos lemon butter": "Pentru un gust proaspăt și untos.",
  "Knorr sos demi glace": "Pentru un gust bogat și savuros.",
  "Knorr sos de chili și soia": "Pentru un gust asiatic autentic.",
  "Knorr sos brun spaniol": "Pentru un gust profund și savuros.",
  "Knorr pastă de tomate": "Pentru sosuri și ciorbe delicioase.",
  "Knorr reducție de oțet balsamic":
    "Pentru un gust dulce-acrișor, ideal în salate.",
  "Knorr delikat de legume": "Pentru un gust intens de legume.",
  "Grăsime pentru friteuse din plante": "Pentru prăjire sănătoasă și crocantă.",
  "Gelatină de porc": "Pentru deserturi și preparate tradiționale.",
  "Condimix gustos de legume": "Pentru un gust bogat de legume.",
  "Cartofi pentru prăjit clasa AAA":
    "Pentru cartofi prăjiți aurii și crocanți.",
  "Cartofi pentru prăjit rustic":
    "Pentru un gust autentic și textură crocantă.",
  "Cartofi pentru prăjit clasa AAAA 10x10":
    "Pentru porții perfecte de cartofi prăjiți.",
  "Spanac frunze": "Pentru un plus de vitamine în alimentație.",
  "Mazăre boabe": "Pentru un gust dulce și o textură crocantă.",
  "Fasole galbenă": "Pentru salate colorate și pline de gust.",
  "Conopidă de mărime medie": "Pentru gratinuri și supe cremoase.",
  Broccoli: "Pentru un plus de vitamine și minerale.",
  "Spaghete Barilla": "Pentru paste perfecte, cu o textură al dente.",
  Tagliatelle: "Pentru rețete italiene autentice.",
  "Unt de masă": "Pentru un gust bogat și cremos.",
  "Cașcaval cu lavandă": "Pentru o aromă florală și gust delicat.",
  "Cașcaval pesto verde": "Pentru un gust proaspăt de busuioc.",
  "Cașcaval pesto roșu": "Pentru un gust intens de roșii uscate.",
  "Cașcaval gouda": "Pentru un gust dulceag și o textură cremoasă.",
  "Cașcaval edamer": "Pentru un gust blând și o textură elastică.",
  "Cașcaval negru": "Pentru un gust puternic și o aromă distinctă.",
  "Rulouri de primăvară": "Pentru un aperitiv crocant și plin de umplutură.",
  "Jalapenos snacks": "Pentru o gustare picantă și crocantă.",
  "Specialitate din brânză picantă":
    "Pentru iubitorii de brânză cu un gust intens.",
};

const productCooking: Record<string, string> = {
  "Carne vită":
    "Se poate găti la grătar, sous-vide sau în tocănițe. Specială pentru steak-uri datorită frăgezimii.",
  "Carne porc":
    "Excelentă pentru fripturi, tocănițe sau la cuptor. Gust autentic românesc.",
  "Carne pui":
    "Ideală pentru grătar, cuptor, salate sau supe. Ingredient versatil.",
  "Carne rață":
    "Se gătește la cuptor sau în tigaie, perfectă pentru preparate asiatice.",
  Pește: "Poate fi gătit la grătar, cuptor sau prăjit. Sănătos și gustos.",
  Oregano: "Se adaugă la finalul gătitului pentru a păstra aroma.",
  Usturoi: "Se folosește în sosuri, marinate sau ca garnitură.",
  "Piper negru": "Se adaugă la finalul gătitului pentru un gust picant.",
  "Boia dulce": "Se folosește la condimentarea cărnii sau legumelor.",
  "Măsline negre": "Se adaugă în salate, paste sau ca aperitiv.",
  "Sfeclă roșie": "Se poate consuma ca atare sau în salate.",
  "Castraveți murați": "Se servesc ca aperitiv sau garnitură.",
  "Ardei capia copt": "Se folosește în salate sau ca garnitură.",
  "Pesmet galben": "Se folosește la panarea cărnii sau peștelui.",
  "Knorr sos piper verde": "Se folosește ca glazură pentru carne sau pește.",
  "Knorr sos lemon butter":
    "Se folosește pentru a stropi peștele sau legumele la grătar.",
  "Knorr sos demi glace":
    "Se folosește ca bază pentru sosuri sau pentru a glazura carnea.",
  "Knorr sos de chili și soia":
    "Se folosește pentru a marina carnea sau în sosuri pentru paste.",
  "Knorr sos brun spaniol": "Se folosește pentru a da culoare și gust cărnii.",
  "Knorr pastă de tomate":
    "Se folosește ca bază pentru sosuri sau în tocănițe.",
  "Knorr reducție de oțet balsamic":
    "Se folosește pentru a stropi salatele sau legumele la grătar.",
  "Knorr delikat de legume":
    "Se folosește pentru a intensifica gustul supelor sau tocănițelor.",
  "Grăsime pentru friteuse din plante":
    "Se folosește pentru prăjirea alimentelor la temperaturi înalte.",
  "Gelatină de porc":
    "Se folosește la prepararea deserturilor sau a sosurilor legate.",
  "Condimix gustos de legume":
    "Se folosește pentru a condimenta legumele la grătar sau la cuptor.",
  "Cartofi pentru prăjit clasa AAA": "Se prăjesc până devin aurii și crocanți.",
  "Cartofi pentru prăjit rustic":
    "Se prăjesc la temperaturi mai mici pentru a obține o textură crocantă.",
  "Cartofi pentru prăjit clasa AAAA 10x10":
    "Se prăjesc rapid pentru a obține cartofi prăjiți de tip fast-food.",
  "Spanac frunze": "Se sotéază rapid cu usturoi și ulei de măsline.",
  "Mazăre boabe": "Se adaugă în supe, tocănițe sau ca garnitură.",
  "Fasole galbenă": "Se folosește în salate, supe sau ca garnitură.",
  "Conopidă de mărime medie": "Se poate fierbe, coace sau sota.",
  Broccoli: "Se poate găti la abur, fierbe sau sota.",
  "Spaghete Barilla":
    "Se fierb în apă cu sare, apoi se amestecă cu sosul preferat.",
  Tagliatelle: "Se fierb în apă cu sare, apoi se servesc cu sosuri bogate.",
  "Unt de masă": "Se folosește la gătit sau ca ingredient în aluaturi.",
  "Cașcaval cu lavandă": "Se servește ca aperitiv sau se folosește în salate.",
  "Cașcaval pesto verde": "Se folosește în sandvișuri sau ca aperitiv.",
  "Cașcaval pesto roșu": "Se folosește în sandvișuri sau ca aperitiv.",
  "Cașcaval gouda": "Se folosește în sandvișuri, salate sau ca aperitiv.",
  "Cașcaval edamer": "Se folosește în sandvișuri, salate sau ca aperitiv.",
  "Cașcaval negru":
    "Se servește ca aperitiv sau se folosește în preparate calde.",
  "Rulouri de primăvară": "Se prăjesc până devin aurii și crocante.",
  "Jalapenos snacks": "Se servesc ca gustare sau aperitiv.",
  "Specialitate din brânză picantă":
    "Se servește ca aperitiv sau se folosește în sandvișuri.",
};

export default function ProductPage() {
  const params = useParams();
  const categorie =
    typeof params.categorie === "string" ? params.categorie : "";
  const produs = typeof params.produs === "string" ? params.produs : "";
  const locale = typeof params.locale === "string" ? params.locale : "ro";
  const [product, setProduct] = useState<any>(null);
  const [similar, setSimilar] = useState<any[]>([]);
  const [quantity, setQuantity] = useState<number>(100);

  useEffect(() => {
    fetch(
      `http://localhost:8000/api/product?name=${decodeURIComponent(produs)}`
    )
      .then((res) => res.json())
      .then(setProduct);

    fetch(
      `http://localhost:8000/api/products?category=${encodeURIComponent(
        categorie
      )}`
    )
      .then((res) => res.json())
      .then((data) => setSimilar(data.filter((p: any) => p.name !== produs)));
  }, [produs, categorie]);

  if (!product || product.error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <span>Produsul nu a fost găsit.</span>
      </div>
    );
  }

  const pricePer100g = product.price || 0;
  const estimatedPrice = ((quantity / 100) * pricePer100g).toFixed(2);

  console.log("Produs din URL:", produs);

  return (
    <div
      className="min-h-screen pb-16 bg-cover bg-center flex flex-col items-center"
      style={{ backgroundImage: "url('/images/bg-marble.jpg')" }}
    >
      <div className="w-full max-w-5xl mx-auto px-2 sm:px-6">
        <div className="mt-16 sm:mt-24" />
        <div className="backdrop-blur-md bg-black/70 border border-yellow-500/20 rounded-3xl shadow-2xl p-8 sm:p-12 flex flex-col">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-8">
            <img
              src="/images/imagine-Dara.png"
              alt="Produs Dara"
              className="w-full md:w-[400px] h-[400px] object-cover rounded-2xl shadow-lg"
            />
            <div className="flex-1">
              <span className="text-gray-300 font-semibold mb-2 block text-lg">
                Face parte din categoria:{" "}
                <span className="text-yellow-400">{product.category}</span>
              </span>
              <h1 className="font-serif text-4xl font-bold text-yellow-400 drop-shadow mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-yellow-300 font-bold text-xl">
                  {product.price !== undefined && product.price !== null
                    ? `${product.price} lei / 100g`
                    : "Preț indisponibil"}
                </span>
              </div>

              <div className="bg-black/20 border border-yellow-500/30 rounded-lg p-4 mb-4">
                <span className="font-bold text-red-400">
                  ⚠ Greutatea comenzii poate varia, ceea ce poate influența și
                  prețul final. Diferența de preț va fi comunicată prin e-mail,
                  iar eventualele costuri suplimentare vor fi facturate și
                  trimise prin e-mail.
                </span>
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-6 justify-center">
                  <div className="flex flex-col items-center bg-black/40 rounded-xl p-6 border border-yellow-500/20 shadow-lg">
                    <label className="text-yellow-300 font-semibold mb-2 text-lg">
                      Cantitate dorită
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-lg hover:bg-yellow-500 transition"
                        onClick={() =>
                          setQuantity(Math.max(100, quantity - 50))
                        }
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min={100}
                        step={50}
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="rounded-lg px-4 py-2 bg-black/60 border border-yellow-500/30 text-yellow-200 text-center w-24 text-lg font-bold"
                      />
                      <button
                        type="button"
                        className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-lg hover:bg-yellow-500 transition"
                        onClick={() => setQuantity(quantity + 50)}
                      >
                        +
                      </button>
                    </div>
                    <span className="text-gray-400 mt-2 text-sm">
                      Minim 100g
                    </span>
                  </div>
                  <div className="flex flex-col items-center bg-black/40 rounded-xl p-6 border border-yellow-500/20 shadow-lg">
                    <label className="text-yellow-300 font-semibold mb-2 text-lg">
                      Preț estimativ
                    </label>
                    <span className="text-yellow-400 font-bold text-2xl">
                      {product.price ? `${estimatedPrice} lei` : "—"}
                    </span>
                    <span className="text-gray-400 mt-2 text-sm">
                      pentru {quantity}g la {product.price} lei / 100g
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black/30 rounded-xl p-4 mt-2 border border-yellow-500/10">
            <h2 className="text-yellow-400 font-bold text-lg mb-2">
              Descriere produs
            </h2>
            <p className="text-gray-200 text-base leading-relaxed">
              {product.description ||
                "Produs de calitate Dara Transilvania, ideal pentru preparate diverse."}
            </p>
          </div>
          <div className="flex items-center justify-between mt-8">
            <Link
              href={`/${locale}/produse/${categorie}`}
              className="text-yellow-400 font-semibold hover:underline"
            >
              ← Înapoi la categorie
            </Link>
          </div>
        </div>
        {/* Produse similare */}
        <div className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-yellow-400 mb-6">
            Produse similare
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {similar.map((prod) => (
              <Link
                key={prod.name}
                href={`/${locale}/produse/${categorie}/${encodeURIComponent(
                  prod.name
                )}`}
              >
                <div className="bg-black/40 rounded-xl p-6 border border-yellow-500/10 shadow hover:shadow-yellow-500/20 transition-shadow duration-200 flex flex-col items-center">
                  <img
                    src="/images/imagine-Dara.png"
                    alt="Produs similar"
                    className="w-24 h-24 object-cover rounded-lg mb-3"
                  />
                  <span className="text-yellow-300 font-bold text-center text-lg">
                    {prod.name}
                  </span>
                  <p className="text-gray-200 text-center text-sm mt-1">
                    {prod.description}
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
