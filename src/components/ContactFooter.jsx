import { Check, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

const email = "tm8497077@gmail.com";
const contactButtonClass =
  "group relative grid size-12 place-items-center overflow-hidden rounded-full border border-zinc-200 text-zinc-700 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-[#FFB5C5]/70 hover:bg-[#FFB5C5]/20 hover:text-zinc-950 hover:shadow-lg hover:shadow-[#FFB5C5]/25 active:scale-95 dark:border-white/10 dark:text-white dark:hover:bg-[#FFB5C5]/15";

function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer
      id="contacto"
      className="mt-8 border-t border-zinc-200 bg-white transition-all duration-300 dark:border-white/10 dark:bg-[#1A1A1A]"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 rounded-3xl border border-zinc-200 bg-[#F8F8F8] p-6 transition-all duration-300 dark:border-white/10 dark:bg-[#202020] sm:p-8 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D96F8D] dark:text-[#FFB5C5]">
              Contacto
            </p>
            <h2 className="mt-3 text-4xl font-black text-zinc-950 dark:text-white">
              Hablemos
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-zinc-600 dark:text-zinc-300">
              Estoy disponible para practicas, oportunidades junior y proyectos
              donde pueda aportar, aprender y construir software con proposito.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com/in/claudia-tatiana-villamizar-marquez-aa2a7a277/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={contactButtonClass}
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-700 group-hover:translate-x-full dark:via-white/20" />
                <Linkedin size={20} className="relative transition-transform duration-300 group-hover:rotate-6" />
              </a>
              <a
                href="https://github.com/Tatii22"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={contactButtonClass}
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-700 group-hover:translate-x-full dark:via-white/20" />
                <Github size={20} className="relative transition-transform duration-300 group-hover:-rotate-6" />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copiar correo"
                title={copied ? "Correo copiado" : "Copiar correo"}
                className={contactButtonClass}
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-700 group-hover:translate-x-full dark:via-white/20" />
                {copied ? (
                  <Check size={20} className="relative text-[#D96F8D]" />
                ) : (
                  <Mail size={20} className="relative transition-transform duration-300 group-hover:scale-110" />
                )}
              </button>
              <span
                className={`text-sm font-semibold text-[#D96F8D] transition-all duration-300 dark:text-[#FFB5C5] ${
                  copied ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                }`}
                aria-live="polite"
              >
                Correo copiado
              </span>
            </div>
          </div>

          <div className="relative mx-auto grid aspect-square w-full max-w-[280px] place-items-center rounded-full">
            <div className="absolute inset-0 rounded-full bg-[#FFB5C5]/25 blur-3xl animate-avatar-pulse" />
            <div className="absolute inset-4 rounded-full border border-dashed border-[#FFB5C5]/50 animate-avatar-spin-slow" />
            <img
              src="/img/yo.png"
              alt="Tatiana Villamizar"
              className="relative z-10 size-56 rounded-full object-cover object-center ring-8 ring-white/90 shadow-2xl shadow-[#FFB5C5]/20 transition-all duration-500 animate-avatar-float hover:scale-105 hover:ring-[#FFB5C5]/70 dark:ring-[#FFB5C5]/25 sm:size-64"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ContactFooter;
