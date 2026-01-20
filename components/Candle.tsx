import React from 'react';

interface CandleProps {
  lit: boolean;
  onClick: () => void;
}

export const Candle: React.FC<CandleProps> = ({ lit, onClick }) => {
  return (
    <div 
      className="cursor-pointer relative flex flex-col items-center justify-end h-48 w-32 transition-transform hover:scale-105" 
      onClick={onClick}
      role="button"
      aria-label="Encender vela"
    >
       {/* Flame Area */}
       <div className={`absolute top-0 transition-all duration-700 ease-in-out ${lit ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          {/* Outer Glow */}
          <div className="w-8 h-16 bg-orange-400 rounded-full blur-xl absolute -top-2 left-1/2 -translate-x-1/2 animate-pulse opacity-60"></div>
          {/* Core Flame */}
          <div className="w-4 h-10 bg-gradient-to-t from-orange-600 via-yellow-400 to-white rounded-[50%] blur-[1px] animate-[pulse_1.5s_ease-in-out_infinite] shadow-[0_0_20px_rgba(255,165,0,0.8)]"></div>
       </div>
       
       {/* Wick */}
       <div className="w-1 h-3 bg-gray-800 mb-0 z-10"></div>
       
       {/* Body */}
       <div className="w-16 h-32 bg-gradient-to-r from-red-800 via-red-600 to-red-800 rounded-t-lg shadow-2xl relative overflow-hidden border-b-4 border-red-950">
          {/* Wax Drips */}
          <div className="absolute top-0 left-2 w-2 h-8 bg-red-500 rounded-b-full opacity-80"></div>
          <div className="absolute top-0 right-4 w-3 h-12 bg-red-500 rounded-b-full opacity-70"></div>
          <div className="absolute top-2 left-8 w-2 h-5 bg-red-500 rounded-b-full opacity-60"></div>
       </div>
       
       {/* Base Shadow */}
       <div className="w-20 h-2 bg-black opacity-20 blur-md rounded-[100%] absolute bottom-0"></div>
    </div>
  );
};

export default Candle;