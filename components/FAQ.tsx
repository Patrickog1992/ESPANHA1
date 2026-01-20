import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        {isOpen ? <ChevronUp className="text-pink-600" /> : <ChevronDown className="text-gray-400" />}
      </button>
      <div
        className={`mt-2 text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-2 pt-1">
            {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <div className="my-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Preguntas Frecuentes</h3>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <FAQItem 
            question="🔮 Cómo recibirás tu hechizo" 
            answer={
                <div className="space-y-2">
                    <p>Después de la confirmación de tu pedido, Lady Soraya realizará personalmente tu hechizo de amor, siguiendo el nombre y la información que proporciones en el formulario.</p>
                    <p>Cada ritual se realiza de forma individual y personalizada, respetando la energía de quien lo solicita.</p>
                    <p className="font-semibold">Además…</p>
                    <p>✨ Una versión especial del hechizo será enviada directamente a tu correo electrónico registrado, para que tengas acceso inmediato y puedas acompañar el proceso.</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>La oración del ritual</li>
                        <li>Las instrucciones completas</li>
                        <li>Y la activación espiritual del hechizo</li>
                    </ul>
                    <p className="mt-2">Todo de forma discreta, segura y confidencial.</p>
                </div>
            } 
        />
        <FAQItem 
            question="¿Qué hace diferente el hechizo de Lady Soraya?" 
            answer="Otros hechizos intentan forzar el amor. Pero Lady Soraya alinea las energías del hombre con la vibración natural del amor y la atracción. Así, él elige amarte — de forma pura y verdadera." 
        />
        <FAQItem 
            question="¿En cuánto tiempo funciona?" 
            answer="Algunas mujeres sienten los efectos el mismo día. Otras, en pocos días. Pero el resultado siempre llega." 
        />
        <FAQItem 
            question="¿Cómo hago para lanzar el hechizo?" 
            answer={
                <ul className="list-decimal pl-5 space-y-1">
                    <li>Haz clic en el botón “Lanzar Hechizo Ahora”.</li>
                    <li>Responde un breve quiz (para personalizar el ritual).</li>
                    <li>Luego, completa el formulario seguro.</li>
                    <li>Y, en 24 horas, Lady Soraya lanzará el hechizo en tu nombre.</li>
                </ul>
            } 
        />
        <FAQItem 
            question="¿El hechizo funciona incluso si no tengo a nadie en mente?" 
            answer={
                <div>
                    <p>Sí.</p>
                    <p>En ese caso, Lady Soraya realiza el ritual de “llamada amorosa”, que atrae exactamente el alma que combina contigo.</p>
                    <p className="mt-2">Ese amor puede ser alguien totalmente nuevo, que surge de forma natural en los próximos días — como si el universo empujara a ambos el uno hacia el otro.</p>
                </div>
            } 
        />
      </div>
    </div>
  );
};

export default FAQ;