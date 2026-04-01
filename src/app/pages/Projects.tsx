import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import { ScrollReveal } from '../components/ScrollReveal';

export default function Projects() {
  // Estados para controlar os termos de busca e os filtros selecionados
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('Todos');
  const [selectedYear, setSelectedYear] = useState('Todos');
  const [authorSearch, setAuthorSearch] = useState('');

  // Lógica para gerar listas únicas de cursos e anos para os menus de seleção
  const courses = ['Todos', ...Array.from(new Set(projects.map(p => p.course)))];
  const years = ['Todos', ...Array.from(new Set(projects.map(p => p.year))).sort((a, b) => b - a)];

  // Função que filtra os projetos em tempo real com base em todos os critérios
  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCourse = selectedCourse === 'Todos' || project.course === selectedCourse;
    const matchesYear = selectedYear === 'Todos' || project.year === parseInt(selectedYear);
    const matchesAuthor = authorSearch === '' || project.authors.some(author => 
      author.toLowerCase().includes(authorSearch.toLowerCase())
    );
    
    return matchesSearch && matchesCourse && matchesYear && matchesAuthor;
  });

  // Função para resetar todos os filtros de uma vez
  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCourse('Todos');
    setSelectedYear('Todos');
    setAuthorSearch('');
  };

  const hasActiveFilters = searchTerm !== '' || selectedCourse !== 'Todos' || selectedYear !== 'Todos' || authorSearch !== '';

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F0]">
      <Navbar />
      
      <main className="flex-1">
        {/* Cabeçalho da página com gradiente */}
        <section className="bg-gradient-to-br from-[#3d0a49] to-[#5015bd] text-white py-16 border-b-4 border-double border-[#00caf8]">
          <ScrollReveal animation="fade-down" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-[#00caf8]"></div>
              <span className="text-[#00caf8] text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>◆</span>
              <div className="h-px flex-1 bg-[#00caf8]"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
              Projetos Acadêmicos
            </h1>
            <p className="text-xl text-white/95 max-w-3xl mx-auto text-center leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>
              Navegue por todos os trabalhos apresentados no Projeto Mente Aberta. Use os filtros para encontrar projetos específicos.
            </p>
          </ScrollReveal>
        </section>

        {/* Seção de Filtros e Busca */}
        <section className="bg-white border-b-4 border-[#5015bd] shadow-md">
          <ScrollReveal animation="zoom-in" delay={200} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Barra de busca principal */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5015bd]" />
                <input
                  type="text"
                  placeholder="Buscar por título, descrição ou autor..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-[#5015bd] bg-white focus:outline-none focus:border-[#027fe9] text-[#3d0a49]"
                  style={{ fontFamily: 'Crimson Text, serif' }}
                />
              </div>
            </div>

            {/* Grid de seletores de filtros (Curso, Ano, Autor e Botão Limpar) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#3d0a49] mb-1 uppercase tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Curso/Área
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-[#5015bd] bg-white focus:outline-none focus:border-[#027fe9] cursor-pointer text-[#3d0a49] text-sm"
                  style={{ fontFamily: 'Crimson Text, serif' }}
                >
                  {courses.map(course => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3d0a49] mb-1 uppercase tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Ano
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-[#5015bd] bg-white focus:outline-none focus:border-[#027fe9] cursor-pointer text-[#3d0a49] text-sm"
                  style={{ fontFamily: 'Crimson Text, serif' }}
                >
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3d0a49] mb-1 uppercase tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Autor
                </label>
                <input
                  type="text"
                  placeholder="Buscar por autor..."
                  value={authorSearch}
                  onChange={(e) => setAuthorSearch(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-[#5015bd] bg-white focus:outline-none focus:border-[#027fe9] text-[#3d0a49] text-sm"
                  style={{ fontFamily: 'Crimson Text, serif' }}
                />
              </div>

              <div className="flex items-end">
                <button
                  onClick={clearAllFilters}
                  disabled={!hasActiveFilters}
                  className={`w-full px-3 py-2 border-2 border-[#5015bd] font-bold uppercase tracking-wide text-sm transition-all inline-flex items-center justify-center gap-2 ${
                    hasActiveFilters
                      ? 'bg-[#5015bd] text-white hover:bg-[#027fe9] cursor-pointer shadow-[4px_4px_0px_0px_rgba(80,21,189,0.3)]'
                      : 'bg-[#e0daf7] text-[#5015bd]/50 cursor-not-allowed opacity-50'
                  }`}
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  <X className="w-4 h-4" />
                  Limpar
                </button>
              </div>
            </div>

            {/* Contador de resultados e etiquetas de filtros ativos */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="text-sm text-[#5015bd] font-semibold uppercase tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                {filteredProjects.length} {filteredProjects.length === 1 ? 'projeto encontrado' : 'projetos encontrados'}
              </div>
              
              {hasActiveFilters && (
                <div className="flex flex-wrap gap-2">
                  {selectedCourse !== 'Todos' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#5015bd] text-white text-xs font-bold border-2 border-[#3d0a49]">
                      {selectedCourse}
                      <button onClick={() => setSelectedCourse('Todos')} className="hover:text-[#00caf8]">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedYear !== 'Todos' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#5015bd] text-white text-xs font-bold border-2 border-[#3d0a49]">
                      {selectedYear}
                      <button onClick={() => setSelectedYear('Todos')} className="hover:text-[#00caf8]">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {authorSearch !== '' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#5015bd] text-white text-xs font-bold border-2 border-[#3d0a49]">
                      {authorSearch}
                      <button onClick={() => setAuthorSearch('')} className="hover:text-[#00caf8]">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                </div>
              )}
            </div>
          </ScrollReveal>
        </section>

        {/* Grade de exibição dos Projetos */}
        <section className="py-12 bg-[#e0daf7]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  /* Cada card entra com um delay progressivo para efeito visual */
                  <ScrollReveal 
                    key={project.id} 
                    animation="fade-up" 
                    delay={(index % 6) * 100} 
                    className="h-full w-full"
                  >
                    <ProjectCard project={project} />
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              /* Mensagem de alerta caso nenhum projeto bata com a busca */
              <ScrollReveal animation="fade-up" className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#e0daf7] border-4 border-[#5015bd] mb-6 shadow-[4px_4px_0px_0px_rgba(80,21,189,0.3)]">
                  <Search className="w-10 h-10 text-[#5015bd]" />
                </div>
                <h3 className="text-3xl font-bold text-[#3d0a49] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Nenhum projeto encontrado
                </h3>
                <p className="text-[#5015bd] mb-6 text-lg" style={{ fontFamily: 'Crimson Text, serif' }}>
                  Tente ajustar os filtros ou termos de busca
                </p>
                <button
                  onClick={clearAllFilters}
                  className="text-[#5015bd] font-bold hover:text-[#027fe9] transition-colors uppercase tracking-wide border-b-2 border-[#5015bd] hover:border-[#027fe9] pb-1"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Limpar filtros
                </button>
              </ScrollReveal>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}