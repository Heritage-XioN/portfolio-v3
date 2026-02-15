import { WavyLine } from "@/components/ui/wavy-line";

export function UsesHeader() {
  return (
    <section className="pb-10 pt-16 md:pt-24">
      <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        Uses
      </h1>

      <p className="mt-3 text-base leading-relaxed text-slate-400">
        The stuff I use on my day-to-day basis.
      </p>

      <div className="mt-6">
        <WavyLine />
      </div>
    </section>
  );
}
