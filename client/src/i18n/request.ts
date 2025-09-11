import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Lista de locale suportate
const locales = ["ro", "en"];

export default getRequestConfig(async ({ locale }) => {
  // Validez că locale-ul există și este suportat
  if (!locale || !locales.includes(locale)) {
    notFound();
  }

  try {
    return {
      locale,
      messages: (await import(`../messages/${locale}.json`)).default,
    };
  } catch (error) {
    notFound();
  }
});
