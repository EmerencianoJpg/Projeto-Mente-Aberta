import { Link } from 'react-router';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
const obsamLogo = '/obsam_logo.png'; 

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      // Ativa as duas classes para garantir compatibilidade total
      document.documentElement.classList.add('dark', 'dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      // Adiciona 'dark' (pro Footer) e 'dark-mode' (pro resto do site)
      document.documentElement.classList.add('dark', 'dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      // Remove ambas
      document.documentElement.classList.remove('dark', 'dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      <nav className="bg-white border-b-4 border-double border-[#5015bd] fixed top-0 left-0 w-full z-[100] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-white p-2 border-2 border-[#3d0a49] shadow-[2px_2px_0px_0px_rgba(80,21,189,0.5)] group-hover:shadow-[4px_4px_0px_0px_rgba(80,21,189,0.6)] transition-all">
                <img src={obsamLogo} alt="OBSAM Logo" className="w-7 h-7 object-contain" />
              </div>
              <span className="text-2xl font-bold text-[#5015bd] group-hover:text-[#027fe9] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                Projeto Mente Aberta
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-[#5015bd] hover:text-[#027fe9] transition-all font-semibold uppercase tracking-wide text-sm relative group hover:scale-110" style={{ fontFamily: 'Playfair Display, serif' }}>
                Início
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00caf8] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/projetos" className="text-[#5015bd] hover:text-[#027fe9] transition-all font-semibold uppercase tracking-wide text-sm relative group hover:scale-110" style={{ fontFamily: 'Playfair Display, serif' }}>
                Projetos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00caf8] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/sobre" className="text-[#5015bd] hover:text-[#027fe9] transition-all font-semibold uppercase tracking-wide text-sm relative group hover:scale-110" style={{ fontFamily: 'Playfair Display, serif' }}>
                Sobre
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00caf8] group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <button onClick={toggleTheme} className="p-2 bg-[#027fe9] border-2 border-[#3d0a49] hover:bg-[#00caf8] transition-all shadow-[2px_2px_0px_0px_rgba(2,127,233,0.5)]">
                {isDarkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-white" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 hover:bg-[#e0daf7] transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6 text-[#5015bd]" /> : <Menu className="w-6 h-6 text-[#5015bd]" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#5015bd]/20">
              <div className="flex flex-col gap-4">
                <Link to="/" className="text-[#5015bd] font-semibold uppercase text-sm px-2 py-1" onClick={() => setIsMenuOpen(false)}>Início</Link>
                <Link to="/projetos" className="text-[#5015bd] font-semibold uppercase text-sm px-2 py-1" onClick={() => setIsMenuOpen(false)}>Projetos</Link>
                <Link to="/sobre" className="text-[#5015bd] font-semibold uppercase text-sm px-2 py-1" onClick={() => setIsMenuOpen(false)}>Sobre</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="h-20 w-full"></div>
    </>
  );
}