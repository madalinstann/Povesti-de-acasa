import { Link } from '../router';
import { Home } from 'lucide-react';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center bg-[#FDF8F3] px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md"
      >
        <span className="font-serif italic text-brand-orange text-7xl sm:text-8xl font-bold block mb-4">404</span>
        <h1 className="text-3xl font-serif font-bold text-text-main mb-4">
          Pagina nu a fost găsită
        </h1>
        <p className="text-text-muted font-light mb-8 leading-relaxed">
          Ne pare rău, pagina pe care o cauți nu există sau a fost mutată. Hai înapoi acasă.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all shadow-md shadow-orange-950/10 text-sm tracking-wider uppercase"
        >
          <Home size={16} /> Înapoi pe prima pagină
        </Link>
      </motion.div>
    </div>
  );
}
