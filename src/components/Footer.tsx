import { Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tiktok = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

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

        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h4 className="text-xs uppercase tracking-widest font-medium text-brand-orange-light">
            Meniu
          </h4>
          <div className="flex flex-col space-y-2.5 text-sm text-white/90 font-normal">
            <Link to="/shop" className="hover:text-brand-orange transition-colors duration-300">Shop</Link>
            <Link to="/blog" className="hover:text-brand-orange transition-colors duration-300">Blog</Link>
            <Link to="/contact" className="hover:text-brand-orange transition-colors duration-300">Contact</Link>
          </div>
        </div>

        <div className="flex space-x-4">
          <a 
            href="https://www.instagram.com/povesti_cu_rost/?hl=en" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-orange-200/70 hover:text-white hover:bg-white/5 p-3 rounded-full transition-all border border-orange-100/5"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a 
            href="https://www.tiktok.com/@povestideacasa09" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-orange-200/70 hover:text-white hover:bg-white/5 p-3 rounded-full transition-all border border-orange-100/5"
            aria-label="TikTok"
          >
            <Tiktok size={18} />
          </a>
          <a 
            href="mailto:contact@povestideacasa.ro" 
            className="text-orange-200/70 hover:text-white hover:bg-white/5 p-3 rounded-full transition-all border border-orange-100/5"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
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
