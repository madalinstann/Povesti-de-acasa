import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ChevronLeft, BookOpen, Share2 } from 'lucide-react';
import { motion } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

interface PostContent {
  title: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  paragraphs: string[];
  quote: string;
}

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();

  const blogData: Record<number, PostContent> = {
    1: {
      title: "Cum să construiești o relație bazată pe încredere cu copilul tău",
      category: "Conexiune",
      date: "12 Mai 2026",
      readTime: "5 min",
      imageUrl: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1200&auto=format&fit=crop",
      paragraphs: [
        "Încrederea dintre un părinte și copilul său nu se construiește prin gesturi mari și spectaculoase, ci prin momente mărunte, repetate zi de zi cu consecvență și blândețe. Ca învățătoare și mamă, am observat de nenumărate ori că un copil se deschide cu adevărat atunci când simte că spațiul dintre el și adult este unul sigur – lipsit de judecată, etichete sau grabă.",
        "Primul pas pentru a stabili o conexiune reală este ascultarea activă. De foarte multe ori suntem tentați să oferim soluții rapide sau sfaturi chiar înainte ca cel mic să termine de povestit ce s-a întâmplat la școală sau la grădiniță. Când facem asta, mesajul subtil pe care îl transmitem este: 'Știu eu mai bine ce simți'. Dacă în schimb ne oprim, ne coborâm la nivelul ochilor lui și pur și simplu ascultăm, copilul se va simți văzut și înțeles.",
        "Un alt aspect esențial este validarea emoțiilor. Nu există emoții greșite – doar comportamente care pot fi nepotrivite. Când un copil plânge din cauza unei jucării stricate sau se teme de întuneric, a-i spune 'nu ai de ce să plângi' sau 'ești băiat mare, nu te teme' îi invalidează trăirea internă. În schimb, formulări precum 'văd că ești foarte supărat din cauza asta' sau 'este în regulă să îți fie teamă, sunt aici cu tine' construiesc o punte solidă de siguranță emoțională.",
        "Timpul de calitate petrecut împreună joacă un rol crucial. Acesta nu trebuie să fie lung, ci neîntrerupt. 15-20 de minute pe zi în care ecranul telefonului este oprit, iar atenția noastră se îndreaptă exclusiv către cel mic – fie că citim o poveste, ne jucăm sau pur și simplu stăm de vorbă – valorează mai mult decât ore întregi de prezență fizică dar absență mentală."
      ],
      quote: "Încrederea se construiește în acele momente simple în care alegi să te oprești din graba zilei pentru a-ți privi copilul în ochi și a-l asculta cu adevărat."
    },
    2: {
      title: "De ce copiii au nevoie de limite clare și blânde",
      category: "Educație",
      date: "28 Apr 2026",
      readTime: "7 min",
      imageUrl: "https://images.unsplash.com/photo-1545060130-c01503b41a01?q=80&w=1200&auto=format&fit=crop",
      paragraphs: [
        "Există o neînțelegere frecventă în parenting conform căreia educația cu blândețe înseamnă lipsa regulilor sau un stil permisiv. Nimic mai neadevărat. Copiii au o nevoie profundă de limite – acestea nu reprezintă pedepse, ci funcționează ca niște ziduri de siguranță care le arată unde se termină spațiul lor sigur și unde începe lumea exterioară.",
        "Când limitele lipsesc sau sunt inconsistente (într-o zi avem o regulă, iar a doua zi o ignorăm pentru că suntem prea obosiți), copilul devine anxios. El va încerca constant să testeze limitele, nu pentru a ne supăra, ci pentru a verifica dacă sunt destul de rezistente încât să îl țină în siguranță. Limitele clare îi oferă predictibilitate.",
        "Secretul constă în modul în care comunicăm și menținem aceste limite. O putem face cu blândețe, dar cu fermitate. Fermitatea nu înseamnă un ton ridicat al vocii sau amenințări – acestea doar activează frica în creierul copilului și blochează învățarea. O limită blândă sună așa: 'Înțeleg că vrei să te mai joci pe tabletă (validarea dorinței), dar timpul tău pentru ecrane s-a terminat (limita clară). Putem alege să citim o carte sau să colorăm împreună acum (alternativa).'",
        "Datoria noastră ca adulți nu este să evităm supărarea copilului atunci când punem o limită, ci să îl însoțim în acea supărare. Este firesc ca cel mic să protesteze sau să plângă când îi oprim ecranul. Treaba noastră este să rămânem calmi, să îi oferim o îmbrățișare dacă o dorește și să îi spunem: 'Văd că ești supărat și e în regulă să fii supărat, dar regula rămâne'. Astfel, el învață că regulile sunt sigure și că dragostea noastră nu dispare atunci când apare o frustrare."
      ],
      quote: "Fermitatea îi arată copilului ce are de făcut, în timp ce blândețea îi arată că este iubit chiar și atunci când greșește sau este frustrat."
    },
    3: {
      title: "Cum transformăm cititul dintr-o obligație într-o plăcere",
      category: "Lectură",
      date: "15 Apr 2026",
      readTime: "4 min",
      imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1200&auto=format&fit=crop",
      paragraphs: [
        "Lectura este adesea associată în mintea copiilor cu temele pentru școală, cu evaluările și cu obligativitatea de a citi un număr stabilit de pagini. Când cititul devine o sarcină de bifat, magia poveștilor se stinge rapid. Ca învățătoare, lupt zilnic să le readuc copiilor bucuria de a explora lumile fantastice ascunse între coperți.",
        "Un prim pas esențial este modelul personal. Copiii nu fac întotdeauna ceea ce le spunem, dar fac aproape întotdeauna ceea ce ne văd pe noi făcând. Dacă ne văd citind o carte fizică în momentele noastre de relaxare, vor înțelege că lectura este o activitate plăcută, nu o corvoadă. Dacă ne văd doar pe telefoane, vor prefera telefoanele.",
        "De asemenea, lăsați copiii să își aleagă singuri cărțile, chiar dacă uneori alegerile lor par prea simple, pline de ilustrații sau axate pe teme comerciale. Pentru a dezvolta apetitul pentru lectură, cel mai important este ca ei să descopere că cititul poate fi distractiv. Odată ce obiceiul este format, putem ghida selecția către lecturi mai complexe și profunde.",
        "În final, cheia de boltă este interacțiunea. Nu citiți doar 'pentru' ei, ci 'împreună cu' ei. Puneți întrebări pe parcursul poveștii. În loc de clasica întrebare verificatoare 'despre ce a fost vorba?', folosiți întrebări deschise care le stimulează gândirea și conexiunea emoțională: 'Tu ce ai fi făcut în locul personajului?', 'Cum crezi că se simte acum?', 'Dacă ai putea schimba finalul, cum ar fi?'. În acest mod, lectura devine un dialog cald, un prilej de apropiere și de explorare a propriei lumi interioare."
      ],
      quote: "Cărțile prind viață cu adevărat nu când copiii le parcurg cu ochii, ci când le explorează cu inima, alături de un părinte care îi ascultă."
    }
  };

  const postId = Number(id);
  const post = blogData[postId];

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FDF8F3] flex flex-col justify-center items-center px-4">
        <h2 className="text-2xl font-serif font-bold text-text-main mb-4">Articolul nu a fost găsit</h2>
        <Link to="/blog" className="text-brand-orange font-bold flex items-center gap-1 hover:underline">
          <ChevronLeft size={16} /> Înapoi la blog
        </Link>
      </div>
    );
  }

  return (
    <article className="w-full bg-[#FDF8F3] min-h-screen py-16 md:py-24 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation back */}
        <div className="mb-10 text-left">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-text-muted hover:text-brand-orange transition-colors py-2"
          >
            <ChevronLeft size={14} /> Înapoi la articole
          </Link>
        </div>
        
        {/* Header Block */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-left space-y-6 mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold tracking-wider uppercase text-text-muted/70">
            <span className="px-3.5 py-1 bg-brand-orange-light/40 border border-brand-orange/15 text-[#AB6E4E] rounded-full text-[10px] font-bold">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5"><Calendar size={13} /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readTime}</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight text-text-main tracking-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-3 pt-4 border-t border-orange-100/40">
            <div className="w-10 h-10 rounded-full bg-brand-purple-light flex items-center justify-center text-brand-purple border-2 border-white shadow-sm font-serif italic text-lg font-bold">
              O
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-text-main">Scris de Oana</p>
              <p className="text-xs text-text-muted">Învățătoare & Fondator</p>
            </div>
          </div>
        </motion.header>

        {/* Hero image styled */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white mb-16 bg-white"
        >
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Article content block */}
        <motion.div 
          {...fadeInUp}
          className="text-left space-y-8 max-w-2xl mx-auto"
        >
          <div className="space-y-6 text-text-muted text-base sm:text-lg leading-relaxed font-light text-justify">
            {post.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Premium blockquote typical of layout */}
          <div className="py-8 my-10 border-t border-b border-orange-100/60 text-center">
            <p className="italic font-serif text-lg sm:text-xl text-[#5E4E45] leading-relaxed max-w-lg mx-auto">
              "{post.quote}"
            </p>
          </div>

          <div className="space-y-6 text-text-muted text-base sm:text-lg leading-relaxed font-light text-justify">
            <p>
              Fiecare zi ne aduce oportunitatea de a crea mici punți de înțelegere și apropiere în relația cu copiii noștri. Fie că alegem să le oferim atenția noastră deplină pe parcursul unei lecturi, fie că ascultăm cu blândețe micile lor supărări, aceste gesturi sunt cele care pun bazele unui adult echilibrat, empatic și încrezător în propriile forțe.
            </p>
          </div>
          
          {/* Share/Footer */}
          <div className="pt-12 border-t border-orange-100/30 flex justify-between items-center text-text-muted">
            <div className="flex items-center gap-2">
              <BookOpen size={14} className="text-brand-orange" />
              <span className="text-xs uppercase tracking-wider font-semibold">Povești de-acasă</span>
            </div>
            
            <button 
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link-ul articolului a fost copiat în clipboard!");
              }}
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider hover:text-brand-orange transition-colors"
            >
              <Share2 size={13} /> Distribuiți articolul
            </button>
          </div>
        </motion.div>
        
      </div>
    </article>
  );
}
