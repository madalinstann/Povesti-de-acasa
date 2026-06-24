import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Shop from './views/Shop';
import Blog from './views/Blog';
import BlogPost from './views/BlogPost';
import Checkout from './views/Checkout';
import Contact from './views/Contact';
import Terms from './views/Terms';
import Privacy from './views/Privacy';
import NotFound from './views/NotFound';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If we have a hash link (e.g. #despre), wait for layout and scroll smoothly
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
    // Otherwise, scroll straight to top on route change
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-orange-light selection:text-brand-orange">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {/* @ts-ignore - key is used by AnimatePresence to detect route changes */}
          <Routes location={location} key={location.pathname}>
            <Route 
              path="/" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Home />
                </motion.div>
              } 
            />
            <Route 
              path="/shop" 
              element={
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Shop />
                </motion.div>
              } 
            />
            <Route 
              path="/blog" 
              element={
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Blog />
                </motion.div>
              } 
            />
            <Route 
              path="/blog/:id" 
              element={
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <BlogPost />
                </motion.div>
              } 
            />
            <Route 
              path="/checkout" 
              element={
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Checkout />
                </motion.div>
              } 
            />

            <Route 
              path="/contact" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Contact />
                </motion.div>
              } 
            />
            <Route 
              path="/termeni" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Terms />
                </motion.div>
              } 
            />
            <Route 
              path="/confidentialitate" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Privacy />
                </motion.div>
              } 
            />
            <Route 
              path="*" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <NotFound />
                </motion.div>
              } 
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
