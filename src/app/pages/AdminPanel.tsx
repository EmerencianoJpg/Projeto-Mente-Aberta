import { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Plus, X, Upload, FileText, Image as ImageIcon, Video, Music, Save, Eye, ArrowLeft, Users, ArrowRight } from 'lucide-react';
import { Link, useNavigate, useBlocker } from 'react-router';
import { ScrollReveal } from '../components/ScrollReveal';

export default function AdminPanel() {
  // Estado que armazena todos os dados do formulário e arquivos carregados
  const [formData, setFormData] = useState({
    title: '',
    authors: [''],
    course: '',
    description: '',
    fullDescription: '',
    coverType: 'image' as 'image' | 'video',
    coverImage: null as File | null,
    coverImagePreview: '',
    gallery: [] as File[],
    galleryPreviews: [] as string[],
    videos: [] as File[],
    videoPreviews: [] as string[],
    audios: [] as File[],
    audioPreviews: [] as string[],
    documents: [] as File[],
    documentPreviews: [] as { name: string; size: string }[],
  });

  const [showPreview, setShowPreview] = useState(false);
  const [showNewCourseInput, setShowNewCourseInput] = useState(false);
  const [newCourse, setNewCourse] = useState('');
  const [showUnsavedWarning, setShowUnsavedWarning] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<(() => void) | null>(null);

  const navigate = useNavigate();

  const courses = [
    'Psicologia Clínica', 'Psicologia Social', 'Psicologia Organizacional', 
    'Psicologia Educacional', 'Psicologia do Desenvolvimento', 'Psicologia da Saúde',
    'Neuropsicologia', 'Psicologia Forense', 'Psicologia Comunitária', 
    'Psicologia do Esporte', 'Políticas Públicas de Saúde', 'Estudos de Gênero', 
    'Psicologia Política', 'História da Psicologia',
  ];

  // Lógica para lidar com campos de texto simples
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'course' && value === 'ADD_NEW_COURSE') {
      setShowNewCourseInput(true);
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddNewCourse = () => {
    if (newCourse.trim()) {
      setFormData(prev => ({ ...prev, course: newCourse.trim() }));
      setNewCourse('');
      setShowNewCourseInput(false);
    }
  };

  // Funções para adicionar e remover autores dinamicamente
  const handleAuthorChange = (index: number, value: string) => {
    const newAuthors = [...formData.authors];
    newAuthors[index] = value;
    setFormData(prev => ({ ...prev, authors: newAuthors }));
  };

  const addAuthor = () => setFormData(prev => ({ ...prev, authors: [...prev.authors, ''] }));
  
  const removeAuthor = (index: number) => {
    if (formData.authors.length > 1) {
      const newAuthors = formData.authors.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, authors: newAuthors }));
    }
  };

  // Processa o arquivo de capa e gera o preview base64
  const handleCoverImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, coverImage: file, coverImagePreview: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMultipleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'gallery' | 'videos' | 'audios' | 'documents') => {
    const files = Array.from(e.target.files || []);
    if (type === 'documents') {
      const newDocuments = files.map(file => ({ name: file.name, size: (file.size / 1024 / 1024).toFixed(2) + ' MB' }));
      setFormData(prev => ({ 
        ...prev, 
        documents: [...(prev.documents || []), ...files], 
        documentPreviews: [...(prev.documentPreviews || []), ...newDocuments] 
      }));
    } else {
      files.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData(prev => {
            const currentFiles = (prev[type as keyof typeof prev] as File[]) || [];
            const currentPreviews = (prev[`${type}Previews` as keyof typeof prev] as string[]) || [];
            
            return {
              ...prev,
              [type]: [...currentFiles, file],
              [`${type}Previews`]: [...currentPreviews, reader.result as string],
            };
          });
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeMultipleFile = (type: 'gallery' | 'videos' | 'audios' | 'documents', index: number) => {
    setFormData(prev => {
      const currentFiles = (prev[type as keyof typeof prev] as any[]) || [];
      const currentPreviews = (prev[`${type}Previews` as keyof typeof prev] as any[]) || [];
      
      return {
        ...prev,
        [type]: currentFiles.filter((_, i) => i !== index),
        [`${type}Previews`]: currentPreviews.filter((_, i) => i !== index),
      };
    });
  };

  // Bloqueador de saída da página para evitar perda de dados
  const hasFormData = () => formData.title !== '' || formData.description !== '' || formData.coverImage !== null || formData.gallery.length > 0;
  
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      hasFormData() && currentLocation.pathname !== nextLocation.pathname
  );

  useEffect(() => {
    if (blocker.state === 'blocked') {
      setPendingNavigation(() => () => blocker.proceed?.());
      setShowUnsavedWarning(true);
    }
  }, [blocker]);

  const handleConfirmExit = () => {
    setShowUnsavedWarning(false);
    if (pendingNavigation) {
      pendingNavigation();
    } else {
      window.location.reload();
    }
  };

  const handleCancelExit = () => {
    setShowUnsavedWarning(false);
    if (blocker.state === 'blocked') {
      blocker.reset?.();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Projeto publicado com sucesso! (Protótipo)');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F0]">
      <Navbar />
      
      <main className="flex-1">
        {/* Modal de Aviso de Saída (Unsaved Changes) */}
        {showUnsavedWarning && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 px-4">
            <div className="bg-white p-8 border-4 border-[#5015bd] shadow-[8px_8px_0px_0px_rgba(80,21,189,0.5)] max-w-md w-full">
              <h3 className="text-2xl font-bold text-[#3d0a49] mb-4 uppercase">Sair sem salvar?</h3>
              <p className="text-[#5015bd] mb-8">Você tem alterações que não foram publicadas. Tem certeza de que deseja sair desta página?</p>
              <div className="flex gap-4 justify-end">
                <button onClick={handleCancelExit} className="px-6 py-2 border-2 border-[#5015bd] text-[#5015bd] font-bold uppercase hover:bg-[#e0daf7]">Cancelar</button>
                <button onClick={handleConfirmExit} className="px-6 py-2 bg-red-600 text-white border-2 border-red-800 font-bold uppercase hover:bg-red-700">Sim, Sair</button>
              </div>
            </div>
          </div>
        )}

        {/* Cabeçalho do Painel */}
        <section className="bg-gradient-to-br from-[#3d0a49] to-[#5015bd] text-white py-12 border-b-4 border-double border-[#00caf8]">
          <ScrollReveal animation="fade-down" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <Link to="/" className="inline-flex items-center gap-2 text-[#00caf8] hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span style={{ fontFamily: 'Playfair Display, serif' }}>Voltar ao Site</span>
              </Link>
              <button onClick={() => setShowPreview(!showPreview)} className="inline-flex items-center gap-2 bg-[#3d0a49] text-white px-4 py-2 border-2 border-white hover:bg-[#027fe9] transition-colors">
                <Eye className="w-4 h-4" />
                {showPreview ? 'Ocultar Preview' : 'Ver Preview'}
              </button>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>Painel Administrativo</h1>
          </ScrollReveal>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* 1. Informações Básicas */}
              <ScrollReveal animation="fade-up" delay={100}>
                <div className="bg-white border-4 border-[#5015bd] p-8 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                  <h2 className="text-2xl font-bold text-[#3d0a49] mb-6 uppercase tracking-wide flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <FileText className="w-6 h-6" /> Informações Básicas
                  </h2>
                  <div className="space-y-4">
                    <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Título do Projeto *" className="w-full px-4 py-3 border-2 border-[#5015bd] focus:border-[#027fe9] outline-none" required />
                    <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Descrição Resumida *" rows={3} className="w-full px-4 py-3 border-2 border-[#5015bd] focus:border-[#027fe9] outline-none" required />
                    <textarea name="fullDescription" value={formData.fullDescription} onChange={handleInputChange} placeholder="Descrição Completa *" rows={6} className="w-full px-4 py-3 border-2 border-[#5015bd] focus:border-[#027fe9] outline-none" required />
                  </div>
                </div>
              </ScrollReveal>

              {/* 2. Autores e Curso */}
              <ScrollReveal animation="fade-up" delay={200}>
                <div className="bg-white border-4 border-[#5015bd] p-8 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                  <h2 className="text-2xl font-bold text-[#3d0a49] mb-6 uppercase tracking-wide flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <Users className="w-6 h-6" /> Autores e Curso
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="block font-bold text-[#3d0a49] uppercase text-sm">Autores do Projeto *</label>
                      {formData.authors.map((author, index) => (
                        <div key={index} className="flex gap-2">
                          <input type="text" value={author} onChange={(e) => handleAuthorChange(index, e.target.value)} placeholder="Nome do Autor" className="flex-1 px-4 py-2 border-2 border-[#5015bd] outline-none" required />
                          {formData.authors.length > 1 && (
                            <button type="button" onClick={() => removeAuthor(index)} className="p-2 text-red-500 hover:bg-red-50 transition-colors border-2 border-red-500"><X /></button>
                          )}
                        </div>
                      ))}
                      <button type="button" onClick={addAuthor} className="text-[#5015bd] font-bold flex items-center gap-1 hover:text-[#027fe9] uppercase text-sm mt-2">
                        <Plus size={18}/> Adicionar Novo Autor
                      </button>
                    </div>
                    <div className="space-y-4">
                      <label className="block font-bold text-[#3d0a49] uppercase text-sm">Área de Estudo / Curso *</label>
                      {!showNewCourseInput ? (
                        <select name="course" value={formData.course} onChange={handleInputChange} className="w-full px-4 py-2 border-2 border-[#5015bd] outline-none bg-white cursor-pointer" required>
                          <option value="">Selecione uma área...</option>
                          {courses.map(c => <option key={c} value={c}>{c}</option>)}
                          <option value="ADD_NEW_COURSE" className="font-bold text-[#027fe9]">+ Adicionar nova área...</option>
                        </select>
                      ) : (
                        <div className="flex gap-2">
                          <input type="text" value={newCourse} onChange={(e) => setNewCourse(e.target.value)} placeholder="Nome da nova área" className="flex-1 px-4 py-2 border-2 border-[#027fe9] outline-none" />
                          <button type="button" onClick={handleAddNewCourse} className="px-4 py-2 bg-[#027fe9] text-white font-bold border-2 border-[#3d0a49]">OK</button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* 3. Capa Principal */}
              <ScrollReveal animation="fade-up" delay={300}>
                <div className="bg-white border-4 border-[#5015bd] p-8 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                  <h2 className="text-2xl font-bold text-[#3d0a49] mb-6 uppercase tracking-wide flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <ImageIcon className="w-6 h-6" /> Capa Principal
                  </h2>
                  <label className="block w-full h-48 border-4 border-dashed border-[#5015bd] bg-[#e0daf7] hover:bg-[#d0cae0] cursor-pointer transition-colors">
                    <div className="flex flex-col items-center justify-center h-full">
                      <Upload className="w-10 h-10 text-[#3d0a49] mb-2" />
                      <span className="font-bold text-[#3d0a49]">Adicionar Capa Principal</span>
                    </div>
                    <input type="file" className="hidden" onChange={handleCoverImageUpload} accept="image/*,video/*" />
                  </label>
                  {formData.coverImagePreview && (
                    <div className="mt-4">
                      {formData.coverImage?.type.startsWith('video/') ? (
                        <video src={formData.coverImagePreview} className="h-48 w-full object-cover border-4 border-[#5015bd]" muted loop autoPlay playsInline />
                      ) : (
                        <img src={formData.coverImagePreview} alt="Preview da Capa" className="h-48 w-full object-cover border-4 border-[#5015bd]" />
                      )}
                    </div>
                  )}
                </div>
              </ScrollReveal>

              {/* 4. Galeria de Fotos */}
              <ScrollReveal animation="fade-up" delay={400}>
                <div className="bg-white border-4 border-[#5015bd] p-8 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                  <h2 className="text-2xl font-bold text-[#3d0a49] mb-6 uppercase tracking-wide flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <ImageIcon className="w-6 h-6" /> Galeria de Fotos
                  </h2>
                  <label className="block w-full h-32 border-4 border-dashed border-[#5015bd] bg-[#e0daf7] hover:bg-[#d0cae0] cursor-pointer flex flex-col items-center justify-center">
                    <Plus className="w-8 h-8 mb-2 text-[#3d0a49]" />
                    <span className="font-bold text-[#3d0a49]">Adicionar Fotos</span>
                    <input type="file" multiple className="hidden" onChange={(e) => handleMultipleFileUpload(e, 'gallery')} accept="image/*" />
                  </label>
                  {formData.galleryPreviews.length > 0 && (
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mt-6">
                      {formData.galleryPreviews.map((url, i) => (
                        <div key={i} className="relative group aspect-square border-4 border-[#5015bd]">
                          <img src={url} className="w-full h-full object-cover" alt={`Galeria ${i + 1}`} />
                          <button type="button" onClick={() => removeMultipleFile('gallery', i)} className="absolute -top-3 -right-3 bg-red-600 text-white rounded-full p-1.5 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity border-2 border-white">
                            <X size={14}/>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>

              {/* 5. Vídeos */}
              <ScrollReveal animation="fade-up" delay={500}>
                <div className="bg-white border-4 border-[#5015bd] p-8 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                  <h2 className="text-2xl font-bold text-[#3d0a49] mb-6 uppercase tracking-wide flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <Video className="w-6 h-6" /> Vídeos (Opcional)
                  </h2>
                  <label className="block w-full h-32 border-4 border-dashed border-[#5015bd] bg-[#e0daf7] hover:bg-[#d0cae0] cursor-pointer flex flex-col items-center justify-center">
                    <Plus className="w-8 h-8 mb-2 text-[#3d0a49]" />
                    <span className="font-bold text-[#3d0a49]">Adicionar Vídeos</span>
                    <input type="file" multiple className="hidden" onChange={(e) => handleMultipleFileUpload(e, 'videos')} accept="video/*" />
                  </label>
                  {formData.videos.length > 0 && (
                    <div className="space-y-3 mt-6">
                      {formData.videos.map((file, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-[#f4f1ea] dark:bg-[#1a0a2e] border-2 border-[#5015bd] dark:border-[#00caf8]">
                          <span className="text-[#3d0a49] dark:text-white font-semibold truncate flex-1 mr-4">{file.name}</span>
                          <button type="button" onClick={() => removeMultipleFile('videos', i)} className="text-red-600 dark:text-red-400 hover:text-red-800 transition-colors p-2 bg-white dark:bg-black/20 border-2 border-red-200 dark:border-red-900/50">
                            <X size={18}/>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>

              {/* 6. Áudios */}
              <ScrollReveal animation="fade-up" delay={600}>
                <div className="bg-white border-4 border-[#5015bd] p-8 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                  <h2 className="text-2xl font-bold text-[#3d0a49] mb-6 uppercase tracking-wide flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <Music className="w-6 h-6" /> Áudios / Podcasts (Opcional)
                  </h2>
                  <label className="block w-full h-32 border-4 border-dashed border-[#5015bd] bg-[#e0daf7] hover:bg-[#d0cae0] cursor-pointer flex flex-col items-center justify-center">
                    <Plus className="w-8 h-8 mb-2 text-[#3d0a49]" />
                    <span className="font-bold text-[#3d0a49]">Adicionar Áudios</span>
                    <input type="file" multiple className="hidden" onChange={(e) => handleMultipleFileUpload(e, 'audios')} accept="audio/*" />
                  </label>
                  {formData.audios.length > 0 && (
                    <div className="space-y-3 mt-6">
                      {formData.audios.map((file, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-[#f4f1ea] dark:bg-[#1a0a2e] border-2 border-[#5015bd] dark:border-[#00caf8]">
                          <span className="text-[#3d0a49] dark:text-white font-semibold truncate flex-1 mr-4">{file.name}</span>
                          <button type="button" onClick={() => removeMultipleFile('audios', i)} className="text-red-600 dark:text-red-400 hover:text-red-800 transition-colors p-2 bg-white dark:bg-black/20 border-2 border-red-200 dark:border-red-900/50">
                            <X size={18}/>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>

              {/* 7. Documentos */}
              <ScrollReveal animation="fade-up" delay={700}>
                <div className="bg-white border-4 border-[#5015bd] p-8 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                  <h2 className="text-2xl font-bold text-[#3d0a49] mb-6 uppercase tracking-wide flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <FileText className="w-6 h-6" /> Documentos / Artigos (Opcional)
                  </h2>
                  <label className="block w-full h-32 border-4 border-dashed border-[#5015bd] bg-[#e0daf7] hover:bg-[#d0cae0] cursor-pointer flex flex-col items-center justify-center">
                    <Plus className="w-8 h-8 mb-2 text-[#3d0a49]" />
                    <span className="font-bold text-[#3d0a49]">Adicionar Documentos</span>
                    <input type="file" multiple className="hidden" onChange={(e) => handleMultipleFileUpload(e, 'documents')} accept=".pdf,.doc,.docx" />
                  </label>
                  {formData.documentPreviews.length > 0 && (
                    <div className="space-y-3 mt-6">
                      {formData.documentPreviews.map((doc, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-[#1a0a2e] border-2 border-[#5015bd] dark:border-[#00caf8]">
                          <div className="flex items-center gap-3">
                            <FileText className="text-[#5015bd] dark:text-[#00caf8] w-5 h-5"/>
                            <span className="text-[#3d0a49] dark:text-white font-bold">
                              {doc.name} <span className="text-gray-500 dark:text-gray-400 font-normal ml-2">({doc.size})</span>
                            </span>
                          </div>
                          <button type="button" onClick={() => removeMultipleFile('documents', i)} className="text-red-600 dark:text-red-400 hover:text-red-800 transition-colors p-2 border-2 border-transparent hover:border-red-200 dark:hover:border-red-900/50">
                            <X size={18}/>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>

              {/* 8. Preview Final */}
              {showPreview && (
                <ScrollReveal animation="zoom-in">
                  <div className="bg-[#3d0a49] border-4 border-[#5015bd] p-8 md:p-12 text-white shadow-[8px_8px_0px_0px_rgba(80,21,189,0.5)]">
                    <h2 className="text-2xl font-bold mb-8 uppercase tracking-wide flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <Eye className="w-6 h-6 text-[#00caf8]" /> Preview na Galeria
                    </h2>
                    
                    <div className="flex justify-center">
                      <div className="flex flex-col w-full max-w-[380px] bg-white border-4 border-[#5015bd] overflow-hidden shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                        
                        {/* Imagem/Vídeo de Capa no Preview */}
                        <div className="relative h-56 overflow-hidden bg-[#e0daf7] border-b-4 border-[#5015bd] shrink-0 flex items-center justify-center">
                          {formData.coverImagePreview ? (
                            formData.coverImage?.type.startsWith('video/') ? (
                              <video src={formData.coverImagePreview} className="w-full h-full object-cover" muted loop autoPlay playsInline />
                            ) : (
                              <img src={formData.coverImagePreview} alt="Capa" className="w-full h-full object-cover" />
                            )
                          ) : (
                            <ImageIcon className="w-16 h-16 text-[#5015bd]/30" />
                          )}
                          <div className="absolute top-4 right-4 bg-[#5015bd] text-white px-3 py-1 border-2 border-[#3d0a49] text-xs font-semibold uppercase tracking-wide shadow-[2px_2px_0px_0px_rgba(61,10,73,0.4)]" style={{ fontFamily: 'Playfair Display, serif' }}>
                            {formData.course || 'ÁREA NÃO DEFINIDA'}
                          </div>
                        </div>
                        
                        {/* Textos do Preview */}
                        <div className="p-6 bg-white flex-1 flex flex-col text-left">
                          <h3 className="text-xl font-bold text-[#3d0a49] mb-3 line-clamp-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                            {formData.title || 'Título do Projeto Aparecerá Aqui'}
                          </h3>
                          
                          <p className="text-sm text-[#5015bd] mb-4 line-clamp-2 leading-relaxed flex-1" style={{ fontFamily: 'Crimson Text, serif' }}>
                            {formData.description || 'A descrição resumida do projeto aparecerá aqui com limite de duas linhas...'}
                          </p>
                          
                          <div className="mb-4 pb-4 border-b-2 border-[#5015bd]/20 mt-auto">
                            <p className="text-xs font-semibold text-[#5015bd] uppercase tracking-wide mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Autores:</p>
                            <p className="text-sm text-[#3d0a49] line-clamp-2 font-medium" style={{ fontFamily: 'Crimson Text, serif' }}>
                              {formData.authors.filter(a => a.trim() !== '').join(', ') || 'Nenhum autor informado'}
                            </p>
                          </div>
                          
                          <div className="flex items-center text-[#5015bd] font-semibold text-sm uppercase tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Ver detalhes
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </ScrollReveal>
              )}

              {/* Botões de Ação */}
              <ScrollReveal animation="fade-up" delay={800}>
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <button type="button" onClick={() => window.location.reload()} className="px-8 py-4 bg-gray-500 text-white border-2 border-gray-700 font-bold uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(55,65,81,1)] hover:bg-gray-600 transition-colors">
                    Cancelar
                  </button>
                  <button type="submit" className="px-8 py-4 bg-[#5015bd] text-white border-2 border-[#3d0a49] font-bold uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(61,10,73,1)] hover:shadow-[6px_6px_0px_0px_rgba(61,10,73,1)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                    <Save className="w-5 h-5" /> Publicar Projeto
                  </button>
                </div>
              </ScrollReveal>

            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}