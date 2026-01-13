"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Header({ locale }: { locale?: string }) {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  // Stilul "Hardcoded" pentru efectul de sticlă pe mobil
  const glassStyleMobile = {
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderLeft: "1px solid rgba(212, 175, 55, 0.3)",
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-40 transition-all duration-500 ease-in-out ${
          scrolled
            ? "w-screen !rounded-none !left-0 !max-w-full bg-black/60 shadow-lg backdrop-blur-md"
            : "w-full bg-transparent shadow-none backdrop-blur-0"
        }`}
      >
        <div className={scrolled ? "w-full p-0 m-0" : "container mx-auto max-w-6xl p-2"}>
          {/* Containerul principal al Header-ului (stilul original) */}
          <div
            className={
              "bg-dark-overlay backdrop-blur-lg border border-gold/20 shadow-lg transition-all duration-300 " +
              (scrolled ? "rounded-none px-0 py-1" : "rounded-xl px-2 md:px-4 py-2")
            }
          >
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-2 md:gap-0">
              
              {/* LOGO - Aliniat stânga, mare */}
              <div className="flex justify-center md:justify-start items-center pl-2 md:pl-12 py-1 md:py-0 w-full md:w-auto">
                <Link href="/" className="flex items-center gap-3">
                  <img
                    src="/images/dara-logo.png"
                    alt="Dara Transilvania Logo"
                    className="h-20 sm:h-28 md:h-32 w-auto transition-transform duration-200 hover:scale-105"
                    style={{ marginTop: "-10px" }}
                  />
                </Link>
              </div>

              {/* BURGER BUTTON (MOBILE) */}
              <button
                className="md:hidden absolute top-6 right-6 z-50 flex flex-col justify-center items-center w-10 h-10 bg-black/60 rounded-lg border border-gold/40 focus:outline-none hover:bg-black/80 transition-colors"
                onClick={() => setMenuOpen(true)}
              >
                <span className="block w-6 h-0.5 bg-gold mb-1"></span>
                <span className="block w-6 h-0.5 bg-gold mb-1"></span>
                <span className="block w-6 h-0.5 bg-gold"></span>
              </button>

              {/* DESKTOP MENU - Stilul original, mare și centrat */}
              <div className="hidden md:flex flex-wrap justify-center items-center gap-2 md:gap-4 py-1 md:py-0 w-full md:w-auto">
                <Link 
                  href="/" 
                  className={isActive("/") ? "bg-transparent transition-colors px-4 py-2 whitespace-nowrap glow-gold-active text-base md:text-lg font-semibold text-gold" : "bg-transparent transition-colors px-4 py-2 whitespace-nowrap glow-gold-hover text-base md:text-lg font-semibold text-gray-200 hover:text-gold"}
                >
                  {t("home", { default: "Acasă" })}
                </Link>
                <Link 
                  href={`/${locale}/produse`} 
                  className={isActive(`/${locale}/produse`) ? "bg-transparent transition-colors px-4 py-2 whitespace-nowrap glow-gold-active text-base md:text-lg font-semibold text-gold" : "bg-transparent transition-colors px-4 py-2 whitespace-nowrap glow-gold-hover text-base md:text-lg font-semibold text-gray-200 hover:text-gold"}
                >
                  {t("products", { default: "Produse" })}
                </Link>
                <Link 
                  href={`/${locale}/anunturi`} 
                  className={isActive(`/${locale}/anunturi`) ? "bg-transparent transition-colors px-4 py-2 whitespace-nowrap glow-gold-active text-base md:text-lg font-semibold text-gold" : "bg-transparent transition-colors px-4 py-2 whitespace-nowrap glow-gold-hover text-base md:text-lg font-semibold text-gray-200 hover:text-gold"}
                >
                  {locale === "ro" ? "Anunțuri" : "Announcements"}
                </Link>
                <Link 
                  href={`/${locale}/contact`} 
                  className={isActive(`/${locale}/contact`) ? "bg-transparent transition-colors px-4 py-2 whitespace-nowrap glow-gold-active text-base md:text-lg font-semibold text-gold" : "bg-transparent transition-colors px-4 py-2 whitespace-nowrap glow-gold-hover text-base md:text-lg font-semibold text-gray-200 hover:text-gold"}
                >
                  {t("contact", { default: "Contact" })}
                </Link>
              </div>

              {/* Language Switcher - Dreapta */}
              <div className="hidden md:flex justify-center md:justify-end items-center pr-2 md:pr-12 py-1 md:py-0 w-full md:w-auto">
                <LanguageSwitcher />
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* === MOBILE MENU OVERLAY === */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          
          {/* 1. Background-ul întunecat (partea stângă) */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          {/* 2. Sertarul din dreapta (SIDEBARUL CU BLUR) */}
          <div 
            className="relative w-[80%] max-w-[350px] h-full shadow-2xl flex flex-col pt-24 px-8 animate-slideInRight"
            style={glassStyleMobile} // Blur forțat aici
          >
            
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 p-2 w-10 h-10 flex items-center justify-center rounded-full bg-gold/10 hover:bg-gold/30 text-gold text-2xl font-bold transition-colors border border-gold/20"
            >
              ×
            </button>

            {/* Link-urile Mobile */}
            <div className="flex flex-col gap-6 w-full">
              <Link 
                href="/" 
                onClick={() => setMenuOpen(false)}
                className={`text-center py-4 text-xl font-bold border-b border-gold/20 ${isActive("/") ? "text-gold" : "text-white"}`}
              >
                {t("home", { default: "Acasă" })}
              </Link>

              <Link 
                href={`/${locale}/produse`} 
                onClick={() => setMenuOpen(false)}
                className={`text-center py-4 text-xl font-bold border-b border-gold/20 ${isActive(`/${locale}/produse`) ? "text-gold" : "text-white"}`}
              >
                {t("products", { default: "Produse" })}
              </Link>

              <Link 
                href={`/${locale}/anunturi`} 
                onClick={() => setMenuOpen(false)}
                className={`text-center py-4 text-xl font-bold border-b border-gold/20 ${isActive(`/${locale}/anunturi`) ? "text-gold" : "text-white"}`}
              >
                {locale === "ro" ? "Anunțuri" : "Announcements"}
              </Link>

              <Link 
                href={`/${locale}/contact`} 
                onClick={() => setMenuOpen(false)}
                className={`text-center py-4 text-xl font-bold border-b border-gold/20 ${isActive(`/${locale}/contact`) ? "text-gold" : "text-white"}`}
              >
                {t("contact", { default: "Contact" })}
              </Link>
            </div>

            <div className="mt-10 flex justify-center">
              <LanguageSwitcher />
            </div>

          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}