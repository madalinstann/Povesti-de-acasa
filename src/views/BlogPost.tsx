import { ChevronLeft, Download } from 'lucide-react';
import { Link, useParams } from '../router';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const isGuide = id === '1';

  return (
    <article className="w-full bg-[#FDF8F3] min-h-screen py-16 md:py-24 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-left">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-text-muted hover:text-brand-orange transition-colors py-2"
          >
            <ChevronLeft size={14} /> Înapoi la resurse
          </Link>
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl shadow-orange-950/5 border border-orange-100/20 overflow-hidden">
          <div className="aspect-[16/9] bg-[#FAF1E6]">
            <img
              src={isGuide ? "/coperta-ghid.png" : "/cartonase-1.jpg"}
              alt={isGuide ? "Minighid Explorăm Povești" : "Explorăm Povești"}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 sm:p-12 text-left">
            <span className="px-3.5 py-1 bg-brand-orange-light/40 border border-brand-orange/15 text-[#AB6E4E] rounded-full text-[10px] font-bold uppercase tracking-wider">
              {isGuide ? "Disponibil PDF" : "În pregătire"}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight text-text-main tracking-tight mt-6">
              {isGuide ? "Minighid joc educațional – Explorăm povești" : "Articol în pregătire"}
            </h1>

            <p className="text-text-muted text-base sm:text-lg leading-relaxed font-light mt-6">
              {isGuide
                ? "Descarcă minighidul gratuit pentru a vedea cum funcționează întrebările și cum pot fi folosite în conversațiile cu copilul."
                : "Această pagină va fi completată după ce Oana trimite textul final pentru articol."}
            </p>

            {isGuide && (
              <a
                href="/Minighid joc educational – Exploram povesti.pdf"
                download="Minighid joc educational – Exploram povesti.pdf"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all shadow-md shadow-orange-950/10 text-sm tracking-wider uppercase mt-8"
              >
                <Download size={16} />
                Descarcă PDF
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
