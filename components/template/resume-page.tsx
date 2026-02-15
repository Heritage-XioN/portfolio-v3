import { Navbar } from "@/components/block/navbar";
import { ResumeHeader } from "@/components/block/resume-header";
import { SkillsSection } from "@/components/block/skills-section";
import { WorkHistorySection } from "@/components/block/work-history-section";
import { Footer } from "@/components/block/footer";

export function ResumePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B1121]">
      <Navbar />

      <main className="mx-auto w-full max-w-2xl flex-1 px-6">
        <ResumeHeader />
        <SkillsSection />
        <WorkHistorySection />
      </main>

      <Footer />
    </div>
  );
}
