import { Calendar, Clock, ChevronRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
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

export default function Blog() {
  const posts = [
    {
      id: 1,
      category: "Lectură",
      date: "12 Mai 2026",
      readTime: "5 min",
      title: "Cum transformăm cititul dintr-o obligație într-o plăcere",
      excerpt: "Dacă copilul tău refuză să citească, poate că abordarea e de vină. Câteva idei simple pentru a face din lectură un moment magic de conectare și joacă.",
      author: "Oana",
      imageUrl: "/cartonase-4.jpg"
    },
    {
      id: 2,
      category: "Educație",
      date: "28 Apr 2026",
      readTime: "7 min",
      title: "Conectare înainte de corectare – Filozofia din spatele proiectului",
      excerpt: "Notele și performanța contează mai puțin decât siguranța emoțională. Află de ce copiii au nevoie de conectare pentru a putea învăța cu drag.",
      author: "Oana",
      imageUrl: "/oana.jpg"
    },
    {
      id: 3,
      category: "Dezvoltare",
      date: "15 Apr 2026",
      readTime: "6 min",
      title: "Cum dezvoltăm gândirea critică prin întrebări inteligente",
      excerpt: "Trăim într-o lume plină de ecrane și informații. Descoperă cum antrenăm mintea copilului să gândească independent cu ajutorul taxonomiei Bloom.",
      author: "Oana",
      imageUrl: "/cartonase-2.jpg"
    }
  ];

  return (
    <div className="w-full bg-[#FDF8F3] min-h-screen py-16 md:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Magazine-style Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-left mb-20 border-b border-orange-100/40 pb-12 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-purple-light text-text-main border border-brand-purple/25 rounded-full text-xs font-semibold tracking-wider uppercase mb-5">
            <BookOpen size={12} /> Publicație bilunară
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-text-main mb-6 leading-tight">
            Blogul Povești <span className="font-light italic text-brand-orange">de-acasă</span>
          </h1>
          
          <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            Gânduri, sfaturi și povești despre educația cu blândețe, importanța lecturii în familie și conectarea armonioasă cu copilul tău.
          </p>
        </motion.div>

        {/* Asymmetrical List / Staggered Cards feed */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="space-y-16 md:space-y-24"
        >
          {posts.map((post, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={post.id} 
                variants={fadeInUp}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } bg-white rounded-[3rem] shadow-2xl shadow-orange-950/2 md:shadow-orange-950/4 border border-orange-100/20 overflow-hidden group transition-all duration-500 hover:shadow-orange-950/10 hover:border-orange-100/40`}
              >
                {/* Image panel with zoom action */}
                <div className="lg:w-2/5 overflow-hidden aspect-[4/3] lg:aspect-auto min-h-[280px] relative">
                  <div className="absolute inset-0 bg-[#FAF1E6] opacity-10 mix-blend-multiply pointer-events-none" />
                  <motion.img 
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                {/* Typography details block */}
                <div className="lg:w-3/5 p-8 sm:p-12 flex flex-col justify-center text-left">
                  
                  <div className="flex flex-wrap items-center gap-4 text-[11px] font-semibold tracking-wider uppercase text-text-muted/70 mb-5">
                    <span className="px-3.5 py-1 bg-brand-orange-light/40 border border-brand-orange/15 text-[#AB6E4E] rounded-full text-[10px] font-bold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5"><Calendar size={13} strokeWidth={2} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={13} strokeWidth={2} /> {post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 tracking-tight text-text-main group-hover:text-brand-orange transition-colors leading-tight">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="text-text-muted font-light text-sm sm:text-base mb-8 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {/* Human-centric elegant author card footer */}
                  <div className="flex justify-between items-center mt-auto pt-6 border-t border-orange-100/30">
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-text-main tracking-wide">
                      <div className="w-9 h-9 rounded-full bg-brand-purple-light flex items-center justify-center text-brand-purple border-2 border-white shadow-md font-serif italic text-base font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <span>Scris de {post.author}</span>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="text-brand-orange font-bold hover:text-orange-600 flex items-center gap-1 py-1.5 px-4 bg-brand-orange-light/10 hover:bg-brand-orange-light/30 border border-brand-orange/10 rounded-full transition-colors text-xs uppercase tracking-wider"
                    >
                      Citește <ChevronRight size={13} />
                    </Link>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
}
