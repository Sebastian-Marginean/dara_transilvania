import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Importă CSS-ul
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Oprește adăugarea automată a CSS-ului de către Font Awesome, deoarece l-am importat manual

export const metadata: Metadata = {
  title: "Dara Transilvania",
  description: "Distribuție Produse Alimentare Congelate",
  icons: {
    icon: "/images/dara-logo6.PNG",
    shortcut: "/images/dara-logo6.PNG",
    apple: "/images/dara-logo6.PNG",
  },
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {/* apply marble background to the root <body> so it appears behind the fixed header */}
      <body
        className={`${playfairDisplay.variable} ${lato.variable} font-sans marble-bg debug-bg`}
      >
        {children}
      </body>
    </html>
  );
}
