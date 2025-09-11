export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRomanian = locale === "ro";

  return (
    <main className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl bg-black bg-opacity-50 backdrop-blur-md rounded-lg shadow-2xl p-8 md:p-12 border border-yellow-500/20">
        <header className="text-center mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            {isRomanian ? "Contact" : "Contact"}
          </h1>
          <p className="text-xl text-gray-300">
            {isRomanian
              ? "Să discutăm despre nevoile dumneavoastră"
              : "Let's discuss your needs"}
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="space-y-6">
            <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/30">
              <h2 className="font-serif text-2xl font-semibold text-yellow-500 mb-4">
                {isRomanian ? "Informații Contact" : "Contact Information"}
              </h2>
              <div className="space-y-3 text-gray-200">
                <p className="flex items-center">
                  <span className="text-yellow-500 mr-3">📧</span>
                  office@daratransilvania.ro
                </p>
                <p className="flex items-center">
                  <span className="text-yellow-500 mr-3">📞</span>
                  +40 123 456 789
                </p>
                <p className="flex items-center">
                  <span className="text-yellow-500 mr-3">📍</span>
                  Cluj-Napoca, România
                </p>
                <p className="flex items-center">
                  <span className="text-yellow-500 mr-3">🕒</span>
                  Luni - Vineri: 8:00 - 17:00
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/30">
              <h2 className="font-serif text-2xl font-semibold text-yellow-500 mb-4">
                {isRomanian ? "Trimite-ne un mesaj" : "Send us a message"}
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder={
                    isRomanian ? "Numele dumneavoastră" : "Your name"
                  }
                  className="w-full p-3 bg-black/30 border border-yellow-500/30 rounded text-white placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder={
                    isRomanian ? "Email-ul dumneavoastră" : "Your email"
                  }
                  className="w-full p-3 bg-black/30 border border-yellow-500/30 rounded text-white placeholder-gray-400"
                />
                <textarea
                  placeholder={
                    isRomanian ? "Mesajul dumneavoastră..." : "Your message..."
                  }
                  rows={4}
                  className="w-full p-3 bg-black/30 border border-yellow-500/30 rounded text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded transition-colors"
                >
                  {isRomanian ? "Trimite Mesajul" : "Send Message"}
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
