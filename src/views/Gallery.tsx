import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: 'cartonase' | 'ghid' | 'brand';
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: '/despre.mine.png',
    title: 'Despre Mine — Oana',
    category: 'brand',
    description: 'Autoarea proiectului Povești de-acasă.'
  },
  {
    id: 2,
    src: '/logo-povesti-de-acasa-2.png',
    title: 'Identitate Vizuală',
    category: 'brand',
    description: 'Logo-ul oficial Povești de-acasă.'
  },
  {
    id: 3,
    src: '/cartonase-1.jpg',
    title: 'Explorăm Povești (Set)',
    category: 'cartonase',
    description: 'Cartonașe concepute cu dragoste pentru mințile curioase.'
  },
  {
    id: 4,
    src: '/cartonase-2.jpg',
    title: 'Exemple Cartonașe (Nivel 1)',
    category: 'cartonase',
    description: 'Întrebări inteligente pentru a explora textul poveștii.'
  },
  {
    id: 5,
    src: '/cartonase-3.jpg',
    title: 'Exemple Cartonașe (Nivel 2)',
    category: 'cartonase',
    description: 'Întrebări care ajută copilul să se transpună în poveste.'
  },
  {
    id: 6,
    src: '/cartonase-4.jpg',
    title: 'Exemple Cartonașe (Nivel 3)',
    category: 'cartonase',
    description: 'Dezvoltarea gândirii critice și a imaginației.'
  },
  {
    id: 7,
    src: '/cartonase-5.jpg',
    title: 'Metode de Joacă',
    category: 'cartonase',
    description: 'Cum poți folosi cartonașele acasă în mod interactiv.'
  },
  {
    id: 8,
    src: '/coperta-ghid.png',
    title: 'Copertă Minighid',
    category: 'ghid',
    description: 'Ghidul lecturii cu blândețe pentru părinți.'
  },
  {
    id: 9,
    src: '/poze cartonase/minighid.jpeg',
    title: 'Minighid în Detaliu',
    category: 'ghid',
    description: 'Ghidul practic cu sfaturi utile de lectură.'
  },
  {
    id: 10,
    src: '/poze cartonase/WhatsApp Image 2026-06-11 at 20.01.58.jpeg',
    title: 'Lectură de Seară',
    category: 'brand',
    description: 'Conexiune și învățare prin rutine plăcute.'
  },
  {
    id: 11,
    src: '/poze cartonase/WhatsApp Image 2026-06-11 at 20.02.19.jpeg',
    title: 'Explorăm Împreună',
    category: 'cartonase',
    description: 'Cartonașe gata de folosit la fiecare lectură.'
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { value: 'all', label: 'Toate' },
    { value: 'cartonase', label: 'Cartonașe' },
    { value: 'ghid', label: 'Minighid' },
    { value: 'brand', label: 'Proiect' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="w-full bg-[#FDF8F3] min-h-[85vh] py-12 sm:py-20 text-[#2B1B15]">
      {/* Background gradients */}
      <div className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-brand-orange/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[25rem] h-[25rem] bg-brand-purple/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block">Galerie Foto</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif tracking-tight text-text-main">
            Momente din lumea noastră
          </h1>
          <p className="text-text-muted font-light text-sm sm:text-base leading-relaxed">
            Explorează setul de cartonașe, minighidul educațional și imagini din universul „Povești de-acasă”.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                selectedCategory === cat.value
                  ? 'bg-brand-orange text-white shadow-lg shadow-orange-500/10'
                  : 'bg-white text-text-muted hover:text-brand-orange border border-orange-100/40 hover:border-brand-orange/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative cursor-pointer bg-white p-4 rounded-[2rem] border border-orange-100/30 shadow-sm hover:shadow-xl hover:shadow-orange-950/5 transition-all duration-500 flex flex-col"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-square w-full rounded-2xl overflow-hidden bg-gray-50 relative group">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-orange/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="bg-white p-4 rounded-full text-brand-orange shadow-lg"
                    >
                      <ZoomIn size={20} />
                    </motion.div>
                  </div>
                </div>

                <div className="mt-4 text-left flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-text-main text-lg leading-snug">{item.title}</h3>
                    <p className="text-text-muted text-xs font-light mt-1 leading-relaxed">{item.description}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-purple/70 mt-3 inline-block bg-brand-purple-light/40 px-2.5 py-1 rounded-full self-start">
                    {categories.find(c => c.value === item.category)?.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#1e130c]/95 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white hover:text-brand-orange p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all border border-white/10"
              >
                <X size={24} />
              </button>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="max-w-4xl w-full flex flex-col md:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image */}
                <div className="md:w-3/5 max-h-[70vh] bg-gray-50 flex items-center justify-center">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain max-h-[50vh] md:max-h-[70vh]"
                  />
                </div>
                {/* Details */}
                <div className="md:w-2/5 p-8 sm:p-10 flex flex-col justify-between text-left">
                  <div className="space-y-4">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-orange bg-brand-orange-light/40 px-3 py-1 rounded-full inline-block">
                      {categories.find(c => c.value === selectedImage.category)?.label}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-text-main leading-tight">
                      {selectedImage.title}
                    </h2>
                    <p className="text-text-muted font-light text-sm leading-relaxed">
                      {selectedImage.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-orange-100/50 mt-6">
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="w-full py-4 text-center bg-brand-orange hover:bg-orange-600 text-white font-semibold rounded-xl text-xs uppercase tracking-widest transition-all shadow-md shadow-orange-950/10"
                    >
                      Închide previzualizarea
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
