import { Link } from 'react-router';
import { ArrowRight, Scroll, Users, BookOpen } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FeaturedCarousel } from '../components/FeaturedCarousel';
import { CircularText } from '../components/CircularText';
import { ScrollReveal } from '../components/ScrollReveal';
import { featuredProjects } from '../data/projects';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F0]">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#3d0a49] to-[#5015bd] text-white overflow-hidden border-b-8 border-double border-[#00caf8]">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {/* 1. ANIMAÇÃO DOS CÍRCULOS: Efeito de Zoom para dar impacto */}
            <ScrollReveal animation="zoom-in" duration={1000}>
              <CircularText 
                topText="Saúde não se vende!"
                bottomText="Loucura não se prende!"
                projectName="Projeto Mente Aberta"
              />
            </ScrollReveal>
            
            {/* 2. ANIMAÇÃO DO TEXTO E BOTÕES: Aparecem logo depois dos círculos */}
            <ScrollReveal animation="fade-up" delay={500}>
              <div className="text-center mt-12">
                <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>
                  Explore os projetos acadêmicos desenvolvidos pelos estudantes. Um repositório digital dedicado à pesquisa em psicologia, saúde comunitária e saúde mental.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/projetos"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#3d0a49] px-8 py-4 border-2 border-[#3d0a49] font-bold hover:bg-[#00caf8] hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,202,248,0.5)] hover:shadow-[6px_6px_0px_0px_rgba(0,202,248,0.6)] hover:-translate-y-1 uppercase tracking-wide"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Explorar Projetos
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/sobre"
                    className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 border-2 border-white font-bold hover:bg-white hover:text-[#5015bd] transition-all uppercase tracking-wide"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Sobre o Projeto
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white border-b-4 border-double border-[#027fe9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <ScrollReveal animation="fade-up" delay={0}>
                <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#5015bd] border-4 border-[#3d0a49] mb-4 group-hover:rotate-6 transition-transform duration-300 shadow-[4px_4px_0px_0px_rgba(80,21,189,0.5)]">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-[#5015bd] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>9</div>
                  <div className="text-[#3d0a49] uppercase tracking-wide text-sm font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>Projetos em Destaque</div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={200}>
                <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#027fe9] border-4 border-[#3d0a49] mb-4 group-hover:rotate-6 transition-transform duration-300 shadow-[4px_4px_0px_0px_rgba(2,127,233,0.5)]">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-[#027fe9] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>18</div>
                  <div className="text-[#3d0a49] uppercase tracking-wide text-sm font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>Pesquisadores Envolvidos</div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={400}>
                <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#00caf8] border-4 border-[#3d0a49] mb-4 group-hover:rotate-6 transition-transform duration-300 shadow-[4px_4px_0px_0px_rgba(0,202,248,0.5)]">
                    <Scroll className="w-10 h-10 text-[#3d0a49]" />
                  </div>
                  <div className="text-5xl font-bold text-[#00caf8] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>9</div>
                  <div className="text-[#3d0a49] uppercase tracking-wide text-sm font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>Áreas de Estudo</div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-[#e0daf7]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-down">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-px w-20 bg-gradient-to-r from-[#5015bd] to-[#027fe9]"></div>
                  <span className="text-[#00caf8] text-3xl">★</span>
                  <div className="h-px w-20 bg-gradient-to-r from-[#027fe9] to-[#5015bd]"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#3d0a49] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Projetos em Destaque
                </h2>
                <p className="text-xl text-[#5015bd] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>
                  Conheça alguns dos trabalhos apresentados na nossa mostra virtual
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="zoom-in" delay={200}>
              <FeaturedCarousel projects={featuredProjects} />
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <div className="text-center mt-12">
                <Link
                  to="/projetos"
                  className="inline-flex items-center gap-2 text-[#5015bd] font-bold hover:text-[#027fe9] transition-colors group uppercase tracking-wide border-b-2 border-[#5015bd] pb-1"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Ver todos os projetos
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#5015bd] to-[#027fe9] text-white border-t-4 border-double border-[#00caf8]">
          <ScrollReveal animation="fade-up">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-16 bg-[#00caf8]"></div>
                <span className="text-[#00caf8] text-3xl">✉</span>
                <div className="h-px w-16 bg-[#00caf8]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                Compartilhe Seu Projeto
              </h2>
              <p className="text-xl text-white/95 mb-10 leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>
                Você é estudante de psicologia e deseja compartilhar seu projeto aqui? Entre em contato com a coordenação do curso para adicionar seu trabalho.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&to=obsamufj@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#5015bd] px-8 py-4 border-2 border-[#3d0a49] font-bold hover:bg-[#00caf8] hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,202,248,0.5)] hover:shadow-[6px_6px_0px_0px_rgba(0,202,248,0.6)] hover:-translate-y-1 uppercase tracking-wide"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Entre em Contato
              </a>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}