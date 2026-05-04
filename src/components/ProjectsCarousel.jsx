import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  X,
  ZoomIn,
} from "lucide-react";
import { useEffect, useState } from "react";
import { projects } from "../data/portfolio.js";

function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const showPrevious = () => {
    setActiveIndex((index) => (index === 0 ? projects.length - 1 : index - 1));
  };

  const showNext = () => {
    setActiveIndex((index) => (index === projects.length - 1 ? 0 : index + 1));
  };

  const openLightbox = (projectIndex, imageIndex = 0) => {
    setLightbox({ projectIndex, imageIndex });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  const showPreviousImage = () => {
    setLightbox((current) => {
      if (!current) return current;
      const images = projects[current.projectIndex].images;

      return {
        ...current,
        imageIndex:
          current.imageIndex === 0 ? images.length - 1 : current.imageIndex - 1,
      };
    });
  };

  const showNextImage = () => {
    setLightbox((current) => {
      if (!current) return current;
      const images = projects[current.projectIndex].images;

      return {
        ...current,
        imageIndex:
          current.imageIndex === images.length - 1 ? 0 : current.imageIndex + 1,
      };
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!lightbox) return;

      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPreviousImage();
      if (event.key === "ArrowRight") showNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = lightbox ? "hidden" : "";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const lightboxProject = lightbox ? projects[lightbox.projectIndex] : null;
  const lightboxImages = lightboxProject?.images ?? [];
  const lightboxImage = lightbox ? lightboxImages[lightbox.imageIndex] : "";

  return (
    <section id="proyectos" className="scroll-mt-24">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D96F8D] dark:text-[#FFB5C5]">
            Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-black text-zinc-950 dark:text-white sm:text-4xl">
            Proyectos
          </h2>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Proyecto anterior"
            className="grid size-11 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-all duration-300 hover:scale-102 hover:bg-[#FFB5C5]/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-[#FFB5C5]/20"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Proyecto siguiente"
            className="grid size-11 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-all duration-300 hover:scale-102 hover:bg-[#FFB5C5]/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-[#FFB5C5]/20"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[10px_10px_36px_rgba(0,0,0,0.06),-10px_-10px_36px_rgba(255,255,255,0.95)] transition-all duration-300 dark:border-white/10 dark:bg-[#1A1A1A] dark:shadow-none">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="grid min-w-full lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="bg-[#F8F8F8] p-4 transition-all duration-300 dark:bg-[#202020] sm:p-6">
                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  aria-label={`Ver imagen ampliada de ${project.title}`}
                  className="group relative block w-full overflow-hidden rounded-[1.5rem] outline-none"
                >
                  <span className="absolute inset-0 z-10 bg-gradient-to-tr from-zinc-950/45 via-transparent to-[#FFB5C5]/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute right-4 top-4 z-20 grid size-11 translate-y-2 place-items-center rounded-full bg-white/90 text-zinc-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-[#121212]/90 dark:text-white">
                    <ZoomIn size={18} />
                  </span>
                  <img
                    src={project.images[0]}
                    alt={`Mockup de ${project.title}`}
                    className="aspect-[16/10] w-full animate-project-image-float rounded-[1.5rem] object-cover transition-all duration-700 group-hover:scale-105 group-hover:saturate-125"
                  />
                </button>

                {project.images.length > 1 && (
                  <div className="mt-3 flex gap-2">
                    {project.images.map((image, imageIndex) => (
                      <button
                        key={`${project.title}-thumb-${imageIndex}`}
                        type="button"
                        onClick={() => openLightbox(index, imageIndex)}
                        aria-label={`Ver imagen ${imageIndex + 1} de ${project.title}`}
                        className="h-14 w-20 overflow-hidden rounded-xl border border-zinc-200 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFB5C5] hover:shadow-md hover:shadow-[#FFB5C5]/20 dark:border-white/10"
                      >
                        <img
                          src={image}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div
                className={`flex flex-col justify-center p-6 transition-all duration-700 sm:p-8 lg:p-10 ${
                  activeIndex === index
                    ? "translate-y-0 opacity-100 delay-200"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#D96F8D] dark:text-[#FFB5C5]">
                  Slide {index + 1} / {projects.length}
                </p>
                <h3 className="text-3xl font-black text-zinc-950 dark:text-white sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology, techIndex) => (
                    <span
                      key={`${activeIndex}-${technology}`}
                      style={{ animationDelay: `${260 + techIndex * 90}ms` }}
                      className={`group relative overflow-hidden rounded-full border border-zinc-200 bg-[#F8F8F8] px-4 py-2 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-[#FFB5C5]/70 hover:bg-[#FFB5C5]/20 hover:shadow-lg hover:shadow-[#FFB5C5]/20 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-[#FFB5C5]/15 ${
                        activeIndex === index ? "animate-tech-badge" : "opacity-0"
                      }`}
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full dark:via-white/20" />
                      <span className="relative">{technology}</span>
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 rounded-full bg-[#FFB5C5] px-5 py-3 text-sm font-bold text-zinc-950 transition-all duration-300 hover:scale-102 dark:bg-[#FFB5C5]"
                  >
                    <ExternalLink size={18} />
                    Ver proyecto
                  </a>
                  <a
                    href="https://github.com/Tatii22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-3 text-sm font-bold text-zinc-700 transition-all duration-300 hover:scale-102 hover:bg-zinc-100 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
                  >
                    <Github size={18} />
                    Repositorio
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {projects.map((project, index) => (
          <button
            key={`${project.title}-indicator-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Ir al proyecto ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-9 bg-[#FFB5C5]"
                : "w-2.5 bg-zinc-300 hover:bg-[#FFB5C5]/60 dark:bg-white/20"
            }`}
          />
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-zinc-950/80 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria de ${lightboxProject.title}`}
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-6xl animate-modal-in"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Cerrar visor"
              className="absolute -top-14 right-0 grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-[#FFB5C5] hover:text-zinc-950"
            >
              <X size={20} />
            </button>

            <div className="overflow-hidden rounded-3xl border border-white/15 bg-[#121212] shadow-2xl">
              <img
                key={lightboxImage}
                src={lightboxImage}
                alt={`Imagen ${lightbox.imageIndex + 1} de ${lightboxProject.title}`}
                className="max-h-[75vh] w-full animate-project-media object-contain"
              />
            </div>

            {lightboxImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPreviousImage}
                  aria-label="Imagen anterior"
                  className="absolute left-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-zinc-950 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#FFB5C5]"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={showNextImage}
                  aria-label="Imagen siguiente"
                  className="absolute right-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-zinc-950 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#FFB5C5]"
                >
                  <ArrowRight size={20} />
                </button>

                <div className="mt-4 flex justify-center gap-2">
                  {lightboxImages.map((image, imageIndex) => (
                    <button
                      key={`lightbox-thumb-${imageIndex}`}
                      type="button"
                      onClick={() =>
                        setLightbox((current) => ({ ...current, imageIndex }))
                      }
                      aria-label={`Ir a imagen ${imageIndex + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        lightbox.imageIndex === imageIndex
                          ? "w-9 bg-[#FFB5C5]"
                          : "w-2.5 bg-white/40 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsCarousel;
