import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

// Funcția care generează metadate unice pentru SEO, folosind traducerile



export default function DespreNoiPage() {
  // Hook-ul care încarcă traducerile pentru pagina curentă
  const t = useTranslations("AboutUsPage");

  return (
    <main className="min-h-screen p-4 md:p-8 flex flex-col items-center pt-32">
      
      <div className="w-full flex justify-center mt-8">
        <AboutSection locale={typeof window === 'undefined' ? 'ro' : (window.location.pathname.split('/')[1] || 'ro')} />
      </div>
    </main>
  );
}
