import { Navbar } from "@/components/block/navbar";
import { NotFoundContent } from "@/components/block/not-found-content";
import { Footer } from "@/components/block/footer";

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B1121]">
      <Navbar />

      <main className="mx-auto w-full max-w-2xl flex-1 px-6">
        <NotFoundContent />
      </main>

      <Footer />
    </div>
  );
}
