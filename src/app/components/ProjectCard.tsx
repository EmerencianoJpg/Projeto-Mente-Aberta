import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link 
      to={`/projeto/${project.id}`}
      // 1. A MÁGICA AQUI: Adicionamos 'flex flex-col h-full' para o link virar um bloco estruturado!
      className="flex flex-col h-full group bg-white border-4 border-[#5015bd] overflow-hidden shadow-[4px_4px_0px_0px_rgba(80,21,189,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(2,127,233,0.5)] transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-56 overflow-hidden bg-[#e0daf7] border-b-4 border-[#5015bd] shrink-0">
        {project.coverType === 'video' ? (
          <video
            src={project.coverImage}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        <div className="absolute top-4 right-4 bg-[#5015bd] text-white px-3 py-1 border-2 border-[#3d0a49] text-xs font-semibold uppercase tracking-wide shadow-[2px_2px_0px_0px_rgba(61,10,73,0.4)]" style={{ fontFamily: 'Playfair Display, serif' }}>
          {project.course}
        </div>
      </div>
      
      {/* 2. MAIS MÁGICA: 'flex-1 flex flex-col' faz a parte branca do cartão esticar e empurrar o rodapé para baixo */}
      <div className="p-6 bg-white flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-[#3d0a49] mb-3 group-hover:text-[#027fe9] transition-colors line-clamp-2" style={{ fontFamily: 'Playfair Display, serif' }}>
          {project.title}
        </h3>
        
        {/* flex-1 no parágrafo ocupa o espaço vazio se o texto for curto */}
        <p className="text-sm text-[#5015bd] mb-4 line-clamp-2 leading-relaxed flex-1" style={{ fontFamily: 'Crimson Text, serif' }}>
          {project.description}
        </p>
        
        <div className="mb-4 pb-4 border-b-2 border-[#5015bd]/20 mt-auto">
          <p className="text-xs font-semibold text-[#5015bd] uppercase tracking-wide mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Autores:</p>
          <p className="text-sm text-[#3d0a49] line-clamp-2" style={{ fontFamily: 'Crimson Text, serif' }}>
            {project.authors.join(', ')}
          </p>
        </div>
        
        <div className="flex items-center text-[#5015bd] font-semibold text-sm group-hover:text-[#027fe9] group-hover:gap-2 transition-all uppercase tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
          Ver detalhes
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}