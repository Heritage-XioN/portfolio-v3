import { Navbar } from "@/components/block/navbar";
import { UsesHeader } from "@/components/block/uses-header";
import { UsesContent } from "@/components/block/uses-content";
import { Footer } from "@/components/block/footer";

export function UsesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B1121]">
      <Navbar />

      <main className="mx-auto w-full max-w-2xl flex-1 px-6">
        <UsesHeader />
        <UsesContent />
      </main>

      <Footer />
    </div>
  );
}
