import { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Plus, X, Upload, FileText, Image as ImageIcon, Video, Music, Save, Eye, ArrowLeft, Download, BookPlus, AlertTriangle } from 'lucide-react';
import { Link, useNavigate, useBlocker } from 'react-router';
import { ScrollReveal } from '../components/ScrollReveal';

export default function AdminPanel() {
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

  const handleCancelNewCourse = () => {
    setNewCourse('');
    setShowNewCourseInput(false);
  };

  const hasFormData = () => {
    return (
      formData.title !== '' || formData.description !== '' || 
      formData.coverImage !== null || formData.gallery.length > 0
    );
  };

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
      setFormData(prev => ({ ...prev, documents: [...prev.documents, ...files], documentPreviews: [...prev.documentPreviews, ...newDocuments] }));
    } else {
      files.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData(prev => ({
            ...prev,
            [type]: [...prev[type], file],
            [`${type}Previews`]: [...(prev[`${type}Previews` as keyof typeof prev] as string[]), reader.result as string],
          }));
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeMultipleFile = (type: 'gallery' | 'videos' | 'audios' | 'documents', index: number) => {
    setFormData(prev => ({
      ...prev,
      [type]: prev[type].filter((_: any, i: number) => i !== index),
      [`${type}Previews`]: (prev[`${type}Previews` as keyof typeof prev] as any[]).filter((_: any, i: number) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Projeto publicado com sucesso! (Protótipo)');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F0]">
      <Navbar />
      
      <main className="flex-1">
        {/* Header - Gradiente e Borda Ciano */}
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

              {/* 2. Capa */}
              <ScrollReveal animation="fade-up" delay={200}>
                <div className="bg-white border-4 border-[#5015bd] p-8 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                   <h2 className="text-2xl font-bold text-[#3d0a49] mb-6 uppercase tracking-wide flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <ImageIcon className="w-6 h-6" /> Capa Principal
                  </h2>
                  <label className="block w-full h-48 border-4 border-dashed border-[#5015bd] bg-[#e0daf7] hover:bg-[#d0cae0] cursor-pointer transition-colors">
                    <div className="flex flex-col items-center justify-center h-full">
                      <Upload className="w-10 h-10 text-[#3d0a49] mb-2" />
                      <span className="font-bold">Adicionar Capa Principal</span>
                    </div>
                    <input type="file" className="hidden" onChange={handleCoverImageUpload} accept="image/*,video/*" />
                  </label>
                </div>
              </ScrollReveal>

              {/* 3. Galeria */}
              <ScrollReveal animation="fade-up" delay={300}>
                <div className="bg-white border-4 border-[#5015bd] p-8 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                  <h2 className="text-2xl font-bold text-[#3d0a49] mb-6 uppercase tracking-wide flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <ImageIcon className="w-6 h-6" /> Galeria de Fotos
                  </h2>
                  <label className="block w-full h-32 border-4 border-dashed border-[#5015bd] bg-[#e0daf7] hover:bg-[#d0cae0] cursor-pointer flex flex-col items-center justify-center">
                    <Plus className="w-8 h-8 mb-2" />
                    <span className="font-bold">Adicionar Fotos</span>
                    <input type="file" multiple className="hidden" onChange={(e) => handleMultipleFileUpload(e, 'gallery')} accept="image/*" />
                  </label>
                </div>
              </ScrollReveal>

              {/* 4. Vídeos (RECOLOCADO) */}
              <ScrollReveal animation="fade-up" delay={400}>
                <div className="bg-white border-4 border-[#5015bd] p-8 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                  <h2 className="text-2xl font-bold text-[#3d0a49] mb-6 uppercase tracking-wide flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <Video className="w-6 h-6" /> Vídeos (Opcional)
                  </h2>
                  <label className="block w-full h-32 border-4 border-dashed border-[#5015bd] bg-[#e0daf7] hover:bg-[#d0cae0] cursor-pointer flex flex-col items-center justify-center">
                    <Plus className="w-8 h-8 mb-2" />
                    <span className="font-bold">Adicionar Vídeos</span>
                    <input type="file" multiple className="hidden" onChange={(e) => handleMultipleFileUpload(e, 'videos')} accept="video/*" />
                  </label>
                </div>
              </ScrollReveal>

              {/* 5. Áudios (RECOLOCADO) */}
              <ScrollReveal animation="fade-up" delay={500}>
                <div className="bg-white border-4 border-[#5015bd] p-8 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                  <h2 className="text-2xl font-bold text-[#3d0a49] mb-6 uppercase tracking-wide flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <Music className="w-6 h-6" /> Áudios (Opcional)
                  </h2>
                  <label className="block w-full h-32 border-4 border-dashed border-[#5015bd] bg-[#e0daf7] hover:bg-[#d0cae0] cursor-pointer flex flex-col items-center justify-center">
                    <Plus className="w-8 h-8 mb-2" />
                    <span className="font-bold">Adicionar Áudios</span>
                    <input type="file" multiple className="hidden" onChange={(e) => handleMultipleFileUpload(e, 'audios')} accept="audio/*" />
                  </label>
                </div>
              </ScrollReveal>

              {/* 6. Documentos (RECOLOCADO) */}
              <ScrollReveal animation="fade-up" delay={600}>
                <div className="bg-white border-4 border-[#5015bd] p-8 shadow-[8px_8px_0px_0px_rgba(80,21,189,0.3)]">
                  <h2 className="text-2xl font-bold text-[#3d0a49] mb-6 uppercase tracking-wide flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <FileText className="w-6 h-6" /> Documentos/Artigos (Opcional)
                  </h2>
                  <label className="block w-full h-32 border-4 border-dashed border-[#5015bd] bg-[#e0daf7] hover:bg-[#d0cae0] cursor-pointer flex flex-col items-center justify-center">
                    <Plus className="w-8 h-8 mb-2" />
                    <span className="font-bold">Adicionar Documentos</span>
                    <input type="file" multiple className="hidden" onChange={(e) => handleMultipleFileUpload(e, 'documents')} accept=".pdf,.doc,.docx" />
                  </label>
                </div>
              </ScrollReveal>

              {/* 7. Preview (RECOLOCADO) */}
              {showPreview && (
                <ScrollReveal animation="fade-up">
                  <div className="bg-[#3d0a49] border-4 border-[#5015bd] p-8 text-white shadow-[8px_8px_0px_0px_rgba(80,21,189,0.5)]">
                    <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <Eye className="w-6 h-6" /> Preview do Projeto
                    </h2>
                    <div className="bg-white border-4 border-[#5015bd] p-6 text-[#3d0a49]">
                      <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{formData.title || 'Título do Projeto'}</h3>
                      <p className="mb-4">{formData.description || 'Descrição resumida...'}</p>
                      <div className="bg-[#5015bd] text-white px-3 py-1 inline-block border border-[#3d0a49]">Curso/Área</div>
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Botões de Ação */}
              <ScrollReveal animation="fade-up" delay={700}>
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <button type="button" onClick={() => window.location.reload()} className="px-8 py-4 bg-gray-500 text-white border-2 border-gray-700 font-bold uppercase shadow-[4px_4px_0px_0px_rgba(55,65,81,1)]">Cancelar</button>
                  <button type="submit" className="px-8 py-4 bg-[#5015bd] text-white border-2 border-[#3d0a49] font-bold uppercase shadow-[4px_4px_0px_0px_rgba(61,10,73,1)] flex items-center justify-center gap-2">
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