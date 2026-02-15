import { WavyLine } from "@/components/ui/wavy-line";
import { NotFoundIllustration } from "@/components/ui/not-found-illustration";

export function NotFoundContent() {
  return (
    <section className="pb-10 pt-16 md:pt-24">
      <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        Page Not Found
      </h1>

      <p className="mt-3 text-base leading-relaxed text-slate-400">
        Sorry, the page you are looking for doesn&apos;t exist :(
      </p>

      <div className="mt-6">
        <WavyLine />
      </div>

      <NotFoundIllustration />
    </section>
  );
}
