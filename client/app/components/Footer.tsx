import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="w-full p-6 bg-black/20 border-t border-gold/8 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <p className="text-gray-300 font-semibold">Dara Transilvania</p>
          <p className="text-gray-400 text-sm mt-2">
            Profesionalism și calitate în distribuția alimentelor congelate.
          </p>
          <div className="mt-4 text-gray-400 text-sm">
            © {new Date().getFullYear()} Dara Transilvania — Toate drepturile
            rezervate
          </div>
        </div>
      </div>
    </footer>
  );
}
