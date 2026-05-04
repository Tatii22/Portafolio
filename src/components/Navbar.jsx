import { Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

function Navbar({ isDark, onToggleTheme }) {
  const [activeSection, setActiveSection] = useState("inicio");
  const pendingSectionRef = useRef(null);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const updateActiveSection = () => {
      if (pendingSectionRef.current) {
        const pendingSection = document.getElementById(pendingSectionRef.current);
        const pendingTop = pendingSection?.getBoundingClientRect().top ?? 0;

        if (Math.abs(pendingTop) < 140) {
          pendingSectionRef.current = null;
        } else {
          return;
        }
      }

      const scrollTop = window.scrollY;
      const scrollPosition = scrollTop + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (documentHeight - scrollPosition < 80) {
        setActiveSection("contacto");
        return;
      }

      const viewportAnchor = scrollTop + window.innerHeight * 0.45;
      let currentSection = sections[0];

      sections.forEach((section) => {
        if (section.offsetTop <= viewportAnchor) {
          currentSection = section;
        }
      });

      if (currentSection?.id) {
        setActiveSection(currentSection.id);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavigation = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);

    if (!section) return;

    pendingSectionRef.current = sectionId;
    setActiveSection(sectionId);
    window.history.pushState(null, "", `#${sectionId}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });

    window.setTimeout(() => {
      if (pendingSectionRef.current === sectionId) {
        pendingSectionRef.current = null;
      }
    }, 900);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-[#F8F8F8]/85 backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-[#121212]/85">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          onClick={(event) => handleNavigation(event, "inicio")}
          className="flex items-center gap-3"
        >
          <span className="grid size-11 place-items-center rounded-2xl bg-[#FFB5C5] text-sm font-black text-zinc-900 shadow-lg shadow-[#FFB5C5]/25 dark:bg-[#FFB5C5] dark:shadow-[#FFB5C5]/20">
            TV
          </span>
          <span className="hidden text-sm font-semibold text-zinc-600 dark:text-zinc-300 sm:block">
            Tatiana Villamizar
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-zinc-200 bg-white/70 p-1 shadow-sm dark:border-white/10 dark:bg-white/5 md:flex">
          {links.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavigation(event, sectionId)}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#FFB5C5] text-zinc-950 shadow-sm shadow-[#FFB5C5]/30 dark:bg-[#FFB5C5] dark:text-zinc-950"
                    : "text-zinc-600 hover:bg-[#FFB5C5]/25 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-[#FFB5C5]/15 dark:hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
          className="grid size-11 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-800 shadow-sm transition-all duration-300 hover:scale-102 hover:bg-[#FFB5C5]/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-[#FFB5C5]/20"
        >
          {isDark ? <Sun size={19} /> : <Moon size={19} />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
