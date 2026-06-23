import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface LegalLayoutProps {
  title: string;
  updatedAt: string;
  children: ReactNode;
}

export default function LegalLayout({ title, updatedAt, children }: LegalLayoutProps) {
  return (
    <div className="w-full bg-[#FDF8F3] min-h-screen py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-text-muted hover:text-brand-orange transition-colors text-sm font-medium">
            <ArrowLeft size={16} /> Înapoi pe prima pagină
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-xl shadow-orange-950/5 border border-orange-100/30"
        >
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-text-main mb-2 leading-tight">
            {title}
          </h1>
          <p className="text-xs text-text-muted/70 mb-10 uppercase tracking-wider">
            Ultima actualizare: {updatedAt}
          </p>

          <div className="space-y-6 text-text-muted font-light leading-relaxed text-sm sm:text-base">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
