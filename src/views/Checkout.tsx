import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, CheckCircle, Truck, MapPin, AlertCircle } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

export default function Checkout() {
  const [deliveryMethod, setDeliveryMethod] = useState<'courier' | 'easybox'>('courier');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    easyboxName: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Comandă Nouă de la ${formData.name}`,
          from_name: "Povești de Acasă Magazin",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          delivery_method: deliveryMethod === 'courier' ? 'Curier Rapid' : 'EasyBox Sameday',
          delivery_details: deliveryMethod === 'courier' ? formData.address : formData.easyboxName,
          order_items: "Set Cartonașe 'Explorăm Povești' - 90 cartonașe (99 lei, Livrare Gratuită, Ramburs)"
        })
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(result.message || "A apărut o problemă la trimiterea comenzii. Te rugăm să încerci din nou.");
      }
    } catch (error) {
      console.error("Eroare trimitere comanda:", error);
      setSubmitError("A apărut o eroare de conexiune. Te rugăm să verifici conexiunea și să încerci din nou.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#FDF8F3] px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-white p-8 sm:p-12 rounded-[3rem] shadow-2xl shadow-orange-950/5 border border-orange-100/30 text-center space-y-6"
        >
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-500">
            <CheckCircle size={48} className="animate-bounce" />
          </div>
          
          <h2 className="text-3xl font-serif font-bold text-text-main">
            Comandă plasată!
          </h2>
          
          <p className="text-text-muted font-light text-sm sm:text-base leading-relaxed">
            Îți mulțumim, <span className="font-semibold text-text-main">{formData.name}</span>! Comanda ta pentru setul de cartonașe „Explorăm Povești” a fost înregistrată cu succes. Te vom contacta în curând pentru confirmare și livrare.
          </p>

          <div className="bg-[#FAF1E6] p-5 rounded-2xl border border-orange-100/50 text-xs text-text-muted space-y-2">
            <div className="flex justify-between">
              <span>Metodă livrare:</span>
              <span className="font-semibold text-text-main">
                {deliveryMethod === 'courier' ? 'Curier Rapid' : 'Sameday EasyBox'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Total plată:</span>
              <span className="font-semibold text-brand-orange">99 lei (Ramburs)</span>
            </div>
          </div>

          <div className="pt-4">
            <Link 
              to="/" 
              className="inline-block w-full bg-brand-orange hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition-all shadow-md shadow-orange-950/10 text-sm tracking-wider uppercase"
            >
              Înapoi pe prima pagină
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FDF8F3] min-h-[85vh] py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link to="/shop" className="inline-flex items-center gap-2 text-text-muted hover:text-brand-orange transition-colors text-sm font-medium">
            <ArrowLeft size={16} /> Înapoi la Magazin
          </Link>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Form container - 7 cols */}
          <motion.div 
            {...fadeInUp}
            className="md:col-span-7 bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl shadow-orange-950/5 border border-orange-100/30"
          >
            <h1 className="text-3xl font-serif font-bold text-text-main mb-6 text-left">
              Finalizează comanda
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 text-left">
                <label className="block text-xs uppercase tracking-wider font-semibold text-text-main">Nume complet</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Numele și prenumele tău"
                  className="w-full px-5 py-4 rounded-xl border border-orange-200/40 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 bg-[#FDF8F3] text-sm" 
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-text-main">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="adresa@email.com"
                    className="w-full px-5 py-4 rounded-xl border border-orange-200/40 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 bg-[#FDF8F3] text-sm" 
                  />
                </div>
                <div className="space-y-2 text-left">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-text-main">Telefon</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="07xx xxx xxx"
                    className="w-full px-5 py-4 rounded-xl border border-orange-200/40 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 bg-[#FDF8F3] text-sm" 
                  />
                </div>
              </div>

              {/* Delivery method selector */}
              <div className="space-y-3 text-left">
                <label className="block text-xs uppercase tracking-wider font-semibold text-text-main">Metodă de livrare</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('courier')}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all ${
                      deliveryMethod === 'courier'
                        ? 'border-brand-orange bg-brand-orange-light/10 ring-2 ring-orange-500/10'
                        : 'border-orange-200/30 hover:border-brand-orange/40 bg-white'
                    }`}
                  >
                    <Truck size={20} className={deliveryMethod === 'courier' ? 'text-brand-orange' : 'text-text-muted'} />
                    <span className="text-xs font-semibold mt-2 text-text-main">Curier Rapid</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('easybox')}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all ${
                      deliveryMethod === 'easybox'
                        ? 'border-brand-orange bg-brand-orange-light/10 ring-2 ring-orange-500/10'
                        : 'border-orange-200/30 hover:border-brand-orange/40 bg-white'
                    }`}
                  >
                    <MapPin size={20} className={deliveryMethod === 'easybox' ? 'text-brand-orange' : 'text-text-muted'} />
                    <span className="text-xs font-semibold mt-2 text-text-main">EasyBox Sameday</span>
                  </button>
                </div>
              </div>

              {/* Delivery info inputs depending on selected option */}
              <AnimatePresence mode="wait">
                {deliveryMethod === 'courier' ? (
                  <motion.div
                    key="courier"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 text-left overflow-hidden"
                  >
                    <label className="block text-xs uppercase tracking-wider font-semibold text-text-main">Adresă de livrare</label>
                    <textarea 
                      rows={3} 
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border border-orange-200/40 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 bg-[#FDF8F3] text-sm placeholder:text-gray-300" 
                      placeholder="Strada, Numar, Bloc, Oras, Judet..."
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="easybox"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 text-left overflow-hidden"
                  >
                    <label className="block text-xs uppercase tracking-wider font-semibold text-text-main">Nume / Locație EasyBox</label>
                    <input 
                      type="text" 
                      required
                      value={formData.easyboxName}
                      onChange={(e) => setFormData({ ...formData, easyboxName: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border border-orange-200/40 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 bg-[#FDF8F3] text-sm placeholder:text-gray-300" 
                      placeholder="Ex: EasyBox Libertății, Brașov sau localitate/județ"
                    />
                    <p className="text-[10px] text-text-muted mt-1 font-light leading-relaxed">
                      * Vom selecta cel mai apropiat locker EasyBox în funcție de adresa/telefonul tău dacă nu știi denumirea exactă.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Alert */}
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-center gap-3 text-sm text-left"
                  >
                    <AlertCircle size={20} className="flex-shrink-0" />
                    <span>{submitError}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Confirm command button */}
              <motion.button 
                whileHover={isSubmitting ? {} : { scale: 1.01, y: -2 }}
                whileTap={isSubmitting ? {} : { scale: 0.99 }}
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#3D2B1F] hover:bg-brand-orange disabled:bg-gray-400 text-white font-semibold py-5 rounded-2xl transition-all shadow-md shadow-orange-950/15 text-sm tracking-wider uppercase mt-4 flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Se trimite comanda...' : 'Confirmă comanda — 99 lei'}
              </motion.button>
              
              <div className="text-center text-[10px] sm:text-xs text-text-muted/70 flex items-center justify-center gap-2 pt-2 border-t border-orange-100/30">
                <ShieldCheck size={14} className="text-green-600" /> Plata securizată la primirea coletului (ramburs).
              </div>
            </form>
          </motion.div>

          {/* Cart summary container - 5 cols */}
          <motion.div 
            {...fadeInUp}
            className="md:col-span-5 space-y-6"
          >
            <div className="bg-[#FAF1E6] p-8 rounded-[2.5rem] border border-orange-100/30 text-left space-y-6">
              <h3 className="font-serif italic text-2xl font-bold text-brand-orange border-b border-orange-200/30 pb-4">
                Sumar Comandă
              </h3>
              
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border border-orange-100 flex-shrink-0">
                  <img src="/cartonase-1.jpg" alt="Cartonase" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-text-main text-sm">Explorăm Povești</h4>
                  <p className="text-xs text-text-muted">98 cartonașe de conectare</p>
                </div>
                <div className="ml-auto font-serif text-brand-orange font-bold">
                  99 lei
                </div>
              </div>
              
              <div className="border-t border-orange-200/30 pt-6 space-y-3 text-sm">
                <div className="flex justify-between text-text-muted">
                  <span>Subtotal:</span>
                  <span>99 lei</span>
                </div>
                <div className="flex justify-between text-text-muted">
                  <span>Livrare:</span>
                  <span className="text-green-600 font-medium">Gratuită</span>
                </div>
                <div className="flex justify-between text-base font-serif font-bold text-text-main border-t border-orange-200/20 pt-4 mt-2">
                  <span>Total de plată:</span>
                  <span className="text-brand-orange text-xl">99 lei</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
