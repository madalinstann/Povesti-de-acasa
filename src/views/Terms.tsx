import LegalLayout from '../components/LegalLayout';

const h2 = 'text-xl sm:text-2xl font-serif font-bold text-text-main mt-10 mb-3';

export default function Terms() {
  return (
    <LegalLayout title="Termeni și condiții" updatedAt="iunie 2026">
      <p>
        Acești termeni descriu modul în care poate fi folosit site-ul „Povești de-acasă” și modul
        în care sunt preluate cererile de comandă pentru produsul „Explorăm Povești”.
      </p>

      <h2 className={h2}>1. Date vânzător</h2>
      <p>
        Site-ul este administrat pentru brandul „Povești de-acasă”. Pentru întrebări despre produs,
        comandă, livrare sau retur, folosește adresa de email și numărul de telefon afișate în
        pagina de Contact.
      </p>

      <h2 className={h2}>2. Produs și preț</h2>
      <p>
        Produsul principal este setul educațional „Explorăm Povești” — 98 de cartonașe pentru
        lectură, conectare și gândire critică. Prețul afișat pe site este 119,99 lei.
      </p>

      <h2 className={h2}>3. Plasarea cererii de comandă</h2>
      <p>
        Formularul din checkout trimite o cerere de comandă. Comanda este confirmată manual după ce
        vânzătorul contactează clientul pentru verificarea datelor de livrare, disponibilitate și
        metoda finală de expediere.
      </p>

      <h2 className={h2}>4. Livrare</h2>
      <p>
        Livrarea se poate face prin curier rapid sau locker EasyBox/Sameday, în funcție de ce este
        mai simplu pentru client și pentru vânzător la momentul confirmării.
      </p>

      <h2 className={h2}>5. Plată</h2>
      <p>
        Pentru început, plata recomandată este ramburs / la primirea coletului sau altă metodă
        confirmată direct cu clientul. Plata online poate fi adăugată ulterior.
      </p>

      <h2 className={h2}>6. Retur</h2>
      <p>
        Returul și eventualele neclarități se discută direct cu vânzătorul după confirmarea
        comenzii, conform legislației aplicabile comerțului online.
      </p>

      <h2 className={h2}>7. Contact</h2>
      <p>
        Pentru întrebări despre produs sau comandă, folosește pagina de Contact sau adresa de email
        afișată pe site.
      </p>
    </LegalLayout>
  );
}
