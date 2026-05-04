import { useEffect, useState } from "react";
import ContactFooter from "./components/ContactFooter.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import ProjectsCarousel from "./components/ProjectsCarousel.jsx";
import SkillsGrid from "./components/SkillsGrid.jsx";

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-[#F8F8F8] font-sans text-zinc-800 transition-all duration-300 dark:bg-[#121212] dark:text-zinc-100">
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
        <Hero />
        <SkillsGrid />
        <ProjectsCarousel />
      </main>

      <ContactFooter />
    </div>
  );
}

export default App;
