import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Lock, ArrowRight, User, Users, Star, X } from 'lucide-react';

interface OrderPopupProps {
  onClose?: () => void;
}

type Step = 'selection' | 'form_return' | 'form_new' | 'loading' | 'success_return' | 'success_new';

const OrderPopup: React.FC<OrderPopupProps> = ({ onClose }) => {
  const [step, setStep] = useState<Step>('selection');
  const [loadingMsg, setLoadingMsg] = useState('Concentrando energía espiritual...');
  const [formData, setFormData] = useState({
    userName: '',
    targetName: ''
  });

  // Handle Loading Sequence
  useEffect(() => {
    if (step === 'loading') {
      const messages = [
        "Invocando las fuerzas del amor...",
        "Alineando los astros a tu favor...",
        "Mapeando el vínculo espiritual...",
        "Lady Soraya está preparando el altar...",
        "Sellando el destino..."
      ];
      
      let i = 0;
      const msgInterval = setInterval(() => {
        i = (i + 1) % messages.length;
        setLoadingMsg(messages[i]);
      }, 800);

      const finishTimeout = setTimeout(() => {
        clearInterval(msgInterval);
        if (formData.targetName) {
            setStep('success_return');
        } else {
            setStep('success_new');
        }
      }, 4000); // 4 seconds loading

      return () => {
        clearInterval(msgInterval);
        clearTimeout(finishTimeout);
      };
    }
  }, [step, formData.targetName]);

  const handleSelection = (type: 'return' | 'new') => {
    if (type === 'return') setStep('form_return');
    else setStep('form_new');
  };

  const startRitual = () => {
    if (!formData.userName) return; // Basic validation
    if (step === 'form_return' && !formData.targetName) return;
    setStep('loading');
  };

  const goToCheckout = () => {
    window.location.href = "https://go.centerpag.com/PPU38CQ5MLH";
  };

  return (
    // Z-index alto para cobrir tudo (header, footer, popups). Fundo sólido (bg-gray-100) para não ver o site atrás.
    // overflow-y-auto para rolar este conteúdo independentemente do site.
    <div className="fixed inset-0 z-[200] bg-gray-100 font-poppins overflow-y-auto animate-in fade-in duration-300">
      <div className="min-h-full flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative flex flex-col my-auto">
            
            {/* Close Button */}
            <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 text-gray-400 hover:text-gray-600 bg-white/80 rounded-full p-2 hover:bg-gray-100 transition-colors"
            aria-label="Cerrar y volver al sitio"
            >
            <X size={24} />
            </button>

            {/* Progress Bar (Visual) */}
            <div className="h-2 bg-gray-100 w-full absolute top-0 left-0 z-10">
                <div 
                    className="h-full bg-gradient-to-r from-pink-500 to-red-600 transition-all duration-500"
                    style={{ 
                        width: step === 'selection' ? '25%' : 
                            step.startsWith('form') ? '50%' : 
                            step === 'loading' ? '80%' : '100%' 
                    }}
                ></div>
            </div>

            <div className="p-6 md:p-8 flex-grow flex flex-col justify-center mt-6">

                {/* STEP 1: SELECTION */}
                {step === 'selection' && (
                    <div className="space-y-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="mx-auto w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                            <Heart className="text-pink-600 w-8 h-8 fill-pink-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">¿Cuál es tu intención?</h2>
                        <p className="text-gray-600">
                            Elige el camino de tu corazón para que Lady Soraya pueda guiar el ritual.
                        </p>

                        <div className="space-y-4 pt-4">
                            <button 
                                onClick={() => handleSelection('return')}
                                className="w-full text-left p-5 rounded-xl border-2 border-pink-100 hover:border-pink-500 hover:bg-pink-50 transition-all group relative overflow-hidden"
                            >
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="bg-white p-2 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                                        <Users className="text-pink-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-lg">Quiero recuperar un amor</p>
                                        <p className="text-sm text-gray-500">Traer de vuelta a una persona específica</p>
                                    </div>
                                </div>
                            </button>

                            <button 
                                onClick={() => handleSelection('new')}
                                className="w-full text-left p-5 rounded-xl border-2 border-purple-100 hover:border-purple-500 hover:bg-purple-50 transition-all group relative overflow-hidden"
                            >
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="bg-white p-2 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                                        <Sparkles className="text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-lg">Quiero atraer un nuevo amor</p>
                                        <p className="text-sm text-gray-500">Abrir caminos para alguien nuevo</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 2A: FORM RETURN */}
                {step === 'form_return' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-900">Prepara el Ritual de Unión</h2>
                            <p className="text-gray-600 mt-2">
                                Lady Soraya necesita los nombres para vincular sus dos almas.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Tu nombre</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input 
                                        type="text" 
                                        placeholder="Escribe tu nombre completo"
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:ring-0 outline-none transition-colors"
                                        value={formData.userName}
                                        onChange={(e) => setFormData({...formData, userName: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Nombre de quien deseas</label>
                                <div className="relative">
                                    <Heart className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input 
                                        type="text" 
                                        placeholder="Escribe el nombre de la persona"
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:ring-0 outline-none transition-colors"
                                        value={formData.targetName}
                                        onChange={(e) => setFormData({...formData, targetName: e.target.value})}
                                    />
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={startRitual}
                            className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-500 hover:to-red-500 text-white font-bold text-xl py-4 rounded-xl shadow-lg shadow-pink-500/30 transform transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                            Vincular Almas Ahora <ArrowRight />
                        </button>

                        <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                            <Lock size={12} /> Tus datos están 100% protegidos y privados.
                        </p>
                    </div>
                )}

                {/* STEP 2B: FORM NEW */}
                {step === 'form_new' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-900">Prepara el Ritual de Atracción</h2>
                            <p className="text-gray-600 mt-2">
                                Ingresa tu nombre para que Lady Soraya pueda abrir tus caminos al amor.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Tu nombre</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input 
                                        type="text" 
                                        placeholder="Escribe tu nombre completo"
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-0 outline-none transition-colors"
                                        value={formData.userName}
                                        onChange={(e) => setFormData({...formData, userName: e.target.value})}
                                    />
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={startRitual}
                            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xl py-4 rounded-xl shadow-lg shadow-purple-500/30 transform transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                            Abrir Mis Caminos <Sparkles />
                        </button>

                        <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                            <Lock size={12} /> Tus datos están 100% protegidos y privados.
                        </p>
                    </div>
                )}

                {/* STEP 3: LOADING */}
                {step === 'loading' && (
                    <div className="text-center space-y-8 animate-in fade-in zoom-in duration-700 py-10">
                        <div className="relative mx-auto w-24 h-24">
                            <div className="absolute inset-0 border-4 border-pink-200 rounded-full animate-ping opacity-20"></div>
                            <div className="absolute inset-0 border-4 border-t-pink-600 rounded-full animate-spin"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Star className="text-pink-500 fill-pink-500 animate-pulse" size={32} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Por favor, espera...</h3>
                            <p className="text-pink-600 font-medium animate-pulse text-lg">{loadingMsg}</p>
                        </div>
                    </div>
                )}

                {/* STEP 4A: SUCCESS RETURN */}
                {step === 'success_return' && (
                    <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
                        <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                            <Lock className="text-green-600 w-10 h-10" />
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-extrabold text-green-700 uppercase tracking-tight">
                            ¡CONEXIÓN ESTABLECIDA!
                        </h2>
                        
                        <div className="bg-green-50 border border-green-200 p-4 rounded-xl text-left shadow-sm">
                            <p className="text-gray-800 text-lg leading-relaxed">
                                <span className="font-bold text-green-800 bg-green-200 px-1 rounded">{formData.targetName}</span> está espiritualmente vulnerable. El vínculo ha sido mapeado con éxito.
                            </p>
                        </div>

                        <p className="text-gray-600">
                            Todo está listo. Lady Soraya espera tu confirmación para finalizar el ritual.
                        </p>

                        <button 
                            onClick={goToCheckout}
                            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold text-xl py-5 rounded-xl shadow-xl shadow-green-500/40 transform transition-all hover:-translate-y-1 active:translate-y-0 animate-pulse"
                        >
                            FINALIZAR EL RITUAL
                        </button>
                    </div>
                )}

                {/* STEP 4B: SUCCESS NEW */}
                {step === 'success_new' && (
                    <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
                        <div className="mx-auto w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                            <Sparkles className="text-purple-600 w-10 h-10" />
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-extrabold text-purple-700 uppercase tracking-tight">
                            ¡CONEXIÓN ESTABLECIDA!
                        </h2>
                        
                        <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl text-left shadow-sm">
                            <p className="text-gray-800 text-lg leading-relaxed">
                                Tu campo energético está abierto. El universo está listo para traer tu nuevo amor.
                            </p>
                        </div>

                        <p className="text-gray-600">
                            Todo está listo. Lady Soraya espera tu confirmación para finalizar el ritual.
                        </p>

                        <button 
                            onClick={goToCheckout}
                            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold text-xl py-5 rounded-xl shadow-xl shadow-green-500/40 transform transition-all hover:-translate-y-1 active:translate-y-0 animate-pulse"
                        >
                            FINALIZAR EL RITUAL
                        </button>
                    </div>
                )}

            </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPopup;