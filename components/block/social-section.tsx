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
          href="https://twitter.com"
          icon={<FaXTwitter />}
          label="Twitter"
        />
        <SocialLink
          href="https://github.com"
          icon={<FaGithub />}
          label="GitHub"
        />
        <SocialLink
          href="https://reddit.com"
          icon={<FaRedditAlien />}
          label="Reddit"
        />
        <SocialLink
          href="https://linkedin.com"
          icon={<FaLinkedinIn />}
          label="LinkedIn"
        />
        <SocialLink
          href="https://upwork.com"
          icon={<SiUpwork />}
          label="Upwork"
        />
      </div>
    </section>
  );
}
