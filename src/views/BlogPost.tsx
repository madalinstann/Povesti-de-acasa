import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, BookOpen, Share2 } from 'lucide-react';
import { motion } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

interface PostData {
  id: number;
  category: string;
  date: string;
  readTime: string;
  title: string;
  imageUrl: string;
  author: string;
  introduction: string;
  paragraphs: string[];
  quote: string;
}

const postsData: Record<number, PostData> = {
  1: {
    id: 1,
    category: "Lectură",
    date: "12 Mai 2026",
    readTime: "5 min",
    title: "Cum transformăm cititul dintr-o obligație într-o plăcere",
    imageUrl: "/cartonase-4.jpg",
    author: "Oana",
    introduction: "De câte ori nu ai auzit replica: „Nu vreau să citesc, e plictisitor”? Ca învățătoare și mamă, am întâlnit această rezistență de nenumărate ori. Însă cititul nu ar trebui să fie o temă de casă obligatorie, ci un moment de conectare și bucurie între copil și părinte.",
    paragraphs: [
      "În primii ani de școală, copiii sunt adesea presați să citească pentru a atinge o anumită viteză sau performanță măsurabilă. Această presiune transformă o activitate care ar trebui să fie magică într-o corvoadă mecanică. Copilul se concentrează atât de mult pe decodarea corectă a literelor pentru a fi pe placul adultului, încât își pierde complet capacitatea de a vizualiza povestea și de a trăi emoțiile ei.",
      "Soluția nu este să îi forțăm să citească mai multe pagini, ci să le schimbăm întreaga experiență. O poveste citită împreună cu voce tare de către părinte, cu intonație, glume și implicare activă, are o valoare de neegalat. Când citim împreună, creăm un spațiu de siguranță emoțională pe care copilul îl va asocia inconștient cu cărțile pentru tot restul vieții sale de adult.",
      "Aici intervin întrebările de conectare. În loc să îl chestionăm sec „Ce s-a întâmplat în capitolul 3?”, transformând momentul într-o examinare orală, putem folosi întrebări calde, deschise: „Dacă ai fi fost în locul eroului, ce decizie ai fi luat?” sau „Ce crezi că simte personajul în această ilustrație?”. Aceste întrebări nu doar că îi ghidează înțelegerea textului, ci îi arată copilului că opiniile sale sunt valoroase și ascultate cu adevărat.",
      "Lectura devine astfel o joacă, o aventură comună în care sensul se construiește împreună. Încearcă chiar diseară: alege o poveste frumoasă, citește zece minute cu voce tare, iar apoi trageți împreună un cartonaș. Vei fi uimit de profunzimea discuției care va urma."
    ],
    quote: "Lectura devine cu adevărat o plăcere atunci când nu mai este despre performanță, ci despre conectare și timpul de calitate petrecut împreună."
  },
  2: {
    id: 2,
    category: "Educație",
    date: "28 Apr 2026",
    readTime: "7 min",
    title: "Conectare înainte de corectare – Filozofia din spatele proiectului",
    imageUrl: "/oana.jpg",
    author: "Oana",
    introduction: "În cei peste 17 ani petrecuți la catedră alături de sute de copii, am descoperit un adevăr de neclintit: niciun copil nu poate să asimileze informații, să creeze sau să aibă încredere în el dacă nu se simte mai întâi în siguranță, văzut și acceptat exact așa cum este.",
    paragraphs: [
      "Sistemul educațional actual este construit, din păcate, în jurul evaluărilor constante, al comparațiilor și al rezultatelor imediate. Ca părinți sau profesori, suntem deseori tentați să corectăm imediat: să arătăm greșeala în roșu, să oferim mai multe exerciții, să cerem mai mult efort. Dar corectarea făcută înainte de a stabili o conexiune reală naște doar rezistență și teamă de eșec.",
      "Conectarea înseamnă prezență autentică. Înseamnă să ne coborâm la nivelul ochilor copilului, să îi ascultăm preocupările (oricât de mărunte ni s-ar părea) și să îi validăm emoțiile fără a le minimiza. Când un copil știe că este iubit și apreciat dincolo de greșelile sau notele sale, mintea lui se deschide către învățare cu o curiozitate naturală și nestigmatizată.",
      "Proiectul „Povești de-acasă” s-a născut direct din această viziune. Mi-am dorit să creez o unealtă care să ajute familiile să se conecteze zilnic, fără presiunea performanței. Cartonașele noastre nu au răspunsuri greșite și nu sunt concepute pentru testare. Ele sunt doar scântei de dialog menite să ghideze mintea copilului spre auto-exprimare liberă.",
      "Când transformăm dialogul într-o zonă liberă de judecată, copilul capătă curajul de a argumenta, de a-și exprima propriile valori și de a greși cu blândețe. Educația adevărată nu începe cu deschiderea manualului, ci cu stabilirea unei relații de încredere deplină."
    ],
    quote: "Greșeala este doar o oportunitate de învățare, iar dialogul sincer este cel mai scurt drum către inima unui copil."
  },
  3: {
    id: 3,
    category: "Dezvoltare",
    date: "15 Apr 2026",
    readTime: "6 min",
    title: "Cum dezvoltăm gândirea critică prin întrebări inteligente",
    imageUrl: "/cartonase-2.jpg",
    author: "Oana",
    introduction: "Într-o epocă saturată de ecrane, stimuli vizuali și informație de-a gata, abilitatea copiilor de a pune la îndoială, de a analiza și de a discerne devine una dintre cele mai importante abilități de viață pe care le putem cultiva.",
    paragraphs: [
      "Gândirea critică nu înseamnă a fi sceptic sau nemulțumit de tot ce te înconjoară. Înseamnă, în esență, capacitatea de a gândi independent și de a nu lua lucrurile ca fiind adevărate doar pentru că cineva le-a afirmat cu autoritate. Adesea, educația formală pune accentul pe memorare, învățându-i pe elevi *ce* să gândească, în loc să îi ghideze despre *cum* să gândească singuri.",
      "Jocul de cartonașe „Explorăm Povești” este structurat special urmărind cele 6 niveluri cognitive ale Taxonomiei lui Bloom: Cunoaștere, Înțelegere, Aplicare, Analiză, Evaluare și Creație. Această trecere graduală de la simplu la complex antrenează circuitele gândirii critice într-un mod natural și neintruziv.",
      "În loc să punem doar întrebări de bază (Cine? Ce? Unde?), urcăm treptat nivelul provocării: „De ce crezi că personajul a reacționat diferit față de prietenul său?” (Analiză) sau „Cum s-ar fi rezolvat conflictul dacă povestea se petrecea în spațiu?” (Creație). Acest mod de abordare stimulează empatia, flexibilitatea mentală și capacitatea de structurare a propriilor idei.",
      "Cultivarea gândirii critice se face pas cu pas, prin dialog. Oferindu-i copilului instrumente ludice cu care să exploreze perspective multiple, îi oferi de fapt libertatea de a deveni un adult greu de manipulat și capabil să ia decizii responsabile în viață."
    ],
    quote: "Un copil care învață să pună întrebări bune astăzi va fi adultul care va găsi soluții geniale mâine."
  }
};

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  const post = postsData[postId];

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#FDF8F3] px-4 text-center">
        <h2 className="text-3xl font-serif font-bold text-text-main mb-4">Articolul nu a fost găsit</h2>
        <p className="text-text-muted mb-8 font-light">Articolul pe care îl cauți nu există sau a fost mutat.</p>
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 bg-[#3D2B1F] text-white py-3.5 px-8 rounded-xl hover:bg-brand-orange transition-colors text-sm font-semibold uppercase tracking-wider"
        >
          <ArrowLeft size={16} /> Înapoi la Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FDF8F3] min-h-screen py-12 sm:py-20 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-text-muted hover:text-brand-orange transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} /> Înapoi la Blog
          </Link>
        </div>

        {/* Article Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 text-left mb-10"
        >
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold tracking-wider uppercase text-text-muted">
            <span className="px-3.5 py-1 bg-brand-purple-light border border-brand-purple/15 text-brand-purple rounded-full text-[10px] font-bold">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5"><Calendar size={13} /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-main leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between border-b border-orange-100/50 pb-6 pt-2">
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-text-main">
              <div className="w-10 h-10 rounded-full bg-brand-orange-light/40 flex items-center justify-center text-brand-orange border border-brand-orange/15 font-serif italic text-lg font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-text-main">Scris de {post.author}</p>
                <p className="text-[10px] sm:text-xs text-text-muted font-light">Formator & Învățător</p>
              </div>
            </div>
            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(window.location.href);
                  alert("Link copiat în clipboard!");
                } catch {
                  // clipboard API indisponibil (context non-secure) sau refuzat
                  alert("Nu am putut copia automat. Copiază manual link-ul din bara de adrese.");
                }
              }}
              className="text-text-muted hover:text-brand-orange p-2 rounded-full hover:bg-white transition-colors"
              title="Copiază link-ul articolului"
            >
              <Share2 size={18} />
            </button>
          </div>
        </motion.div>

        {/* Featured Image framed elegantly */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="aspect-[16/9] rounded-[2.5rem] overflow-hidden bg-white shadow-xl shadow-orange-950/5 relative border-4 border-white mb-12"
        >
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Content body */}
        <motion.article 
          {...fadeInUp}
          className="text-left space-y-8 text-text-main text-base sm:text-lg leading-relaxed font-light"
        >
          {/* Introduction paragraph with larger text */}
          <p className="font-medium text-[#5E4E45] border-l-4 border-brand-orange pl-4 py-1.5 italic text-lg sm:text-xl leading-relaxed">
            {post.introduction}
          </p>

          {post.paragraphs.slice(0, 2).map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          {/* Quote Section Callout */}
          <div className="bg-[#FAF1E6] p-8 sm:p-10 rounded-[2rem] border border-orange-100/50 my-10 text-center font-serif italic text-lg sm:text-xl text-[#3D2B1F] relative">
            <span className="absolute top-4 left-6 text-brand-orange text-6xl opacity-10 select-none">“</span>
            <p className="relative z-10 leading-relaxed">
              {post.quote}
            </p>
          </div>

          {post.paragraphs.slice(2).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.article>

        {/* Related Footer Links */}
        <div className="border-t border-orange-200/20 pt-10 mt-16 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-brand-orange hover:text-orange-600 font-bold transition-colors uppercase tracking-wider text-xs"
          >
            <ArrowLeft size={14} /> Înapoi la toate articolele
          </Link>
        </div>

      </div>
    </div>
  );
}
