import React, { useState } from 'react';
import { Link, useLocation } from '../router';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Acasă', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      if (location.pathname !== '/') {
        return;
      }
      e.preventDefault();
      const id = path.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="w-full bg-bg-light/80 backdrop-blur-xl sticky top-0 z-50 border-b border-orange-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-text-main hover:opacity-90 transition-opacity flex items-center gap-1">
              <span className="text-brand-orange">Povești</span> 
              <span className="font-light italic text-brand-purple">de-acasă</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleScroll(e, link.path)}
                className={`relative text-xs uppercase tracking-widest font-medium transition-colors duration-300 ${
                  location.pathname === link.path || (link.path.startsWith('/#') && location.hash === link.path.substring(1)) ? 'text-brand-orange' : 'text-text-muted hover:text-brand-orange'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span 
                    layoutId="underline"
                    className="absolute -bottom-1.5 left-0 w-full h-[1px] bg-brand-orange rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-text-main hover:text-brand-orange bg-brand-orange-light/30 rounded-full transition-all"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-bg-light overflow-hidden border-t border-orange-100/40 shadow-xl shadow-orange-900/5"
          >
            <div className="px-5 pt-3 pb-8 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <Link
                    to={link.path}
                    onClick={(e) => {
                      handleScroll(e, link.path);
                      setIsOpen(false);
                    }}
                    className="block px-4 py-3 text-sm font-semibold text-text-muted hover:text-brand-orange hover:bg-brand-orange-light/10 rounded-xl transition-all"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
