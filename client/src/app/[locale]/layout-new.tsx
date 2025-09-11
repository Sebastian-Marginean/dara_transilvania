import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import LanguageSwitcher from "../../components/LanguageSwitcher";

// Configurare fonturi
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Dara Transilvania - Distribuție Produse Alimentare Congelate",
  description:
    "Dara Transilvania este lider în distribuția de produse alimentare congelate în România. Oferim o gamă variată de carne, legume și semipreparate.",
  keywords:
    "produse congelate, distribuție alimente, Horeca, carne congelată, legume congelate",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
      <body
        className={`${playfairDisplay.variable} ${lato.variable} font-sans`}
      >
        <header className="fixed top-4 right-4 z-50">
          <LanguageSwitcher />
        </header>
        {children}
      </body>
    </html>
  );
}
