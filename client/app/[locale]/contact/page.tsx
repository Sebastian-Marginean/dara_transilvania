"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const params = useParams();
  // Gestionăm cazul în care locale poate fi array sau string
  const locale = Array.isArray(params.locale) ? params.locale[0] : params.locale || "ro";

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!form.firstName.trim() || !form.lastName.trim())
      return locale === "ro" ? "Numele și prenumele sunt obligatorii." : "Name is required.";
    if (!form.email.trim()) return locale === "ro" ? "Email este obligatoriu." : "Email is required.";
    if (!/\S+@\S+\.\S+/.test(form.email)) return locale === "ro" ? "Email invalid." : "Invalid email.";
    if (!form.message.trim()) return locale === "ro" ? "Mesajul este obligatoriu." : "Message is required.";
    return null;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    const err = validate();
    if (err) {
      setStatus({ ok: false, msg: err });
      return;
    }

    setLoading(true);

    // DATELE TALE DE LA EMAILJS
    const serviceID = "service_q9xwgni";
    const templateID = "template_pi00qjs";
    const publicKey = "RzJqtnzShgNYsoPLL";

    // Adăugăm și 'name' pentru template-ul tău
    const templateParams = {
      name: `${form.firstName} ${form.lastName}`, // Pentru {{name}} din template
      firstName: form.firstName,
      lastName: form.lastName,
      company: form.company,
      email: form.email,
      phone: form.phone,
      subject: form.subject,
      message: form.message,
    };

    try {
      // Trimitem emailul
      const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      if (response.status === 200) {
        setStatus({
          ok: true,
          msg: locale === "ro" ? "Mesaj trimis cu succes!" : "Message sent successfully!",
        });
        
        // Resetăm formularul
        setForm({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
         throw new Error("EmailJS status not 200");
      }

    } catch (error: any) {
      console.error("Eroare EmailJS:", error);
      setStatus({ 
        ok: false, 
        msg: locale === "ro" ? "A apărut o eroare. Încearcă din nou." : "An error occurred. Please try again." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg-marble.jpg')" }}
    >
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-black/60 to-gray-900/60 p-8 rounded-3xl border border-yellow-500/8 shadow-2xl backdrop-blur-sm">
          <h1 className="font-serif text-3xl text-yellow-300 font-bold mb-2">
            {locale === "ro" ? "Contact" : "Contact Us"}
          </h1>
          <p className="text-gray-300 mb-6">
            {locale === "ro"
              ? "Completează formularul de mai jos."
              : "Fill the form below."}
          </p>

          <form onSubmit={submit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder={locale === "ro" ? "Nume" : "First name"}
                className="input"
              />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder={locale === "ro" ? "Prenume" : "Last name"}
                className="input"
              />
            </div>

            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder={
                locale === "ro" ? "Companie (opțional)" : "Company (optional)"
              }
              className="input"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="input"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder={locale === "ro" ? "Telefon" : "Phone"}
                className="input"
              />
            </div>

            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder={locale === "ro" ? "Subiect" : "Subject"}
              className="input"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              placeholder={locale === "ro" ? "Mesaj" : "Message"}
              className="input resize-y"
            />

            <div className="flex flex-col md:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-xl hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading
                  ? locale === "ro"
                    ? "Se trimite..."
                    : "Sending..."
                  : locale === "ro"
                  ? "Trimite Mesajul"
                  : "Send Message"}
              </button>

              {status && (
                <div
                  className={`text-sm font-medium px-4 py-2 rounded-lg ${
                    status.ok ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {status.msg}
                </div>
              )}
            </div>
          </form>

          {/* Harta locației */}
          <div className="mt-10">
            <h2 className="font-serif text-2xl text-yellow-300 font-bold mb-4">
              {locale === "ro" ? "Locație" : "Location"}
            </h2>
            <div className="rounded-2xl overflow-hidden border border-yellow-500/20 shadow-lg">
              <iframe
                title={locale === "ro" ? "Locație SC Dara Transilvania SRL" : "SC Dara Transilvania SRL Location"}
                src="https://www.google.com/maps?q=SC+Dara+Transilvania+SRL,+Mun.+Blaj,+str.+Campul+Libertatii,+nr.+25,+jud.+Alba&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Persoane de contact */}
          <div className="mt-10">
            <h2 className="font-serif text-2xl text-yellow-300 font-bold mb-4">
              {locale === "ro" ? "Persoane de contact" : "Contact Persons"}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Alina Ioica */}
              <div className="bg-black/40 rounded-2xl p-6 border border-yellow-500/10 shadow">
                <h3 className="text-lg font-bold text-yellow-200 mb-1">Alina Ioica</h3>
                <p className="text-gray-300 mb-1">{locale === "ro" ? "Administrator / Contabilitate" : "Administrator / Accounting"}</p>
                <p className="text-gray-400 mb-1">SC Dara Transilvania SRL</p>
                <p className="text-gray-300 mb-1">Tel: <a href="tel:+40741616249" className="underline">+40 741 616 249</a></p>
                <p className="text-gray-300">Email: <a href="mailto:office@daratransilvania.com" className="underline">office@daratransilvania.com</a></p>
              </div>
              {/* Adrian Ioica */}
              <div className="bg-black/40 rounded-2xl p-6 border border-yellow-500/10 shadow">
                <h3 className="text-lg font-bold text-yellow-200 mb-1">Adrian Ioica</h3>
                <p className="text-gray-300 mb-1">{locale === "ro" ? "Șef Departament Achiziții" : "Head of Procurement"}</p>
                <p className="text-gray-400 mb-1">SC Dara Transilvania SRL</p>
                <p className="text-gray-300 mb-1">Tel: <a href="tel:+40744390000" className="underline">+40 744 390 000</a></p>
                <p className="text-gray-300">Email: <a href="mailto:adrian@daratransilvania.com" className="underline">adrian@daratransilvania.com</a></p>
              </div>
              {/* Darius Ioica */}
              <div className="bg-black/40 rounded-2xl p-6 border border-yellow-500/10 shadow">
                <h3 className="text-lg font-bold text-yellow-200 mb-1">Darius Ioica</h3>
                <p className="text-gray-400 mb-1">SC Dara Transilvania SRL</p>
                <p className="text-gray-300 mb-1">Tel: <a href="tel:+40773861499" className="underline">+40 773 861 499</a></p>
                <p className="text-gray-300">Email: <a href="mailto:office@daratransilvania.com" className="underline">office@daratransilvania.com</a></p>
              </div>
            </div>
          </div>

          <style jsx>{`
            .input {
              width: 100%;
              padding: 0.75rem 1rem;
              border-radius: 0.75rem;
              background: rgba(255, 255, 255, 0.05);
              border: 1px solid rgba(255, 255, 255, 0.1);
              color: #e6e6e6;
              outline: none;
              transition: all 0.3s ease;
            }
            .input:focus {
              box-shadow: 0 0 0 2px rgba(251, 191, 36, 0.3);
              border-color: rgba(245, 158, 11, 0.8);
              background: rgba(0, 0, 0, 0.6);
            }
            .input::placeholder {
                color: rgba(255, 255, 255, 0.4);
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}