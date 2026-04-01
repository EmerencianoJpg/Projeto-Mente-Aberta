import { useParams, Link } from 'react-router';
import { ArrowLeft, User, GraduationCap, Tag, Calendar, Download, Image as ImageIcon, Video, Music, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [activeTab, setActiveTab] = useState<'info' | 'gallery' | 'videos' | 'audios' | 'downloads'>('info');
  const [selectedImage, setSelectedImage] = useState(0);

  // Selecionar 3 projetos relacionados (excluindo o projeto atual)
  const relatedProjects = projects
    .filter(p => p.id !== id)
    .slice(0, 3);

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
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Voltar para projetos
            </Link>
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    );
  }

  // Mock data - em produção viriam do banco de dados
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
        {/* Back Button */}
        <div className="bg-white border-b-2 border-[#5015bd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <ScrollReveal animation="fade-right">
              <Link
                to="/projetos"
                className="inline-flex items-center gap-2 text-[#5015bd] hover:text-[#027fe9] transition-colors font-semibold uppercase tracking-wide text-sm"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                <ArrowLeft className="w-5 h-5" />
                Voltar para projetos
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Project Header */}
        <section className="bg-white border-b-4 border-double border-[#5015bd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <ScrollReveal animation="fade-down" className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-[#5015bd] text-white px-4 py-2 border-2 border-[#3d0a49] text-sm font-bold uppercase tracking-widest mb-6 shadow-[2px_2px_0px_0px_rgba(61,10,73,0.4)]" style={{ fontFamily: 'Playfair Display, serif' }}>
                <Tag className="w-4 h-4" />
                {project.course}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#3d0a49] mb-8 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                {project.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-[#5015bd]" style={{ fontFamily: 'Crimson Text, serif' }}>
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

        {/* Project Image/Video */}
        <section className="bg-white border-b-4 border-double border-[#5015bd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ScrollReveal animation="zoom-in" className="border-8 border-double border-[#5015bd] overflow-hidden">
              {project.coverType === 'video' ? (
                <video
                  src={project.coverImage}
                  controls
                  className="w-full h-[400px] md:h-[600px] object-cover"
                />
              ) : (
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-[400px] md:h-[600px] object-cover"
                />
              )}
            </ScrollReveal>
          </div>
        </section>

        {/* Tabs Navigation */}
        <section className="bg-[#e0daf7] border-b-4 border-[#5015bd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up" className="flex overflow-x-auto scrollbar-hide gap-2 py-4">
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
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                    {tab.count !== null && (
                      <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                        isActive ? 'bg-[#3d0a49]' : 'bg-[#5015bd] text-white'
                      }`}>
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </ScrollReveal>
          </div>
        </section>

        {/* Tab Content */}
        <section className="py-12 bg-[#e0daf7]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Info Tab */}
            {activeTab === 'info' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content - Vindo da esquerda */}
                <ScrollReveal animation="fade-right" className="lg:col-span-2">
                  <div className="bg-white border-4 border-[#5015bd] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-px flex-1 bg-[#5015bd]"></div>
                      <h2 className="text-3xl font-bold text-[#3d0a49] uppercase tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Sobre o Projeto
                      </h2>
                      <div className="h-px flex-1 bg-[#5015bd]"></div>
                    </div>
                    
                    <div className="prose prose-lg max-w-none">
                      <p className="text-[#3d0a49] leading-relaxed text-lg whitespace-pre-line" style={{ fontFamily: 'Crimson Text, serif' }}>
                        {project.fullDescription}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Sidebar - Vindo da direita */}
                <ScrollReveal animation="fade-left" className="lg:col-span-1">
                  <div className="bg-white border-4 border-[#5015bd] p-8 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                    <h3 className="text-2xl font-bold text-[#3d0a49] mb-6 uppercase tracking-wide text-center border-b-2 border-[#5015bd] pb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Informações
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold text-[#5015bd] uppercase tracking-widest mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Autores
                        </h4>
                        <ul className="space-y-2">
                          {project.authors.map((author, index) => (
                            <li key={index} className="flex items-start gap-2 text-[#3d0a49]" style={{ fontFamily: 'Crimson Text, serif' }}>
                              <span className="text-[#027fe9] mt-1">›</span>
                              {author}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-t-2 border-[#5015bd] pt-6">
                        <h4 className="text-xs font-bold text-[#5015bd] uppercase tracking-widest mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Curso/Área
                        </h4>
                        <p className="text-[#3d0a49]" style={{ fontFamily: 'Crimson Text, serif' }}>{project.course}</p>
                      </div>

                      <div className="border-t-2 border-[#5015bd] pt-6">
                        <h4 className="text-xs font-bold text-[#5015bd] uppercase tracking-widest mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Ano
                        </h4>
                        <p className="text-[#3d0a49]" style={{ fontFamily: 'Crimson Text, serif' }}>{project.year}</p>
                      </div>

                      {/* Quick Download */}
                      {mockDocuments.length > 0 && (
                        <div className="border-t-2 border-[#5015bd] pt-6">
                          <h4 className="text-xs font-bold text-[#5015bd] uppercase tracking-widest mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Download Rápido
                          </h4>
                          <button
                            onClick={() => setActiveTab('downloads')}
                            className="w-full flex items-center justify-center gap-2 bg-[#3d0a49] text-white px-4 py-3 border-2 border-[#5015bd] font-bold hover:bg-[#5015bd] transition-colors uppercase tracking-wide text-sm shadow-[4px_4px_0px_0px_rgba(80,21,189,0.5)]"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                          >
                            <Download className="w-4 h-4" />
                            Ver Arquivos ({mockDocuments.length})
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="mt-8 pt-6 border-t-2 border-[#5015bd]">
                      <a
                        href="mailto:mostra@psicologia.edu.br"
                        className="block w-full text-center bg-[#5015bd] text-white px-6 py-3 border-2 border-[#3d0a49] font-bold hover:bg-[#027fe9] transition-colors uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(61,10,73,0.6)]"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        Entrar em Contato
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            )}

            {/* Gallery Tab */}
            {activeTab === 'gallery' && (
              <div className="max-w-6xl mx-auto">
                <div className="bg-white border-4 border-[#5015bd] p-8 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                  <ScrollReveal animation="fade-up">
                    <h2 className="text-3xl font-bold text-[#3d0a49] mb-8 uppercase tracking-wide text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Galeria de Fotos
                    </h2>
                  </ScrollReveal>
                  
                  {mockGallery.length > 0 ? (
                    <>
                      {/* Main Image */}
                      <ScrollReveal animation="zoom-in" className="relative border-8 border-double border-[#5015bd] mb-6 overflow-hidden">
                        <img
                          src={mockGallery[selectedImage]}
                          alt={`Foto ${selectedImage + 1}`}
                          className="w-full h-[500px] object-cover"
                        />
                        
                        {/* Navigation Arrows */}
                        {mockGallery.length > 1 && (
                          <>
                            <button
                              onClick={() => setSelectedImage(prev => prev > 0 ? prev - 1 : mockGallery.length - 1)}
                              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#5015bd]/90 text-white p-3 border-2 border-[#3d0a49] hover:bg-[#027fe9] transition-colors shadow-[2px_2px_0px_0px_rgba(61,10,73,0.4)]"
                            >
                              <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                              onClick={() => setSelectedImage(prev => prev < mockGallery.length - 1 ? prev + 1 : 0)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#5015bd]/90 text-white p-3 border-2 border-[#3d0a49] hover:bg-[#027fe9] transition-colors shadow-[2px_2px_0px_0px_rgba(61,10,73,0.4)]"
                            >
                              <ChevronRight className="w-6 h-6" />
                            </button>
                          </>
                        )}

                        <div className="absolute bottom-4 right-4 bg-[#3d0a49]/90 text-white px-4 py-2 border-2 border-[#5015bd] font-bold shadow-[2px_2px_0px_0px_rgba(80,21,189,0.4)]" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {selectedImage + 1} / {mockGallery.length}
                        </div>
                      </ScrollReveal>

                      {/* Thumbnails animadas em escadinha */}
                      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                        {mockGallery.map((img, index) => (
                          <ScrollReveal key={index} animation="fade-up" delay={index * 100} className="w-full">
                            <button
                              onClick={() => setSelectedImage(index)}
                              className={`w-full border-4 overflow-hidden transition-all hover:scale-105 ${
                                selectedImage === index ? 'border-[#3d0a49] shadow-[4px_4px_0px_0px_rgba(80,21,189,0.6)]' : 'border-[#5015bd]'
                              }`}
                            >
                              <img
                                src={img}
                                alt={`Miniatura ${index + 1}`}
                                className="w-full h-24 object-cover"
                              />
                            </button>
                          </ScrollReveal>
                        ))}
                      </div>
                    </>
                  ) : (
                    <ScrollReveal animation="fade-up" className="text-center py-12">
                      <ImageIcon className="w-16 h-16 text-[#5015bd] mx-auto mb-4" />
                      <p className="text-[#5015bd] text-lg" style={{ fontFamily: 'Crimson Text, serif' }}>
                        Nenhuma foto adicional disponível
                      </p>
                    </ScrollReveal>
                  )}
                </div>
              </div>
            )}

            {/* Videos Tab */}
            {activeTab === 'videos' && (
              <div className="max-w-6xl mx-auto">
                <div className="bg-white border-4 border-[#5015bd] p-8 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                  <ScrollReveal animation="fade-up">
                    <h2 className="text-3xl font-bold text-[#3d0a49] mb-8 uppercase tracking-wide text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Vídeos do Projeto
                    </h2>
                  </ScrollReveal>
                  
                  {mockVideos.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {mockVideos.map((video, index) => (
                        <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
                          <div className="border-4 border-[#5015bd] p-2 bg-[#e0daf7]">
                            <video
                              src={video}
                              controls
                              className="w-full h-64 bg-[#e0daf7]"
                            />
                            <p className="text-[#3d0a49] font-bold mt-2 px-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                              Vídeo {index + 1}
                            </p>
                          </div>
                        </ScrollReveal>
                      ))}
                    </div>
                  ) : (
                    <ScrollReveal animation="fade-up" className="text-center py-12">
                      <Video className="w-16 h-16 text-[#5015bd] mx-auto mb-4" />
                      <p className="text-[#5015bd] text-lg" style={{ fontFamily: 'Crimson Text, serif' }}>
                        Nenhum vídeo disponível para este projeto
                      </p>
                    </ScrollReveal>
                  )}
                </div>
              </div>
            )}

            {/* Audios Tab */}
            {activeTab === 'audios' && (
              <div className="max-w-4xl mx-auto">
                <div className="bg-white border-4 border-[#5015bd] p-8 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                  <ScrollReveal animation="fade-up">
                    <h2 className="text-3xl font-bold text-[#3d0a49] mb-8 uppercase tracking-wide text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Áudios do Projeto
                    </h2>
                  </ScrollReveal>
                  
                  {mockAudios.length > 0 ? (
                    <div className="space-y-6">
                      {mockAudios.map((audio, index) => (
                        <ScrollReveal key={index} animation="fade-left" delay={index * 150}>
                          <div className="border-4 border-[#5015bd] p-6 bg-[#e0daf7]">
                            <div className="flex items-center gap-3 mb-4">
                              <Music className="w-6 h-6 text-[#5015bd]" />
                              <h3 className="text-xl font-bold text-[#3d0a49]" style={{ fontFamily: 'Playfair Display, serif' }}>
                                Áudio {index + 1}
                              </h3>
                            </div>
                            <audio
                              src={audio}
                              controls
                              className="w-full"
                            />
                          </div>
                        </ScrollReveal>
                      ))}
                    </div>
                  ) : (
                    <ScrollReveal animation="fade-up" className="text-center py-12">
                      <Music className="w-16 h-16 text-[#5015bd] mx-auto mb-4" />
                      <p className="text-[#5015bd] text-lg" style={{ fontFamily: 'Crimson Text, serif' }}>
                        Nenhum áudio disponível para este projeto
                      </p>
                    </ScrollReveal>
                  )}
                </div>
              </div>
            )}

            {/* Downloads Tab */}
            {activeTab === 'downloads' && (
              <div className="max-w-4xl mx-auto">
                <div className="bg-white border-4 border-[#5015bd] p-8 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                  <ScrollReveal animation="fade-up">
                    <h2 className="text-3xl font-bold text-[#3d0a49] mb-8 uppercase tracking-wide text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Documentos para Download
                    </h2>
                  </ScrollReveal>
                  
                  {mockDocuments.length > 0 ? (
                    <div className="space-y-4">
                      {mockDocuments.map((doc, index) => (
                        <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
                          <div className="border-4 border-[#5015bd] p-6 bg-white hover:shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)] hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center justify-between gap-4">
                              <div className="flex items-center gap-4 flex-1 min-w-0">
                                <FileText className="w-10 h-10 text-[#5015bd] flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-xl font-bold text-[#3d0a49] truncate mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    {doc.name}
                                  </h3>
                                  <p className="text-sm text-[#5015bd]" style={{ fontFamily: 'Crimson Text, serif' }}>
                                    Tamanho: {doc.size}
                                  </p>
                                </div>
                              </div>
                              <a
                                href={doc.url}
                                download
                                className="flex items-center gap-2 bg-[#5015bd] text-white px-6 py-3 border-2 border-[#3d0a49] font-bold hover:bg-[#027fe9] transition-colors uppercase tracking-wide text-sm shadow-[4px_4px_0px_0px_rgba(61,10,73,0.6)] flex-shrink-0"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                              >
                                <Download className="w-4 h-4" />
                                Baixar
                              </a>
                            </div>
                          </div>
                        </ScrollReveal>
                      ))}
                    </div>
                  ) : (
                    <ScrollReveal animation="fade-up" className="text-center py-12">
                      <Download className="w-16 h-16 text-[#5015bd] mx-auto mb-4" />
                      <p className="text-[#5015bd] text-lg" style={{ fontFamily: 'Crimson Text, serif' }}>
                        Nenhum documento disponível para download
                      </p>
                    </ScrollReveal>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-12 bg-[#e0daf7]/20 border-t-4 border-double border-[#5015bd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up" className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-[#5015bd]"></div>
              <h2 className="text-3xl font-bold text-[#3d0a49] uppercase tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                Outros Projetos
              </h2>
              <div className="h-px flex-1 bg-[#5015bd]"></div>
            </ScrollReveal>
            
            {/* Grid com 3 projetos relacionados com a magia de esticar a altura! */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {relatedProjects.map((relatedProject, index) => (
                <ScrollReveal 
                  key={relatedProject.id} 
                  animation="fade-up" 
                  delay={index * 200}
                  className="h-full w-full"
                >
                  <ProjectCard project={relatedProject} />
                </ScrollReveal>
              ))}
            </div>

            {/* Botão para ver todos */}
            <ScrollReveal animation="fade-up" className="text-center">
              <Link
                to="/projetos"
                className="inline-flex items-center gap-2 bg-[#5015bd] text-white px-8 py-4 border-2 border-[#3d0a49] font-bold hover:bg-[#027fe9] transition-all shadow-[4px_4px_0px_0px_rgba(61,10,73,0.6)] hover:shadow-[6px_6px_0px_0px_rgba(2,127,233,0.6)] hover:-translate-y-1 uppercase tracking-wide"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Ver todos os projetos
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}