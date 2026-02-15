export function ContactSection() {
  return (
    <section className="py-6">
      <h2 className="text-base font-bold text-white">Contact</h2>

      <p className="mt-2 text-sm text-slate-400 md:text-base">
        You can reach me out anytime at{" "}
        <a
          href="mailto:xheriage2001@outlook.com"
          className="font-semibold text-white underline underline-offset-4 transition-colors hover:text-amber-500"
        >
          xheriage2001@outlook.com
        </a>
      </p>
    </section>
  );
}
