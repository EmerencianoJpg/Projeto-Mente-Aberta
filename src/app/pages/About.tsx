import { Target, Users, Calendar, Award, BookOpen, Scroll } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F0]">
      <Navbar />
      
      <main className="flex-1">
        {/* Cabeçalho da página com gradiente e bordas */}
        <section className="bg-gradient-to-br from-[#3d0a49] to-[#5015bd] text-white py-16 border-b-4 border-double border-[#00caf8]">
          <ScrollReveal animation="fade-down" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-[#00caf8]"></div>
              <span className="text-[#00caf8] text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>◆</span>
              <div className="h-px flex-1 bg-[#00caf8]"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
              Sobre a Mostra Virtual
            </h1>
            <p className="text-xl text-[#e0daf7] max-w-3xl mx-auto text-center leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>
              Uma vitrine digital para celebrar e compartilhar a produção científica em Psicologia
            </p>
          </ScrollReveal>
        </section>

        {/* Seção de Missão com imagem lateral */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              
              {/* Bloco de Imagem com sombra rígida */}
              <ScrollReveal animation="fade-right" className="order-2 lg:order-1">
                <div className="border-8 border-double border-[#5015bd] overflow-hidden shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                  <img
                    src="https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzc0NTI2Mjg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Campus Universitário"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </ScrollReveal>

              {/* Texto descritivo sobre o projeto e o OBSAM */}
              <ScrollReveal animation="fade-left" className="order-1 lg:order-2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-[#5015bd] text-white px-4 py-2 border-2 border-[#3d0a49] text-sm font-bold uppercase tracking-widest mb-6 w-fit shadow-[2px_2px_0px_0px_rgba(61,10,73,0.4)]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <Target className="w-4 h-4" />
                  Nossa Missão
                </div>
                
                <h2 className="text-4xl font-bold text-[#3d0a49] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Uma Plataforma para Compartilhar Conhecimento
                </h2>
                
                <div className="space-y-4 text-[#3d0a49] text-lg leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>
                  <p>
                    O <strong>Projeto Mente Aberta</strong> é uma mostra virtual permanente que reúne e divulga projetos acadêmicos desenvolvidos por estudantes de Psicologia, criando um espaço digital acessível para toda a comunidade.
                  </p>
                  <p>
                    Organizada pelo OBSAM (Observatório de Saúde Mental e Práticas Comunitárias), a mostra funciona como um museu interativo onde pesquisas, intervenções e reflexões ganham visibilidade e alcançam públicos diversos.
                  </p>
                  <p>
                    Acreditamos que a divulgação científica é fundamental para aproximar a universidade da sociedade, valorizar o trabalho dos estudantes e fomentar debates sobre saúde mental, práticas comunitárias e transformação social.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Grid com os três principais objetivos */}
            <div className="mb-16">
              <ScrollReveal animation="fade-up" className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-[#5015bd]"></div>
                <h2 className="text-4xl font-bold text-[#3d0a49] uppercase tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Objetivos da Mostra
                </h2>
                <div className="h-px flex-1 bg-[#5015bd]"></div>
              </ScrollReveal>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ScrollReveal animation="fade-up" delay={0}>
                  <div className="bg-white p-8 border-4 border-[#5015bd] shadow-[6px_6px_0px_0px_rgba(80,21,189,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(2,127,233,0.5)] transition-all hover:-translate-y-1 h-full">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#5015bd] border-2 border-[#3d0a49] mb-4 shadow-[2px_2px_0px_0px_rgba(61,10,73,0.4)]">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#3d0a49] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Divulgação Científica
                    </h3>
                    <p className="text-[#5015bd] leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>
                      Promover a disseminação do conhecimento produzido no curso de Psicologia, tornando-o acessível à comunidade acadêmica e ao público geral.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={200}>
                  <div className="bg-white p-8 border-4 border-[#5015bd] shadow-[6px_6px_0px_0px_rgba(80,21,189,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(2,127,233,0.5)] transition-all hover:-translate-y-1 h-full">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#5015bd] border-2 border-[#3d0a49] mb-4 shadow-[2px_2px_0px_0px_rgba(61,10,73,0.4)]">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#3d0a49] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Intercâmbio de Ideias
                    </h3>
                    <p className="text-[#5015bd] leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>
                      Facilitar o diálogo entre estudantes, professores e profissionais, criando uma rede colaborativa de conhecimento e experiências.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={400}>
                  <div className="bg-white p-8 border-4 border-[#5015bd] shadow-[6px_6px_0px_0px_rgba(80,21,189,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(2,127,233,0.5)] transition-all hover:-translate-y-1 h-full">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#5015bd] border-2 border-[#3d0a49] mb-4 shadow-[2px_2px_0px_0px_rgba(61,10,73,0.4)]">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#3d0a49] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Valorização Acadêmica
                    </h3>
                    <p className="text-[#5015bd] leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>
                      Reconhecer e celebrar o esforço, dedicação e talento dos estudantes que se dedicam à pesquisa e à produção de conhecimento.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Listagem do Público-Alvo */}
            <ScrollReveal animation="zoom-in">
              <div className="bg-white border-4 border-[#5015bd] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)] mb-16 hover:shadow-[12px_12px_0px_0px_rgba(2,127,233,0.4)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-8 justify-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#5015bd] border-2 border-[#3d0a49] shadow-[2px_2px_0px_0px_rgba(61,10,73,0.4)]">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#3d0a49] uppercase tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Público-Alvo
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#3d0a49]">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 group">
                      <Scroll className="w-5 h-5 text-[#027fe9] mt-1 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" />
                      <div>
                        <h4 className="font-bold text-[#3d0a49] mb-1 uppercase tracking-wide text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>Estudantes de Psicologia</h4>
                        <p className="text-[#5015bd]" style={{ fontFamily: 'Crimson Text, serif' }}>Graduandos e pós-graduandos interessados em conhecer trabalhos de colegas e se inspirar para suas próprias pesquisas.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <Scroll className="w-5 h-5 text-[#027fe9] mt-1 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" />
                      <div>
                        <h4 className="font-bold text-[#3d0a49] mb-1 uppercase tracking-wide text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>Professores e Pesquisadores</h4>
                        <p className="text-[#5015bd]" style={{ fontFamily: 'Crimson Text, serif' }}>Docentes e profissionais da área interessados em acompanhar as tendências e inovações no campo da Psicologia.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 group">
                      <Scroll className="w-5 h-5 text-[#027fe9] mt-1 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" />
                      <div>
                        <h4 className="font-bold text-[#3d0a49] mb-1 uppercase tracking-wide text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>Profissionais da Saúde</h4>
                        <p className="text-[#5015bd]" style={{ fontFamily: 'Crimson Text, serif' }}>Psicólogos e outros profissionais que buscam atualização e conhecimento sobre práticas baseadas em evidências.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <Scroll className="w-5 h-5 text-[#027fe9] mt-1 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" />
                      <div>
                        <h4 className="font-bold text-[#3d0a49] mb-1 uppercase tracking-wide text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>Público em Geral</h4>
                        <p className="text-[#5015bd]" style={{ fontFamily: 'Crimson Text, serif' }}>Pessoas interessadas em compreender melhor temas relacionados à saúde mental, comportamento humano e bem-estar.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Informações Institucionais e Coordenação */}
            <ScrollReveal animation="fade-up">
              <div className="bg-[#3d0a49] border-4 border-[#5015bd] p-8 md:p-12 text-white mb-16 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.5)]">
                <div className="flex items-center gap-3 mb-8">
                  <BookOpen className="w-8 h-8 text-[#00caf8]" />
                  <h2 className="text-3xl font-bold uppercase tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Sobre o Repositório
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-[#00caf8]" style={{ fontFamily: 'Playfair Display, serif' }}>Acervo em Constante Crescimento</h3>
                    <p className="text-[#e0daf7] leading-relaxed mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
                      A mostra reúne trabalhos de diferentes áreas da Psicologia, desde pesquisas teóricas até intervenções práticas nas comunidades. Novos projetos são adicionados regularmente pelos coordenadores.
                    </p>
                    <p className="text-[#e0daf7] leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>
                      Todo o acervo é online, gratuito e acessível 24 horas por dia de qualquer lugar do mundo.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-[#00caf8]" style={{ fontFamily: 'Playfair Display, serif' }}>Organização</h3>
                    <p className="text-[#e0daf7] leading-relaxed mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
                      <strong>OBSAM - Observatório de Saúde Mental e Práticas Comunitárias</strong><br />
                      Universidade Federal de Jataí (UFJ)
                    </p>
                    <div className="text-[#e0daf7] leading-relaxed space-y-2" style={{ fontFamily: 'Crimson Text, serif' }}>
                      <p className="text-[#00caf8] font-bold">Coordenação:</p>
                      <p>
                        <strong>Franciny M. Barreto</strong><br />
                        Coordenadora
                      </p>
                      <p>
                        <strong>Rita de C. A. Martins</strong><br />
                        Coordenadora
                      </p>
                      <p>
                        <strong>Ana Danielly Fernandes da Silva</strong><br />
                        Vice-coordenadora
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Seção final de CTA para contato direto */}
            <ScrollReveal animation="fade-up" className="text-center">
              <div className="flex items-center gap-4 mb-8 justify-center">
                <div className="h-px w-20 bg-[#5015bd]"></div>
                <span className="text-[#5015bd] text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>◆</span>
                <div className="h-px w-20 bg-[#5015bd]"></div>
              </div>
              <h2 className="text-4xl font-bold text-[#3d0a49] mb-4 uppercase tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                Entre em Contato
              </h2>
              <p className="text-xl text-[#5015bd] mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>
                Tem dúvidas ou sugestões sobre o repositório? Entre em contato conosco!
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&to=obsamufj@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#5015bd] text-white px-8 py-4 border-2 border-[#3d0a49] font-bold hover:bg-[#027fe9] transition-all shadow-[4px_4px_0px_0px_rgba(61,10,73,0.6)] hover:shadow-[6px_6px_0px_0px_rgba(2,127,233,0.6)] hover:-translate-y-1 uppercase tracking-wide"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                obsamufj@gmail.com
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}