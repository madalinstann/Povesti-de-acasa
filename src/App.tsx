import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Shop from './views/Shop';
import Checkout from './views/Checkout';
import Contact from './views/Contact';
import Terms from './views/Terms';
import Privacy from './views/Privacy';
import NotFound from './views/NotFound';
import { useLocation } from './router';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function AnimatedPage({ children, variant = 'fade' }: { children: ReactNode; variant?: 'fade' | 'slide' }) {
  return (
    <motion.div
      initial={false}
      animate={variant === 'slide' ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
      exit={variant === 'slide' ? { opacity: 0, x: -20 } : { opacity: 0, y: -10 }}
      transition={{ duration: 0.18 }}
    >
      {children}
    </motion.div>
  );
}

function CurrentPage() {
  const { pathname } = useLocation();

  if (pathname === '/') return <AnimatedPage><Home /></AnimatedPage>;
  if (pathname === '/shop') return <AnimatedPage variant="slide"><Shop /></AnimatedPage>;
  if (pathname === '/checkout') return <AnimatedPage variant="slide"><Checkout /></AnimatedPage>;
  if (pathname === '/contact') return <AnimatedPage><Contact /></AnimatedPage>;
  if (pathname === '/termeni' || pathname === '/termeni-si-conditii') return <AnimatedPage><Terms /></AnimatedPage>;
  if (pathname === '/confidentialitate' || pathname === '/politica-de-confidentialitate') return <AnimatedPage><Privacy /></AnimatedPage>;

  return <AnimatedPage><NotFound /></AnimatedPage>;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col selection:bg-brand-orange-light selection:text-brand-orange">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <div key={location.pathname}>
            <CurrentPage />
          </div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
