import React from "react";

export default function AnunturiPage({ params }: { params: { locale: string } }) {
  const locale = params?.locale || 'ro';
  return (
    <main className="min-h-screen p-4 md:p-8 flex flex-col items-center mt-24">
      <div className="max-w-3xl w-full bg-black/40 rounded-3xl p-8 md:p-12 border border-yellow-500/20 shadow-2xl mx-auto">
        {locale === 'ro' ? (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-8 text-center">Comunicat de presă începere proiect</h1>
            <div className="space-y-6 text-lg text-white/90">
              <p className="text-center font-semibold">„PNRR: Fonduri pentru România modernă și reformată!”</p>
              <p><strong>Numele beneficiarului:</strong> S.C. DARA TRANSILVANIA S.R.L.</p>
              <p>Apel de proiecte gestionat de Ministerul Investițiilor și Proiectelor Europene, finanțat prin Planul Național de Redresare și Reziliență al României, Componenta C9. Suport pentru sectorul privat, cercetare, dezvoltare și inovare, Investiția I3. Scheme de ajutor pentru sectorul privat, Măsura 1. Schemă de minimis și schemă de ajutor de stat în contextul digitalizării IMM-urilor, titlu apel: Digitalizarea IMM-urilor, Grant de până la 100.000 euro pe întreprindere care să sprijine IMM-urile în adoptarea tehnologiilor digitale.</p>
              <p><strong>Numele proiectului de investiție:</strong> „DIGITALIZARE”</p>
              <p><strong>Contract de finanțare:</strong> 6943.1/i3/c9<br />
              <strong>Cod proiect:</strong> 6943</p>
              <p><strong>Durata proiectului:</strong> 7 luni<br />
              <strong>Data de începere:</strong> 13.05.2025<br />
              <strong>Data finalizării:</strong> 31.12.2025</p>
              <p><strong>Obiectivul general urmărit:</strong> Implementarea de soluții digitale pentru eficientizarea activității și creșterea competitivității firmei</p>
              <p><strong>Obiectivele specifice urmărite:</strong></p>
              <ul className="list-disc ml-6">
                <li>Dotarea societății cu active corporale și necorporale.</li>
                <li>Creșterea productivității muncii în anul 3 de durabilitate.</li>
                <li>Mentinerea locurilor de munca existente la nivelul anului 2022 în vederea reducerii fluctuației de personal, având un impact pozitiv asupra activității societății.</li>
                <li>Îndeplinirea a min 6 criterii de intensitate digitală, conform Indicelui economiei și societății digitale (DESI), ca urmare a implementării proiectului de digitalizare.</li>
              </ul>
              <p><strong>Valoare totală proiect:</strong> 202.139,22 lei<br />
              <strong>Valoare nerambursabilă finanțată din PNRR:</strong> 139.110,88 lei</p>
              <p><strong>Date de contact:</strong></p>
              <p>Persoană de contact: ALINA-SIMONA IOICA<br />
              Telefon: 0741 616 249<br />
              Email: <a href="mailto:office@daratransilvania.com" className="text-yellow-400 underline">office@daratransilvania.com</a></p>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-8 text-center">Press Release – Project Start</h1>
            <div className="space-y-6 text-lg text-white/90">
              <p className="text-center font-semibold">“NRRP: Funds for a modern and reformed Romania!”</p>
              <p><strong>Beneficiary name:</strong> S.C. DARA TRANSILVANIA S.R.L.</p>
              <p>Project call managed by the Ministry of Investments and European Projects, funded through Romania’s National Recovery and Resilience Plan, Component C9. Support for the private sector, research, development and innovation, Investment I3. Aid schemes for the private sector, Measure 1. De minimis scheme and state aid scheme in the context of SME digitalization, call title: SME Digitalization, Grant of up to 100,000 euros per enterprise to support SMEs in adopting digital technologies.</p>
              <p><strong>Investment project name:</strong> “DIGITALIZATION”</p>
              <p><strong>Funding contract:</strong> 6943.1/i3/c9<br />
              <strong>Project code:</strong> 6943</p>
              <p><strong>Project duration:</strong> 7 months<br />
              <strong>Start date:</strong> 13.05.2025<br />
              <strong>End date:</strong> 31.12.2025</p>
              <p><strong>Main objective:</strong> Implementation of digital solutions to streamline activity and increase company competitiveness</p>
              <p><strong>Specific objectives:</strong></p>
              <ul className="list-disc ml-6">
                <li>Equipping the company with tangible and intangible assets.</li>
                <li>Increasing labor productivity in the 3rd year of sustainability.</li>
                <li>Maintaining existing jobs at the 2022 level to reduce staff turnover, having a positive impact on company activity.</li>
                <li>Meeting at least 6 digital intensity criteria, according to the Digital Economy and Society Index (DESI), as a result of the digitalization project implementation.</li>
              </ul>
              <p><strong>Total project value:</strong> 202,139.22 lei<br />
              <strong>Non-reimbursable value funded by NRRP:</strong> 139,110.88 lei</p>
              <p><strong>Contact details:</strong></p>
              <p>Contact person: ALINA-SIMONA IOICA<br />
              Phone: +40 741 616 249<br />
              Email: <a href="mailto:office@daratransilvania.com" className="text-yellow-400 underline">office@daratransilvania.com</a></p>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
