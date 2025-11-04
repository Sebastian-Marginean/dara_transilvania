import React from "react";

type MiniContactProps = { locale: string };

const MiniContact: React.FC<MiniContactProps> = ({ locale }) => {
  return (
    <section className="flex justify-center py-20 px-4">
      <div className="w-full max-w-xl rounded-3xl backdrop-blur-lg bg-black/40 border border-yellow-500/20 shadow-2xl p-10">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-yellow-500 mb-4 text-center">
          {locale === "ro" ? "Contact rapid" : "Quick Contact"}
        </h2>
        <p className="text-lg text-gray-200 leading-relaxed mb-8 text-center">
          {locale === "ro"
            ? "Trimite-ne un mesaj sau contactează-ne telefonic pentru orice întrebare."
            : "Send us a message or call us for any questions."}
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder={locale === "ro" ? "Nume și prenume" : "Your Name"}
            className="p-3 rounded-xl border border-yellow-500/30 bg-black/30 text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30 transition-all"
            required
          />
          <input
            type="email"
            placeholder={locale === "ro" ? "Email" : "Your Email"}
            className="p-3 rounded-xl border border-yellow-500/30 bg-black/30 text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30 transition-all"
            required
          />
          <textarea
            placeholder={locale === "ro" ? "Mesajul tău" : "Your Message"}
            className="p-3 rounded-xl border border-yellow-500/30 bg-black/30 text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30 transition-all"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl shadow-lg transition-colors"
          >
            {locale === "ro" ? "Trimite mesajul" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default MiniContact;
