// Dados mockados dos projetos acadêmicos de Psicologia - OBSAM (Observatório de Saúde Mental)

const hospicioImage = '/hospicio_imagem.png'; // Imagem local para o projeto do João Vitor Leal Lobato

export interface Project {
  id: string;
  title: string;
  authors: string[];
  course: string;
  year: number; // Ano de publicação do projeto
  description: string;
  fullDescription: string;
  coverImage: string; // Foto ou vídeo de capa principal
  coverType: 'image' | 'video'; // Tipo da capa
  gallery?: string[]; // Galeria de fotos adicionais
  videos?: string[]; // Múltiplos vídeos
  audios?: string[]; // Múltiplos áudios
  documents?: { name: string; url: string; size?: string }[]; // Documentos para download
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Memórias dos Sanatórios: História da Loucura no Brasil',
    authors: ['Maria Silva Santos', 'João Pedro Oliveira'],
    course: 'Psicologia Social',
    year: 2024,
    description: 'Investigação histórica sobre os sanatórios psiquiátricos brasileiros e o movimento antimanicomial.',
    fullDescription: 'Este projeto de pesquisa investiga a história dos sanatórios psiquiátricos no Brasil, desde sua criação no século XIX até o movimento de reforma psiquiátrica. Através de análise documental, entrevistas com ex-internos e profissionais, e visitas a instituições desativadas, o estudo explora as práticas de tratamento, as condições de vida dos pacientes e os impactos do modelo manicomial na sociedade. A pesquisa destaca o mantra "Loucura não se prende!" como símbolo da luta antimanicomial e analisa como o movimento de reforma psiquiátrica transformou o cuidado em saúde mental no Brasil. Os resultados demonstram a importância da memória histórica para evitar retrocessos e fortalecer políticas de saúde mental comunitária.',
    coverImage: 'https://images.unsplash.com/photo-1766758195608-f200773c10a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGhpc3RvcmljYWwlMjBidWlsZGluZyUyMGhlcml0YWdlfGVufDF8fHx8MTc3NTAxNzg1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    coverType: 'image',
    gallery: [
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800'
    ]
  },
  {
    id: '2',
    title: 'Saúde Mental e Racismo: Impactos na População Negra',
    authors: ['Ana Carolina Ferreira', 'Lucas Mendes Costa', 'Mariana dos Santos'],
    course: 'Psicologia Social',
    year: 2024,
    description: 'Análise dos efeitos do racismo estrutural na saúde mental da população negra brasileira.',
    fullDescription: 'O projeto examina como o racismo estrutural e institucional afeta a saúde mental da população negra no Brasil. Utilizando metodologia qualitativa e quantitativa, o estudo acompanhou 80 participantes negros em diferentes contextos socioeconômicos, investigando experiências de discriminação, acesso a serviços de saúde mental e estratégias de resistência. Os resultados revelaram altos índices de ansiedade, depressão e trauma relacionados a experiências raciais, além de barreiras no acesso ao SUS. A pesquisa também identificou práticas de cuidado comunitário e ancestralidade como fatores de proteção. O estudo propõe políticas públicas antirracistas e formação de profissionais de saúde sensíveis à questão racial, contribuindo para o movimento de consciência negra no campo da saúde mental.',
    coverImage: 'https://images.unsplash.com/photo-1768244016366-9396bee8f0b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwYmxhY2slMjBjb21tdW5pdHklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzUwMTc4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    coverType: 'image',
    videos: [
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
    ],
    audios: [
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    ]
  },
  {
    id: '3',
    title: 'Práticas de Autocuidado em Saúde Comunitária',
    authors: ['Beatriz Almeida Rodrigues', 'Carlos Eduardo Lima'],
    course: 'Psicologia Comunitária',
    year: 2023,
    description: 'Mapeamento de práticas de autocuidado em comunidades periféricas e sua relação com saúde coletiva.',
    fullDescription: 'Esta pesquisa-ação investigou práticas de autocuidado desenvolvidas por moradores de três comunidades periféricas, explorando saberes populares, redes de apoio e estratégias coletivas de promoção de saúde. O estudo utilizou rodas de conversa, observação participante e oficinas colaborativas com 120 participantes. Os resultados identificaram diversas práticas comunitárias de cuidado: grupos de mulheres, terapias integrativas, hortas comunitárias, práticas espirituais e redes de solidariedade. A pesquisa demonstrou que o autocuidado transcende a dimensão individual, constituindo-se como prática política de resistência e fortalecimento comunitário. O mantra "Saúde não se vende!" emergiu como princípio orientador das práticas, contestando a mercantilização da saúde e reafirmando o direito ao cuidado integral e gratuito pelo SUS.',
    coverImage: 'https://images.unsplash.com/photo-1607109792536-fbccc49c82f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGNvbW11bml0eSUyMGdhcmRlbiUyMHBlb3BsZXxlbnwxfHx8fDE3NzUwMTc4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    coverType: 'image'
  },
  {
    id: '4',
    title: 'SUS e Saúde Mental: Desafios e Potencialidades',
    authors: ['Fernanda Souza Martins', 'Rafael Torres Ribeiro', 'Juliana Cardoso Pereira'],
    course: 'Políticas Públicas de Saúde',
    year: 2023,
    description: 'Avaliação dos serviços de saúde mental no SUS e propostas para fortalecimento da rede de atenção psicossocial.',
    fullDescription: 'O projeto analisou o funcionamento da Rede de Atenção Psicossocial (RAPS) do SUS em três municípios de diferentes portes, investigando CAPS (Centro de Atenção Psicossocial), residências terapêuticas e equipes de saúde da família. Através de entrevistas com gestores, profissionais e usuários, além de análise documental, o estudo identificou avanços significativos no cuidado em liberdade e desafios como subfinanciamento, falta de profissionais e fragmentação da rede. Os resultados destacam experiências exitosas de cuidado territorial, protagonismo de usuários e articulação intersetorial. A pesquisa propõe diretrizes para fortalecimento do SUS na saúde mental, incluindo investimento em CAPS, formação permanente de equipes e combate à remanicomialização. O estudo reafirma o compromisso com o direito universal à saúde mental de qualidade.',
    coverImage: 'https://images.unsplash.com/photo-1648486668303-51a25cbf3cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGhlYWx0aGNhcmUlMjBtZWRpY2FsJTIwY2xpbmljfGVufDF8fHx8MTc3NTAxNzg1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    coverType: 'image',
    videos: [
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800'
    ]
  },
  {
    id: '5',
    title: 'Consciência Negra e Saúde Mental: Epistemologias Afrocentradas',
    authors: ['Roberto Alves Santos', 'Patricia Gomes Oliveira'],
    course: 'Psicologia Social',
    year: 2023,
    description: 'Exploração de epistemologias afrocentradas e práticas de cuidado em saúde mental na comunidade negra.',
    fullDescription: 'Esta pesquisa investigou práticas de cuidado em saúde mental enraizadas em epistemologias afrocentradas, valorizando saberes ancestrais e comunitários da população negra. O estudo etnográfico acompanhou terreiros de candomblé, grupos de mulheres negras, coletivos culturais e espaços de ancestralidade durante 18 meses. Os achados revelaram cosmologias e práticas terapêuticas que integram corpo, mente, espírito e comunidade, oferecendo alternativas ao modelo biomédico eurocêntrico. Práticas como rodas de conversa, rituais de cura, contação de histórias e fortalecimento identitário mostraram-se fundamentais para saúde mental. A pesquisa propõe diálogo intercultural entre saberes africanos e psicologia, contribuindo para descolonização do cuidado e construção de práticas culturalmente sensíveis no contexto do movimento negro brasileiro.',
    coverImage: 'https://images.unsplash.com/photo-1515657241610-a6b33f0f6c5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY3VsdHVyZSUyMGNvbG9yZnVsJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc1MDE3ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    coverType: 'image'
  },
  {
    id: '6',
    title: 'Redução de Danos e Direitos Humanos no Uso de Substâncias',
    authors: ['Thiago Barbosa Nunes', 'Camila Rodrigues Souza'],
    course: 'Psicologia Social',
    year: 2022,
    description: 'Análise de políticas de redução de danos e defesa de direitos humanos de usuários de substâncias psicoativas.',
    fullDescription: 'O estudo examinou políticas e práticas de redução de danos no Brasil, investigando serviços de atenção a usuários de álcool e outras drogas (CAPS AD, Consultórios na Rua) e movimentos sociais de usuários. A pesquisa utilizou observação participante, entrevistas com usuários, profissionais e militantes, e análise de políticas públicas. Os resultados demonstraram que abordagens proibicionistas e de abstinência forçada violam direitos humanos e amplificam vulnerabilidades, enquanto estratégias de redução de danos (distribuição de insumos, acompanhamento territorial, respeito à autonomia) promovem saúde e dignidade. O estudo denuncia a criminalização, o encarceramento em massa e a militarização da política de drogas, propondo alternativas baseadas em saúde pública, direitos humanos e justiça social, alinhadas aos princípios do SUS e da reforma psiquiátrica.',
    coverImage: 'https://images.unsplash.com/photo-1767319981785-dc73cccdaa24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHNvY2lhbCUyMHdvcmslMjBjb21tdW5pdHl8ZW58MXx8fHwxNzc1MDE3ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    coverType: 'image'
  },
  {
    id: '7',
    title: 'Loucura e Território: Experiências de Desinstitucionalização',
    authors: ['Mariana Costa Ribeiro', 'André Luiz Ferreira', 'Eduardo Santos Lima'],
    course: 'Psicologia Comunitária',
    year: 2022,
    description: 'Acompanhamento de processos de desinstitucionalização e vida no território de ex-moradores de hospitais psiquiátricos.',
    fullDescription: 'Esta pesquisa longitudinal acompanhou 15 pessoas em processo de desinstitucionalização, que viveram décadas em hospitais psiquiátricos e retornaram à vida comunitária através de residências terapêuticas. Utilizando histórias de vida, observação etnográfica e acompanhamento terapêutico, o estudo documentou desafios, conquistas e transformações subjetivas desses sujeitos. Os resultados revelaram processos complexos de reconstrução identitária, reconexão com família e comunidade, e exercício de cidadania. Apesar de dificuldades como estigma, precariedade de serviços e desafios de autonomia, os participantes expressaram satisfação com a liberdade e vida no território. A pesquisa evidencia que "loucura não se prende" não é apenas um slogan, mas uma práxis cotidiana de resistência e reinvenção da vida, demonstrando a viabilidade e necessidade da desinstitucionalização como política de saúde mental.',
    coverImage: 'https://images.unsplash.com/photo-1774438467030-bea20ccc765f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwbmVpZ2hib3Job29kJTIwY29tbXVuaXR5JTIwc3RyZWV0fGVufDF8fHx8MTc3NTAxNzg1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    coverType: 'image'
  },
  {
    id: '8',
    title: 'Saúde Mental e Gênero: Perspectivas Feministas',
    authors: ['Larissa Fernandes Melo', 'Isabela Carvalho Almeida'],
    course: 'Estudos de Gênero',
    year: 2022,
    description: 'Análise crítica das relações entre gênero, patriarcado e sofrimento psíquico de mulheres.',
    fullDescription: 'O projeto examinou como opressões de gênero e patriarcado impactam a saúde mental de mulheres, investigando experiências de violência, sobrecarga de cuidado, medicalização e patologização. A pesquisa combinou análise teórica feminista com grupos de reflexão envolvendo 60 mulheres de diferentes perfis socioeconômicos e raciais. Os resultados demonstraram que sintomas psíquicos frequentemente diagnosticados como transtornos individuais (depressão, ansiedade) estão enraizados em estruturas de opressão social. O estudo identificou práticas coletivas de cuidado entre mulheres (grupos de apoio, redes feministas, terapia comunitária) como estratégias de resistência e empoderamento. A pesquisa propõe despatologização de sofrimentos sociais, fortalecimento de redes de cuidado feministas e políticas públicas que enfrentem violência de gênero, promovendo saúde mental através de justiça social.',
    coverImage: 'https://images.unsplash.com/photo-1774504798113-a03e2aa24789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHdvbWVuJTIwZW1wb3dlcm1lbnQlMjBncm91cHxlbnwxfHx8fDE3NzUwMTc4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    coverType: 'image'
  },
  {
    id: '9',
    title: 'Psicologia e Movimentos Sociais: Saúde Mental como Luta Coletiva',
    authors: ['Ricardo Moura Santos', 'Maria Silva Santos'],
    course: 'Psicologia Política',
    year: 2022,
    description: 'Investigação sobre a interface entre psicologia, movimentos sociais e luta por direitos em saúde mental.',
    fullDescription: 'Esta pesquisa explorou a relação entre psicologia e movimentos sociais de usuários de saúde mental, movimento antimanicomial, movimento da luta antiproibicionista e coletivos de cuidado comunitário. Através de pesquisa-ação participativa, o estudo acompanhou militantes, profissionais engajados e usuários-ativistas em manifestações, assembleias, conferências e ações de advocacy. Os resultados revelaram que a luta por saúde mental transcende a dimensão clínica, constituindo-se como movimento político por direitos, cidadania e transformação social. Os mantras \"Saúde não se vende! Loucura não se prende!\" emergiram como sínteses dessa luta, expressando resistência à mercantilização da saúde e à institucionalização da loucura. A pesquisa propõe uma psicologia comprometida com justiça social, alinhada aos movimentos populares e à construção de sociedades mais justas, solidárias e acolhedoras da diversidade.',
    coverImage: 'https://images.unsplash.com/photo-1618706757837-46b694aa4490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwcHJvdGVzdCUyMGFjdGl2aXNtJTIwbWFyY2h8ZW58MXx8fHwxNzc1MDE3ODUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    coverType: 'image',
    audios: [
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800'
    ]
  },
  {
    id: '10',
    title: 'Hospícios e Arquitetura da Exclusão: Patrimônio e Memória',
    authors: ['João Vitor Leal Lobato'],
    course: 'História da Psicologia',
    year: 2024,
    description: 'Dissertação sobre a arquitetura dos antigos hospícios e sanatórios como patrimônio histórico e espaço de memória.',
    fullDescription: 'Esta dissertação de mestrado investiga os edifícios de antigos hospícios e sanatórios psiquiátricos no Brasil como patrimônio arquitetônico e espaços de memória coletiva. Através de análise arquitetônica, documental e oral, o trabalho examina como essas construções materializavam concepções de loucura, controle social e práticas de exclusão. O estudo visita instituições desativadas, analisa projetos arquitetônicos originais e entrevista ex-funcionários e ex-internos. Os achados revelam que a arquitetura manicomial (muros altos, pavilhões isolados, grades) expressava ideologias de segregação e vigilância, enquanto tentativas de "modernização" mantinham lógicas de controle. A pesquisa propõe políticas de preservação patrimonial que transformem esses espaços em memoriais da luta antimanicomial, educando novas gerações sobre os horrores do modelo manicomial e a importância da reforma psiquiátrica.',
    coverImage: hospicioImage,
    coverType: 'image',
    documents: [
      { 
        name: 'JoaoVitorLealLobato_DISSERT.pdf', 
        url: '/src/imports/JoaoVitorLealLobato_DISSERT.pdf',
        size: '2.4 MB'
      }
    ]
  },
  {
    id: '11',
    title: 'Itinerários Terapêuticos e Cuidado em Rede',
    authors: ['Rita de Cássia Silva'],
    course: 'Psicologia Comunitária',
    year: 2023,
    description: 'Pesquisa sobre itinerários terapêuticos de usuários de saúde mental e a construção de redes de cuidado no território.',
    fullDescription: 'Esta pesquisa qualitativa acompanhou os itinerários terapêuticos de 12 usuários de serviços de saúde mental em um território urbano periférico. Utilizando método cartográfico e acompanhamento terapêutico, o estudo mapeou os percursos de cuidado que transcendem os serviços formais de saúde, incluindo redes familiares, comunitárias, religiosas e de solidariedade. Os resultados demonstraram que o cuidado efetivo em saúde mental acontece na articulação entre múltiplos agentes e espaços: CAPS, UBS, igrejas, associações de bairro, vizinhança e projetos culturais. A pesquisa evidencia a importância da clínica ampliada, da intersetorialidade e do protagonismo dos usuários na construção de seus projetos terapêuticos. O estudo propõe estratégias para fortalecimento de redes territoriais de cuidado, valorizando saberes comunitários e práticas de apoio mútuo no contexto do SUS.',
    coverImage: 'https://images.unsplash.com/photo-1576089235406-0612d7bb033e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWFsdGhjYXJlJTIwbmV0d29yayUyMGNvbm5lY3Rpb25zfGVufDF8fHx8MTc3NTAxODc1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    coverType: 'image',
    documents: [
      { 
        name: 'a07.pdf', 
        url: '/src/imports/Projeto_Rita_compressed.pdf',
        size: '1.8 MB'
      }
    ]
  }
];

export const featuredProjects = projects.slice(0, 9);