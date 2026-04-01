import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f1ea]">
      <div className="text-center bg-[#faf8f3] border-4 border-[#6b4423] p-12 shadow-[8px_8px_0px_0px_rgba(107,68,35,0.3)] max-w-lg mx-4">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-[#6b4423]"></div>
          <span className="text-[#6b4423] text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>◆</span>
          <div className="h-px w-12 bg-[#6b4423]"></div>
        </div>
        <h1 className="text-6xl font-bold text-[#6b4423] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>404</h1>
        <p className="text-2xl text-[#3d2817] mb-8 uppercase tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>Página não encontrada</p>
        <Link 
          to="/" 
          className="inline-block bg-[#6b4423] text-[#faf8f3] px-8 py-3 border-2 border-[#3d2817] font-bold hover:bg-[#8b6f47] transition-colors uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(61,40,23,1)]"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}