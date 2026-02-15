import { Snowflake, Flag } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <p className="text-sm text-slate-500">
          © 2024 Built with{" "}
          <span className="text-red-500" aria-label="love">
            ❤
          </span>{" "}
          by Andrei Hudovich
        </p>

        <div className="flex items-center gap-5 text-sm text-slate-500">
          <a
            href="#"
            className="transition-colors hover:text-white"
          >
            Uses
          </a>
          <a
            href="#"
            className="transition-colors hover:text-white"
          >
            Tech Stack
          </a>
          <a
            href="#"
            className="transition-colors hover:text-white"
            aria-label="Astro"
          >
            <Snowflake size={14} />
          </a>
          <a
            href="#"
            className="transition-colors hover:text-white"
            aria-label="Flag"
          >
            <Flag size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
