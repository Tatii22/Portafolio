import {
  Code2,
  Database,
  ServerCog,
  TerminalSquare,
  Wrench,
} from "lucide-react";
import { skills } from "../data/portfolio.js";

const iconByTitle = {
  Frontend: Code2,
  Backend: ServerCog,
  Herramientas: Wrench,
};

const iconBySkill = {
  MySQL: Database,
  Linux: TerminalSquare,
};

function SkillsGrid() {
  return (
    <section id="habilidades" className="scroll-mt-24">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D96F8D] dark:text-[#FFB5C5]">
            Stack
          </p>
          <h2 className="mt-2 text-3xl font-black text-zinc-950 dark:text-white sm:text-4xl">
            Habilidades
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {skills.map((group, groupIndex) => {
          const GroupIcon = iconByTitle[group.title];

          return (
            <article
              key={group.title}
              style={{ animationDelay: `${groupIndex * 140}ms` }}
              className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-[8px_8px_30px_rgba(0,0,0,0.06),-8px_-8px_30px_rgba(255,255,255,0.95)] transition-all duration-300 animate-skill-card hover:-translate-y-2 hover:scale-102 hover:border-[#FFB5C5]/60 hover:shadow-[0_22px_50px_rgba(255,181,197,0.22)] dark:border-white/10 dark:bg-[#1A1A1A] dark:shadow-none dark:hover:border-[#FFB5C5]/40"
            >
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-xl font-extrabold text-zinc-950 dark:text-white">
                  {group.title}
                </h3>
                <span className="grid size-12 place-items-center rounded-2xl bg-[#FFB5C5]/30 text-zinc-800 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#FFB5C5]/60 dark:bg-[#FFB5C5]/15 dark:text-[#FFB5C5]">
                  <GroupIcon size={22} />
                </span>
              </div>

              <div className="grid gap-3">
                {group.items.map((item, itemIndex) => {
                  const SkillIcon = iconBySkill[item] ?? Code2;

                  return (
                    <div
                      key={item}
                      style={{
                        animationDelay: `${220 + groupIndex * 130 + itemIndex * 80}ms`,
                      }}
                      className="relative flex items-center gap-3 overflow-hidden rounded-2xl border border-zinc-100 bg-[#F8F8F8] px-4 py-3 text-sm font-semibold text-zinc-700 transition-all duration-300 animate-skill-chip hover:translate-x-2 hover:border-[#FFB5C5]/60 hover:bg-[#FFB5C5]/20 hover:shadow-md hover:shadow-[#FFB5C5]/15 dark:border-white/10 dark:bg-[#202020] dark:text-zinc-200 dark:hover:bg-[#FFB5C5]/15"
                    >
                      <span className="absolute inset-y-0 left-0 w-1 bg-[#FFB5C5] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <SkillIcon
                        size={17}
                        className="text-[#D96F8D] transition-all duration-300 group-hover:scale-110 dark:text-[#FFB5C5]"
                      />
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsGrid;
