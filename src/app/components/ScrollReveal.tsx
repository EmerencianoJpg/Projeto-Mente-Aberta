import { useEffect, useRef, useState, ReactNode } from 'react';

// Definição das propriedades que o componente pode receber
interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade-in';
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScrollReveal({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  duration = 500, // Tempo padrão de 500ms 
  className = ''
}: ScrollRevealProps) {
  // Estado que controla se o elemento está visível na tela
  const [isVisible, setIsVisible] = useState(false);
  // Referência para o elemento HTML que será observado
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Configuração do observador que detecta a entrada do elemento na tela
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Quando o elemento entra na tela, ativa a visibilidade
            setIsVisible(true);
            // Para de observar o elemento após a primeira aparição
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.01, // Dispara quando 1% do elemento está visível
        rootMargin: '0px 0px -20px 0px' 
      }
    );

    // Inicia a observação se o elemento existir
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Limpeza da memória ao desmontar o componente
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      // Aplica classes CSS baseadas no estado de visibilidade e tipo de animação
      className={`scroll-reveal ${animation} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        // Curva cubic-bezier para garantir que o movimento comece rápido e termine suave
        transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' 
      }}
    >
      {children}
    </div>
  );
}