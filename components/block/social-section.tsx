import {
  FaXTwitter,
  FaGithub,
  FaRedditAlien,
  FaLinkedinIn,
} from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import { SocialLink } from "@/components/ui/social-link";

export function SocialSection() {
  return (
    <section className="py-6">
      <h2 className="text-base font-bold text-white">Find me on</h2>

      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
        <SocialLink
          href="https://x.com/Heritage_X0"
          icon={<FaXTwitter />}
          label="Twitter"
        />
        <SocialLink
          href="https://github.com/Heritage-XioN"
          icon={<FaGithub />}
          label="GitHub"
        />
        <SocialLink
          href="https://reddit.com"
          icon={<FaRedditAlien />}
          label="Reddit"
        />
        <SocialLink
          href="https://linkedin.com/heritage-iyoke"
          icon={<FaLinkedinIn />}
          label="LinkedIn"
        />
        <SocialLink
          href="https://www.upwork.com/freelancers/~011d7f73241fdb1961"
          icon={<SiUpwork />}
          label="Upwork"
        />
      </div>
    </section>
  );
}
