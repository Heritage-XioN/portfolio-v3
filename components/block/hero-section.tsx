import { WavyLine } from "@/components/ui/wavy-line";

export function HeroSection() {
  return (
    <section className="pb-10 pt-16 md:pt-24">
      <h1 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
        Hey, I&apos;m <span className="text-amber-500">Andrei Hudovich</span>!
      </h1>

      <div className="mt-5 space-y-0.5 text-base leading-relaxed text-slate-400 md:text-lg">
        <p>
          A freelance full-stack engineer based in{" "}
          <a
            href="#"
            className="text-slate-300 underline underline-offset-4 transition-colors hover:text-white"
          >
            Wroclaw
          </a>
          , Poland.
        </p>
        <p>
          I specialize in developing applications using React ecosystem.
        </p>
        <p>
          Currently, I&apos;m leading the front-end team at{" "}
          <a
            href="#"
            className="text-slate-300 underline underline-offset-4 transition-colors hover:text-white"
          >
            Propbar
          </a>
          .
        </p>
      </div>

      <div className="mt-8">
        <WavyLine />
      </div>
    </section>
  );
}
