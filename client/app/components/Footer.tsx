type FooterProps = { locale: string };

export default function Footer({ locale }: FooterProps) {
  const isRO = locale === "ro";
  return (
    <footer className="w-full bg-black/70 backdrop-blur-lg border-t border-yellow-500/20 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row gap-12 md:gap-20 items-start justify-between">
        {/* Stânga: Logo și slogan */}
        <div className="flex-1 flex flex-col items-start gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/images/Dara-logo.png"
              alt="Dara Transilvania Logo"
              className="h-20 w-auto rounded-xl shadow-lg bg-black/30 p-2"
            />
            <span className="text-2xl font-bold text-yellow-500 drop-shadow">
              Dara Transilvania
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-yellow-400 mb-1">
              {isRO
                ? "Experimentați excelența în fiecare tăiere"
                : "Experience excellence in every cut"}
            </h3>
            <p className="text-gray-300 text-sm max-w-xs">
              {isRO
                ? "Descoperiți arta Angus cu Marble. Fabricate cu grijă, produsele noastre aduc cea mai bună carne de vită Angus pe masa dumneavoastră."
                : "Discover the art of Angus with Marble. Carefully crafted, our products bring the best Angus beef to your table."}
            </p>
          </div>
        </div>
        {/* Mijloc: Contact */}
        <div className="flex-1 flex flex-col gap-2">
          <h4 className="text-lg font-semibold text-yellow-400 mb-1">
            {isRO ? "Informații de contact" : "Contact Information"}
          </h4>
          <div className="text-gray-300 text-sm">
            {isRO
              ? "DARA TRANSILVANIA SRL, CUI: RO12345678, J12/345/2024, Cluj-Napoca, Str. Exemplu 1"
              : "DARA TRANSILVANIA SRL, VAT: RO12345678, J12/345/2024, Cluj-Napoca, 1 Example Street"}
          </div>
          <div className="flex items-center gap-2 mt-2">
            {/* Telefon SVG */}
            <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
              <path
                stroke="#FFD700"
                strokeWidth={2}
                d="M6.5 4.5A2 2 0 0 1 8.5 3h7a2 2 0 0 1 2 1.5l1.5 6A2 2 0 0 1 17 12.5h-10A2 2 0 0 1 4.5 10.5l1.5-6Z"
              />
              <circle cx={12} cy={17} r={1.5} fill="#FFD700" />
            </svg>
            <span className="text-yellow-300 font-medium">+40 721 123 456</span>
          </div>
          <div className="flex items-center gap-2">
            {/* Email SVG */}
            <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
              <rect
                x={4}
                y={4}
                width={16}
                height={16}
                rx={2}
                stroke="#FFD700"
                strokeWidth={2}
              />
              <path stroke="#FFD700" strokeWidth={2} d="M4 4l8 8 8-8" />
            </svg>
            <a
              href="mailto:contact@daratransilvania.ro"
              className="text-yellow-300 font-medium hover:underline"
            >
              contact@daratransilvania.ro
            </a>
          </div>
        </div>
        {/* Dreapta: Social */}
        <div className="flex-1 flex flex-col items-start gap-4">
          <h4 className="text-lg font-semibold text-yellow-400 mb-1">
            {isRO ? "Urmărește-ne" : "Follow us"}
          </h4>
          <div className="flex gap-5 mt-2">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/daratransilvania"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="group"
            >
              <img
                src="/icons/facebook.svg"
                alt="Facebook"
                className="w-8 h-8 filter invert brightness-200 transition-transform duration-200 group-hover:scale-110 group-hover:sepia group-hover:drop-shadow-[0_0_8px_gold] group-hover:hue-rotate-10"
              />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group"
            >
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className="w-8 h-8 filter invert brightness-200 transition-transform duration-200 group-hover:scale-110 group-hover:sepia group-hover:drop-shadow-[0_0_8px_gold] group-hover:hue-rotate-10"
              />
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/40721123456"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="group"
            >
              <img
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                className="w-8 h-8 filter invert brightness-200 transition-transform duration-200 group-hover:scale-110 group-hover:sepia group-hover:drop-shadow-[0_0_8px_gold] group-hover:hue-rotate-10"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 text-xs pb-6 pt-2 border-t border-yellow-500/10">
        &copy; {new Date().getFullYear()} Dara Transilvania.{" "}
        {isRO ? "Toate drepturile rezervate." : "All rights reserved."}
      </div>
    </footer>
  );
}
