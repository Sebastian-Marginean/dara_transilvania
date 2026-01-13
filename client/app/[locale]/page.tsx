import AboutSection from "../components/AboutSection";
import ProductCategories from "../components/ProductCategories";
import QualityGuarantee from "../components/QualityGuarantee";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="flex flex-col items-center w-full">
      {/* 1. Despre Dara Transilvania */}
      <AboutSection locale={locale} />

      {/* 2. Categorii produse */}
      <ProductCategories locale={locale} />

      {/* 3. Garanția calității */}
      <QualityGuarantee locale={locale} />
    </main>
  );
}
