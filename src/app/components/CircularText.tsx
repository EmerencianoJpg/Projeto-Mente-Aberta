import { useEffect, useRef } from 'react';
const obsamLogo = '/obsam_logo.png'; 

interface CircularTextProps {
  topText?: string;
  bottomText?: string;
  projectName?: string;
}

export function CircularText({ 
  topText = "Saúde não se vende",
  bottomText = "Loucura não se prende",
  projectName = "Projeto Mente Aberta"
}: CircularTextProps) {
  const topTextRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);
  const leftDashRef = useRef<HTMLSpanElement>(null);
  const rightDashRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const transformValue = `calc(-1 * var(--circle-radius, 200px))`;

    if (topTextRef.current) {
      const chars = topTextRef.current.querySelectorAll('.char');
      const totalChars = chars.length;
      const angleStep = 160 / (totalChars - 1); 
      
      chars.forEach((char, i) => {
        const angle = -80 + (i * angleStep); 
        (char as HTMLElement).style.transform = `rotate(${angle}deg) translateY(${transformValue})`;
      });
    }

    if (bottomTextRef.current) {
      const chars = bottomTextRef.current.querySelectorAll('.char');
      const totalChars = chars.length;
      const angleStep = 160 / (totalChars - 1); 
      
      chars.forEach((char, i) => {
        const angle = 100 + (i * angleStep); 
        (char as HTMLElement).style.transform = `rotate(${angle}deg) translateY(${transformValue})`;
      });
    }

    if (leftDashRef.current) {
      leftDashRef.current.style.transform = `rotate(-90deg) translateY(${transformValue})`;
    }

    if (rightDashRef.current) {
      rightDashRef.current.style.transform = `rotate(90deg) translateY(${transformValue})`;
    }
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span
        key={i}
        className="char absolute left-1/2 top-1/2"
        style={{ 
          fontFamily: 'Playfair Display, serif',
          transformOrigin: '0 0',
        }}
      >
        <span className="inline-block" style={{ transform: 'translateX(-50%)' }}>
          {char}
        </span>
      </span>
    ));
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto my-4 md:my-8 overflow-hidden md:overflow-visible">
      
      {/* 1. RAIO DO TEXTO EXPANDIDO: De 145px para 165px no mobile */}
      <div 
        className="relative w-full max-w-xl mx-auto [--circle-radius:165px] sm:[--circle-radius:180px] md:[--circle-radius:200px]" 
        style={{ aspectRatio: '1 / 1' }}
      >
        {/* Círculo externo (Tracejado branco) */}
        <div className="absolute inset-2 md:inset-0 border-4 border-dashed border-white/40 rounded-full animate-spin-counter-clockwise"></div>
        
        {/* Círculo com textos */}
        <div className="absolute inset-0 animate-spin-slow-clockwise">
          <div 
            ref={topTextRef}
            className="absolute inset-0 text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-white pointer-events-none"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {splitText(topText)}
          </div>

          <div 
            ref={bottomTextRef}
            className="absolute inset-0 text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-[#00caf8] pointer-events-none"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {splitText(bottomText)}
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <span
              ref={leftDashRef}
              className="absolute left-1/2 top-1/2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white"
              style={{ fontFamily: 'Playfair Display, serif', transformOrigin: '0 0' }}
            >
              <span className="inline-block" style={{ transform: 'translateX(-50%)' }}>-</span>
            </span>
            
            <span
              ref={rightDashRef}
              className="absolute left-1/2 top-1/2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#00caf8]"
              style={{ fontFamily: 'Playfair Display, serif', transformOrigin: '0 0' }}
            >
              <span className="inline-block" style={{ transform: 'translateX(-50%)' }}>-</span>
            </span>
          </div>
        </div>
        
        {/* 2. CÍRCULO AZUL MAIS ABERTO: Diminuímos o inset para 10 no mobile */}
        <div className="absolute inset-10 sm:inset-14 md:inset-16 border-2 border-dotted border-[#00caf8]/40 rounded-full animate-spin-counter-clockwise"></div>

        {/* 3. LOGO IMPONENTE: Tamanhos aumentados e forçados para mobile */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-white rounded-full p-7 sm:p-8 md:p-8 lg:p-10 border-4 border-[#3d0a49] shadow-[6px_6px_0px_0px_rgba(80,21,189,0.4)] md:shadow-[8px_8px_0px_0px_rgba(80,21,189,0.4)] hover:shadow-[12px_12px_0px_0px_rgba(2,127,233,0.5)] transition-all duration-500 hover:scale-110 group">
            <img 
              src={obsamLogo} 
              alt="OBSAM Logo" 
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain transition-transform duration-500" 
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-4 sm:mt-8 md:mt-12 max-w-2xl mx-auto space-y-3 md:space-y-4 px-4">
        <div className="space-y-2">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {projectName}
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#00caf8] to-transparent"></div>
        </div>
        
        <h3 
          className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide" 
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Mostra de Projetos de Psicologia
        </h3>
      </div>
    </div>
  );
}