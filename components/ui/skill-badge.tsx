import { type ReactNode } from "react";

interface SkillBadgeProps {
  icon: ReactNode;
  label: string;
}

export function SkillBadge({ icon, label }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md bg-slate-800/70 px-3 py-1.5 text-sm text-slate-300">
      <span className="text-base leading-none">{icon}</span>
      {label}
    </span>
  );
}
