import { useState } from 'react';
import { BookOpen, Heart, Palette, Sparkles, ArrowRight, ShieldCheck, Truck, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.15 }
};

function Hero() {
  return (
    <section className="bg-[#FDF8F3] pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[#FAF1E6] rounded-l-[5rem] -z-10 translate-x-20 md:translate-x-32" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Headline taking up approx 60% with Bold Editorial look */}
          <motion.div 
            className="lg:col-span-7 space-y-8 text-left z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded-full text-xs font-semibold tracking-wider text-brand-orange uppercase">
              <Sparkles size={14} /> Educație cu suflet
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-bold leading-[1.1] tracking-tight text-text-main">
              Ajută-ți copilul să înțeleagă cu adevărat <span className="font-serif font-light italic text-brand-orange sm:block sm:mt-2">ce citește</span>
            </h1>
            
            <p className="text-base sm:text-lg text-text-muted max-w-xl font-light leading-relaxed">
              Cartonașe și resurse care transformă lectura într-o aventură pentru tine și copilul tău.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link to="/shop" className="block bg-brand-orange hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-2xl text-center transition-all shadow-md shadow-orange-900/10 text-sm tracking-wider uppercase">
                  Descoperă Cartonașele
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Side Illustration Positioned Asymmetrically to the Right */}
          <motion.div 
            className="lg:col-span-5 relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute -inset-4 bg-brand-purple-light/50 rounded-[3.5rem] transform rotate-3 -z-10 shadow-inner" />
            <div className="absolute inset-0 bg-brand-orange-light/25 rounded-[3rem] transform -rotate-2 -z-10 scale-102" />
            
            <div className="aspect-[4/3] sm:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-orange-950/10 relative border-8 border-white bg-white p-6 sm:p-8 flex items-center justify-center">
              <img 
                src="/logo-mare.jpg" 
                alt="Logo Povești de-acasă" 
                className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Soft decorative label element typical for editorial designs */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-xl shadow-orange-950/5 max-w-[200px] border border-orange-100 hidden sm:block">
              <span className="font-serif italic text-brand-orange text-lg block leading-tight">Cititul împreună</span>
              <span className="text-xs text-text-muted mt-1 block">creează cele mai frumoase amintiri de acasă.</span>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <BookOpen className="text-brand-purple" size={28} />,
      title: "Literatura înseamnă mai mult",
      description: "Un copil care înțelege ce citește va înțelege și lumea din jurul lui. Noi îl ajutăm să treacă dincolo de cuvinte – spre sens, empatie și gândire proprie.",
      bgColor: "bg-brand-purple-light/25",
      borderColor: "border-brand-purple/10"
    },
    {
      icon: <Heart className="text-brand-orange" size={28} />,
      title: "Conexiune prin lectură",
      description: "Poveștile îi apropie pe oameni. Și pe părinți de copiii lor. O poveste citită împreună și câteva întrebări pot deveni ritualul vostru de fiecare zi.",
      bgColor: "bg-brand-orange-light/25",
      borderColor: "border-brand-orange/10"
    },
    {
      icon: <Palette className="text-brand-purple" size={28} />,
      title: "Creativitate și gândire critică",
      description: "Un copil care știe să întrebe va ști să și răspundă – toată viața. Întrebările potrivite îl învață să gândească singur, să argumenteze și să aibă încredere în ideile lui.",
      bgColor: "bg-brand-purple-light/25",
      borderColor: "border-brand-purple/10"
    }
  ];

  return (
    <section className="py-24 bg-[#FAF1E6] border-y border-orange-100/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Offset Title */}
        <div className="grid md:grid-cols-12 gap-6 mb-16 items-end">
          <div className="md:col-span-8 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange/80 block mb-2">Filozofia Noastră</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-main">
              De ce Povești de-acasă?
            </h2>
          </div>
          <div className="md:col-span-4 text-left md:text-right hidden md:block">
            <span className="font-serif italic text-lg text-text-muted block">Educație cu blândețe și conexiune.</span>
          </div>
        </div>
        
        {/* Aligned features grid with hover animations */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 md:gap-10 mt-8"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`flex flex-col space-y-6 p-6 sm:p-8 lg:p-10 rounded-[2.5rem] bg-white border ${f.borderColor} shadow-sm hover:shadow-xl hover:shadow-orange-950/10 transition-all duration-500 hover:-translate-y-1`}
            >
              <div className={`w-14 h-14 rounded-2xl ${f.bgColor} flex items-center justify-center mb-2 shadow-inner`}>
                {f.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-text-main tracking-tight">{f.title}</h3>
              <p className="text-text-muted text-sm font-light leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Placeholder container to balance the translation on desktop */}
        <div className="h-0 md:h-12" />
        
      </div>
    </section>
  );
}

function ProductPromo() {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-orange-100/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Asymmetrical Big Product Image with diagonal tiles - Bleeding style */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-6 order-2 lg:order-1 relative px-4 md:px-0"
          >
            <div className="absolute inset-0 bg-brand-orange-light/40 rounded-[3.5rem] transform -rotate-3 scale-102 -z-20" />
            <div className="absolute inset-0 bg-white rounded-[3rem] transform rotate-1 scale-102 -z-10 shadow-2xl shadow-orange-950/5 border border-orange-100/30" />
            
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-xl border-4 border-white bg-white">
              <img 
                src="/cartonase-1.jpg" 
                alt="Cutie cartonașe Explorăm Povești" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Design accents */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center text-white font-serif italic text-lg shadow-lg">
              90
            </div>
          </motion.div>
          
          {/* Product details on the right side */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-6 order-1 lg:order-2 space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 bg-brand-purple-light text-text-main border border-brand-purple/20 font-semibold rounded-full text-xs tracking-wider uppercase mb-5">
                Joc Educațional
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-4 text-text-main">
                Explorăm Povești – 90 de cartonașe pentru mințile curioase
              </h2>
              <p className="text-text-muted font-light text-base sm:text-lg leading-relaxed">
                Un joc educațional care transformă orice poveste citită într-o conversație memorabilă – pentru copii de 6-11 ani, acasă și la clasă.
              </p>
            </div>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 py-2 border-y border-orange-100/40 divide-y sm:divide-y-0 lg:divide-y divide-orange-100/20">
              {[
                "Funcționează cu orice carte – nu trebuie să cumperi nimic altceva.",
                "90 de întrebări pe 6 niveluri de gândire – de la simpla amintire până la reflecție și gândire critică.",
                "Acasă, la clasă sau în grup – se adaptează oricărui context.",
                "Îl învață să gândească cu voce proprie – explică, argumentează și își susține ideile cu încredere."
              ].map((text, i) => (
                <li key={i} className="flex gap-3 text-sm pt-3 sm:pt-0 lg:pt-3 first:pt-0">
                  <div className="w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-muted font-medium text-left">{text}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-2">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block w-full sm:w-auto">
                <Link to="/shop" className="group text-center bg-brand-orange hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded-2xl transition-all shadow-md shadow-orange-950/10 flex items-center justify-center gap-2 text-sm tracking-wider uppercase">
                  Comandă acum <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-text-muted/70 mt-4 ml-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-brand-orange" /> Plată securizată
                </span>
                <span className="flex items-center gap-1.5">
                  <Truck size={14} className="text-brand-purple" /> Livrare în toată România
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles size={14} className="text-brand-orange" /> Creat de un profesor român
                </span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="despre" className="py-24 md:py-32 bg-white border-b border-orange-100/30 overflow-hidden text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header centered */}
        <motion.div {...fadeInUp} className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">Inima Proiectului</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-main">
            Despre mine
          </h2>
        </motion.div>
        
        {/* Profile photo centered and larger */}
        <motion.div
          {...fadeInUp}
          className="relative w-full max-w-[280px] h-[280px] sm:max-w-[420px] sm:h-[420px] mx-auto mb-12 sm:mb-16"
        >
          <div className="absolute -inset-4 bg-[#FDF8F3] rounded-[3.5rem] transform -rotate-3 -z-10 border border-orange-100 shadow-inner" />
          <div className="absolute inset-0 bg-brand-orange-light/20 rounded-[3rem] transform rotate-2 -z-10 scale-102" />
          
          <div className="w-full h-full rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white">
            <img 
              src="/oana.jpg" 
              alt="Oana, fondatoare Povești de-acasă" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>
        
        {/* Bio statement text centered and beautifully styled */}
        <motion.div 
          {...fadeInUp} 
          className="space-y-8 max-w-3xl mx-auto text-center"
        >
          <h3 className="font-serif italic font-semibold text-brand-orange text-2xl sm:text-3xl leading-snug">
            Bine ai venit în lumea Povești de-acasă
          </h3>
          
          <div className="space-y-6 text-text-muted text-base sm:text-lg font-light leading-relaxed">
            <p>
              Sunt Oana — învățătoare, mamă și un om care crede cu toată inima în puterea relației dintre copil și adultul care îl însoțește în creștere. De mai bine de 17 ani lucrez alături de copii și am descoperit că educația adevărată înseamnă conectare, încredere, siguranță și timp petrecut împreună.
            </p>
            
            <p>
              Cred cu tărie că un copil nu poate fi definit de o notă sau de dificultățile pe care le are. Fiecare copil are nevoie de un adult care să îi vadă valoarea și posibilitățile, înainte de orice etichetă. De aceea, am creat <span className="font-serif italic font-semibold text-brand-orange text-xl">Povești de-acasă</span> — din dorința de a transforma lectura într-un prilej de apropiere, conversație și descoperire emoțională.
            </p>
            
            <p>
              Aici vei descoperi universul jocului „Explorăm povești”, un set de cartonașe creat pentru a antrena mințile curioase ale copiilor între 6 și 11 ani. În prezent, îmi continui formarea în consilierea parentală, pentru că îmi doresc să pot susține și mai profund familiile în călătoria lor frumoasă de creștere a copiilor.
            </p>
          </div>
          
          <div className="pt-6 max-w-2xl mx-auto">
            <p className="border-t border-b border-orange-100/60 py-6 italic font-serif text-lg sm:text-xl text-[#5E4E45]">
              "Cred în educația cu blândețe, în puterea întrebărilor bune și în magia care apare atunci când un copil simte că este ascultat cu adevărat."
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      quote: "Cartonașele Oanei au schimbat complet seara de lectură în familia noastră. Copiii nu doar că ascultă atenți, dar de-abia așteaptă să tragem câte un cartonaș ca să dezbatem ce ar fi făcut ei în locul personajelor. Recomand din tot sufletul!",
      author: "Elena Vasilescu",
      info: "Mamă a doi copii (7 și 9 ani)"
    },
    {
      quote: "Este uimitor cum un set de întrebări atât de bine gândite poate deschide conversații atât de profunde cu un copil de 8 ani. Îl ajută foarte mult să își exprime emoțiile și să gândească critic. Un produs excepțional realizat cu mult suflet.",
      author: "Andrei Popescu",
      info: "Tată (8 ani)"
    },
    {
      quote: "Le folosesc atât acasă cu fiica mea, cât și la clasă cu elevii mei. Întrebările sunt structurate extraordinar de bine pe nivelurile de înțelegere. Copiii sunt stimulați să argumenteze și să aibă încredere în propriile lor idei.",
      author: "Raluca Marin",
      info: "Mamă și învățătoare"
    }
  ];

  return (
    <section id="testimoniale" className="py-24 md:py-32 bg-[#FDF8F3] border-b border-orange-100/30 overflow-hidden text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header centered */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">Gânduri de la Părinți</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-main font-serif">
            Testimoniale
          </h2>
          <div className="w-16 h-0.5 bg-brand-orange mx-auto mt-4" />
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 md:gap-10 mt-8"
        >
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              className="flex flex-col justify-between p-8 sm:p-10 rounded-[2.5rem] bg-white border border-orange-100/30 shadow-sm hover:shadow-xl hover:shadow-orange-950/5 transition-all duration-500 hover:-translate-y-1 text-left relative"
            >
              <div className="space-y-6">
                <span className="font-serif text-brand-orange text-6xl block leading-none select-none absolute top-4 left-6 opacity-20">”</span>
                <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed relative z-10 pt-4">
                  {r.quote}
                </p>
              </div>
              <div className="mt-8 border-t border-orange-100/20 pt-6">
                <h4 className="font-serif font-bold text-text-main text-lg">{r.author}</h4>
                <p className="text-brand-orange text-xs font-medium tracking-wide uppercase mt-1">{r.info}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function Faq() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Cum funcționează jocul „Explorăm Povești”?", a: "Jocul constă în 90 de cartonașe cu întrebări structurate pe 6 niveluri de gândire. Citiți o poveste împreună (orice carte!), trageți un cartonaș și discutați răspunsurile copilului. Transformă lectura pasivă într-o conversație interactivă." },
    { q: "Pentru ce categorie de vârstă sunt recomandate?", a: "Sunt ideale pentru copii între 6 și 11 ani (școala primară). Limbajul este adaptat pentru a fi clar, prietenos și ușor de înțeles, stimulând curiozitatea naturală a copilului." },
    { q: "Trebuie să cumpăr o carte anume pentru a le folosi?", a: "Nu! Aceasta este frumusețea jocului. Întrebările sunt universale și pot fi aplicate pe orice text narativ: povești scrise, basme, lecturi școlare sau chiar desene animate." },
    { q: "Cum ajută acest joc relația dintre părinte și copil?", a: "Jocul este un instrument puternic de conectare emoțională. Încurajează copilul să își exprime opiniile, sentimentele și valorile, oferind părintelui ocazia perfectă de a-l asculta fără a-l evalua sau corecta." },
    { q: "Pot folosi cartonașele și la clasă dacă sunt învățător?", a: "Da, absolut! Cartonașele sunt instrumente excelent construite pentru activități de grup, orele de limba română sau cluburi de lectură, stimulând participarea activă și argumentarea colegială." },
    { q: "Cât durează livrarea și cum se face?", a: "Livrarea este gratuită și se face rapid în toată România prin curier rapid sau la orice locker Sameday EasyBox, în termen de 1-3 zile lucrătoare." }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAF1E6]/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">Informații Utile</span>
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block text-text-main font-serif">
            Ai întrebări?
          </h2>
          <div className="w-16 h-0.5 bg-brand-orange mx-auto mt-4" />
        </motion.div>
        
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, i) => {
            const isOpen = expandedFaq === i;
            return (
              <motion.div 
                key={i} 
                {...fadeInUp}
                className={`bg-white rounded-3xl border border-orange-100/50 p-6 sm:p-8 transition-all duration-300 ${
                  isOpen 
                    ? 'shadow-lg shadow-orange-950/5 border-brand-orange/20' 
                    : 'hover:shadow-md hover:shadow-orange-950/2'
                }`}
              >
                <button 
                  type="button"
                  onClick={() => setExpandedFaq(isOpen ? null : i)}
                  className="w-full flex justify-between items-center text-left font-serif font-bold text-lg text-text-main group hover:text-brand-orange transition-colors"
                >
                  <span className="text-base sm:text-lg tracking-tight pr-4">{faq.q}</span>
                  <motion.span 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-brand-orange flex-shrink-0 bg-brand-orange-light/20 p-2 rounded-full group-hover:bg-brand-orange/10 transition-colors"
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-text-muted text-sm sm:text-base leading-relaxed font-light pt-4 border-t border-orange-100/20 mt-4 pr-2 sm:pr-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-[#FDF8F3]">
      <Hero />
      <Features />
      <ProductPromo />
      <Testimonials />
      <About />
      <Faq />
    </div>
  );
}
