import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRadixui,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSupabase,
  SiVite,
  SiDocker,
  SiGit,
  SiGithub,
  SiOpenai,
  SiSqlalchemy,
  SiFigma,
  SiFastapi,
  SiPydantic,
  SiTyper,
  SiRust,
  SiPython,
} from "react-icons/si";
import { Flame, LayoutGrid, Box, PawPrint } from "lucide-react";
import { SkillBadge } from "@/components/ui/skill-badge";

const skills = [
  { icon: <SiNextdotjs className="text-white" />, label: "Next.js" },
  { icon: <SiReact className="text-cyan-400" />, label: "React" },
  { icon: <SiTypescript className="text-blue-400" />, label: "Typescript" },
  { icon: <SiJavascript className="text-yellow-400" />, label: "Javascript" },
  { icon: <SiPython className="text-emerald-400" />, label: "Python" },
  { icon: <SiRust className="text-orange-400" />, label: "Rust" },
  { icon: <PawPrint size={16} className="text-amber-600" />, label: "Zustand" },
  { icon: <SiTailwindcss className="text-cyan-400" />, label: "Tailwind" },
  { icon: <LayoutGrid size={16} className="text-white" />, label: "shadcn/ui" },
  { icon: <SiRadixui className="text-white" />, label: "Radix" },
  { icon: <SiNodedotjs className="text-emerald-500" />, label: "Node" },
  { icon: <SiPostgresql className="text-blue-400" />, label: "Postgres" },
  { icon: <SiMongodb className="text-emerald-500" />, label: "MongoDB" },
  { icon: <SiRedis className="text-red-500" />, label: "Redis" },
  { icon: <SiSupabase className="text-emerald-400" />, label: "Supabase" },
  { icon: <SiVite className="text-purple-400" />, label: "Vite" },
  { icon: <SiDocker className="text-blue-400" />, label: "Docker" },
  { icon: <SiGit className="text-orange-500" />, label: "Git" },
  { icon: <SiGithub className="text-white" />, label: "GitHub" },
  { icon: <SiOpenai className="text-emerald-400" />, label: "ChatGPT" },
  { icon: <SiFigma className="text-pink-400" />, label: "Figma" },
  { icon: <SiFastapi className="text-emerald-400" />, label: "FastAPI" },
  { icon: <SiSqlalchemy className="text-blue-400" />, label: "SQLAlchemy" },
  { icon: <SiPydantic className="text-blue-400" />, label: "Pydantic" },
  { icon: <SiTyper className="text-blue-400" />, label: "Typer" },
];

export function SkillsSection() {
  return (
    <section className="py-8" id="skills">
      <h2 className="text-xl font-bold text-white">Skills</h2>

      <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-400">
        Here are the frameworks, libraries, services and runtimes I have
        experience with. This is not a complete list! I&apos;m constantly gaining
        new skills, and hence it can be a little bit outdated.
      </p>

      <div className="mt-6 flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <SkillBadge key={skill.label} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </section>
  );
}
