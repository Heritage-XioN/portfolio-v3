import { Navbar } from "@/components/block/navbar";
import { HeroSection } from "@/components/block/hero-section";
import { SocialSection } from "@/components/block/social-section";
import { ContactSection } from "@/components/block/contact-section";
import { Footer } from "@/components/block/footer";

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B1121]">
      <Navbar />

      <main className="mx-auto w-full max-w-2xl flex-1 px-6">
        <HeroSection />
        <SocialSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
