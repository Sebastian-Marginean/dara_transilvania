import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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
           
          </div>
        </div>
        {/* Mijloc: Contact */}
        <div className="flex-1 flex flex-col gap-2">
          <h4 className="text-lg font-semibold text-yellow-400 mb-1">
            {isRO ? "Informații de contact" : "Contact Information"}
          </h4>
          <div className="text-gray-300 text-sm mb-2">
            SC Dara Transilvania SRL<br />
            Mun. Blaj, str. Campul Libertății, nr. 25, jud. Alba
          </div>
          <div className="grid gap-2 text-sm">
            {/* Alina Ioica */}
            <div>
              <span className="font-bold text-yellow-300">Alina Ioica</span> - {isRO ? "Administrator / Contabilitate" : "Administrator / Accounting"}<br />
              <span className="text-gray-300">Tel: <a href="tel:+40741616249" className="underline">+40 741 616 249</a></span><br />
              <span className="text-gray-300">Email: <a href="mailto:office@daratransilvania.com" className="underline">office@daratransilvania.com</a></span>
            </div>
            {/* Adrian Ioica */}
            <div>
              <span className="font-bold text-yellow-300">Adrian Ioica</span> - {isRO ? "Șef Departament Achiziții" : "Head of Procurement"}<br />
              <span className="text-gray-300">Tel: <a href="tel:+40744390000" className="underline">+40 744 390 000</a></span><br />
              <span className="text-gray-300">Email: <a href="mailto:adrian@daratransilvania.com" className="underline">adrian@daratransilvania.com</a></span>
            </div>
            {/* Darius Ioica */}
            <div>
              <span className="font-bold text-yellow-300">Darius Ioica</span><br />
              <span className="text-gray-300">Tel: <a href="tel:+40773861499" className="underline">+40 773 861 499</a></span><br />
              <span className="text-gray-300">Email: <a href="mailto:office@daratransilvania.com" className="underline">office@daratransilvania.com</a></span>
            </div>
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
              <FontAwesomeIcon icon={faFacebook} size="2x" className="text-yellow-400 transition-transform duration-200 group-hover:scale-110" />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/dara_transilvania/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-pink-500 transition-transform duration-200 group-hover:scale-110" />
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/40741616249"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="group"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-green-500 transition-transform duration-200 group-hover:scale-110" />
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
