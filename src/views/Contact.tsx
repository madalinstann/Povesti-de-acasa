import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    website: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('A apărut o problemă la trimiterea mesajului. Te rugăm să încerci din nou sau să ne scrii direct pe e-mail.');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json().catch(() => null);
      if (response.ok && result?.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '', website: '' });
      } else {
        setErrorMessage(result?.message || 'A apărut o problemă la trimiterea mesajului. Te rugăm să încerci din nou sau să ne scrii direct pe e-mail.');
        setStatus('error');
      }
    } catch (error) {
      console.error('Eroare trimitere mesaj:', error);
      setErrorMessage('A apărut o eroare de conexiune. Te rugăm să verifici conexiunea și să încerci din nou.');
      setStatus('error');
    }
  };

  return (
    <div className="w-full bg-[#FDF8F3] min-h-[85vh] py-12 sm:py-20 text-[#2B1B15] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-brand-orange/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[20%] right-[10%] w-[25rem] h-[25rem] bg-brand-purple/10 rounded-full blur-[100px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block">Contact</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif tracking-tight text-text-main">
            Hai să vorbim
          </h1>
          <p className="text-text-muted font-light text-sm sm:text-base leading-relaxed">
            Ai o întrebare despre cartonașele noastre sau vrei să colaborăm? Ne poți scrie direct sau ne poți contacta pe WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Contact Details Card */}
          <motion.div 
            {...fadeInUp}
            className="md:col-span-5 space-y-6 order-2 md:order-1"
          >
            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/40741312827" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white p-8 rounded-[2.5rem] border border-orange-100/30 shadow-sm hover:shadow-xl hover:shadow-orange-950/5 transition-all duration-500 hover:-translate-y-1 text-left"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center mb-6 shadow-inner">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-text-main mb-2">WhatsApp</h3>
              <p className="text-text-muted text-sm font-light mb-4 leading-relaxed">
                Răspundem rapid la mesaje. Perfect pentru întrebări rapide sau detalii despre comenzi.
              </p>
              <span className="text-sm font-semibold text-green-600 flex items-center gap-1.5 group">
                0741 312 827
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:povestideacasa.online@gmail.com" 
              className="block bg-white p-8 rounded-[2.5rem] border border-orange-100/30 shadow-sm hover:shadow-xl hover:shadow-orange-950/5 transition-all duration-500 hover:-translate-y-1 text-left"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-purple-light/40 text-brand-purple flex items-center justify-center mb-6 shadow-inner">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-text-main mb-2">E-mail</h3>
              <p className="text-text-muted text-sm font-light mb-4 leading-relaxed">
                Trimite-ne un e-mail și îți vom răspunde în cel mai scurt timp posibil.
              </p>
              <span className="text-sm font-semibold text-brand-purple flex items-center gap-1.5 group">
                povestideacasa.online@gmail.com
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            {...fadeInUp}
            className="md:col-span-7 bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl shadow-orange-950/5 border border-orange-100/30 order-1 md:order-2"
          >
            <h2 className="text-2xl font-serif font-bold text-text-main mb-6 text-left">
              Trimite un mesaj
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="hidden"
                aria-hidden="true"
              />

              <div className="space-y-1.5">
                <label className="block text-xs uppercase tracking-wider font-semibold text-text-main">Nume complet</label>
                <input 
                  type="text" 
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Numele tău"
                  className="w-full px-5 py-4 rounded-xl border border-orange-200/40 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 bg-[#FDF8F3] text-sm" 
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-text-main">Email</label>
                  <input 
                  type="email" 
                  required
                  autoComplete="email"
                  value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="adresa@email.com"
                    className="w-full px-5 py-4 rounded-xl border border-orange-200/40 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 bg-[#FDF8F3] text-sm" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-text-main">Telefon (opțional)</label>
                  <input 
                  type="tel" 
                  autoComplete="tel"
                  value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="07xx xxx xxx"
                    className="w-full px-5 py-4 rounded-xl border border-orange-200/40 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 bg-[#FDF8F3] text-sm" 
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs uppercase tracking-wider font-semibold text-text-main">Mesajul tău</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Scrie mesajul tău aici..."
                  className="w-full px-5 py-4 rounded-xl border border-orange-200/40 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 bg-[#FDF8F3] text-sm" 
                />
              </div>

              {/* Status alerts */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl flex items-center gap-3 text-sm"
                  >
                    <CheckCircle size={20} className="flex-shrink-0" />
                    <span>Mesajul a fost trimis cu succes! Îți vom răspunde în cel mai scurt timp.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-center gap-3 text-sm"
                  >
                    <AlertCircle size={20} className="flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-brand-orange hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-4 rounded-xl transition-all shadow-md shadow-orange-950/10 text-xs uppercase tracking-widest flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <span>Se trimite...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Trimite mesajul</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
