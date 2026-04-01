import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Múltiplas tentativas para garantir que o scroll aconteça
    const scrollToTop = () => {
      // Método 1: Scroll direto no document
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Método 2: window.scrollTo
      window.scrollTo(0, 0);
      
      // Método 3: scroll no elemento root
      const root = document.getElementById('root');
      if (root) {
        root.scrollTop = 0;
      }
    };

    // Executa imediatamente
    scrollToTop();
    
    // Executa novamente após um pequeno delay para garantir
    const timer = setTimeout(scrollToTop, 0);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}