import { useParams, Link } from 'react-router';
import { ArrowLeft, User, GraduationCap, Tag, Calendar, Download, Image as ImageIcon, Video, Music, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

export default function ProjectDetail() {
  // Puxa o ID da URL para encontrar o projeto específico
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  
  // Estados para controlar a aba ativa e a navegação da galeria de fotos
  const [activeTab, setActiveTab] = useState<'info' | 'gallery' | 'videos' | 'audios' | 'downloads'>('info');
  const [selectedImage, setSelectedImage] = useState(0);

  // Seleciona automaticamente outros 3 projetos para a seção de recomendações
  const relatedProjects = projects
    .filter(p => p.id !== id)
    .slice(0, 3);

  // Tratamento de erro caso o ID na URL não exista no arquivo de dados
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FFF9F0]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <ScrollReveal animation="fade-up" className="text-center">
            <h2 className="text-3xl font-bold text-[#3d0a49] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Projeto não encontrado
            </h2>
            <Link
              to="/projetos"
              className="text-[#5015bd] font-semibold hover:text-[#027fe9] border-b-2 border-[#5015bd]"
            >
              Voltar para projetos
            </Link>
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    );
  }

  // Definição de dados complementares (Galeria, Vídeos, Áudios e Documentos)
  const mockGallery = project.gallery || [
    'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
    'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800',
  ];
  const mockVideos = project.videos || [];
  const mockAudios = project.audios || [];
  const mockDocuments = project.documents || [
    { name: 'Artigo Completo.pdf', url: '#', size: '2.5 MB' },
    { name: 'Apresentação.pptx', url: '#', size: '8.3 MB' },
  ];

  // Configuração das abas de navegação
  const tabs = [
    { id: 'info' as const, label: 'Informações', icon: FileText, count: null },
    { id: 'gallery' as const, label: 'Galeria', icon: ImageIcon, count: mockGallery.length },
    { id: 'videos' as const, label: 'Vídeos', icon: Video, count: mockVideos.length },
    { id: 'audios' as const, label: 'Áudios', icon: Music, count: mockAudios.length },
    { id: 'downloads' as const, label: 'Downloads', icon: Download, count: mockDocuments.length },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f1ea]">
      <Navbar />
      
      <main className="flex-1">
        {/* Barra de navegação interna (Voltar) */}
        <div className="bg-white border-b-2 border-[#5015bd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <ScrollReveal animation="fade-right">
              <Link
                to="/projetos"
                className="inline-flex items-center gap-2 text-[#5015bd] hover:text-[#027fe9] transition-colors font-semibold uppercase tracking-wide text-sm"
              >
                <ArrowLeft className="w-5 h-5" />
                Voltar para projetos
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Cabeçalho Detalhado: Título, Autores e Metadados */}
        <section className="bg-white border-b-4 border-double border-[#5015bd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <ScrollReveal animation="fade-down" className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-[#5015bd] text-white px-4 py-2 border-2 border-[#3d0a49] text-sm font-bold uppercase tracking-widest mb-6 shadow-[2px_2px_0px_0px_rgba(61,10,73,0.4)]">
                <Tag className="w-4 h-4" />
                {project.course}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#3d0a49] mb-8 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                {project.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-[#5015bd]">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-[#027fe9]" />
                  <span>{project.authors.join(', ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#027fe9]" />
                  <span>{project.course}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#027fe9]" />
                  <span>Ano {project.year}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Seção de Mídia de Capa: Suporta Imagem ou Vídeo */}
        <section className="bg-white border-b-4 border-double border-[#5015bd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ScrollReveal animation="zoom-in" className="border-8 border-double border-[#5015bd] overflow-hidden">
              {project.coverType === 'video' ? (
                <video src={project.coverImage} controls className="w-full h-[400px] md:h-[600px] object-cover" />
              ) : (
                <img src={project.coverImage} alt={project.title} className="w-full h-[400px] md:h-[600px] object-cover" />
              )}
            </ScrollReveal>
          </div>
        </section>

        {/* Menu de Abas para Conteúdo Multimídia */}
        <section className="bg-[#e0daf7] border-b-4 border-[#5015bd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto scrollbar-hide gap-2 py-4">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 border-2 font-bold uppercase tracking-wide text-sm whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-[#5015bd] text-white border-[#3d0a49] shadow-[4px_4px_0px_0px_rgba(61,10,73,0.6)]'
                        : 'bg-white text-[#5015bd] border-[#5015bd] hover:bg-[#5015bd] hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                    {tab.count !== null && <span className="ml-1 px-2 py-0.5 rounded-full text-xs bg-[#3d0a49] text-white">{tab.count}</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Conteúdo Dinâmico das Abas */}
        <section className="py-12 bg-[#e0daf7]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Aba de Informações: Descrição e Sidebar com detalhes */}
            {activeTab === 'info' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <ScrollReveal animation="fade-right" className="lg:col-span-2">
                  <div className="bg-white border-4 border-[#5015bd] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                    <h2 className="text-3xl font-bold text-[#3d0a49] mb-8 uppercase tracking-wide border-b-2 border-[#5015bd] pb-2">Sobre o Projeto</h2>
                    <p className="text-[#3d0a49] leading-relaxed text-lg whitespace-pre-line">{project.fullDescription}</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-left" className="lg:col-span-1">
                  <div className="bg-white border-4 border-[#5015bd] p-8 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                    <h3 className="text-2xl font-bold text-[#3d0a49] mb-6 uppercase tracking-wide text-center border-b-2 border-[#5015bd] pb-4">Informações</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold text-[#5015bd] uppercase tracking-widest mb-3">Autores</h4>
                        <ul className="space-y-2">
                          {project.authors.map((author, i) => <li key={i} className="text-[#3d0a49]">› {author}</li>)}
                        </ul>
                      </div>
                      <div className="border-t-2 border-[#5015bd] pt-6">
                        <h4 className="text-xs font-bold text-[#5015bd] uppercase tracking-widest mb-3">Curso/Área</h4>
                        <p className="text-[#3d0a49]">{project.course}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            )}

            {/* Aba Galeria: Visualizador de fotos com navegação */}
            {activeTab === 'gallery' && (
              <div className="bg-white border-4 border-[#5015bd] p-8 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                {mockGallery.length > 0 ? (
                  <>
                    <img src={mockGallery[selectedImage]} className="w-full h-[500px] object-cover border-8 border-double border-[#5015bd] mb-6" />
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                      {mockGallery.map((img, i) => (
                        <button key={i} onClick={() => setSelectedImage(i)} className={`border-4 ${selectedImage === i ? 'border-[#3d0a49]' : 'border-[#5015bd]'}`}>
                          <img src={img} className="w-full h-24 object-cover" />
                        </button>
                      ))}
                    </div>
                  </>
                ) : <p className="text-center py-12">Nenhuma foto disponível.</p>}
              </div>
            )}

            {/* Outras Abas: Vídeos, Áudios e Downloads, lógica similar */}
            {activeTab === 'downloads' && (
              <div className="bg-white border-4 border-[#5015bd] p-8 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                <div className="space-y-4">
                  {mockDocuments.map((doc, i) => (
                    <div key={i} className="border-4 border-[#5015bd] p-6 flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-[#3d0a49]">{doc.name}</h3>
                        <p className="text-sm text-[#5015bd]">Tamanho: {doc.size}</p>
                      </div>
                      <a href={doc.url} download className="bg-[#5015bd] text-white px-6 py-3 border-2 border-[#3d0a49] font-bold">Baixar</a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Seção de Projetos Relacionados */}
        <section className="py-12 bg-[#e0daf7]/20 border-t-4 border-double border-[#5015bd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#3d0a49] uppercase tracking-wide text-center mb-10">Outros Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((p, i) => <ProjectCard key={p.id} project={p} />)}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}