import React, { useState } from 'react';
import CTAButton from './CTAButton';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import OrderPopup from './OrderPopup';
import { Check, ShieldCheck } from 'lucide-react';

interface SalesPageProps {
  price?: string;
}

const SalesPage: React.FC<SalesPageProps> = ({ price = "11,11" }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCTAClick = () => {
    setShowPopup(true);
    // window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll not needed with fixed modal
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 md:py-12 bg-white">
      
      {showPopup && <OrderPopup onClose={() => setShowPopup(false)} />}

      {/* Header / Intro */}
      <div className="text-center mb-8">
        <h3 className="text-pink-600 font-bold uppercase tracking-widest text-sm mb-2">Último deseo de Lady Soraya</h3>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          Ayudar a 1111 personas a encontrar el amor de sus vidas, ya sea un amor perdido… o un nuevo amor predestinado.
        </h1>
        <div className="bg-rose-50 border-l-4 border-pink-500 p-4 text-left my-6">
          <p className="font-bold text-gray-800 text-lg">La Sacerdotisa del Amor revela:</p>
          <p className="text-gray-700 mt-2">
            💘 El hechizo prohibido capaz de despertar un amor tan poderoso que une dos almas, recuperando lo que se perdió o atrayendo a alguien totalmente nuevo y destinado a ti.
          </p>
        </div>
      </div>

      {/* Main Image 1 */}
      <div className="mb-8">
        <img 
          src="https://i.imgur.com/FxiYsRl.jpg" 
          alt="Lady Soraya Atmosphere" 
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      {/* Copy Body 1 */}
      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p className="font-medium text-gray-900">
          Aunque exista otra persona en la historia…<br/>
          Aunque esté distante…<br/>
          Aunque no esté “lista” para un compromiso.
        </p>

        <p>
          Lo que estás a punto de descubrir en los próximos 2 minutos cambiará tu vida amorosa para siempre.
        </p>

        <p>Pero antes de continuar…</p>

        <p>
          Quiero que entiendas que el hechizo de amor que voy a revelarte es irreversible.<br/>
          Una vez que uses este hechizo prohibido en la persona que elijas… no hay vuelta atrás.<br/>
          La única forma de romper este hechizo es — la muerte.<br/>
          Es decir, será realmente hasta el final.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <p className="font-bold text-gray-900 mb-4">Mira exactamente lo que va a suceder:</p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <Check className="text-pink-500 flex-shrink-0" />
              <span>Un deseo ardiente enciende el corazón de la persona destinada a ti — incluso si no se hablan desde hace años.</span>
            </li>
            <li className="flex gap-3">
              <Check className="text-pink-500 flex-shrink-0" />
              <span>Su mente será tomada por pensamientos sobre ti.</span>
            </li>
            <li className="flex gap-3">
              <Check className="text-pink-500 flex-shrink-0" />
              <span>Mensajes, señales, acercamientos… comienzan espontáneamente.</span>
            </li>
            <li className="flex gap-3">
              <Check className="text-pink-500 flex-shrink-0" />
              <span>Si es un nuevo amor: la persona ideal se cruza en tu camino “por casualidad”, como si el universo empujara a ambos.</span>
            </li>
          </ul>
        </div>

        <p>
          Parece increíble, ¿no? Yo también pensé lo mismo.<br/>
          Pero ahora conozco la verdad.<br/>
          Incluso siendo escéptica… este hechizo funcionó para mí.<br/>
          Mucho mejor de lo que jamás imaginé.<br/>
          Porque hoy, vivo la relación de mis sueños.
        </p>
      </div>

      {/* Image 2 */}
      <div className="my-8">
        <img 
          src="https://i.imgur.com/2o8Kpgj.jpg" 
          alt="Happy Couple" 
          className="w-full rounded-xl shadow-lg"
        />
        <p className="text-center text-sm text-gray-500 mt-2 italic">(Esta historia funciona para ti independientemente de tu género)</p>
      </div>

      {/* Story Section */}
      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          Mi nombre es Jessica.<br/>
          Y, para ser sincera, hasta siento un poco de vergüenza al contar esta historia.
        </p>

        <p>
          En los últimos meses, estábamos emocionalmente distantes…<br/>
          Y parecía que cada día nos alejábamos más.
        </p>

        <p>Su nombre es Andre.</p>

        <p>
          Todo comenzó con fuego y pasión.<br/>
          Él me vio mirándolo desde lejos, en su bar de vinos favorito.<br/>
          Cuando se acercó, mariposas se apoderaron de mi estómago.<br/>
          Los hombros anchos, los brazos fuertes, la voz suave… era imposible resistirse.<br/>
          Solo el sonido de su voz hacía que mi corazón se derritiera.
        </p>
      </div>

       {/* Image 3 */}
       <div className="my-8">
        <img 
          src="https://i.imgur.com/A6UzkcN.jpg" 
          alt="Strong Man" 
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          Mis amigos me advirtieron: “Él es un problema.”<br/>
          Pero los ignoré.<br/>
          Las primeras semanas fueron un torbellino de romance, amor y deseo.<br/>
          Parecía una escena de película.<br/>
          Había chispa en cada toque.<br/>
          Me enviaba mensajes todo el tiempo, me hacía reír, me hacía sentir única.<br/>
          Y su mirada me decía que estábamos destinados el uno al otro.
        </p>

        <p>
          Hasta que ocurrió… otra vez.<br/>
          Como en todas mis relaciones anteriores…
        </p>

        <p>
          Sentí el cambio.<br/>
          Él empezó a alejarse.<br/>
          Los mensajes de cada hora se convirtieron en “unos dos al día”.<br/>
          Las invitaciones para verme se convirtieron en “estoy ocupado”.<br/>
          Y, de repente, el amor se transformó en distancia y silencio.<br/>
          La mirada apasionada se volvió una mirada vacía y fría.
        </p>

        <p>Antes de que pudiera entender lo que estaba pasando…</p>
      </div>

      {/* Image 4 */}
      <div className="my-8">
        <img 
          src="https://i.imgur.com/mB5bADi.jpg" 
          alt="Sadness" 
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          Fui enviada a un viaje de trabajo de último momento.<br/>
          Destino: Dubái.<br/>
          La ciudad de las posibilidades.<br/>
          Pensé que sería el lugar perfecto para aclarar la mente.<br/>
          Pero, en realidad, me estaba preparando para lo peor.
        </p>

        <p>
          La primera noche, fui a un bar.<br/>
          Pedí una bebida tras otra.<br/>
          Hablé con el bartender y… terminé contándole todo sobre Andre.<br/>
          Cuánto sentía que éramos almas gemelas, pero él simplemente no lo veía.
        </p>

        <p>Fue entonces cuando él me habló de la mujer que cambiaría mi vida.</p>
      </div>

       {/* Image 5 */}
       <div className="my-8">
        <img 
          src="https://i.imgur.com/E2JblYn.jpg" 
          alt="Lady Soraya" 
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p className="font-bold text-xl text-pink-700">Una sacerdotisa de las “artes arcanas”, llamada Lady Soraya.</p>

        <p>
          Vivía aislada en el desierto, a horas de allí.<br/>
          Todos los habitantes locales sabían de ella.
        </p>

        <p>
          Lady Soraya nació en uno de los covens más poderosos del desierto de Arabia, especializado en magia roja — la magia del amor, la pasión y el romance.<br/>
          Pero, al envejecer, se alejó de las hermanas del coven…<br/>
          Mientras ellas se sumergían en las artes oscuras, Soraya se dedicó al amor verdadero.
        </p>

        <p>
          Una noche, al presenciar un sacrificio prohibido, huyó bajo el velo de la noche.<br/>
          Y desde hace más de 30 años, vive en esa misma región…<br/>
          Ayudando a las personas a encontrar el amor verdadero.
        </p>

        <p>
          Normalmente, me habría reído de esa historia.<br/>
          Soy una mujer racional.<br/>
          Pero… no tenía opciones.
        </p>

        <p>
          Pedí su dirección.<br/>
          Y decidí ir al día siguiente.
        </p>

        <p className="font-bold">Ese sería el día que cambiaría mi vida amorosa para siempre.</p>
      </div>

       {/* Image 6 */}
       <div className="my-8">
        <img 
          src="https://i.imgur.com/0kAi4NR.jpg" 
          alt="Desert Journey" 
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          El viaje fue largo.<br/>
          Pero al llegar, parecía que había atravesado un portal hacia otro mundo.
        </p>
        <p>
          La casa era de barro antiguo, con el techo desgastado y una puerta cubierta de símbolos extraños.<br/>
          Me detuve por un instante, respiré hondo… y llamé.
        </p>
      </div>

       {/* Image 7 */}
       <div className="my-8">
        <img 
          src="https://i.imgur.com/t5lBzeb.jpg" 
          alt="Ancient Door" 
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          La puerta se abrió.<br/>
          Y ahí estaba ella.<br/>
          Hermosa, misteriosa, con una mirada que parecía contener siglos de sabiduría.
        </p>

        <p>
          “Querida mía, ya te estaba esperando”, dijo con voz calmada.<br/>
          “Sentí tu dolor desde que llegaste a la ciudad.”<br/>
          “Mi nombre es Lady Soraya.”<br/>
          “Dime, ¿qué te aflige?”
        </p>

        <p>
          Le conté todo.<br/>
          Sobre Andre.<br/>
          Sobre cómo sentía que él era el hombre de mi vida…<br/>
          Y sobre cómo me sentía perdida, impotente y cansada.
        </p>

        <p>
          Ella escuchó atentamente.<br/>
          Luego sonrió:
        </p>

        <p>
          “Llegaste al lugar correcto, querida.”<br/>
          “Desde joven, dedico mi vida a la magia del amor.”<br/>
          “Y aprendí la diferencia entre el amor pasajero y el amor eterno.”
        </p>

        <p>
          “Con tu permiso…”<br/>
          “Quiero lanzar un hechizo que hará que él se entregue completamente a ti.”
        </p>
      </div>

      {/* Image 8 */}
      <div className="my-8">
        <img 
          src="https://i.imgur.com/3lh5nwV.jpg" 
          alt="The Ritual" 
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          “Un amor recíproco, profundo… algo de otro mundo.”<br/>
          “Pero este no es un hechizo común.”<br/>
          “Este ritual fue creado para alinear dos almas que nacieron la una para la otra.”
        </p>

        <p>
          “Si tu alma ya reconoció a alguien del pasado, el hechizo trae a esa persona de vuelta.”<br/>
          “Pero si tu amor verdadero aún no ha llegado, el hechizo coloca en tu camino a alguien totalmente nuevo… pero destinado a ti.”
        </p>

        <p>
          “Este hechizo despierta la devoción, no la ilusión.”<br/>
          “Cuando lo lance, la persona que es tu destino — ya sea alguien que ya estuvo en tu vida o alguien nuevo — percibirá con cuerpo y alma que tú eres su amor.”
        </p>

        <p>“Y nunca más podrá imaginar ser feliz al lado de otra persona.”</p>

        <p>
          “Pero necesito advertirte…”<br/>
          “Una vez lanzado, es permanente.”
        </p>

        <p>
          Respiré hondo.<br/>
          Y dije: Sí.
        </p>

        <p>
          Aunque fuera una locura…<br/>
          Aunque no funcionara…<br/>
          Si existía un 1% de probabilidad, valía la pena.
        </p>

        <p>Ella solo dijo: “Vuelve en dos días.”</p>

        <p>
          Los dos días más largos de mi vida.<br/>
          La primera noche, nada.<br/>
          La segunda, nada.<br/>
          Ya pensaba que había sido un error…
        </p>
      </div>

      {/* Image 9 */}
      <div className="my-8">
        <img 
          src="https://i.imgur.com/z43budv.jpg" 
          alt="Phone Notification" 
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          Cuando, antes de dormir, mi celular vibró.<br/>
          Un mensaje de él:
        </p>

        <p className="bg-gray-100 p-4 rounded-r-2xl rounded-bl-2xl italic border-l-4 border-green-500 font-medium">
          “Sé que he estado actuando raro… pero desde que viajaste, me di cuenta de que eres la única para mí.<br/>
          Quiero arreglarlo todo cuando regreses.”
        </p>
      </div>

      {/* Image 10 (Message content) */}
      <div className="my-8">
        <img 
          src="https://i.imgur.com/tH91Qq1.jpeg" 
          alt="Text Message" 
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          Mi corazón casi se detuvo.<br/>
          El hechizo funcionó.
        </p>

        <p>
          Al día siguiente, corrí hasta la cabaña de Lady Soraya.<br/>
          Le conté todo.
        </p>

        <p>
          Ella sonrió, emocionada…<br/>
          pero pronto su mirada se volvió seria.
        </p>

        <p>
          “Querida… vivo sola desde que dejé mi coven.<br/>
          Lo que me trae alegría es ayudar a mujeres y hombres como tú a encontrar el amor verdadero.<br/>
          Pero son pocos los que llegan hasta mí.”
        </p>

        <p>“¿Puedes ayudarme a difundir esta bendición?”</p>

        <p>
          Fue entonces cuando tuve una idea.<br/>
          Creamos un sitio web para que personas de todo el mundo pudieran recibir el hechizo de amor de Lady Soraya.
        </p>

        <p>Ella quedó radiante.</p>

        <p>
          “Mi deseo siempre fue ayudar a 1111 personas a encontrar el amor verdadero.”<br/>
          “Y ahora… tú me diste esa oportunidad.”
        </p>

        <p className="font-bold text-xl text-center my-8">Ahora es tu turno.</p>
      </div>

      {/* Image 11 */}
      <div className="my-8">
        <img 
          src="https://i.imgur.com/VpAeLuI.jpg" 
          alt="Website" 
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <h3 className="text-pink-600 font-bold text-xl">💗 Las personas que buscan a Lady Soraya hoy se dividen en dos caminos:</h3>

        <div className="bg-white border-2 border-pink-100 p-4 rounded-xl shadow-sm space-y-4">
            <div className="flex gap-3">
                <span className="text-2xl font-bold text-pink-500">1️⃣</span>
                <p>Quienes desean traer de vuelta un amor — un ex que se alejó, se enfrió, desapareció, bloqueó o parece distante.</p>
            </div>
            <div className="flex gap-3">
                <span className="text-2xl font-bold text-pink-500">2️⃣</span>
                <p>Quienes desean atraer un nuevo amor verdadero — personas solteras, cansadas de encuentros vacíos, que sienten que nunca encuentran a alguien compatible o “hecho para ellas”.</p>
            </div>
        </div>

        <p>
          Lady Soraya explica que ambos caminos son sagrados y legítimos — y el hechizo actúa según la energía de tu corazón.
        </p>

        <p>
          Ahora puedes lanzar un poderoso hechizo de amor sobre la persona que es tu destino — incluso si ese destino es alguien del pasado o alguien totalmente nuevo que aún no ha llegado.
        </p>

        <p>
          Y aunque no tengas a nadie específico en mente, el hechizo también funciona:<br/>
          Atrae a la persona correcta, un nuevo amor predestinado que combina exactamente con tu energía.
        </p>

        <p className="font-bold">¿Y cuánto cuesta?</p>
        <p>Nada comparado con el valor del amor verdadero.</p>

        <p>
          Lady Soraya no busca lucro — solo cumplir su misión.<br/>
          Pero, para mantener el sitio en funcionamiento, fue necesario cobrar un valor simbólico.
        </p>

        <p className="text-2xl text-center font-bold text-green-600 border-2 border-green-600 p-4 rounded-lg inline-block w-full">
          Solo ${price} — un número sagrado — para las 1111 personas elegidas.
        </p>

        <p>
          Aunque estés pasando por dificultades…<br/>
          Aunque estés sufriendo solo…<br/>
          Aunque hayas perdido la esperanza…<br/>
          Esta es tu señal.
        </p>

        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl space-y-4 shadow-sm">
            <h3 className="font-bold text-xl text-yellow-800 text-center">Solo hoy, al lanzar el hechizo de Lady Soraya, recibirás gratuitamente:</h3>
            
            <ul className="space-y-4">
                <li>
                    <span className="font-bold text-pink-700">BONO 1 ($97) ✔️ Ritual de Protección Amorosa</span> — protege el hechizo contra la envidia, energías negativas e interferencias de terceros, garantizando que el amor permanezca firme y blindado.
                </li>
                <li>
                    <span className="font-bold text-pink-700">BONO 2 ($67) ✔️ Oración de la Conexión Inmediata</span> — activa señales rápidas como mensajes, pensamientos recurrentes y acercamientos espontáneos de la persona destinada a ti.
                </li>
                <li>
                    <span className="font-bold text-pink-700">BONO 3 ($127) ✔️ Ritual de la Luna del Amor</span> — potencia el hechizo principal en noches especiales, multiplicando la fuerza de la pasión, el deseo y la unión emocional.
                </li>
                <li>
                    <span className="font-bold text-pink-700">BONO 4 ($97) ✔️ Llamada Amorosa (para nuevos amores)</span> — atrae a la persona predestinada cuando no tienes a nadie específico en mente, alineando el universo a tu favor.
                </li>
                <li>
                    <span className="font-bold text-pink-700">BONO 5 ($77) ✔️ Mensaje de Activación Personalizada</span> — prepara tu energía emocional y espiritual para recibir el amor, evitando bloqueos y acelerando los resultados del ritual.
                </li>
            </ul>

            <div className="bg-white p-4 rounded-lg text-center border border-yellow-300">
                <p className="font-bold text-lg">🎁 Valor total de los bonos: <span className="line-through text-red-500">$465</span></p>
                <p className="text-green-600 font-bold text-xl">👉 Hoy: incluidos gratuitamente en tu ritual</p>
            </div>
        </div>

        <p className="text-sm text-gray-500 italic">
          Estos bonos solo se entregan mientras Lady Soraya aún busca ayudar a las 1111 personas elegidas.
          Cuando se alcance ese número, los rituales de bonificación serán retirados permanentemente.
        </p>

        <p className="text-xl text-center font-bold text-green-600">
            ✨ Por solo ${price} hoy, puedes lanzar el hechizo que hará que cualquier persona te ame eternamente. ✨
        </p>

        <p>Muy pocas personas en el mundo ya han sentido una conexión así.</p>
      </div>

       {/* Image 12 */}
       <div className="my-8">
        <img 
          src="https://i.imgur.com/hErcL3l.jpg" 
          alt="Connection" 
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <p className="font-bold text-red-800 mb-2">Pero recuerda: este hechizo es poderoso y permanente.</p>
            <p className="mb-4">Por eso, solo está disponible para personas que aceptan los siguientes términos:</p>
            <ul className="space-y-2">
                <li className="flex items-start gap-2">
                    <Check size={20} className="mt-1 text-red-600" />
                    <span>Creo que el amor verdadero es posible.</span>
                </li>
                <li className="flex items-start gap-2">
                    <Check size={20} className="mt-1 text-red-600" />
                    <span>No revelaré a nadie que lancé el hechizo (esto causa “ruptura del encanto”).</span>
                </li>
                <li className="flex items-start gap-2">
                    <Check size={20} className="mt-1 text-red-600" />
                    <span>Entiendo que, una vez lanzado, no hay retorno.</span>
                </li>
            </ul>
        </div>

        <p className="text-center font-bold text-xl">Si estás de acuerdo… 👉 Haz clic en el botón de abajo:</p>

        <CTAButton text="LANZAR HECHIZO AHORA" subtext="💫 Funciona todavía esta noche 💫" onClick={handleCTAClick} />

        <div className="text-center space-y-4">
            <p>A partir de ahí, serás dirigido a un formulario de pedido 100% seguro.</p>
            <p>Esto nos ayuda a mantener el sitio en línea.</p>
            <p>Así que completes tus datos…</p>
            <p>Serás llevado a un pequeño quiz.</p>
            <p>Ese quiz ayudará a Lady Soraya a lanzar el hechizo con el máximo poder y precisión posible.</p>
            <p>Después de completar todo…</p>
            <p className="font-bold text-pink-600 text-xl">✨ Tu hechizo será lanzado dentro de 24 horas. ✨</p>
            <p>Y, en solo unos días… mirarás este momento y sonreirás,</p>
            <p>Porque este fue el momento en que tu vida amorosa cambió para siempre.</p>
            <p>El día en que tomaste el control.</p>
            <p>El día en que el otro finalmente se dio cuenta…</p>
            <p className="font-bold text-pink-600 text-xl">💖 Ustedes están destinados el uno al otro. 💖</p>
        </div>

        <CTAButton text="QUIERO AHORA" subtext="💫 Funciona todavía esta noche 💫" onClick={handleCTAClick} />

        {/* Testimonials Section */}
        <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-2">Algunas personas a las que Lady Soraya ayudó</h3>
            <p className="text-center text-gray-600">Mira lo que están diciendo…</p>
            <Testimonials />
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 bg-white border border-gray-200 shadow-lg rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-rose-500"></div>
            <div className="flex justify-center mb-4">
                <ShieldCheck className="text-green-500 w-16 h-16" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Garantía de Satisfacción</h3>
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-6">Sello de Garantía</p>
            
            <p className="mb-4 text-gray-700">Lady Soraya confía tanto en la experiencia que creó una garantía total:</p>
            
            <p className="mb-4 text-gray-700">
                Si sientes que el hechizo no funcionó en tu vida amorosa, solo tienes que enviar un correo electrónico a <span className="font-bold text-pink-600">contato@ladysoraya.com.br</span> dentro del plazo de 72 horas después de la compra.
            </p>

            <p className="font-bold text-lg text-gray-900 mb-4">👉 Serás 100% reembolsado, sin preguntas.</p>

            <p className="text-gray-500 text-sm">Sin burocracia. Sin complicaciones. Sin riesgo para ti.</p>
        </div>

        {/* FAQ Section */}
        <FAQ />

        {/* Final CTA */}
        <div className="text-center space-y-4">
            <p className="font-bold text-xl text-pink-600">✨ Lanza tu hechizo de amor ahora. ✨</p>
            <p>Funciona todavía esta noche.</p>
        </div>

        <CTAButton text="QUIERO AHORA" subtext="💫 Funciona todavía esta noche 💫" onClick={handleCTAClick} />

      </div>
    </div>
  );
};

export default SalesPage;