import { Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-[#F1ECE6] py-16 mt-auto border-t border-orange-100/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="font-serif text-3xl font-bold tracking-tight text-white mb-3">
            <span className="text-brand-orange">Povești</span> <span className="font-light italic text-[#E8D9C8]">de-acasă</span>
          </Link>
          <p className="text-orange-100/60 text-sm max-w-xs font-light leading-relaxed">
            Educație cu blândețe pentru părinți și copii.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-4">
          <h4 className="text-xs uppercase tracking-widest font-semibold text-orange-200/50">
            Urmărește-ne pe rețelele de socializare
          </h4>
          <div className="flex space-x-3">
            <a 
              href="https://www.instagram.com/povesti_cu_rost/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-orange-200/70 hover:text-white hover:bg-white/5 p-3 rounded-full transition-all border border-orange-100/5 hover:border-brand-orange"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61572586174656&ref=PROFILE_EDIT_xav_ig_profile_page_web#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-orange-200/70 hover:text-white hover:bg-white/5 p-3 rounded-full transition-all border border-orange-100/5 hover:border-brand-orange"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://www.tiktok.com/@povestideacasa09" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-orange-200/70 hover:text-white hover:bg-white/5 p-3 rounded-full transition-all border border-orange-100/5 hover:border-brand-orange flex items-center justify-center"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.86.17 1.75.28 2.63.29v3.7c-1.12-.01-2.24-.26-3.27-.72-.11 2.37-.39 4.74-.91 7.05-.66 2.44-2.11 4.71-4.21 6.13-2.28 1.55-5.17 2.11-7.85 1.48-2.61-.59-5.01-2.28-6.38-4.66C-1.57 13.06-1.5 8.26 1.94 4.88c1.88-1.86 4.49-2.82 7.12-2.64v3.83c-1.56-.17-3.17.27-4.32 1.34-1.28 1.2-1.74 3.12-1.19 4.81.48 1.55 1.84 2.8 3.42 3.17 1.54.34 3.2-.13 4.24-1.29.62-.7.9-1.63.89-2.57-.03-2.54-.02-5.08-.02-7.62.01-1.15.01-2.3.02-3.45z"/>
              </svg>
            </a>
          </div>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-orange-100/5 flex flex-col md:flex-row justify-between items-center text-xs text-orange-200/40">
        <p>© 2026 Povești de-acasă. Toate drepturile rezervate.</p>
        <div className="flex space-x-6 mt-4 md:mt-0 font-light">
          <Link to="/termeni" className="hover:text-white transition-colors">Termeni și condiții</Link>
          <Link to="/confidentialitate" className="hover:text-white transition-colors">Politică de confidențialitate</Link>
        </div>
      </div>
    </footer>
  );
}
