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
            src="/images/Dara-logo.png"
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
          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            {locale === "ro"
              ? "Garantăm calitatea produselor noastre prin standarde stricte și selecție atentă."
              : "At Dara Transilvania, we are committed to providing the highest quality frozen food products. Our rigorous quality assurance processes ensure that every product meets our strict standards for freshness and safety. We source our ingredients from trusted suppliers and conduct regular quality checks to guarantee that you receive only the best."}
          </p>
          <p className="text-lg text-gray-200 leading-relaxed">
            {locale === "ro"
              ? "Satisfacția dumneavoastră este prioritatea noastră, și ne susținem produsele cu o garanție a calității care reflectă dedicația noastră pentru excelență."
              : "Your satisfaction is our priority, and we stand behind our products with a quality guarantee that reflects our dedication to excellence."}
          </p>
        </div>
      </div>
    </section>
  );
}
