import LegalLayout from '../components/LegalLayout';

const h2 = "text-xl sm:text-2xl font-serif font-bold text-text-main mt-10 mb-3";
const todo = "bg-brand-orange-light/40 text-[#8A4B2A] px-1.5 py-0.5 rounded font-medium";

export default function Privacy() {
  return (
    <LegalLayout title="Politică de confidențialitate" updatedAt="iunie 2026">
      <p>
        Confidențialitatea datelor tale este importantă pentru noi. Această politică explică ce date
        cu caracter personal colectăm, în ce scop și cum le protejăm, în conformitate cu
        Regulamentul (UE) 2016/679 (GDPR).
      </p>

      <h2 className={h2}>1. Operatorul de date</h2>
      <p>
        Operatorul datelor tale este <span className={todo}>[COMPLETEAZĂ: denumire legală / PFA / SRL]</span>,
        CUI <span className={todo}>[COMPLETEAZĂ: CUI]</span>, cu sediul în
        <span className={todo}> [COMPLETEAZĂ: adresă]</span>. Pentru orice solicitare privind datele
        tale, ne poți contacta la <span className={todo}>[COMPLETEAZĂ: email]</span>.
      </p>

      <h2 className={h2}>2. Ce date colectăm</h2>
      <p>
        Atunci când plasezi o comandă, colectăm: numele complet, adresa de email, numărul de telefon
        și adresa de livrare (sau locația lockerului EasyBox). Aceste date sunt necesare pentru
        procesarea și livrarea comenzii.
      </p>

      <h2 className={h2}>3. Scopul prelucrării</h2>
      <p>
        Folosim datele tale exclusiv pentru: procesarea și livrarea comenzii, contactarea ta pentru
        confirmare, emiterea documentelor fiscale și îndeplinirea obligațiilor legale. Nu folosim
        datele în scopuri de marketing fără consimțământul tău explicit.
      </p>

      <h2 className={h2}>4. Temeiul legal</h2>
      <p>
        Prelucrarea se bazează pe executarea contractului (procesarea comenzii), pe obligațiile
        legale (documente fiscale) și, după caz, pe consimțământul tău.
      </p>

      <h2 className={h2}>5. Partajarea datelor</h2>
      <p>
        Datele tale pot fi partajate doar cu firmele de curierat (pentru livrare) și, dacă este
        cazul, cu furnizorii de servicii contabile, strict în scopurile menționate mai sus. Nu
        vindem și nu transmitem datele tale către terți în scopuri comerciale.
      </p>

      <h2 className={h2}>6. Perioada de stocare</h2>
      <p>
        Păstrăm datele cât este necesar pentru îndeplinirea scopurilor de mai sus și conform
        termenelor legale de arhivare (de exemplu, documentele fiscale se păstrează conform
        legislației în vigoare).
      </p>

      <h2 className={h2}>7. Drepturile tale</h2>
      <p>
        Conform GDPR, ai dreptul de acces, rectificare, ștergere, restricționare a prelucrării,
        portabilitate a datelor și dreptul de a te opune prelucrării. Îți poți exercita aceste
        drepturi contactându-ne la adresa de email de mai sus. Ai, de asemenea, dreptul de a depune
        o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter
        Personal (ANSPDCP).
      </p>

      <h2 className={h2}>8. Securitatea datelor</h2>
      <p>
        Aplicăm măsuri tehnice și organizatorice rezonabile pentru a proteja datele tale împotriva
        accesului neautorizat, pierderii sau divulgării.
      </p>

      <h2 className={h2}>9. Cookies</h2>
      <p>
        Acest site folosește un minim de cookie-uri necesare funcționării. Nu folosim cookie-uri de
        urmărire în scop publicitar fără consimțământul tău.
      </p>
    </LegalLayout>
  );
}
