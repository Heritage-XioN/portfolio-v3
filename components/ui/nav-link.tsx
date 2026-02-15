import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-xs font-semibold uppercase tracking-widest text-slate-300 transition-colors hover:text-white"
    >
      {children}
    </Link>
  );
}
