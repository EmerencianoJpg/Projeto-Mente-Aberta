import { Mail, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';

export function Footer() {
  return (
    // Ajustado para dark-mode: no gradiente
    <footer className="bg-gradient-to-br from-[#e0daf7] to-white dark-mode:from-[#1a0a2e] dark-mode:to-[#2d1b4e] mt-20 border-t-4 border-double border-[#5015bd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Sobre */}
          <div>
            <h3 className="text-[#3d0a49] dark-mode:text-white font-bold text-xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Projeto Mente Aberta
            </h3>
            <p className="text-sm text-[#5015bd] dark-mode:text-white/90 leading-relaxed mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              Espaço dedicado à divulgação dos trabalhos acadêmicos dos estudantes de Psicologia, promovendo o conhecimento científico e a troca de experiências.
            </p>
            
            {/* Redes Sociais */}
            <div className="flex gap-3 mt-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#5015bd] p-2 border-2 border-[#3d0a49] hover:bg-[#3d0a49] transition-all hover:scale-110 shadow-[3px_3px_0px_0px_rgba(80,21,189,0.4)]"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#027fe9] p-2 border-2 border-[#3d0a49] hover:bg-[#5015bd] transition-all hover:scale-110 shadow-[3px_3px_0px_0px_rgba(2,127,233,0.4)]"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#00caf8] p-2 border-2 border-[#3d0a49] hover:bg-[#027fe9] transition-all hover:scale-110 shadow-[3px_3px_0px_0px_rgba(0,202,248,0.4)]"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-[#3d0a49] dark-mode:text-white font-bold text-xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Navegação
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-[#5015bd] dark-mode:text-white/90 hover:text-[#027fe9] dark-mode:hover:text-[#00caf8] transition-colors flex items-center gap-2 group font-medium">
                  <span className="text-[#00caf8] group-hover:translate-x-1 transition-transform">›</span> Início
                </a>
              </li>
              <li>
                <a href="/projetos" className="text-[#5015bd] dark-mode:text-white/90 hover:text-[#027fe9] dark-mode:hover:text-[#00caf8] transition-colors flex items-center gap-2 group font-medium">
                  <span className="text-[#00caf8] group-hover:translate-x-1 transition-transform">›</span> Projetos
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-[#5015bd] dark-mode:text-white/90 hover:text-[#027fe9] dark-mode:hover:text-[#00caf8] transition-colors flex items-center gap-2 group font-medium">
                  <span className="text-[#00caf8] group-hover:translate-x-1 transition-transform">›</span> Sobre o Evento
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-[#3d0a49] dark-mode:text-white font-bold text-xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Contato
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#027fe9] dark-mode:text-[#00caf8] mt-1 flex-shrink-0" />
                <p className="text-[#5015bd] dark-mode:text-white/90 leading-relaxed">
                  Universidade Federal de Jataí - UFJ<br />
                  Câmpus Jatobá - Cidade Universitária<br />
                  BR 364, KM 195, nº 3800<br />
                  Jataí - Goiás<br />
                  CEP 75801-615
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00caf8] flex-shrink-0" />
                <a href="https://mail.google.com/mail/?view=cm&to=obsamufj@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[#5015bd] dark-mode:text-white/90 hover:text-[#027fe9] dark-mode:hover:text-[#00caf8] transition-colors font-medium">
                  obsamufj@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#5015bd]/20 dark-mode:border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-[#5015bd] dark-mode:text-white/80" style={{ fontFamily: 'Crimson Text, serif' }}>
            <span className="text-[#00caf8] font-bold">★</span> Est. 2026 <span className="text-[#00caf8] font-bold">★</span> Projeto Mente Aberta <span className="text-[#00caf8] font-bold">★</span> Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}