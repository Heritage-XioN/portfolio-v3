import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { SunMoon } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { NavLink } from "@/components/ui/nav-link";

export function Navbar() {
  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Logo />

        <div className="flex items-center gap-7">
          <NavLink href="/resume">Resume</NavLink>
          <NavLink href="/contact">Contact</NavLink>

          <div className="flex items-center gap-4 border-l border-slate-700 pl-5">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-white"
              aria-label="Twitter"
            >
              <FaXTwitter size={15} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub size={15} />
            </a>
            <button
              className="text-slate-400 transition-colors hover:text-white"
              aria-label="Toggle theme"
            >
              <SunMoon size={15} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
