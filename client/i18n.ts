export default async function getRequestConfig({
  requestLocale,
  locale,
}: {
  requestLocale: Promise<string> | string;
  locale?: string;
}) {
  const resolvedLocale = locale ?? (await requestLocale);

  // load messages from the messages folder
  const messages = (await import(`./messages/${resolvedLocale}.json`)).default;

  return {
    locales: ["ro", "en"],
    defaultLocale: "ro",
    locale: resolvedLocale,
    messages,
  };
}
