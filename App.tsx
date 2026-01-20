import React from 'react';
import SalesPage from './components/SalesPage';
import SocialProofPopup from './components/SocialProofPopup';

const App: React.FC = () => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const dateString = today.toLocaleDateString('es-ES', options);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-poppins antialiased selection:bg-pink-200 selection:text-pink-900 flex flex-col relative">
      <SocialProofPopup />
      <div className="w-full bg-red-600 text-white text-center py-3 px-4 font-bold text-sm md:text-base shadow-md">
          ATENCIÓN: El día <span className="text-yellow-300">{dateString}</span> las energías cósmicas están más abiertas debido a este inicio de año y el hechizo de Lady Soraya será hasta 3 veces más fuerte. ¡Aprovéchalo!
      </div>
      <main className="w-full flex-grow">
        <SalesPage />
      </main>
      
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        <p>Hechizos del amor — TODOS LOS DERECHOS RESERVADOS</p>
      </footer>
    </div>
  );
};

export default App;