import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, ShieldCheck, Truck, ChevronDown, CheckCircle, HelpCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

export default function Shop() {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const images = [
    "/cartonase-1.jpg",
    "/cartonase-2.jpg",
    "/cartonase-3.jpg",
    "/cartonase-4.jpg"
  ];

  return (
    <div className="w-full bg-[#FDF8F3] overflow-hidden relative">
      
      {/* Premium blurry background gradient orbs (mesh gradients) */}
      <div className="absolute top-[15%] left-[5%] w-[25rem] h-[25rem] bg-brand-orange/10 rounded-full blur-[100px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '9s' }} />
      <div className="absolute bottom-[25%] right-[5%] w-[28rem] h-[28rem] bg-brand-purple/15 rounded-full blur-[110px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '13s' }} />
      
      {/* Product Details Section (Kinfolk Editorial Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
        
        {/* Editorial Header */}
        <div className="text-center mb-16 border-b border-orange-100/40 pb-8 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">Selecția Noastră</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-text-main leading-tight">
            Magazinul Povești <span className="font-light italic text-brand-purple">de-acasă</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Large Dramatic Product Image, taking up 58% of grid (col span 7) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Main Product View framed like an art canvas */}
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-orange via-white to-brand-purple rounded-[3.15rem] opacity-25 blur-[5px] group-hover:opacity-35 transition-opacity duration-700 -z-10" />
              <div className="aspect-square rounded-[3rem] overflow-hidden bg-white shadow-2xl shadow-orange-950/5 relative border-8 border-white">
                <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full border border-orange-100/50 text-xs font-semibold uppercase tracking-wider text-text-main flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> În stoc
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeImage}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    src={images[activeImage]} 
                    alt="Cartonașe educaționale" 
                    className="w-full h-full object-cover" 
                  />
                </AnimatePresence>
              </div>
            </div>
            
            {/* Gallery Thumbnails layout */}
            <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
              {images.map((img, i) => (
                <motion.button 
                  key={i} 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 relative bg-white ${
                    activeImage === i 
                      ? 'border-brand-orange ring-4 ring-orange-500/10 shadow-lg' 
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumb și detalii ${i+1}`} className="w-full h-full object-cover" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Details Sidebar occupying col span 5 centered */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-start space-y-8 text-center items-center"
          >
            <div className="text-center flex flex-col items-center">
              <span className="inline-block px-4 py-1.5 bg-brand-purple-light text-[#8A5A5A] font-semibold rounded-full text-xs tracking-wider uppercase mb-5">
                Vârsta recomandată: 6-11 ani
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight mb-4 text-text-main text-center">
                Explorăm Povești – 98 de cartonașe pentru mințile curioase
              </h2>
              
              <div className="flex items-baseline justify-center gap-3 my-5">
                <span className="text-4xl font-serif italic text-brand-orange font-semibold">99 lei</span>
                <span className="text-xl text-text-muted/50 line-through font-light">149 lei</span>
              </div>
              
              <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed font-light text-center max-w-md mx-auto">
                <p>
                  98 de cartonașe educaționale care transformă orice poveste citită într-o conversație memorabilă. Întrebările sunt organizate pe 6 niveluri de gândire, de la simpla amintire până la reflecție și gândire critică.
                </p>
                <p>
                  Funcționează cu orice carte – nu trebuie să cumperi nimic altceva. Perfect pentru acasă, la clasă sau în activități de grup.
                </p>
              </div>
            </div>

            {/* How to use formatted inside centered block card */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-orange-950/5 border border-orange-100/30 text-center flex flex-col items-center w-full">
              <h4 className="font-serif italic text-xl font-bold mb-5 text-brand-orange">Cum se folosește?</h4>
              <ul className="space-y-4 text-left max-w-xs sm:max-w-sm w-full mx-auto">
                {[
                  "Alegeți cartonașele potrivite momentului",
                  "Citiți întrebările și discutați varianta copilului",
                  "Încurajați reflexia și gândirea critică",
                  "Transformați lectura într-un moment de joacă"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex gap-3 text-text-muted text-xs sm:text-sm items-start"
                  >
                    <div className="w-5 h-5 rounded-full bg-brand-purple-light flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[10px] font-bold text-brand-purple">{i+1}</span>
                    </div>
                    <span className="font-light">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-5 w-full">
              <motion.button 
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => navigate('/checkout')}
                className="w-full bg-brand-orange hover:bg-orange-600 text-white font-semibold py-5 px-12 rounded-2xl transition-all shadow-lg shadow-orange-900/10 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
              >
                <Package size={18} />
                Adaugă în coș
              </motion.button>
              
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-text-muted/70 justify-center">
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
      </section>

      {/* Free Guide Download Section */}
      <section className="bg-white py-24 border-t border-orange-100/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Guide image with creative border & shadows */}
            <motion.div 
              {...fadeInUp}
              className="lg:col-span-5 relative flex justify-center order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-brand-purple-light/35 rounded-[3.5rem] transform -rotate-3 -z-10 scale-102" />
              <div className="absolute inset-0 bg-brand-orange-light/25 rounded-[3.0rem] transform rotate-2 -z-10 scale-102" />
              <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white relative hover:-translate-y-2 transition-all duration-500">
                <img 
                  src="/coperta-ghid.png" 
                  alt="Copertă Minighid Explorăm Povești" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* Guide Text and Download Button */}
            <motion.div 
              {...fadeInUp}
              className="lg:col-span-7 space-y-8 text-left order-1 lg:order-2"
            >
              <div>
                <span className="inline-block px-4 py-1.5 bg-brand-orange/10 border border-brand-orange/20 rounded-full text-xs font-semibold tracking-wider text-brand-orange uppercase mb-4">
                  Resursă Gratuită PDF
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold font-serif leading-tight text-text-main">
                  Minighid joc educațional – Explorăm povești
                </h3>
              </div>
              
              <p className="text-text-muted font-light text-base sm:text-lg leading-relaxed">
                Vrei să înțelegi mai bine cum funcționează cele 6 niveluri de gândire și cum poți folosi întrebările pentru a crea momente magice de lectură cu copilul tău? Am pregătit un ghid practic de 9 pagini, plin de sfaturi utile și exemple concrete, pe care îl poți descărca acum gratuit.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 border-y border-orange-100/40">
                {[
                  "Structură detaliată pe cele 6 arii de dezvoltare",
                  "Sfaturi practice pentru conectare și joacă",
                  "9 pagini cu exemple de întrebări și răspunsuri",
                  "Format PDF optimizat pentru telefon sau tabletă"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-text-muted font-medium items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-2">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block w-full sm:w-auto">
                  <a 
                    href="/Minighid joc educational – Exploram povesti.pdf" 
                    download="Minighid joc educational – Exploram povesti.pdf"
                    className="bg-[#3D2B1F] hover:bg-brand-orange text-white font-semibold py-4.5 px-8 rounded-2xl transition-all shadow-md shadow-orange-950/15 flex items-center justify-center gap-2.5 text-sm uppercase tracking-wider"
                  >
                    <svg className="w-4.5 h-4.5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Descarcă Ghidul Gratuit (PDF)
                  </a>
                </motion.div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>


      {/* FAQ Section (Elegant Animated Accordion) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">Informații Utile</span>
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block text-text-main font-serif">
              Ai întrebări?
            </h2>
            <div className="w-16 h-0.5 bg-brand-orange-light mx-auto mt-4" />
          </motion.div>
          
          <div className="space-y-4">
            {[
              { q: "Pentru ce vârstă sunt cartonașele?", a: "Sunt recomandate copiilor între 6 și 11 ani. Limbajul este adaptat pentru a fi înțeles ușor de către ei." },
              { q: "Trebuie să am o carte anume?", a: "Nu! Întrebările sunt universale și pot fi aplicate oricărui text narativ (povești, basme, lecturi școlare)." },
              { q: "Cum se face livrarea?", a: "Livrăm prin curierat rapid sau la lockerele EasyBox în 1-3 zile lucrătoare." },
              { q: "Pot primi factură pe firmă?", a: "Desigur. Te rugăm să ne trimiți datele de facturare după plasarea comenzii." }
            ].map((faq, i) => {
              const isOpen = expandedFaq === i;
              return (
                <motion.div 
                  key={i} 
                  {...fadeInUp}
                  className="bg-white border-b border-orange-200/20 py-5"
                >
                  <button 
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : i)}
                    className="w-full flex justify-between items-center text-left font-serif font-bold text-lg text-text-main group hover:text-brand-orange py-2"
                  >
                    <span className="text-base sm:text-lg tracking-tight">{faq.q}</span>
                    <motion.span 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-brand-orange ml-4 flex-shrink-0"
                    >
                      <ChevronDown size={20} />
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
                        <p className="text-text-muted text-sm sm:text-base leading-relaxed font-light pt-3 pb-2 pr-6">
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
    </div>
  );
}
