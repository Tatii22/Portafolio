import { Eye } from "lucide-react";

function Hero() {
  return (
    <section
      id="inicio"
      className="grid overflow-hidden rounded-3xl border border-zinc-200 bg-white p-5 shadow-[12px_12px_40px_rgba(0,0,0,0.07),-12px_-12px_40px_rgba(255,255,255,0.95)] transition-all duration-300 dark:border-white/10 dark:bg-[#1A1A1A] dark:shadow-none md:grid-cols-[1.1fr_0.9fr] md:p-8 lg:p-10"
    >
      <div className="flex min-h-[360px] flex-col justify-center rounded-[1.5rem] bg-[#F8F8F8] p-6 transition-all duration-300 dark:bg-[#202020] sm:p-8">
        <p className="mb-5 w-fit rounded-full border border-[#FFB5C5]/40 px-4 py-2 text-sm font-semibold text-zinc-600 dark:border-[#FFB5C5]/30 dark:text-zinc-300">
          Desarrolladora de software junior
        </p>
        <h1 className="font-serif text-6xl font-extrabold leading-none tracking-normal text-zinc-950 dark:text-white sm:text-7xl lg:text-8xl">
          Hola Mundo!
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
          Construyo experiencias web limpias, funcionales y enfocadas en buenas
          prácticas con tecnologías frontend, backend y herramientas modernas.
        </p>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#FFB5C5] px-6 py-3 text-sm font-bold text-zinc-950 transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-[#FFB5C5]/25 dark:bg-[#FFB5C5] dark:hover:shadow-[#FFB5C5]/20"
        >
          <Eye size={18} />
          Ver CV
        </a>
      </div>

      <div className="flex min-h-[360px] items-center justify-center p-6 md:p-8">
        <div className="relative grid aspect-square w-full max-w-sm place-items-center rounded-full border border-zinc-200 bg-[#F8F8F8] shadow-[inset_10px_10px_30px_rgba(0,0,0,0.06),inset_-10px_-10px_30px_rgba(255,255,255,0.95)] transition-all duration-300 hover:scale-102 dark:border-white/10 dark:bg-[#202020] dark:shadow-none">
          <div className="absolute inset-0 rounded-full bg-[#FFB5C5]/20 blur-3xl animate-avatar-pulse" />
          <div className="absolute inset-4 rounded-full border border-dashed border-[#FFB5C5]/50 animate-avatar-spin-slow" />
          <div className="absolute inset-6 rounded-full border border-[#FFB5C5]/60 animate-avatar-pulse dark:border-[#FFB5C5]/40" />
          <div className="absolute right-12 top-10 size-4 rounded-full bg-[#FFB5C5] shadow-lg shadow-[#FFB5C5]/50 animate-avatar-pulse" />
          <div className="absolute bottom-14 left-10 size-3 rounded-full bg-[#FFB5C5]/70 shadow-lg shadow-[#FFB5C5]/40 animate-avatar-pulse" />
          <img
            src="/img/image.png"
            alt="Tatiana Villamizar"
            className="relative z-10 size-56 rounded-full object-cover ring-8 ring-white/90 transition-all duration-500 animate-avatar-float hover:rotate-2 hover:scale-105 hover:ring-[#FFB5C5]/70 dark:ring-[#FFB5C5]/25 sm:size-64"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
