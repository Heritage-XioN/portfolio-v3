import { Navbar } from "@/components/block/navbar";
import { ContactPageContent } from "@/components/block/contact-page-content";
import { Footer } from "@/components/block/footer";

export function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B1121]">
      <Navbar />

      <main className="mx-auto w-full max-w-2xl flex-1 px-6">
        <ContactPageContent />
      </main>

      <Footer />
    </div>
  );
}
