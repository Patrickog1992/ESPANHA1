import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const names = [
  "María", "José", "Ana", "Luis", "Sofía", "Carlos", "Fernanda", "Juan", 
  "Gabriela", "Diego", "Valentina", "Andrés", "Camila", "Mateo", 
  "Lucía", "David", "Paula", "Alejandro", "Elena", "Daniel",
  "Carmen", "Rosa", "Jorge", "Mónica", "Ricardo"
];

const SocialProofPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '' });

  useEffect(() => {
    const show = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      setData({ name });
      setVisible(true);
      
      // Hide after 5 seconds
      setTimeout(() => setVisible(false), 5000);
    };

    // First notification after 3 seconds
    const firstDelay = setTimeout(show, 3000);
    
    // Repeat every 12 seconds
    const interval = setInterval(show, 12000);

    return () => {
      clearTimeout(firstDelay);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <style>
        {`
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(100%); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>
      <div 
        className="fixed top-4 right-2 z-40 bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow-lg border-l-2 border-green-500 flex items-center gap-2 max-w-[200px] pointer-events-none transform origin-top-right"
        style={{ animation: 'slideInRight 0.5s ease-out' }}
      >
        <div className="bg-green-100 p-1.5 rounded-full flex-shrink-0">
          <Sparkles className="text-green-600 w-3 h-3" />
        </div>
        <div>
          <p className="text-xs font-bold text-gray-900 leading-tight">
            {data.name}
          </p>
          <p className="text-[10px] text-green-700 font-medium mt-0.5">
            recibió el hechizo ✨
          </p>
        </div>
      </div>
    </>
  );
};

export default SocialProofPopup;