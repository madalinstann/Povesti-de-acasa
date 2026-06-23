import LegalLayout from '../components/LegalLayout';

const h2 = 'text-xl sm:text-2xl font-serif font-bold text-text-main mt-10 mb-3';
const note = 'bg-brand-orange-light/40 text-[#8A4B2A] px-1.5 py-0.5 rounded font-medium';

export default function Privacy() {
  return (
    <LegalLayout title="Politică de confidențialitate" updatedAt="iunie 2026">
      <p>
        Această politică explică ce date colectează site-ul „Povești de-acasă” prin formularele de
        contact și comandă și cum sunt folosite acestea.
      </p>

      <h2 className={h2}>1. Operatorul datelor</h2>
      <p>
        Datele juridice ale operatorului vor fi completate înainte de lansarea comercială oficială:
        <span className={note}> denumire legală / PFA / SRL, CUI, sediu și email de contact</span>.
      </p>

      <h2 className={h2}>2. Date colectate</h2>
      <p>
        Prin formularul de comandă colectăm nume, email, telefon și detalii de livrare. Prin
        formularul de contact colectăm nume, email, telefon opțional și mesaj.
      </p>

      <h2 className={h2}>3. Scopul prelucrării</h2>
      <p>
        Datele sunt folosite pentru a răspunde mesajelor, pentru a confirma cereri de comandă și
        pentru a organiza livrarea produsului.
      </p>

      <h2 className={h2}>4. Trimiterea emailurilor</h2>
      <p>
        Formularele site-ului trimit notificări printr-un serviciu de email tranzacțional. Datele
        sunt trimise către adresa proprietarului site-ului pentru procesare manuală.
      </p>

      <h2 className={h2}>5. Partajarea datelor</h2>
      <p>
        Datele pot fi transmise către firma de curierat doar când comanda este confirmată și trebuie
        livrată. Datele nu sunt vândute către terți.
      </p>

      <h2 className={h2}>6. Drepturile utilizatorului</h2>
      <p>
        Utilizatorul poate cere acces, corectare sau ștergerea datelor contactând proprietarul
        site-ului la adresa afișată în pagina de Contact.
      </p>
    </LegalLayout>
  );
}
