import LegalLayout from '../components/LegalLayout';

const h2 = "text-xl sm:text-2xl font-serif font-bold text-text-main mt-10 mb-3";
const todo = "bg-brand-orange-light/40 text-[#8A4B2A] px-1.5 py-0.5 rounded font-medium";

export default function Terms() {
  return (
    <LegalLayout title="Termeni și condiții" updatedAt="iunie 2026">
      <p>
        Acești termeni și condiții reglementează utilizarea site-ului „Povești de-acasă” și
        achiziționarea produselor comercializate prin intermediul acestuia. Prin plasarea unei
        comenzi, confirmi că ai citit și ești de acord cu termenii de mai jos.
      </p>

      <h2 className={h2}>1. Date de identificare ale vânzătorului</h2>
      <p>
        Produsele sunt comercializate de <span className={todo}>[COMPLETEAZĂ: denumire legală / PFA / SRL]</span>,
        CUI <span className={todo}>[COMPLETEAZĂ: CUI]</span>, cu sediul în
        <span className={todo}> [COMPLETEAZĂ: adresă]</span>, email de contact
        <span className={todo}> [COMPLETEAZĂ: email]</span>, telefon
        <span className={todo}> [COMPLETEAZĂ: telefon]</span>.
      </p>

      <h2 className={h2}>2. Produsele și prețurile</h2>
      <p>
        Produsul principal este setul de cartonașe educaționale „Explorăm Povești” (90 de
        cartonașe), la prețul de 49 lei. Prețurile sunt exprimate în lei (RON) și includ TVA, dacă
        este cazul. Ne rezervăm dreptul de a modifica prețurile în orice moment, modificările
        neafectând comenzile deja confirmate.
      </p>

      <h2 className={h2}>3. Plasarea comenzii</h2>
      <p>
        Comanda se plasează prin completarea formularului din pagina de finalizare a comenzii.
        După plasare, vei fi contactat pentru confirmarea comenzii și a detaliilor de livrare.
        Plata se face ramburs (la primirea coletului), prin curier sau locker Sameday EasyBox.
      </p>

      <h2 className={h2}>4. Livrare</h2>
      <p>
        Livrarea este gratuită pe teritoriul României și se realizează în termen de 1-3 zile
        lucrătoare prin curier rapid sau la orice locker Sameday EasyBox. Termenele de livrare sunt
        estimative și pot varia în funcție de disponibilitatea curierului.
      </p>

      <h2 className={h2}>5. Dreptul de retragere (returnare)</h2>
      <p>
        Conform OUG nr. 34/2014, ai dreptul de a te retrage din contract în termen de 14 zile
        calendaristice de la primirea produsului, fără a fi nevoie să justifici decizia. Pentru a-ți
        exercita acest drept, ne contactezi la datele de mai sus. Produsul trebuie returnat în
        starea în care a fost primit. Costul returului este suportat de
        <span className={todo}> [COMPLETEAZĂ: cumpărător / vânzător]</span>.
      </p>

      <h2 className={h2}>6. Garanție și conformitate</h2>
      <p>
        Produsele beneficiază de garanția legală de conformitate. În cazul în care produsul primit
        este deteriorat sau neconform, te rugăm să ne contactezi în maximum 48 de ore de la primire.
      </p>

      <h2 className={h2}>7. Proprietate intelectuală</h2>
      <p>
        Conținutul site-ului (texte, imagini, design, jocul „Explorăm Povești” și materialele
        aferente) este proprietatea „Povești de-acasă” și este protejat de legislația privind
        drepturile de autor. Reproducerea fără acord scris este interzisă.
      </p>

      <h2 className={h2}>8. Soluționarea litigiilor</h2>
      <p>
        Eventualele litigii se soluționează pe cale amiabilă. În caz contrar, te poți adresa
        Autorității Naționale pentru Protecția Consumatorilor (ANPC) sau platformei europene de
        soluționare online a litigiilor (SOL): <span className="text-brand-orange">ec.europa.eu/consumers/odr</span>.
      </p>

      <h2 className={h2}>9. Contact</h2>
      <p>
        Pentru orice întrebare legată de acești termeni, ne poți scrie la
        <span className={todo}> [COMPLETEAZĂ: email de contact]</span>.
      </p>
    </LegalLayout>
  );
}
