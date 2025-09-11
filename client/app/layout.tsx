import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dara Transilvania",
  description: "Distribuție Produse Alimentare Congelate",
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
