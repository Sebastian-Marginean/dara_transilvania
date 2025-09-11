"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const languages = [
  { code: "ro", name: "Română", flag: "🇷🇴" },
  { code: "en", name: "English", flag: "🇬🇧" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Extrag limba curentă din pathname
  const currentLocale = pathname.split("/")[1];
  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  const switchLanguage = (locale: string) => {
    // Înlocuiesc locale-ul curent cu cel nou în pathname
    const newPathname = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPathname);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Butonul principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-yellow-500/30 rounded-lg px-4 py-2 text-white hover:bg-yellow-500/10 transition-colors"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="font-medium">
          {currentLanguage.code.toUpperCase()}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-black/80 backdrop-blur-md border border-yellow-500/30 rounded-lg shadow-xl overflow-hidden z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => switchLanguage(language.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-yellow-500/10 transition-colors ${
                language.code === currentLocale
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "text-white"
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Overlay pentru a închide dropdown-ul */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
