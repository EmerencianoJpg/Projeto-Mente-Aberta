import { X, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark') => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[#faf8f3] border-4 border-[#6b4423] shadow-[12px_12px_0px_0px_rgba(61,40,23,1)] max-w-lg w-full mx-4">
        {/* Header */}
        <div className="bg-[#6b4423] text-[#faf8f3] p-6 border-b-4 border-[#3d2817] flex items-center justify-between">
          <h2 className="text-2xl font-bold uppercase tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
            Configurações
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#8b6f47] transition-colors border-2 border-[#3d2817]"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#3d2817] mb-4 uppercase tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
              Tema do Site
            </h3>
            <p className="text-[#7a6d5a] mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              Escolha entre o tema claro (padrão) ou escuro para uma melhor experiência de visualização.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleThemeChange('light')}
                className={`flex flex-col items-center gap-3 p-6 border-2 transition-all ${
                  theme === 'light'
                    ? 'bg-[#6b4423] text-[#faf8f3] border-[#3d2817] shadow-[4px_4px_0px_0px_rgba(61,40,23,1)]'
                    : 'bg-white text-[#6b4423] border-[#6b4423] hover:bg-[#e8e3d6]'
                }`}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                <div className={`p-3 border-2 ${theme === 'light' ? 'border-[#faf8f3]' : 'border-[#6b4423]'}`}>
                  <Sun className="w-8 h-8" />
                </div>
                <span className="font-bold uppercase tracking-wide">Claro</span>
              </button>

              <button
                onClick={() => handleThemeChange('dark')}
                className={`flex flex-col items-center gap-3 p-6 border-2 transition-all ${
                  theme === 'dark'
                    ? 'bg-[#6b4423] text-[#faf8f3] border-[#3d2817] shadow-[4px_4px_0px_0px_rgba(61,40,23,1)]'
                    : 'bg-white text-[#6b4423] border-[#6b4423] hover:bg-[#e8e3d6]'
                }`}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                <div className={`p-3 border-2 ${theme === 'dark' ? 'border-[#faf8f3]' : 'border-[#6b4423]'}`}>
                  <Moon className="w-8 h-8" />
                </div>
                <span className="font-bold uppercase tracking-wide">Escuro</span>
              </button>
            </div>
          </div>

          <div className="mt-8 p-4 bg-[#e8e3d6] border-2 border-[#6b4423]">
            <p className="text-sm text-[#3d2817]" style={{ fontFamily: 'Crimson Text, serif' }}>
              <strong>Nota:</strong> O tema escuro está em desenvolvimento. A funcionalidade completa será disponibilizada em breve.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t-4 border-[#6b4423] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-[#6b4423] text-[#faf8f3] border-2 border-[#3d2817] font-bold hover:bg-[#8b6f47] transition-all shadow-[4px_4px_0px_0px_rgba(61,40,23,1)] hover:shadow-[6px_6px_0px_0px_rgba(61,40,23,1)] uppercase tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
