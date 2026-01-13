"use client";
import { useRef, useEffect, useState } from "react";

type QualityGuaranteeProps = { locale: string };

export default function QualityGuarantee({ locale }: QualityGuaranteeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Detectează când secțiunea intră în viewport pentru animare
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) setVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full flex justify-center py-24 px-4">
      <div
        ref={ref}
        className={`max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center gap-16 p-10 rounded-3xl backdrop-blur-lg bg-black/40 border border-yellow-500/20 shadow-2xl transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Logo cu efect la scroll */}
        <div
          className={`w-full md:w-1/3 flex justify-center transition-all duration-700 ${
            visible ? "scale-100 blur-0" : "scale-90 blur-sm"
          }`}
        >
          <img
            src="/images/dara-logo.png"
            alt="Dara Transilvania Logo"
            className="max-h-56 md:max-h-64 object-contain drop-shadow-lg"
            style={{ transition: "all 0.7s cubic-bezier(.4,0,.2,1)" }}
          />
        </div>
        {/* Text cu efect subtil */}
        <div
          className={`w-full md:w-2/3 transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-yellow-500 mb-6 drop-shadow-lg">
            {locale === "ro" ? "Garanția Calității" : "Quality Guarantee"}
          </h2>
          {(locale === "ro"
            ? [
                "Comandă cu încredere și bucură-te de produsele oferite de noi, cu livrare rapidă și servicii pe care te poți baza.",
                "Produsele noastre premium sunt alegerea perfectă pentru a satisface orice gust.",
                "Alătură-te nouă în călătoria culinară și descoperă gusturile lumii de acasă."
              ]
            : [
                "Order with confidence and enjoy our products, with fast delivery and services you can rely on.",
                "Our premium products are the perfect choice to satisfy any taste.",
                "Join us on a culinary journey and discover the tastes of the world from home."
              ]
          ).map((p, i) => (
            <p key={i} className="text-lg text-gray-200 leading-relaxed mb-4">{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
