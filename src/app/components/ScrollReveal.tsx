import { useEffect, useRef, useState, ReactNode } from 'react';

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
  duration = 500, // Reduzido de 800 para 500 para mais agilidade
  className = ''
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05, // Dispara com apenas 5% de visibilidade
        rootMargin: '0px 0px -20px 0px' // Reduzido para disparar mais rápido ao scrollar
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${animation} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        // Essa curva aqui embaixo é o segredo do toque profissional (começa rápido, termina suave)
        transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' 
      }}
    >
      {children}
    </div>
  );
}