import { Link } from 'react-router';
import { BookPlus } from 'lucide-react';

export function FloatingAdminButton() {
  return (
    <Link
      to="/admin"
      className="floating-admin-btn fixed bottom-6 left-6 z-50 p-4 bg-[#027fe9] rounded-full border-3 border-[#3d0a49] hover:bg-[#0066cc] transition-all duration-300 hover:scale-110 group shadow-[4px_4px_0px_0px_rgba(2,127,233,0.6)] hover:shadow-[6px_6px_0px_0px_rgba(2,127,233,0.8)]"
      title="Adicionar Projeto"
      aria-label="Ir para painel administrativo"
    >
      <BookPlus className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
    </Link>
  );
}