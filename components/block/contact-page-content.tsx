import { WavyLine } from "@/components/ui/wavy-line";

export function ContactPageContent() {
  return (
    <section className="pb-10 pt-16 md:pt-24">
      <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        Get in touch
      </h1>

      <p className="mt-3 text-base leading-relaxed text-slate-400">
        Do you have an exciting project? Let&apos;s talk!
      </p>

      <div className="mt-6">
        <WavyLine />
      </div>

      <div className="mt-10 space-y-1 text-base leading-relaxed text-slate-400">
        <p>
          You can reach me out anytime at{" "}
          <a
            href="mailto:hello@hudovich.dev"
            className="font-bold text-white underline underline-offset-4 transition-colors hover:text-amber-500"
          >
            hello@hudovich.dev
          </a>
        </p>
        <p>
          As a backup option, you can{" "}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white underline underline-offset-4 transition-colors hover:text-amber-500"
          >
            DM me on X
          </a>
        </p>
      </div>

      <p className="mt-6 text-base text-slate-400">
        I usually respond right away on business days.
      </p>
    </section>
  );
}
