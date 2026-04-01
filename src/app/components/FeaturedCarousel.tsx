import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import type { Project } from '../data/projects';
import { useEffect, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

interface FeaturedCarouselProps {
  projects: Project[];
}

export function FeaturedCarousel({ projects }: FeaturedCarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  
  // Força atualização do Swiper após renderização inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      if (swiperRef.current && swiperRef.current.slides) {
        // Força centralização no slide inicial
        const initialSlide = Math.floor(projects.length / 2);
        swiperRef.current.slideTo(initialSlide, 0); // 0 = sem animação
        swiperRef.current.update();
        if (typeof swiperRef.current.updateSlides === 'function') {
          swiperRef.current.updateSlides();
        }
        swiperRef.current.updateProgress();
        swiperRef.current.updateSlidesClasses();
      }
    }, 150);
    
    return () => clearTimeout(timer);
  }, [projects.length]);
  
  return (
    <div className="featured-carousel overflow-hidden">
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        initialSlide={Math.floor(projects.length / 2)}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={true}
        loop={false}
        watchSlidesProgress={true}
        centeredSlidesBounds={false}
        slideToClickedSlide={true}
        className="!py-8"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          // Força atualização e centralização imediata após inicialização
          requestAnimationFrame(() => {
            const initialSlide = Math.floor(projects.length / 2);
            swiper.slideTo(initialSlide, 0); // 0 = sem animação
            swiper.update();
            if (typeof swiper.updateSlides === 'function') {
              swiper.updateSlides();
            }
            swiper.updateProgress();
            swiper.updateSlidesClasses();
          });
        }}
        onInit={(swiper) => {
          // Também força no evento de inicialização
          const initialSlide = Math.floor(projects.length / 2);
          setTimeout(() => {
            swiper.slideTo(initialSlide, 0);
            swiper.update();
          }, 50);
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="!w-[320px] md:!w-[400px]">
            <Link 
              to={`/projeto/${project.id}`}
              className="group block bg-white border-2 border-[#5015bd] overflow-hidden shadow-[4px_4px_0px_0px_rgba(80,21,189,0.5)] hover:shadow-[6px_6px_0px_0px_rgba(80,21,189,0.7)] transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-neutral-light border-b-2 border-[#5015bd]">
                {project.coverType === 'video' ? (
                  <video
                    src={project.coverImage}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ filter: 'contrast(1.1) saturate(1.1)' }}
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ filter: 'contrast(1.1) saturate(1.1)' }}
                  />
                )}
                <div className="absolute top-4 right-4 bg-[#5015bd] text-white px-3 py-1 border border-neutral-dark text-xs font-semibold uppercase tracking-wide shadow-[2px_2px_0px_0px_rgba(80,21,189,0.5)]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {project.course}
                </div>
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-neutral-dark mb-3 group-hover:text-[#5015bd] transition-colors line-clamp-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {project.title}
                </h3>
                
                <p className="text-sm text-neutral-medium mb-4 line-clamp-2 leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>
                  {project.description}
                </p>
                
                <div className="mb-4 pb-4 border-b border-[#027fe9]/20">
                  <p className="text-xs font-semibold text-[#027fe9] uppercase tracking-wide mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Autores:</p>
                  <p className="text-sm text-neutral-medium line-clamp-2" style={{ fontFamily: 'Crimson Text, serif' }}>
                    {project.authors.join(', ')}
                  </p>
                </div>
                
                <div className="flex items-center text-[#5015bd] font-semibold text-sm group-hover:gap-2 transition-all uppercase tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Ver detalhes
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .featured-carousel .swiper {
          padding: 2rem 0;
          overflow: visible;
        }

        .featured-carousel .swiper-wrapper {
          align-items: center;
        }

        .featured-carousel .swiper-slide {
          transition: all 0.3s ease;
          opacity: 0.4;
          transform: scale(0.8);
        }

        .featured-carousel .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
          z-index: 10;
        }

        .featured-carousel .swiper-slide-prev,
        .featured-carousel .swiper-slide-next {
          opacity: 0.6;
          transform: scale(0.85);
        }

        .featured-carousel .swiper-button-next,
        .featured-carousel .swiper-button-prev {
          width: 50px;
          height: 50px;
          background: #5015bd;
          border: 2px solid #3d0a49;
          color: #FFFFFF;
          box-shadow: 4px 4px 0px 0px rgba(80, 21, 189, 0.6);
        }

        .featured-carousel .swiper-button-next:after,
        .featured-carousel .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }

        .featured-carousel .swiper-button-next:hover,
        .featured-carousel .swiper-button-prev:hover {
          background: #027fe9;
          transform: translateY(-2px);
          box-shadow: 6px 6px 0px 0px rgba(80, 21, 189, 0.7);
        }

        .featured-carousel .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .featured-carousel .swiper-button-next,
          .featured-carousel .swiper-button-prev {
            width: 40px;
            height: 40px;
          }

          .featured-carousel .swiper-button-next:after,
          .featured-carousel .swiper-button-prev:after {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}