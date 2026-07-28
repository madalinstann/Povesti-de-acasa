import { ChevronRight, BookOpen } from 'lucide-react';
import { Link } from '../router';
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
      category: "Minighid",
      status: "Disponibil PDF",
      title: "Minighid joc educațional – Explorăm povești",
      excerpt: "Un material gratuit care explică cele 6 arii de lucru și oferă exemple de întrebări pentru primele conversații cu copilul.",
      imageUrl: "/coperta-ghid.png"
    },
    {
      id: 2,
      category: "Lectură",
      status: "În pregătire",
      title: "Cum folosim întrebările după o poveste",
      excerpt: "Articolul va fi publicat după ce textul final este confirmat de Oana. Până atunci, minighidul PDF rămâne resursa principală.",
      imageUrl: "/cartonase-1.jpg"
    },
    {
      id: 3,
      category: "Părinți",
      status: "În pregătire",
      title: "Idei pentru un ritual de lectură acasă",
      excerpt: "Spațiu rezervat pentru articole viitoare despre lectură, conectare și educație cu blândețe.",
      imageUrl: "/despre.mine.png"
    }
  ];

  return (
    <div className="w-full bg-[#FDF8F3] min-h-screen py-16 md:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center md:text-left flex flex-col items-center md:items-start mb-20 border-b border-orange-100/40 pb-12 max-w-3xl mx-auto md:mx-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-purple-light text-text-main border border-brand-purple/25 rounded-full text-xs font-semibold tracking-wider uppercase mb-5">
            <BookOpen size={12} /> Resurse pentru părinți
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-text-main mb-6 leading-tight">
            Blogul Povești <span className="font-light italic text-brand-orange">de-acasă</span>
          </h1>
          
          <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            Materiale despre lectură, conectare și folosirea cartonașelor. Articolele vor fi completate treptat cu textele finale ale Oanei.
          </p>
        </motion.div>

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
                
                <div className="lg:w-3/5 p-8 sm:p-12 flex flex-col justify-center text-left">
                  <div className="flex flex-wrap items-center gap-4 text-[11px] font-semibold tracking-wider uppercase text-text-muted/70 mb-5">
                    <span className="px-3.5 py-1 bg-brand-orange-light/40 border border-brand-orange/15 text-[#AB6E4E] rounded-full text-[10px] font-bold">
                      {post.category}
                    </span>
                    <span>{post.status}</span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 tracking-tight text-text-main group-hover:text-brand-orange transition-colors leading-tight">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="text-text-muted font-light text-sm sm:text-base mb-8 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-end items-center mt-auto pt-6 border-t border-orange-100/30">
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="text-brand-orange font-bold hover:text-orange-600 flex items-center gap-1 py-1.5 px-4 bg-brand-orange-light/10 hover:bg-brand-orange-light/30 border border-brand-orange/10 rounded-full transition-colors text-xs uppercase tracking-wider"
                    >
                      Deschide <ChevronRight size={13} />
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
