import React, { useState, useEffect } from 'react';
import { Star, ThumbsUp, Heart } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  location: string;
  image: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Maria G.",
    location: "Madrid, España",
    text: "Estaba desesperada porque mi novio me había dejado sin explicación. 3 días después del ritual, apareció en mi puerta llorando y pidiendo perdón. ¡Es increíble!",
    image: "https://i.imgur.com/ymfZ9oQ.jpg"
  },
  {
    id: 2,
    name: "Carla S.",
    location: "Buenos Aires, Argentina",
    text: "Nunca creí en estas cosas, pero Lady Soraya cambió mi vida. Conocí a un hombre maravilloso justo como ella dijo. Estamos planeando nuestra boda.",
    image: "https://i.imgur.com/nCdT1tV.jpg"
  },
  {
    id: 3,
    name: "Fernanda L.",
    location: "Ciudad de México, México",
    text: "Mi matrimonio estaba frío, parecíamos extraños. Después del hechizo, la pasión volvió con una fuerza que no sentíamos desde la luna de miel.",
    image: "https://i.imgur.com/Sza1ZfT.png"
  },
  {
    id: 4,
    name: "Ana P.",
    location: "Bogotá, Colombia",
    text: "Sentía que el amor no era para mí. Hice el ritual de llamada amorosa y esa misma semana, un viejo amigo me confesó su amor. ¡Estamos muy felices!",
    image: "https://i.imgur.com/oOLHMGS.jpg"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 6000); // Rotate every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-rose-50 rounded-2xl p-6 md:p-8 my-10 shadow-inner border border-rose-100">
      <h3 className="text-center text-xl font-bold text-gray-800 mb-6">Lo que dicen sobre Lady Soraya</h3>
      
      <div className="relative overflow-hidden h-[400px] md:h-80">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-700 flex flex-col items-center justify-start text-center pt-2 ${
              index === currentIndex ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-8 z-0'
            }`}
          >
            {/* Foto do Usuário */}
            <div className="mb-4 relative">
                <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                />
            </div>

            {/* Estrelas */}
            <div className="flex gap-1 mb-3 text-yellow-400">
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
            </div>

            {/* Texto */}
            <p className="text-base md:text-lg text-gray-700 italic mb-4 leading-relaxed max-w-lg mx-auto">
              "{testimonial.text}"
            </p>

            {/* Reações (Joinha Azul e Coração Vermelho) */}
            <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-sm">
                    <ThumbsUp size={16} className="text-blue-500 fill-blue-500" />
                    <span className="text-xs font-bold text-gray-500">Útil</span>
                </div>
                <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-sm">
                    <Heart size={16} className="text-red-500 fill-red-500" />
                    <span className="text-xs font-bold text-gray-500">Me encanta</span>
                </div>
            </div>

            {/* Nome e Local */}
            <div className="mt-auto pb-2">
              <p className="font-bold text-gray-900">{testimonial.name}</p>
              <p className="text-xs text-gray-500">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Dots navigation */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonialsData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-pink-600 w-4' : 'bg-pink-200'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;