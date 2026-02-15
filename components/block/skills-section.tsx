import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiRadixui,
  SiVuedotjs,
  SiNuxtdotjs,
  SiAstro,
  SiNodedotjs,
  SiBun,
  SiCloudflare,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSupabase,
  SiFastify,
  SiVite,
  SiTurborepo,
  SiDocker,
  SiGit,
  SiGithub,
  SiSanity,
  SiOpenai,
  SiMapbox,
  SiFigma,
} from "react-icons/si";
import { Flame, LayoutGrid, Box, PawPrint } from "lucide-react";
import { SkillBadge } from "@/components/ui/skill-badge";

const skills = [
  { icon: <SiNextdotjs className="text-white" />, label: "Next.js" },
  { icon: <SiReact className="text-cyan-400" />, label: "React" },
  { icon: <SiTypescript className="text-blue-400" />, label: "Typescript" },
  { icon: <SiJavascript className="text-yellow-400" />, label: "Javascript" },
  { icon: <PawPrint size={16} className="text-amber-600" />, label: "Zustand" },
  { icon: <SiRedux className="text-purple-400" />, label: "Redux" },
  { icon: <SiTailwindcss className="text-cyan-400" />, label: "Tailwind" },
  { icon: <LayoutGrid size={16} className="text-white" />, label: "shadcn/ui" },
  { icon: <SiRadixui className="text-white" />, label: "Radix" },
  { icon: <SiVuedotjs className="text-emerald-400" />, label: "Vue" },
  { icon: <SiNuxtdotjs className="text-emerald-400" />, label: "Nuxt" },
  { icon: <SiAstro className="text-orange-400" />, label: "Astro" },
  { icon: <SiNodedotjs className="text-emerald-500" />, label: "Node" },
  { icon: <SiBun className="text-amber-200" />, label: "Bun" },
  { icon: <SiCloudflare className="text-orange-400" />, label: "Workers" },
  { icon: <SiPostgresql className="text-blue-400" />, label: "Postgres" },
  { icon: <SiMongodb className="text-emerald-500" />, label: "MongoDB" },
  { icon: <SiRedis className="text-red-500" />, label: "Redis" },
  { icon: <SiSupabase className="text-emerald-400" />, label: "Supabase" },
  { icon: <SiFastify className="text-white" />, label: "Fastify" },
  { icon: <Flame size={16} className="text-orange-500" />, label: "Hono" },
  { icon: <SiVite className="text-purple-400" />, label: "Vite" },
  { icon: <SiTurborepo className="text-white" />, label: "Turborepo" },
  { icon: <SiDocker className="text-blue-400" />, label: "Docker" },
  { icon: <SiGit className="text-orange-500" />, label: "Git" },
  { icon: <SiGithub className="text-white" />, label: "GitHub" },
  { icon: <Box size={16} className="text-white" />, label: "Payload" },
  { icon: <SiSanity className="text-red-500" />, label: "Sanity" },
  { icon: <SiOpenai className="text-emerald-400" />, label: "ChatGPT" },
  { icon: <LayoutGrid size={16} className="text-blue-400" />, label: "AG-Grid" },
  { icon: <SiMapbox className="text-blue-400" />, label: "Mapbox" },
  { icon: <SiFigma className="text-pink-400" />, label: "Figma" },
];

export function SkillsSection() {
  return (
    <section className="py-8">
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
