import { type ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
    >
      <span className="text-base">{icon}</span>
      <span>{label}</span>
    </a>
  );
}
