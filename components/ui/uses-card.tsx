import { type ReactNode } from "react";

interface UsesCardProps {
  title: string;
  children: ReactNode;
}

export function UsesCard({ title, children }: UsesCardProps) {
  return (
    <div className="rounded-lg border border-slate-700/60 p-6">
      <h3 className="mb-4 text-lg font-bold text-white">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

interface UsesItemProps {
  label: string;
  value: string;
  href?: string;
}

export function UsesItem({ label, value, href }: UsesItemProps) {
  return (
    <p className="text-sm text-slate-400">
      <span className="font-bold text-slate-300">{label}</span>
      <span className="mx-1">-</span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 transition-colors hover:text-white"
        >
          {value}
        </a>
      ) : (
        <span>{value}</span>
      )}
    </p>
  );
}
